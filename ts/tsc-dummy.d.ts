declare module TypeScript {
	export class MemberName {
		prefix: string;
		suffix: string;

		isString(): boolean;
		isArray(): boolean;
		isMarker(): boolean;

		toString(): string;

		static memberNameToString(memberName: MemberName, markerInfo?: number[], markerBaseLength?: number);

		static create(text: string): MemberName;
		static create(entry: MemberName, prefix: string, suffix: string): MemberName;
		static create(arg1: any, arg2?: any, arg3?: any): MemberName;
	}

	enum LanguageVersion {
		EcmaScript3,
		EcmaScript5,
	}
	enum ModuleGenTarget {
		Synchronous,
	}
	interface IScriptSnapshot {
		getLineStartPositions(): number[];
		getLength(): number;
		getText(start: number, end: number): string;
		getTextChangeRangeSinceVersion(scriptVersion: number): TextChangeRange;
	}
	class ScriptSnapshot {
		static fromString(script: string);
	}

	interface ILineAndCharacter {
		line: number;
		character: number;
	}

	interface ITextLine {
		start(): number;
		end(): number;
		endIncludingLineBreak(): number;
		extent(): TextSpan;
		extentIncludingLineBreak(): TextSpan;
		toString(): string;
		lineNumber(): number;
	}

	class LineAndCharacter {
		constructor(line: number, character: number);
		line();
		character();
	}

	interface ISimpleText {
		length(): number;
		copyTo(sourceIndex: number, destination: number[], destinationIndex: number, count: number): void;
		substr(start: number, length: number, intern: boolean): string;
		subText(span: TextSpan): ISimpleText;
		charCodeAt(index: number): number;
		lineMap(): LineMap;
	}

	interface IText extends ISimpleText {
		lineCount(): number;
		lines(): ITextLine[];
		charCodeAt(position: number): number;
		getLineFromLineNumber(lineNumber: number): ITextLine;
		getLineFromPosition(position: number): ITextLine;
		getLineNumberFromPosition(position: number): number;
		getLinePosition(position: number): LineAndCharacter;
		toString(span?: TextSpan): string;
	}

	class CompilationSettings {
		propagateConstants: boolean;
		minWhitespace: boolean;
		emitComments: boolean;
		watch: boolean;
		exec: boolean;
		resolve: boolean;
		disallowBool : boolean;
		allowAutomaticSemicolonInsertion: boolean;
		allowModuleKeywordInExternalModuleReference: boolean;

		useDefaultLib: boolean;
		codeGenTarget: TypeScript.LanguageVersion;
		moduleGenTarget: TypeScript.ModuleGenTarget;

		outputOption: any;
		mapSourceFiles: boolean;
		emitFullSourceMapPath: boolean;

		generateDeclarationFiles: boolean;
		gatherDiagnostics: boolean;

		updateTC: boolean;

		implicitAny: boolean;
	}

	class TextSpan {
		constructor(start: number, length: number);
	}
	class TextChangeRange {
		constructor(span: TextSpan, newLength: number);
	}
	interface IDiagnostic {
		message(): string;
		start(): number;
	}
	class LineMap {
		constructor(_lineStarts: number[], length: number);
		getLineNumberFromPosition(position: number): number;
	}
}
declare module Services {
	interface ILanguageServicesDiagnostics {
	}
	interface ILanguageServiceHost {
	}

	interface ILanguageService {
		refresh(): void;

		getSyntacticDiagnostics(fileName: string): TypeScript.IDiagnostic[];
		getSemanticDiagnostics(fileName: string): TypeScript.IDiagnostic[];

		getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): CompletionInfo;
		getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;

		//getTypeAtPosition(fileName: string, position: number): TypeInfo;

		//getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): SpanInfo;

		//getBreakpointStatementAtPosition(fileName: string, position: number): SpanInfo;

		getSignatureAtPosition(fileName: string, position: number): SignatureInfo;

		//getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
		//getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
		//getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
		//getImplementorsAtPosition(fileName: string, position: number): ReferenceEntry[];

		//getNavigateToItems(searchValue: string): NavigateToItem[];
		//getScriptLexicalStructure(fileName: string): NavigateToItem[];

		//getOutliningRegions(fileName: string): TypeScript.TextSpan[];
		//getBraceMatchingAtPosition(fileName: string, position: number): TypeScript.TextSpan[];
		//getIndentationAtPosition(fileName: string, position: number, options: Services.EditorOptions): number;

		//getFormattingEditsForRange(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
		//getFormattingEditsForDocument(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
		//getFormattingEditsOnPaste(fileName: string, minChar: number, limChar: number, options: FormatCodeOptions): TextEdit[];
		//getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextEdit[];

		getEmitOutput(fileName: string): EmitOutput;

		//getSyntaxTree(fileName: string): TypeScript.SyntaxTree;
	}

	class TypeScriptServicesFactory {
		constructor();
		createPullLanguageService(host: Services.ILanguageServiceHost): ILanguageService;
	}
	class EmitOutput {
		outputFiles: IOutputFile[];
		diagnostics: TypeScript.IDiagnostic[];
	}
	interface IOutputFile {
		name: string;
		useUTF8encoding: boolean;
		writeByteOrderMark: boolean;
		text: string;
	}

	class ReferenceEntry {
		fileName: string;
		minChar: number;
		limChar: number;
		isWriteAccess: boolean;

		constructor(fileName: string, minChar: number, limChar: number, isWriteAccess: boolean);
	}

	class NavigateToItem {
		name: string;
		kind: string;			// see ScriptElementKind
		kindModifiers: string;   // see ScriptElementKindModifier, comma separated
		matchKind: string;
		fileName: string;
		minChar: number;
		limChar: number;
		containerName: string;
		containerKind: string;
	}
