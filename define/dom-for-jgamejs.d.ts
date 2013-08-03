interface ErrorFunction {
	(eventOrMessage: any, source: string, fileno: number): any;
}

interface EventListener {
	(evt: Event): void;
}

interface ClientRect {
	left: number;
	width: number;
	right: number;
	top: number;
	bottom: number;
	height: number;
}
declare var ClientRect: {
	prototype: ClientRect;
	new(): ClientRect;
}

interface ClientRectList {
	length: number;
	item(index: number): ClientRect;
	[index: number]: ClientRect;
}
declare var ClientRectList: {
	prototype: ClientRectList;
	new(): ClientRectList;
}

interface Storage {
	length: number;
	getItem(key: string): any;
	[key: string]: any;
	setItem(key: string, data: string): void;
	clear(): void;
	removeItem(key: string): void;
	key(index: number): string;
	[index: number]: any;
}
declare var Storage: {
	prototype: Storage;
	new(): Storage;
}

interface MSEventExtensions {
	cancelBubble: boolean;
	srcElement: Element;
}
interface Event extends MSEventExtensions {
	timeStamp: number;
	defaultPrevented: boolean;
	isTrusted: boolean;
	currentTarget: EventTarget;
	target: EventTarget;
	eventPhase: number;
	type: string;
	cancelable: boolean;
	bubbles: boolean;
	initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
	stopPropagation(): void;
	stopImmediatePropagation(): void;
	preventDefault(): void;
	CAPTURING_PHASE: number;
	AT_TARGET: number;
	BUBBLING_PHASE: number;
}
declare var Event: {
	prototype: Event;
	new(): Event;
	CAPTURING_PHASE: number;
	AT_TARGET: number;
	BUBBLING_PHASE: number;
}

interface BeforeUnloadEvent extends Event {
	returnValue: string;
}
declare var BeforeUnloadEvent: {
	prototype: BeforeUnloadEvent;
	new(): BeforeUnloadEvent;
}

interface StorageEvent extends Event {
	oldValue: any;
	newValue: any;
	url: string;
	storageArea: Storage;
	key: string;
	initStorageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;
}
declare var StorageEvent: {
	prototype: StorageEvent;
	new(): StorageEvent;
}

interface MessageEvent extends Event {
	source: Window;
	origin: string;
	data: any;
	initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;
	ports: any;
}
declare var MessageEvent: {
	prototype: MessageEvent;
	new(): MessageEvent;
}

interface StyleMedia {
	type: string;
	matchMedium(mediaquery: string): boolean;
}
declare var StyleMedia: {
	prototype: StyleMedia;
	new(): StyleMedia;
}

interface CDATASection extends Text {
}
declare var CDATASection: {
	prototype: CDATASection;
	new(): CDATASection;
}

interface Screen {
	width: number;
	colorDepth: number;
	availWidth: number;
	pixelDepth: number;
	availHeight: number;
	height: number;
}
declare var Screen: {
	prototype: Screen;
	new(): Screen;
}

interface AbstractView {
	styleMedia: StyleMedia;
	document: Document;
}
interface ScreenView extends AbstractView {
	outerWidth: number;
	pageXOffset: number;
	innerWidth: number;
	pageYOffset: number;
	screenY: number;
	outerHeight: number;
	screen: Screen;
	innerHeight: number;
	screenX: number;
	scroll(x?: number, y?: number): void;
	scrollBy(x?: number, y?: number): void;
	scrollTo(x?: number, y?: number): void;
}


interface UIEvent extends Event {
	detail: number;
	view: AbstractView;
	initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, detailArg: number): void;
}
declare var UIEvent: {
	prototype: UIEvent;
	new(): UIEvent;
}

interface FocusEvent extends UIEvent {
	relatedTarget: EventTarget;
	initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, detailArg: number, relatedTargetArg: EventTarget): void;
}
declare var FocusEvent: {
	prototype: FocusEvent;
	new(): FocusEvent;
}

interface KeyboardEventExtensions {
	keyCode: number;
	which: number;
	charCode: number;
}
interface KeyboardEvent extends UIEvent, KeyboardEventExtensions {
	location: number;
	shiftKey: boolean;
	locale: string;
	key: string;
	altKey: boolean;
	metaKey: boolean;
	char: string;
	ctrlKey: boolean;
	repeat: boolean;
	getModifierState(keyArg: string): boolean;
	initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
	DOM_KEY_LOCATION_RIGHT: number;
	DOM_KEY_LOCATION_STANDARD: number;
	DOM_KEY_LOCATION_LEFT: number;
	DOM_KEY_LOCATION_NUMPAD: number;
	DOM_KEY_LOCATION_JOYSTICK: number;
	DOM_KEY_LOCATION_MOBILE: number;
}
declare var KeyboardEvent: {
	prototype: KeyboardEvent;
	new(): KeyboardEvent;
	DOM_KEY_LOCATION_RIGHT: number;
	DOM_KEY_LOCATION_STANDARD: number;
	DOM_KEY_LOCATION_LEFT: number;
	DOM_KEY_LOCATION_NUMPAD: number;
	DOM_KEY_LOCATION_JOYSTICK: number;
	DOM_KEY_LOCATION_MOBILE: number;
}

interface MSMouseEventExtensions {
	toElement: Element;
	layerY: number;
	fromElement: Element;
	which: number;
	layerX: number;
}
interface MouseEvent extends UIEvent, MSMouseEventExtensions {
	pageX: number;
	offsetY: number;
	x: number;
	y: number;
	altKey: boolean;
	metaKey: boolean;
	ctrlKey: boolean;
	offsetX: number;
	screenX: number;
	clientY: number;
	shiftKey: boolean;
	screenY: number;
	relatedTarget: EventTarget;
	button: number;
	pageY: number;
	buttons: number;
	clientX: number;
	initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;
	getModifierState(keyArg: string): boolean;
}
declare var MouseEvent: {
	prototype: MouseEvent;
	new(): MouseEvent;
}

interface MouseWheelEvent extends MouseEvent {
	wheelDelta: number;
	initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;
}
declare var MouseWheelEvent: {
	prototype: MouseWheelEvent;
	new(): MouseWheelEvent;
}

