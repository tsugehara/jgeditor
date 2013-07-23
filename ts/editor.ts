module jgeditor {
	export var file = "main.ts";
	export class DefineLoader {
		d:{[key:string]: string;};
		loadCount:number;
		onload:() => void;

		constructor() {
			this.d = {};
			this.loadCount = 0;			
		}

		load(name:string, path?:string) {
			if (path === undefined)
				path = name;
			var request = new XMLHttpRequest();
			request.open("GET", path);
			request.onload = () => {
				this.d[name] = request.response;
				this.loadCount--;
				if (this.loadCount == 0 && this.onload)
					this.onload();
			}
			request.onerror = function() {
				alert("初期化に失敗しました。");
			}
			request.send();
			this.loadCount++;
		}
	}

	//これよくわからん。仕事してない
	export class JgDiagnostics implements Services.ILanguageServicesDiagnostics {
		constructor() {
		}

		log(content: string): void {
			console.error(content);
		}
	}

	export class LogSetting {
		debug: boolean;
		information: boolean;
		warning: boolean;
		error: boolean;
		fatal: boolean;
		constructor() {
			this.debug = true;
			this.information = true;
			this.warning = true;
			this.error = true;
			this.fatal = true;
		}
	}

	export class JgPlaygroundService {
		factory: Services.TypeScriptServicesFactory;
		service: Services.ILanguageService;
		host: JgPlayground;
		defines: string[];
		beforeCharIndex: number;

		constructor(defines: string[], initScript?: string) {
			this.defines = defines;
			this.factory = new Services.TypeScriptServicesFactory();
			this.host = new JgPlayground();
			for (var i=0; i<this.defines.length; i++)
				this.host.addDefine(this.defines[i]);
			this.host.setScript(initScript ? initScript : "");
			this.service = this.factory.createPullLanguageService(this.host);
		}

		updateScript(script: string) {
			if (script != this.host.script)
				this.host.setScript(script);
		}

		check():string[] {
			var ret:string[] = [];

			var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(jgeditor.file);
			if (syntaticDiagnositcs.length) {
				syntaticDiagnositcs.forEach((diagnostic) => {
					ret.push(this.host.getTextDiagnostic(diagnostic));
				});
				return ret;
			}

			var semanticDiagnostics = this.service.getSemanticDiagnostics(jgeditor.file);
			if (semanticDiagnostics.length) {
				semanticDiagnostics.forEach((diagnostic) => {
					ret.push(this.host.getTextDiagnostic(diagnostic));
				});
			}

			return ret;
		}

		build():string {
			var emitOutput = this.service.getEmitOutput(jgeditor.file);
			var files = emitOutput.outputFiles;
			var ret:string[] = [];
			for (var i=0; i<files.length; i++)
				ret.push(files[i].text);

			return ret.join("\n");
		}

		getSignature(charIndex?:number) {
			return this.service.getSignatureAtPosition(
				jgeditor.file,
				charIndex === undefined ? this.beforeCharIndex : charIndex
			);
		}

		getCompilationDetail(name:string, charIndex?:number) {
			return this.service.getCompletionEntryDetails(
				jgeditor.file,
				charIndex === undefined ? this.beforeCharIndex : charIndex,
				name
			);
		}

		getCompilation(matchText:string, charIndex:number, noMember?:boolean) {
			this.beforeCharIndex = charIndex;
			var compilations = this.service.getCompletionsAtPosition(
				jgeditor.file,
				charIndex,
				noMember ? false : true
			);

			if (matchText.length > 0) {
				var t = matchText.toLowerCase();
				return compilations.entries.filter((elm) => {
					return elm.name.toLowerCase().indexOf(t) == 0;
				});
			}

			return compilations.entries;
		}
	}

	//don't control version
	export class JgScriptSnapshot implements TypeScript.IScriptSnapshot {
		text: string;
		oldText: string;
		constructor(text: string, oldText: string) {
			this.text = text;
			this.oldText = oldText;
		}

		getText(start: number, end: number): string {
			return this.text.substring(start, end);
		}

		getLength(): number {
			return this.text.length;
		}

		getLineStartPositions(): number[] {
			return TypeScript.TextUtilities.parseLineStarts(
				TypeScript.SimpleText.fromString(this.text)
			);
		}

		getTextChangeRangeSinceVersion(scriptVersion: number): TypeScript.TextChangeRange {
			var span = new TypeScript.TextSpan(
				0,
				this.oldText ? this.oldText.length : this.text.length
			);
			return new TypeScript.TextChangeRange(span, this.text.length);
		}
	}

	export class JgPlayground implements Services.ILanguageServiceHost {
		settings: TypeScript.CompilationSettings;
		defineSnaps: TypeScript.IScriptSnapshot[];
		defines: string[];
		script: string;
		version: number;
		diagnostics: Services.ILanguageServicesDiagnostics;
		logs: LogSetting;
		snapshot: TypeScript.IScriptSnapshot;

		constructor() {
			this.settings = new TypeScript.CompilationSettings();
			this.settings.propagateConstants = false;
			//this.settings.minWhitespace = true;
			this.settings.minWhitespace = false;
			this.settings.emitComments = false;
			this.settings.watch = false;
			this.settings.exec = false;
			this.settings.resolve = true;
			this.settings.disallowBool = true;
			this.settings.allowAutomaticSemicolonInsertion = true;
			this.settings.allowModuleKeywordInExternalModuleReference = true;

			this.settings.useDefaultLib = true;
			this.settings.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
			this.settings.moduleGenTarget = TypeScript.ModuleGenTarget.Synchronous;

			this.settings.outputOption = "";
			this.settings.mapSourceFiles = false;
			this.settings.emitFullSourceMapPath = false;

			this.settings.generateDeclarationFiles = false;
			this.settings.gatherDiagnostics = false;
			
			this.settings.updateTC = false;

			this.settings.implicitAny = false;
			
			this.defines = [];
			this.defineSnaps = [];
			this.script = "";
			this.version = 0;

			this.diagnostics = new JgDiagnostics();
			this.logs = new LogSetting();
		}

		information(): boolean {
			return this.logs.information;
		}

		debug(): boolean {
			return this.logs.debug;
		}

		warning(): boolean {
			return this.logs.warning;
		}

		error(): boolean {
			return this.logs.error;
		}

		fatal(): boolean {
			return this.logs.fatal;
		}

		log(s: string): void {
			console.log(s);
		}

		addDefine(script: string) {
			this.defines.push(script);
			this.defineSnaps.push(TypeScript.ScriptSnapshot.fromString(script));
		}

		setScript(script: string) {
			this.snapshot = new JgScriptSnapshot(script, this.script);
			this.script = script;
			this.version++;
		}

		getCompilationSettings(): TypeScript.CompilationSettings {
			return this.settings;
		}

		getScriptFileNames(): string[]{
			var scripts:string[] = [];
			for (var i = 0; i < this.defines.length; i++)
				scripts.push(i + ".d.ts");
			
			scripts.push(jgeditor.file);

			return scripts;
		}

		getScriptVersion(fileName: string): number {
			if (fileName != jgeditor.file)
				return 1;

			return this.version;
		}

		getScriptIsOpen(fileName: string): boolean {
			return (fileName == jgeditor.file);
		}

		getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot {
			if (fileName == jgeditor.file)
				return this.snapshot;

			var defineIndex = Number(fileName.substr(0, fileName.indexOf(".")));
			return this.defineSnaps[defineIndex];
		}

		getDiagnosticsObject(): Services.ILanguageServicesDiagnostics {
			return this.diagnostics;
		}

		getTextDiagnostic(diagnostic: TypeScript.IDiagnostic) {
			var len = this.snapshot.getLength();
			var lineMap = new TypeScript.LineMap(
				this.snapshot.getLineStartPositions(),
				len
			);
			var mes:string[] = [];
			var pos = diagnostic.start();
			if (pos >= 0 && pos <= len) {
				mes.push((lineMap.getLineNumberFromPosition(diagnostic.start())+1).toString());
				mes.push(": ");
			}
			mes.push(diagnostic.message());
			return mes.join("");
		}

	}
}
