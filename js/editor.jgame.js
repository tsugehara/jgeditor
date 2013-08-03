var jgeditor;
(function (jgeditor) {
    jgeditor.file = "main.ts";
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var DefineLoader = (function () {
        function DefineLoader() {
            this.d = [];
            this.loadCount = 0;
        }
        DefineLoader.prototype.load = function (name, path) {
            var _this = this;
            if (path === undefined)
                path = name;
            var request = new XMLHttpRequest();
            request.open("GET", path);
            request.onload = function () {
                if (request.status != 200) {
                    if (_this.onerror)
                        _this.onerror(name);
                } else {
                    _this.d.push({
                        name: name,
                        value: request.response
                    });
                }
                _this.loadCount--;
                if (_this.loadCount == 0 && _this.onload)
                    _this.onload();
            };
            request.onerror = function () {
                if (this.onerror)
                    this.onerror(name);
            };
            request.send();
            this.loadCount++;
        };
        return DefineLoader;
    })();
    jgeditor.DefineLoader = DefineLoader;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var JgDiagnostics = (function () {
        function JgDiagnostics() {
        }
        JgDiagnostics.prototype.log = function (content) {
            console.error(content);
        };
        return JgDiagnostics;
    })();
    jgeditor.JgDiagnostics = JgDiagnostics;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
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
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var JgScriptSnapshot = (function () {
        function JgScriptSnapshot(fileName, text, oldText) {
            this.fileName = fileName;
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
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var DiagnosticInfo = (function () {
        function DiagnosticInfo(file, message, line) {
            this.file = file;
            this.message = message;
            this.line = line;
        }
        DiagnosticInfo.prototype.toString = function () {
            var ret = [];
            ret.push(this.file);
            if (this.line !== undefined && this.line !== null) {
                ret.push(" ");
                ret.push(this.line);
            }
            ret.push(": ");
            ret.push(this.message);

            return ret.join("");
        };
        return DiagnosticInfo;
    })();
    jgeditor.DiagnosticInfo = DiagnosticInfo;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
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

            this.settings.useDefaultLib = false;
            this.settings.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
            this.settings.moduleGenTarget = TypeScript.ModuleGenTarget.Synchronous;

            this.settings.outputOption = "out.js";
            this.settings.mapSourceFiles = false;
            this.settings.emitFullSourceMapPath = false;

            this.settings.generateDeclarationFiles = false;
            this.settings.gatherDiagnostics = false;

            this.settings.updateTC = false;

            this.settings.implicitAny = false;

            this.defines = [];
            this.defineSnaps = [];
            this.snapshots = [];

            this.diagnostics = new jgeditor.JgDiagnostics();
            this.logs = new jgeditor.LogSetting();
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

        JgPlayground.prototype.getScript = function (name) {
            var index = this.findSnapshot(name);
            if (index < 0)
                return null;
            return this.snapshots[index].text;
        };

        JgPlayground.prototype.findSnapshot = function (name) {
            for (var i = 0, len = this.snapshots.length; i < len; i++)
                if (this.snapshots[i].fileName == name)
                    return i;
            return -1;
        };

        JgPlayground.prototype.addScript = function (name, initScript) {
            if (this.findSnapshot(name) > -1)
                return false;
            var snapshot = new jgeditor.JgScriptSnapshot(name, initScript, "");
            snapshot.version = 1;
            this.snapshots.push(snapshot);
            return true;
        };

        JgPlayground.prototype.removeScript = function (name) {
            if (this.snapshots.length == 1)
                return false;
            var index = this.findSnapshot(name);
            if (index < 0)
                return false;
            this.snapshots.splice(index, 1);
            return true;
        };

        JgPlayground.prototype.updateScript = function (name, script) {
            var index = this.findSnapshot(name);
            if (index < 0)
                return false;

            var snapshot = this.snapshots[index];
            if (snapshot.text == script)
                return false;
            var newSnap = new jgeditor.JgScriptSnapshot(name, script, this.snapshots[index].text);
            newSnap.version = snapshot.version + 1;
            this.snapshots[index] = newSnap;
            return true;
        };

        JgPlayground.prototype.getCompilationSettings = function () {
            return this.settings;
        };

        JgPlayground.prototype.getScriptFileNames = function () {
            var scripts = [];
            for (var i = 0; i < this.defines.length; i++)
                scripts.push(i + ".d.ts");

            for (var i = 0; i < this.snapshots.length; i++)
                scripts.push(this.snapshots[i].fileName);

            return scripts;
        };

        JgPlayground.prototype.getScriptVersion = function (fileName) {
            var index = this.findSnapshot(fileName);
            if (index < 0)
                return 1;

            return this.snapshots[index].version;
        };

        JgPlayground.prototype.getScriptIsOpen = function (fileName) {
            return (fileName == this.current);
        };

        JgPlayground.prototype.getScriptSnapshot = function (fileName) {
            var index = this.findSnapshot(fileName);
            if (index < 0) {
                var defineIndex = Number(fileName.substr(0, fileName.indexOf(".")));
                return this.defineSnaps[defineIndex];
            }

            return this.snapshots[index];
        };

        JgPlayground.prototype.getDiagnosticsObject = function () {
            return this.diagnostics;
        };

        JgPlayground.prototype._getDiagnosticLine = function (diagnostic) {
            var index = this.findSnapshot(diagnostic.fileName());
            if (index < 0)
                return null;
            var snapshot = this.snapshots[index];
            var len = snapshot.getLength();
            var lineMap = new TypeScript.LineMap(snapshot.getLineStartPositions(), len);
            var pos = diagnostic.start();
            if (pos >= 0 && pos <= len)
                return lineMap.getLineNumberFromPosition(diagnostic.start()) + 1;

            return null;
        };

        JgPlayground.prototype.getTextDiagnostic = function (diagnostic) {
            var mes = [];
            var lineNumber = this._getDiagnosticLine(diagnostic);
            if (lineNumber !== null) {
                mes.push(lineNumber.toString());
                mes.push(": ");
            }
            mes.push(diagnostic.message());
            return mes.join("");
        };

        JgPlayground.prototype.getDiagnosticInfo = function (diagnostic) {
            var lineNumber = this._getDiagnosticLine(diagnostic);
            var info = new jgeditor.DiagnosticInfo(diagnostic.fileName(), diagnostic.message());
            var pos = diagnostic.start();
            var index = this.findSnapshot(diagnostic.fileName());
            if (index < 0)
                return null;
            var snapshot = this.snapshots[index];

            var len = snapshot.getLength();
            var lineMap = new TypeScript.LineMap(snapshot.getLineStartPositions(), len);
            if (pos >= 0 && pos <= len) {
                info.line = lineMap.getLineNumberFromPosition(pos) + 1;
                info.rowpos = pos - lineMap.getLineStartPosition(info.line - 1) + diagnostic.length();
            }

            return info;
        };
        return JgPlayground;
    })();
    jgeditor.JgPlayground = JgPlayground;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var JgPlaygroundService = (function () {
        function JgPlaygroundService(defines, initScript) {
            this.clean(defines);
            this.addScript(jgeditor.file, initScript);
            this.changeScript(jgeditor.file);
        }
        JgPlaygroundService.prototype.getScriptNames = function () {
            var ret = [];
            for (var n in this.host.snapshots)
                ret.push(n);

            return ret;
        };

        JgPlaygroundService.prototype.scriptCount = function () {
            return this.host.snapshots.length;
        };

        JgPlaygroundService.prototype.current = function () {
            return this.host.current;
        };

        JgPlaygroundService.prototype.removeScript = function (name) {
            if (!this.host.removeScript(name))
                return false;
            this.clean();
            return true;
        };

        JgPlaygroundService.prototype.renameScript = function (name, newName) {
            var index = this.host.findSnapshot(name);
            if (index < 0)
                return false;

            if (this.host.findSnapshot(newName) > -1)
                return false;

            this.host.snapshots[index].fileName = newName;

            this.clean();

            return true;
        };

        JgPlaygroundService.prototype.arrangeScripts = function (names) {
            var snapshots = this.host.snapshots;
            var len = snapshots.length;
            var newSnapshots = [];
            names.forEach(function (n) {
                for (var i = 0; i < len; i++)
                    if (snapshots[i].fileName == n) {
                        newSnapshots.push(snapshots[i]);
                        break;
                    }
            });
            this.host.snapshots = newSnapshots;
        };

        JgPlaygroundService.prototype.addScript = function (name, initScript) {
            if (this.host.findSnapshot(name) >= 0)
                return false;

            if (!this.host.addScript(name, initScript))
                return false;

            this.clean();
            return true;
        };

        JgPlaygroundService.prototype.getScript = function (name) {
            return this.host.getScript(name === undefined ? this.host.current : name);
        };

        JgPlaygroundService.prototype.changeScript = function (name) {
            this.host.current = name;
        };

        JgPlaygroundService.prototype.updateScript = function (script) {
            return this.host.updateScript(this.host.current, script);
        };

        JgPlaygroundService.prototype._check = function () {
            var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(this.host.current);
            if (syntaticDiagnositcs.length)
                return syntaticDiagnositcs;

            var semanticDiagnostics = this.service.getSemanticDiagnostics(this.host.current);
            return semanticDiagnostics;
        };

        JgPlaygroundService.prototype.check = function () {
            var _this = this;
            var ret = [];
            var diagnositcs = this._check();
            if (diagnositcs) {
                diagnositcs.forEach(function (diagnostic) {
                    ret.push(_this.host.getTextDiagnostic(diagnostic));
                });
            }
            return ret;
        };

        JgPlaygroundService.prototype.checkDetail = function () {
            var _this = this;
            var ret = [];
            var diagnositcs = this._check();
            if (diagnositcs) {
                diagnositcs.forEach(function (diagnostic) {
                    ret.push(_this.host.getDiagnosticInfo(diagnostic));
                });
            }
            return ret;
        };

        JgPlaygroundService.prototype.checkDetailAll = function () {
            var _this = this;
            var ret = [];
            for (var i = 0; i < this.host.snapshots.length; i++) {
                var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(this.host.snapshots[i].fileName);
                if (syntaticDiagnositcs.length) {
                    syntaticDiagnositcs.forEach(function (diagnostic) {
                        ret.push(_this.host.getDiagnosticInfo(diagnostic));
                    });
                    return ret;
                }
            }
            var semanticDiagnostics = [];
            for (var i = 0; i < this.host.snapshots.length; i++) {
                semanticDiagnostics = semanticDiagnostics.concat(this.service.getSemanticDiagnostics(this.host.snapshots[i].fileName) || []);
            }
            if (semanticDiagnostics.length) {
                semanticDiagnostics.forEach(function (diagnostic) {
                    ret.push(_this.host.getDiagnosticInfo(diagnostic));
                });
            }

            return ret;
        };

        JgPlaygroundService.prototype.clean = function (defines) {
            if (defines !== undefined)
                this.defines = defines;

            this.factory = new Services.TypeScriptServicesFactory();

            var old;
            if (this.host) {
                old = {
                    current: this.host.current,
                    names: [],
                    scripts: []
                };
                for (var i = 0; i < this.host.snapshots.length; i++) {
                    old.scripts.push(this.host.snapshots[i].text);
                    old.names.push(this.host.snapshots[i].fileName);
                }
            }
            this.host = new jgeditor.JgPlayground();
            for (var i = 0; i < this.defines.length; i++)
                this.host.addDefine(this.defines[i].value);

            if (old) {
                for (var i = 0; i < old.names.length; i++)
                    this.host.addScript(old.names[i], old.scripts[i]);

                this.host.current = old.current;
            }

            this.service = this.factory.createPullLanguageService(this.host);
        };

        JgPlaygroundService.prototype.build = function () {
            var files = [];
            var s = this.host.snapshots;

            for (var i = 0; i < s.length; i++) {
                var emitOutput = this.service.getEmitOutput(s[i].fileName);
                files = files.concat(emitOutput.outputFiles);
            }

            var ret = [];
            for (var i = 0; i < files.length; i++)
                ret.push(files[i].text);

            return ret.join("\n");
        };

        JgPlaygroundService.prototype.getSignature = function (charIndex) {
            return this.service.getSignatureAtPosition(this.host.current, charIndex === undefined ? this.beforeCharIndex : charIndex);
        };

        JgPlaygroundService.prototype.getCompilationDetail = function (name, charIndex) {
            return this.service.getCompletionEntryDetails(this.host.current, charIndex === undefined ? this.beforeCharIndex : charIndex, name);
        };

        JgPlaygroundService.prototype.getCompilation = function (matchText, charIndex, noMember) {
            this.beforeCharIndex = charIndex;
            var compilations = this.service.getCompletionsAtPosition(this.host.current, charIndex, noMember ? false : true);

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
})(jgeditor || (jgeditor = {}));
