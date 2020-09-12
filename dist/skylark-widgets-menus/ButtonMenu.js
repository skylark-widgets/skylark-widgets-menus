/**
 * skylark-widgets-menus - The skylark menu widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-menus/
 * @license MIT
 */
define(["skylark-widgets-base/Widget","skylark-widgets-base/mixins/TextMixin","./menus"],function(t,e,i){"use strict";var s=t.inherit({_construct:function(e){t.prototype._construct.call(this,e,"div"),this._elm.style.cursor="pointer",this.preventDragEvents();var i=this.getSkin();this._elm.style.color=i.textColor,this._elm.style.display="flex",this._buildText(),this.setColor(i.buttonColor,i.buttonOverColor),this.span.style.textIndent="25px",this.icon=null,this.setColor(i.buttonColor,i.buttonOverColor)},setColor:function(t,e){this._elm.style.backgroundColor=t,this._elm.onmouseenter=function(){this.style.backgroundColor=e},this._elm.onmouseleave=function(){this.style.backgroundColor=t}},setStyles:function(t,e){for(var i in t)this._elm.style[i]=t[i];this._elm.onmouseenter=function(){for(var t in e)this.style[t]=e[t]},this._elm.onmouseleave=function(){for(var e in t)this.style[e]=t[e]}},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.position="absolute",this.icon.style.display="block",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t},...e});return i.ButtonMenu=s});
//# sourceMappingURL=sourcemaps/ButtonMenu.js.map
