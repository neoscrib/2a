import Reflect from '../Reflect';
import { createUrl } from '../util';
import { IClientOptions } from './client';
import { ClientConstants } from './constants';
import { IQueryParamOptions } from './queryParam';

interface IMappingOptions {
    method: string;
    value: string;
    blob?: boolean;
    produces?: string;
    interceptors?: (() => RequestInit)[];
}

export default ({ method, value, blob, produces, interceptors }: IMappingOptions): MethodDecorator => (t: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const target = t.prototype ?? t;
    // tslint:disable-next-line:cyclomatic-complexity
    descriptor.value = async <T>(...args: any[]): Promise<T | Blob> => {
        const clientOptions: IClientOptions = Reflect.getMetadata(ClientConstants.ClientOptions, target);
        if (!clientOptions) {
            throw new Error(`Client options not defined for ${target}`);
        }

        let path = value;
        let body;
        const form = new FormData();
        const query: Record<string, any> = {};
        const headers = new Headers();

        const pathParams: Map<number, string> = Reflect.getMetadata(ClientConstants.PathParams, target, propertyKey);
        const queryParams: Map<number, string | IQueryParamOptions> = Reflect.getMetadata(ClientConstants.QueryParams, target, propertyKey);
        const headerParams: Map<number, string> = Reflect.getMetadata(ClientConstants.HeaderParams, target, propertyKey);
        const formParams: Map<number, string> = Reflect.getMetadata(ClientConstants.FormParams, target, propertyKey);
        const bodyParams: Set<number> = Reflect.getMetadata(ClientConstants.BodyParams, target, propertyKey);

        if (bodyParams.size > 1) {
            throw new Error('Only a single body param may be used.');
        }

        if (formParams.size > 0 && bodyParams.size > 0) {
            throw new Error('Only form params or a body param may be used, but not both.');
        }

        for (let i = 0; i < args.length; i++) {
            const current = args[i];

            if (pathParams?.has(i)) {
                const name = pathParams.get(i);
                const replacementPath = path.replaceAll(`{${name}}`, current);
                if (replacementPath === path) {
                    throw new Error(`Path param '${name}' not found in path spec`);
                }
                path = replacementPath;
            }

            if (queryParams?.has(i)) {
                const options = queryParams.get(i);
                if (typeof options === 'string') {
                    query[options] = current;
                } else if ((options.required ?? true) || (current !== null && current !== undefined)) {
                    query[options.name] = current;
                }
            }

            if (headerParams?.has(i)) {
                const name = headerParams.get(i);
                if (name.toLowerCase() === 'content-type' || name.toLowerCase() === 'authorization') {
                    headers.set(name, current);
                } else {
                    headers.append(name, current);
                }
            }

            if (formParams?.has(i)) {
                const name = formParams.get(i);
                form.append(name, current);

                const contentType = produces ?? 'multipart/form-data';
                if (!headers.has('content-type')) {
                    headers.set('content-type', contentType);
                }
            }

            if (bodyParams?.has(i)) {
                let contentType;
                if (current instanceof Blob) {
                    body = current;
                    contentType = current.type;
                } else if (current instanceof FormData) {
                    body = current;
                    contentType = 'multipart/form-data';
                } else if (current instanceof URLSearchParams) {
                    body = current;
                    contentType = 'application/x-www-form-urlencoded';
                } else if (typeof current === 'object') {
                    body = JSON.stringify(current);
                    contentType = 'application/json';
                } else {
                    body = String(current);
                    contentType = 'text/plain';
                }

                contentType = produces ?? contentType;
                if (contentType && !headers.has('content-type')) {
                    headers.set('content-type', contentType);
                }
            }
        }

        const url = createUrl(clientOptions.baseUrl(), path, query);

        const init = [ ...interceptors ?? [], ...clientOptions.interceptors ?? [] ]
            .map(item => item())
            .reduce((acc: RequestInit, cur: RequestInit) => ({ ...acc, ...cur, headers: mergeHeaders(acc.headers, cur.headers) }),
                { method, headers, body });

        const response = await window.fetch(url, init);

        const isJson = response.headers.get('content-type')?.includes('application/json');
        if (response.ok || response.redirected) {
            return blob ? response.blob() : isJson ? response.json() : response.text();
        } else {
            throw response;
        }
    };
};

function mergeHeaders(a: HeadersInit, b: HeadersInit): Headers {
    const x = new Headers(a);
    const y = new Headers(b);
    for (const [ key, value ] of (y as unknown as IterableIterator<[string, string]>)) {
        const lower = key.toLowerCase();
        if (lower === 'content-type' || lower === 'authorization') {
            x.set(key, value);
        } else {
            x.append(key, value);
        }
    }
    return x;
}
