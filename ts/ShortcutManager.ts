module jgeditor {
	export interface Shortcut {
		target: any;
		method: any;
		description: string;
		params?: any;
		key: string;
	}
	/** use keymaster */
	export class ShortcutManager {
		key: any;
		shortcuts: Shortcut[]
		constructor(public editor:Editor) {
			this.key = window["key"];
			this.shortcuts = [];
		}

		add(key:string, method:any, description?:string, target?:any, params?:any) {
			this.shortcuts.push({
				key: key,
				method: method,
				description: description,
				target: target ? target : this.editor,
				params: params
			});
		}

		_activate(shortcut:Shortcut) {
			this.key(shortcut.key, (event, handler) => {
				if (typeof shortcut.method == "string") {
					var ret = shortcut.target[shortcut.method].apply(shortcut.target, shortcut.params);
					return ret ? false : true;
				}
				return shortcut.method();
			})
		}

		activate() {
			this.shortcuts.forEach((shortcut:Shortcut) => {
				this._activate(shortcut);
			});
		}

		getHelpMessage() {
			var ret = [];
			this.shortcuts.forEach((shortcut:Shortcut) => {
				var keys = shortcut.key.split(/,/g);
				ret.push(keys.join(", ")+": "+(shortcut.description ? shortcut.description : shortcut.method));
			});
			return ret.join("\n");
		}

		showHelp() {
			alert(this.getHelpMessage());
		}
	}
}