module jgeditor {
	export interface AceSession {
		name: string;
		session: any;
	}

	export class AceSessionManager {
		sessions: AceSession[];
		constructor() {
			this.sessions = [];
		}

		rename(name:string, newName:string) {
			var index = this.find(name);
			if (index >= 0)
				this.sessions[index].name = newName;
		}

		remove(name:string) {
			var index = this.find(name);
			if (index >= 0) {
				this.sessions.splice(index, 1);
			}
		}

		find(name:string) {
			for (var i=0; i<this.sessions.length; i++)
				if (this.sessions[i].name == name)
					return i;
			return -1;
		}

		get(name:string, value?:string) {
			var index = this.find(name);
			if (index >= 0) {
				var target = this.sessions[index];
				if (index > 0) {
					this.sessions.splice(index, 1);
					this.sessions.unshift(target);
				}
				return target.session;
			}
			var target = {
				name: name,
				session: new ace.createEditSession(value ? value : "")
			}
			this.sessions.unshift(target)
			if (this.sessions.length > 30)	//ファイル30以上開いてる人は悪いけど古いのから除去
				this.sessions.pop();
			return target.session;
		}
	}
}