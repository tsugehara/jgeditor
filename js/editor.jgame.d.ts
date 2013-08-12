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
        constructor(defines?: jgeditor.DefineFile[], initScript?: string);
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
declare module jgeditor {
    interface IEditorMessages {
        add_tab_prompt: string;
        remove_tab_confirm: string;
        rename_tab_prompt: string;
    }
}
declare module jgeditor {
    interface AceSession {
        name: string;
        session: any;
    }
    class AceSessionManager {
        public sessions: AceSession[];
        constructor();
        public rename(name: string, newName: string): void;
        public remove(name: string): void;
        public find(name: string): number;
        public get(name: string, value?: string);
    }
}
declare module jgeditor {
    class Editor {
        public id: string;
        public editor: any;
        public game_container_id: string;
        public ace_session: jgeditor.AceSessionManager;
        public file_sortable: JQuery;
        public default_ext: string;
        public menu_binder: any;
        public _changing_script: boolean;
        public messages: jgeditor.IEditorMessages;
        public activated_contextmenu: boolean;
        public changed_handler: Function;
        public is_changed: boolean;
        public tab_rename: jg.Trigger;
        public tab_renamed: jg.Trigger;
        public tab_remove: jg.Trigger;
        public tab_removed: jg.Trigger;
        public tab_change: jg.Trigger;
        public tab_changed: jg.Trigger;
        public tab_add: jg.Trigger;
        public tab_added: jg.Trigger;
        public changed: jg.Trigger;
        public zip_start: jg.Trigger;
        public zip_ended: jg.Trigger;
        public sorted: jg.Trigger;
        public run_start: jg.Trigger;
        public run_end: jg.Trigger;
        public run_stop: jg.Trigger;
        constructor(id: string);
        public getNextTab(): JQuery;
        public getPrevTab(): JQuery;
        public keyhandlerForIframe(e: any): void;
        public keyhandleForIframe(): void;
        public run(url: string): void;
        public setTheme(theme: string): void;
        public setMode(mode: string): void;
        public getSesssion(): any;
        public setSession(session: any): void;
        public getValue(): string;
        public focus(): boolean;
        public focusGame(): boolean;
        public stopGame(): boolean;
        public zip(btn: HTMLElement): void;
        public activateFileContextMenu(): void;
        public activateSortable(file_sortable?: JQuery): void;
        public activateAddTabUI(add_tab_btn: JQuery, ext_message?: string): void;
        public activateChangedHandler(): void;
        public removeTabConfirm(target?: string): boolean;
        public renameTabPrompt(target?: string): boolean;
        public addTabPrompt(): boolean;
        public currentTab(): string;
        public changeTab(name: string): boolean;
        public changeToNextTab(): boolean;
        public changeToPrevTab(): boolean;
        public addTab(name: string, value?: string): boolean;
        public renameTab(name: string, newName: string): void;
        public removeTab(name: string): void;
        public addInfo(text: string, background: string, id?: string): void;
        public clearInfo(id?: string): void;
        public onChange(): void;
        public changedHandler(): void;
        public _createMessage(mes: string, message_type?: string, extension?: boolean): string;
        public _isUniqueName(name: string): boolean;
        public _isValidName(name: string): {};
        public _getName(name: string): string;
        public _getExtension(name: string): string;
    }
}
declare module jgeditor {
    interface JavaScriptFile {
        name: string;
        value: string;
    }
    class JavaScriptEditor extends jgeditor.Editor {
        public scripts: JavaScriptFile[];
        public current: JavaScriptFile;
        constructor(id: string);
        public onChanged(e: any): void;
        public onTabChange(e: any): void;
        public onTabChanged(e: any): void;
        public onTabAdded(e: any): void;
        public onTabRemove(e: any): void;
        public onTabRemoved(e: any): void;
        public onTabRenamed(e: any): void;
        public onZipStart(e: any): void;
        public onZipEnded(e: any): void;
        public findScript(name: string): number;
        public updateScript(): void;
        public getScript(): string;
    }
}
declare module jgeditor {
    class TypeScriptEditor extends jgeditor.Editor {
        public define_loader: jgeditor.DefineLoader;
        public playground: jgeditor.JgPlaygroundService;
        public error_console: JQuery;
        public output: JQuery;
        public auto_complete: any;
        public define_loaded: jg.Trigger;
        constructor(id: string);
        public loadDefines(...files: string[]): void;
        public clean(): void;
        public check(callback?: () => void): void;
        public build(): void;
        public clearError(text?: string): void;
        public addError(diagnostic: jgeditor.DiagnosticInfo): void;
        public activateSelectDefineDialog(tab: JQuery, dialog: JQuery, defines: JQuery): void;
        public activateAutoComplete(): void;
        public updateScript(): void;
        public getScript();
        public onChanged(e: any): void;
        public onTabChange(e: any): void;
        public onTabChanged(e: any): void;
        public onTabAdded(e: any): void;
        public onTabRemove(e: any): void;
        public onTabRemoved(e: any): void;
        public onTabRenamed(e: any): void;
        public getRelativeName(name: string): string;
        public onZipStart(e: any): void;
        public onZipEnded(e: any): void;
    }
}
declare module jgeditor {
    interface Shortcut {
        target: any;
        method: any;
        description: string;
        params?: any;
        key: string;
    }
    class ShortcutManager {
        public editor: jgeditor.Editor;
        public key: any;
        public shortcuts: Shortcut[];
        constructor(editor: jgeditor.Editor);
        public add(key: string, method: any, description?: string, target?: any, params?: any): void;
        public _activate(shortcut: Shortcut): void;
        public activate(): void;
        public getHelpMessage(): string;
        public showHelp(): void;
    }
}