interface DragEvent extends MouseEvent {
	dataTransfer: DataTransfer;
	initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
}
declare var DragEvent: {
	prototype: DragEvent;
	new(): DragEvent;
}

interface DataTransfer {
	effectAllowed: string;
	dropEffect: string;
	clearData(format?: string): boolean;
	setData(format: string, data: string): boolean;
	getData(format: string): string;
}
declare var DataTransfer: {
	prototype: DataTransfer;
	new(): DataTransfer;
}


interface EventTarget {
	removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
	dispatchEvent(evt: Event): boolean;
}

interface Node extends EventTarget {
	nodeType: number;
	previousSibling: Node;
	localName: string;
	namespaceURI: string;
	textContent: string;
	parentNode: Node;
	nextSibling: Node;
	nodeValue: string;
	lastChild: Node;
	childNodes: NodeList;
	nodeName: string;
	ownerDocument: Document;
	firstChild: Node;
	prefix: string;
	removeChild(oldChild: Node): Node;
	appendChild(newChild: Node): Node;
	isSupported(feature: string, version: string): boolean;
	isEqualNode(arg: Node): boolean;
	lookupPrefix(namespaceURI: string): string;
	isDefaultNamespace(namespaceURI: string): boolean;
	compareDocumentPosition(other: Node): number;
	normalize(): void;
	isSameNode(other: Node): boolean;
	hasAttributes(): boolean;
	lookupNamespaceURI(prefix: string): string;
	cloneNode(deep?: boolean): Node;
	hasChildNodes(): boolean;
	replaceChild(newChild: Node, oldChild: Node): Node;
	insertBefore(newChild: Node, refChild?: Node): Node;
	ENTITY_REFERENCE_NODE: number;
	ATTRIBUTE_NODE: number;
	DOCUMENT_FRAGMENT_NODE: number;
	TEXT_NODE: number;
	ELEMENT_NODE: number;
	COMMENT_NODE: number;
	DOCUMENT_POSITION_DISCONNECTED: number;
	DOCUMENT_POSITION_CONTAINED_BY: number;
	DOCUMENT_POSITION_CONTAINS: number;
	DOCUMENT_TYPE_NODE: number;
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
	DOCUMENT_NODE: number;
	ENTITY_NODE: number;
	PROCESSING_INSTRUCTION_NODE: number;
	CDATA_SECTION_NODE: number;
	NOTATION_NODE: number;
	DOCUMENT_POSITION_FOLLOWING: number;
	DOCUMENT_POSITION_PRECEDING: number;
}
declare var Node: {
	prototype: Node;
	new(): Node;
	ENTITY_REFERENCE_NODE: number;
	ATTRIBUTE_NODE: number;
	DOCUMENT_FRAGMENT_NODE: number;
	TEXT_NODE: number;
	ELEMENT_NODE: number;
	COMMENT_NODE: number;
	DOCUMENT_POSITION_DISCONNECTED: number;
	DOCUMENT_POSITION_CONTAINED_BY: number;
	DOCUMENT_POSITION_CONTAINS: number;
	DOCUMENT_TYPE_NODE: number;
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
	DOCUMENT_NODE: number;
	ENTITY_NODE: number;
	PROCESSING_INSTRUCTION_NODE: number;
	CDATA_SECTION_NODE: number;
	NOTATION_NODE: number;
	DOCUMENT_POSITION_FOLLOWING: number;
	DOCUMENT_POSITION_PRECEDING: number;
}


interface NodeList {
	length: number;
	item(index: number): Node;
	[index: number]: Node;
}
declare var NodeList: {
	prototype: NodeList;
	new(): NodeList;
}

interface NodeListOf<TNode extends Node> {
	length: number;
	item(index: number): TNode;
	[index: number]: TNode;
}

interface NodeSelector {
	querySelectorAll(selectors: string): NodeList;
	querySelector(selectors: string): Element;
}

interface Element extends Node, NodeSelector {
	scrollTop: number;
	clientLeft: number;
	scrollLeft: number;
	tagName: string;
	clientWidth: number;
	scrollWidth: number;
	clientHeight: number;
	clientTop: number;
	scrollHeight: number;
	getAttribute(name?: string): string;
	getBoundingClientRect(): ClientRect;
	hasAttribute(name: string): boolean;
	removeAttribute(name?: string): void;
	getElementsByTagName(name: string): NodeList;
	getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
	getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
	getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
	getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
	getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
	getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
	getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
	getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
	getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
	getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
	getClientRects(): ClientRectList;
	setAttribute(name?: string, value?: string): void;
}
declare var Element: {
	prototype: Element;
	new(): Element;
}

