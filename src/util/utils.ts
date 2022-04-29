import IFlattenOptions = twoa.util.IFlattenOptions;

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
