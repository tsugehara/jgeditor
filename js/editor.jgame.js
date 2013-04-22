var jgeditor;
(function (jgeditor) {
    var ConsoleLogger = (function () {
        function ConsoleLogger() { }
        ConsoleLogger.prototype.information = function () {
            return true;
        };
        ConsoleLogger.prototype.debug = function () {
            return true;
        };
        ConsoleLogger.prototype.warning = function () {
            return true;
        };
        ConsoleLogger.prototype.error = function () {
            return true;
        };
        ConsoleLogger.prototype.fatal = function () {
            return true;
        };
        ConsoleLogger.prototype.log = function (s) {
            console.log(s);
        };
        return ConsoleLogger;
    })();
    jgeditor.ConsoleLogger = ConsoleLogger;    
    var SimpleBuffer = (function () {
        function SimpleBuffer(name, useUTF8encoding) {
            this.name = name;
            this.useUTF8encoding = useUTF8encoding;
            this.buf = [];
        }
        SimpleBuffer.prototype.Write = function (s) {
            if(this.buf.length == 0) {
                this.buf.push("");
            }
            this.buf[this.buf.length - 1] += s;
            return true;
        };
        SimpleBuffer.prototype.WriteLine = function (s) {
            if(this.buf.length == 0) {
                this.buf.push("");
            }
            this.buf[this.buf.length - 1] += s;
            this.buf.push("");
            return true;
        };
        SimpleBuffer.prototype.Close = function () {
        };
        SimpleBuffer.prototype.Clear = function () {
            this.buf = [];
        };
        SimpleBuffer.prototype.toString = function () {
            return this.buf.join("\n");
        };
        SimpleBuffer.prototype.hasData = function () {
            return this.buf.length != 0 && (this.buf.length > 1 || this.buf[0].length != 0);
        };
        return SimpleBuffer;
    })();
    jgeditor.SimpleBuffer = SimpleBuffer;    
    var DefineLoader = (function () {
        function DefineLoader() {
            this.d = {
            };
            this.loadCount = 0;
        }
        DefineLoader.prototype.load = function (name, path) {
            var _this = this;
            if(path === undefined) {
                path = name;
            }
            var request = new XMLHttpRequest();
            request.open("GET", path);
            request.onload = function () {
                _this.d[name] = request.response;
                _this.loadCount--;
                if(_this.loadCount == 0 && _this.onload) {
                    _this.onload();
                }
            };
            request.onerror = function () {
                alert("初期化に失敗しました。");
            };
            request.send();
            this.loadCount++;
        };
        return DefineLoader;
    })();
    jgeditor.DefineLoader = DefineLoader;    
    var IOHost = (function () {
        function IOHost() {
            this.result = [];
        }
        IOHost.prototype.createFile = function (fileName, useUTF8encoding) {
            if(useUTF8encoding === undefined) {
                useUTF8encoding = false;
            }
            var outputFile = new SimpleBuffer(fileName, useUTF8encoding);
            this.result.push(outputFile);
            return outputFile;
        };
        IOHost.prototype.directoryExists = function (fname) {
            return true;
        };
        IOHost.prototype.fileExists = function (fname) {
            return false;
        };
        IOHost.prototype.resolvePath = function (fname) {
            return fname;
        };
        IOHost.prototype.toString = function () {
            return this.result.join("\n");
        };
        return IOHost;
    })();
    jgeditor.IOHost = IOHost;    
})(jgeditor || (jgeditor = {}));
