//リファクタリングをしたいなぁとか思うわけですよ
declare var AutoComplete:any;
declare var ace:any;
declare var jz:any;
declare var key:any;
module jgeditor {

	export class Editor {
		editor: any;
		game_container_id: string;
		ace_session: AceSessionManager;
		file_sortable: JQuery;
		default_ext: string;
		menu_binder: any;
		_changing_script: boolean;
		messages: IEditorMessages;
		activated_contextmenu: boolean;

		tab_rename: jg.Trigger;
		tab_renamed: jg.Trigger;
		tab_remove: jg.Trigger;
		tab_removed: jg.Trigger;
		tab_change: jg.Trigger;
		tab_changed: jg.Trigger;
		tab_add: jg.Trigger;
		tab_added: jg.Trigger;

		zip_start: jg.Trigger;
		zip_ended: jg.Trigger;
		sorted: jg.Trigger;

		run_start: jg.Trigger;
		run_end: jg.Trigger;
		run_stop: jg.Trigger;

		constructor(public id:string) {
			this.editor = ace.edit(id);
			this.game_container_id = "jgame-con";
			this.ace_session = new AceSessionManager();
			this.file_sortable = $(".file-sortable");
			this.default_ext = "js";
			this.messages = {
				add_tab_prompt: "",
				rename_tab_prompt: "",
				remove_tab_confirm: ""
			}
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
				"file-menu-change-name": (e) => {
					this.renameTabPrompt($(e).text());
				},
				"file-menu-remove": (e) => {
					this.removeTabConfirm($(e).text());
				}
			}
		}

		getNextTab() {
			if (this.file_sortable.find(".file-tab").length == 0)
				return null;
			var next = this.file_sortable.find(".file-tab-active").next(".file-tab");
			if (next.length == 0)
				next = this.file_sortable.find(".file-tab:first");
			return next;
		}
		getPrevTab() {
			if (this.file_sortable.find(".file-tab").length == 0)
				return null;
			var prev = this.file_sortable.find(".file-tab-active").prev(".file-tab");
			if (prev.length == 0)
				prev = this.file_sortable.find(".file-tab:last");
			return prev;
		}

		/** 要keymaster */
		keyhandlerForIframe(e:any) {
			if ("key" in window)
				window["key"].dispatch(e);
		}

		/** 要keymaster */
		keyhandleForIframe() {
			var con = <HTMLIFrameElement>document.getElementById(this.game_container_id);
			con.contentWindow.removeEventListener("keydown", this.keyhandlerForIframe, false);
			con.contentWindow.addEventListener("keydown", this.keyhandlerForIframe, false);
		}

		run(url:string) {
			this.editor.focus();
			var evt = {
				cancel: false,
				url: url
			}
			this.run_start.fire(evt);
			if (evt.cancel)
				return;
			var con = <HTMLIFrameElement>document.getElementById(this.game_container_id);
			con.src = url + (url.indexOf("?") >= 0 ? "&" : "?")+(new Date()).getTime();
			con.onload = () => {
				this.focusGame();
				this.keyhandleForIframe();
				this.run_end.fire({
					url: url
				});
			}
		}

		setTheme(theme:string) {
			this.editor.setTheme(theme)
		}

		setMode(mode:string) {
			this.editor.getSession().setMode(mode);
		}

		getSesssion():any {
			return this.editor.getSession();
		}

		setSession(session:any) {
			this.editor.setSession(session);
		}

		getValue():string {
			return this.editor.getValue();
		}

		focus() {
			this.editor.focus();
			return true;
		}

		focusGame() {
			var con = <HTMLIFrameElement>document.getElementById(this.game_container_id);
			var w = con.contentWindow || con;
			try {
				var container = w.document.getElementById("jgame");
				var childs = container.childNodes;
				for (var i=0; i<childs.length; i++) {
					if (childs[i].className == "input-handler") {
						childs[i].focus();
						return true;
					}
				}
			} catch(ex) {
			}

			w.focus();
			return true;
		}

		stopGame() {
			var con = <HTMLIFrameElement>document.getElementById(this.game_container_id);
			this.run_stop.fire({url: con.src});
			con.src = "about:blank";
			this.focus();
			return true;
		}

		/** 要jsziptools */
		zip(btn:HTMLElement) {
			var evt = {
				cancel: false,
				files: []
			}
			this.zip_start.fire(evt);
			if (evt.cancel)
				return;
			if (!evt.files || evt.files.length == 0)
				return;

			jz.zip.pack({
				files: evt.files,
				level: 5
			}).done((buffer:ArrayBuffer) => {
				var binary = ''
				var bytes = new Uint8Array( buffer )
				var len = bytes.byteLength;
				for (var i = 0; i < len; i++)
					binary += String.fromCharCode( bytes[ i ] )

				var base64String = window.btoa( binary );
				$("#download-link").remove();
				var a = $("<a/>")
					.attr("download", "source.zip")
					.attr("href", "data:application/zip;base64,"+base64String)
					.attr("id", "download-link")
					.text("ダウンロード")
					.click(() => {
						a.remove();
						if (jg.JGUtil.getBrowser().msie)
							alert("IEではZIPダウンロードが出来ません");
					});
				a.insertAfter($(btn));
				this.zip_ended.fire({
					error: false
				});
			}).fail((error:any) => {
				this.zip_ended.fire({
					error: error
				});
			});
		}

		/** 要#file-menuとjquery.contextmenu */
		activateFileContextMenu() {
			this.activated_contextmenu = true;
			var exists_file_tabs = this.file_sortable.find(".file-tab");
			exists_file_tabs["contextMenu"]("file-menu", { bindings: this.menu_binder});
		}

