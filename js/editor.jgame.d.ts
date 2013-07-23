declare module jgeditor {
    var file: string;
    class DefineLoader {
        public d: {
            [key: string]: string;
        };
        public loadCount: number;
        public onload: () => void;
        constructor();
        public load(name: string, path?: string): void;
    }
    class JgDiagnostics implements Services.ILanguageServicesDiagnostics {
        constructor();
        public log(content: string): void;
    }
    class LogSetting {
        public debug: boolean;
        public information: boolean;
        public warning: boolean;
        public error: boolean;
        public fatal: boolean;
        constructor();
    }
    class JgPlaygroundService {
        public factory: Services.TypeScriptServicesFactory;
        public service: Services.ILanguageService;
        public host: JgPlayground;
        public defines: string[];
        public beforeCharIndex: number;
        constructor(defines: string[], initScript?: string);
        public updateScript(script: string): void;
        public check(): string[];
        public build(): string;
        public getSignature(charIndex?: number): Services.SignatureInfo;
        public getCompilationDetail(name: string, charIndex?: number): Services.CompletionEntryDetails;
        public getCompilation(matchText: string, charIndex: number, noMember?: boolean): Services.CompletionEntry[];
    }
    class JgScriptSnapshot implements TypeScript.IScriptSnapshot {
        public text: string;
        public oldText: string;
        constructor(text: string, oldText: string);
        public getText(start: number, end: number): string;
        public getLength(): number;
        public getLineStartPositions(): number[];
        public getTextChangeRangeSinceVersion(scriptVersion: number): TypeScript.TextChangeRange;
    }
    class JgPlayground implements Services.ILanguageServiceHost {
        public settings: TypeScript.CompilationSettings;
        public defineSnaps: TypeScript.IScriptSnapshot[];
        public defines: string[];
        public script: string;
        public version: number;
        public diagnostics: Services.ILanguageServicesDiagnostics;
        public logs: LogSetting;
        public snapshot: TypeScript.IScriptSnapshot;
        constructor();
        public information(): boolean;
        public debug(): boolean;
        public warning(): boolean;
        public error(): boolean;
        public fatal(): boolean;
        public log(s: string): void;
        public addDefine(script: string): void;
        public setScript(script: string): void;
        public getCompilationSettings(): TypeScript.CompilationSettings;
        public getScriptFileNames(): string[];
        public getScriptVersion(fileName: string): number;
        public getScriptIsOpen(fileName: string): boolean;
        public getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot;
        public getDiagnosticsObject(): Services.ILanguageServicesDiagnostics;
        public getTextDiagnostic(diagnostic: TypeScript.IDiagnostic): string;
    }
}
