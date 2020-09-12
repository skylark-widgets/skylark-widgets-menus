/**
 * skylark-widgets-menus - The skylark menu widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-menus/
 * @license MIT
 */
define(["skylark-widgets-base/Widget","skylark-widgets-base/mixins/TextMixin","../menus"],function(t,i,e){"use strict";var o=t.inherit({_construct:function(i){t.prototype._construct.call(this,i,"div"),this._elm.style.cursor="pointer",this.preventDragEvents();var e=this.getSkin();this._elm.style.color=e.textColor,this._elm.style.display="flex",this._buildText(),this.setColor(e.buttonColor,e.buttonOverColor),this.span.style.textIndent="25px",this.icon=null,this.setColor(e.buttonColor,e.buttonOverColor)},setColor:function(t,i){this._elm.style.backgroundColor=t,this._elm.onmouseenter=function(){this.style.backgroundColor=i},this._elm.onmouseleave=function(){this.style.backgroundColor=t}},setStyles:function(t,i){for(var e in t)this._elm.style[e]=t[e];this._elm.onmouseenter=function(){for(var t in i)this.style[t]=i[t]},this._elm.onmouseleave=function(){for(var i in t)this.style[i]=t[i]}},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.position="absolute",this.icon.style.display="block",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t},...i});return e.ButtonMenu=o});var ButtonText=Button.inherit({_construct:function(t){},...TextMixin});
//# sourceMappingURL=sourcemaps/ButtonMenu.js.map