		/** 要jquery ui */
		activateSortable(file_sortable?:JQuery) {
			if (file_sortable)
				this.file_sortable = file_sortable;
			this.file_sortable["sortable"]({
				update: () => {
					var arranged = [];
					this.file_sortable.find(".file-tab").each(function(index, f) {
						arranged.push($(f).text());
					});
					this.sorted.fire({
						tabs: arranged
					});
				}
			});
		}

		activateAddTabUI(add_tab_btn:JQuery, ext_message?:string) {
			if (ext_message)
				this.messages.add_tab_prompt = ext_message;
			add_tab_btn.click(jg.JGUtil.proxy(this.addTabPrompt, this));
		}

		removeTabConfirm(target?: string) {
			if (target === undefined)
				target = this.currentTab();
			var mes = this._createMessage(target+"を削除します。\n本当によろしいですか？", "remove_tab_confirm");
			if (! confirm(mes))
				return true;

			this.removeTab(target);
			return true;
		}

		renameTabPrompt(target?: string) {
			if (target === undefined)
				target = this.currentTab();
			var mes = this._createMessage("変更後の名前を入力してください。", "rename_tab_prompt", true);
			var ret = prompt(mes, target);
			if (!ret)
				return true;

			this.renameTab(target, ret);
			return true;
		}

		addTabPrompt() {
			var mes = this._createMessage("追加するファイル名を入力してください。", "add_tab_prompt", true);
			var ret = prompt(mes, "");
			if (!ret)
				return true;
			if (! this.addTab(ret)) {
				alert("エラー");
				return true;
			}
			this.changeTab(this._getName(ret));
			return true;
		}

		currentTab() {
			return this.file_sortable.find(".file-tab-active").text();
		}

		changeTab(name:string) {
			var active = this.file_sortable.find(".file-tab-active");
			if (active.text() == name)
				return false;

			var target = this.file_sortable.find(".file-tab:contains("+name+")");
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
			var ext = extPos >= 0 ? evt.name.substr(extPos+1).toLowerCase() : "";
			switch(ext) {
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
		}

		changeToNextTab() {
			var next = this.getNextTab();
			if (! next)
				return false;

			this.changeTab(next.text());
			return true;
		}

		changeToPrevTab() {
			var prev = this.getPrevTab();
			if (! prev)
				return false;

			this.changeTab(prev.text());
			return true;
		}

		addTab(name:string, value?:string) {
			name = this._getName(name);
			if (!this._isUniqueName(name))
				return false;
			if (!this._isValidName(name))
				return false;

			var evt = {
				name: name,
				value: value,
				cancel: false
			}
			this.tab_add.fire(evt);
			if (evt.cancel)
				return false;

			var div = $("<div/>").addClass("file-tab").text(evt.name).click((e) => {
				this.changeTab($(e.delegateTarget).text());
			});
			if (this.activated_contextmenu)
				div["contextMenu"]("file-menu", { bindings: this.menu_binder});
			this.file_sortable.append(div);

			this.tab_added.fire({
				name: evt.name,
				value: evt.value
			});

			return true;
		}

		renameTab(name: string, newName: string) {
			newName = this._getName(newName);
			if (! name || ! newName)
				return;

			var evt = {
				name: name,
				newName: newName,
				cancel: false
			}
			this.tab_rename.fire(evt);
			if (evt.cancel)
				return;

			var target = this.file_sortable.find(".file-tab:contains("+evt.name+")");
			if (target.length == 0)
				return;

			this.ace_session.rename(evt.name, evt.newName);

			target.text(evt.newName);
			this.tab_renamed.fire({
				name: evt.name,
				newName: evt.newName
			});
		}

		removeTab(name: string) {
			var evt = {
				name: name,
				cancel: false
			};
			this.tab_remove.fire(evt);
			if (evt.cancel)
				return;

			var target = this.file_sortable.find(".file-tab:contains("+evt.name+")");
			if (target.length == 0)
				return;

			var is_current = target.hasClass("file-tab-active");
			target.remove();
			if (is_current)
				this.changeTab($(this.file_sortable.find(".file-tab")[0]).text());

			this.ace_session.remove(evt.name)

			this.tab_removed.fire({
				name: evt.name
			});
		}

		addInfo(text:string, background:string) {
			this.file_sortable.parent().find(".c").before(
				$("<div/>").addClass("file-info").text(text).css("background", background)
			);
		}

		clearInfo() {
			this.file_sortable.parent().find(".file-info").remove();
		}

		_createMessage(mes: string, message_type?:string, extension?:boolean) {
			if (extension && this.default_ext && this.default_ext.length > 0)
				mes += "\n拡張子を省略すると."+this.default_ext+"がつきます。";
			if (message_type && this.messages[message_type] && this.messages[message_type].length > 0)
				mes += "\n" + this.messages[message_type];
			return mes;
		}

		_isUniqueName(name:string) {
			return this.file_sortable.find(".file-tab:contains("+name+")").length == 0;
		}

		_isValidName(name:string) {
			if (! name)
				return false;

			return name.match(/^[0-9a-zA-Z_\-\.]+$/);
		}

		_getName(name:string) {
			if (name.substr(-1) == ".")
				return name.substr(0, name.length-1);

			if (!this.default_ext || this.default_ext.length == 0)
				return name;

			if (! name)
				return null;

			if (name.indexOf(".") < 0)
				return name + "."+this.default_ext;

			return name;
		}

		_getExtension(name:string) {
			var extPos = name.lastIndexOf(".");
			return extPos >= 0 ? name.substr(extPos+1).toLowerCase() : "";
		}
	}
}