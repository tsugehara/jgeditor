module jgeditor {
	export class TypeScriptEditor extends Editor {
		define_loader: DefineLoader;
		playground: JgPlaygroundService;
		error_console: JQuery;
		output: JQuery;
		auto_complete: any;

		define_loaded: jg.Trigger;

		constructor(id:string) {
			super(id);
			this.default_ext = "ts";
			this.error_console = $("#error-console");
			this.output = $("#output");
			this.define_loader = new DefineLoader();
			this.define_loaded = new jg.Trigger();
			this.playground = new jgeditor.JgPlaygroundService();

			this.tab_change.handle(this, this.onTabChange);
			this.tab_changed.handle(this, this.onTabChanged);
			this.tab_added.handle(this, this.onTabAdded);
			this.tab_remove.handle(this, this.onTabRemove);
			this.tab_removed.handle(this, this.onTabRemoved);
			this.tab_renamed.handle(this, this.onTabRenamed);
			this.zip_start.handle(this, this.onZipStart);
			this.zip_ended.handle(this, this.onZipEnded);
		}

		loadDefines(...files:string[]) {
			this.define_loader.d = [];
			files.forEach((f:string) => {
				this.define_loader.load(f);
			});
			var errors = [];
			this.define_loader.onload = () => {
				if (errors.length > 0)
					alert("以下のファイルの読み込みに失敗しました\n"+errors.join("\n"));
				this.define_loaded.fire({
					defines: this.define_loader.d,
					errors: errors
				});
			}
			this.define_loader.onerror = (error:string) => {
				errors.push(error);
			}
		}

		clean() {
			this.playground.clean(this.define_loader.d);
		}

		check(callback?:()=>void) {
			this.clearError("checking...");
			this.updateScript();
			window.setTimeout(() => {
				var errors = this.playground.checkDetailAll();
				if (errors.length == 0) {
					this.clearError("No error!");
				} else {
					this.clearError();
					for (var i=0; i<errors.length; i++)
						this.addError(errors[i]);
				}
				if (callback)
					callback();
			}, 20);
		}

		build() {
			this.output.val("");
			this.check(() => {
				this.output.val(this.playground.build());
			});
		}

		clearError(text?:string) {
			this.error_console.html(text ? text : "");			
		}

		addError(diagnostic:DiagnosticInfo) {
			var row = $("<div/>");
			//diagnostic.file
			if (diagnostic.line !== undefined && diagnostic.line !== null) {
				if (this.playground.scriptCount() == 1)
					row.text(diagnostic.line + ": "+ diagnostic.message);
				else
					row.text(diagnostic.file + " " +diagnostic.line + ": "+ diagnostic.message);
				row.click(function() {
					if (this.playground.current() != diagnostic.file)
						this.changeTab(diagnostic.file);
					this.editor.clearSelection();
					this.editor.moveCursorTo(diagnostic.line-1, diagnostic.rowpos);
					this.editor.focus();
				});
			} else {
				row.text(diagnostic.message);
			}
			this.error_console.append(row);
		}

		/** 要jquery ui */
		activateSelectDefineDialog(tab:JQuery, dialog:JQuery, defines:JQuery) {
			tab.click(() => {
				var d = [];
				for (var i=0; i<this.playground.defines.length; i++)
					d.push(this.playground.defines[i].name);
				defines.val(d.join("\n"));

				dialog["dialog"]({
					width: 600,
					modal:true,
					buttons: {
						"変更する": (e) => {
							var lines = defines.val().split(/\r|\n|\r\n/g);
							this.loadDefines.apply(this, lines);
							dialog["dialog"]( "close" );
						},
						"キャンセル": (e) => {
							dialog["dialog"]( "close" );
						}
					}
				});
			});
		}

		/** 要autoComplete.js */
		activateAutoComplete() {
			var AutoComplete = window["require"]("autocomplete").AutoComplete;
			var autoComplete = new AutoComplete(this.editor, null, this.playground);
			this.editor.addEventListener("mousedown", function() {
				if (autoComplete.isActive())
					autoComplete.deactivate();
			});
			this.editor.commands.addCommand({
				name: "autocomplete",
				bindKey: {win:"Ctrl-Space", mac:"Command-Space"},
				exec: () => {
					if (autoComplete.isActive() == false) {
						var pos = this.editor.getCursorPosition();
						var charIndex = this.editor.getSession().getDocument().positionToIndex(pos);
						this.updateScript();
						autoComplete.active();
					}
				}
			});
		}

		updateScript() {
			this.playground.updateScript(this.editor.getValue());
		}

		getScript() {
			return this.output.val();
		}

		onTabChange(e:any) {
			this.updateScript();
			e.value = this.playground.getScript(e.name);
		}

		onTabChanged(e:any) {
			this.playground.changeScript(e.name);
		}

		onTabAdded(e:any) {
			this.playground.addScript(e.name, e.value ? e.value : "");
		}

		onTabRemove(e:any) {
			if (this.playground.scriptCount() == 1) {
				alert("ファイルは最低一つ必要です。");
				e.cancel = true;
				return;
			}
		}

		onTabRemoved(e:any) {
			this.playground.removeScript(e.name);
		}

		onTabRenamed(e:any) {
			this.playground.renameScript(e.name, e.newName);
		}

		onZipStart(e:any) {
			this.updateScript();

			var snapshots = this.playground.host.snapshots;
			var defines = this.playground.defines;
			var build_txt = [];
			build_txt.push("--nolib");
			build_txt.push("--disallowbool");
			build_txt.push("--target ES5");
			build_txt.push("--out out.js");
			for (var i=0; i<defines.length; i++) {
				e.files.push({
					name: defines[i].name,
					buffer: defines[i].value
				});
				build_txt.push(defines[i].name);
			}

			for (var i=0; i<snapshots.length; i++) {
				e.files.push({
					name: snapshots[i].fileName,
					buffer: snapshots[i].text
				});
				if (snapshots[i].fileName.substr(-3) == ".ts")
					build_txt.push(snapshots[i].fileName);
			}

			e.files.push({
				name: "build.txt",
				buffer: build_txt.join("\n")
			});
			e.files.push({
				name: "build.bat",
				buffer: "tsc @build.txt\npause"
			});
		}

		onZipEnded(e:any) {
			if (e.error) {
				alert("エラー: "+e.error);
			}
		}
	}
}