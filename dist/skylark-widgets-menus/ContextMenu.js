/**
 * skylark-widgets-menus - The skylark menu widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-menus/
 * @license MIT
 */
define(["skylark-langx-numerics/Vector2","skylark-domx-geom","skylark-widgets-base/panels/Panel","../menus","./ButtonMenu","./DropdownMenu"],function(t,e,s,i,o,n){"use strict";var h=s.inherit({_construct:function(e){s.prototype._construct.call(this,e,"div");var i=this;this._elm.style.position="absolute",this._elm.style.overflow="visible",this._elm.style.zIndex="300",this._elm.onmouseleave=function(){i.destroy()},this.offset=new t(20,10),this.items=[]},setText:function(t){this.text.setText(t)},removeItem:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},addItem:function(t,e){var s=new o(this);s._elm.style.zIndex="10000",s.setText(t),s.setAlignment(Text.LEFT),s.position.x=25;var i=this;s.setOnClick(function(){e(),i.destroy()}),this.items.push(s)},addMenu:function(t){var e=new n(this);return e.setText(t),e.setDirection(n.LEFT),e.showArrow(),e.setAlignment(Text.LEFT),e.setMargin(25),this.items.push(e),e},updateItems:function(){for(var t=0;t<this.items.length;t++)this.items[t].size.copy(this.size),this.items[t].position.set(0,this.size.y*t),this.items[t].updateInterface()},updateSize:function(){this._elm.style.width=this.size.x+"px",this._elm.style.height=this.size.y*this.items.length+"px",this.updateItems()},updatePosition:function(){this._elm.style.top=this.position.y-this.offset.y+"px",this._elm.style.left=this.position.x-this.offset.x+"px";var t=e.testAxis(this._elm);0!==t.x&&(this._elm.style.left=this.position.x+this.offset.x-this.size.x+"px"),0!==t.y&&(this._elm.style.top=this.position.y-this.offset.y-t.y+"px")}});return h.prototype.addOption=h.prototype.addItem,h.prototype.removeOption=h.prototype.removeItem,h.prototype.updateOption=h.prototype.updateItems,i.ContextMenu=h});
//# sourceMappingURL=sourcemaps/ContextMenu.js.map
