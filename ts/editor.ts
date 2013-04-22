module jgeditor {
	export class ConsoleLogger {
		information() {
			return true;
		}
		debug() {
			return true;
		}
		warning() {
			return true;
		}
		error() {
			return true;
		}
		fatal() {
			return true;
		}
		log(s:string) {
			console.log(s);
		}
	}

	export class SimpleBuffer {
		name:string;
		useUTF8encoding:bool;
		buf:string[];

		constructor(name:string, useUTF8encoding:bool) {
			this.name = name;
			this.useUTF8encoding = useUTF8encoding;
			this.buf = [];
		}

		Write(s:string) {
			if (this.buf.length == 0)
				this.buf.push("");
			this.buf[this.buf.length-1] += s;
			return true;
		}

		WriteLine(s:string) {
			if (this.buf.length == 0)
				this.buf.push("");
			this.buf[this.buf.length-1] += s;
			this.buf.push("");
			return true;
		}

		Close() {
		}

		Clear() {
			this.buf = [];
		}

		toString() {
			return this.buf.join("\n");
		}

		hasData() {
			return this.buf.length != 0 && (this.buf.length > 1 || this.buf[0].length != 0);
		}
	}

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

	export class IOHost {
		result:SimpleBuffer[];
		constructor() {
			this.result = [];
		}

		createFile(fileName:string, useUTF8encoding:bool) {
			if (useUTF8encoding === undefined) 
				useUTF8encoding = false;
			var outputFile = new SimpleBuffer(fileName, useUTF8encoding);
			this.result.push(outputFile);
			return outputFile;
		}

		directoryExists(fname:string) {
			return true;
		}

		fileExists(fname:string) {
			return false;
		}

		resolvePath(fname:string) {
			return fname;
		}

		toString() {
			return this.result.join("\n");
		}
	}
}
