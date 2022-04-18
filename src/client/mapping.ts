import Reflect from '../Reflect';
import { IClientOptions } from './client';
import { ClientConstants } from './constants';
import { HttpMethod } from './HttpMethod';
import { IQueryParamOptions } from './queryParam';
import { v4 } from 'uuid';

import CustomFetchResponse = twoa.client.CustomFetchResponse;

interface IMappingOptions {
    method: HttpMethod;
    value: string;
    blob?: boolean;
    stream?: boolean;
    response?: boolean;
    produces?: string;
    consumes?: string;
    throws?: boolean;
    cache?: string;
    fromCache?: boolean;
    cacheQueryOptions?: CacheQueryOptions;
    cacheMissBehavior?: 'fetch' | 'return';
    interceptors?: (() => RequestInit)[];
    before?(init: RequestInit, id: string): void;
    after?(response: Response | CustomFetchResponse<any> | Error, id: string): void;
    fetch?<T>(input: RequestInfo, init?: RequestInit): Promise<CustomFetchResponse<T>>;
}

export default ({ method, value, blob, stream, response, produces, consumes, throws = true, cache, fromCache, cacheQueryOptions, cacheMissBehavior = 'fetch', interceptors, before, after, fetch }: IMappingOptions): MethodDecorator => (t: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const target = t.prototype ?? t;

    descriptor.value = async <T>(...args: any[]): Promise<T | Blob | ReadableStream<Uint8Array> | Response | CustomFetchResponse<T>> => {
        const clientOptions: IClientOptions = Reflect.getMetadata(ClientConstants.ClientOptions, target);
        if (!clientOptions) {
            throw new Error(`Client options not defined for ${target}`);
        }

        const { body, headers, inits, url } = processArgs(target, propertyKey, args, clientOptions.baseUrl(), value, produces, consumes);
        const init = buildRequestInit(interceptors, clientOptions, inits, method, headers, body);
        const id = executeBefore(before, init, clientOptions);

        const cacheName = cache ?? clientOptions.cache;
        const cacheStore = cacheName ? await window.caches.open(cacheName) : undefined;
        const customFetch = fetch ?? clientOptions.fetch;
        const request = new Request(url.toString(), init);
        let resp: Response | CustomFetchResponse<T>;

        try {
            if (fromCache) {
                resp = await cacheStore.match(request, cacheQueryOptions);

                if (!resp) {
                    switch (cacheMissBehavior) {
                        case 'return': return;
                        case 'fetch':
                        default:
                            fromCache = false;
                            resp = await window.fetch(request);
                    }
                }
            } else if (customFetch) {
                // copy headers to a plain object when using a custom fetch function
                init.headers = headersToObject(init.headers);
                resp = await customFetch(url.toString(), init);
            } else {
                resp = await window.fetch(request);
            }
        } catch (error) {
            executeAfter(after, error, id, clientOptions);
            throw error;
        }

        executeAfter(after, resp, id, clientOptions);

        const isJson = resp.headers.get('content-type')?.includes('application/json');

        if (resp.ok || resp.redirected) {
            if (!fromCache && cacheStore && resp instanceof Response) {
                const clone = resp.clone();
                await cacheStore.put(resp.url, clone);
            }

            if (customFetch) {
                return (resp as CustomFetchResponse<T>).data;
            } else {
                const body = resp as Body;
                return response ? body : blob ? body.blob() : stream ? body.body : isJson ? body.json() : body.text();
            }
        } else if (throws) {
            throw resp;
        } else {
            return resp;
        }
    };
};

// tslint:disable-next-line:cyclomatic-complexity
function processArgs(target: any, propertyKey: string | symbol, args: any[], baseUrl: string, path: string, produces: string, consumes: string) {
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

    const inits: RequestInit[] = [];
    const headers = new Headers();
    const query: Record<string, any> = {};
    let body: FormData | string | Blob;

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

    if (consumes) {
        headers.set('accept', consumes);
    }

    const url = new URL(path, baseUrl);
    for (const [ name, value ] of Object.entries(query)) {
        url.searchParams.append(name, value);
    }

    return { body, headers, inits, url };
}

function executeBefore(before: (init: RequestInit, id: string) => void, init: RequestInit, clientOptions: IClientOptions) {
    const id = v4();
    before?.(init, id);
    clientOptions.before?.(init, id);
    return id;
}

function executeAfter<T>(after: (response: (Response | CustomFetchResponse<T> | Error), id: string) => void, resp: Error | Response | CustomFetchResponse<T>, id: string, clientOptions: IClientOptions) {
    after?.(resp, id);
    clientOptions.after?.(resp, id);
}

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

function headersToObject(headers: HeadersInit): Record<string, string> {
    return [ ...headers as unknown as IterableIterator<[ string, string ]> ].reduce((acc, [ key, value ]) => ({ ...acc, [key]: value }), {});
}

function buildRequestInit(interceptors: IMappingOptions['interceptors'], clientOptions: IClientOptions, inits: RequestInit[], method: HttpMethod, headers: Headers, body: FormData | string | Blob) {
    return [ ...interceptors ?? [], ...clientOptions.interceptors ?? [] ]
        .map(item => item())
        .concat(...inits)
        .reduce((acc: RequestInit, cur: RequestInit) => ({
                ...acc, ...cur,
                headers: mergeHeaders(acc.headers, cur.headers)
            }),
            { method, headers, body });
}
