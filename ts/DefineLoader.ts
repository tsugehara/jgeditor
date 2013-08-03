module jgeditor {
	export interface DefineFile {
		name: string;
		value: string;
	}
	export class DefineLoader {
		d:DefineFile[];
		loadCount:number;
		onload:() => void;
		onerror:(name:string) => void;

		constructor() {
			this.d = [];
			this.loadCount = 0;			
		}

		load(name:string, path?:string) {
			if (path === undefined)
				path = name;
			var request = new XMLHttpRequest();
			request.open("GET", path);
			request.onload = () => {
				if (request.status != 200) {
					if (this.onerror)
						this.onerror(name);
				} else {
					this.d.push({
						name: name,
						value: request.response
					});
				}
				this.loadCount--;
				if (this.loadCount == 0 && this.onload)
					this.onload();
			}
			request.onerror = function() {
				if (this.onerror)
					this.onerror(name);
			}
			request.send();
			this.loadCount++;
		}
	}
}