module jgeditor {
	export class DiagnosticInfo {
		file: string;
		line: number;
		message: string;
		rowpos: number;

		constructor(file:string, message:string, line?:number) {
			this.file = file;
			this.message = message;
			this.line = line;
		}

		toString(): string {
			var ret = [];
			ret.push(this.file);
			if (this.line !== undefined && this.line !== null) {
				ret.push(" ");
				ret.push(this.line);
			}
			ret.push(": ");
			ret.push(this.message);

			return ret.join("");
		}
	}
}