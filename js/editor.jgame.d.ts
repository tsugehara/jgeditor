declare module jgeditor {
    var file: string;
}
declare module jgeditor {
    interface DefineFile {
        name: string;
        value: string;
    }
    class DefineLoader {
        public d: DefineFile[];
        public loadCount: number;
        public onload: () => void;
        public onerror: (name: string) => void;
        constructor();
        public load(name: string, path?: string): void;
    }
}
declare module jgeditor {
    class JgDiagnostics implements Services.ILanguageServicesDiagnostics {
        constructor();
        public log(content: string): void;
    }
}
declare module jgeditor {
    class LogSetting {
        public debug: boolean;
        public information: boolean;
        public warning: boolean;
        public error: boolean;
        public fatal: boolean;
        constructor();
    }
}
declare module jgeditor {
    class JgScriptSnapshot implements TypeScript.IScriptSnapshot {
        public text: string;
        public oldText: string;
        public version: number;
        public fileName: string;
        constructor(fileName: string, text: string, oldText: string);
        public getText(start: number, end: number): string;
        public getLength(): number;
        public getLineStartPositions(): number[];
        public getTextChangeRangeSinceVersion(scriptVersion: number): TypeScript.TextChangeRange;
    }
}
declare module jgeditor {
    class DiagnosticInfo {
        public file: string;
        public line: number;
        public message: string;
        public rowpos: number;
        constructor(file: string, message: string, line?: number);
        public toString(): string;
    }
}
declare module jgeditor {
    class JgPlayground implements Services.ILanguageServiceHost {
        public settings: TypeScript.CompilationSettings;
        public defineSnaps: TypeScript.IScriptSnapshot[];
        public defines: string[];
        public diagnostics: Services.ILanguageServicesDiagnostics;
        public logs: jgeditor.LogSetting;
        public snapshots: jgeditor.JgScriptSnapshot[];
        public current: string;
        constructor();
        public information(): boolean;
        public debug(): boolean;
        public warning(): boolean;
        public error(): boolean;
        public fatal(): boolean;
        public log(s: string): void;
        public addDefine(script: string): void;
        public getScript(name: string): string;
        public findSnapshot(name: string): number;
        public addScript(name: string, initScript: string): boolean;
        public removeScript(name: string): boolean;
        public updateScript(name: string, script: string): boolean;
        public getCompilationSettings(): TypeScript.CompilationSettings;
        public getScriptFileNames(): string[];
        public getScriptVersion(fileName: string): number;
        public getScriptIsOpen(fileName: string): boolean;
        public getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot;
        public getDiagnosticsObject(): Services.ILanguageServicesDiagnostics;
        public _getDiagnosticLine(diagnostic: TypeScript.IDiagnostic): number;
        public getTextDiagnostic(diagnostic: TypeScript.IDiagnostic): string;
        public getDiagnosticInfo(diagnostic: TypeScript.IDiagnostic): jgeditor.DiagnosticInfo;
    }
}
declare module jgeditor {
    class JgPlaygroundService {
        public factory: Services.TypeScriptServicesFactory;
        public service: Services.ILanguageService;
        public host: jgeditor.JgPlayground;
        public defines: jgeditor.DefineFile[];
        public beforeCharIndex: number;
        constructor(defines: jgeditor.DefineFile[], initScript?: string);
        public getScriptNames(): string[];
        public scriptCount(): number;
        public current(): string;
        public removeScript(name: string): boolean;
        public renameScript(name: string, newName: string): boolean;
        public arrangeScripts(names: string[]): void;
        public addScript(name: string, initScript?: string): boolean;
        public getScript(name?: string): string;
        public changeScript(name: string): void;
        public updateScript(script: string): boolean;
        public _check(): TypeScript.IDiagnostic[];
        public check(): string[];
        public checkDetail(): jgeditor.DiagnosticInfo[];
        public checkDetailAll(): jgeditor.DiagnosticInfo[];
        public clean(defines?: jgeditor.DefineFile[]): void;
        public build(): string;
        public getSignature(charIndex?: number): Services.SignatureInfo;
        public getCompilationDetail(name: string, charIndex?: number): Services.CompletionEntryDetails;
        public getCompilation(matchText: string, charIndex: number, noMember?: boolean): Services.CompletionEntry[];
    }
}
