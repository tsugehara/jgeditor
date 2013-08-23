module jgeditor {
	export class JgPlayground implements Services.ILanguageServiceHost {
		settings: TypeScript.CompilationSettings;
		defineSnaps: TypeScript.IScriptSnapshot[];
		defines: string[];
		diagnostics: Services.ILanguageServicesDiagnostics;
		logs: LogSetting;
		snapshots: JgScriptSnapshot[];
		current: string;

		constructor() {
			this.settings = new TypeScript.CompilationSettings();
			this.settings.propagateEnumConstants = false;
			this.settings.removeComments = true;
			this.settings.watch = false;
			this.settings.noResolve = false;

			this.settings.allowBool = false;
			this.settings.allowAutomaticSemicolonInsertion = true;
			this.settings.allowModuleKeywordInExternalModuleReference = false;
			this.settings.noImplicitAny = false;

			this.settings.noLib = true;
			this.settings.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
			this.settings.moduleGenTarget = TypeScript.ModuleGenTarget.Synchronous;

			this.settings.outFileOption = "out.js";
			this.settings.outDirOption = "";
			this.settings.mapSourceFiles = false;
			this.settings.mapRoot = "";
			this.settings.sourceRoot = "";

			this.settings.generateDeclarationFiles = false;
			this.settings.useCaseSensitiveFileResolution = false;
			this.settings.gatherDiagnostics = false;
			this.settings.updateTC = false;
			this.settings.codepage = null;	//TODO
			
			this.defines = [];
			this.defineSnaps = [];
			this.snapshots = [];

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

		getScript(name:string) {
			var index = this.findSnapshot(name);
			if (index < 0)
				return null;
			return this.snapshots[index].text;
		}

		findSnapshot(name: string) {
			for (var i=0, len=this.snapshots.length; i<len; i++)
				if (this.snapshots[i].fileName == name)
					return i;
			return -1;
		}

		addScript(name: string, initScript: string) {
			if (this.findSnapshot(name) > -1)
				return false;
			var snapshot = new JgScriptSnapshot(name, initScript, "");
			snapshot.version = 1;
			this.snapshots.push(snapshot);
			return true;
		}

		removeScript(name: string) {
			if (this.snapshots.length == 1)
				return false;
			var index = this.findSnapshot(name);
			if (index < 0)
				return false;
			this.snapshots.splice(index, 1);
			return true;
		}

		updateScript(name: string, script:string) {
			var index = this.findSnapshot(name);
			if (index < 0)
				return false;

			var snapshot = this.snapshots[index];
			if (snapshot.text == script)
				return false;
			var newSnap = new JgScriptSnapshot(name, script, this.snapshots[index].text);
			newSnap.version = snapshot.version+1;
			this.snapshots[index] = newSnap;
			return true;
		}

		getCompilationSettings(): TypeScript.CompilationSettings {
			return this.settings;
		}

		getScriptFileNames(): string[]{
			var scripts:string[] = [];
			for (var i = 0; i < this.defines.length; i++)
				scripts.push(i + ".d.ts");
			
			for (var i=0; i<this.snapshots.length; i++)
				if (this.snapshots[i].fileName.substr(-3) == ".ts")
					scripts.push(this.snapshots[i].fileName);

			return scripts;
		}

		getScriptVersion(fileName: string): number {
			var index = this.findSnapshot(fileName);
			if (index < 0)
				return 1;	//for define file

			return this.snapshots[index].version;
		}

		getScriptIsOpen(fileName: string): boolean {
			return (fileName == this.current);
		}

		getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot {
			var index = this.findSnapshot(fileName);
			if (index < 0) {
				var defineIndex = Number(fileName.substr(0, fileName.indexOf(".")));
				return this.defineSnaps[defineIndex];
			}

			return this.snapshots[index];
		}

		getLocalizedDiagnosticMessages() {
			return null;
		}

		resolveRelativePath(path: string, directory: string): string {
			return path;
		}

		getScriptByteOrderMark(fileName: string):ByteOrderMark {
			return ByteOrderMark.None;
		}

		fileExists(path: string): boolean {
			return false;
		}

		directoryExists(path: string): boolean {
			return false;
		}

		getParentDirectory(path: string): string {
			return null;
		}

		getDiagnosticsObject(): Services.ILanguageServicesDiagnostics {
			return this.diagnostics;
		}

		_getDiagnosticLine(diagnostic: TypeScript.Diagnostic):number {
			var index = this.findSnapshot(diagnostic.fileName());
			if (index < 0)
				return null;
			var snapshot = this.snapshots[index];
			var len = snapshot.getLength();
			var lineMap = new TypeScript.LineMap(
				snapshot.getLineStartPositions(),
				len
			);
			var pos = diagnostic.start();
			if (pos >= 0 && pos <= len)
				return lineMap.getLineNumberFromPosition(diagnostic.start())+1;
			
			return null;
		}

		getTextDiagnostic(diagnostic: TypeScript.Diagnostic) {
			var mes:string[] = [];
			var lineNumber = this._getDiagnosticLine(diagnostic);
			if (lineNumber !== null) {
				mes.push(lineNumber.toString());
				mes.push(": ");
			}
			mes.push(diagnostic.message());
			return mes.join("");
		}

		getDiagnosticInfo(diagnostic: TypeScript.Diagnostic):DiagnosticInfo {
			var lineNumber = this._getDiagnosticLine(diagnostic);
			var info = new DiagnosticInfo(
				diagnostic.fileName(),
				diagnostic.message()
			);
			var pos = diagnostic.start();
			var index = this.findSnapshot(diagnostic.fileName());
			if (index < 0)
				return info;
			var snapshot = this.snapshots[index];

			var len = snapshot.getLength();
			var lineMap = new TypeScript.LineMap(
				snapshot.getLineStartPositions(),
				len
			);
			if (pos >= 0 && pos <= len) {
				info.line = lineMap.getLineNumberFromPosition(pos) + 1;
				info.rowpos = pos - lineMap.getLineStartPosition(info.line-1) + diagnostic.length();
			}

			return info;
		}
	}
}
