import Reflect from '../Reflect';
import { IClientOptions } from './client';
import { ClientConstants } from './constants';
import { IQueryParamOptions } from './queryParam';
import { v4 } from 'uuid';

import CustomFetchResponse = twoa.client.CustomFetchResponse;

interface IMappingOptions {
    method: string;
    value: string;
    blob?: boolean;
    stream?: boolean;
    produces?: string;
    interceptors?: (() => RequestInit)[];
    before?(init: RequestInit, id: string): void;
    after?(response: Response | CustomFetchResponse<any> | Error, id: string): void;
    fetch?<T>(input: RequestInfo, init?: RequestInit): Promise<CustomFetchResponse<T>>;
}

export default ({ method, value, blob, stream, produces, interceptors, before, after, fetch }: IMappingOptions): MethodDecorator => (t: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const target = t.prototype ?? t;
    // tslint:disable-next-line:cyclomatic-complexity
    descriptor.value = async <T>(...args: any[]): Promise<T | Blob | ReadableStream<Uint8Array>> => {
        const clientOptions: IClientOptions = Reflect.getMetadata(ClientConstants.ClientOptions, target);
        if (!clientOptions) {
            throw new Error(`Client options not defined for ${target}`);
        }

        let path = value;
        let body;
        const query: Record<string, any> = {};
        const headers = new Headers();
        const inits: RequestInit[] = [];

        const pathParams: Map<number, string> = Reflect.getMetadata(ClientConstants.PathParams, target, propertyKey);
        const queryParams: Map<number, string | IQueryParamOptions> = Reflect.getMetadata(ClientConstants.QueryParams, target, propertyKey);
        const headerParams: Map<number, string> = Reflect.getMetadata(ClientConstants.HeaderParams, target, propertyKey);
        const formParams: Map<number, string> = Reflect.getMetadata(ClientConstants.FormParams, target, propertyKey);
        const bodyParams: Set<number> = Reflect.getMetadata(ClientConstants.BodyParams, target, propertyKey);
        const initOptions: Set<number> = Reflect.getMetadata(ClientConstants.InitOptions, target, propertyKey);

        if (bodyParams?.size > 1) {
            throw new Error('Only a single body param may be used.');
        }

        if (formParams?.size > 0 && bodyParams?.size > 0) {
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
                if (!body || !(body instanceof FormData)) {
                    body = new FormData();
                }
                const name = formParams.get(i);
                body.append(name, current);

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

            if (initOptions?.has(i) && current) {
                inits.push(current);
            }
        }

        if (headers.get('content-type') === 'multipart/form-data' && body instanceof FormData) {
            // delete form-data content type header -- fetch will set this for us with the proper boundary value
            headers.delete('content-type');
        }

        const url = new URL(path, clientOptions.baseUrl());
        for (const [ name, value ] of Object.entries(query)) {
            url.searchParams.append(name, value);
        }

        const init = [ ...interceptors ?? [], ...clientOptions.interceptors ?? [] ]
            .map(item => item())
            .concat(...inits)
            .reduce((acc: RequestInit, cur: RequestInit) => ({ ...acc, ...cur, headers: mergeHeaders(acc.headers, cur.headers) }),
                { method, headers, body });

        const id = v4();
        before?.(init, id);
        clientOptions.before?.(init, id);

        const f = fetch ?? clientOptions.fetch ?? window.fetch;
        if (f !== window.fetch) {
            // copy headers to a plain object when using a custom fetch function
            init.headers = [ ...init.headers as unknown as IterableIterator<[string, string]> ].reduce((acc, [ key, value ]) => ({ ...acc, [key]: value }), {});
        }

        let response: Response | CustomFetchResponse<T>;
        try {
            response = await f(url.toString(), init);
        } catch (error) {
            after?.(error, id);
            clientOptions.after?.(error, id);
            throw error;
        }

        after?.(response, id);
        clientOptions.after?.(response, id);
        const isJson = response.headers.get('content-type')?.includes('application/json');
        if (response.ok || response.redirected) {
            if (f !== window.fetch) {
                return (response as CustomFetchResponse<T>).data;
            } else {
                const body = response as Body;
                return blob ? body.blob() : stream ? body.body : isJson ? body.json() : body.text();
            }
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
