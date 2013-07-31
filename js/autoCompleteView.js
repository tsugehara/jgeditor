//changed by https://github.com/hi104/typescript-playground-on-ace/blob/master/javascripts/autoCompleteView.js
(function() {
	var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	define('AutoCompleteView', ['require', 'exports', 'module', 'ace/lib/event', "ace/lib/oop", "ace/lib/event_emitter"], function(require, exports, module) {

		var AutoCompleteView, selectedClassName;
		var oop = require("ace/lib/oop");
		var EventEmitter = require("ace/lib/event_emitter").EventEmitter;

		selectedClassName = 'ace_autocomplete_selected';
		AutoCompleteView = (function() {
			function AutoCompleteView(editor, autoComplete) {
				this.editor = editor;
				this.autoComplete = autoComplete;
				this.init();
			}

			(function() {
				oop.implement(this, EventEmitter);

				this.init = function() {
					this.wrap = document.createElement('div');
					this.listWrap = document.createElement('div');
					this.listElement = document.createElement('ul');
					this.listElement.style.listStyleType = 'none';
					this.listWrap.appendChild(this.listElement);
					var styles = {
						display: "none",
						position: "fixed",
						"z-index": "1000",
						overflow: "hidden",
						background: "white",
						height: "226px",
						border: "1px solid #ccc"
					}
					this.listWrap.style.overflow = "hidden";
					$(this.wrap)
						.css(styles)
						.css("overflow", "hidden")
						.css("width", "402px")
						.addClass("ace_autocomplete")
						.append($("<div/>").addClass("hint"))
						.append(this.listWrap)
					;

					this.wrap2 = document.createElement('div');
					$(this.wrap2)
						.append($("<div/>").addClass("hint"))
						.append($("<div/>").addClass("comment"))
						.css(styles)
						.css("width", $(window).width() - 700+"px")
						.css("padding", "px")
						.css("overflow-x", "hidden")
						.css("overflow-y", "scroll")
					;

					var wrapper = $(this.wrap).add(this.wrap2);
					wrapper.find(".hint")
						.css("padding", "2px")
						.css("display", "none")
						.css("border-bottom", "1px solid #ccc")
						.css("margin-bottom", "2px")
						.css("background-color", "white")
					;
				}

				this.show = function() {
					this.wrap.style.display = 'block';
					this.wrap2.style.display = "block";
				}

				this.hide = function() {
					this.wrap.style.display = 'none';
					this.wrap2.style.display = "none";
				}

				this.setPosition = function(coords) {
					var top = coords.pageY + 20;
					var editorBottom = $(this.editor.container).offset().top + $(this.editor.container).height();
					var bottom = top + $(this.wrap).height();
					if (bottom < editorBottom) {
						this.wrap.style.top = top + 'px';
						this.wrap.style.left = coords.pageX + 'px';
					} else {
						this.wrap.style.top = (top - $(this.wrap).height() - 20) + 'px';
						this.wrap.style.left = coords.pageX + 'px';
					}
					var left = parseInt(this.wrap.style.left)+400;
					$(this.wrap2)
						.css("left", left)
						.css("top", this.wrap.style.top)
						.css("width", Math.max($(window).width()-left-50, 100));
				}

				this.current = function() {
					var children = this.listElement.childNodes;
					for (var i in children) {
						var child = children[i];
						if (child.className === selectedClassName) return child;
					}
					return null;
				}

				this.focusNext = function() {
					var curr = this.current();
					var focus = curr.nextSibling;
					if (focus) {
						curr.className = '';
						focus.className = selectedClassName;
						return this.adjustPosition();
					}
				};

				this.focusPrev = function() {
					var curr = this.current();
					var focus = curr.previousSibling;
					if (focus) {
						curr.className = '';
						focus.className = selectedClassName;
						return this.adjustPosition();
					}
				}

				this.ensureFocus = function() {
					if (!this.current()) {
						if (this.listElement.firstChild) {
							this.listElement.firstChild.className = selectedClassName;
							return this.adjustPosition();
						}
					}
				}

				this.adjustPosition = function() {
					var elm = this.current();
					this._signal("changed", elm);
					if (elm) {
						var newMargin = '';
						var wrapHeight = $(this.wrap).height();
						var elmOuterHeight = $(elm).outerHeight();
						var preMargin = parseInt($(this.listElement).css("margin-top"));
						var pos = $(elm).position();

						var hint = $(this.wrap).find(".hint");
						if (hint.css("display") == "block") {
							var hintHeight = hint.height() + 6;
							wrapHeight -= hintHeight;
							pos.top -= hintHeight;
						}

						if (pos.top >= (wrapHeight - elmOuterHeight)) {
							newMargin = (preMargin - elmOuterHeight);
							$(this.listElement).css("margin-top", newMargin);
						}
						if (pos.top < 0) {
							newMargin = (-pos.top + preMargin);
							$(this.listElement).css("margin-top", newMargin);
						}
					}
				}

				this.showComment = function(docComment) {
					var self = this;
					var comment = $(self.wrap2).find(".comment");
					comment.html("");
					if (! docComment || docComment.length == 0) {
						return;
					}
					var lines = docComment.split(/\n/g);
					lines.forEach(function(line) {
						comment.append($("<div/>").text(line));
					});
				}

				this.hideParameterHint = function() {
					$(this.wrap).add(this.wrap2).find(".hint").css("display", "none");
				}

				this.showParameterHint = function(formal) {
					$(this.wrap).find(".hint")
						.html("")
						.append(
							$("<div/>").text(formal.signatureInfo)
						)
						.append(
							$("<div/>").text(formal.docComment)
						)
						.css("display", "block")
					;
					var paramsDoc = $("<div/>");
					for (var i=0; i<formal.parameters.length; i++) {
						var p = formal.parameters[i];
						paramsDoc.append(
							$("<div/>").append(
								$("<span/>").css("font-weight", "bold").text(p.name)
							)
							.append(
								$("<span/>").text(": "+p.docComment)
							)
						);
					}
					if (formal.parameters.length > 0) {
						var hintComment = $(this.wrap2).find(".hint");
						hintComment
							.html("")
							.css("display", "block")
						;
						hintComment.append(paramsDoc);
					}
				}
			}).call(AutoCompleteView.prototype);


			return AutoCompleteView;

		})();
		exports.AutoCompleteView = AutoCompleteView;
		return exports;
	});

}).call(this);
