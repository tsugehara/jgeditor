declare module jg {
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
declare module jg {
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
    requestAnimationFrame(callback: FrameRequestCallback): number;
    msRequestAnimationFrame(callback: FrameRequestCallback): number;
}
declare module jg {
    class Rectangle implements jg.IRectangle {
        public left: number;
        public top: number;
        public right: number;
        public bottom: number;
        constructor(left?: number, top?: number, right?: number, bottom?: number);
        public hitTest(point: jg.CommonOffset): boolean;
        public fit(point: jg.CommonOffset): void;
        public width(): number;
        public height(): number;
    }
}
declare module jg {
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
declare module jg {
    interface IEntityOptions {
        rotate: number;
        translate: jg.CommonOffset;
        transform: {
            m11: number;
            m12: number;
            m21: number;
            m22: number;
            dx: number;
            dy: number;
        };
        scale: jg.CommonOffset;
        globalAlpha?: number;
        font?: string;
        fillStyle?: string;
        strokeStyle?: string;
        lineCap?: string;
        lineJoin?: string;
        lineWidth?: number;
        miterLimit?: string;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        textAlign?: string;
        textBaseline?: string;
        globalCompositeOperation?: string;
    }
    var ENTITY_OPTIONS_DEFAULT_VALUES: IEntityOptions;
    class E {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public _tl: jg.Timeline;
        public scene: jg.Scene;
        public parent: E;
        public active_queue: Function[];
        public started: boolean;
        public isUpdated: boolean;
        public disableTransform: boolean;
        public entities: E[];
        public pointCapture: boolean;
        public pointDown: jg.Trigger;
        public pointUp: jg.Trigger;
        public pointMove: jg.Trigger;
        public options: Object;
        public orderDraw: Function;
        public filter: jg.ImageFilter.FilterChain;
        public scroll: jg.CommonOffset;
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
        public appendTo(scene: jg.Scene, layerName?: string): void;
        public remove(): void;
        public insert(entity: E, index: any): void;
        public append(entity: E): void;
        public removeChild(entity: E): boolean;
        public start(): void;
        public stop(): void;
        public startTimer(wait: number, method?: Function): void;
        public stopTimer(wait: number, method?: Function): void;
        public updated(): void;
        public isUpdate(): boolean;
        public reflected(): void;
        public tl(): jg.Timeline;
        public destroy(): void;
        public offset(): jg.CommonOffset;
        public rect(): jg.Rectangle;
        public hitTest(point: jg.CommonOffset): boolean;
        public getDistance(point: jg.CommonOffset): jg.CommonOffset;
        public getEntityByPoint(point: jg.CommonOffset, force?: boolean): E;
        public createSprite(): jg.Sprite;
        public update(t: number): void;
        public interval(): void;
        public draw(context: CanvasRenderingContext2D): void;
        public show(): void;
        public hide(): void;
    }
}
declare module jg {
    class Shape extends jg.E {
        public style: jg.ShapeStyle;
        public type: jg.ShapeType;
        public syncObj: any;
        public syncFunc: (shape: Shape) => void;
        static PI_200_PER: number;
        public clip: boolean;
        constructor(width: number, height: number, style?: jg.ShapeStyle, color?: any, type?: jg.ShapeType);
        public setClip(value: boolean): void;
        public setStyle(style: jg.ShapeStyle): void;
        public setLineWidth(width: number): void;
        public getLineWidth();
        public setColor(color: any): void;
        public getColor();
        public synchronize(syncObj: any, syncFunc: (shape: Shape) => void): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    interface TriggerHandler {
        owner: any;
        handler: Function;
    }
    class Trigger {
        public handlers: TriggerHandler[];
        constructor();
        public handleInsert(index: number, owner: any, handler?: Function): void;
        public handle(owner: any, handler?: Function): void;
        public destroy(): void;
        public removeAll(owner: any): void;
        public removeAllByHandler(handler: Function): void;
        public remove(owner: any, handler?: Function): void;
        public fire(param?: any): void;
        public fastFire(param?: any): void;
    }
}
declare module jg {
    class SimpleSound {
        static bgm: HTMLAudioElement;
        static play(sound: HTMLAudioElement, loop?: boolean): HTMLAudioElement;
        static hasBgm(): boolean;
        static playBgm(sound: HTMLAudioElement, loop?: boolean): HTMLAudioElement;
        static stop(source: HTMLAudioElement): void;
        static stopBgm(): void;
    }
}
declare module jg {
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
declare module jg {
    class ResourceLoader {
        public resource: jg.Resource;
        constructor(resource: jg.Resource);
        public load(url: string, identifier: string): void;
    }
    class ImageResourceLoader extends ResourceLoader {
        public load(url: string, identifier: string): void;
        public completed(name: string, image: HTMLImageElement, is_success: boolean): void;
    }
    class ScriptResourceLoader extends ResourceLoader {
        static loading: boolean;
        public load(url: string, identifier: string): void;
        public completed(name: string, script: HTMLScriptElement, is_success: boolean): void;
    }
    class SoundResourceLoader extends ResourceLoader {
        public load(url: string, identifier: string): void;
        public completed(name: string, audio: HTMLAudioElement, is_success: boolean): void;
    }
}
declare module jg {
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
        public loaded: jg.Trigger;
        public added: jg.Trigger;
        public loaders: {
            [key: string]: jg.ResourceLoader;
        };
        public structure: jg.ResourceStructure;
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
declare module jg {
    class Scene {
        public layers: {
            [key: string]: jg.Layer;
        };
        public layerCount: number;
        public game: jg.Game;
        public mode: string[];
        public showed: jg.Trigger;
        public hid: jg.Trigger;
        public ended: jg.Trigger;
        public started: jg.Trigger;
        public root: jg.Layer;
        public keyDown: jg.Trigger;
        public keyUp: jg.Trigger;
        public pointDown: jg.Trigger;
        public pointUp: jg.Trigger;
        public pointMove: jg.Trigger;
        constructor(game: jg.Game);
        public currentMode(): string;
        public getLayerArray(): jg.Layer[];
        public enablePointingEvent(): void;
        public disablePointingEvent(): void;
        public changeMode(mode: string): void;
        public endCurrentMode(newMode?: string): void;
        public createLayer(name: string, size?: jg.CommonSize): jg.Layer;
        public deleteLayer(name: string): void;
        public destroy(): void;
        public end(): void;
        public refresh(): void;
        public scrollTo(x: number, y: number, layerName?: string): void;
        public scrollBy(x: number, y: number, layerName?: string): void;
        public append(entity: jg.E, layerName?: string): void;
        public removeEntity(entity: jg.E): void;
    }
}
declare module jg {
    class Sprite extends jg.E {
        public image: any;
        public srcWidth: number;
        public srcHeight: number;
        public srcX: number;
        public srcY: number;
        constructor(image: any, srcWidth?: number, srcHeight?: number);
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    class FrameSprite extends jg.Sprite {
        public sep: number;
        public frame: number[];
        public fno: number;
        public animation: boolean;
        public wait: number;
        public loop: boolean;
        public frameEnded: jg.Trigger;
        constructor(image: any, srcWidth: number, srcHeight: number, wait?: number);
        public changeFrame(): void;
        public animate(noClear?: boolean): boolean;
        public inanimate(): void;
        public interval(): void;
    }
}
declare module jg {
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
    class Character extends jg.FrameSprite {
        public moving: boolean;
        public moveInfo: CharacterMoveInfo;
        public nextMove: string;
        public beginMove: jg.Trigger;
        public moved: jg.Trigger;
        public charaSeq: number;
        public charaCol: number;
        public animeCnt: number;
        public movePixel: number;
        public moveTime: number;
        public angleSeq: any;
        public currentAngle: jg.Angle;
        constructor(image: any, width: number, height: number, wait?: number);
        public moveLeft(stackNext?: boolean): boolean;
        public moveRight(stackNext?: boolean): boolean;
        public moveUp(stackNext?: boolean): boolean;
        public moveDown(stackNext?: boolean): boolean;
        public move(x: number, y: number, f: number): boolean;
        public update(t: number): void;
        public endMove(): void;
        public angle(angle: jg.Angle): void;
    }
}
declare module jg {
    class CharacterFactory {
        public charaCol: number;
        public animeCnt: number;
        public movePixel: number;
        public moveTime: number;
        public image: HTMLImageElement;
        public width: number;
        public height: number;
        public wait: number;
        public angle: jg.Angle;
        public createClass: any;
        public angleSeq: any;
        constructor(image: HTMLImageElement, width: number, height: number);
        public create(charaSeq: number, offset?: jg.CommonOffset, angle?: jg.Angle): jg.Character;
    }
}
declare module jg {
    class Label extends jg.E {
        public text: string;
        public maxWidth: number;
        public syncObj: any;
        public syncProp: string;
        public syncRound: boolean;
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
        public synchronize(obj: any, prop: string, round?: boolean): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
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
        public pos: jg.CommonOffset;
        public buf: string;
        public init(owner: MultilineText, context: CanvasRenderingContext2D, pos: jg.CommonOffset): void;
        public next(c: string): number;
    }
    class MultilineText extends jg.E {
        public script: string;
        public buffer: HTMLCanvasElement;
        public clip: jg.Line;
        public sprite: jg.Sprite;
        public defaultStyle: any;
        public defaultFont: any;
        public defaultBlur: number;
        public defaultShadowColor: any;
        public defaultShadowOffsetX: number;
        public defaultShadowOffsetY: number;
        public disableShadow: boolean;
        public lines: TextLineInfo[];
        public animePos: jg.CommonOffset;
        public animeLine: number;
        public animeSpeed: number;
        public animated: jg.Trigger;
        public scriptAnalyzer: MultilineScriptAnalyzer;
        public bufferBg: ImageData;
        static LINE_HEIGHT_NORMAL: number;
        static BROWSER_BASELINE_MARGIN: number;
        constructor(size: jg.CommonSize, offset?: jg.CommonOffset);
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
declare module jg {
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
    class Tile extends jg.E {
        public tileWidth: number;
        public tileHeight: number;
        public chips: ChipSet[];
        public chipMap: ChipSet[];
        public chipCount: number;
        public canvas: HTMLCanvasElement;
        public data: number[][];
        public size: jg.CommonSize;
        constructor(image: any, tileWidth: number, tileHeight: number);
        public addChipSet(image: HTMLImageElement, opt?: any): void;
        public generate(data: number[][], width?: number, height?: number): void;
        public refresh(): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    class Layer extends jg.E {
        public canvas: HTMLCanvasElement;
        public context: CanvasRenderingContext2D;
        constructor(scene: jg.Scene);
        public hasBuffer(): boolean;
        public createBuffer(): void;
        public refresh(must?: boolean): void;
        public deleteBuffer(): void;
        public destroy(): void;
    }
}
declare module jg {
    class LoadingScene extends jg.Scene {
        public resource: jg.Resource;
        public shape: jg.Shape;
        public shapeP: jg.Shape;
        public requestCount: number;
        public finished: jg.Trigger;
        public game: jg.Game;
        constructor(game: jg.Game, resource: jg.Resource);
        public init(): void;
        public animate(per: number): void;
        public complete(cnt: number): void;
        public added(e: any): void;
    }
}
declare module jg {
    class InputEvent {
        public type: jg.InputEventType;
        public action: jg.InputEventAction;
        public param: any;
        constructor(type: jg.InputEventType, action: jg.InputEventAction, param?: any);
    }
    class InputKeyboardEvent extends InputEvent {
        public key: jg.Keytype;
        constructor(action: jg.InputEventAction, key: jg.Keytype, e: any);
    }
    class InputPointEvent extends InputEvent {
        public x: number;
        public y: number;
        public point: jg.CommonOffset;
        public entity: jg.E;
        constructor(action: jg.InputEventAction, e: any, point: jg.CommonOffset);
        public set(entity: jg.E): void;
    }
}
declare module jg {
    class Renderer {
        public radian: number;
        public drawOptionFunctions: Object;
        public filter: jg.ImageFilter.IFilter;
        constructor();
        public getMatrix(width: number, height: number, scaleX: number, scaleY: number, angle: number): number[];
        public renderParent(parent: jg.E, c: CanvasRenderingContext2D): void;
        public renderEntity(entity: jg.E, c: CanvasRenderingContext2D): void;
        public renderPure(entity: jg.E, c: CanvasRenderingContext2D): void;
        public filterDraw(entity: jg.E, c: CanvasRenderingContext2D): void;
        public useDrawOption(entity: jg.E, c: CanvasRenderingContext2D): any;
    }
}
declare module jg {
    class GameRenderer extends jg.Renderer {
        public buffer: HTMLCanvasElement[];
        public fc: CanvasRenderingContext2D;
        public bc: CanvasRenderingContext2D;
        public scene: jg.Scene;
        public game: jg.Game;
        public bg: ImageData;
        public container: HTMLElement;
        public handler: HTMLDivElement;
        public flipNo: number;
        public transferMode: jg.RenderTransferMode;
        public disableClear: boolean;
        public frontCanvasSize: jg.CommonSize;
        public frontCanvasOffset: jg.CommonOffset;
        public _pageX: number;
        public _pageY: number;
        constructor(game: jg.Game, container?: HTMLElement, transferMode?: jg.RenderTransferMode, disableBg?: boolean);
        public changeFrontCanvasSize(size: jg.CommonSize, offset?: jg.CommonOffset): void;
        public changeTransferMode(mode: jg.RenderTransferMode): void;
        public changeScene(scene: jg.Scene): void;
        public flip(): void;
        public render(): void;
        public refresh(): void;
    }
}
declare module jg {
    class BufferedRenderer extends jg.Renderer {
        public buffer: HTMLCanvasElement;
        public c: CanvasRenderingContext2D;
        public size: jg.CommonSize;
        constructor(size: jg.CommonSize);
        public clear(): void;
        public createImage(area?: jg.CommonArea, distArea?: jg.CommonArea, canvasSize?: jg.CommonSize): HTMLCanvasElement;
        public createSprite(area?: jg.CommonArea, distArea?: jg.CommonArea, canvasSize?: jg.CommonSize): jg.Sprite;
        public applyFilter(c: CanvasRenderingContext2D, size: jg.CommonSize): void;
        public renderUnit(entity: jg.E): void;
        public renderLayer(layer: jg.Layer): void;
        public renderScene(scene: jg.Scene): void;
        public refresh(): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    class GameTimer {
        public tick: number;
        public wait: number;
        public trigger: jg.Trigger;
        constructor(wait: number);
        public tryFire(t: number): void;
        public fire(t: number): void;
    }
}
declare module jg {
    class Game {
        public _exit: boolean;
        public tick: number;
        public renderTick: number;
        public keymap: any;
        public dragParam: jg.InputPointEvent;
        public renderer: jg.GameRenderer;
        public scenes: jg.Scene[];
        public scene: jg.Scene;
        public resource: jg.Resource;
        public width: number;
        public height: number;
        public scale: number;
        public loadingSceneClass: any;
        public loadingScene: jg.LoadingScene;
        public targetFps: number;
        public fps: HTMLElement;
        public loaded: jg.Trigger;
        public update: jg.Trigger;
        public timers: jg.GameTimer[];
        public render: jg.Trigger;
        public keyDown: jg.Trigger;
        public keyUp: jg.Trigger;
        public pointDown: jg.Trigger;
        public pointUp: jg.Trigger;
        public pointMove: jg.Trigger;
        public eventQueue: jg.InputEvent[];
        public inputEventMap: any;
        public isPointDown: boolean;
        public seed: number;
        public mt: jg.MT;
        constructor(width: number, height: number, ...args: any[]);
        public setSeed(seed?: number): void;
        public random(min: number, max: number): number;
        public getWindowSize(): {
            width: number;
            height: number;
        };
        public fitToWindow(no_center?: boolean): void;
        public setBgColor(r: number, g: number, b: number, a: number): void;
        public refresh(): void;
        public isTouchEnable(): boolean;
        public getOffsetByEvent(e: any): jg.CommonOffset;
        public onmousedown(e: MouseEvent): void;
        public ontouchstart(e: any): void;
        public onmousemove(e: MouseEvent): void;
        public ontouchmove(e: any): void;
        public onmouseup(e: MouseEvent): void;
        public ontouchend(e: any): void;
        public enablePointHandler(): void;
        public onkeydown(e: any): void;
        public onkeyup(e: any): void;
        public enableKeyboardHandler(): void;
        public addTimer(wait: number, owner: any, handler: Function): void;
        public removeTimer(wait: number, owner: any, handler: Function): void;
        public removeTimerAll(owner: any): void;
        public exit(): void;
        public changeScene(scene: jg.Scene, effect?: any, endOldScene?: boolean): void;
        public endScene(effect?: any): void;
        public r(name: string): HTMLImageElement;
        public s(name: string);
        public preload(ary: any): void;
        public preloadOther(identity: string): void;
        public preloadCompleteOther(identity: string): void;
        public setLoadingScene(scene: any): void;
        public preloadComplete(): void;
        public end(): void;
        public setPointingEntity(param: jg.InputPointEvent): void;
        public raiseInputEvent(): void;
        public main(): void;
        public fullscreen(): boolean;
        public exitFullscreen(): boolean;
    }
}
declare module jg.ImageFilter {
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
        public has(): boolean;
        public createSprite(entity: jg.E): jg.Sprite;
        public createImage(entity: jg.Sprite): HTMLCanvasElement;
        public filter(pixels: ImageData): void;
    }
    class Filter implements IFilter {
        public opt: any;
        public width: number;
        public height: number;
        public game: jg.Game;
        constructor(game: jg.Game);
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
        constructor(game: jg.Game, image?: any, amount?: number, repeat?: boolean);
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
        constructor(game: jg.Game, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class SepiaFilter extends Filter {
        constructor(game: jg.Game, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class TintFilter extends Filter {
        constructor(game: jg.Game, color?: string, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    class EdgesFilter extends Filter {
        constructor(game: jg.Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class EmbossFilter extends Filter {
        constructor(game: jg.Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class SharpenFilter extends Filter {
        constructor(game: jg.Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class MatrixFilter extends Filter {
        constructor(game: jg.Game, amount?: number, matrix?: number[]);
        public filter(pixels: ImageData): void;
    }
    class BlurFilter extends Filter {
        constructor(game: jg.Game, amount?: number);
        public filter(pixels: ImageData): void;
    }
    class MosaicFilter extends Filter {
        constructor(game: jg.Game, size?: number, opacity?: number);
        public filter(pixels: ImageData): void;
    }
    enum NoiseType {
        Mono,
        Color,
    }
    class NoiseFilter extends Filter {
        constructor(game: jg.Game, amount?: number, type?: NoiseType);
        public filter(pixels: ImageData): void;
    }
    class PosterizeFilter extends Filter {
        constructor(game: jg.Game, amount?: number, opacity?: number);
        public filter(pixels: ImageData): void;
    }
}
declare module jg {
    interface ActionEventArgs {
        timeline: jg.Timeline;
    }
    interface ActionTickEventArgs {
        timeline: jg.Timeline;
        elapsed: number;
    }
    class Action {
        public time: number;
        public frame: number;
        public added_to_timeline: jg.Trigger;
        public removed_from_timeline: jg.Trigger;
        public action_tick: jg.Trigger;
        public action_start: jg.Trigger;
        public action_end: jg.Trigger;
        public timeline: jg.Timeline;
        public entity: jg.E;
        constructor(param?: any);
        public removedFromTimeline(): void;
        public addedToTimeline(p: ActionEventArgs): void;
        public actionTick(p: ActionTickEventArgs): void;
    }
}
declare module jg {
    class ParallelAction extends jg.Action {
        public actions: jg.Action[];
        public endedActions: jg.Action[];
        constructor(param?: any);
        public addedToTimeline(p: jg.ActionEventArgs): void;
        public removedFromTimeline(): void;
        public actionTick(evt: jg.ActionTickEventArgs): void;
        public parallelActionStart(e: any): void;
    }
}
declare module jg {
    var TWEEN_DRAW_OPTION_SETTERS: {};
    class Tween extends jg.Action {
        public origin: any;
        public target: any;
        public old: any;
        public easing: (t: number, b: number, c: number, d: number) => number;
        public props: Object;
        public otherTarget: any;
        constructor(params: any);
        public actionStart(e: jg.ActionEventArgs): void;
        public tweenActionTick(e: jg.ActionTickEventArgs): void;
    }
}
declare module jg {
    class Timeline {
        public entity: jg.E;
        public queue: jg.Action[];
        public paused: boolean;
        public looped: boolean;
        public _activated: boolean;
        public _parallel: jg.ParallelAction;
        public isFrameBased: boolean;
        constructor(entity: jg.E);
        public _deactivateTimeline(force?: boolean): void;
        public _activateTimeline(force?: boolean): void;
        public setFrameBased(): void;
        public setTimeBased(): void;
        public next(remainingTime?: number): void;
        public tick(t: number): void;
        public add(action: jg.Action): Timeline;
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
declare module jg {
    interface BrowserInfo {
        chrome?: boolean;
        webkit?: boolean;
        safari?: boolean;
        opera?: boolean;
        msie?: boolean;
        mozilla?: boolean;
        version?: string;
    }
    class JGUtil {
        static browser: BrowserInfo;
        static getCenterPoint(p: jg.CommonOffset): jg.CommonOffset;
        static getMargin(p: jg.CommonOffset): jg.CommonOffset;
        static intersect(p1: jg.CommonOffset, p2: jg.CommonOffset): boolean;
        static getDistance(p1: jg.CommonOffset, p2: jg.CommonOffset): jg.CommonOffset;
        static getMovePoint(p1: jg.CommonOffset, p2: jg.CommonOffset, power?: number, maxMove?: number): jg.CommonOffset;
        static getDirectionAngle(p1: jg.CommonOffset, p2: jg.CommonOffset, minDistance?: number): jg.Angle;
        static getDirectionKeytype(p1: jg.CommonOffset, p2: jg.CommonOffset, minDistance?: number): jg.Keytype;
        static homingX(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        static homingY(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        static homing(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        static orderDrawY(): void;
        static createLinearGradient(rect: any, colors: string[], offsets?: number[]): CanvasGradient;
        static createRadialGradient(rect: any, radius1: number, radius2: number, colors: string[], offsets?: number[]): CanvasGradient;
        static createPattern(image: any, repeat?: string): CanvasPattern;
        static isStyleScale: boolean;
        static isTransformMode(): boolean;
        static scaleCanvas(canvas: HTMLCanvasElement, size: jg.CommonSize): void;
        static getBrowser(): BrowserInfo;
        static setCrispEdges(game: jg.Game, crispEdges: boolean): void;
        static proxy(func: Function, self: any): () => void;
    }
}
declare module jg {
    interface QuadraticPoint extends jg.CommonOffset {
        cp1x: number;
        cp1y: number;
    }
    interface BezierPoint extends QuadraticPoint {
        cp2x: number;
        cp2y: number;
    }
    interface ArcPoint extends jg.CommonOffset {
        x2: number;
        y2: number;
        radius: number;
    }
    class Line extends jg.E {
        public p: jg.CommonOffset[];
        public fill: boolean;
        public stroke: boolean;
        public closePath: boolean;
        public clip: boolean;
        constructor(pos: jg.CommonOffset, line?: jg.CommonOffset, color?: string, width?: number);
        public setClip(value: boolean): void;
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
        public setFill(fill: boolean, color: any, closePath?: boolean, stroke?: boolean): Line;
        public addLine(line: any, y?: number): Line;
        public addQuadraticLine(cp: any, p?: any): Line;
        public addBezierLine(cp1: any, cp2?: any, p?: any): Line;
        public addArc(p: any, p2: any, radius: any): void;
        public add();
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    class Effect {
        static time: number;
        static color: string;
        static sceneEffect(game: jg.Game, scene1: jg.Scene, scene2: jg.Scene, type: any, callback: Function, endOldScene?: boolean): void;
        public method: string;
        public arguments: any[];
        constructor(method: string);
        public callEffect(scene: EffectScene): void;
    }
    class EffectScene extends jg.Scene {
        public sp1: jg.Sprite;
        public sp2: jg.Sprite;
        public effected: jg.Trigger;
        constructor(game: jg.Game, scene1: jg.Scene, scene2: jg.Scene);
        public captureScene(scene: jg.Scene): jg.Sprite;
        public fade(color?: any): void;
        public _fadeColor(color: any): void;
        public mosaic(): void;
        public blur(): void;
        public slide(angle: jg.Angle): void;
        public wipe(angle: jg.Angle): void;
        public wipeFade(angle: jg.Angle): void;
        public boxOut(rotate?: number, color?: any): void;
        public boxIn(rotate?: number, color?: any): void;
        public arcOut(color?: any): void;
        public arcIn(color?: any): void;
        public universal(image: any, repeat?: boolean): void;
        public universalTwin(image: any, repeat?: boolean): void;
        public universalDelay(image: any, repeat?: boolean, color?: any): void;
        public getFilter(target: any);
        public swapScene(): void;
    }
}
declare module jg {
    class UIWindow extends jg.E {
        public padding: jg.IRectangle;
        public bg: jg.E;
        constructor(width: number, height: number, bgImage?: any, padding?: jg.IRectangle);
        public getBg(): jg.E;
        public setBg(bg: jg.E): void;
        public createBgImage(e: jg.E, srcPadding?: jg.IRectangle, buf?: jg.BufferedRenderer): jg.Sprite;
        public defaultSkin(): void;
    }
}
declare module jg {
    class MessageWindow extends jg.UIWindow {
        public _nextCursor: jg.Sprite;
        public nextCursor: jg.E;
        public scriptOffset: number;
        public script: string;
        public normalSpeed: number;
        public fastSpeed: number;
        public readed: jg.Trigger;
        public isReaded: boolean;
        public textClip: jg.Shape;
        public hasNextCursor: boolean;
        public textArea: jg.MultilineText;
        constructor(width: number, height: number, bgImage?: any, padding?: jg.IRectangle);
        public setTextArea(textArea: jg.MultilineText): void;
        public getNextCursor(): jg.E;
        public setNextCursor(cursor: jg.E): void;
        public setText(text: string, offset?: number): number;
        public setScript(script: string, offset?: number): number;
        public showNextCursor(): void;
        public deleteNextCursor(): void;
        public hide(fade?: boolean): void;
        public show(fade?: boolean): void;
        public showText(): void;
        public fastMode(): void;
        public normalMode(): void;
        public showAll(): void;
        public next(): boolean;
        public oldWipeOut(time?: number): void;
        public oldFadeOut(time?: number): void;
        public onAnimated(): void;
    }
}
declare module jg {
    class Pixel extends jg.E {
        public imageData: ImageData;
        constructor(width: number, height: number, srcImage?: any, scale?: boolean);
        public clear(r?: number, g?: number, b?: number, a?: number): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    function globalize(): void;
}
declare module jg {
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