interface MSHTMLElementExtensions {
	//これだけよく使うので
	parentElement: HTMLElement;
}
interface HTMLElement extends Element, MSHTMLElementExtensions {
	ondragend: (ev: DragEvent) => any;
	addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onkeydown: (ev: KeyboardEvent) => any;
	addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	ondragover: (ev: DragEvent) => any;
	addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onkeyup: (ev: KeyboardEvent) => any;
	addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	offsetTop: number;
	onreset: (ev: Event) => any;
	addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmouseup: (ev: MouseEvent) => any;
	addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	ondragstart: (ev: DragEvent) => any;
	addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	ondrag: (ev: DragEvent) => any;
	addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	innerHTML: string;
	onmouseover: (ev: MouseEvent) => any;
	addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	ondragleave: (ev: DragEvent) => any;
	addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	lang: string;
	onpause: (ev: Event) => any;
	addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
	className: string;
	onseeked: (ev: Event) => any;
	addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmousedown: (ev: MouseEvent) => any;
	addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	title: string;
	onclick: (ev: MouseEvent) => any;
	addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onwaiting: (ev: Event) => any;
	addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
	outerHTML: string;
	offsetLeft: number;
	ondurationchange: (ev: Event) => any;
	addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
	offsetHeight: number;
	dir: string;
	onblur: (ev: FocusEvent) => any;
	addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	onemptied: (ev: Event) => any;
	addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
	onseeking: (ev: Event) => any;
	addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
	oncanplay: (ev: Event) => any;
	addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
	onstalled: (ev: Event) => any;
	addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmousemove: (ev: MouseEvent) => any;
	addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	style: CSSStyleDeclaration;
	isContentEditable: boolean;
	onratechange: (ev: Event) => any;
	addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onloadstart: (ev: Event) => any;
	addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
	ondragenter: (ev: DragEvent) => any;
	addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	contentEditable: string;
	onsubmit: (ev: Event) => any;
	addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
	tabIndex: number;
	onprogress: (ev: any) => any;
	addEventListener(type: "progress", listener: (ev: any) => any, useCapture?: boolean): void;
	ondblclick: (ev: MouseEvent) => any;
	addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	oncontextmenu: (ev: MouseEvent) => any;
	addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onchange: (ev: Event) => any;
	addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
	onloadedmetadata: (ev: Event) => any;
	addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
	onerror: (ev: Event) => any;
	addEventListener(type: "error", listener: (ev: Event) => any, useCapture?: boolean): void;
	onplay: (ev: Event) => any;
	addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
	id: string;
	onplaying: (ev: Event) => any;
	addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
	oncanplaythrough: (ev: Event) => any;
	addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
	onabort: (ev: UIEvent) => any;
	addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	onreadystatechange: (ev: Event) => any;
	addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onkeypress: (ev: KeyboardEvent) => any;
	addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	offsetParent: Element;
	onloadeddata: (ev: Event) => any;
	addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
	disabled: boolean;
	onsuspend: (ev: Event) => any;
	addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
	accessKey: string;
	onfocus: (ev: FocusEvent) => any;
	addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	ontimeupdate: (ev: Event) => any;
	addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
	onselect: (ev: UIEvent) => any;
	addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	ondrop: (ev: DragEvent) => any;
	addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	offsetWidth: number;
	onmouseout: (ev: MouseEvent) => any;
	addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onended: (ev: Event) => any;
	addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
	onscroll: (ev: UIEvent) => any;
	addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	onmousewheel: (ev: MouseWheelEvent) => any;
	addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
	onvolumechange: (ev: Event) => any;
	addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onload: (ev: Event) => any;
	addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
	oninput: (ev: Event) => any;
	addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
	click(): void;
	getElementsByClassName(classNames: string): NodeList;
	scrollIntoView(top?: boolean): void;
	focus(): void;
	blur(): void;
	insertAdjacentHTML(where: string, html: string): void;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLElement: {
	prototype: HTMLElement;
	new(): HTMLElement;
}

interface HTMLCanvasElement extends HTMLElement {
	width: number;
	height: number;
	toDataURL(): string;
	toDataURL(type: string, ...args: any[]): string;
	getContext(contextId: string): any;
	getContext(contextId: "2d"): CanvasRenderingContext2D;
}
declare var HTMLCanvasElement: {
	prototype: HTMLCanvasElement;
	new(): HTMLCanvasElement;
}

interface DOML2DeprecatedAlignmentStyle_HTMLImageElement {
	align: string;
}

interface HTMLImageElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLImageElement {
	width: number;
	naturalHeight: number;
	alt: string;
	src: string;
	useMap: string;
	naturalWidth: number;
	name: string;
	height: number;
	longDesc: string;
	isMap: boolean;
	complete: boolean;
}
declare var HTMLImageElement: {
	prototype: HTMLImageElement;
	new(): HTMLImageElement;
}

interface DOML2DeprecatedAlignmentStyle_HTMLDivElement {
	align: string;
}
interface HTMLDivElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLDivElement {
}
declare var HTMLDivElement: {
	prototype: HTMLDivElement;
	new(): HTMLDivElement;
}

interface TimeRanges {
	length: number;
	start(index: number): number;
	end(index: number): number;
}
declare var TimeRanges: {
	prototype: TimeRanges;
	new(): TimeRanges;
}
interface MediaError {
	code: number;
	MEDIA_ERR_ABORTED: number;
	MEDIA_ERR_NETWORK: number;
	MEDIA_ERR_SRC_NOT_SUPPORTED: number;
	MEDIA_ERR_DECODE: number;
}
declare var MediaError: {
	prototype: MediaError;
	new(): MediaError;
	MEDIA_ERR_ABORTED: number;
	MEDIA_ERR_NETWORK: number;
	MEDIA_ERR_SRC_NOT_SUPPORTED: number;
	MEDIA_ERR_DECODE: number;
}

interface MediaList {
	length: number;
	mediaText: string;
	deleteMedium(oldMedium: string): void;
	appendMedium(newMedium: string): void;
	item(index: number): string;
	[index: number]: string;
	toString(): string;
}
declare var MediaList: {
	prototype: MediaList;
	new(): MediaList;
}

interface HTMLMediaElement extends HTMLElement {
	initialTime: number;
	played: TimeRanges;
	currentSrc: string;
	readyState: string;
	autobuffer: boolean;
	loop: boolean;
	ended: boolean;
	buffered: TimeRanges;
	error: MediaError;
	seekable: TimeRanges;
	autoplay: boolean;
	controls: boolean;
	volume: number;
	src: string;
	playbackRate: number;
	duration: number;
	muted: boolean;
	defaultPlaybackRate: number;
	paused: boolean;
	seeking: boolean;
	currentTime: number;
	preload: string;
	networkState: number;
	pause(): void;
	play(): void;
	load(): void;
	canPlayType(type: string): string;
	HAVE_METADATA: number;
	HAVE_CURRENT_DATA: number;
	HAVE_NOTHING: number;
	NETWORK_NO_SOURCE: number;
	HAVE_ENOUGH_DATA: number;
	NETWORK_EMPTY: number;
	NETWORK_LOADING: number;
	NETWORK_IDLE: number;
	HAVE_FUTURE_DATA: number;
}
declare var HTMLMediaElement: {
	prototype: HTMLMediaElement;
	new(): HTMLMediaElement;
	HAVE_METADATA: number;
	HAVE_CURRENT_DATA: number;
	HAVE_NOTHING: number;
	NETWORK_NO_SOURCE: number;
	HAVE_ENOUGH_DATA: number;
	NETWORK_EMPTY: number;
	NETWORK_LOADING: number;
	NETWORK_IDLE: number;
	HAVE_FUTURE_DATA: number;
}

interface HTMLAudioElement extends HTMLMediaElement {
}
declare var HTMLAudioElement: {
	prototype: HTMLAudioElement;
	new(): HTMLAudioElement;
}

interface HTMLVideoElement extends HTMLMediaElement {
	width: number;
	videoWidth: number;
	videoHeight: number;
	height: number;
	poster: string;
}
declare var HTMLVideoElement: {
	prototype: HTMLVideoElement;
	new(): HTMLVideoElement;
}

interface HTMLHtmlElement extends HTMLElement {
}
declare var HTMLHtmlElement: {
	prototype: HTMLHtmlElement;
	new(): HTMLHtmlElement;
}

interface HTMLHeadElement extends HTMLElement {
	profile: string;
}
declare var HTMLHeadElement: {
	prototype: HTMLHeadElement;
	new(): HTMLHeadElement;
}

interface HTMLBodyElement extends HTMLElement {
	onresize: (ev: UIEvent) => any;
	addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	ononline: (ev: Event) => any;
	addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
	onafterprint: (ev: Event) => any;
	addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
	onbeforeprint: (ev: Event) => any;
	addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
	onoffline: (ev: Event) => any;
	addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
	onblur: (ev: FocusEvent) => any;
	addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	onhashchange: (ev: Event) => any;
	addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onunload: (ev: Event) => any;
	addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
	onfocus: (ev: FocusEvent) => any;
	addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	onmessage: (ev: MessageEvent) => any;
	addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
	onload: (ev: Event) => any;
	addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
	onerror: (ev: Event) => any;
	addEventListener(type: "error", listener: (ev: Event) => any, useCapture?: boolean): void;
	onbeforeunload: (ev: BeforeUnloadEvent) => any;
	addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
	onstorage: (ev: StorageEvent) => any;
	addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var HTMLBodyElement: {
	prototype: HTMLBodyElement;
	new(): HTMLBodyElement;
}

interface HTMLScriptElement extends HTMLElement {
	defer: boolean;
	text: string;
	src: string;
	htmlFor: string;
	charset: string;
	type: string;
	event: string;
	async: boolean;
}
declare var HTMLScriptElement: {
	prototype: HTMLScriptElement;
	new(): HTMLScriptElement;
}

interface CanvasGradient {
	addColorStop(offset: number, color: string): void;
}
declare var CanvasGradient: {
	prototype: CanvasGradient;
	new(): CanvasGradient;
}

interface CanvasPattern {
}
declare var CanvasPattern: {
	prototype: CanvasPattern;
	new(): CanvasPattern;
}

interface TextMetrics {
	width: number;
}
declare var TextMetrics: {
	prototype: TextMetrics;
	new(): TextMetrics;
}

interface CanvasRenderingContext2D {
	shadowOffsetX: number;
	lineWidth: number;
	miterLimit: number;
	canvas: HTMLCanvasElement;
	strokeStyle: any;
	font: string;
	globalAlpha: number;
	globalCompositeOperation: string;
	shadowOffsetY: number;
	fillStyle: any;
	lineCap: string;
	shadowBlur: number;
	textAlign: string;
	textBaseline: string;
	shadowColor: string;
	lineJoin: string;
	restore(): void;
	setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	save(): void;
	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
	measureText(text: string): TextMetrics;
	isPointInPath(x: number, y: number): boolean;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
	rotate(angle: number): void;
	fillText(text: string, x: number, y: number, maxWidth?: number): void;
	translate(x: number, y: number): void;
	scale(x: number, y: number): void;
	createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
	lineTo(x: number, y: number): void;
	fill(): void;
	createPattern(image: HTMLElement, repetition: string): CanvasPattern;
	closePath(): void;
	rect(x: number, y: number, w: number, h: number): void;
	clip(): void;
	createImageData(imageDataOrSw: any, sh?: number): ImageData;
	clearRect(x: number, y: number, w: number, h: number): void;
	moveTo(x: number, y: number): void;
	getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
	fillRect(x: number, y: number, w: number, h: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
	transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	stroke(): void;
	strokeRect(x: number, y: number, w: number, h: number): void;
	strokeText(text: string, x: number, y: number, maxWidth?: number): void;
	beginPath(): void;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
	createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
}
declare var CanvasRenderingContext2D: {
	prototype: CanvasRenderingContext2D;
	new(): CanvasRenderingContext2D;
}

interface ImageData {
	width: number;
	data: number[];
	height: number;
}
declare var ImageData: {
	prototype: ImageData;
	new(): ImageData;
}


interface HTMLIFrameElement extends HTMLElement {
	width: string;
	contentWindow: Window;
	scrolling: string;
	src: string;
	marginHeight: string;
	name: string;
	marginWidth: string;
	height: string;
	contentDocument: Document;
	longDesc: string;
	frameBorder: string;
}
declare var HTMLIFrameElement: {
	prototype: HTMLIFrameElement;
	new(): HTMLIFrameElement;
}

interface ViewCSS {
	getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
}
interface WindowPerformance {
	performance: any;
}
interface WindowLocalStorage {
	localStorage: Storage;
}
interface WindowSessionStorage {
	sessionStorage: Storage;
}
interface WindowTimers {
	clearTimeout(handle: number): void;
	setTimeout(expression: any, msec?: number, language?: any): number;
	clearInterval(handle: number): void;
	setInterval(expression: any, msec?: number, language?: any): number;
}
interface Window extends ViewCSS, WindowPerformance, ScreenView, EventTarget, WindowLocalStorage, WindowSessionStorage, WindowTimers, WindowConsole, WindowAnimationTiming {
	ondragend: (ev: DragEvent) => any;
	addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onkeydown: (ev: KeyboardEvent) => any;
	addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	ondragover: (ev: DragEvent) => any;
	addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onkeyup: (ev: KeyboardEvent) => any;
	addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	onreset: (ev: Event) => any;
	addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmouseup: (ev: MouseEvent) => any;
	addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	ondragstart: (ev: DragEvent) => any;
	addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	ondrag: (ev: DragEvent) => any;
	addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onmouseover: (ev: MouseEvent) => any;
	addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	ondragleave: (ev: DragEvent) => any;
	addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	history: History;
	name: string;
	onafterprint: (ev: Event) => any;
	addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
	onpause: (ev: Event) => any;
	addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
	onbeforeprint: (ev: Event) => any;
	addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
	top: Window;
	onmousedown: (ev: MouseEvent) => any;
	addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onseeked: (ev: Event) => any;
	addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
	opener: Window;
	onclick: (ev: MouseEvent) => any;
	addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onwaiting: (ev: Event) => any;
	addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
	ononline: (ev: Event) => any;
	addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
	ondurationchange: (ev: Event) => any;
	addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
	frames: Window;
	onblur: (ev: FocusEvent) => any;
	addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	onemptied: (ev: Event) => any;
	addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
	onseeking: (ev: Event) => any;
	addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
	oncanplay: (ev: Event) => any;
	addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
	onstalled: (ev: Event) => any;
	addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmousemove: (ev: MouseEvent) => any;
	addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onoffline: (ev: Event) => any;
	addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
	length: number;
	onbeforeunload: (ev: BeforeUnloadEvent) => any;
	addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
	onratechange: (ev: Event) => any;
	addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onstorage: (ev: StorageEvent) => any;
	addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
	onloadstart: (ev: Event) => any;
	addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
	ondragenter: (ev: DragEvent) => any;
	addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onsubmit: (ev: Event) => any;
	addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
	self: Window;
	onprogress: (ev: any) => any;
	addEventListener(type: "progress", listener: (ev: any) => any, useCapture?: boolean): void;
	ondblclick: (ev: MouseEvent) => any;
	addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	oncontextmenu: (ev: MouseEvent) => any;
	addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onchange: (ev: Event) => any;
	addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
	onloadedmetadata: (ev: Event) => any;
	addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
	onplay: (ev: Event) => any;
	addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
	onerror: ErrorFunction;
	onplaying: (ev: Event) => any;
	addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
	parent: Window;
	location: Location;
	oncanplaythrough: (ev: Event) => any;
	addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
	onabort: (ev: UIEvent) => any;
	addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	onreadystatechange: (ev: Event) => any;
	addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onkeypress: (ev: KeyboardEvent) => any;
	addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	frameElement: Element;
	onloadeddata: (ev: Event) => any;
	addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
	onsuspend: (ev: Event) => any;
	addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
	window: Window;
	onfocus: (ev: FocusEvent) => any;
	addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	onmessage: (ev: MessageEvent) => any;
	addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
	ontimeupdate: (ev: Event) => any;
	addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
	onresize: (ev: UIEvent) => any;
	addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	navigator: Navigator;
	onselect: (ev: UIEvent) => any;
	addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	ondrop: (ev: DragEvent) => any;
	addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onmouseout: (ev: MouseEvent) => any;
	addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onended: (ev: Event) => any;
	addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
	onhashchange: (ev: Event) => any;
	addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onunload: (ev: Event) => any;
	addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
	onscroll: (ev: UIEvent) => any;
	addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	onmousewheel: (ev: MouseWheelEvent) => any;
	addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
	onload: (ev: Event) => any;
	addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
	onvolumechange: (ev: Event) => any;
	addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	oninput: (ev: Event) => any;
	addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
	alert(message?: string): void;
	focus(): void;
	print(): void;
	prompt(message?: string, defaul?: string): string;
	toString(): string;
	open(url?: string, target?: string, features?: string, replace?: boolean): Window;
	close(): void;
	confirm(message?: string): boolean;
	postMessage(message: any, targetOrigin: string, ports?: any): void;
	showModalDialog(url?: string, argument?: any, options?: any): any;
	blur(): void;
	//getSelection(): Selection;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
declare var Window: {
	prototype: Window;
	new(): Window;
}


interface StyleSheet {
	disabled: boolean;
	ownerNode: Node;
	parentStyleSheet: StyleSheet;
	href: string;
	media: MediaList;
	type: string;
	title: string;
}
declare var StyleSheet: {
	prototype: StyleSheet;
	new(): StyleSheet;
}
interface StyleSheetList {
	length: number;
	item(index?: number): StyleSheet;
	[index: number]: StyleSheet;
}
declare var StyleSheetList: {
	prototype: StyleSheetList;
	new(): StyleSheetList;
}

interface CSSRuleList {
	length: number;
	item(index: number): CSSRule;
	[index: number]: CSSRule;
}
declare var CSSRuleList: {
	prototype: CSSRuleList;
	new(): CSSRuleList;
}

interface CSSStyleSheet extends StyleSheet {
	ownerRule: CSSRule;
	cssRules: CSSRuleList;
	insertRule(rule: string, index?: number): number;
	deleteRule(index?: number): void;
}
declare var CSSStyleSheet: {
	prototype: CSSStyleSheet;
	new(): CSSStyleSheet;
}

interface CSSRule {
	cssText: string;
	parentStyleSheet: CSSStyleSheet;
	parentRule: CSSRule;
	type: number;
	IMPORT_RULE: number;
	MEDIA_RULE: number;
	STYLE_RULE: number;
	NAMESPACE_RULE: number;
	PAGE_RULE: number;
	UNKNOWN_RULE: number;
	FONT_FACE_RULE: number;
	CHARSET_RULE: number;
}
declare var CSSRule: {
	prototype: CSSRule;
	new(): CSSRule;
	IMPORT_RULE: number;
	MEDIA_RULE: number;
	STYLE_RULE: number;
	NAMESPACE_RULE: number;
	PAGE_RULE: number;
	UNKNOWN_RULE: number;
	FONT_FACE_RULE: number;
	CHARSET_RULE: number;
}

interface CSS2Properties {
	backgroundAttachment: string;
	visibility: string;
	fontFamily: string;
	borderRightStyle: string;
	clear: string;
	content: string;
	counterIncrement: string;
	orphans: string;
	marginBottom: string;
	borderStyle: string;
	counterReset: string;
	outlineWidth: string;
	marginRight: string;
	paddingLeft: string;
	borderBottom: string;
	marginTop: string;
	borderTopColor: string;
	top: string;
	fontWeight: string;
	textIndent: string;
	borderRight: string;
	width: string;
	listStyleImage: string;
	cursor: string;
	listStylePosition: string;
	borderTopStyle: string;
	direction: string;
	maxWidth: string;
	color: string;
	clip: string;
	borderRightWidth: string;
	verticalAlign: string;
	pageBreakAfter: string;
	overflow: string;
	borderBottomStyle: string;
	borderLeftStyle: string;
	fontStretch: string;
	emptyCells: string;
	padding: string;
	paddingRight: string;
	background: string;
	bottom: string;
	height: string;
	paddingTop: string;
	right: string;
	borderLeftWidth: string;
	borderLeft: string;
	backgroundPosition: string;
	backgroundColor: string;
	widows: string;
	lineHeight: string;
	pageBreakInside: string;
	borderTopWidth: string;
	left: string;
	outlineStyle: string;
	borderTop: string;
	paddingBottom: string;
	outlineColor: string;
	wordSpacing: string;
	outline: string;
	font: string;
	marginLeft: string;
	display: string;
	maxHeight: string;
	cssFloat: string;
	letterSpacing: string;
	borderSpacing: string;
	backgroundRepeat: string;
	fontSizeAdjust: string;
	borderLeftColor: string;
	borderWidth: string;
	backgroundImage: string;
	listStyleType: string;
	whiteSpace: string;
	fontStyle: string;
	borderBottomColor: string;
	minWidth: string;
	position: string;
	zIndex: string;
	borderColor: string;
	listStyle: string;
	captionSide: string;
	borderCollapse: string;
	fontVariant: string;
	quotes: string;
	tableLayout: string;
	unicodeBidi: string;
	borderBottomWidth: string;
	minHeight: string;
	textDecoration: string;
	fontSize: string;
	border: string;
	pageBreakBefore: string;
	textAlign: string;
	textTransform: string;
	margin: string;
	borderRightColor: string;
}
interface CSS3Properties {
	textAlignLast: string;
	textUnderlinePosition: string;
	wordWrap: string;
	borderTopLeftRadius: string;
	backgroundClip: string;
	msTransformOrigin: string;
	opacity: string;
	overflowY: string;
	boxShadow: string;
	backgroundSize: string;
	wordBreak: string;
	boxSizing: string;
	rubyOverhang: string;
	rubyAlign: string;
	textJustify: string;
	borderRadius: string;
	overflowX: string;
	borderTopRightRadius: string;
	msTransform: string;
	borderBottomLeftRadius: string;
	rubyPosition: string;
	borderBottomRightRadius: string;
	backgroundOrigin: string;
	textOverflow: string;
}

interface CSSStyleDeclaration extends CSS3Properties, CSS2Properties {
	cssText: string;
	length: number;
	parentRule: CSSRule;
	getPropertyPriority(propertyName: string): string;
	getPropertyValue(propertyName: string): string;
	removeProperty(propertyName: string): string;
	item(index: number): string;
	[index: number]: string;
	setProperty(propertyName: string, value: string, priority?: string): void;
}
declare var CSSStyleDeclaration: {
	prototype: CSSStyleDeclaration;
	new(): CSSStyleDeclaration;
}


interface NavigatorID {
	appVersion: string;
	appName: string;
	userAgent: string;
	platform: string;
}
interface NavigatorOnLine {
	onLine: boolean;
}
interface Coordinates {
	altitudeAccuracy: number;
	longitude: number;
	latitude: number;
	speed: number;
	heading: number;
	altitude: number;
	accuracy: number;
}
declare var Coordinates: {
	prototype: Coordinates;
	new(): Coordinates;
}
interface Position {
	timestamp: number;
	coords: Coordinates;
}
declare var Position: {
	prototype: Position;
	new(): Position;
}
interface PositionCallback {
	(position: Position): void;
}
interface PositionOptions {
	enableHighAccuracy?: boolean;
	timeout?: number;
	maximumAge?: number;
}
interface PositionError {
	code: number;
	message: string;
	toString(): string;
	POSITION_UNAVAILABLE: number;
	PERMISSION_DENIED: number;
	TIMEOUT: number;
}
declare var PositionError: {
	POSITION_UNAVAILABLE: number;
	PERMISSION_DENIED: number;
	TIMEOUT: number;
}
interface PositionErrorCallback {
	(error: PositionError): void;
}
interface Geolocation {
	clearWatch(watchId: number): void;
	getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
	watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}
declare var Geolocation: {
	prototype: Geolocation;
	new(): Geolocation;
}

interface NavigatorGeolocation {
	geolocation: Geolocation;
}
interface Navigator extends NavigatorID, NavigatorOnLine {
}
declare var Navigator: {
	prototype: Navigator;
	new(): Navigator;
}

interface Location {
	hash: string;
	protocol: string;
	search: string;
	href: string;
	hostname: string;
	port: string;
	pathname: string;
	host: string;
	reload(flag?: boolean): void;
	replace(url: string): void;
	assign(url: string): void;
	toString(): string;
}
declare var Location: {
	prototype: Location;
	new(): Location;
}

interface History {
	length: number;
	back(distance?: any): void;
	forward(distance?: any): void;
	go(delta?: any): void;
}
declare var History: {
	prototype: History;
	new(): History;
}

interface NodeFilterCallback {
	(...args: any[]): any;
}
interface TreeWalker {
	whatToShow: number;
	filter: NodeFilterCallback;
	root: Node;
	currentNode: Node;
	expandEntityReferences: boolean;
	previousSibling(): Node;
	lastChild(): Node;
	nextSibling(): Node;
	nextNode(): Node;
	parentNode(): Node;
	firstChild(): Node;
	previousNode(): Node;
}
declare var TreeWalker: {
	prototype: TreeWalker;
	new(): TreeWalker;
}
interface DocumentEvent {
	createEvent(eventInterface: string): Event;
}
interface NodeIterator {
	whatToShow: number;
	filter: NodeFilterCallback;
	root: Node;
	expandEntityReferences: boolean;
	nextNode(): Node;
	detach(): void;
	previousNode(): Node;
}
declare var NodeIterator: {
	prototype: NodeIterator;
	new(): NodeIterator;
}
interface DocumentTraversal {
	createNodeIterator(root: Node, whatToShow: number, filter: NodeFilterCallback, entityReferenceExpansion: boolean): NodeIterator;
	createTreeWalker(root: Node, whatToShow: number, filter: NodeFilterCallback, entityReferenceExpansion: boolean): TreeWalker;
}
interface Range {
	startOffset: number;
	collapsed: boolean;
	endOffset: number;
	startContainer: Node;
	endContainer: Node;
	commonAncestorContainer: Node;
	setStart(refNode: Node, offset: number): void;
	setEndBefore(refNode: Node): void;
	setStartBefore(refNode: Node): void;
	selectNode(refNode: Node): void;
	detach(): void;
	getBoundingClientRect(): ClientRect;
	toString(): string;
	compareBoundaryPoints(how: number, sourceRange: Range): number;
	insertNode(newNode: Node): void;
	collapse(toStart: boolean): void;
	selectNodeContents(refNode: Node): void;
	cloneContents(): DocumentFragment;
	setEnd(refNode: Node, offset: number): void;
	cloneRange(): Range;
	getClientRects(): ClientRectList;
	surroundContents(newParent: Node): void;
	deleteContents(): void;
	setStartAfter(refNode: Node): void;
	extractContents(): DocumentFragment;
	setEndAfter(refNode: Node): void;
	END_TO_END: number;
	START_TO_START: number;
	START_TO_END: number;
	END_TO_START: number;
}
declare var Range: {
	prototype: Range;
	new(): Range;
	END_TO_END: number;
	START_TO_START: number;
	START_TO_END: number;
	END_TO_START: number;
}

interface DocumentRange {
	createRange(): Range;
}
interface DocumentStyle {
	styleSheets: StyleSheetList;
}

interface Document extends Node, DocumentStyle, DocumentRange, HTMLDocument, NodeSelector, DocumentEvent, DocumentTraversal, DocumentView {
	//doctype: DocumentType;
	xmlVersion: string;
	//implementation: DOMImplementation;
	xmlEncoding: string;
	xmlStandalone: boolean;
	documentElement: HTMLElement;
	inputEncoding: string;
	createElement(tagName: string): HTMLElement;
	createElement(tagName: "audio"): HTMLAudioElement;
	createElement(tagName: "body"): HTMLBodyElement;
	createElement(tagName: "canvas"): HTMLCanvasElement;
	createElement(tagName: "div"): HTMLDivElement;
	createElement(tagName: "head"): HTMLHeadElement;
	createElement(tagName: "iframe"): HTMLIFrameElement;
	createElement(tagName: "img"): HTMLImageElement;
	createElement(tagName: "script"): HTMLScriptElement;
	createElement(tagName: "video"): HTMLVideoElement;
	adoptNode(source: Node): Node;
	//createComment(data: string): Comment;
	//createDocumentFragment(): DocumentFragment;
	getElementsByTagName(tagname: string): NodeList;
	getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
	getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
	getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
	getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
	getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
	getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
	getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
	getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
	getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
	getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
	getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
	//createProcessingInstruction(target: string, data: string): ProcessingInstruction;
	createElementNS(namespaceURI: string, qualifiedName: string): Element;
	//createAttribute(name: string): Attr;
	createTextNode(data: string): Text;
	importNode(importedNode: Node, deep: boolean): Node;
	createCDATASection(data: string): CDATASection;
	//createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
	getElementById(elementId: string): HTMLElement;
}
declare var Document: {
	prototype: Document;
	new(): Document;
}

interface CharacterData extends Node {
	length: number;
	data: string;
	deleteData(offset: number, count: number): void;
	replaceData(offset: number, count: number, arg: string): void;
	appendData(arg: string): void;
	insertData(offset: number, arg: string): void;
	substringData(offset: number, count: number): string;
}
declare var CharacterData: {
	prototype: CharacterData;
	new(): CharacterData;
}

interface Text extends CharacterData {
	wholeText: string;
	splitText(offset: number): Text;
	replaceWholeText(content: string): Text;
}
declare var Text: {
	prototype: Text;
	new(): Text;
}

interface DocumentFragment extends Node, NodeSelector {
}
declare var DocumentFragment: {
	prototype: DocumentFragment;
	new(): DocumentFragment;
}

interface DocumentView {
	defaultView: AbstractView;
	elementFromPoint(x: number, y: number): Element;
}

interface HTMLDocument {
	ondragend: (ev: DragEvent) => any;
	addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	ondragover: (ev: DragEvent) => any;
	addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onkeydown: (ev: KeyboardEvent) => any;
	addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	bgColor: string;
	onkeyup: (ev: KeyboardEvent) => any;
	addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	onreset: (ev: Event) => any;
	addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmouseup: (ev: MouseEvent) => any;
	addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	ondragstart: (ev: DragEvent) => any;
	addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	scripts: HTMLCollection;
	ondrag: (ev: DragEvent) => any;
	addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	linkColor: string;
	ondragleave: (ev: DragEvent) => any;
	addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onmouseover: (ev: MouseEvent) => any;
	addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onpause: (ev: Event) => any;
	addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
	charset: string;
	vlinkColor: string;
	onmousedown: (ev: MouseEvent) => any;
	addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onseeked: (ev: Event) => any;
	addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
	title: string;
	onclick: (ev: MouseEvent) => any;
	addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onwaiting: (ev: Event) => any;
	addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
	defaultCharset: string;
	embeds: HTMLCollection;
	ondurationchange: (ev: Event) => any;
	addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
	all: HTMLCollection;
	applets: HTMLCollection;
	forms: HTMLCollection;
	onblur: (ev: FocusEvent) => any;
	addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	dir: string;
	body: HTMLElement;
	designMode: string;
	onemptied: (ev: Event) => any;
	addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
	domain: string;
	onseeking: (ev: Event) => any;
	addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
	oncanplay: (ev: Event) => any;
	addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
	onstalled: (ev: Event) => any;
	addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
	onmousemove: (ev: MouseEvent) => any;
	addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onratechange: (ev: Event) => any;
	addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onloadstart: (ev: Event) => any;
	addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
	ondragenter: (ev: DragEvent) => any;
	addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onsubmit: (ev: Event) => any;
	addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
	onprogress: (ev: any) => any;
	addEventListener(type: "progress", listener: (ev: any) => any, useCapture?: boolean): void;
	ondblclick: (ev: MouseEvent) => any;
	addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	oncontextmenu: (ev: MouseEvent) => any;
	addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	activeElement: Element;
	onchange: (ev: Event) => any;
	addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
	onloadedmetadata: (ev: Event) => any;
	addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
	onerror: (ev: Event) => any;
	addEventListener(type: "error", listener: (ev: Event) => any, useCapture?: boolean): void;
	onplay: (ev: Event) => any;
	addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
	links: HTMLCollection;
	onplaying: (ev: Event) => any;
	addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
	URL: string;
	images: HTMLCollection;
	head: HTMLHeadElement;
	location: Location;
	cookie: string;
	oncanplaythrough: (ev: Event) => any;
	addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
	onabort: (ev: UIEvent) => any;
	addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	characterSet: string;
	anchors: HTMLCollection;
	lastModified: string;
	onreadystatechange: (ev: Event) => any;
	addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	onkeypress: (ev: KeyboardEvent) => any;
	addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
	onloadeddata: (ev: Event) => any;
	addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
	plugins: HTMLCollection;
	onsuspend: (ev: Event) => any;
	addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
	referrer: string;
	readyState: string;
	alinkColor: string;
	onfocus: (ev: FocusEvent) => any;
	addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
	fgColor: string;
	ontimeupdate: (ev: Event) => any;
	addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
	onselect: (ev: UIEvent) => any;
	addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	ondrop: (ev: DragEvent) => any;
	addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
	onmouseout: (ev: MouseEvent) => any;
	addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
	onended: (ev: Event) => any;
	addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
	compatMode: string;
	onscroll: (ev: UIEvent) => any;
	addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
	onmousewheel: (ev: MouseWheelEvent) => any;
	addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
	onload: (ev: Event) => any;
	addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
	onvolumechange: (ev: Event) => any;
	addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
	oninput: (ev: Event) => any;
	addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
	queryCommandValue(commandId: string): string;
	queryCommandIndeterm(commandId: string): boolean;
	execCommand(commandId: string, showUI?: boolean, value?: any): boolean;
	getElementsByName(elementName: string): NodeList;
	writeln(...content: string[]): void;
	open(url?: string, name?: string, features?: string, replace?: boolean): any;
	queryCommandState(commandId: string): boolean;
	close(): void;
	hasFocus(): boolean;
	getElementsByClassName(classNames: string): NodeList;
	queryCommandSupported(commandId: string): boolean;
	getSelection(): Selection;
	queryCommandEnabled(commandId: string): boolean;
	write(...content: string[]): void;
	queryCommandText(commandId: string): string;
	addEventListener(type: "DOMContentLoaded", listener: (ev: Event) => any, useCapture?: boolean): void;
	addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface HTMLCollection {
	length: number;
	item(nameOrIndex?: any, optionalIndex?: any): Element;
	(nameOrIndex: any, optionalIndex: any): Element;
	namedItem(name: string): Element;
	[index: number]: Element;
	(name: string): Element;
}
declare var HTMLCollection: {
	prototype: HTMLCollection;
	new(): HTMLCollection;
}

interface Selection {
	isCollapsed: boolean;
	anchorNode: Node;
	focusNode: Node;
	anchorOffset: number;
	focusOffset: number;
	rangeCount: number;
	addRange(range: Range): void;
	collapseToEnd(): void;
	toString(): string;
	selectAllChildren(parentNode: Node): void;
	getRangeAt(index: number): Range;
	collapse(parentNode: Node, offset: number): void;
	removeAllRanges(): void;
	collapseToStart(): void;
	deleteFromDocument(): void;
	removeRange(range: Range): void;
}
declare var Selection: {
	prototype: Selection;
	new(): Selection;
}


interface Console {
	info(): void;
	info(message: any, ...optionalParams: any[]): void;
	profile(reportName?: string): boolean;
	assert(): void;
	assert(test: boolean): void;
	assert(test: boolean, message: any, ...optionalParams: any[]): void;
	msIsIndependentlyComposed(element: Element): boolean;
	clear(): boolean;
	dir(): boolean;
	dir(value: any, ...optionalParams: any[]): boolean;
	warn(): void;
	warn(message: any, ...optionalParams: any[]): void;
	error(): void;
	error(message: any, ...optionalParams: any[]): void;
	log(): void;
	log(message: any, ...optionalParams: any[]): void;
	profileEnd(): boolean;
}
declare var Console: {
	prototype: Console;
	new(): Console;
}
interface WindowConsole {
	console: Console;
}
interface WindowAnimationTiming {
	animationStartTime: number;
	msAnimationStartTime: number;
	msCancelRequestAnimationFrame(handle: number): void;
	cancelAnimationFrame(handle: number): void;
	requestAnimationFrame(callback: FrameRequestCallback): number;
	msRequestAnimationFrame(callback: FrameRequestCallback): number;
}
interface FrameRequestCallback {
	(time: number): void;
}

declare var window: Window;
declare var document: Document;
declare var navigator: Navigator;
declare var console: Console;
declare var localStorage: Storage;
declare var sessionStorage: Storage;
declare function clearTimeout(handle: number): void;
declare function setTimeout(expression: any, msec?: number, language?: any): number;
declare function clearInterval(handle: number): void;
declare function setInterval(expression: any, msec?: number, language?: any): number;
declare var Image: { new (width?: number, height?: number): HTMLImageElement; };
declare var Audio: { new (src?: string): HTMLAudioElement; };
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
