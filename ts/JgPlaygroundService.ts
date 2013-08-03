module jgeditor {
	export class JgPlaygroundService {
		factory: Services.TypeScriptServicesFactory;
		service: Services.ILanguageService;
		host: JgPlayground;
		defines: DefineFile[];
		beforeCharIndex: number;

		constructor(defines: DefineFile[], initScript?: string) {
			this.clean(defines);
			this.addScript(jgeditor.file, initScript);
			this.changeScript(jgeditor.file);
		}

		getScriptNames():string[] {
			var ret:string[] = [];
			for (var n in this.host.snapshots)
				ret.push(n);

			return ret;
		}

		scriptCount(): number {
			return this.host.snapshots.length;
		}

		current() {
			return this.host.current;
		}

		removeScript(name: string) {
			if (! this.host.removeScript(name))
				return false;
			this.clean();
			return true;
		}

		renameScript(name: string, newName: string) {
			var index = this.host.findSnapshot(name);
			if (index < 0)
				return false;

			if (this.host.findSnapshot(newName) > -1)
				return false;

			this.host.snapshots[index].fileName = newName;

			this.clean();

			return true;
		}

		arrangeScripts(names:string[]) {
			var snapshots = this.host.snapshots;
			var len = snapshots.length;
			var newSnapshots:JgScriptSnapshot[] = [];
			names.forEach((n:string) => {
				for (var i=0; i<len; i++)
					if (snapshots[i].fileName == n) {
						newSnapshots.push(snapshots[i]);
						break;
					}
			});
			this.host.snapshots = newSnapshots;
		}

		addScript(name:string, initScript?:string) {
			if (this.host.findSnapshot(name) >= 0)
				return false;

			if (! this.host.addScript(name, initScript))
				return false;

			this.clean();
			return true;
		}

		getScript(name?:string) {
			return this.host.getScript(name === undefined ? this.host.current : name);
		}

		changeScript(name:string) {
			this.host.current = name;
		}

		updateScript(script: string) {
			return this.host.updateScript(this.host.current, script);
		}

		_check() {
			var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(this.host.current);
			if (syntaticDiagnositcs.length)
				return syntaticDiagnositcs;

			var semanticDiagnostics = this.service.getSemanticDiagnostics(this.host.current);
			return semanticDiagnostics;
		}

		check():string[] {
			var ret:string[] = [];
			var diagnositcs = this._check();
			if (diagnositcs) {
				diagnositcs.forEach((diagnostic) => {
					ret.push(this.host.getTextDiagnostic(diagnostic));
				});
			}
			return ret;
		}

		checkDetail():DiagnosticInfo[] {
			var ret:DiagnosticInfo[] = [];
			var diagnositcs = this._check();
			if (diagnositcs) {
				diagnositcs.forEach((diagnostic) => {
					ret.push(this.host.getDiagnosticInfo(diagnostic));
				});
			}
			return ret;
		}

		checkDetailAll():DiagnosticInfo[] {
			var ret:DiagnosticInfo[] = [];
			for (var i=0; i<this.host.snapshots.length; i++) {
				var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(this.host.snapshots[i].fileName);
				if (syntaticDiagnositcs.length) {
					syntaticDiagnositcs.forEach((diagnostic) => {
						ret.push(this.host.getDiagnosticInfo(diagnostic));
					});
					return ret;
				}
			}
			var semanticDiagnostics = [];
			for (var i=0; i<this.host.snapshots.length; i++) {
				semanticDiagnostics = semanticDiagnostics.concat(
					this.service.getSemanticDiagnostics(this.host.snapshots[i].fileName)
					|| []
				);
			}
			if (semanticDiagnostics.length) {
				semanticDiagnostics.forEach((diagnostic) => {
					ret.push(this.host.getDiagnosticInfo(diagnostic));
				});
			}

			return ret;
		}

		clean(defines?: DefineFile[]):void {
			if (defines !== undefined)
				this.defines = defines;

			this.factory = new Services.TypeScriptServicesFactory();

			var old;
			if (this.host) {
				old = {
					current: this.host.current,
					names: [],
					scripts: []
				}
				for (var i=0; i<this.host.snapshots.length; i++) {
					old.scripts.push(this.host.snapshots[i].text)
					old.names.push(this.host.snapshots[i].fileName);
				}
			}
			this.host = new JgPlayground();
			for (var i=0; i<this.defines.length; i++)
				this.host.addDefine(this.defines[i].value);

			if (old) {
				for (var i=0; i<old.names.length; i++)
					this.host.addScript(old.names[i], old.scripts[i]);

				this.host.current = old.current;
			}

			this.service = this.factory.createPullLanguageService(this.host);
		}

		build():string {
			var files = [];
			var s = this.host.snapshots;
			//Note: 本当はemitAllを使いたいが、typescriptServiceがサポートしておらずcompilerもprivateなので諦める
			//Note: 多分専用のcompilerを作ってemitAllするよりは、このやり方のがキャッシュがきくので速い
			for (var i=0; i<s.length; i++) {
				var emitOutput = this.service.getEmitOutput(s[i].fileName);
				files = files.concat(emitOutput.outputFiles);
			}
			
			var ret:string[] = [];
			for (var i=0; i<files.length; i++)
				ret.push(files[i].text);

			return ret.join("\n");
		}

		getSignature(charIndex?:number) {
			return this.service.getSignatureAtPosition(
				this.host.current,
				charIndex === undefined ? this.beforeCharIndex : charIndex
			);
		}

		getCompilationDetail(name:string, charIndex?:number) {
			return this.service.getCompletionEntryDetails(
				this.host.current,
				charIndex === undefined ? this.beforeCharIndex : charIndex,
				name
			);
		}

		getCompilation(matchText:string, charIndex:number, noMember?:boolean) {
			this.beforeCharIndex = charIndex;
			var compilations = this.service.getCompletionsAtPosition(
				this.host.current,
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
}
