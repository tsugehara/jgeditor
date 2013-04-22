module jgeditor {
    class ConsoleLogger {
        public information(): bool;
        public debug(): bool;
        public warning(): bool;
        public error(): bool;
        public fatal(): bool;
        public log(s: string): void;
    }
    class SimpleBuffer {
        public name: string;
        public useUTF8encoding: bool;
        public buf: string[];
        constructor(name: string, useUTF8encoding: bool);
        public Write(s: string): bool;
        public WriteLine(s: string): bool;
        public Close(): void;
        public Clear(): void;
        public toString(): string;
        public hasData(): bool;
    }
    class DefineLoader {
        public d: {
            [key: string]: string;
        };
        public loadCount: number;
        public onload: () => void;
        constructor();
        public load(name: string, path?: string): void;
    }
    class IOHost {
        public result: SimpleBuffer[];
        constructor();
        public createFile(fileName: string, useUTF8encoding: bool): SimpleBuffer;
        public directoryExists(fname: string): bool;
        public fileExists(fname: string): bool;
        public resolvePath(fname: string): string;
        public toString(): string;
    }
}
