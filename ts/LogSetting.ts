module jgeditor {
	export class LogSetting {
		debug: boolean;
		information: boolean;
		warning: boolean;
		error: boolean;
		fatal: boolean;
		constructor() {
			this.debug = true;
			this.information = true;
			this.warning = true;
			this.error = true;
			this.fatal = true;
		}
	}
}
