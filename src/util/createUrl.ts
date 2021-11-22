export function createUrl(baseUrl: string, path: string, params: Record<string, any> = {}): string {
    const url = new URL(path, baseUrl);

    for (const [ name, value ] of Object.entries(params)) {
        url.searchParams.append(name, value);
    }

    return url.toString();
}
