module jg {
    class MT {
        public _mt: number[];
        public _index: number;
        constructor(seed?: number);
        static _mulUint32(a: number, b: number): number;
        public setSeed(seed: any): void;
        public _nextInt(): number;
        public next(): number;
        public nextInt(min: number, sup: number): number;
    }
}
module jg {
    interface CommonOffset {
        x: number;
        y: number;
    }
    interface CommonSize {
        width: number;
        height: number;
    }
    interface CommonArea extends CommonOffset, CommonSize {
    }
    interface IRectangle {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
}
module jg {
    enum Angle {
        Unknown,
        Left,
        Right,
        Up,
        Down,
    }
    enum RenderTransferMode {
        Unknown,
        Transfer,
        Flip,
        Direct,
    }
    enum InputEventType {
        Unknown,
        Keyboard,
        Point,
    }
    enum InputEventAction {
        Unknown,
        Down,
        Move,
        Up,
    }
    enum Keytype {
        Unknown,
        Left,
        Right,
        Up,
        Down,
        Enter,
        Esc,
    }
    enum ShapeStyle {
        Unknown,
        Stroke,
        Fill,
    }
    enum ShapeType {
        Unknown,
        Rect,
        Arc,
    }
    enum EffectType {
        None,
        Fade,
        Mosaic,
        Blur,
        SlideUp,
        SlideDown,
        SlideLeft,
        SlideRight,
        WipeUp,
        WipeDown,
        WipeLeft,
        WipeRight,
        WipeFadeUp,
        WipeFadeDown,
        WipeFadeLeft,
        WipeFadeRight,
        BoxOut,
        BoxOut45,
        BoxIn,
        BoxIn45,
        ArcOut,
        ArcIn,
        BoxOutBlack,
        BoxOut45Black,
        BoxInBlack,
        BoxIn45Black,
        ArcOutBlack,
        ArcInBlack,
        BoxOutWhite,
        BoxOut45White,
        BoxInWhite,
        BoxIn45White,
        ArcOutWhite,
        ArcInWhite,
    }
}
interface Window {
    mozRequestAnimationFrame(): number;
    webkitRequestAnimationFrame(): number;
    createCanvas(width: number, height: number): HTMLCanvasElement;
    random(min: number, max: number): number;
}
module jg {
    class Rectangle implements IRectangle {
        public left: number;
        public top: number;
        public right: number;
        public bottom: number;
        constructor(left?: number, top?: number, right?: number, bottom?: number);
        public hitTest(point: CommonOffset): bool;
        public fit(point: CommonOffset): void;
        public width(): number;
        public height(): number;
    }
}
module jg {
    class Easing {
        static LINEAR(t: number, b: number, c: number, d: number): number;
        static SWING(t: number, b: number, c: number, d: number): number;
        static QUAD_EASEIN(t: number, b: number, c: number, d: number): number;
        static QUAD_EASEOUT(t: number, b: number, c: number, d: number): number;
        static QUAD_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static CUBIC_EASEIN(t: number, b: number, c: number, d: number): number;
        static CUBIC_EASEOUT(t: number, b: number, c: number, d: number): number;
        static CUBIC_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static QUART_EASEIN(t: number, b: number, c: number, d: number): number;
        static QUART_EASEOUT(t: number, b: number, c: number, d: number): number;
        static QUART_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static QUINT_EASEIN(t: number, b: number, c: number, d: number): number;
        static QUINT_EASEOUT(t: number, b: number, c: number, d: number): number;
        static QUINT_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static SIN_EASEIN(t: number, b: number, c: number, d: number): number;
        static SIN_EASEOUT(t: number, b: number, c: number, d: number): number;
        static SIN_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static CIRC_EASEIN(t: number, b: number, c: number, d: number): number;
        static CIRC_EASEOUT(t: number, b: number, c: number, d: number): number;
        static CIRC_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static ELASTIC_EASEIN(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        static ELASTIC_EASEOUT(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        static ELASTIC_EASEINOUT(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        static BOUNCE_EASEOUT(t: number, b: number, c: number, d: number): number;
        static BOUNCE_EASEIN(t: number, b: number, c: number, d: number): number;
        static BOUNCE_EASEINOUT(t: number, b: number, c: number, d: number): number;
        static BACK_EASEIN(t: number, b: number, c: number, d: number, s?: number): number;
        static BACK_EASEOUT(t: number, b: number, c: number, d: number, s?: number): number;
        static BACK_EASEINOUT(t: number, b: number, c: number, d: number, s?: number): number;
        static EXPO_EASEIN(t: number, b: number, c: number, d: number): number;
        static EXPO_EASEOUT(t: number, b: number, c: number, d: number): number;
        static EXPO_EASEINOUT(t: number, b: number, c: number, d: number): number;
    }
}
module jg {
    var ENTITY_OPTIONS_DEFAULT_VALUES: {
        rotate: number;
        translate: {
            x: number;
            y: number;
        };
        transform: {
            m11: number;
            m12: number;
            m21: number;
            m22: number;
            dx: number;
            dy: number;
        };
        scale: {
            x: number;
            y: number;
        };
        globalAlpha: any;
        font: any;
        fillStyle: any;
        strokeStyle: any;
        lineCap: any;
        lineJoin: any;
        lineWidth: any;
        miterLimit: any;
        shadowBlur: any;
        shadowColor: any;
        shadowOffsetX: any;
        shadowOffsetY: any;
        textAlign: any;
        textBaseline: any;
        globalCompositeOperation: any;
    };
    class E {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public _tl: Timeline;
        public scene: Scene;
        public parent: E;
        public active_queue: Function[];
        public started: bool;
        public isUpdated: bool;
        public disableTransform: bool;
        public entities: E[];
        public pointCapture: bool;
        public pointDown: Trigger;
        public pointUp: Trigger;
        public pointMove: Trigger;
        public options: Object;
        public orderDraw: Function;
        public filter: ImageFilter.FilterChain;
        public scroll: CommonOffset;
        public opacity: number;
        constructor();
        public enablePointingEvent(): void;
        public disablePointingEvent(): void;
        public removeDrawOption(name: string): void;
        public setDrawOption(name: string, value: any): void;
        public getDrawOption(name: string): any;
        public moveTo(x: number, y: number): void;
        public moveBy(x: number, y: number): void;
        public scrollTo(x: number, y: number): void;
        public scrollBy(x: number, y: number): void;
        public activate(): void;
        public addActiveQueue(f: Function): void;
        public appendTo(scene: Scene, layerName?: string): void;
        public remove(): void;
        public insert(entity: E, index: any): void;
        public append(entity: E): void;
        public removeChild(entity: E);
        public start(): void;
        public stop(): void;
        public startTimer(wait: number, method?: Function): void;
        public stopTimer(wait: number, method?: Function): void;
        public updated(): void;
        public isUpdate(): bool;
        public reflected(): void;
        public tl(): Timeline;
        public destroy(): void;
        public offset(): CommonOffset;
        public rect(): Rectangle;
        public hitTest(point: CommonOffset): bool;
        public getDistance(point: CommonOffset): CommonOffset;
        public getEntityByPoint(point: CommonOffset, force?: bool): E;
        public createSprite(): Sprite;
        public update(t: number): void;
        public interval(): void;
        public draw(context: CanvasRenderingContext2D): void;
        public show(): void;
        public hide(): void;
    }
}
module jg {
    class Shape extends E {
        public style: ShapeStyle;
        public type: ShapeType;
        public syncObj: any;
        public syncFunc: (shape: Shape) => void;
        static PI_200_PER: number;
        public clip: bool;
        constructor(width: number, height: number, style?: ShapeStyle, color?: any, type?: ShapeType);
        public setClip(value: bool): void;
        public setStyle(style: ShapeStyle): void;
        public setLineWidth(width: number): void;
        public getLineWidth();
        public setColor(color: any): void;
        public getColor();
        public synchronize(syncObj: any, syncFunc: (shape: Shape) => void): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    interface TriggerHandler {
        owner: any;
        handler: Function;
    }
    class Trigger {
        public handlers: TriggerHandler[];
        constructor();
        public handleInsert(index: number, owner: any, handler: Function): void;
        public handle(owner: any, handler?: Function): void;
        public destroy(): void;
        public removeAll(owner: any): void;
        public removeAllByHandler(handler: Function): void;
        public remove(owner: any, handler?: Function): void;
        public fire(param?: any): void;
        public fastFire(param?: any): void;
    }
}
module jg {
    class SimpleSound {
        static context: AudioContext;
        static bgmSource: AudioBufferSourceNode;
        static bgmGain: GainNode;
        static soundGain: GainNode;
        static getAudioContext(): AudioContext;
        static _getAudioContext();
        static play(sound: AudioBuffer, loop?: bool, when?: number, gain?: GainNode): AudioBufferSourceNode;
        static hasBgm(): bool;
        static playBgm(sound: AudioBuffer, loop?: bool, when?: number): AudioBufferSourceNode;
        static stop(source: AudioBufferSourceNode, when?: number): void;
        static stopBgm(when?: number): void;
        static tone(hertz, seconds): AudioBuffer;
    }
}
module jg {
    class ResourceStructure {
        public img: string;
        public sound: string;
        static Default: ResourceStructure;
        static Plain: ResourceStructure;
        constructor(img: string, sound: string);
        public isAbsolute(url: string): string;
        public imageUrl(url: string): string;
        public soundUrl(url: string): string;
    }
}
module jg {
    class ResourceLoader {
        public resource: Resource;
        constructor(resource: Resource);
        public load(url: string, identifier: string): void;
    }
    class ImageResourceLoader extends ResourceLoader {
        public load(url: string, identifier: string): void;
        public completed(name: string, image: HTMLImageElement, is_success: bool): void;
    }
    class ScriptResourceLoader extends ResourceLoader {
        public load(url: string, identifier: string): void;
        public completed(name: string, script: HTMLScriptElement, is_success: bool): void;
    }
    class SoundResourceLoader extends ResourceLoader {
        public load(url: string, identifier: string): void;
        public completed(name: string, audio: AudioBuffer, is_success: bool): void;
    }
}
module jg {
    class Resource {
        public images: {
            [key: string]: HTMLImageElement;
        };
        public scripts: {
            [key: string]: HTMLScriptElement;
        };
        public sounds: {
            [key: string]: any;
        };
        public requests: any[];
        public loaded: Trigger;
        public added: Trigger;
        public loaders: {
            [key: string]: ResourceLoader;
        };
        public structure: ResourceStructure;
        static instance: Resource;
        static getInstance(): Resource;
        constructor();
        public clear(): void;
        public get(name: string): HTMLImageElement;
        public sound(name: string);
        public requestCompleted(name: string): void;
        public load(name: string, url?: string): void;
        public loadManual(name: string): void;
        public completeManual(name: string): void;
    }
}
module jg {
    class Scene {
        public layers: {
            [key: string]: Layer;
        };
        public layerCount: number;
        public game: Game;
        public mode: string[];
        public showed: Trigger;
        public hid: Trigger;
        public ended: Trigger;
        public started: Trigger;
        public root: Layer;
        public keyDown: Trigger;
        public keyUp: Trigger;
        public pointDown: Trigger;
        public pointUp: Trigger;
        public pointMove: Trigger;
        constructor(game: Game);
        public currentMode(): string;
        public getLayerArray(): Layer[];
        public enablePointingEvent(): void;
        public disablePointingEvent(): void;
        public changeMode(mode: string): void;
        public endCurrentMode(newMode?: string): void;
        public createLayer(name: string, size?: CommonSize): Layer;
        public deleteLayer(name: string): void;
        public destroy(): void;
        public end(): void;
        public refresh(): void;
        public scrollTo(x: number, y: number, layerName?: string): void;
        public scrollBy(x: number, y: number, layerName?: string): void;
        public append(entity: E, layerName?: string): void;
        public removeEntity(entity: E): void;
    }
}
module jg {
    class Sprite extends E {
        public image: any;
        public srcWidth: number;
        public srcHeight: number;
        public srcX: number;
        public srcY: number;
        constructor(image: any, srcWidth?: number, srcHeight?: number);
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    class FrameSprite extends Sprite {
        public sep: number;
        public frame: number[];
        public fno: number;
        public animation: bool;
        public wait: number;
        public loop: bool;
        public frameEnded: Trigger;
        constructor(image: any, srcWidth: number, srcHeight: number, wait?: number);
        public changeFrame(): void;
        public startTimer(noClear?: bool): bool;
        public stopTimer(): void;
        public interval(): void;
    }
}
module jg {
    interface CharacterMoveInfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        f: number;
        t: number;
    }
    interface CharacterMovedEventArgs {
        nextMove?: string;
    }
    class Character extends FrameSprite {
        public moving: bool;
        public moveInfo: CharacterMoveInfo;
        public nextMove: string;
        public beginMove: Trigger;
        public moved: Trigger;
        public charaSeq: number;
        public charaCol: number;
        public animeCnt: number;
        public movePixel: number;
        public moveTime: number;
        public angleSeq: any;
        public currentAngle: Angle;
        constructor(image: any, width: number, height: number, wait?: number);
        public moveLeft(stackNext?: bool): bool;
        public moveRight(stackNext?: bool): bool;
        public moveUp(stackNext?: bool): bool;
        public moveDown(stackNext?: bool): bool;
        public move(x: number, y: number, f: number): bool;
        public update(t: number): void;
        public endMove(): void;
        public angle(angle: Angle): void;
    }
}
module jg {
    class CharacterFactory {
        public charaCol: number;
        public animeCnt: number;
        public movePixel: number;
        public moveTime: number;
        public image: HTMLImageElement;
        public width: number;
        public height: number;
        public wait: number;
        public angle: Angle;
        public createClass: any;
        public angleSeq: any;
        constructor(image: HTMLImageElement, width: number, height: number);
        public create(charaSeq: number, offset?: CommonOffset, angle?: Angle): Character;
    }
}
module jg {
    class Label extends E {
        public text: string;
        public maxWidth: number;
        public syncObj: any;
        public syncProp: string;
        public syncRound: bool;
        constructor(text?: string, fontSize?: number, fontColor?: string, baseline?: string);
        public setMaxWidth(maxWidth: number): void;
        public updateSize(): void;
        public addShadow(color?: string): void;
        public removeShadow(): void;
        public setText(text: string): void;
        public setFont(fontString: string): void;
        public getFont(): string;
        public setFontSize(size: number): void;
        public getFontSize(): number;
        public setTextAlign(align: string): void;
        public getTextAlign(): string;
        public setTextBaseline(baseline: string): void;
        public getTextBaseline(): string;
        public setColor(color: string): void;
        public getColor(): string;
        public synchronize(obj: any, prop: string, round?: bool): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    class TextLineInfo {
        public width: number;
        public height: number;
        public offsetY: number;
        constructor(offsetY: number);
    }
    class MultilineScriptAnalyzer {
        public mode: number;
        public owner: MultilineText;
        public context: CanvasRenderingContext2D;
        public pos: CommonOffset;
        public buf: string;
        public init(owner: MultilineText, context: CanvasRenderingContext2D, pos: CommonOffset): void;
        public next(c: string): number;
    }
    class MultilineText extends E {
        public script: string;
        public buffer: HTMLCanvasElement;
        public clip: Line;
        public sprite: Sprite;
        public defaultStyle: any;
        public defaultFont: any;
        public defaultBlur: number;
        public defaultShadowColor: any;
        public defaultShadowOffsetX: number;
        public defaultShadowOffsetY: number;
        public disableShadow: bool;
        public lines: TextLineInfo[];
        public animePos: CommonOffset;
        public animeLine: number;
        public animeSpeed: number;
        public animated: Trigger;
        public scriptAnalyzer: MultilineScriptAnalyzer;
        public bufferBg: ImageData;
        static LINE_HEIGHT_NORMAL: number;
        static BROWSER_BASELINE_MARGIN: number;
        constructor(size: CommonSize, offset?: CommonOffset);
        public setText(text: string, offset?: number): number;
        public setScript(script: string, offset?: number): number;
        public getLineHeight(c): number;
        public createBuffer(offset?: number): number;
        public refresh(): void;
        public startAnimation(animeSpeed?: number): void;
        public update(t: number): void;
        public hideAll(): void;
        public showAll(): void;
    }
}
module jg {
    class ChipSet {
        public image: any;
        public sep: number;
        public tile: Tile;
        public tileHeight: number;
        public chipOffset: number;
        constructor(tile: Tile, image: any);
        public count(): number;
        public draw(c: CanvasRenderingContext2D, x: number, y: number, chip: number): void;
    }
    class AutoTileChipSet extends ChipSet {
        public map(x: number, y: number): number;
        public draw(c: CanvasRenderingContext2D, x: number, y: number, chip: number): void;
    }
    class Tile extends E {
        public tileWidth: number;
        public tileHeight: number;
        public chips: ChipSet[];
        public chipMap: ChipSet[];
        public chipCount: number;
        public canvas: HTMLCanvasElement;
        public data: number[][];
        public size: CommonSize;
        constructor(image: any, tileWidth: number, tileHeight: number);
        public addChipSet(image: HTMLImageElement, opt?: any): void;
        public generate(data: number[][], width?: number, height?: number): void;
        public refresh(): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    class Layer extends E {
        public canvas: HTMLCanvasElement;
        public context: CanvasRenderingContext2D;
        constructor(scene: Scene);
        public hasBuffer(): bool;
        public createBuffer(): void;
        public refresh(must?: bool): void;
        public deleteBuffer(): void;
        public destroy(): void;
    }
}
module jg {
    class LoadingScene extends Scene {
        public resource: Resource;
        public shape: Shape;
        public shapeP: Shape;
        public requestCount: number;
        public finished: Trigger;
        public game: Game;
        constructor(game: Game, resource: Resource);
        public init(): void;
        public animate(per: number): void;
        public complete(cnt: number): void;
        public added(e: any): void;
    }
}
module jg {
    class InputEvent {
        public type: InputEventType;
        public action: InputEventAction;
        public param: any;
        constructor(type: InputEventType, action: InputEventAction, param?: any);
    }
    class InputKeyboardEvent extends InputEvent {
        public key: Keytype;
        constructor(action: InputEventAction, key: Keytype, e: any);
    }
    class InputPointEvent extends InputEvent {
        public x: number;
        public y: number;
        public point: CommonOffset;
        public entity: E;
        constructor(action: InputEventAction, e: any, point: CommonOffset);
        public set(entity: E): void;
    }
}
module jg {
    class Renderer {
        public radian: number;
        public drawOptionFunctions: Object;
        public filter: ImageFilter.IFilter;
        constructor();
        public getMatrix(width: number, height: number, scaleX: number, scaleY: number, angle: number): number[];
        public renderParent(parent: E, c: CanvasRenderingContext2D): void;
        public renderEntity(entity: E, c: CanvasRenderingContext2D): void;
        public renderPure(entity: E, c: CanvasRenderingContext2D): void;
        public filterDraw(entity: E, c: CanvasRenderingContext2D): void;
        public useDrawOption(entity: E, c: CanvasRenderingContext2D): any;
    }
}
module jg {
    class GameRenderer extends Renderer {
        public buffer: HTMLCanvasElement[];
        public fc: CanvasRenderingContext2D;
        public bc: CanvasRenderingContext2D;
        public scene: Scene;
        public game: Game;
        public bg: ImageData;
        public container: HTMLElement;
        public handler: HTMLDivElement;
        public flipNo: number;
        public transferMode: RenderTransferMode;
        public disableClear: bool;
        public frontCanvasSize: CommonSize;
        public frontCanvasOffset: CommonOffset;
        public _pageX: number;
        public _pageY: number;
        constructor(game: Game, container?: HTMLElement, transferMode?: RenderTransferMode, disableBg?: bool);
        public changeFrontCanvasSize(size: CommonSize, offset?: CommonOffset): void;
        public changeTransferMode(mode: RenderTransferMode): void;
        public changeScene(scene: Scene): void;
        public flip(): void;
        public render(): void;
        public refresh(): void;
    }
}
module jg {
    class BufferedRenderer extends Renderer {
        public buffer: HTMLCanvasElement;
        public c: CanvasRenderingContext2D;
        public size: CommonSize;
        constructor(size: CommonSize);
        public clear(): void;
        public createImage(area?: CommonArea, distArea?: CommonArea, canvasSize?: CommonSize): HTMLCanvasElement;
        public createSprite(area?: CommonArea, distArea?: CommonArea, canvasSize?: CommonSize): Sprite;
        public applyFilter(c: CanvasRenderingContext2D, size: CommonSize): void;
        public renderUnit(entity: E): void;
        public renderLayer(layer: Layer): void;
        public renderScene(scene: Scene): void;
        public refresh(): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    class GameTimer {
        public tick: number;
        public wait: number;
        public trigger: Trigger;
        constructor(wait: number);
        public tryFire(t: number): void;
        public fire(t: number): void;
    }
}
module jg {
    class Game {
        public _exit: bool;
        public tick: number;
        public renderTick: number;
        public keymap: any;
        public dragParam: InputPointEvent;
        public renderer: GameRenderer;
        public scenes: Scene[];
        public scene: Scene;
        public resource: Resource;
        public width: number;
        public height: number;
        public scale: number;
        public loadingSceneClass: any;
        public loadingScene: LoadingScene;
        public targetFps: number;
        public fps: HTMLElement;
        public loaded: Trigger;
        public update: Trigger;
        public timers: GameTimer[];
        public render: Trigger;
        public keyDown: Trigger;
        public keyUp: Trigger;
        public pointDown: Trigger;
        public pointUp: Trigger;
        public pointMove: Trigger;
        public eventQueue: InputEvent[];
        public inputEventMap: any;
        public isPointDown: bool;
        public seed: number;
        public mt: MT;
        constructor(width: number, height: number, ...args: any[]);
        public setSeed(seed?: number): void;
        public random(min: number, max: number): number;
        public getWindowSize(): {
            width: number;
            height: number;
        };
        public fitToWindow(no_center?: bool): void;
        public setBgColor(r: number, g: number, b: number, a: number): void;
        public refresh(): void;
        public isTouchEnable(): bool;
        public getOffsetByEvent(e: any): CommonOffset;
        public onmousedown(e: MouseEvent): void;
        public ontouchstart(e: any): void;
        public onmousemove(e: MouseEvent): void;
        public ontouchmove(e: any): void;
        public onmouseup(e: MouseEvent): void;
        public ontouchend(e: any): void;
        public pointHandler(): void;
        public onkeydown(e: any): void;
        public onkeyup(e: any): void;
        public keyboardHandler(): void;
        public addTimer(wait: number, owner: any, handler: Function): void;
        public removeTimer(wait: number, owner: any, handler: Function): void;
        public removeTimerAll(owner: any): void;
        public exit(): void;
        public changeScene(scene: Scene, effect?: any, endOldScene?: bool): void;
        public endScene(effect?: any): void;
        public r(name: string): HTMLImageElement;
        public s(name: string);
        public preload(ary: any): void;
        public preloadOther(identity: string): void;
        public preloadCompleteOther(identity: string): void;
        public setLoadingScene(scene: any): void;
        public preloadComplete(): void;
        public end(): void;
        public setPointingEntity(param: InputPointEvent): void;
        public raiseInputEvent(): void;
        public main(): void;
        public fullscreen(): bool;
        public exitFullscreen(): bool;
    }
}
module jg.ImageFilter {
    interface IFilter {
        filter(pixels: ImageData);
    }
    class FilterChain implements IFilter {
        public filters: Filter[];
        constructor();
        public get(index: number): Filter;
        public add(filter: Filter): FilterChain;
        public set(filter: Filter): FilterChain;
        public insert(index: number, filter: Filter): FilterChain;
        public remove(filter: Filter): void;
        public clear(): FilterChain;
        public count(): number;
        public has(): bool;
        public createSprite(entity: E): Sprite;
        public createImage(entity: Sprite): HTMLCanvasElement;
        public filter(pixels: ImageData): void;
    }
    class Filter implements IFilter {
        public opt: any;
        public width: number;
        public height: number;
        public game: Game;
        constructor(game: Game);
        public filter(pixels: ImageData): void;
        public getOption(name: string, defaultValue?: any): any;
        public findColorDifference(dif: number, dest: number, src: number): number;
        public createColor(src: string): string;
        public applyMatrix(pixels: ImageData, matrix: number[], amount: number): ImageData;
        public checkRGBBoundary(val: number): number;
    }
    class UniversalTransitionFilter extends Filter {
        public ruleImage: ImageData;
        public mask: any;
        constructor(game: Game, image?: any, amount?: number, repeat?: bool);
        public getImageData(image: any, canvas?: HTMLCanvasElement): ImageData;
        public createRuleImage(): void;
        public createMask();
        public filter(pixels: ImageData): void;
    }
    class ReverseUniversalTransitionFilter extends UniversalTransitionFilter {
        public createImageData(width: number, height: number): ImageData;
        public createRuleImage(): void;
    }
    class GreyscaleFilter extends Filter {
        constructor(game: Game, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class SepiaFilter extends Filter {
        constructor(game: Game, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class TintFilter extends Filter {
        constructor(game: Game, color?: string, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class EdgesFilter extends Filter {
        constructor(game: Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class EmbossFilter extends Filter {
        constructor(game: Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class SharpenFilter extends Filter {
        constructor(game: Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class MatrixFilter extends Filter {
        constructor(game: Game, amount?: number, matrix?: number[]);
        public filter(pixels: ImageData): void;
    }
    class BlurFilter extends Filter {
        constructor(game: Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class MosaicFilter extends Filter {
        constructor(game: Game, size?: number, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    enum NoiseType {
        Mono,
        Color,
    }
    class NoiseFilter extends Filter {
        constructor(game: Game, amount?: number, type?: NoiseType);
        public filter(pixels: ImageData): void;
    }
    class PosterizeFilter extends Filter {
        constructor(game: Game, amount?: number, opacity?: number);
        public filter(pixels: ImageData): void;
    }
}
module jg {
    interface ActionEventArgs {
        timeline: Timeline;
    }
    interface ActionTickEventArgs {
        timeline: Timeline;
        elapsed: number;
    }
    class Action {
        public time: number;
        public frame: number;
        public added_to_timeline: Trigger;
        public removed_from_timeline: Trigger;
        public action_tick: Trigger;
        public action_start: Trigger;
        public action_end: Trigger;
        public timeline: Timeline;
        public entity: E;
        constructor(param?: any);
        public removedFromTimeline(): void;
        public addedToTimeline(p: ActionEventArgs): void;
        public actionTick(p: ActionTickEventArgs): void;
    }
}
module jg {
    class ParallelAction extends Action {
        public actions: Action[];
        public endedActions: Action[];
        constructor(param?: any);
        public addedToTimeline(p: ActionEventArgs): void;
        public removedFromTimeline(): void;
        public actionTick(evt: ActionTickEventArgs): void;
        public parallelActionStart(e: any): void;
    }
}
module jg {
    var TWEEN_DRAW_OPTION_SETTERS: {};
    class Tween extends Action {
        public origin: any;
        public target: any;
        public old: any;
        public easing: (t: number, b: number, c: number, d: number) => number;
        public props: Object;
        public otherTarget: any;
        constructor(params: any);
        public actionStart(e: ActionEventArgs): void;
        public tweenActionTick(e: ActionTickEventArgs): void;
    }
}
module jg {
    class Timeline {
        public entity: E;
        public queue: Action[];
        public paused: bool;
        public looped: bool;
        public _activated: bool;
        public _parallel: ParallelAction;
        public isFrameBased: bool;
        constructor(entity: E);
        public _deactivateTimeline(force?: bool): void;
        public _activateTimeline(force?: bool): void;
        public setFrameBased(): void;
        public setTimeBased(): void;
        public next(remainingTime?: number): void;
        public tick(t: number): void;
        public add(action: Action): Timeline;
        public action(params: any): Timeline;
        public tween(params: any): Timeline;
        public clear(): Timeline;
        public skip(frames: number): Timeline;
        public pause(): Timeline;
        public resume(): Timeline;
        public loop(): Timeline;
        public unloop(): Timeline;
        public delay(time: number): Timeline;
        public then(func: Function): Timeline;
        public exec(func: Function): void;
        public frame(wait: any, frame?: number[]): Timeline;
        public fno(wait: number, fno?: number): Timeline;
        public cue(cue: any): void;
        public repeat(func: Function, time: number): Timeline;
        public and(): Timeline;
        public waitUntil(func: Function): Timeline;
        public moveTo(x: number, y: number, time: number, easing?: Function): Timeline;
        public moveX(x: number, time: number, easing?: Function): Timeline;
        public moveY(y: number, time: number, easing?: Function): Timeline;
        public moveBy(x: number, y: number, time: number, easing?: Function): Timeline;
        public scrollTo(x: number, y: number, time: number, easing?: Function): Timeline;
        public scrollX(x: number, time: number, easing?: Function): Timeline;
        public scrollY(y: number, time: number, easing?: Function): Timeline;
        public scrollBy(x: number, y: number, time: number, easing?: Function): Timeline;
        public fadeTo(opacity: number, time: number, easing?: Function): Timeline;
        public fadeIn(time: number, easing?: Function): Timeline;
        public fadeOut(time: number, easing?: Function): Timeline;
        public hide(): Timeline;
        public show(): Timeline;
        public resizeTo(size: number, time: number, easing?: any, easing2?: any): Timeline;
        public resizeBy(size: number, time: number, easing?: any, easing2?: any): Timeline;
        public scaleTo(scale: number, time: number, easing?: any, easing2?: any): Timeline;
        public scaleBy(scale: number, time: number, easing?: any, easing2?: any): Timeline;
        public rotateTo(deg: number, time: number, easing?: Function): Timeline;
        public rotateBy(deg: number, time: number, easing?: Function): Timeline;
        public filter(targetClass: Function, props: any, time: number, easing?: Function): Timeline;
        public removeFromScene(): Timeline;
    }
}
module jg {
    interface BrowserInfo {
        chrome?: bool;
        webkit?: bool;
        safari?: bool;
        opera?: bool;
        msie?: bool;
        mozilla?: bool;
        version?: string;
    }
    class JGUtil {
        static browser: BrowserInfo;
        static getCenterPoint(p: CommonOffset): CommonOffset;
        static getMargin(p: CommonOffset): CommonOffset;
        static intersect(p1: CommonOffset, p2: CommonOffset): bool;
        static getDistance(p1: CommonOffset, p2: CommonOffset): CommonOffset;
        static getMovePoint(p1: CommonOffset, p2: CommonOffset, power?: number, maxMove?: number): CommonOffset;
        static getDirectionAngle(p1: CommonOffset, p2: CommonOffset, minDistance?: number): Angle;
        static getDirectionKeytype(p1: CommonOffset, p2: CommonOffset, minDistance?: number): Keytype;
        static homingX(p1: CommonOffset, p2: CommonOffset, speed: number, t: number): bool;
        static homingY(p1: CommonOffset, p2: CommonOffset, speed: number, t: number): bool;
        static homing(p1: CommonOffset, p2: CommonOffset, speed: number, t: number): bool;
        static orderDrawY(): void;
        static createLinearGradient(rect: any, colors: string[], offsets?: number[]): CanvasGradient;
        static createRadialGradient(rect: any, radius1: number, radius2: number, colors: string[], offsets?: number[]): CanvasGradient;
        static createPattern(image: any, repeat?: string): CanvasPattern;
        static isStyleScale: bool;
        static isTransformMode(): bool;
        static scaleCanvas(canvas: HTMLCanvasElement, size: CommonSize): void;
        static getBrowser(): BrowserInfo;
        static setCrispEdges(game: Game, crispEdges: bool): void;
        static proxy(func: Function, self: any): () => void;
    }
}
module jg {
    interface QuadraticPoint extends CommonOffset {
        cp1x: number;
        cp1y: number;
    }
    interface BezierPoint extends QuadraticPoint {
        cp2x: number;
        cp2y: number;
    }
    interface ArcPoint extends CommonOffset {
        x2: number;
        y2: number;
        radius: number;
    }
    class Line extends E {
        public p: CommonOffset[];
        public fill: bool;
        public stroke: bool;
        public closePath: bool;
        public clip: bool;
        constructor(pos: CommonOffset, line?: CommonOffset, color?: string, width?: number);
        public setClip(value: bool): void;
        public updateSize(): void;
        public setColor(color: any): Line;
        public getColor();
        public setFillColor(color: any): Line;
        public getFillColor();
        public setLineWidth(width: number): Line;
        public getLineWidth();
        public setLineCap(lineCap: string): Line;
        public getLineCap();
        public setLineJoin(lineJoin: string): Line;
        public getLineJoin();
        public setMiterLimit(miterLimit: number): Line;
        public getMiterLimit();
        public setFill(fill: bool, color: any, closePath?: bool, stroke?: bool): Line;
        public addLine(line: any, y?: number): Line;
        public addQuadraticLine(cp: any, p?: any): Line;
        public addBezierLine(cp1: any, cp2?: any, p?: any): Line;
        public addArc(p: any, p2: any, radius: any): void;
        public add();
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    class Effect {
        static time: number;
        static color: string;
        static sceneEffect(game: Game, scene1: Scene, scene2: Scene, type: any, callback: Function, endOldScene?: bool): void;
        public method: string;
        public arguments: any[];
        constructor(method: string);
        public callEffect(scene: EffectScene): void;
    }
    class EffectScene extends Scene {
        public sp1: Sprite;
        public sp2: Sprite;
        public effected: Trigger;
        constructor(game: Game, scene1: Scene, scene2: Scene);
        public captureScene(scene: Scene): Sprite;
        public fade(color?: any): void;
        public _fadeColor(color: any): void;
        public mosaic(): void;
        public blur(): void;
        public slide(angle: Angle): void;
        public wipe(angle: Angle): void;
        public wipeFade(angle: Angle): void;
        public boxOut(rotate?: number, color?: any): void;
        public boxIn(rotate?: number, color?: any): void;
        public arcOut(color?: any): void;
        public arcIn(color?: any): void;
        public universal(image: any, repeat?: bool): void;
        public universalTwin(image: any, repeat?: bool): void;
        public universalDelay(image: any, repeat?: bool, color?: any): void;
        public getFilter(target: any);
        public swapScene(): void;
    }
}
module jg {
    class UIWindow extends E {
        public padding: IRectangle;
        public bg: E;
        constructor(width: number, height: number, bgImage?: any, padding?: IRectangle);
        public getBg(): E;
        public setBg(bg: E): void;
        public createBgImage(e: E, srcPadding?: IRectangle, buf?: BufferedRenderer): Sprite;
        public defaultSkin(): void;
    }
}
module jg {
    class MessageWindow extends UIWindow {
        public _nextCursor: Sprite;
        public nextCursor: E;
        public scriptOffset: number;
        public script: string;
        public normalSpeed: number;
        public fastSpeed: number;
        public readed: Trigger;
        public isReaded: bool;
        public textClip: Shape;
        public hasNextCursor: bool;
        public textArea: MultilineText;
        constructor(width: number, height: number, bgImage?: any, padding?: IRectangle);
        public setTextArea(textArea: MultilineText): void;
        public getNextCursor(): E;
        public setNextCursor(cursor: E): void;
        public setText(text: string, offset?: number): number;
        public setScript(script: string, offset?: number): number;
        public showNextCursor(): void;
        public deleteNextCursor(): void;
        public hide(fade?: bool): void;
        public show(fade?: bool): void;
        public showText(): void;
        public fastMode(): void;
        public normalMode(): void;
        public showAll(): void;
        public next(): bool;
        public oldWipeOut(time?: number): void;
        public oldFadeOut(time?: number): void;
        public onAnimated(): void;
    }
}
module jg {
    class Pixel extends E {
        public imageData: ImageData;
        constructor(width: number, height: number, srcImage?: any, scale?: bool);
        public clear(r?: number, g?: number, b?: number, a?: number): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
module jg {
    function globalize(): void;
}
