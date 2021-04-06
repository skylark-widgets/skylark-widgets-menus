define([
	"skylark-widgets-base/Widget",
	"skylark-widgets-base/mixins/TextMixin",
	"./menus"
],function(Widget,TextMixin,menus){
	"use strict";

	/**
	 * Button used in dropdown menus, context menus, etc.
	 * 
	 * The button has text and its possible to add a icon.
	 *
	 * @class ButtonMenu
	 * @extends {Widget}
	 * @param {Widget} parent Parent widget.
	 */
	var ButtonMenu = Widget.inherit({

		_construct : function (parent) {
			Widget.prototype._construct.call(this, parent, "div");

			this._elm.style.cursor = "pointer";

			this.preventDragEvents();


			var skin = this.getSkin();

			//this._elm.style.color = Editor.theme.textColor;
			this._elm.style.color = skin.textColor;
			this._elm.style.display = "flex";
			
			/*
			//Span
			this.span = document.createElement("span");
			this.span.style.overflow = "hidden";
			this._elm.appendChild(this.span);

			//Text
			this.text = document.createTextNode("");
			this.span.appendChild(this.text);


			//this.setColor(Editor.theme.buttonColor, Editor.theme.buttonOverColor);
			this.setColor(skin.buttonColor, skin.buttonOverColor);
			this.allowWordBreak(false);
			this.setVerticalAlignment(TextMixin.CENTER);
			this.setAlignment(TextMixin.CENTER);
			*/

			this._buildText();

			//this.setColor(Editor.theme.buttonColor, Editor.theme.buttonOverColor);
			this.setColor(skin.buttonColor, skin.buttonOverColor);

			this.span.style.textIndent = "25px";

			/**
			 * Icon element.
			 *
			 * @attribute icon
			 * @type {DOM}
			 */
			this.icon = null;


			//this.setColor(Editor.theme.buttonColor, Editor.theme.buttonOverColor);
			this.setColor(skin.buttonColor, skin.buttonOverColor);
		},

		/**
		 * Set button color.
		 * 
		 * When mouse is over the button uses the overColor, when the mouse gets outside of the button it uses the base color.
		 * 
		 * @method setColor
		 * @param {String} baseColor CSS color for the button background.
		 * @param {String} overColor CSS color for the button when mouse is over it.
		 */
		setColor : function(baseColor, overColor){
			this._elm.style.backgroundColor = baseColor;

			this._elm.onmouseenter = function()	{
				this.style.backgroundColor = overColor;
			};

			this._elm.onmouseleave = function()	{
				this.style.backgroundColor = baseColor;
			};
		},

		/**
		 * Set button styles, the style can be descriped in a object.
		 *
		 * Here is an exaple of a style object:
		 * {
		 * backgroundColor: "#FF0000",
		 * color: "#FFFFFF"
		 * }
		 *
		 * @method setColor
		 * @param {Object} baseStyle Object with the style to be applied as base.
		 * @param {Object} overStyle Object with the style to be applied when mouse is over.
		 */
		setStyles : function(baseStyle, overStyle)	{
			for(var i in baseStyle)
			{
				this._elm.style[i] = baseStyle[i];
			}

			this._elm.onmouseenter = function()	{
				for(var i in overStyle)
				{
					this.style[i] = overStyle[i];
				}
			};

			this._elm.onmouseleave = function()	{
				for(var i in baseStyle)	{
					this.style[i] = baseStyle[i];
				}
			};
		},

		/**
		 * Set button icon image URL.
		 *
		 * Creates the element if it still doesnt exist.
		 *
		 * @method setIcon
		 * @param {String} icon Image URL.
		 */
		setIcon : function(icon) 	{
			if(this.icon === null) 	{
				this.icon = document.createElement("img");
				this.icon.style.position = "absolute";
				this.icon.style.display = "block";
				this.icon.style.left = "5px";
				this.icon.style.top = "3px";
				this.icon.style.width = "12px";
				this.icon.style.height = "12px";
				this._elm.appendChild(this.icon);
			}
			
			this.icon.src = icon;
		},

		...TextMixin
		
	});

	return menus.ButtonMenu = ButtonMenu;
});