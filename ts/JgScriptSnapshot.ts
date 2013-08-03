module jgeditor {
	//don't control version
	export class JgScriptSnapshot implements TypeScript.IScriptSnapshot {
		text: string;
		oldText: string;
		version: number;
		fileName: string;

		constructor(fileName: string, text: string, oldText: string) {
			this.fileName = fileName;
			this.text = text;
			this.oldText = oldText;
		}

		getText(start: number, end: number): string {
			return this.text.substring(start, end);
		}

		getLength(): number {
			return this.text.length;
		}

		getLineStartPositions(): number[] {
			return TypeScript.TextUtilities.parseLineStarts(
				TypeScript.SimpleText.fromString(this.text)
			);
		}

		getTextChangeRangeSinceVersion(scriptVersion: number): TypeScript.TextChangeRange {
			var span = new TypeScript.TextSpan(
				0,
				this.oldText ? this.oldText.length : this.text.length
			);
			return new TypeScript.TextChangeRange(span, this.text.length);
		}
	}
}