/*
	class NavigateToContext {
		options: TypeScript.AstWalkOptions;
		fileName: string;
		containerKinds: string[];
		containerASTs: TypeScript.AST[];
		path: TypeScript.AstPath;
		result: NavigateToItem[];
	}
*/
	class TextEdit {
		minChar: number;
		limChar: number;
		text: string;
		constructor(minChar: number, limChar: number, text: string);

		static createInsert(pos: number, text: string): TextEdit;
		static createDelete(minChar: number, limChar: number): TextEdit;
		static createReplace(minChar: number, limChar: number, text: string): TextEdit;
	}

	class EditorOptions {
		IndentSize: number;
		TabSize: number;
		NewLineCharacter: string;
		ConvertTabsToSpaces: boolean;

		static clone(objectToClone: EditorOptions): EditorOptions;
	}

	class FormatCodeOptions extends EditorOptions {
		InsertSpaceAfterCommaDelimiter: boolean;
		InsertSpaceAfterSemicolonInForStatements: boolean;
		InsertSpaceBeforeAndAfterBinaryOperators: boolean;
		InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
		InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
		InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
		PlaceOpenBraceOnNewLineForFunctions: boolean;
		PlaceOpenBraceOnNewLineForControlBlocks: boolean;

		static clone(objectToClone: FormatCodeOptions ): FormatCodeOptions;
	}

	class DefinitionInfo {
		fileName: string;
		minChar: number;
		limChar: number;
		kind: string;
		name: string;
		containerKind: string;
		containerName: string;
		constructor(
			fileName: string,
			minChar: number,
			limChar: number,
			kind: string,
			name: string,
			containerKind: string,
			containerName: string);
	}

	class TypeInfo {
		memberName: TypeScript.MemberName;
		docComment: string;
		fullSymbolName: string;
		kind: string;
		minChar: number;
		limChar: number;
		constructor(
			memberName: TypeScript.MemberName,
			docComment: string,
			fullSymbolName: string,
			kind: string,
			minChar: number,
			limChar: number);
	}

	class SpanInfo {
		minChar: number;
		limChar: number;
		text: string;
		constructor(minChar: number, limChar: number, text?: string);
	}

	class SignatureInfo {
		actual: ActualSignatureInfo;
		formal: FormalSignatureItemInfo[]; // Formal signatures
		activeFormal: number; // Index of the "best match" formal signature
	}

	class FormalSignatureItemInfo {
		signatureInfo: string;
		typeParameters: FormalTypeParameterInfo[];
		parameters: FormalParameterInfo[];   // Array of parameters
		docComment: string; // Help for the signature
	}

	class FormalTypeParameterInfo {
		name: string;		// Type parameter name
		docComment: string;  // Comments that contain help for the parameter
		minChar: number;	 // minChar for parameter info in the formal signature info string
		limChar: number;	 // lim char for parameter info in the formal signature info string
	}

	class FormalParameterInfo {
		name: string;		// Parameter name
		isVariable: boolean; // true if parameter is var args
		docComment: string;  // Comments that contain help for the parameter
		minChar: number;	 // minChar for parameter info in the formal signature info string
		limChar: number;	 // lim char for parameter info in the formal signature info string
	}

	class ActualSignatureInfo {
		parameterMinChar: number;
		parameterLimChar: number;
		currentParameterIsTypeParameter: boolean; // current parameter is a type argument or a normal argument
		currentParameter: number;		// Index of active parameter in "parameters" or "typeParamters" array
	}

	class CompletionInfo {
		maybeInaccurate;
		isMemberCompletion;
		entries: CompletionEntry[];
	}

	interface CompletionEntry {
		name: string;
		kind: string;			// see ScriptElementKind
		kindModifiers: string;   // see ScriptElementKindModifier, comma separated
	}

	interface CompletionEntryDetails {
		name: string;
		kind: string;			// see ScriptElementKind
		kindModifiers: string;   // see ScriptElementKindModifier, comma separated
		type: string;
		fullSymbolName: string;
		docComment: string;
	}


	class ScriptElementKind {
		static unknown:string;
		static keyword:string;
		static scriptElement:string;
		static moduleElement:string;
		static classElement:string;
		static interfaceElement:string;
		static enumElement:string;
		static variableElement:string;
		static localVariableElement:string;
		static functionElement:string;
		static localFunctionElement:string;
		static memberFunctionElement:string;
		static memberGetAccessorElement:string;
		static memberSetAccessorElement:string;
		static memberVariableElement:string;
		static constructorImplementationElement:string;
		static callSignatureElement:string;
		static indexSignatureElement:string;
		static constructSignatureElement:string;
		static parameterElement:string;
		static typeParameterElement:string;
		static primitiveType:string;
	}

	class ScriptElementKindModifier {
		static none:string;
		static publicMemberModifier:string;
		static privateMemberModifier:string;
		static exportedModifier:string;
		static ambientModifier:string;
		static staticModifier:string;
	}

	class MatchKind {
		static none: string;
		static exact:string;
		static subString:string;
		static prefix:string;
	}

	class DiagnosticCategory {
		static none:string;
		static error:string;
		static warning:string;
		static message:string;
	}

	class ScriptSyntaxASTState {
		version: number;
		//syntaxTree: TypeScript.SyntaxTree;
		fileName: string;

		constructor();
	}
}

declare module TypeScript.TextUtilities {
	function parseLineStarts(text: ISimpleText): number[];
}

declare module TypeScript.SimpleText {
	function fromString(value: string): ISimpleText;
	function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): ISimpleText;
}