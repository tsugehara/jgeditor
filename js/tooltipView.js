//changed by https://github.com/hi104/typescript-playground-on-ace/blob/master/javascripts/autoCompleteView.js
(function() {
	var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	define('TooltipView', ['require', 'exports', 'module'], function(require, exports, module) {

		var TooltipView;

		TooltipView = (function() {
			function TooltipView(editor, autoComplete) {
				this.editor = editor;
				this.autoComplete = autoComplete;
				this.init();
			}

			(function() {
				this.init = function() {
					this.wrap = document.createElement('div');
					$(this.wrap)
						.addClass("ace_tooltip")
						.css("display", "none")
						.css("position", "fixed")
						.css("z-index", "999")
						.css("overflow", "hidden")
						.css("background", "white")
						.css("border", "1px solid #ccc")
						.css("height", "1em")
					;
				}

				this.show = function(html) {
					if (typeof html == "string") {
						this.wrap.innerHTML = html;
					} else if (html) {
						this.wrap.innerHTML = "";
						this.wrap.appendChild(html);
					}

					return this.wrap.style.display = 'block';
				}

				this.hide = function() {
					return this.wrap.style.display = 'none';
				}

				this.setPosition = function(coords) {
					var bottom, editorBottom, top;
					top = coords.pageY - 20;
					editorBottom = $(this.editor.container).offset().top + $(this.editor.container).height();
					bottom = top + $(this.wrap).height();
					if (bottom < editorBottom) {
						this.wrap.style.top = top + 'px';
						return this.wrap.style.left = coords.pageX + 'px';
					} else {
						this.wrap.style.top = (top - $(this.wrap).height() - 20) + 'px';
						return this.wrap.style.left = coords.pageX + 'px';
					}
				}
			}).call(TooltipView.prototype);


			return TooltipView;

		})();
		exports.TooltipView = TooltipView;
		return exports;
	});

}).call(this);
