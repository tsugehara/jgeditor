declare module jg {
    /**
    * 座標を示すインターフェース
    */
    interface CommonOffset {
        /** 横座標 */
        x: number;
        /** 縦座標 */
        y: number;
    }
    /**
    * 大きさを示すインターフェース
    */
    interface CommonSize {
        /** 横幅 */
        width: number;
        /** 縦幅 */
        height: number;
    }
    /**
    * 領域を示すインターフェース
    */
    interface CommonArea extends CommonOffset, CommonSize {
    }
    /**
    * 四角形を現すインターフェース
    */
    interface IRectangle {
        /** 左位置 */
        left: number;
        /** 上位置 */
        top: number;
        /** 右位置 */
        right: number;
        /** 下位置 */
        bottom: number;
    }
}
declare module jg {
    /**
    * 方向
    */
    enum Angle {
        Unknown,
        Left,
        Right,
        Up,
        Down,
    }
    /**
    * 描画モード。Transfer = デフォルト、Flip = フリップ、Direct = 直接。
    * jgame.jsでは動作に支障が無いことが確認出来る環境では、Directを使うことを推奨している。
    */
    enum RenderTransferMode {
        Unknown,
        Transfer,
        Flip,
        Direct,
    }
    /**
    * 入力イベント種別
    */
    enum InputEventType {
        Unknown,
        Keyboard,
        Point,
    }
    /**
    * 入力イベントの挙動
    */
    enum InputEventAction {
        Unknown,
        Down,
        Move,
        Up,
    }
    /**
    * キーの種別
    */
    enum Keytype {
        Unknown,
        Left,
        Right,
        Up,
        Down,
        Enter,
        Esc,
    }
    /**
    * Shapeの描画スタイル。塗りつぶす(Fill)か線(Stroke)かを指定。
    */
    enum ShapeStyle {
        Unknown,
        Stroke,
        Fill,
    }
    /**
    * Shapeの形状。
    * Rectで四角、Arcで丸
    */
    enum ShapeType {
        Unknown,
        Rect,
        Arc,
    }
    /**
    * エフェクトの種類
    */
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
/**
* windowインターフェースの拡張
*/
interface Window {
    mozRequestAnimationFrame(): number;
    webkitRequestAnimationFrame(): number;
    createCanvas(width: number, height: number): HTMLCanvasElement;
    random(min: number, max: number): number;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    msRequestAnimationFrame(callback: FrameRequestCallback): number;
}
declare module jg {
    /**
    * 四角形クラス
    */
    class Rectangle implements jg.IRectangle {
        /** 左座標 */
        public left: number;
        /** 上座標 */
        public top: number;
        /** 右座標 */
        public right: number;
        /** 下座標 */
        public bottom: number;
        /**
        * コンストラクタ
        * @param left 左座標
        * @param top 上座標
        * @param right 右座標
        * @param bottom 下座標
        */
        constructor(left?: number, top?: number, right?: number, bottom?: number);
        /**
        * 多少の座標がこの四角形に当たっているかを判定する
        * @param point 判定対象の座標
        */
        public hitTest(point: jg.CommonOffset): boolean;
        /**
        * 対象の座標をこの四角形に吸着させる
        * @param point 対象の座標
        */
        public fit(point: jg.CommonOffset): void;
        /**
        * この四角形の横幅を得る
        */
        public width(): number;
        /**
        * この四角形の縦幅を得る
        */
        public height(): number;
    }
}
declare module jg {
    /**
    * イージング関数ライブラリ
    * enchant.jsプロジェクトで
    * 「ActionScript で広く使われている Robert Penner による Easing Equations を JavaScript に移植した」
    * ライブラリを、さらにType script用に移植したもの。
    *
    * @see http://www.robertpenner.com/easing/
    * @see http://www.robertpenner.com/easing/penner_chapter7_tweening.pdf
    *
    * Easing function library, from "Easing Equations" by Robert Penner.
    */
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
    /**
    * 描画オプションをあらわすインターフェース
    */
    interface IEntityOptions {
        /** 回転確度 */
        rotate: number;
        /** 位置 */
        translate: jg.CommonOffset;
        /** 変形 */
        transform: {
            m11: number;
            m12: number;
            m21: number;
            m22: number;
            dx: number;
            dy: number;
        };
        /** 拡縮 */
        scale: jg.CommonOffset;
        /** 透明度 */
        globalAlpha?: number;
        /** フォント */
        font?: string;
        /** 塗りつぶしスタイル */
        fillStyle?: string;
        /** 線スタイル */
        strokeStyle?: string;
        /** 線の末端形状 */
        lineCap?: string;
        /** 線の結合形状 */
        lineJoin?: string;
        /** 線の太さ */
        lineWidth?: number;
        /** マイター限界比率 */
        miterLimit?: string;
        /** 影の量 */
        shadowBlur?: number;
        /** 影の色 */
        shadowColor?: string;
        /** 影のオフセットX座標 */
        shadowOffsetX?: number;
        /** 影のオフセットY座標 */
        shadowOffsetY?: number;
        /** 文字の方向 */
        textAlign?: string;
        /** 文字基準線 */
        textBaseline?: string;
        /** 結合方式 */
        globalCompositeOperation?: string;
    }
    /**
    * デフォルトの描画オプション
    */
    var ENTITY_OPTIONS_DEFAULT_VALUES: IEntityOptions;
    /**
    * jgame.jsにおいて、最も基本的な描画単位です。より正確な名称はエンティティ（Entity）です。
    * Sprite、Shape、Label、Tile、さらにはLayerもこのクラスを継承して作られています。jgame.jsで描画される全てのオブジェクトはEntityであり、Entityでないもの（Sceneなど）は描画されません。
    * 動作速度が重用視されるjgame.jsにおいて、Gameクラス、Rendererクラスと並ぶ最も重要なクラスですが、通常のユーザがこのクラスを利用することはありません。
    * このクラスを利用するのは、このクラスを継承して新しい描画オブジェクトを作るなど、一歩進んだ使い方をする時でしょう。
    */
    class E {
        /** X座標 */
        public x: number;
        /** Y座標 */
        public y: number;
        /** 横幅 */
        public width: number;
        /** 縦幅 */
        public height: number;
        /** Timelineのインスタンス。通常このフィールドを直接参照せず、tl()メソッドを通して参照する */
        public _tl: jg.Timeline;
        /** 現在のシーン */
        public scene: jg.Scene;
        /** 親Entity */
        public parent: E;
        /** 初期化が可能な状態になった場合に実行する処理群 */
        public active_queue: Function[];
        /** startメソッドを実行済みかどうかのフラグ */
        public started: boolean;
        /** 前回の描画から更新されているかを表すフラグ */
        public isUpdated: boolean;
        /** 変形などを無効化するかのフラグ。これがセットされているものは、座標計算を含めて自前で描画処理を実装する必要があるが、その分高速 */
        public disableTransform: boolean;
        /** 子Entity */
        public entities: E[];
        /** ポイントイベントを受信するかどうか */
        public pointCapture: boolean;
        /** ポインティングデバイスで押下処理が発生したことを示すイベント。InputPointEventをパラメータとして受け取る */
        public pointDown: jg.Trigger;
        /** ポインティングデバイスで押下処理が終了したことを示すイベント。InputPointEventをパラメータとして受け取る */
        public pointUp: jg.Trigger;
        /** ポインティングデバイスで押下処理中に移動が発生したことを示す。InputPointEventをパラメータとして受け取る */
        public pointMove: jg.Trigger;
        /** 描画オプション。詳細はIEntityOptionsなどを参照 */
        public options: Object;
        /** このEntityの子Entityを描画する際に利用する描画順制御関数 */
        public orderDraw: Function;
        /** フィルタ */
        public filter: jg.ImageFilter.FilterChain;
        /** スクロール座標 */
        public scroll: jg.CommonOffset;
        /** 透明度 */
        public opacity: number;
        /**
        * コンストラクタ
        */
        constructor();
        /**
        * ポインティングイベントを有効化する
        */
        public enablePointingEvent(): void;
        /**
        * ポインティングイベントを無効化する。
        * pointDown, pointMove, pointUpに設定したハンドラの解放処理は別途行う必要がある
        */
        public disablePointingEvent(): void;
        /**
        * 描画オプションを一つ削除する。詳細はIEntityOptionsなどを参照
        *  一つも描画オプションを指定していない状態が最速であるため、利用が終わったオプションは迅速な削除が推奨される。
        * @param name 削除するオプション
        */
        public removeDrawOption(name: string): void;
        /**
        * 描画オプションを指定する。詳細はIEntityOptionsなどを参照
        * @param name 指定するオプション名
        * @param value オプションに指定する値
        */
        public setDrawOption(name: string, value: any): void;
        /**
        * 描画オプションの現在値を取得する。
        * なお、指定されていない場合はデフォルト値を返すため、指定されているかどうかの判定でこのメソッドを利用してはならない。
        * 指定されているかどうかの判定は、optionsフィールドを直接見る必要がある。
        * @param name 取得する描画オプション名
        */
        public getDrawOption(name: string): any;
        /**
        * 指定座標に移動し、更新フラグを立てる。x, yフィールドを直接操作すると、更新フラグを立てずに移動させることも可能。
        * @param x 移動先x座標
        * @param y 移動先y座標
        */
        public moveTo(x: number, y: number): void;
        /**
        * 現在位置から相対的に移動させ、更新フラグを立てる。x, yフィールドを直接操作すると、更新フラグを立てずに移動させることも可能。
        * @param x x座標の移動量
        * @param y y座標の移動量
        */
        public moveBy(x: number, y: number): void;
        /**
        * 指定座標にスクロールさせる
        * @param x スクロール先x座標
        * @param y スクロール先y座標
        */
        public scrollTo(x: number, y: number): void;
        /**
        * 相対的にスクロールさせる
        * @param x x座標のスクロール量
        * @param y y座標のスクロール量
        */
        public scrollBy(x: number, y: number): void;
        /**
        * このEntityの初期化処理を行う
        */
        public activate(): void;
        /**
        * 初期化処理を追加する
        */
        public addActiveQueue(f: Function): void;
        /**
        * このEntityをシーンに追加する
        * @param scene 追加対象scene
        * @param layerName 追加対象レイヤー名。省略時はrootになる
        */
        public appendTo(scene: jg.Scene, layerName?: string): void;
        /**
        * このEntityを削除する。
        * Layerはこのメソッドでは削除出来ないため、Scene.deleteLayerメソッドを利用する必要がある
        */
        public remove(): void;
        /**
        * このEntityの指定位置に子供を挿入する。
        * @param entity 挿入対象の子Entity
        * @param index 挿入位置
        */
        public insert(entity: E, index: any): void;
        /**
        * このEntityに子供を追加する
        * @param entity 追加対象の子Entity
        */
        public append(entity: E): void;
        /**
        * このEntityから子供を削除する
        * @param entity 削除対象の子Entity
        */
        public removeChild(entity: E): boolean;
        /**
        * このEntityを活性化させる。このメソッドを呼び出した後は、game.updateイベントのハンドラとしてE.updateメソッドが呼び出されるようになる
        */
        public start(): void;
        /**
        * このEntityを非活性化させる。
        */
        public stop(): void;
        /**
        * 指定のタイマーを稼動させる。
        * @param wait タイマー起動間隔をミリ秒で指定
        * @param method タイマーのコールバック。省略時はintervalメソッドが指定される
        */
        public startTimer(wait: number, method?: Function): void;
        /**
        * 指定のタイマーを停止させる
        * @param wait 停止対象タイマーの起動間隔
        * @param method 停止対象タイマーのコールバック。省略時はintervalメソッド
        */
        public stopTimer(wait: number, method?: Function): void;
        /**
        * 更新フラグを立てる。これが立っていないと再描画されない。
        * 高速描画を目指すjgame.jsで一番多いトラブルが更新フラグ立て忘れなので、怪しい場合は呼び出してみるといいかもしれない。
        * なお、親要素がある場合は親要素の更新フラグ更新を優先させるため、本メソッドを呼び出した後に必ずthis.isUpdate()の戻り値がtrueになるわけではない
        */
        public updated(): void;
        /**
        * このEntityが更新されているかどうかを調べる。
        * ※廃止検討中
        */
        public isUpdate(): boolean;
        /**
        * このEntityの更新フラグを下げる。
        * ※廃止検討中
        */
        public reflected(): void;
        /**
        * このEntityのTimelineを取得する
        */
        public tl(): jg.Timeline;
        /**
        * このEntityを破棄する
        */
        public destroy(): void;
        /**
        * このEntityのゲームから見たオフセット位置を取得する。
        * x, y単体とは異なり、親要素の座標も考慮に入れた座標を返す。
        */
        public offset(): jg.CommonOffset;
        /**
        * この要素のゲーム中での領域を取得する。
        * offsetと同じく、親要素の座標も考慮に入れた領域を返す。
        */
        public rect(): jg.Rectangle;
        /**
        * 指定の座標がこの要素と接触しているかを判定する。
        * @param point 判定する座標。
        */
        public hitTest(point: jg.CommonOffset): boolean;
        /**
        * 指定の座標との距離を取得する。中心点からの距離である点に注意
        * @param point 距離を取得する座標。CommonAreaの場合領域の中心からの距離を取得する
        */
        public getDistance(point: jg.CommonOffset): jg.CommonOffset;
        /**
        * 指定座標に合致する要素を返す。子要素や自分自身も含めて判定する
        * @param point 判定する座標
        * @param force trueの場合、各EntityのenablePointingEvent設定値を無視
        */
        public getEntityByPoint(point: jg.CommonOffset, force?: boolean): E;
        /**
        * このEntityをSpriteに変換する
        */
        public createSprite(): jg.Sprite;
        /** startによる活性化で呼び出されるGame.updateイベントのイベントハンドラ */
        public update(t: number): void;
        /** startTimerによって呼び出されるタイマーのコールバック */
        public interval(): void;
        /**
        * 描画
        * @param context 描画対象context
        */
        public draw(context: CanvasRenderingContext2D): void;
        /**
        * このEntityを表示し、更新フラグを立てる
        */
        public show(): void;
        /**
        * このEntityを非表示にし、更新フラグを立てる
        */
        public hide(): void;
    }
}
declare module jg {
    /**
    * 図形を現すクラス。クリッピング領域の指定にも使える
    */
    class Shape extends jg.E {
        /** Shapeの描画スタイル。塗りつぶすか外周かを指定。変更する際はsetStyleを利用 */
        public style: jg.ShapeStyle;
        /** Shapeの形状。円か四角 */
        public type: jg.ShapeType;
        /** 同期対象オブジェクト */
        public syncObj: any;
        /** 同期処理を行う関数 */
        public syncFunc: (shape: Shape) => void;
        /** Math.PI * 2 */
        static PI_200_PER: number;
        /** クリッピング領域にするかどうかを指定。変更する場合はこのプロパティを直接操作せず、setClipメソッドを利用する */
        public clip: boolean;
        /**
        * 新しいShapeクラスを生成する
        * @param width 横幅。
        * @param height 縦幅。ShapeTypeがArcの場合無視される
        * @param style Shapeの描画スタイル。デフォルトはShapeStyle.Stroke（線）
        * @param color Shapeの色。デフォルトは黒
        * @param type Shapeの形状。デフォルトはShapeType.Rect（四角）
        */
        constructor(width: number, height: number, style?: jg.ShapeStyle, color?: any, type?: jg.ShapeType);
        /**
        * このオブジェクトをクリップモードにする。またはクリップモードを解除する。
        * クリップモードとなったShapeは描画されず、以降に描画されるオブジェクトの描画領域を制限する。
        */
        public setClip(value: boolean): void;
        /**
        * Shapeの描画スタイルを変更する
        */
        public setStyle(style: jg.ShapeStyle): void;
        /**
        * Shapeの線の太さを変更する
        */
        public setLineWidth(width: number): void;
        /**
        * Shapeの線の太さを取得する
        */
        public getLineWidth();
        /**
        * Shapeの色を指定する
        * @param color 指定する色。CSS Color形式やグラデーションなどで指定
        */
        public setColor(color: any): void;
        /**
        * Shapeの色を取得する
        */
        public getColor();
        /**
        * このShapeを特定のオブジェクトに同期させる
        * @param syncObj 同期するオブジェクト。
        * @param syncFunc 同期に利用する関数。例えばこの関数内でshape.x = this.xなどとやれば、ShapeのX座標は常に同期する
        */
        public synchronize(syncObj: any, syncFunc: (shape: Shape) => void): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * ハンドラ用インターフェース
    */
    interface TriggerHandler {
        /** ハンドラ所有者 */
        owner: any;
        /** コールバック */
        handler: Function;
    }
    /**
    * jgame.jsのイベント機構を管理するクラス。
    * TypeScriptに合ったイベント機構として、thisを指定可能なイベントハンドラを用いるために考案された。
    * 1イベントに付き1つのTriggerを作る事を想定しているため、例えばDOMであるkeyDown、keyUpのイベントを作るなら、このようにする。
    * this.keyDown = new jg.Trigger();
    * this.keyUp = new jg.Trigger();
    *
    * イベントハンドラの指定はhandleで行い、イベントの発火はfireで行う。
    * イベントハンドラの削除はremove, removeAll, removeAllByHandler, destroyの4種が用意されており、匿名メソッドにおけるハンドラ削除をやりやすくしている。
    *
    * Genericsにするとよりタイプセーフになるが、jgame.js開発開始時点ではGenericsが存在しなかったため導入されていない。将来のGenericsは検討中。
    */
    class Trigger {
        /** このTriggerに登録された全ハンドラ */
        public handlers: TriggerHandler[];
        /**
        * コンストラクタ
        */
        constructor();
        /**
        * 所定の位置にハンドラを挿入する。ハンドラ順序が処理に影響する場合に指定する
        * @param index 挿入位置。添え字は0から
        * @param owner ハンドラ所有者。イベント発火時には、この値がthisとなる
        * @param handler ハンドラのコールバック関数
        */
        public handleInsert(index: number, owner: any, handler?: Function): void;
        /**
        * ハンドラを追加する
        * @param owner ハンドラ所有者。イベント発火時には、この値がthisとなる
        * @param handler ハンドラのコールバック関数
        */
        public handle(owner: any, handler?: Function): void;
        /**
        * すべてのハンドラを削除する
        */
        public destroy(): void;
        /**
        * 指定された所有者のハンドラをすべて削除する
        * @param owner 削除対象のハンドラ所有者
        */
        public removeAll(owner: any): void;
        /**
        * 指定されたコールバック関数のハンドラをすべて削除する
        * @param handler 削除対象のコールバック関数
        */
        public removeAllByHandler(handler: Function): void;
        /**
        * ハンドラを削除する
        * @param owner 削除対象のハンドラ所有者
        * @param handler 削除対象のコールバック関数
        */
        public remove(owner: any, handler?: Function): void;
        /**
        * イベントを発火する
        * @param param イベントパラメータ
        */
        public fire(param?: any): void;
        /**
        * 非セーフティな形でイベントを発火する。
        * このメソッドの利用は極力控えるべき。ハンドラ内でイベントハンドラの追加や削除が行われると、すべてのハンドラに処理が伝達されないため。
        * ハンドラ内で削除されないことが保障されている場合や、複数処理されてもかまわないような場合にのみ利用する。
        * @param param イベントパラメータ
        */
        public fastFire(param?: any): void;
    }
}
declare module jg {
    /**
    * 最低限のサウンドサポートを提供するクラス。
    * jgame.js的には、別のライブラリでサウンド実装することを推奨している。
    */
    class SimpleSound {
        /** BGMに利用するAudio。一つのみ指定可 */
        static bgm: HTMLAudioElement;
        /**
        * サウンドを再生する
        * @param sound 再生するサウンド
        * @param loop trueでloop再生する
        */
        static play(sound: HTMLAudioElement, loop?: boolean): HTMLAudioElement;
        /**
        * BGMが存在するかどうかを返す
        */
        static hasBgm(): boolean;
        /**
        * BGMを再生する
        * @param sound 再生するBGM
        * @param loop trueの場合loop再生する
        */
        static playBgm(sound: HTMLAudioElement, loop?: boolean): HTMLAudioElement;
        /**
        * サウンドの再生を停止する
        * @param source 再生を停止する対象のサウンド
        */
        static stop(source: HTMLAudioElement): void;
        /**
        * BGMの再生を停止する
        */
        static stopBgm(): void;
    }
}
declare module jg {
    /**
    * リソース構造クラス
    */
    class ResourceStructure {
        /** 画像のパス */
        public img: string;
        /** サウンドのパス */
        public sound: string;
        /** デフォルトのリソース構造 */
        static Default: ResourceStructure;
        /** よく使われることを想定しているプレーンな構造 */
        static Plain: ResourceStructure;
        /**
        * コンストラクタ
        * @param img 画像のパス
        * @param sound サウンドのパス
        */
        constructor(img: string, sound: string);
        /**
        * 絶対パスかどうかを判定
        * @param url 判定するURL
        */
        public isAbsolute(url: string): string;
        /**
        * 構造に則った画像のURLを返す
        * @param url 画像のパス
        */
        public imageUrl(url: string): string;
        /**
        * 構造に則ったサウンドのURLを返す
        * @param url サウンドのパス
        */
        public soundUrl(url: string): string;
    }
}
declare module jg {
    /**
    * リソースを読み込むくラス
    */
    class ResourceLoader {
        /** 読み込み対象のリソース */
        public resource: jg.Resource;
        /**
        * コンストラクタ
        * @param resource 読み込み対象のリソース
        */
        constructor(resource: jg.Resource);
        /**
        * リソースを読み込む。サブクラスでオーバーライドする想定であり、このメソッドは何もしない
        * @param url リソースのURL
        * @param identifier リソースの識別子
        */
        public load(url: string, identifier: string): void;
    }
    /**
    * 画像リソースを読み込む
    */
    class ImageResourceLoader extends ResourceLoader {
        /**
        * 画像リソースを読み込む
        * @param url 画像リソースのURL
        * @param identifier リソースの識別子
        */
        public load(url: string, identifier: string): void;
        /**
        * 完了時のコールバック。リソースクラスに画像を登録し、読み込み完了を通知する
        * @param name 画像の識別子
        * @param image 読み込んだ画像
        * @param is_success trueで成功、falseでエラー
        */
        public completed(name: string, image: HTMLImageElement, is_success: boolean): void;
    }
    /**
    * 外部JavaScriptを読み込むクラス。
    * このクラスではjavascriptの依存関係を解決するため、先に読み込んだリソースの読み込みが完了するまで、次のリソースを読み込むことはない
    */
    class ScriptResourceLoader extends ResourceLoader {
        /** ロード中かをあらわすフラグ */
        static loading: boolean;
        /**
        * javascriptリソースを読み込む
        * @param url javascriptリソースのURL
        * @param identifier リソースの識別子
        */
        public load(url: string, identifier: string): void;
        /**
        * 完了時のコールバック。リソースクラスにスクリプトを登録し、読み込み完了を通知する
        * @param name スクリプトの識別子
        * @param image 読み込んだスクリプト
        * @param is_success trueで成功、falseでエラー
        */
        public completed(name: string, script: HTMLScriptElement, is_success: boolean): void;
    }
    /**
    * サウンドを読み込む
    */
    class SoundResourceLoader extends ResourceLoader {
        /**
        * サウンドリソースを読み込む
        * @param url サウンドリソースのURL
        * @param identifier リソースの識別子
        */
        public load(url: string, identifier: string): void;
        /**
        * 完了時のコールバック。リソースクラスにサウンドを登録し、読み込み完了を通知する
        * @param name サウンドの識別子
        * @param image 読み込んだサウンド
        * @param is_success trueで成功、falseでエラー
        */
        public completed(name: string, audio: HTMLAudioElement, is_success: boolean): void;
    }
}
declare module jg {
    /**
    * 画像やサウンドなどのリソースを管理するクラス。
    * このクラスはjgame.jsでは例外的な単一インスタンスのクラスであるため、複数ゲームを1ページに読み込む場合は注意が必要
    */
    class Resource {
        /** 読み込み済みの画像 */
        public images: {
            [key: string]: HTMLImageElement;
        };
        /** 読み込み済みのスクリプト */
        public scripts: {
            [key: string]: HTMLScriptElement;
        };
        /** 読み込み済みのサウンド */
        public sounds: {
            [key: string]: any;
        };
        /** 読み込み予定の識別子リスト */
        public requests: string[];
        /**
        * 読み込みが完了するたびに発火されるイベント。
        * パラメータで残りリクエスト数を受け取るため、全読み込み完了はloaded.handle((e) => {if (e == 0) console.log("completed");});などで判定可能 */
        public loaded: jg.Trigger;
        /**
        * リソースの読み込みリクエストが追加される度に発火されるイベント。
        * パラメータとして、{name: リソース識別子, url: リソースのURL, loader: ResourceLoaderクラス}を持つ
        */
        public added: jg.Trigger;
        /**
        * このクラスが管理しているResourceLoader。拡張子ごとのResourceLoaderのマップになっている。
        * デフォルトでは以下の通り。"default"は登録されていないすべての拡張子が該当する。
        * "js": ScriptResourceLoader
        * "default": ImageResourceLoader
        * "mp3": SoundResourceLoader
        * "ogg": SoundResourceLoader
        * "wav": SoundResourceLoader
        * "mid": SoundResourceLoader
        */
        public loaders: {
            [key: string]: jg.ResourceLoader;
        };
        /** このリソースの現在の構造 */
        public structure: jg.ResourceStructure;
        /** 単一のインスタンス */
        static instance: Resource;
        /**
        * 唯一のインスタンスを取得する。
        */
        static getInstance(): Resource;
        /**
        * 新しいResourceクラスを生成するが、この方法でResourceクラスを生成するべきではなく、jgame.jsではgetInstanceによる単一インスタンスでの利用を推奨している
        */
        constructor();
        /**
        * すべてのリソースを解放する
        */
        public clear(): void;
        /**
        * 画像リソースを取得する
        */
        public get(name: string): HTMLImageElement;
        /**
        * サウンドリソースを取得する
        */
        public sound(name: string);
        /**
        * リクエストの完了を通知する
        * @param name リクエストが完了したリソースの識別子
        */
        public requestCompleted(name: string): void;
        /**
        * リソースを読み込む
        * @param name リソースの識別子。url省略時は、urlと同じ値になる
        * @param url リソースのURL
        */
        public load(name: string, url?: string): void;
        /**
        * 手動で読み込むを行う。
        * このメソッド内でResourceクラスは何も処理をせず、ただリクエストを登録する。
        * ロードが完了したリソースは、別途completeManualを通じてResourceクラスに読み込み完了を手動通知する必要がある。
        * 主に、外部ライブラリでの読み込み処理での利用を想定している。
        * @param name リソース識別子
        */
        public loadManual(name: string): void;
        /**
        * 手動で読み込み完了を行う。通常はloadManualとセットで利用する
        * @param name リソース識別子
        */
        public completeManual(name: string): void;
    }
}
declare module jg {
    /**
    * シーンを表すクラス
    */
    class Scene {
        /** 管理している全レイヤー */
        public layers: {
            [key: string]: jg.Layer;
        };
        /** レイヤー数 */
        public layerCount: number;
        /** このシーンを管理しているゲーム */
        public game: jg.Game;
        /** スタックされたモード */
        public mode: string[];
        /** 表示された時に発生するイベントハンドラ。startedとは異なり、再表示時にも発生する */
        public showed: jg.Trigger;
        /** 隠された時に発生するイベントハンドラ。endedとは異なり、再表示時にも発生する */
        public hid: jg.Trigger;
        /** このシーンが終了した時に発生するイベントハンドラ */
        public ended: jg.Trigger;
        /** このシーンが開始された時に発生するイベントハンドラ */
        public started: jg.Trigger;
        /** ルートレイヤー */
        public root: jg.Layer;
        /** キーが押された場合のイベントハンドラ。通常はundefinedであるため、利用する場合は自前でscene.keyDown = new jg.Trigger()を行う必要がある */
        public keyDown: jg.Trigger;
        /** キーが離された場合のイベントハンドラ。通常はundefinedであるため、利用する場合は自前でscene.keyDown = new jg.Trigger()を行う必要がある */
        public keyUp: jg.Trigger;
        /** ポイントが押された場合のイベントハンドラ。enablePointingEventを呼び出すまではundefined */
        public pointDown: jg.Trigger;
        /** ポイントが離された場合のイベントハンドラ。enablePointingEventを呼び出すまではundefined */
        public pointUp: jg.Trigger;
        /** ポイントが移動した場合のイベントハンドラ。enablePointingEventを呼び出すまではundefined */
        public pointMove: jg.Trigger;
        /**
        * コンストラクタ
        * @param game 関連するgame
        */
        constructor(game: jg.Game);
        /**
        * 現在のモードを返す
        */
        public currentMode(): string;
        /**
        * 管理しているレイヤーを配列にして返す
        */
        public getLayerArray(): jg.Layer[];
        /**
        * ポインティングイベントを有効にする。
        * この処理はrootレイヤーのポインティングイベントも有効にする点に注意
        */
        public enablePointingEvent(): void;
        /**
        * ポインティングイベントを無効にする。実際はrootレイヤーのポインティングイベントを無効にしている。
        * sceneクラスのpointDown, pointUp, pointMoveのイベントハンドラは解放されないため、解放処理は別途行う必要がある点に注意
        */
        public disablePointingEvent(): void;
        /**
        * モードを変更する。
        * この処理を行った際、引数modeがgameであり、現在のmodeがtitleである場合、以下のメソッドが本クラスのインスタンスに存在する場合には呼び出される。
        * titleHide
        * gameStart
        * gameShow
        * @param mode 新しいモード
        */
        public changeMode(mode: string): void;
        /**
        * 現在のモードを終了する。すべてのモードが終了した場合、シーン自体も終了させる。
        * この処理を行った際、現在のmodeがgameであり、次のモードがtitleである場合、以下のメソッドが本クラスのインスタンスに存在する場合には呼び出される。
        * gameEnd
        * titleShow
        * ただし、newMode引数を指定した場合titleShowは発生しない。
        * @param newMode 次のモードを指定する。省略時は変更しない
        */
        public endCurrentMode(newMode?: string): void;
        /**
        * 指定したレイヤーを作成する
        * @param name 作成するレイヤー名
        * @param size レイヤーの大きさ
        */
        public createLayer(name: string, size?: jg.CommonSize): jg.Layer;
        /**
        * 指定した名前のレイヤーを削除する。rootレイヤーは削除できない
        * @param name 削除するレイヤー名
        */
        public deleteLayer(name: string): void;
        /**
        * このシーンとシーンに関連するリソースをすべて削除する
        */
        public destroy(): void;
        /**
        * このシーンを終了する
        */
        public end(): void;
        /**
        * このシーンとそれに関連するリソースをすべて再構築する
        */
        public refresh(): void;
        /**
        * シーンをスクロールする
        * @param x スクロール先X座標
        * @param y スクロール先Y座標
        * @param layerName レイヤー名を指定する。省略した場合rootレイヤーが対象になる
        */
        public scrollTo(x: number, y: number, layerName?: string): void;
        /**
        * シーンを相対的にスクロールする
        * @param x X座標の変化値
        * @param y Y座標の変化値
        * @param layerName レイヤー名を指定する。省略した場合rootレイヤーが対象になる
        */
        public scrollBy(x: number, y: number, layerName?: string): void;
        /**
        * このシーンにentityを追加する
        * @param entity 追加するentity
        * @param layerName 追加するレイヤー名。省略時はrootレイヤー
        */
        public append(entity: jg.E, layerName?: string): void;
        /**
        * このシーンからentityを削除する。
        * どのレイヤーにあっても必ず削除されるが、entity.remove()の利用を推奨。
        * @param entity 削除するentity
        */
        public removeEntity(entity: jg.E): void;
    }
}
declare module jg {
    /**
    * 画像をあらわす最も基本的な描画オブジェクト
    */
    class Sprite extends jg.E {
        /** 描画対象の画像。HTMLImageElement, HTMLVideoElement, HTMLCanvasElementのいずれかが指定可能 */
        public image: any;
        /** 転送元横幅。通常は画像と同サイズ */
        public srcWidth: number;
        /** 転送元縦幅。通常は画尾と同サイズ */
        public srcHeight: number;
        /** 転送元横座標。通常は0 */
        public srcX: number;
        /** 転送元縦座標。通常は0 */
        public srcY: number;
        /**
        * Spriteクラスのインスタンスを生成する。
        * @param image このSpriteをあらわす画像
        * @param srcWidth 転送元横幅を指定。省略時は画像の横幅と同一になる
        * @param srcHeight 転送元縦幅を指定。省略時は画像の縦幅と同一になる
        */
        constructor(image: any, srcWidth?: number, srcHeight?: number);
        /**
        * 描画する
        * @paramn context 描画対象context
        */
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * 複数のフレームによってアニメーションを行うSprite。
    * なおこのクラスでは1枚の画像を複数のフレームに区切って扱う形のみサポートしているため、複数の画像で一つのアニメーションを後世することは出来ない。
    */
    class FrameSprite extends jg.Sprite {
        /** 画像一列で何枚の画像が入っているか */
        public sep: number;
        /** フレーム */
        public frame: number[];
        /** 現在のフレーム番号 */
        public fno: number;
        /** アニメーション中かどうか */
        public animation: boolean;
        /** アニメーション時間 */
        public wait: number;
        /** 繰り返しアニメーションを行うかどうか */
        public loop: boolean;
        /** アニメーション完了時に発生するイベント。ループ中は発生しない */
        public frameEnded: jg.Trigger;
        /**
        * コンストラクタ
        * @param image 画像。1枚の画像にアニメーションパターンがすべて格納されている必要がある
        * @param srcWidth フレームの横幅
        * @param srcHeight フレームの縦幅
        * @param wait アニメーション時間をミリ秒で指定。省略時は200ミリ秒
        */
        constructor(image: any, srcWidth: number, srcHeight: number, wait?: number);
        /**
        * フレームを変更し、変更フラグを立てる
        */
        public changeFrame(): void;
        /**
        * アニメーションを開始する。すでにアニメーション中である場合、noClearの設定含めて無視される
        * @param noClear 指定した場合、fnoを0にリセットする
        */
        public animate(noClear?: boolean): boolean;
        /**
        * アニメーションを停止する
        */
        public inanimate(): void;
        /**
        * アニメーション処理を行うコールバック
        */
        public interval(): void;
    }
}
declare module jg {
    /**
    * キャラクタの移動情報
    */
    interface CharacterMoveInfo {
        /** 移動元X座標 */
        x: number;
        /** 移動元Y座標 */
        y: number;
        /** 移動先X座標 */
        dx: number;
        /** 移動先Y座標 */
        dy: number;
        /** 移動に要する時間。歴史的な理由でフレーム数を意味するfという名前になっている */
        f: number;
        /** これまでかかった時間 */
        t: number;
    }
    /**
    * 移動完了イベントパラメータ
    */
    interface CharacterMovedEventArgs {
        /** 次の移動先 */
        nextMove?: string;
    }
    /**
    * キャラクタをあらわすクラス。
    * 足踏み、方向、移動といった基本的な概念を持っている。
    */
    class Character extends jg.FrameSprite {
        /** 移動中かどうか */
        public moving: boolean;
        /** 現在の移動情報 */
        public moveInfo: CharacterMoveInfo;
        /** 次の移動先を表す文字列 */
        public nextMove: string;
        /** 移動開始イベント。CharacterMoveInfoをパラメータとして持つ */
        public beginMove: jg.Trigger;
        /** 移動完了イベント。CharacterMovedEventArgsをパラメータとして持つ */
        public moved: jg.Trigger;
        /** キャラクター番号 */
        public charaSeq: number;
        /** 画像のキャラクタ列数 */
        public charaCol: number;
        /** 足踏みのアニメーションフレーム数 */
        public animeCnt: number;
        /** 一度の移動で移動するピクセル数 */
        public movePixel: number;
        /** 移動に要する時間 */
        public moveTime: number;
        /** キャラクタの方向とキャラチップの番号の相対表。{[key:Angle]: number; }形式で指定 */
        public angleSeq: any;
        /** 現在の方向 */
        public currentAngle: jg.Angle;
        /**
        * コンストラクタ
        * @param image キャラクタの画像。複数のキャラクタが一つになった画像を指定することも可能
        * @param width キャラクターの横幅
        * @param height キャラクターの縦幅
        * @param wait 足踏みに要する時間をミリ秒単位で指定。省略時は200ミリ秒
        */
        constructor(image: any, width: number, height: number, wait?: number);
        /**
        * キャラクターが移動していない場合、左に移動させる
        * @param stackNext 移動が出来ず、前の移動からある程度時間が経っていたら、次の移動先にこの方向をセットする
        */
        public moveLeft(stackNext?: boolean): boolean;
        /**
        * キャラクターが移動していない場合、右に移動させる
        * @param stackNext 移動が出来ず、前の移動からある程度時間が経っていたら、次の移動先にこの方向をセットする
        */
        public moveRight(stackNext?: boolean): boolean;
        /**
        * キャラクターが移動していない場合、上に移動させる
        * @param stackNext 移動が出来ず、前の移動からある程度時間が経っていたら、次の移動先にこの方向をセットする
        */
        public moveUp(stackNext?: boolean): boolean;
        /**
        * キャラクターが移動していない場合、下に移動させる
        * @param stackNext 移動が出来ず、前の移動からある程度時間が経っていたら、次の移動先にこの方向をセットする
        */
        public moveDown(stackNext?: boolean): boolean;
        /**
        * キャラクターを移動させる
        * @param x 移動先X座標
        * @param y 移動先Y座標
        * @param f 移動に要する時間
        */
        public move(x: number, y: number, f: number): boolean;
        /**
        * 毎フレーム更新処理のイベントハンドラ
        * @param t  経過時間
        */
        public update(t: number): void;
        /**
        * 移動完了処理を行う
        */
        public endMove(): void;
        /**
        * 方向を変更する
        * @param angle 変更後の方向
        */
        public angle(angle: jg.Angle): void;
    }
}
declare module jg {
    /**
    * Characterクラスを量産するためのファクトリ
    */
    class CharacterFactory {
        /** 画像のキャラクタ列数 */
        public charaCol: number;
        /** 足踏みのアニメーションフレーム数 */
        public animeCnt: number;
        /** 一度の移動で移動するピクセル数 */
        public movePixel: number;
        /** 移動に要する時間 */
        public moveTime: number;
        /** キャラクタに指定する画像 */
        public image: HTMLImageElement;
        /** キャラクタの横幅 */
        public width: number;
        /** キャラクタの縦幅 */
        public height: number;
        /** 足踏みに要する時間 */
        public wait: number;
        /** 最初に向いている方向 */
        public angle: jg.Angle;
        /**
        * 利用するコンストラクタ。通常はjg.Characterだが、継承したクラスなどを使いたい場合それを指定する
        */
        public createClass: any;
        /** キャラクタの方向とキャラチップの番号の相対表。{[key:Angle]: number; }形式で指定 */
        public angleSeq: any;
        /**
        * コンストラクタ
        * @param image キャラクタに指定する画像
        * @param width キャラクタの横幅
        * @param height キャラクタの縦幅
        */
        constructor(image: HTMLImageElement, width: number, height: number);
        /**
        * キャラクタを生成する
        * @param charaSeq 利用する画像のキャラ番号
        * @param offset 初期x, y座標。省略時はx:0, y:0に配置される
        * @param angle 初期方向。省略時はthis.angle
        */
        public create(charaSeq: number, offset?: jg.CommonOffset, angle?: jg.Angle): jg.Character;
    }
}
declare module jg {
    /**
    * 文字を表示するクラス
    */
    class Label extends jg.E {
        /** 表示する文字列。変更する場合はこのフィールドを直接編集するのではなく、setTextを呼ぶべき */
        public text: string;
        /** 最大幅。変更する場合はこのフィールドを直接編集するのではなく、setMaxWidthを呼ぶべき */
        public maxWidth: number;
        /** 同期するオブジェクト */
        public syncObj: any;
        /** 同期するプロパティ */
        public syncProp: string;
        /** 同期時にMath.roundをかけるかどうか */
        public syncRound: boolean;
        /**
        * コンストラクタ
        * @param text 表示文字列
        * @param fontSize 文字の大きさ
        * @param fontColor 文字色
        * @param baseLine ベースライン
        */
        constructor(text?: string, fontSize?: number, fontColor?: string, baseline?: string);
        /**
        * 最大幅を変更する。描画される文字列がこの幅を上回る場合、自動的に縮小される
        * @param maxWidth 最大幅
        */
        public setMaxWidth(maxWidth: number): void;
        /**
        * 内部サイズを更新する
        */
        public updateSize(): void;
        /**
        * 文字に影をつける
        * @param color カラーの色。省略時は黒
        */
        public addShadow(color?: string): void;
        /**
        * 文字の影を削除する
        */
        public removeShadow(): void;
        /**
        * 表示する文字列を変更する
        * @param text 変更後の文字列
        */
        public setText(text: string): void;
        /**
        * 文字描画に利用するフォントを変更する。
        * 指定できる値はCSS Font形式で、かつline-height指定を除いた値。line-heightについては常にnormalに固定される。
        * @param fontString フォントを現す文字列
        */
        public setFont(fontString: string): void;
        /**
        * 現在の文字描画に利用するフォントを取得する
        */
        public getFont(): string;
        /**
        * フォントサイズを指定する。
        * 現在のバージョンではフォントにboldやitalicが指定されているとバグるので注意
        * @param size 設定するフォントサイズ。単位は常にピクセル
        */
        public setFontSize(size: number): void;
        /**
        * フォントサイズを取得する。単位は常にピクセル
        * 現在のバージョンではフォントにboldやitalicが指定されているとバグるので注意
        */
        public getFontSize(): number;
        /**
        * 文字列の寄せ方を、start, end, left, right, centerいずれかの文字列で指定する
        * @param align 文字列の寄せ方
        */
        public setTextAlign(align: string): void;
        /**
        * 現在の文字列の寄せ方を取得する
        */
        public getTextAlign(): string;
        /**
        * 文字列の基準線をtop, hanging, middle, alphabetic, ideographic, bottomのいずれかの文字列で指定する
        * @param baseline 文字列の基準線
        */
        public setTextBaseline(baseline: string): void;
        /**
        * 現在の文字列の基準線を取得する
        */
        public getTextBaseline(): string;
        /**
        * 文字色を設定する
        * @param color 設定する文字色。CSSカラーで指定
        */
        public setColor(color: string): void;
        /**
        * 現在の文字色を取得する
        */
        public getColor(): string;
        /**
        * 表示文字列を特定オブジェクトの状態に同期させる。
        * sprite.xに同期させる場合は次のようにする。
        * label.synchronize(sprite, "x", true);
        * @param obj 同期させるオブジェクト
        * @param prop 同期させるオブジェクトのプロパティ
        * @param round 同期時にMath.roundをかけるかどうか。省略時はかけない
        */
        public synchronize(obj: any, prop: string, round?: boolean): void;
        /**
        * 描画
        * @param context 対象の描画コンテキスト
        */
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * 一行の情報
    */
    class TextLineInfo {
        /** 行の幅 */
        public width: number;
        /** 行の高さ */
        public height: number;
        /** 縦座標のオフセット値 */
        public offsetY: number;
        /**
        * コンストラクタ
        * @param offsetY 縦座標のオフセット値
        */
        constructor(offsetY: number);
    }
    /**
    * スクリプトを解析するクラス。
    * このクラスはサンプルであり、#pageコマンドによる改ページのみしかサポートしていない。
    */
    class MultilineScriptAnalyzer {
        /** 現在のモード */
        public mode: number;
        /** 対象のMultilineTextクラス */
        public owner: MultilineText;
        /** 対象の描画コンテキスト */
        public context: CanvasRenderingContext2D;
        /** ポジション */
        public pos: jg.CommonOffset;
        /** バッファ */
        public buf: string;
        /**
        * 初期化
        * @param owner 対象のMultilineTextクラス
        * @param context 描画コンテキスト
        * @param pos ポジション
        */
        public init(owner: MultilineText, context: CanvasRenderingContext2D, pos: jg.CommonOffset): void;
        /**
        * 次の文字を判定する
        */
        public next(c: string): number;
    }
    /**
    * 複数行のテキストを扱うクラス
    */
    class MultilineText extends jg.E {
        /** 元スクリプト */
        public script: string;
        /** 裏画面バッファ */
        public buffer: HTMLCanvasElement;
        /** クリッピング用Line */
        public clip: jg.Line;
        /** テキスト転送用Sprite */
        public sprite: jg.Sprite;
        /** デフォルトのスタイル */
        public defaultStyle: any;
        /** デフォルトのフォント */
        public defaultFont: any;
        /** デフォルトの影 */
        public defaultBlur: number;
        /** デフォルトの影色 */
        public defaultShadowColor: any;
        /** デフォルトの影オフセットX */
        public defaultShadowOffsetX: number;
        /** デフォルトの影オフセットY */
        public defaultShadowOffsetY: number;
        /** テキストの影を無効にするかどうか */
        public disableShadow: boolean;
        /** 全行情報 */
        public lines: TextLineInfo[];
        /** 現在アニメーション中のポジション */
        public animePos: jg.CommonOffset;
        /** 現在アニメーション中の行 */
        public animeLine: number;
        /** テキストのアニメーションスピード。デフォルトは400 */
        public animeSpeed: number;
        /** アニメーション完了時に発火されるイベント */
        public animated: jg.Trigger;
        /** スクリプト解析クラス */
        public scriptAnalyzer: MultilineScriptAnalyzer;
        /** バッファの背景 */
        public bufferBg: ImageData;
        /** 通常の行の高さ */
        static LINE_HEIGHT_NORMAL: number;
        /** 特殊なブラウザにおける余白 */
        static BROWSER_BASELINE_MARGIN: number;
        /**
        * コンストラクタ
        * @param size 表示サイズ
        * @param offset 場所
        */
        constructor(size: jg.CommonSize, offset?: jg.CommonOffset);
        /**
        * テキストをセットする
        * @param text 設定する文字列
        * @param offset 読み込み開始位置。省略時は最初から
        */
        public setText(text: string, offset?: number): number;
        /**
        * スクリプトをセットする
        * @param script 設定するスクリプト
        * @param offset 読み込み開始位置。省略時は最初から
        */
        public setScript(script: string, offset?: number): number;
        /**
        * 行の高さを取得する
        * @param c 対象の描画コンテキスト
        */
        public getLineHeight(c: CanvasRenderingContext2D): number;
        /**
        * バッファを生成する
        * @param offset 読み込み開始位置。省略時は最初から
        */
        public createBuffer(offset?: number): number;
        /**
        * バッファの再構築を行う
        */
        public refresh(): void;
        /**
        * テキストのアニメーション表示を開始する
        * @param animeSpeed アニメーションのスピード。省略時は前回の設定から変更しない
        */
        public startAnimation(animeSpeed?: number): void;
        /**
        * Game.updateイベントに対するコールバック
        * @param t 経過時間
        */
        public update(t: number): void;
        /**
        * テキストをすべて非表示にする
        */
        public hideAll(): void;
        /**
        * テキストをすべて表示する
        */
        public showAll(): void;
    }
}
declare module jg {
    /**
    * Tileでの描画に利用するチップセットをあらわすクラス。
    * 通常、ユーザがこのクラスを直接利用することは無い。
    */
    class ChipSet {
        /** 本クラスが管理する画像 */
        public image: any;
        /** チップの折り返し位置。4x5のチップセット画像であれば4。 */
        public sep: number;
        /** このチップセットを親元であるTile */
        public tile: Tile;
        /** チップのオフセット番号。Tileクラス側が利用する */
        public chipOffset: number;
        /**
        * コンストラクタ
        * @param tile 親元Tile
        * @param image 対象の画像
        */
        constructor(tile: Tile, image: any);
        /**
        * このChipSetで管理しているチップ数を取得する
        */
        public count(): number;
        /**
        * 描画する
        * @param c 描画対象コンテキスト
        * @param x 描画X座標
        * @param y 描画Y座標
        * @param chip 描画するチップ番号
        */
        public draw(c: CanvasRenderingContext2D, x: number, y: number, chip: number): void;
        /**
        * このChipSetのマップチップを個別に、Spriteの配列として取得する
        */
        public getChips(): jg.Sprite[];
    }
    /**
    * オートタイル用ChipSet
    */
    class AutoTileChipSet extends ChipSet {
        /**
        * 座標位置のチップを取得する便利メソッド。Tile管理外座標である場合-1を返す
        * @param x 取得対象x座標
        * @param y 取得対象y座標
        */
        public map(x: number, y: number): number;
        /**
        * 描画する
        * @param c 描画対象context
        * @param x 描画X座標
        * @param y 描画Y座標
        * @param chip 描画するチップ番号。現状オートタイルは1画像1チップのみであるため、本パラメータは利用しない
        */
        public draw(c: CanvasRenderingContext2D, x: number, y: number, chip: number): void;
    }
    /**
    * マップを描画するクラス。
    * 本クラスは高速描画のためdrawOptionを無効化しており、回転などを行いたい場合は一度Sprite化してから行う必要がある点に注意
    */
    class Tile extends jg.E {
        /** 一つ一つのチップの横幅 */
        public tileWidth: number;
        /** 一つ一つのチップの縦幅 */
        public tileHeight: number;
        /** 全チップセットを表す配列。これを直接操作しないように。 */
        public chips: ChipSet[];
        /** チップ番号とChipSetを相対させるための便利Map。直接操作しないように。 */
        public chipMap: ChipSet[];
        /** 合計のチップ数。直接操作しないように。 */
        public chipCount: number;
        /** 描画済みマップを保持しておくためのバッファ用canvas */
        public canvas: HTMLCanvasElement;
        /** マップデータ。[x][y]形式で格納 */
        public data: number[][];
        /**
        * このクラスが管理するマップのサイズ。
        * 常にtile.data.length == tile.size.width、tile.data[0].length == tile.size.heightであるべき値。
        * ビルドをES5にする際はプロパティにして自動更新する形にした方がいいかも
        */
        public size: jg.CommonSize;
        /**
        * コンストラクタ
        * @param image 利用するチップセット画像。nullやundefinedを指定することで省略可
        * @param tileWidth 一つ一つのチップの横幅
        * @param tileHeight 一つ一つのチップの縦幅
        */
        constructor(image: any, tileWidth: number, tileHeight: number);
        /**
        * チップセットを追加する
        * @param image 追加するチップセット画像
        * @param opt オプション。{autoTile: true}を指定すると、オートタイルのチップセットが指定可能
        */
        public addChipSet(image: HTMLImageElement, opt?: any): void;
        public _clear(width: number, height: number): void;
        /**
        * マップデータをすべて0で初期化する
        * @param width 横幅（チップ数）
        * @param height 縦幅（チップ数）
        */
        public clear(width?: number, height?: number): void;
        /**
        * マップデータを生成する
        * @param data データの二次元配列。[x][y]型である点に注意
        * @param width マップの横幅（チップ数）。省略時はdata.lengthが利用される
        * @param height マップの縦幅（チップ数）。省略時はdata[0].lengthが利用される
        */
        public generate(data: number[][], width?: number, height?: number): void;
        /**
        * バッファを作り直した上で再描画を行い、更新済みフラグを立てる
        */
        public refresh(): void;
        /**
        * 一マス描画する
        * @param x 描画対象X座標（チップ数）
        * @param y 描画対象Y座標（チップ数）
        * @param clear trueを指定すると描画前にクリアする。半透明チップ描画の場合は必須
        * @param context 描画対象context。省略時はthis.canvasから自動取得。複数チップを描画する場合、呼び出し元で指定してあげた方が速い
        */
        public drawChip(x: number, y: number, clear?: boolean, context?: CanvasRenderingContext2D): void;
        /**
        * 描画する
        * @param context 描画対象context
        */
        public draw(context: CanvasRenderingContext2D): void;
        /**
        * このクラスが管理するすべてのマップチップをSpriteの配列で取得する
        */
        public getChips(): jg.Sprite[];
    }
}
declare module jg {
    /**
    * レイヤー
    */
    class Layer extends jg.E {
        /** レイヤーの描画結果を保持するバッファ */
        public canvas: HTMLCanvasElement;
        /** レイヤーの描画コンテキスト */
        public context: CanvasRenderingContext2D;
        /**
        * コンストラクタ
        * @param scene レイヤーが属するシーン
        */
        constructor(scene: jg.Scene);
        /**
        * このレイヤーがバッファを持つ場合にはtrueを返す
        */
        public hasBuffer(): boolean;
        /**
        * このレイヤーにバッファを作成する
        */
        public createBuffer(): void;
        /**
        * レイヤー内のオブジェクトを更新する
        * @param must trueを指定すると必ずバッファを生成する
        */
        public refresh(must?: boolean): void;
        /**
        * バッファを削除する
        */
        public deleteBuffer(): void;
        /**
        * バッファなどを削除する
        */
        public destroy(): void;
    }
}
declare module jg {
    /**
    * 読み込み中状態を管理するシーン
    */
    class LoadingScene extends jg.Scene {
        /** 対象のリソース */
        public resource: jg.Resource;
        /** 読み込み完了を表すパーセンテージの外枠線 */
        public shape: jg.Shape;
        /** 読み込み完了を表すパーセンテージの内側の塗りつぶし */
        public shapeP: jg.Shape;
        /** リソース全体の読み込み予定数 */
        public requestCount: number;
        /** ローディングシーンの表示が必要な状態が終わったときに発火されるイベント。このイベントが発生した際、既にLoadingSceneクラスは破棄されている。 */
        public finished: jg.Trigger;
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param resource 対象のリソース
        */
        constructor(game: jg.Game, resource: jg.Resource);
        /**
        * 初期化
        */
        public init(): void;
        /**
        * 読み込み完了を表すパーセンテージ表記を進める
        */
        public animate(per: number): void;
        /**
        * リソースクラスが読み込みを完了した際のイベントハンドラ
        */
        public complete(cnt: number): void;
        /**
        * リソースクラスにリクエストが追加された場合のイベントハンドラ
        */
        public added(e: any): void;
    }
}
declare module jg {
    /**
    * 入力イベントの基本クラス
    */
    class InputEvent {
        /** 入力イベント種別 */
        public type: jg.InputEventType;
        /** 入力イベントの動作タイプ */
        public action: jg.InputEventAction;
        /** 元イベントデータ */
        public param: any;
        /**
        * コンストラクタ
        * @param type 入力イベント種別を指定。現状はPointかKeyboardのみ
        * @param action 入力イベントの動作タイプ。現状はDown, Up, Moveのみ
        * @param param 元イベントデータ
        */
        constructor(type: jg.InputEventType, action: jg.InputEventAction, param?: any);
    }
    /**
    * キーボードの入力イベントクラス
    */
    class InputKeyboardEvent extends InputEvent {
        /** 押されたキー。Keytypeで管理されている値のみ設定可能 */
        public key: jg.Keytype;
        /**
        * コンストラクタ
        * @param action 入力タイプ
        * @param key キー
        * @param e 元イベントデータ
        */
        constructor(action: jg.InputEventAction, key: jg.Keytype, e: any);
    }
    /**
    * ポインティングデバイスの入力イベント
    */
    class InputPointEvent extends InputEvent {
        /** ポインティングされた対象から見てのx座標 */
        public x: number;
        /** ポインティングされた対象から見ての y座標 */
        public y: number;
        /** Gameから見てのx, y座標 */
        public point: jg.CommonOffset;
        /** ポインティングされた対象 */
        public entity: jg.E;
        /**
        * コンストラクタ
        * @param action 動作タイプ
        * @param e 元イベントパラメター
        * @param point ゲームから見ての座標
        */
        constructor(action: jg.InputEventAction, e: any, point: jg.CommonOffset);
        /**
        * ポインティングされたEntityをセットする
        * @param entity ポインティングされたEntity
        */
        public set(entity: jg.E): void;
    }
}
declare module jg {
    /**
    * 描画クラス
    */
    class Renderer {
        /** Math.PI/180 */
        public radian: number;
        /** 描画オプションを設定するための関数群 */
        public drawOptionFunctions: Object;
        /** 描画後に適用するフィルタ */
        public filter: jg.ImageFilter.IFilter;
        /**
        * コンストラクタ
        */
        constructor();
        /**
        * マトリックス値を取得する
        * @param width 横幅
        * @param height 縦幅
        * @param scaleX 横方向の倍率
        * @param scaleY 縦方向の倍率
        * @param angle 角度
        */
        public getMatrix(width: number, height: number, scaleX: number, scaleY: number, angle: number): number[];
        /**
        * 親オブジェクトから描画する
        * @param parent 対象の親オブジェクト
        * @param c 対象の描画コンテキスト
        */
        public renderParent(parent: jg.E, c: CanvasRenderingContext2D): void;
        /**
        * Entityを描画する
        * @param entity 描画対象のEntity
        * @param c 対象の描画コンテキスト
        */
        public renderEntity(entity: jg.E, c: CanvasRenderingContext2D): void;
        /**
        * フィルタや描画オプションをかけない描画を行う
        * @param entity 対象のEntity
        * @param c 対象の描画コンテキスト
        */
        public renderPure(entity: jg.E, c: CanvasRenderingContext2D): void;
        /**
        * フィルタをかける。
        * この処理は非常に遅いが、canvas apiはdrawImageにフィルタをかける方法を現状サポートしていないため現状はやむをえない実装。
        * @param entity 対象のEntity
        * @param c 対象の描画コンテキスト
        */
        public filterDraw(entity: jg.E, c: CanvasRenderingContext2D): void;
        /**
        * 描画オプションを利用する
        * @param entity 対象のEntity
        * @param c 対象の描画コンテキスト
        */
        public useDrawOption(entity: jg.E, c: CanvasRenderingContext2D): any;
    }
}
declare module jg {
    /**
    * ゲーム用描画クラス
    */
    class GameRenderer extends jg.Renderer {
        /** 描画用バッファ。描画方式によっては裏画面用と表画面用の2画面 */
        public buffer: HTMLCanvasElement[];
        /** 表画面用描画コンテキスト */
        public fc: CanvasRenderingContext2D;
        /** 裏画面用描画コンテキスト */
        public bc: CanvasRenderingContext2D;
        /** 現在のシーン。game.sceneと常に等価 */
        public scene: jg.Scene;
        /** 描画対象のゲーム */
        public game: jg.Game;
        /** 背景。廃止する可能性がある */
        public bg: ImageData;
        /** DOMコンテナ */
        public container: HTMLElement;
        /** 入力イベント処理用内部DOMコンテナ */
        public handler: HTMLDivElement;
        /** フリップ番号。描画モードがFlipの時以外は不要 */
        public flipNo: number;
        /** 描画モード。デフォルトはRenderTransferMode.Transfer */
        public transferMode: jg.RenderTransferMode;
        /** クリアを無効にする */
        public disableClear: boolean;
        /** 表画面のキャンバスのサイズ。Gameのサイズと異なる場合、拡大縮小されていることになる */
        public frontCanvasSize: jg.CommonSize;
        /** 表画面のキャンバスの位置。中央寄せなどをする場合に必要な値 */
        public frontCanvasOffset: jg.CommonOffset;
        /** ハンドラのページ上の横位置 */
        public _pageX: number;
        /** ハンドラのページ上の縦位置 */
        public _pageY: number;
        /**
        * コンストラクタ
        * @param game 描画対象のゲーム
        * @param container 親元のDOMコンテナ。指定しない場合、jgameというIDの要素を検索し、それも見つからない場合はjgameというIDのおDIV要素を作りdocument.bodyに追加する
        * @param transferMode 描画転送モード
        * @param disableBg trueを指定すると、毎回背景色でクリアする処理を行わない
        */
        constructor(game: jg.Game, container?: HTMLElement, transferMode?: jg.RenderTransferMode, disableBg?: boolean);
        /**
        * 表用キャンバスのサイズを変更する
        * @param size 新しいキャンバスのサイズ
        * @param offset 省略可。新しいキャンバスのオフセット位置
        */
        public changeFrontCanvasSize(size: jg.CommonSize, offset?: jg.CommonOffset): void;
        /**
        * 描画転送モードを変更する
        * @param mode 変更後の描画転送モード
        */
        public changeTransferMode(mode: jg.RenderTransferMode): void;
        /**
        * シーンを変更する。通常、Gameクラス内からのみ呼び出されるべきメソッド。
        * @param scene 変更後のシーン
        */
        public changeScene(scene: jg.Scene): void;
        /**
        * 表画面と裏画面を入れ替える。描画転送モードがRenderTransferMode.Flipの場合にのみ利用
        */
        public flip(): void;
        /**
        * 描画する
        */
        public render(): void;
        /**
        * バッファの作り直しなど、現在の設定値に基づいた再構成処理を行う
        */
        public refresh(): void;
    }
}
declare module jg {
    /**
    * バッファ上に書き込む特殊なRenderer
    */
    class BufferedRenderer extends jg.Renderer {
        /** バッファ */
        public buffer: HTMLCanvasElement;
        /** 描画用context */
        public c: CanvasRenderingContext2D;
        /** このバッファのサイズ */
        public size: jg.CommonSize;
        /**
        * コンストラクタ
        * @param size バッファサイズ
        */
        constructor(size: jg.CommonSize);
        /**
        * バッファを透明でクリアする
        */
        public clear(): void;
        /**
        * バッファの描画内容を基に画像を生成する
        * @param area コピー元バッファ領域。省略時は全画面
        * @param distArea コピー先バッファ領域。省略時はx:0, y:0, width:area.width, height:area.height
        * @param canavsSize 出力イメージサイズ。省略時はx: 0, y:0, width: area.width, height: area.height
        */
        public createImage(area?: jg.CommonArea, distArea?: jg.CommonArea, canvasSize?: jg.CommonSize): HTMLCanvasElement;
        /**
        * バッファの内容を基にSpriteを生成する
        * @param area コピー元バッファ領域。省略時は全画面
        * @param distArea コピー先バッファ領域。省略時はx:0, y:0, width:area.width, height:area.height
        * @param canavsSize Spriteが保持する画像のサイズ。省略時はx: 0, y:0, width: area.width, height: area.height
        */
        public createSprite(area?: jg.CommonArea, distArea?: jg.CommonArea, canvasSize?: jg.CommonSize): jg.Sprite;
        /**
        * フィルタを適用する
        * @param c フィルタ適用対象context
        * @param size フィルタを適用するサイズ
        */
        public applyFilter(c: CanvasRenderingContext2D, size: jg.CommonSize): void;
        /**
        * オブジェクトをこのバッファに描画する
        * @param entity 描画対象オブジェクト
        */
        public renderUnit(entity: jg.E): void;
        /**
        * レイヤーをこのバッファに描画する
        * @param layer 描画対象レイヤー
        */
        public renderLayer(layer: jg.Layer): void;
        /**
        * シーンをこのバッファに描画する
        * @param scene 描画対象シーン
        */
        public renderScene(scene: jg.Scene): void;
        /**
        * バッファの内容を再生成する。この際、描画済み情報は失われる。
        * この処理はPCがスリープ状態から復帰した時などに呼び出される可能性があるため、BufferedRendererに描画済みの情報を長期間参照し続けることは推奨されない。。
        */
        public refresh(): void;
        /**
        * このバッファを別の対象に描画する
        * @param context 描画対象context
        */
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * 曖昧に発火されるタイマー
    */
    class GameTimer {
        /** 前回発火時間 */
        public tick: number;
        /** このタイマーの発火間隔 */
        public wait: number;
        /** イベントハンドラ */
        public trigger: jg.Trigger;
        /**
        * タイマーを生成する
        * @param wait 発火間隔をミリ秒で指定
        */
        constructor(wait: number);
        /**
        * 発火を試みる
        * @param t 経過時間
        */
        public tryFire(t: number): void;
        /**
        * 発火する
        */
        public fire(): void;
    }
}
declare module jg {
    /**
    * メインループなどを管理するゲームエンジン。本クラスを基点にjgame.jsのゲームは実行される。
    * オーバーライドすることも想定しており、https://github.com/tsugehara/jgengine にいくつかサンプルがある。
    */
    class Game {
        /** 終了フラグ。_がついているが直接操作してもいい */
        public _exit: boolean;
        /** 前回の実行時間 */
        public tick: number;
        /** 前回の描画時間 */
        public renderTick: number;
        /** KeytypeとkeyCodeの関連付けを行うマップ。JGUtilへの移行を検討中 */
        public keymap: any;
        /** ドラッグ中情報。マルチタッチサポート後にインターフェース変更の可能性がある */
        public dragParam: jg.InputPointEvent;
        /** 描画オブジェクト */
        public renderer: jg.GameRenderer;
        /** 管理しているシーン */
        public scenes: jg.Scene[];
        /** 現在のシーン */
        public scene: jg.Scene;
        /** 管理しているリソース。リソースは単一インスタンスであるため、Resource.getInstanceと等価であることが保証されている */
        public resource: jg.Resource;
        /** ゲームの横幅 */
        public width: number;
        /** ゲームの縦幅 */
        public height: number;
        /** 表示上の拡大比率 */
        public scale: number;
        /** 読み込み中シーンのコンストラクタ */
        public loadingSceneClass: any;
        /** 読み込み中シーン。読み込み中の場合のみ値が設定される */
        public loadingScene: jg.LoadingScene;
        /** このゲームの内部ID。単一ページに複数のゲームを表示するような場合以外、特に利用する機会は無い */
        public id: number;
        /** 画面描画間隔。指定するとこのFPS以下に画面描画が抑制される */
        public targetFps: number;
        /** FPS表示用のDOM要素。将来的に変更される可能性がある */
        public fps: HTMLElement;
        /** preload処理の完了時に呼び出されるイベント */
        public loaded: jg.Trigger;
        /**
        * ゲーム内時間の更新時に呼び出されるイベント。
        * 基本的なゲーム内更新処理はすべてこのイベントのハンドラで実行するが、精度が不要でかつ定期的に実行するアニメーションのような処理は、addTimerメソッドでの実行でもよい。
        * 引数として経過時間がミリ秒で渡されるため、その経過時間に則った処理を行う必要がある。
        * また、解放漏れに注意。
        */
        public update: jg.Trigger;
        /**
        * ゲーム内タイマー
        */
        public timers: jg.GameTimer[];
        /**
        * 描画時に呼び出されるイベント。利用は想定されていないので、通常時はundefined。利用する際は自前でnewする必要がある。
        * updateとは異なり、経過時間は取得出来ない。
        */
        public render: jg.Trigger;
        /**
        * キーが押された時に呼び出されるイベント。InputKeyboardEventをパラメータとして持つ。
        * 将来的にインターフェース変更の可能性あり。
        */
        public keyDown: jg.Trigger;
        /**
        * キーが離された時に呼び出されるイベント。InputKeyboardEventをパラメータとして持つ。
        * 将来的にインターフェース変更の可能性あり。
        */
        public keyUp: jg.Trigger;
        /**
        * ポインティングデバイスが押された時に呼び出されるイベント。InputPointEventをパラメータとして持つ。
        * 将来的にインターフェース変更の可能性あり。
        */
        public pointDown: jg.Trigger;
        /**
        * ポインティングデバイスが離された時に呼び出されるイベント。InputPointEventをパラメータとして持つ。
        * 将来的にインターフェース変更の可能性あり。
        */
        public pointUp: jg.Trigger;
        /**
        * ポインティングデバイスが移動された時に呼び出されるイベント。ただし移動だけでは発生せず、必ずpointDownが事前に発生している必要がある。InputPointEventをパラメータとして持つ。
        * 将来的にインターフェース変更の可能性あり。
        */
        public pointMove: jg.Trigger;
        /**
        * 発生済みのユーザ入力イベント群。
        * jgame.jsではメインループ内で入力処理を発火させるため、keydownなどのDOMイベントでいったんここにプールしてから、メインループでイベント発火という手順を踏む。
        */
        public eventQueue: jg.InputEvent[];
        /** Enumと各種イベント名のマップ */
        public inputEventMap: any;
        /** pointDown発生済みかどうかのフラグ */
        public isPointDown: boolean;
        /** このゲームの乱数シード */
        public seed: number;
        /** このゲームの乱数エンジン */
        public mt: jg.MT;
        /**
        * 新しいゲームを生成する。
        * 現在引数をwidth, heightを廃止しargsのみにする変更が検討されている。
        * @param width ゲームの横幅
        * @param height ゲームの縦幅
        * @param args RenderTransferModeを指定すると、このゲームのRenderTransferModeの変更が可能。HTMLElementを指定すると、DOMコンテナを指定可能。文字列を指定すると、window[文字列]のコンストラクタをRendererに指定する
        */
        constructor(width: number, height: number, ...args: any[]);
        /**
        * 乱数シードを指定する。
        * 再現性のあるゲーム以外で明示的に呼び出す必要はなく、通常は初期化時に自動的に設定される。
        * @param seed 乱数シード。省略時は自動設定
        */
        public setSeed(seed?: number): void;
        /**
        * 乱数を取得する。再現性のあるゲームを作る場合、Math.randomではなくこちらのrandomを利用する必要がある
        * @param min 最小値
        * @param max 最大値
        */
        public random(min: number, max: number): number;
        /**
        * windowのサイズを取得する
        */
        public getWindowSize(): {
            width: number;
            height: number;
        };
        /**
        * 現在の画面の大きさに合わせて拡大する。
        * @param no_center trueに設定すると中央寄せにしない
        */
        public fitToWindow(no_center?: boolean): void;
        /**
        * 背景色を設定する。
        * このメソッドは廃止が検討されている。
        * @param r 0～255の範囲で赤色値を指定
        * @param g 0～255の範囲で緑色値を指定
        * @param b 0～255の範囲で青色値を指定
        * @param a 0～255の範囲で透明度を指定
        */
        public setBgColor(r: number, g: number, b: number, a: number): void;
        /**
        * ゲーム内のすべてのオブジェクトをリフレッシュする。
        * スタンバイからの復帰時などでcanvasが壊れていても本メソッドでの復旧が可能だが、BufferedRendererなど、破壊されるオブジェクトもある点に注意。
        */
        public refresh(): void;
        /**
        * 現在実行されている環境でタッチイベントが有効化を判定する。
        * copied by enchant.js (enchant.ENV.TOUCH_ENABLED)
        */
        public isTouchEnable(): boolean;
        /**
        * マウスなどのDOMイベントからjgame.jsが利用可能なoffset値を取得する
        */
        public getOffsetByEvent(e: any): jg.CommonOffset;
        /**
        * DOMのmousedownに対するイベントハンドラ
        * @param e DOMのMouseEvent
        */
        public onmousedown(e: MouseEvent): void;
        /**
        * DOMのtouchstartに対するイベントハンドラ。
        * 現状lib.d.tsに型情報が定義されていないようなので、anyになっている。
        * @param e DOMのTouchEvent
        */
        public ontouchstart(e: any): void;
        /**
        * DOMのmousemoveに対するイベントハンドラ
        * @param e DOMのMouseEvent
        */
        public onmousemove(e: MouseEvent): void;
        /**
        * DOMのtouchmoveに対するイベントハンドラ。
        * 現状lib.d.tsに型情報が定義されていないようなので、anyになっている。
        * @param e DOMのTouchEvent
        */
        public ontouchmove(e: any): void;
        /**
        * DOMのmouseupに対するイベントハンドラ
        * @param e DOMのMouseEvent
        */
        public onmouseup(e: MouseEvent): void;
        /**
        * DOMのtouchendに対するイベントハンドラ。
        * 現状lib.d.tsに型情報が定義されていないようなので、anyになっている。
        * @param e DOMのTouchEvent
        */
        public ontouchend(e: any): void;
        /**
        * ポインティングイベントを有効にする。
        * 無効化処理も実行するため、何度も切り替えるアプリケーションの場合pointDown, pointMove, pointUpのイベントハンドラを独自に復旧する必要がある点に注意。
        */
        public enablePointHandler(): void;
        /**
        * ポインティングイベントを無効化する。
        */
        public disablePointHandler(): void;
        /**
        * DOMのkeydownイベントに対するイベントハンドラ。
        * lib.d.tsにおいて型情報が不明なためanyになっている。KeyboardEventExtensionsでいいのだろうか。
        * @param e DOMのキーボードイベントパラメータ。内部的にはkeyCodeしか利用していない
        */
        public onkeydown(e: any): void;
        /**
        * DOMのkeyupイベントに対するイベントハンドラ。
        * lib.d.tsにおいて型情報が不明なためanyになっている。KeyboardEventExtensionsでいいのだろうか。
        * @param e DOMのキーボードイベントパラメータ。内部的にはkeyCodeしか利用していない
        */
        public onkeyup(e: any): void;
        /**
        * キーボードイベントを有効化する。
        * このイベントを有効にしてしまうと、keymapに登録されているキーコードにpreventDefaultが動くため、textareaなどが存在するページで実行する場合は注意が必要。
        * また無効化処理も実行するため、何度も切り替えるアプリケーションの場合keyDown, keyUpのイベントハンドラを独自に復旧する必要がある点に注意。
        */
        public enableKeyboardHandler(): void;
        /**
        * キーボードイベントを無効化する。
        */
        public disableKeyboardHandler(): void;
        /**
        * 指定した時間間隔で実行するタイマーを追加する。
        * このタイマーは大体のタイマーであるため、アニメーションなど正確性の不要な作業のみの利用に限定するべきである。
        * @param wait 実行時間間隔をミリ秒で指定する
        * @param owner タイマーのコールバックに対するthis
        * @param handler コールバック
        */
        public addTimer(wait: number, owner: any, handler: Function): void;
        /**
        * 指定した時間間隔で実行するタイマーのコールバックを削除する。
        * 一つもコールバックが存在しないタイマー自体の削除処理も行っている。
        * @param wait 実行時間間隔をミリ秒で指定する
        * @param owner タイマーのコールバックに対するthis
        * @param handler コールバック
        */
        public removeTimer(wait: number, owner: any, handler: Function): void;
        /**
        * 指定したオーナーのタイマーに対するコールバックをすべて削除する
        * @param owner タイマーのコールバックに対するthis
        */
        public removeTimerAll(owner: any): void;
        /**
        * ゲームを終了する。
        * 実態はメインループの終了のみであり、本処理実行後でも_exitフラグの削除とmainメソッドの再実行によりゲームは再開可能。
        * endとかぶっているため廃止予定。
        */
        public exit(): void;
        /**
        * シーンを変更する
        * @param scene 変更後のシーン
        * @param effect 変更時にかけるエフェクト。省略時はエフェクト無しになる。通常、EffectTypeの値を指定する
        * @param endOldScene trueを指定すると、切り替え前に前のシーンを削除する。
        */
        public changeScene(scene: jg.Scene, effect?: any, endOldScene?: boolean): void;
        /**
        * シーンを終了する
        * @param effect 変更時にかけるエフェクト。省略時はエフェクト無しになる。通常、EffectTypeの値を指定する
        */
        public endScene(effect?: any): void;
        /**
        * 指定した名前のリソースを取得する。サウンドはsメソッドでの取得である点に注意
        * @param name リソース名
        */
        public r(name: string): HTMLImageElement;
        /**
        * 指定した名前のサウンドリソースを取得する。画像などはrメソッドの取得である点に注意
        * @param name サウンドリソース名
        */
        public s(name: string);
        /**
        * 事前の読み込み処理を行う。
        * 配列、オブジェクト、文字列のいずれかが指定可能で、複数回の呼び出しも可能。
        * 配列の場合、リソース名はURLと同じ扱いになる。
        * game.preload(["a.png", "b.png", "c.png"])
        * オブジェクトの場合、リソース名はキーで値がURLとなる。
        * game.preload({a: "a.png", b: "b.png", c: "c.png"})
        * 文字列の場合、第二、第三引数などを配列と同じように処理する。
        * game.preload("a.png", "b.png", "c.png")
        * @param ary 配列、オブジェクト、文字列のいずれかが指定可能。
        */
        public preload(ary: any): void;
        /**
        * 他のライブラリで読み込み中のリソースをjgame.jsに登録する。
        * @param identity リソースの識別名
        */
        public preloadOther(identity: string): void;
        /**
        * 他のライブラリで読み込み中のリソースが読み込み完了となった事をjgame.jsに通知する
        * @param identity リソースの識別名
        */
        public preloadCompleteOther(identity: string): void;
        /**
        * 読み込み中シーンを設定し、現在のシーンを切り替える。
        * 現在既に読み込み中である場合、本メソッドは処理を行わない。
        */
        public setLoadingScene(scene: any): void;
        /**
        * preloadの完了処理として、loadingSceneフィールドの削除、loadedイベントの発火を行う
        */
        public preloadComplete(): void;
        /**
        * ゲームを終了する。
        * 実態はメインループの終了のみであり、本処理実行後でも_exitフラグの削除とmainメソッドの再実行によりゲームは再開可能
        */
        public end(): void;
        /**
        * ポインティングされたEntityを設定する
        * @param param 対象のポインティングイベント
        */
        public setPointingEntity(param: jg.InputPointEvent): void;
        /**
        * 入力イベントを実行する
        */
        public raiseInputEvent(): void;
        /**
        * メインループ
        */
        public main(): void;
        /**
        * フルスクリーン化を行う
        */
        public fullscreen(): boolean;
        /**
        * フルスクリーンを終了する
        */
        public exitFullscreen(): boolean;
    }
}
/**
* 画像フィルタ機能を提供するモジュール
*/
declare module jg.ImageFilter {
    /**
    * フィルタ用インターフェース
    */
    interface IFilter {
        /**
        * フィルタを実行する
        * @param pixels フィルタ対象のピクセルデータ
        */
        filter(pixels: ImageData);
    }
    /**
    * 複数フィルタを重ねがけするためのクラス
    */
    class FilterChain implements IFilter {
        /** 管理中フィルタ */
        public filters: Filter[];
        /**
        * コンストラクタ
        */
        constructor();
        /**
        * 対象indexのフィルタを取得
        * @param index 取得対象index
        */
        public get(index: number): Filter;
        /**
        * フィルタを追加
        * @param filter 追加するフィルタ
        */
        public add(filter: Filter): FilterChain;
        /**
        * 単体のフィルタを設定する。これまでset, addしたフィルタはすべて破棄される
        * @param filter 設定するフィルタ
        */
        public set(filter: Filter): FilterChain;
        /**
        * フィルタを所定の位置に挿入する
        * @param index 挿入する場所のindex
        * @param filter 挿入するフィルタ
        */
        public insert(index: number, filter: Filter): FilterChain;
        /**
        * フィルタを削除する
        * @param filter 削除するフィルタ
        */
        public remove(filter: Filter): void;
        /**
        * 全フィルタをクリアする
        */
        public clear(): FilterChain;
        /**
        * フィルタ数を返す
        */
        public count(): number;
        /**
        * このフィルタチェインに一つでもフィルタが存在するかを返す
        */
        public has(): boolean;
        /**
        * このFilterChainによるフィルタを適用したSpriteを返す
        * @param entity SpriteにするEntity
        */
        public createSprite(entity: jg.E): jg.Sprite;
        /**
        * このFilterChainによるフィルタを適用したImageを返す
        * @param entity SpriteにするEntity
        */
        public createImage(entity: jg.Sprite): HTMLCanvasElement;
        /**
        * フィルタを適用する
        * @param pixels 適用対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * 一般的な機能を持つフィルタ
    */
    class Filter implements IFilter {
        /** オプション */
        public opt: any;
        /** 横幅 */
        public width: number;
        /** 縦幅 */
        public height: number;
        /** 対象のゲーム */
        public game: jg.Game;
        /**
        * 対象のゲームを指定してFilterクラスのインスタンスを生成する
        * @param game 対象のゲーム
        */
        constructor(game: jg.Game);
        /**
        * フィルタを適用する
        * @param pixels 適用対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
        /**
        * オプションを取得する
        * @param name オプション名
        * @param defaultValue オプションが無い場合に返す値を指定する。省略可
        */
        public getOption(name: string, defaultValue?: any): any;
        /**
        * 色の相違を取得
        * @param dif
        * @param dest
        * @param src
        */
        public findColorDifference(dif: number, dest: number, src: number): number;
        /**
        * 色を作成する
        * @param src
        */
        public createColor(src: string): string;
        /**
        * マトリックスに基づいたフィルタを適用する
        * @param pixels 適用対象のピクセルデータ
        * @param matrix
        * @param amount
        */
        public applyMatrix(pixels: ImageData, matrix: number[], amount: number): ImageData;
        /**
        * RGBの境界値をチェックする
        * @param val チェックする値
        */
        public checkRGBBoundary(val: number): number;
    }
    /**
    * ユニバーサルトランジションを実現するフィルタ
    */
    class UniversalTransitionFilter extends Filter {
        /** ルール画像 */
        public ruleImage: ImageData;
        /** マスク */
        public mask: any;
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param image ルール画像
        * @param amount フィルタの影響度。省略時は255
        * @param repeat サイズが合わない場合繰り返すかどうか。省略時はfalse
        */
        constructor(game: jg.Game, image?: any, amount?: number, repeat?: boolean);
        /**
        * ImageData取得
        * @param image 取得対象の画像
        * @param canvas 取得対象のcanvas。省略時は内部的に生成し、drawImageでimageを描画する
        */
        public getImageData(image: any, canvas?: HTMLCanvasElement): ImageData;
        /**
        * ルール画像を作成する
        */
        public createRuleImage(): void;
        /**
        * マスクを作成する
        */
        public createMask();
        /**
        * フィルタを適用する
        * @param pixels 適用対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * 逆方向からのユニバーサルトランジション
    */
    class ReverseUniversalTransitionFilter extends UniversalTransitionFilter {
        /**
        * 画像を作成する
        * @param width 横幅
        * @param height 縦幅
        */
        public createImageData(width: number, height: number): ImageData;
        /**
        * ルール画像を作成する
        */
        public createRuleImage(): void;
    }
    /**
    * グレースケールにするフィルタ
    */
    class GreyscaleFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param opacity 透明度。省略時は1
        */
        constructor(game: jg.Game, opacity?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * セピア色にするフィルタ
    */
    class SepiaFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param opacity 透明度。省略時は1
        */
        constructor(game: jg.Game, opacity?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * 色味をつけるフィルタ
    */
    class TintFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param color 色。省略時は1
        */
        constructor(game: jg.Game, color?: string, opacity?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * エッジを際立たせるフィルタ
    */
    class EdgesFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は1
        */
        constructor(game: jg.Game, amount?: number);
        /**
        * フィルタを適用する
        * @param pixels ピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * エンボスフィルタ
    */
    class EmbossFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は0.5
        */
        constructor(game: jg.Game, amount?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * シャープにするフィルタ
    */
    class SharpenFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力
        */
        constructor(game: jg.Game, amount?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * マトリックスに基づいた操作を行う汎用フィルタ
    */
    class MatrixFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は0.5
        * @param matrix 適用するマトリックス。省略時はすべて0.111
        */
        constructor(game: jg.Game, amount?: number, matrix?: number[]);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * にじませるフィルタ。
    * アルゴリズムはガウシアンフィルタに順ずる。少し重い
    */
    class BlurFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は2
        */
        constructor(game: jg.Game, amount?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * モザイクをかけるフィルタ
    */
    class MosaicFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param size モザイクサイズ。省略時は5
        * @param opacity 透明度。省略時は1
        */
        constructor(game: jg.Game, size?: number, opacity?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * ノイズの種類。Monoでモノクロノイズ、Colorでカラーノイズ
    */
    enum NoiseType {
        Mono,
        Color,
    }
    /**
    * ノイズをつけるフィルタ
    */
    class NoiseFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は30
        * @param type モノクロノイズかカラーノイズか。省略時はモノクロ
        */
        constructor(game: jg.Game, amount?: number, type?: NoiseType);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
    /**
    * ポスタライズフィルタ
    */
    class PosterizeFilter extends Filter {
        /**
        * コンストラクタ
        * @param game 対象のゲーム
        * @param amount 威力。省略時は2
        * @param opacity 透明度。省略時は1
        */
        constructor(game: jg.Game, amount?: number, opacity?: number);
        /**
        * フィルタを適用する
        * @param pixels 対象のピクセルデータ
        */
        public filter(pixels: ImageData): void;
    }
}
declare module jg {
    /**
    * あらゆるAction関連イベントパラメータに格納されているパラメータ
    */
    interface ActionEventArgs {
        /** そのアクションが所属するTimelineクラス */
        timeline: jg.Timeline;
    }
    /**
    * 時間経過時のイベントパラメータ
    */
    interface ActionTickEventArgs extends ActionEventArgs {
        /** 経過時間 */
        elapsed: number;
    }
    /**
    * 基本のアクション。Timelineクラスで利用される
    */
    class Action {
        /** このアクション完了までに要する時間 */
        public time: number;
        /** 現在の経過時間 */
        public frame: number;
        /** アクションごとに呼ばれるイベント。ActionEventArgsをパラメータとして持つ */
        public added_to_timeline: jg.Trigger;
        /** アクションごとに呼ばれるイベント。ActionEventArgsをパラメータとして持つ */
        public removed_from_timeline: jg.Trigger;
        /** アクションごとに呼ばれるイベント。ActionTickEventArgsをパラメータとして持つ */
        public action_tick: jg.Trigger;
        /** アクションごとに呼ばれるイベント。ActionEventArgsをパラメータとして持つ */
        public action_start: jg.Trigger;
        /** アクションごとに呼ばれるイベント。ActionEventArgsをパラメータとして持つ */
        public action_end: jg.Trigger;
        /** 所属するTimeline */
        public timeline: jg.Timeline;
        /** 操作対象のEntity  */
        public entity: jg.E;
        /**
        * コンストラクタ
        * @param param パラメータ一式
        */
        constructor(param?: any);
        /**
        * removed_from_timelineイベントのイベントハンドラ
        */
        public removedFromTimeline(): void;
        /**
        * added_to_timelineイベントのイベントハンドラ
        */
        public addedToTimeline(p: ActionEventArgs): void;
        /**
        * action_tickイベントのイベントハンドラ
        */
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
    /** 描画オプションを変更するための関数群 */
    var TWEEN_DRAW_OPTION_SETTERS: {};
    /**
    * Actionを継承した、オブジェクトの特定のプロパティを、なめらかに変更したい時に用いるためのアクションクラス.
    * アクションを扱いやすく拡張したクラス.
    *
    * コンストラクタに渡す設定オブジェクトに、プロパティの目標値を指定すると、
    * アクションが実行された時に、目標値までなめらかに値を変更するようなアクションを生成する。
    *
    * トゥイーンのイージングも、easing プロパティで指定できる。
    * デフォルトでは jg.Easing.LINEAR が指定されている。
    */
    class Tween extends jg.Action {
        /** 元値 */
        public origin: any;
        /** 目標値 */
        public target: any;
        /** 一つ前の値 */
        public old: any;
        /** Easign関数 */
        public easing: (t: number, b: number, c: number, d: number) => number;
        /** 変更する値 */
        public props: Object;
        /** 特殊な操作用 */
        public otherTarget: any;
        /**
        * コンストラクタ
        * @param 設定したいプロパティ値一式が入ったオブジェクト
        */
        constructor(params: any);
        /**
        * アクション開始時のコールバック
        * @param e 該当のアクションを表すイベント
        */
        public actionStart(e: jg.ActionEventArgs): void;
        /**
        * 時間経過で呼ばれるコールバック
        */
        public tweenActionTick(e: jg.ActionTickEventArgs): void;
    }
}
declare module jg {
    /**
    * アニメーションを管理するためのクラス.
    *
    * 操作するエンティティひとつに対して、必ずひとつのタイムラインが対応する。
    * Timelineクラス を読み込むと、Entity クラスを継承したすべてのクラスの
    * tl プロパティに、タイムラインクラスのインスタンスが生成される。
    *
    * タイムラインクラスは、自身に様々なアクションを追加するメソッドを持っており、
    * これらを使うことで簡潔にアニメーションや様々な操作をすることができる。
    * タイムラインクラスはフレームとタイムのアニメーションができる。
    *
    * 元ソースはenchant.jsに提供されていたtl.enchant.jsです。
    * http://enchantjs.com/ja/
    *
    * @param entity 操作の対象となるEntity
    *
    */
    class Timeline {
        /** 操作対象のEntity */
        public entity: jg.E;
        /** */
        public queue: jg.Action[];
        /** */
        public paused: boolean;
        /** */
        public looped: boolean;
        /** */
        public _activated: boolean;
        /** */
        public _parallel: jg.ParallelAction;
        /** */
        public isFrameBased: boolean;
        /**
        *
        * @param entity
        */
        constructor(entity: jg.E);
        /**
        *
        * @param force
        */
        public _deactivateTimeline(force?: boolean): void;
        /**
        *
        * @param force
        */
        public _activateTimeline(force?: boolean): void;
        /**
        * フレームベースのアニメーションにする
        */
        public setFrameBased(): void;
        /**
        * 時間ベースのアニメーションにする
        */
        public setTimeBased(): void;
        /**
        * キューの先頭にあるアクションを終了し、次のアクションへ移行する。
        * @param remainingTime
        */
        public next(remainingTime?: number): void;
        /**
        * 時間経過処理
        * @param t 経過時間
        */
        public tick(t: number): void;
        /**
        * 新しいアクションを追加する
        * @param action 追加するアクション
        */
        public add(action: jg.Action): Timeline;
        /**
        * アクションを簡単に追加するためのメソッド。実体は add メソッドのラッパ。
        * @param params アクションの設定オブジェクト
        */
        public action(params: any): Timeline;
        /**
        * トゥイーンを簡単に追加するためのメソッド。実体は add メソッドのラッパ。
        * @param  params トゥイーンの設定オブジェクト。
        */
        public tween(params: any): Timeline;
        /**
        * タイムラインのキューをすべて破棄する。終了イベントは発行されない。
        */
        public clear(): Timeline;
        /**
        * タイムラインを早送りする。巻き戻しは出来ない
        * @param frames 早送りするフレーム数（jgame.jsの場合は時間）
        */
        public skip(frames: number): Timeline;
        /**
        * タイムラインの実行を一時停止する
        */
        public pause(): Timeline;
        /**
        * タイムラインの実行を再開する
        */
        public resume(): Timeline;
        /**
        * タイムラインをループさせる。
        */
        public loop(): Timeline;
        /**
        * タイムラインのループを解除する。
        */
        public unloop(): Timeline;
        /**
        * 指定した時間を待ち、何もしないアクションを追加する。
        * @param time 待ち時間
        */
        public delay(time: number): Timeline;
        /**
        * 関数を実行し、即時に次のアクションに移るアクションを追加する。
        * @param func 実行する関数
        */
        public then(func: Function): Timeline;
        /**
        * then メソッドのシノニム。
        * @param func 実行する関数
        */
        public exec(func: Function): void;
        /**
        * フレームを変更する。このメソッドを実行する場合、EntityがFrameSpriteである必要がある
        * @param wait この時間待ってから操作を実行
        * @param frame 切り替え後のフレーム。詳細はFrameSprite.frameを参照。省略すると待ち時間無しで第一引数に指定したフレームに変更する
        */
        public frame(wait: any, frame?: number[]): Timeline;
        /**
        * フレーム番号を変更する
        * @param wait この時間待ってから操作を実行
        * @param fno 切り替え後のフレーム番号。詳細はFrameSprite.fnoを参照。省略すると待ち時間無しで第一引数に指定したフレーム番号に変更する
        */
        public fno(wait: number, fno?: number): Timeline;
        /**
        * 実行したい関数を、経過時間をキーとした連想配列(オブジェクト)で複数指定し追加する。
        * sprite.tl().cue({
        *    10: function(){ 10msec後に実行される関数 },
        *    20: function(){ 20msec後に実行される関数 },
        *    30: function(){ 30msec後に実行される関数 }
        * });
        * @param cue 経過時間をキーとした連想配列
        */
        public cue(cue: any): void;
        /**
        * 指定した関数を指定した時間繰り返し実行するアクションを追加する。
        * @param func 実行する関数
        * @param time 時間
        */
        public repeat(func: Function, time: number): Timeline;
        /**
        * 複数のアクションを並列で実行したいときに指定する。
        * and で結ばれたすべてのアクションが終了するまで次のアクションには移行しない
        * 300msecでフェードインしながら360度回転する例
        * sprite.tl().fadeIn(300).and.rotateBy(360, 300);
        */
        public and(): Timeline;
        /**
        * true値 が返るまで、関数を毎フレーム実行するアクションを追加する。
        * @param func 実行する関数
        */
        public waitUntil(func: Function): Timeline;
        /**
        * 指定座標に移動する
        * @param x X座標
        * @param y Y座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public moveTo(x: number, y: number, time: number, easing?: Function): Timeline;
        /**
        * 指定したX座標に移動する
        * @param x X座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public moveX(x: number, time: number, easing?: Function): Timeline;
        /**
        * 指定したY座標に移動する
        * @param y Y座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public moveY(y: number, time: number, easing?: Function): Timeline;
        /**
        * 現在位置から指定した座標分移動する
        * @param x X座標の変化量
        * @param y Y座標の変化量
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public moveBy(x: number, y: number, time: number, easing?: Function): Timeline;
        /**
        * 指定座標にスクロールする
        * @param x X座標
        * @param y Y座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public scrollTo(x: number, y: number, time: number, easing?: Function): Timeline;
        /**
        * 指定したX座標にスクロールする
        * @param x X座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public scrollX(x: number, time: number, easing?: Function): Timeline;
        /**
        * 指定したY座標にスクロールする
        * @param y Y座標
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public scrollY(y: number, time: number, easing?: Function): Timeline;
        /**
        * 現在位置から指定した座標分スクロールする
        * @param x X座標の変化量
        * @param y Y座標の変化量
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public scrollBy(x: number, y: number, time: number, easing?: Function): Timeline;
        /**
        * Entityの不透明度をなめらかに変えるアクションを追加する。
        * @param opacity 目標の不透明度
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public fadeTo(opacity: number, time: number, easing?: Function): Timeline;
        /**
        * Entityをなめらかに表示するアクションを追加する。
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public fadeIn(time: number, easing?: Function): Timeline;
        /**
        * Entityをなめらかに非表示にするアクションを追加する。
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public fadeOut(time: number, easing?: Function): Timeline;
        /**
        * Entityを即座に非表示にする
        */
        public hide(): Timeline;
        /**
        * Entityを即座に表示する
        */
        public show(): Timeline;
        /**
        * 指定した大きさにサイズを変更する。scaleToが中心から拡大されるのに対し、resizeToは右方向へ拡大される
        * @param size widthまたはwidthとheight。widthのみを指定する場合、第二引数にheightを指定する
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        * @param easing2 heightを指定した場合ここがeasing関数になる
        */
        public resizeTo(size: number, time: number, easing?: any, easing2?: any): Timeline;
        /**
        * 現在の大きさから指定した量サイズを変化させる。scaleByが中心から拡大されるのに対し、resizeByは右方向へ拡大される
        * @param size widthまたはwidthとheightの変化量。widthのみを指定する場合、第二引数にheightを指定する
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        * @param easing2 heightを指定した場合ここがeasing関数になる
        */
        public resizeBy(size: number, time: number, easing?: any, easing2?: any): Timeline;
        /**
        * Entity をなめらかに拡大・縮小するアクションを追加する。
        * @param scale
        * @param time
        * @param easing Easing関数。省略した場合はLINEAR
        * @param easing2
        */
        public scaleTo(scale: number, time: number, easing?: any, easing2?: any): Timeline;
        /**
        * Entity をなめらかに拡大・縮小するアクションを追加する。
        * @param scale
        * @param time
        * @param easing Easing関数。省略した場合はLINEAR
        * @param easing2
        */
        public scaleBy(scale: number, time: number, easing?: any, easing2?: any): Timeline;
        /**
        * Entity をなめらかに回転させるアクションを追加する。
        * @param deg 目標の回転角度 (弧度法: 1回転を 360 とする)
        * @param time フレーム数
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public rotateTo(deg: number, time: number, easing?: Function): Timeline;
        /**
        * Entity をなめらかに回転させるアクションを追加する。
        * @param deg 目標の回転角度 (弧度法: 1回転を 360 とする)
        * @param time フレーム数
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public rotateBy(deg: number, time: number, easing?: Function): Timeline;
        /**
        * フィルタをかける
        * @param targetClass ImageFilter.TintFilterなど、対象のフィルタクラスを指定する
        * @param props フィルタクラスに指定するプロパティ値。{propName: {start: val, end: val}}の形式で指定
        * @param time 必要時間
        * @param easing Easing関数。省略した場合はLINEAR
        */
        public filter(targetClass: Function, props: any, time: number, easing?: Function): Timeline;
        /**
        * Entity をシーンから削除する。
        */
        public removeFromScene(): Timeline;
    }
}
declare module jg {
    /**
    * ブラウザ情報
    */
    interface BrowserInfo {
        /** Chromeであればtrue */
        chrome?: boolean;
        /** Webkit系であればtrue */
        webkit?: boolean;
        /** Safariであればtrue */
        safari?: boolean;
        /** Operaであればtrue */
        opera?: boolean;
        /** Internet Explorerであればtrue */
        msie?: boolean;
        /** FireFoxであればtrue */
        mozilla?: boolean;
        /** ブラウザのバージョン */
        version?: string;
    }
    /**
    * jgame.jsのユーティリティ関数群。
    * Note: このクラスに似たようなコードが多いのは関数コールのオーバーヘッドを避けるためで、意図的に最適化をしていない結果
    */
    class JGUtil {
        /** ブラウザ情報 */
        static browser: BrowserInfo;
        /**
        * 座標の中心地を返す。
        * 引数がCommonAreaである場合、サイズも計算して返し、CommonOffsetである場合は何も計算せずに返す
        * @param p 判定する座標または領域
        */
        static getCenterPoint(p: jg.CommonOffset): jg.CommonOffset;
        /**
        * 座標の中止点から見ての余白を返す。
        * 引数がCommonAreaである場合、サイズを計算して返し、CommonOffsetである場合はx:0, y:0を返す
        * @param p 判定する座標または領域
        */
        static getMargin(p: jg.CommonOffset): jg.CommonOffset;
        /**
        * 二つの座標または領域が衝突しているかを判定する
        * @param p1 判定する座標または領域
        * @param p2 判定する座標または領域
        */
        static intersect(p1: jg.CommonOffset, p2: jg.CommonOffset): boolean;
        /**
        * 二つの座標または領域の距離を返す。
        * 領域である場合、中心点からの距離となる点に注意
        * @param p1 判定する座標または領域
        * @param p2 判定する座標または領域
        */
        static getDistance(p1: jg.CommonOffset, p2: jg.CommonOffset): jg.CommonOffset;
        /**
        * 二つのオブジェクトが追尾しあう場合の速度に応じた移動量を返す
        * @param p1 追尾する座標または領域
        * @param p2 追尾する座標または領域
        * @param power 移動力。省略時は1（瞬時に移動を完了するだけの量）
        * @param maxMove 移動最大値。省略時は判定しない
        */
        static getMovePoint(p1: jg.CommonOffset, p2: jg.CommonOffset, power?: number, maxMove?: number): jg.CommonOffset;
        /**
        * 二つの座標または領域を比較し、p1から見てp2がどの方角にあるかをAngle型で返す
        * @param p1 判定する座標または領域
        * @param p2 判定する座標または領域
        * @param minDistance 最小距離。指定するとこの距離以上に距離がある場合、nullを返す
        */
        static getDirectionAngle(p1: jg.CommonOffset, p2: jg.CommonOffset, minDistance?: number): jg.Angle;
        /**
        * 二つの座標または領域を比較し、p1から見てp2がどの方角にあるかをKeytype型で返す
        * @param p1 判定する座標または領域
        * @param p2 判定する座標または領域
        * @param minDistance 最小距離。指定するとこの距離以上に距離がある場合、nullを返す
        */
        static getDirectionKeytype(p1: jg.CommonOffset, p2: jg.CommonOffset, minDistance?: number): jg.Keytype;
        /**
        * p1にp2を横方向で追尾させる
        * @param p1 追尾する座標または領域
        * @param p2 追尾される座標または領域
        * @param speed 移動速度
        * @param t 経過時間
        */
        static homingX(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        /**
        * p1にp2を縦方向で追尾させる
        * @param p1 追尾する座標または領域
        * @param p2 追尾される座標または領域
        * @param speed 移動速度
        * @param t 経過時間
        */
        static homingY(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        /**
        * p1にp2を横方向で追尾させる
        * @param p1 追尾する座標または領域
        * @param p2 追尾される座標または領域
        * @param speed 移動速度
        * @param t 経過時間
        */
        static homing(p1: jg.CommonOffset, p2: jg.CommonOffset, speed: number, t: number): boolean;
        /**
        * 表示順序をY座標順にするためのメソッドサンプル	。
        * 下記のようにLayerなどに指定すると、描画順を変更できる。
        * game.scene.root.orderDraw = JGUtil.orderDrawY;
        */
        static orderDrawY(): void;
        /**
        * 線形グラデーションを作成する。ここで作成したグラデーションは、Shapeの色などに用いることが出来る。
        * @param rect グラデーションの範囲を指定。Rectangleクラス、またはjsの場合は4つの引数に分けてもよい。引数を4つにけると、colorsが第五引数、offsetsが第六引数となる
        * @param colors グラデーション色。CSSカラーで指定する
        * @param offsets グラデーションのオフセット値を0～1の範囲で指定。colorsと同じ個数指定する。省略した場合、等分に割られた値が自動的に割り当てられる
        */
        static createLinearGradient(rect: any, colors: string[], offsets?: number[]): CanvasGradient;
        /**
        * 円形グラデーションを作成する。ここで作成したグラデーションは、Shapeの色などに用いることが出来る。
        * @param rect グラデーションの範囲を指定。Rectangleクラス、またはjsの場合は4つの引数に分けてもよい。
        * @param radius1 開始円の半径
        * @param radius2 終了円の半径
        * @param colors グラデーション色。CSSカラーで指定する
        * @param offsets グラデーションのオフセット値を0～1の範囲で指定。colorsと同じ個数指定する。省略した場合、等分に割られた値が自動的に割り当てられる
        */
        static createRadialGradient(rect: any, radius1: number, radius2: number, colors: string[], offsets?: number[]): CanvasGradient;
        /**
        * パターン画像を作成する。ここで作成したパターン画像は、Shapeの色などに用いることが出来る
        * @param image パターン画像のソースイメージ
        * @param repeat 繰り返し方法を、repeat, repeat-x, repeat-y, no-repeatいずれかの文字列で指定。省略時はrepeatになる
        */
        static createPattern(image: any, repeat?: string): CanvasPattern;
        /**
        * style属性を使って拡縮しているかどうか
        */
        static isStyleScale: boolean;
        /**
        * 変形方法を返し、JGUtil.isStyleScaleに値が無い場合は値をセットする
        */
        static isTransformMode(): boolean;
        /**
        * キャンバスを引き伸ばす。通常、ゲームのサイズ変更で利用される
        * @param canvas 対象のキャンバス
        * @param size 引き伸ばした後のサイズ
        */
        static scaleCanvas(canvas: HTMLCanvasElement, size: jg.CommonSize): void;
        /**
        * ブラウザ情報を取得する。
        * このメソッドは一度取得した後はJGUtil.browserに情報を格納し、以後はJGUtil.browserを返す。
        */
        static getBrowser(): BrowserInfo;
        /**
        * 画像描画時のアンチエイリアス効果を変更する。
        * 通常ドット絵を拡大するとアンチエイリアスによって滲むが、滲ませずにドットを強調して拡大する場合などに利用する。
        * 変更後、ゲームはrefreshによって再構築される。
        * このメソッドはページに存在するすべてのゲームに影響を及ぼす。将来的には指定されたゲームのみに影響が及ぶよう改修予定
        * @param game 対象のゲーム
        * @param crispEdges trueにすると転送時にアンチエイリアスをオフにする
        */
        static setCrispEdges(game: jg.Game, crispEdges: boolean): void;
        /**
        * 必ず引数selfをthisとして受け取るコールバック関数を生成する。
        * このメソッドで生成したコールバックでDOMのaddEventListenerを実行すると、removeEventListenerがしにくくなる点に注意。
        * removeEventListenerをする可能性がある場合、createIdProxyの利用を検討した方がよい。
        * @param func コールバック関数
        * @param self thisとなるオブジェクト
        */
        static proxy(func: Function, self: any): () => void;
        /**
        * createIdProxyで生成されたID付きproxyデータ
        */
        private static idData;
        /**
        * ID付きのプロキシデータを生成する。
        * @param id 一意のID。通常、game.idを指定する
        * @param func コールバック関数
        * @param self thisとなるオブジェクト
        */
        static createIdProxy(id: number, func: Function, self: any): () => void;
        /**
        * 指定のID付きプロキシデータを取得する
        * @param id 一意のID。通常、game.idを指定する
        * @param func コールバック関数
        * @param self thisとなるオブジェクト
        */
        static getIdProxy(id: number, func: Function, self: any): () => void;
        /**
        * ID付きプロキシデータを削除する
        * @param id 一意のID。通常、game.idを指定する
        * @param func コールバック関数
        * @param self thisとなるオブジェクト
        */
        static deleteIdProxy(id: number, func: Function, self: any): void;
        /**
        * 一意のIDを生成する
        */
        static generateId(): number;
    }
}
declare module jg {
    /**
    * 二次ベジェ曲線の座標
    */
    interface QuadraticPoint extends jg.CommonOffset {
        /** 制御点のX座標 */
        cp1x: number;
        /** 制御点のY座標 */
        cp1y: number;
    }
    /**
    * 三次ベジェ曲線の座標
    */
    interface BezierPoint extends QuadraticPoint {
        /** 二つ目の制御点のX座標 */
        cp2x: number;
        /** 二つ目の制御点のY座標 */
        cp2y: number;
    }
    /**
    * 円弧の座標
    */
    interface ArcPoint extends jg.CommonOffset {
        /** 終点X座標 */
        x2: number;
        /** 終点Y座標 */
        y2: number;
        /** 半径 */
        radius: number;
    }
    /**
    * 線を描画するクラス。
    * 一般的な直線から、複雑な図形描画も出来る。
    */
    class Line extends jg.E {
        /** 各種線 */
        public p: jg.CommonOffset[];
        /** 塗りつぶすかどうか */
        public fill: boolean;
        /** 直線を描くかどうか */
        public stroke: boolean;
        /** パスを閉じるかどうか */
        public closePath: boolean;
        /** 描画をせず、クリッピングとして使うかどうか */
        public clip: boolean;
        /**
        * コンストラクタ
        * @param pos 基準点
        * @param line 直線を引く場合、最初の直線座標を入れるこ
        * @param color 線の色
        * @param width 線の幅
        */
        constructor(pos: jg.CommonOffset, line?: jg.CommonOffset, color?: string, width?: number);
        /**
        * クリッピングモードにする、または解除する
        * クリッピングモードにした場合、このクラスは直接描画されず、このクラスの後に描画される結果に対してクリッピング処理を行う。
        * @param value trueでクリッピングモード、falseで通常
        */
        public setClip(value: boolean): void;
        /**
        * このオブジェクトのサイズを再計算する。
        * 現状あまりうまく動いていない模様。
        */
        public updateSize(): void;
        /**
        * 線の色を指定する
        * @param color 線の色。CSSカラー形式の文字列や、グラデーションやパターンなど
        */
        public setColor(color: any): Line;
        /**
        * 線の色を取得する
        */
        public getColor();
        /**
        * 塗りつぶし色を指定する
        */
        public setFillColor(color: any): Line;
        /**
        * 塗りつぶし色を取得する
        * @param color 線の色。CSSカラー形式の文字列や、グラデーションやパターンなど
        */
        public getFillColor();
        /**
        * 線の幅を指定する
        * @param width 線の幅
        */
        public setLineWidth(width: number): Line;
        /**
        * 線の幅を取得する
        */
        public getLineWidth();
        /**
        * 線の末端のスタイルをbutt, round, squareいずれかの文字列で指定する
        * @param lineCap 線の末端のスタイル
        */
        public setLineCap(lineCap: string): Line;
        /**
        * 線の末端のスタイルを取得する
        */
        public getLineCap();
        /**
        * 線の結合方式をbevel, round, miterいずれかの文字列で指定する
        * @param lineJoin 線の結合形式
        */
        public setLineJoin(lineJoin: string): Line;
        /**
        * 線の結合形式を取得する
        */
        public getLineJoin();
        /**
        * マイター限界比率を指定する
        * @param miterLimit マイター限界比率
        */
        public setMiterLimit(miterLimit: number): Line;
        /**
        * マイター限界比率を取得する
        */
        public getMiterLimit();
        /**
        * 塗りつぶしに関して必要なパラメータを一括で指定する
        * @param fill 塗りつぶしを行うかどうか
        * @param color 塗りつぶし色
        * @param closePath パスを閉じるかどうか。省略した場合変更しない
        * @param stroke 線を描画するかどうか。fillとstrokeがいずれもtrueである場合、線描画と塗りつぶしの両方が行われる。省略した場合変更しない
        */
        public setFill(fill: boolean, color: any, closePath?: boolean, stroke?: boolean): Line;
        /**
        * 線を追加する
        * @param line 数値またはCommonOffsetで指定。数値の場合はX座標
        * @param y 数値でY座標を指定。省略する場合、lineはCommonOffsetである必要がある
        */
        public addLine(line: any, y?: number): Line;
        /**
        * 二次ベジェ曲線を追加
        * @param cp CommonOffsetで制御点を指定
        * @param p CommonOffsetで終点を指定
        */
        public addQuadraticLine(cp: any, p?: any): Line;
        /**
        * 三次ベジェ曲線を追加
        * @param cp1 CommonOffsetで制御点1を指定
        * @param cp2 CommonOffsetで制御点2を指定
        * @param p CommonOffsetで終点を指定
        */
        public addBezierLine(cp1: any, cp2?: any, p?: any): Line;
        /**
        * 曲線を追加
        * @param p CommonOffsetで地点1の座標を指定
        * @param p2 CommonOffsetで地点2の座標を指定
        * @param radius 半径
        */
        public addArc(p: any, p2: any, radius: any): void;
        /**
        * 線を追加する。
        * 見直し予定。
        */
        public add();
        /**
        * 描画
        * @param context 対象の描画コンテキスト
        */
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * エフェクトを生成するクラス
    */
    class Effect {
        /** エフェクト時間 */
        static time: number;
        /** エフェクトの色 */
        static color: string;
        /**
        * シーンに対するエフェクトを生成し、実行する
        * @param game 対象のゲーム
        * @param scene1 遷移元シーン
        * @param scene2 遷移先シーン
        * @param type シーン種別。EffectTypeの数値か、EffectSceneを継承したクラスのインスタンスを指定する
        * @param collback
        * @param endOldScene trueを指定すると最初に遷移元シーンを終了させる
        */
        static sceneEffect(game: jg.Game, scene1: jg.Scene, scene2: jg.Scene, type: any, callback: Function, endOldScene?: boolean): void;
        /** エフェクトを行うメソッド名 */
        public method: string;
        /** エフェクトメソッドに渡す引数 */
        public arguments: any[];
        /**
        * コンストラクタ
        * @param method エフェクトメソッド名
        * @param args エフェクトメソッドに引き渡す引数
        */
        constructor(method: string, ...args: any[]);
        /**
        * エフェクトを実行する
        * @param scene エフェクトを実行するためのEffectScene
        */
        public callEffect(scene: EffectScene): void;
    }
    /**
    * シーンに対するEffectを実行するクラス
    */
    class EffectScene extends jg.Scene {
        /** 遷移元シーンのキャプチャ */
        public sp1: jg.Sprite;
        /** 遷移先シーンのキャプチャ */
        public sp2: jg.Sprite;
        /** エフェクト完了後に呼び出されるイベント */
        public effected: jg.Trigger;
        /**
        * コンストラクタ
        * @param game エフェクト対象ゲーム
        * @param scene1 遷移元シーン
        * @param scene2 遷移先シーン
        */
        constructor(game: jg.Game, scene1: jg.Scene, scene2: jg.Scene);
        /**
        * 現在のシーンの状態をキャプチャする
        * @param scene キャプチャ対象シーン
        */
        public captureScene(scene: jg.Scene): jg.Sprite;
        /**
        * フェードエフェクトをかける
        * @param color フェード時の色。指定すると色へフェードアウト->色からフェードインの2段階フェードエフェクトになり、省略するとフェードアウトとフェードインが同時に行われる1段階フェードエフェクトとなる
        */
        public fade(color?: any): void;
        /**
        * 色付きフェードエフェクトをかける
        * @param color フェード色
        */
        public _fadeColor(color: any): void;
        /**
        * モザイクエフェクトを行う
        */
        public mosaic(): void;
        /**
        * Blur（滲ませる）エフェクトを行う。非常に重いので注意
        */
        public blur(): void;
        /**
        * 指定方向にスライドするエフェクトを行う
        * @param angle スライド方向
        */
        public slide(angle: jg.Angle): void;
        /**
        * 指定方向にワイプするエフェクトを行う
        * @param angle ワイプする方向
        */
        public wipe(angle: jg.Angle): void;
        /**
        * 指定方向へのワイプとフェードを組み合わせたエフェクトを行う
        * @param angle ワイプする方向
        */
        public wipeFade(angle: jg.Angle): void;
        /**
        * boxOut
        * @param rotate 四角の回転
        * @param color
        */
        public boxOut(rotate?: number, color?: any): void;
        /**
        * boxIn
        * @param rotate 四角の回転
        * @param color
        */
        public boxIn(rotate?: number, color?: any): void;
        /**
        * arcOut
        * @param color
        */
        public arcOut(color?: any): void;
        /**
        * arcIn
        * @param color
        */
        public arcIn(color?: any): void;
        /**
        * ユニバーサルエフェクトを行う
        * @param image エフェクトのための画像
        * @param repeat サイズが合わない場合、trueを指定すると繰り返し、falseを指定すると拡大する
        */
        public universal(image: any, repeat?: boolean): void;
        /**
        * 遷移元シーンを画像通りのユニバーサルエフェクト、遷移先シーンを画像を反転させたユニバーサルエフェクトとして同時に実行する
        * @param image エフェクトのための画像
        * @param repeat サイズが合わない場合、trueを指定すると繰り返し、falseを指定すると拡大する
        */
        public universalTwin(image: any, repeat?: boolean): void;
        /**
        * 遷移元シーンをユニバーサルエフェクトでフェードアウトさせ、その後遷移先シーンをユニバーサルエフェクトでフェードインさせる
        * @param image エフェクトのための画像
        * @param repeat サイズが合わない場合、trueを指定すると繰り返し、falseを指定すると拡大する
        * @param color フェードアウト時の色
        */
        public universalDelay(image: any, repeat?: boolean, color?: any): void;
        /**
        * 対象からフィルタを取得する。対象がフィルタを持たない場合、空のImageFilter.FilterChainを返す
        * @param target フィルタ指定元オブジェクト
        */
        public getFilter(target: any);
        /**
        * シーンのスワップショットの位置を入れ替える
        */
        public swapScene(): void;
    }
}
declare module jg {
    /**
    * 継承前提で作られている基本のウィンドウクラス。
    * jgame.jsはUIライブラリではなくシンプルにエンジンのみの提供を目指しているため、本クラスを継承したUIクラスはMessageeWindowクラス以外用意されていないｋ。
    */
    class UIWindow extends jg.E {
        /** 余白のサイズ */
        public padding: jg.IRectangle;
        /** 背景。変更する場合はsetBgを利用するべき */
        public bg: jg.E;
        /**
        * コンストラクタ
        * @param width 横幅
        * @param height 縦幅
        * @param bgImage 背景画像。省略時はdefaultSkinメソッドによるUIWindowが生成される
        * @param padding 余白
        */
        constructor(width: number, height: number, bgImage?: any, padding?: jg.IRectangle);
        /**
        * 背景要素を返す。
        * って実態はthis.entities[0]を返しているけどいいのかこれ？
        */
        public getBg(): jg.E;
        /**
        * 背景要素を指定する。背景は常に最背面に配置される点に注意。
        * @param bg 指定する背景。通常、createBgImageで生成した画像を指定する
        */
        public setBg(bg: jg.E): void;
        /**
        * 描画要素を基に背景画像を生成する
        * @param e 背景の基となる描画要素。余白に合わせた引き伸ばし処理が行われる
        * @param srcPadding 余白。省略時はthis.paddingが用いられる
        * @param buf 生成に利用するバッファ。省略時は自動生成。フクスウUIを生成する場合には、指定すると若干高速になる
        */
        public createBgImage(e: jg.E, srcPadding?: jg.IRectangle, buf?: jg.BufferedRenderer): jg.Sprite;
        /**
        * 簡素な見た目のデフォルトのスキンを生成する。
        */
        public defaultSkin(): void;
    }
}
declare module jg {
    /**
    * メッセージウィンドウを表示するクラス。
    * UIWindowクラスの継承サンプル、並びにMultilineTextクラスの使用サンプルを兼ねている。
    */
    class MessageWindow extends jg.UIWindow {
        /** 次カーソルの表示実態。本フィールドを直接編集しても次カーソルは変わらないため、次カーソルの表示を変更する場合setNextCursorメソッドを利用する */
        public _nextCursor: jg.Sprite;
        /** 次カーソルの元画像。これに対してcreateSpriteをしてから次カーソルを描画する。変更する場合setNextCursorメソッドを利用するのを推奨 */
        public nextCursor: jg.E;
        /** 現在までのテキスト表示位置 */
        public scriptOffset: number;
        /** 表示するテキスト */
        public script: string;
        /** テキスト表示速度（通常） */
        public normalSpeed: number;
        /** テキスト表示速度（高速） */
        public fastSpeed: number;
        /** 表示が完了した場合に発火されるイベント。パラメータがtrueであればまだ未読のスクリプトが次ページ以降に残っている事を示している */
        public readed: jg.Trigger;
        /** ページ表示が完了したことを示すフラグ */
        public isReaded: boolean;
        /** ページ送りで利用されるクリッピング領域 */
        public textClip: jg.Shape;
        /** 次ページがあることを示すカーソルが出ているかどうか */
        public hasNextCursor: boolean;
        /** テキスト表示用MultilineText */
        public textArea: jg.MultilineText;
        /**
        * コンストラクタ
        * @param width 横幅
        * @param height 縦幅
        * @param bgImage 背景画像
        * @param padding 上下左右の余白幅
        */
        constructor(width: number, height: number, bgImage?: any, padding?: jg.IRectangle);
        /**
        * MultilineTextを設定する。
        * 通常、内部的に自動設定されるため、本メソッドを外部から呼び出す必要性は無い
        */
        public setTextArea(textArea: jg.MultilineText): void;
        /**
        * 次カーソルを取得
        */
        public getNextCursor(): jg.E;
        /**
        * 次カーソルを設定する
        * @param cursor 設定する次カーソル
        */
        public setNextCursor(cursor: jg.E): void;
        /**
        * テキストを設定する
        * @param text テキスト
        * @param offset テキストの処理開始オフセット位置
        */
        public setText(text: string, offset?: number): number;
        /**
        * スクリプトを設定する
        * @param script スクリプト
        * @param offset スクリプトの処理開始オフセット位置
        */
        public setScript(script: string, offset?: number): number;
        /**
        * 次カーソルを表示する。既に表示されている場合処理を行わない
        */
        public showNextCursor(): void;
        /**
        * 次カーソルを削除する。表示されていない場合処理を行わない
        */
        public deleteNextCursor(): void;
        /**
        * 非表示にする
        * @param fade trueにするとフェードアウトアニメーション後非表示にする
        */
        public hide(fade?: boolean): void;
        /**
        * 表示する
        * @param fade trueにするとファー度インアニメーション後表示する
        */
        public show(fade?: boolean): void;
        /**
        * テキストの表示を開始する
        */
        public showText(): void;
        /**
        * テキストの表示速度を高速にする
        */
        public fastMode(): void;
        /**
        * テキストの表示速度を通常速にする
        */
        public normalMode(): void;
        /**
        * テキストをすべて表示する
        */
        public showAll(): void;
        /**
        * 次のテキストを表示する
        */
        public next(): boolean;
        /**
        * 古いテキストをワイプアニメーションで除外する
        */
        public oldWipeOut(time?: number): void;
        /**
        * 古いテキストをフェードアウトアニメーションで除外する
        */
        public oldFadeOut(time?: number): void;
        /**
        * テキスト表示完了時のイベントハンドラ
        */
        public onAnimated(): void;
    }
}
declare module jg {
    /**
    * ピクセルデータを直接編集するクラス。
    * 現行バージョンでは少し扱いに癖がある
    */
    class Pixel extends jg.E {
        /** 生ピクセルデータ */
        public imageData: ImageData;
        /**
        * コンストラクタ
        * @param width 横幅
        * @param height 縦幅
        * @param srcImage 元画像
        * @param scale srcImageをwidth, heightの指定に基づいて拡大縮小した上でピクセルデータを生成するかどうか
        */
        constructor(width: number, height: number, srcImage?: any, scale?: boolean);
        /**
        * 指定した色で全ピクセルをクリアする
        * @param r 赤。省略時は0
        * @param g 緑。省略時は0
        * @param b 青。省略時は0
        * @param a 透明度。省略時は0
        */
        public clear(r?: number, g?: number, b?: number, a?: number): void;
        /**
        * ピクセルデータをコンテキストに転送する
        * @param context 対象の描画コンテキスト
        */
        public draw(context: CanvasRenderingContext2D): void;
    }
}
declare module jg {
    /**
    * window名前空間にjg名前空間の要素を展開する。
    * 一般的なjavascriptであれば、本関数実行後、jg.GameはGameとしてアクセスできるようになる。
    */
    function globalize(): void;
}
declare module jg {
    /**
    * Mersenne Twisterアルゴリズムによる乱数生成器。
    * このクラスがjgame.jsに組み込まれているのは、マルチプラットフォームでの乱数共有化が目的としてあり、本ソース自体もクロスプラットフォーム用Mersenne Twisterを移植したもの。
    * 移植元プロジェクト: https://github.com/tsugehara/mt-cross
    * 少数の精度の違いがありえるため、nextIntによる整数乱数を主に使うことが推奨されている。
    */
    class MT {
        /** 乱数シード群 */
        public _mt: number[];
        /** シードに対するインデックス */
        public _index: number;
        /**
        * コンストラクタ
        * @param seed 指定するとシードを指定して乱数生成器を生成する。省略時は自動的に設定される
        */
        constructor(seed?: number);
        /**
        * 何やってるのかよく知らない
        */
        static _mulUint32(a: number, b: number): number;
        /**
        * シード生成
        */
        public setSeed(seed: any): void;
        /**
        * 次の乱数値を整数値で受け取る
        */
        public _nextInt(): number;
        /**
        * 次の乱数値を小数値として受け取る。利用は推奨されない
        */
        public next(): number;
        /**
        * 次の乱数値を整数値として受け取る
        */
        public nextInt(min: number, sup: number): number;
    }
}
