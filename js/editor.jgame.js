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
                if (this.snapshots[i].fileName.substr(-3) == ".ts")
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
                return info;
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
            if (defines)
                this.clean(defines);

            if (initScript) {
                this.addScript(jgeditor.file, initScript);
                this.changeScript(jgeditor.file);
            }
        }
        JgPlaygroundService.prototype.getScriptNames = function () {
            var ret = [];
            for (var i = 0; i < this.host.snapshots.length; i++)
                ret.push(this.host.snapshots[i].fileName);

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

            if (!newName.match(/^[0-9a-zA-Z_\-\.]+$/))
                return false;

            this.host.snapshots[index].fileName = newName;
            if (name == this.current())
                this.changeScript(newName);

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

            if (!name.match(/^[0-9a-zA-Z_\-\.]+$/))
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
            var scripts = this.host.getScriptFileNames();
            for (var i = 0; i < scripts.length; i++) {
                var syntaticDiagnositcs = this.service.getSyntacticDiagnostics(scripts[i]);
                if (syntaticDiagnositcs.length) {
                    syntaticDiagnositcs.forEach(function (diagnostic) {
                        ret.push(_this.host.getDiagnosticInfo(diagnostic));
                    });
                    return ret;
                }
            }
            var semanticDiagnostics = [];
            for (var i = 0; i < scripts.length; i++) {
                semanticDiagnostics = semanticDiagnostics.concat(this.service.getSemanticDiagnostics(scripts[i]) || []);
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

            var s = this.host.getScriptFileNames();
            for (var i = 0; i < s.length; i++) {
                if (s[i].substr(-5) == ".d.ts")
                    continue;
                var emitOutput = this.service.getEmitOutput(s[i]);
                files = files.concat(emitOutput.outputFiles);
            }

            var ret = [];
            for (var i = 0; i < files.length; i++)
                if (files[i] && files[i].text && files[i].text.length > 0)
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
var jgeditor;
(function (jgeditor) {
    var AceSessionManager = (function () {
        function AceSessionManager() {
            this.sessions = [];
        }
        AceSessionManager.prototype.rename = function (name, newName) {
            var index = this.find(name);
            if (index >= 0)
                this.sessions[index].name = newName;
        };

        AceSessionManager.prototype.remove = function (name) {
            var index = this.find(name);
            if (index >= 0) {
                this.sessions.splice(index, 1);
            }
        };

        AceSessionManager.prototype.find = function (name) {
            for (var i = 0; i < this.sessions.length; i++)
                if (this.sessions[i].name == name)
                    return i;
            return -1;
        };

        AceSessionManager.prototype.get = function (name, value) {
            var index = this.find(name);
            if (index >= 0) {
                var target = this.sessions[index];
                if (index > 0) {
                    this.sessions.splice(index, 1);
                    this.sessions.unshift(target);
                }
                return target.session;
            }
            var target = {
                name: name,
                session: new ace.createEditSession(value ? value : "")
            };
            this.sessions.unshift(target);
            if (this.sessions.length > 30)
                this.sessions.pop();
            return target.session;
        };
        return AceSessionManager;
    })();
    jgeditor.AceSessionManager = AceSessionManager;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var Editor = (function () {
        function Editor(id) {
            var _this = this;
            this.id = id;
            this.editor = ace.edit(id);
            this.game_container_id = "jgame-con";
            this.ace_session = new jgeditor.AceSessionManager();
            this.file_sortable = $(".file-sortable");
            this.default_ext = "js";
            this.messages = {
                add_tab_prompt: "",
                rename_tab_prompt: "",
                remove_tab_confirm: ""
            };
            this.activated_contextmenu = false;

            this.tab_rename = new jg.Trigger();
            this.tab_renamed = new jg.Trigger();
            this.tab_remove = new jg.Trigger();
            this.tab_removed = new jg.Trigger();
            this.tab_change = new jg.Trigger();
            this.tab_changed = new jg.Trigger();
            this.tab_add = new jg.Trigger();
            this.tab_added = new jg.Trigger();

            this.zip_start = new jg.Trigger();
            this.zip_ended = new jg.Trigger();
            this.sorted = new jg.Trigger();

            this.run_start = new jg.Trigger();
            this.run_end = new jg.Trigger();
            this.run_stop = new jg.Trigger();

            this.menu_binder = {
                "file-menu-change-name": function (e) {
                    _this.renameTabPrompt($(e).text());
                },
                "file-menu-remove": function (e) {
                    _this.removeTabConfirm($(e).text());
                }
            };
        }
        Editor.prototype.getNextTab = function () {
            if (this.file_sortable.find(".file-tab").length == 0)
                return null;
            var next = this.file_sortable.find(".file-tab-active").next(".file-tab");
            if (next.length == 0)
                next = this.file_sortable.find(".file-tab:first");
            return next;
        };
        Editor.prototype.getPrevTab = function () {
            if (this.file_sortable.find(".file-tab").length == 0)
                return null;
            var prev = this.file_sortable.find(".file-tab-active").prev(".file-tab");
            if (prev.length == 0)
                prev = this.file_sortable.find(".file-tab:last");
            return prev;
        };

        Editor.prototype.keyhandlerForIframe = function (e) {
            if ("key" in window)
                window["key"].dispatch(e);
        };

        Editor.prototype.keyhandleForIframe = function () {
            var con = document.getElementById(this.game_container_id);
            con.contentWindow.removeEventListener("keydown", this.keyhandlerForIframe, false);
            con.contentWindow.addEventListener("keydown", this.keyhandlerForIframe, false);
        };

        Editor.prototype.run = function (url) {
            var _this = this;
            this.editor.focus();
            var evt = {
                cancel: false,
                url: url
            };
            this.run_start.fire(evt);
            if (evt.cancel)
                return;
            var con = document.getElementById(this.game_container_id);
            con.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + (new Date()).getTime();
            con.onload = function () {
                _this.focusGame();
                _this.keyhandleForIframe();
                _this.run_end.fire({
                    url: url
                });
            };
        };

        Editor.prototype.setTheme = function (theme) {
            this.editor.setTheme(theme);
        };

        Editor.prototype.setMode = function (mode) {
            this.editor.getSession().setMode(mode);
        };

        Editor.prototype.getSesssion = function () {
            return this.editor.getSession();
        };

        Editor.prototype.setSession = function (session) {
            this.editor.setSession(session);
        };

        Editor.prototype.getValue = function () {
            return this.editor.getValue();
        };

        Editor.prototype.focus = function () {
            this.editor.focus();
            return true;
        };

        Editor.prototype.focusGame = function () {
            var con = document.getElementById(this.game_container_id);
            var w = con.contentWindow || con;
            try  {
                var container = w.document.getElementById("jgame");
                var childs = container.childNodes;
                for (var i = 0; i < childs.length; i++) {
                    if (childs[i].className == "input-handler") {
                        childs[i].focus();
                        return true;
                    }
                }
            } catch (ex) {
            }

            w.focus();
            return true;
        };

        Editor.prototype.stopGame = function () {
            var con = document.getElementById(this.game_container_id);
            this.run_stop.fire({ url: con.src });
            con.src = "about:blank";
            this.focus();
            return true;
        };

        Editor.prototype.zip = function (btn) {
            var _this = this;
            var evt = {
                cancel: false,
                files: []
            };
            this.zip_start.fire(evt);
            if (evt.cancel)
                return;
            if (!evt.files || evt.files.length == 0)
                return;

            jz.zip.pack({
                files: evt.files,
                level: 5
            }).done(function (buffer) {
                var binary = '';
                var bytes = new Uint8Array(buffer);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++)
                    binary += String.fromCharCode(bytes[i]);

                var base64String = window.btoa(binary);
                $("#download-link").remove();
                var a = $("<a/>").attr("download", "source.zip").attr("href", "data:application/zip;base64," + base64String).attr("id", "download-link").text("ダウンロード").click(function () {
                    a.remove();
                    if (jg.JGUtil.getBrowser().msie)
                        alert("IEではZIPダウンロードが出来ません");
                });
                a.insertAfter($(btn));
                _this.zip_ended.fire({
                    error: false
                });
            }).fail(function (error) {
                _this.zip_ended.fire({
                    error: error
                });
            });
        };

        Editor.prototype.activateFileContextMenu = function () {
            this.activated_contextmenu = true;
            var exists_file_tabs = this.file_sortable.find(".file-tab");
            exists_file_tabs["contextMenu"]("file-menu", { bindings: this.menu_binder });
        };

        Editor.prototype.activateSortable = function (file_sortable) {
            var _this = this;
            if (file_sortable)
                this.file_sortable = file_sortable;
            this.file_sortable["sortable"]({
                update: function () {
                    var arranged = [];
                    _this.file_sortable.find(".file-tab").each(function (index, f) {
                        arranged.push($(f).text());
                    });
                    _this.sorted.fire({
                        tabs: arranged
                    });
                }
            });
        };

        Editor.prototype.activateAddTabUI = function (add_tab_btn, ext_message) {
            if (ext_message)
                this.messages.add_tab_prompt = ext_message;
            add_tab_btn.click(jg.JGUtil.proxy(this.addTabPrompt, this));
        };

        Editor.prototype.removeTabConfirm = function (target) {
            if (target === undefined)
                target = this.currentTab();
            var mes = this._createMessage(target + "を削除します。\n本当によろしいですか？", "remove_tab_confirm");
            if (!confirm(mes))
                return true;

            this.removeTab(target);
            return true;
        };

        Editor.prototype.renameTabPrompt = function (target) {
            if (target === undefined)
                target = this.currentTab();
            var mes = this._createMessage("変更後の名前を入力してください。", "rename_tab_prompt", true);
            var ret = prompt(mes, target);
            if (!ret)
                return true;

            this.renameTab(target, ret);
            return true;
        };

        Editor.prototype.addTabPrompt = function () {
            var mes = this._createMessage("追加するファイル名を入力してください。", "add_tab_prompt", true);
            var ret = prompt(mes, "");
            if (!ret)
                return true;
            if (!this.addTab(ret)) {
                alert("エラー");
                return true;
            }
            this.changeTab(this._getName(ret));
            return true;
        };

        Editor.prototype.currentTab = function () {
            return this.file_sortable.find(".file-tab-active").text();
        };

        Editor.prototype.changeTab = function (name) {
            var active = this.file_sortable.find(".file-tab-active");
            if (active.text() == name)
                return false;

            var target = this.file_sortable.find(".file-tab:contains(" + name + ")");
            if (target.length == 0)
                return false;

            this._changing_script = true;

            var evt = {
                name: name,
                cancel: false,
                value: ""
            };
            this.tab_change.fire(evt);
            if (evt.cancel) {
                this._changing_script = false;
                return;
            }

            this.setSession(this.ace_session.get(evt.name, evt.value));

            active.removeClass("file-tab-active");
            target.addClass("file-tab-active");
            var extPos = evt.name.lastIndexOf(".");
            var ext = extPos >= 0 ? evt.name.substr(extPos + 1).toLowerCase() : "";
            switch (ext) {
                case "html":
                    this.setMode("ace/mode/html");
                    break;
                case "js":
                    this.setMode("ace/mode/javascript");
                    break;
                case "json":
                    this.setMode("ace/mode/json");
                    break;
                case "css":
                    this.setMode("ace/mode/css");
                    break;
                case "txt":
                case "":
                    this.setMode("ace/mode/text");
                    break;
                case "md":
                    this.setMode("ace/mode/markdown");
                    break;
                default:
                    this.setMode("ace/mode/typescript");
                    break;
            }
            this.focus();

            this._changing_script = false;
            this.tab_changed.fire({
                name: evt.name,
                value: evt.value
            });
        };

        Editor.prototype.changeToNextTab = function () {
            var next = this.getNextTab();
            if (!next)
                return false;

            this.changeTab(next.text());
            return true;
        };

        Editor.prototype.changeToPrevTab = function () {
            var prev = this.getPrevTab();
            if (!prev)
                return false;

            this.changeTab(prev.text());
            return true;
        };

        Editor.prototype.addTab = function (name, value) {
            var _this = this;
            name = this._getName(name);
            if (!this._isUniqueName(name))
                return false;
            if (!this._isValidName(name))
                return false;

            var evt = {
                name: name,
                value: value,
                cancel: false
            };
            this.tab_add.fire(evt);
            if (evt.cancel)
                return false;

            var div = $("<div/>").addClass("file-tab").text(evt.name).click(function (e) {
                _this.changeTab($(e.delegateTarget).text());
            });
            if (this.activated_contextmenu)
                div["contextMenu"]("file-menu", { bindings: this.menu_binder });
            this.file_sortable.append(div);

            this.tab_added.fire({
                name: evt.name,
                value: evt.value
            });

            return true;
        };

        Editor.prototype.renameTab = function (name, newName) {
            newName = this._getName(newName);
            if (!name || !newName)
                return;

            var evt = {
                name: name,
                newName: newName,
                cancel: false
            };
            this.tab_rename.fire(evt);
            if (evt.cancel)
                return;

            var target = this.file_sortable.find(".file-tab:contains(" + evt.name + ")");
            if (target.length == 0)
                return;

            this.ace_session.rename(evt.name, evt.newName);

            target.text(evt.newName);
            this.tab_renamed.fire({
                name: evt.name,
                newName: evt.newName
            });
        };

        Editor.prototype.removeTab = function (name) {
            var evt = {
                name: name,
                cancel: false
            };
            this.tab_remove.fire(evt);
            if (evt.cancel)
                return;

            var target = this.file_sortable.find(".file-tab:contains(" + evt.name + ")");
            if (target.length == 0)
                return;

            var is_current = target.hasClass("file-tab-active");
            target.remove();
            if (is_current)
                this.changeTab($(this.file_sortable.find(".file-tab")[0]).text());

            this.ace_session.remove(evt.name);

            this.tab_removed.fire({
                name: evt.name
            });
        };

        Editor.prototype.addInfo = function (text, background) {
            this.file_sortable.parent().find(".c").before($("<div/>").addClass("file-info").text(text).css("background", background));
        };

        Editor.prototype.clearInfo = function () {
            this.file_sortable.parent().find(".file-info").remove();
        };

        Editor.prototype._createMessage = function (mes, message_type, extension) {
            if (extension && this.default_ext && this.default_ext.length > 0)
                mes += "\n拡張子を省略すると." + this.default_ext + "がつきます。";
            if (message_type && this.messages[message_type] && this.messages[message_type].length > 0)
                mes += "\n" + this.messages[message_type];
            return mes;
        };

        Editor.prototype._isUniqueName = function (name) {
            return this.file_sortable.find(".file-tab:contains(" + name + ")").length == 0;
        };

        Editor.prototype._isValidName = function (name) {
            if (!name)
                return false;

            return name.match(/^[0-9a-zA-Z_\-\.]+$/);
        };

        Editor.prototype._getName = function (name) {
            if (name.substr(-1) == ".")
                return name.substr(0, name.length - 1);

            if (!this.default_ext || this.default_ext.length == 0)
                return name;

            if (!name)
                return null;

            if (name.indexOf(".") < 0)
                return name + "." + this.default_ext;

            return name;
        };

        Editor.prototype._getExtension = function (name) {
            var extPos = name.lastIndexOf(".");
            return extPos >= 0 ? name.substr(extPos + 1).toLowerCase() : "";
        };
        return Editor;
    })();
    jgeditor.Editor = Editor;
})(jgeditor || (jgeditor = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var jgeditor;
(function (jgeditor) {
    var JavaScriptEditor = (function (_super) {
        __extends(JavaScriptEditor, _super);
        function JavaScriptEditor(id) {
            _super.call(this, id);
            this.scripts = [];
            this.tab_change.handle(this, this.onTabChange);
            this.tab_changed.handle(this, this.onTabChanged);
            this.tab_added.handle(this, this.onTabAdded);
            this.tab_remove.handle(this, this.onTabRemove);
            this.tab_removed.handle(this, this.onTabRemoved);
            this.tab_renamed.handle(this, this.onTabRenamed);
            this.zip_start.handle(this, this.onZipStart);
            this.zip_ended.handle(this, this.onZipEnded);
        }
        JavaScriptEditor.prototype.onTabChange = function (e) {
            this.updateScript();
            var i = this.findScript(e.name);
            e.value = this.scripts[i].value;
        };

        JavaScriptEditor.prototype.onTabChanged = function (e) {
            var i = this.findScript(e.name);
            this.current = this.scripts[i];
        };

        JavaScriptEditor.prototype.onTabAdded = function (e) {
            this.scripts.push({
                name: e.name,
                value: e.value ? e.value : ""
            });
        };

        JavaScriptEditor.prototype.onTabRemove = function (e) {
            if (this.scripts.length == 1) {
                alert("ファイルは最低一つ必要です。");
                e.cancel = true;
                return;
            }
        };

        JavaScriptEditor.prototype.onTabRemoved = function (e) {
            var i = this.findScript(e.name);
            this.scripts.splice(i, 1);
        };

        JavaScriptEditor.prototype.onTabRenamed = function (e) {
            var i = this.findScript(e.name);
            this.scripts[i].name = e.newName;
        };

        JavaScriptEditor.prototype.onZipStart = function (e) {
            this.updateScript();
            for (var i = 0, len = this.scripts.length; i < len; i++) {
                if (this.scripts[i].value.length > 0)
                    e.files.push({
                        name: this.scripts[i].name,
                        buffer: this.scripts[i].value
                    });
            }
            e.files.push({
                name: "out.js",
                buffer: this.getScript()
            });
        };

        JavaScriptEditor.prototype.onZipEnded = function (e) {
            if (e.error) {
                alert("エラー: " + e.error);
            }
        };

        JavaScriptEditor.prototype.findScript = function (name) {
            for (var i = 0, len = this.scripts.length; i < len; i++) {
                if (this.scripts[i].name == name)
                    return i;
            }
            return -1;
        };

        JavaScriptEditor.prototype.updateScript = function () {
            if (this.current)
                this.current.value = this.getValue();
        };

        JavaScriptEditor.prototype.getScript = function () {
            var ret = [];
            for (var i = 0, len = this.scripts.length; i < len; i++) {
                if (this._getExtension(this.scripts[i].name) == "js")
                    ret.push(this.scripts[i].value);
            }

            return ret.join("\n");
        };
        return JavaScriptEditor;
    })(jgeditor.Editor);
    jgeditor.JavaScriptEditor = JavaScriptEditor;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var TypeScriptEditor = (function (_super) {
        __extends(TypeScriptEditor, _super);
        function TypeScriptEditor(id) {
            _super.call(this, id);
            this.default_ext = "ts";
            this.error_console = $("#error-console");
            this.output = $("#output");
            this.define_loader = new jgeditor.DefineLoader();
            this.define_loaded = new jg.Trigger();
            this.playground = new jgeditor.JgPlaygroundService();

            this.tab_change.handle(this, this.onTabChange);
            this.tab_changed.handle(this, this.onTabChanged);
            this.tab_added.handle(this, this.onTabAdded);
            this.tab_remove.handle(this, this.onTabRemove);
            this.tab_removed.handle(this, this.onTabRemoved);
            this.tab_renamed.handle(this, this.onTabRenamed);
            this.zip_start.handle(this, this.onZipStart);
            this.zip_ended.handle(this, this.onZipEnded);
        }
        TypeScriptEditor.prototype.loadDefines = function () {
            var files = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                files[_i] = arguments[_i + 0];
            }
            var _this = this;
            this.define_loader.d = [];
            files.forEach(function (f) {
                _this.define_loader.load(f);
            });
            var errors = [];
            this.define_loader.onload = function () {
                if (errors.length > 0)
                    alert("以下のファイルの読み込みに失敗しました\n" + errors.join("\n"));
                _this.define_loaded.fire({
                    defines: _this.define_loader.d,
                    errors: errors
                });
            };
            this.define_loader.onerror = function (error) {
                errors.push(error);
            };
        };

        TypeScriptEditor.prototype.clean = function () {
            this.playground.clean(this.define_loader.d);
        };

        TypeScriptEditor.prototype.check = function (callback) {
            var _this = this;
            this.clearError("checking...");
            this.updateScript();
            window.setTimeout(function () {
                var errors = _this.playground.checkDetailAll();
                if (errors.length == 0) {
                    _this.clearError("No error!");
                } else {
                    _this.clearError();
                    for (var i = 0; i < errors.length; i++)
                        _this.addError(errors[i]);
                }
                if (callback)
                    callback();
            }, 20);
        };

        TypeScriptEditor.prototype.build = function () {
            var _this = this;
            this.output.val("");
            this.check(function () {
                _this.output.val(_this.playground.build());
            });
        };

        TypeScriptEditor.prototype.clearError = function (text) {
            this.error_console.html(text ? text : "");
        };

        TypeScriptEditor.prototype.addError = function (diagnostic) {
            var row = $("<div/>");

            if (diagnostic.line !== undefined && diagnostic.line !== null) {
                if (this.playground.scriptCount() == 1)
                    row.text(diagnostic.line + ": " + diagnostic.message); else
                    row.text(diagnostic.file + " " + diagnostic.line + ": " + diagnostic.message);
                row.click(function () {
                    if (this.playground.current() != diagnostic.file)
                        this.changeTab(diagnostic.file);
                    this.editor.clearSelection();
                    this.editor.moveCursorTo(diagnostic.line - 1, diagnostic.rowpos);
                    this.editor.focus();
                });
            } else {
                row.text(diagnostic.message);
            }
            this.error_console.append(row);
        };

        TypeScriptEditor.prototype.activateSelectDefineDialog = function (tab, dialog, defines) {
            var _this = this;
            tab.click(function () {
                var d = [];
                for (var i = 0; i < _this.playground.defines.length; i++)
                    d.push(_this.playground.defines[i].name);
                defines.val(d.join("\n"));

                dialog["dialog"]({
                    width: 600,
                    modal: true,
                    buttons: {
                        "変更する": function (e) {
                            var lines = defines.val().split(/\r|\n|\r\n/g);
                            _this.loadDefines.apply(_this, lines);
                            dialog["dialog"]("close");
                        },
                        "キャンセル": function (e) {
                            dialog["dialog"]("close");
                        }
                    }
                });
            });
        };

        TypeScriptEditor.prototype.activateAutoComplete = function () {
            var _this = this;
            var AutoComplete = window["require"]("autocomplete").AutoComplete;
            var autoComplete = new AutoComplete(this.editor, null, this.playground);
            this.editor.addEventListener("mousedown", function () {
                if (autoComplete.isActive())
                    autoComplete.deactivate();
            });
            this.editor.commands.addCommand({
                name: "autocomplete",
                bindKey: { win: "Ctrl-Space", mac: "Command-Space" },
                exec: function () {
                    if (autoComplete.isActive() == false) {
                        var pos = _this.editor.getCursorPosition();
                        var charIndex = _this.editor.getSession().getDocument().positionToIndex(pos);
                        _this.updateScript();
                        autoComplete.active();
                    }
                }
            });
        };

        TypeScriptEditor.prototype.updateScript = function () {
            this.playground.updateScript(this.editor.getValue());
        };

        TypeScriptEditor.prototype.getScript = function () {
            return this.output.val();
        };

        TypeScriptEditor.prototype.onTabChange = function (e) {
            this.updateScript();
            e.value = this.playground.getScript(e.name);
        };

        TypeScriptEditor.prototype.onTabChanged = function (e) {
            this.playground.changeScript(e.name);
        };

        TypeScriptEditor.prototype.onTabAdded = function (e) {
            this.playground.addScript(e.name, e.value ? e.value : "");
        };

        TypeScriptEditor.prototype.onTabRemove = function (e) {
            if (this.playground.scriptCount() == 1) {
                alert("ファイルは最低一つ必要です。");
                e.cancel = true;
                return;
            }
        };

        TypeScriptEditor.prototype.onTabRemoved = function (e) {
            this.playground.removeScript(e.name);
        };

        TypeScriptEditor.prototype.onTabRenamed = function (e) {
            this.playground.renameScript(e.name, e.newName);
        };

        TypeScriptEditor.prototype.onZipStart = function (e) {
            this.updateScript();

            var snapshots = this.playground.host.snapshots;
            var defines = this.playground.defines;
            var build_txt = [];
            build_txt.push("--nolib");
            build_txt.push("--disallowbool");
            build_txt.push("--target ES5");
            build_txt.push("--out out.js");
            for (var i = 0; i < defines.length; i++) {
                e.files.push({
                    name: defines[i].name,
                    buffer: defines[i].value
                });
                build_txt.push(defines[i].name);
            }

            for (var i = 0; i < snapshots.length; i++) {
                e.files.push({
                    name: snapshots[i].fileName,
                    buffer: snapshots[i].text
                });
                if (snapshots[i].fileName.substr(-3) == ".ts")
                    build_txt.push(snapshots[i].fileName);
            }

            e.files.push({
                name: "build.txt",
                buffer: build_txt.join("\n")
            });
            e.files.push({
                name: "build.bat",
                buffer: "tsc @build.txt\npause"
            });
        };

        TypeScriptEditor.prototype.onZipEnded = function (e) {
            if (e.error) {
                alert("エラー: " + e.error);
            }
        };
        return TypeScriptEditor;
    })(jgeditor.Editor);
    jgeditor.TypeScriptEditor = TypeScriptEditor;
})(jgeditor || (jgeditor = {}));
var jgeditor;
(function (jgeditor) {
    var ShortcutManager = (function () {
        function ShortcutManager(editor) {
            this.editor = editor;
            this.key = window["key"];
            this.shortcuts = [];
        }
        ShortcutManager.prototype.add = function (key, method, description, target, params) {
            this.shortcuts.push({
                key: key,
                method: method,
                description: description,
                target: target ? target : this.editor,
                params: params
            });
        };

        ShortcutManager.prototype._activate = function (shortcut) {
            this.key(shortcut.key, function (event, handler) {
                if (typeof shortcut.method == "string") {
                    var ret = shortcut.target[shortcut.method].apply(shortcut.target, shortcut.params);
                    return ret ? false : true;
                }
                return shortcut.method();
            });
        };

        ShortcutManager.prototype.activate = function () {
            var _this = this;
            this.shortcuts.forEach(function (shortcut) {
                _this._activate(shortcut);
            });
        };

        ShortcutManager.prototype.getHelpMessage = function () {
            var ret = [];
            this.shortcuts.forEach(function (shortcut) {
                var keys = shortcut.key.split(/,/g);
                ret.push(keys.join(", ") + ": " + (shortcut.description ? shortcut.description : shortcut.method));
            });
            return ret.join("\n");
        };

        ShortcutManager.prototype.showHelp = function () {
            alert(this.getHelpMessage());
        };
        return ShortcutManager;
    })();
    jgeditor.ShortcutManager = ShortcutManager;
})(jgeditor || (jgeditor = {}));
