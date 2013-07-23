var jgeditor;
(function (jgeditor) {
    jgeditor.file = "main.ts";
    var DefineLoader = (function () {
        function DefineLoader() {
            this.d = {};
            this.loadCount = 0;
        }
        DefineLoader.prototype.load = function (name, path) {
            var _this = this;
            if (path === undefined)
                path = name;
            var request = new XMLHttpRequest();
            request.open("GET", path);
            request.onload = function () {
                _this.d[name] = request.response;
                _this.loadCount--;
                if (_this.loadCount == 0 && _this.onload)
                    _this.onload();
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

    var JgDiagnostics = (function () {
        function JgDiagnostics() {
        }
        JgDiagnostics.prototype.log = function (content) {
            console.error(content);
        };
        return JgDiagnostics;
    })();
    jgeditor.JgDiagnostics = JgDiagnostics;

    var LogSetting = (function () {
        function LogSetting() {
            this.debug = true;
            this.information = true;
            this.warning = true;
            this.error = true;
            this.fatal = true;
        }
        return LogSetting;
    })();
    jgeditor.LogSetting = LogSetting;

    var JgPlaygroundService = (function () {
        function JgPlaygroundService(defines, initScript) {
            this.defines = defines;
            this.factory = new Services.TypeScriptServicesFactory();
            this.host = new JgPlayground();
            for (var i = 0; i < this.defines.length; i++)
                this.host.addDefine(this.defines[i]);
            this.host.setScript(initScript ? initScript : "");
            this.service = this.factory.createPullLanguageService(this.host);
        }
        JgPlaygroundService.prototype.updateScript = function (script) {
            if (script != this.host.script)
                this.host.setScript(script);
        };

        JgPlaygroundService.prototype.check = function () {
            var _this = this;
            var ret = [];

            var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(jgeditor.file);
            if (syntaticDiagnositcs.length) {
                syntaticDiagnositcs.forEach(function (diagnostic) {
                    ret.push(_this.host.getTextDiagnostic(diagnostic));
                });
                return ret;
            }

            var semanticDiagnostics = this.service.getSemanticDiagnostics(jgeditor.file);
            if (semanticDiagnostics.length) {
                semanticDiagnostics.forEach(function (diagnostic) {
                    ret.push(_this.host.getTextDiagnostic(diagnostic));
                });
            }

            return ret;
        };

        JgPlaygroundService.prototype.build = function () {
            var emitOutput = this.service.getEmitOutput(jgeditor.file);
            var files = emitOutput.outputFiles;
            var ret = [];
            for (var i = 0; i < files.length; i++)
                ret.push(files[i].text);

            return ret.join("\n");
        };

        JgPlaygroundService.prototype.getSignature = function (charIndex) {
            return this.service.getSignatureAtPosition(jgeditor.file, charIndex === undefined ? this.beforeCharIndex : charIndex);
        };

        JgPlaygroundService.prototype.getCompilationDetail = function (name, charIndex) {
            return this.service.getCompletionEntryDetails(jgeditor.file, charIndex === undefined ? this.beforeCharIndex : charIndex, name);
        };

        JgPlaygroundService.prototype.getCompilation = function (matchText, charIndex, noMember) {
            this.beforeCharIndex = charIndex;
            var compilations = this.service.getCompletionsAtPosition(jgeditor.file, charIndex, noMember ? false : true);

            if (matchText.length > 0) {
                var t = matchText.toLowerCase();
                return compilations.entries.filter(function (elm) {
                    return elm.name.toLowerCase().indexOf(t) == 0;
                });
            }

            return compilations.entries;
        };
        return JgPlaygroundService;
    })();
    jgeditor.JgPlaygroundService = JgPlaygroundService;

    var JgScriptSnapshot = (function () {
        function JgScriptSnapshot(text, oldText) {
            this.text = text;
            this.oldText = oldText;
        }
        JgScriptSnapshot.prototype.getText = function (start, end) {
            return this.text.substring(start, end);
        };

        JgScriptSnapshot.prototype.getLength = function () {
            return this.text.length;
        };

        JgScriptSnapshot.prototype.getLineStartPositions = function () {
            return TypeScript.TextUtilities.parseLineStarts(TypeScript.SimpleText.fromString(this.text));
        };

        JgScriptSnapshot.prototype.getTextChangeRangeSinceVersion = function (scriptVersion) {
            var span = new TypeScript.TextSpan(0, this.oldText ? this.oldText.length : this.text.length);
            return new TypeScript.TextChangeRange(span, this.text.length);
        };
        return JgScriptSnapshot;
    })();
    jgeditor.JgScriptSnapshot = JgScriptSnapshot;

    var JgPlayground = (function () {
        function JgPlayground() {
            this.settings = new TypeScript.CompilationSettings();
            this.settings.propagateConstants = false;

            this.settings.minWhitespace = false;
            this.settings.emitComments = false;
            this.settings.watch = false;
            this.settings.exec = false;
            this.settings.resolve = true;
            this.settings.disallowBool = true;
            this.settings.allowAutomaticSemicolonInsertion = true;
            this.settings.allowModuleKeywordInExternalModuleReference = true;

            this.settings.useDefaultLib = true;
            this.settings.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
            this.settings.moduleGenTarget = TypeScript.ModuleGenTarget.Synchronous;

            this.settings.outputOption = "";
            this.settings.mapSourceFiles = false;
            this.settings.emitFullSourceMapPath = false;

            this.settings.generateDeclarationFiles = false;
            this.settings.gatherDiagnostics = false;

            this.settings.updateTC = false;

            this.settings.implicitAny = false;

            this.defines = [];
            this.defineSnaps = [];
            this.script = "";
            this.version = 0;

            this.diagnostics = new JgDiagnostics();
            this.logs = new LogSetting();
        }
        JgPlayground.prototype.information = function () {
            return this.logs.information;
        };

        JgPlayground.prototype.debug = function () {
            return this.logs.debug;
        };

        JgPlayground.prototype.warning = function () {
            return this.logs.warning;
        };

        JgPlayground.prototype.error = function () {
            return this.logs.error;
        };

        JgPlayground.prototype.fatal = function () {
            return this.logs.fatal;
        };

        JgPlayground.prototype.log = function (s) {
            console.log(s);
        };

        JgPlayground.prototype.addDefine = function (script) {
            this.defines.push(script);
            this.defineSnaps.push(TypeScript.ScriptSnapshot.fromString(script));
        };

        JgPlayground.prototype.setScript = function (script) {
            this.snapshot = new JgScriptSnapshot(script, this.script);
            this.script = script;
            this.version++;
        };

        JgPlayground.prototype.getCompilationSettings = function () {
            return this.settings;
        };

        JgPlayground.prototype.getScriptFileNames = function () {
            var scripts = [];
            for (var i = 0; i < this.defines.length; i++)
                scripts.push(i + ".d.ts");

            scripts.push(jgeditor.file);

            return scripts;
        };

        JgPlayground.prototype.getScriptVersion = function (fileName) {
            if (fileName != jgeditor.file)
                return 1;

            return this.version;
        };

        JgPlayground.prototype.getScriptIsOpen = function (fileName) {
            return (fileName == jgeditor.file);
        };

        JgPlayground.prototype.getScriptSnapshot = function (fileName) {
            if (fileName == jgeditor.file)
                return this.snapshot;

            var defineIndex = Number(fileName.substr(0, fileName.indexOf(".")));
            return this.defineSnaps[defineIndex];
        };

        JgPlayground.prototype.getDiagnosticsObject = function () {
            return this.diagnostics;
        };

        JgPlayground.prototype.getTextDiagnostic = function (diagnostic) {
            var len = this.snapshot.getLength();
            var lineMap = new TypeScript.LineMap(this.snapshot.getLineStartPositions(), len);
            var mes = [];
            var pos = diagnostic.start();
            if (pos >= 0 && pos <= len) {
                mes.push((lineMap.getLineNumberFromPosition(diagnostic.start()) + 1).toString());
                mes.push(": ");
            }
            mes.push(diagnostic.message());
            return mes.join("");
        };
        return JgPlayground;
    })();
    jgeditor.JgPlayground = JgPlayground;
})(jgeditor || (jgeditor = {}));
