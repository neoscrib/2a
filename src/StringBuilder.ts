function last<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

export default class StringBuilder {
    private readonly content: string[] = [];
    private readonly indentConfig = {
        one: '    ',
        level: 0,
        content: ''
    };

    public constructor(content: string, indentSize: number = 4) {
        this.content.push(content);

        this.indentConfig.one = '';
        for (let i = 0; i < indentSize; i++) {
            this.indentConfig.one += ' ';
        }
    }

    public append(...content: string[]): this {
        this.content.push(...content.filter(item => item.length > 0));
        return this;
    }

    public appendLines(...content: string[]): this {
        for (const line of content) {
            this.content.push(line);
            this.newline();
        }

        return this;
    }

    public indent(): this {
        const previousIndentContent = this.indentConfig.content;

        this.indentConfig.level++;
        this.indentConfig.content += this.indentConfig.one;

        if (last(this.content).endsWith('\n')) {
            this.content.push(this.indentConfig.content);
        } else if (last(this.content).endsWith(previousIndentContent)) {
            this.content[this.content.length - 1] += this.indentConfig.one;
        }

        return this;
    }

    public outdent(): this {
        const previousIndentContent = this.indentConfig.content;

        this.indentConfig.level--;
        this.indentConfig.content = this.indentConfig.content.substring(0, this.indentConfig.content.length - this.indentConfig.one.length);

        if (last(this.content) === previousIndentContent) {
            this.content[this.content.length - 1] = this.indentConfig.content;
        }

        return this;
    }

    public newline(n: number = 1): this {
        for (let i = 0; i < n; i++) {
            this.content.push('\n');
        }
        this.content.push(this.indentConfig.content);
        return this;
    }

    public toString(): string {
        return this.content.join('');
    }

    public get length(): number {
        return this.toString().length;
    }
}
