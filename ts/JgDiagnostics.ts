module jgeditor {
	//これよくわからん。仕事してない
	export class JgDiagnostics implements Services.ILanguageServicesDiagnostics {
		constructor() {
		}

		log(content: string): void {
			console.error(content);
		}
	}
}
