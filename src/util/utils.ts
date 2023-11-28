import IFlattenOptions = twoa.util.IFlattenOptions;
import Lz from '../Lz';
import IUUIDOptions = twoa.util.IUUIDOptions;

export function createUrl(baseUrl: string, path: string, params: Record<string, any> = {}): string {
    const url = new URL(path, baseUrl);

    for (const [ name, value ] of Object.entries(params)) {
        url.searchParams.append(name, value);
    }

    return url.toString();
}

export function downloadFile(url: string): void;
export function downloadFile(content: Blob, filename: string): void;
export function downloadFile(content: string, filename: string, type: string): void;
export function downloadFile(content: Blob | string, filename?: string, type?: string): void {
    const a = document.createElement('a') as HTMLAnchorElement;
    if (typeof filename === 'string') {
        a.href = URL.createObjectURL(content instanceof Blob ? content : new Blob([ content ], { type }));
        a.download = filename;
    } else if (typeof content === 'string') {
        a.href = content;
    } else {
        throw new Error('Invalid arguments');
    }
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

export async function blobToObject<T>(blob: Blob): Promise<T> {
    const content = await blobToString(blob);
    return JSON.parse(content);
}

export function blobToString(blob: Blob, encoding?: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result as string));
        reader.addEventListener('error', reject);
        reader.readAsText(blob, encoding);
    });
}

export function flatten<T extends object, U>(obj: T, root = '', options?: IFlattenOptions): U {
    const result: any = {};
    for (const [ key, value ] of Object.entries(obj)) {
        const k = [ root, key ].filter(Boolean).join('.');
        if (options?.acceptKey?.(key, k) ?? true) {
            if (typeof value === 'object' && value !== null) {
                Object.assign(result, flatten(value, k, options));
            } else {
                result[k] = value;
            }
        }
    }
    return result as U;
}

export function deepEqual(a: any, b: any): boolean {
    if (a === b) {
        return true;
    }

    if (typeof a !== typeof b) {
        return false;
    }

    if (typeof a === 'object') {
        if (Array.isArray(a)) {
            if (Array.isArray(b)) {
                if (a.length !== b.length) {
                    return false;
                }

                for (let i = 0; i < a.length; i++) {
                    if (!deepEqual(a[i], b[i])) {
                        return false;
                    }
                }

                return true;
            }

            return false;
        } else {
            const c = Object.entries(a).sort();
            const d = Object.entries(b).sort();
            return deepEqual(c, d);
        }
    }

    return false;
}

const crypto = window?.crypto ?? global?.crypto;

export function uuid(options?: { binary?: false; native?: boolean; }): string;
export function uuid(options: { binary: true; native?: boolean }): Uint8Array;
export function uuid(options: IUUIDOptions): string | Uint8Array;
export function uuid({ binary = false, native = true }: IUUIDOptions = {}): string | Uint8Array {
    if (crypto) {
        if (!binary && native) {
            return crypto.randomUUID();
        }

        let arr = new Uint8Array(16);
        arr = crypto.getRandomValues(arr);
        arr[6] = (arr[6] & 0x0f) | 0x40;
        arr[8] = (arr[8] & 0x3f) | 0x80;

        return binary ? arr : canonicalizeUUID(arr);
    } else {
        console.warn("crypto doesn't exist!");
    }
}

const byteToHex = Lz.range(0x100, 256).select(n => n.toString(16).slice(1)).toArray();
export function canonicalizeUUID(buf: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | number[]): string {
    const [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p ] = [ ...buf ].map((n: number) => byteToHex[n]);
    return `${a}${b}${c}${d}-${e}${f}-${g}${h}-${i}${j}-${k}${l}${m}${n}${o}${p}`;
}
