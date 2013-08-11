module jgeditor {
	export interface JavaScriptFile {
		name: string;
		value: string;
	}

	export class JavaScriptEditor extends Editor {
		scripts: JavaScriptFile[];
		current: JavaScriptFile;

		constructor(id:string) {
			super(id);
			this.scripts = [];
			this.tab_change.handle(this, this.onTabChange);
			this.tab_changed.handle(this, this.onTabChanged);
			this.tab_added.handle(this, this.onTabAdded);
			this.tab_remove.handle(this, this.onTabRemove);
			this.tab_removed.handle(this, this.onTabRemoved);
			this.tab_renamed.handle(this, this.onTabRenamed);
			this.zip_start.handle(this, this.onZipStart);
			this.zip_ended.handle(this, this.onZipEnded);
		}

		onTabChange(e:any) {
			this.updateScript();
			var i = this.findScript(e.name);
			e.value = this.scripts[i].value;
		}

		onTabChanged(e:any) {
			var i = this.findScript(e.name);
			this.current = this.scripts[i];
		}

		onTabAdded(e:any) {
			this.scripts.push({
				name: e.name,
				value: e.value ? e.value : ""
			});
		}

		onTabRemove(e:any) {
			if (this.scripts.length == 1) {
				alert("ファイルは最低一つ必要です。");
				e.cancel = true;
				return;
			}
		}

		onTabRemoved(e:any) {
			var i = this.findScript(e.name);
			this.scripts.splice(i, 1);
		}

		onTabRenamed(e:any) {
			var i = this.findScript(e.name);
			this.scripts[i].name = e.newName;
		}

		onZipStart(e:any) {
			this.updateScript();
			for (var i=0, len=this.scripts.length; i<len; i++) {
				if (this.scripts[i].value.length > 0)	//jsziptoolsがサポートしてない
					e.files.push({
						name: this.scripts[i].name,
						buffer: this.scripts[i].value
					});
			}
			e.files.push({
				name: "out.js",
				buffer: this.getScript()
			});
		}

		onZipEnded(e:any) {
			if (e.error) {
				alert("エラー: "+e.error);
			}
		}

		findScript(name:string) {
			for (var i=0, len=this.scripts.length; i<len; i++) {
				if (this.scripts[i].name == name)
					return i;
			}
			return -1;
		}

		updateScript() {
			if (this.current)
				this.current.value = this.getValue();
		}

		getScript():string {
			var ret = [];
			for (var i=0, len=this.scripts.length; i<len; i++) {
				if (this._getExtension(this.scripts[i].name) == "js")
					ret.push(this.scripts[i].value);
			}

			return ret.join("\n");
		}
	}
}