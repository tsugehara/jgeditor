//changed by https://github.com/hi104/typescript-playground-on-ace/blob/master/javascripts/autoComplete.js
define('autocomplete', ['require', 'exports', 'module', 'ace/keyboard/hash_handler', 'ace/range'], function(require, exports, module) {

	var HashHandler = require('ace/keyboard/hash_handler').HashHandler;
	var EventEmitter = require("ace/lib/event_emitter").EventEmitter;
	var AutoCompleteView = require('AutoCompleteView').AutoCompleteView;
	//var TooltipView = require('TooltipView').TooltipView;
	var AceRange = require('ace/range').Range;

	var oop = require("ace/lib/oop");

	exports.AutoComplete = function(editor, script, playground){

		var self = this;

		oop.implement(self, EventEmitter);
		this.handler = new HashHandler();
		this.view = new AutoCompleteView(editor, self);
		//this.tooltip = new TooltipView(editor, self);
		var self = this;
		var onchanged = function(elm) {
			var detail = playground.getCompilationDetail($(elm).data("name"));
			$(elm).find(".label-type").text(detail.type ? detail.type : "");
			self.view.showComment(detail.docComment);
		}
		this.view.on("changed", onchanged);
		this.scriptName = script;
		this._active = false;
		this.inputText =''; //TODO imporve name

		this.isActive = function () {
			return self._active;
		}

		this.show = function () {
			self.listElement = self.view.listElement;
			editor.container.appendChild(self.view.wrap);
			editor.container.appendChild(self.view.wrap2);
			self.listElement.innerHTML = '';
			//editor.container.appendChild(self.tooltip.wrap);
		}

		this.compilation = function(cursor){
			var charIndex = editor.getSession().getDocument().positionToIndex(cursor);
			var text = editor.getSession().getLine(cursor.row).slice(0, cursor.column);
			var noMember = true;
			matches = text.match(/\.([a-zA-Z_0-9\$]*$)/);
			if (matches && matches.length > 0) {
				this.matchText = matches[1];
				noMember = false;
				charIndex -= this.matchText.length;
			} else {
				matches = text.match(/[a-zA-Z_0-9\$]*$/);
				this.matchText = matches[0];
			}

			var compilations = playground.getCompilation(this.matchText, charIndex, noMember);
			var coords = editor.renderer.textToScreenCoordinates(cursor.row, cursor.column);

			self.view.setPosition(coords);

			if (! compilations)
				compilations = [];

			self.showCompilation(compilations);

			var hint = playground.getSignature();
			if (hint) {
				//self.tooltip.setPosition(coords);
				//self.showHint(hint);
				this.view.showParameterHint(hint.formal[hint.activeFormal]);
			} else {
				this.view.hideParameterHint();
			}

			return compilations.length;
		}

		this.refreshCompilation = function(e){
			var cursor = editor.getCursorPosition();
			if(e.data.action  == "insertText"){
				cursor.column += 1;
			} else if (e.data.action  == "removeText"){
				if(e.data.text == '\n'){
					self.deactivate();
					return;
				}
			}

			self.compilation(cursor);
		}

		this.showHint = function(hint) {
			if (hint.formal.length > 0) {
				var formal = hint.formal[hint.activeFormal];
				//self.tooltip.show(formal.signatureInfo);
			}
		}

		this.showCompilation = function(compilations){
			if (compilations.length > 0){
				self.view.show();
				var html = '';
				// TODO use template
				for (var i=0, len=compilations.length; i<len; i++) {
					var info = compilations[i];
					var name =  '<span class="label-name">' + info.name + '</span>';
					var type =  '<span class="label-type">' + /*info.type*/"" + '</span>';
					var kind =  '<span class="label-kind label-kind-'+ info.kind + '">' + info.kind.charAt(0) + '</span>';

					html += '<li data-name="' + info.name + '">' + kind + name + type + '</li>';
				}
				self.listElement.innerHTML = html;
				self.view.ensureFocus();
			}else{
				self.view.hide();
				//self.tooltip.hide();
			}
		}

		this.active = function () {
			self.show();
			var count = self.compilation(editor.getCursorPosition());
			if(!(count > 0)){
				self.view.hide();
				//self.tooltip.hide();
				return;
			}
			editor.keyBinding.addKeyboardHandler(self.handler);
		}

		this.deactivate = function() {
			editor.keyBinding.removeKeyboardHandler(self.handler);
		}

		this.handler.attach = function(){
			editor.addEventListener("change", self.refreshCompilation);
			self._emit("attach", {sender: self});
			self._active = true;
		}

		this.handler.detach = function(){
			editor.removeEventListener("change", self.refreshCompilation);
			self.view.hide();
			//self.tooltip.hide();
			self._emit("detach", {sender: self});
			self._active = false;
		}

		this.handler.handleKeyboard = function(data, hashId, key, keyCode) {
			if (hashId == -1) {

				if(" -=,[]_/()!';:<>".indexOf(key) != -1){ //TODO
					self.deactivate();
				}
				return null;
			}

			var command = self.handler.findKeyCommand(hashId, key);

			if (!command){
				var defaultCommand = editor.commands.findKeyCommand(hashId, key);
				if(defaultCommand){
					if(defaultCommand.name == "backspace")
						return null;

					self.deactivate();
				}
				return null;
			}

			if (typeof command != "string") {
				var args = command.args;
				command = command.command;
			}

			if (typeof command == "string") {
				command = this.commands[command];
			}

			return {command: command, args: args};
		}


		exports.Keybinding = {
			"Up" : "focusprev",
			"Down" : "focusnext",
			"Esc" : "cancel",
			"Return|Tab": "insertComplete"
		}

		this.handler.bindKeys(exports.Keybinding);

		this.handler.addCommands({
			focusnext: function(editor){
				self.view.focusNext();
			},

			focusprev: function(editor){
				self.view.focusPrev();
			},

			cancel: function(editor){
				self.deactivate();
			},

			insertComplete: function(editor){
				editor.removeEventListener("change", self.refreshCompilation);
				var curr = self.view.current();

				if(curr) {
					if (self.matchText.length)
						for(var i = 0; i < self.matchText.length; i++)
							editor.remove("left");

					editor.insert($(curr).data("name"));
				}

				self.deactivate();
			}
		})
	};
});