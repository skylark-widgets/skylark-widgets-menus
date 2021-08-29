/**
 * skylark-widgets-menus - The skylark menu widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-menus/
 * @license MIT
 */
define(["skylark-langx-numerics/vector2","skylark-domx-geom","skylark-widgets-base/widget","skylark-widgets-base/panels/panel","skylark-widgets-base/mixins/text-mixin","./menus","./button-menu"],function(t,e,i,s,n,l,o){"use strict";var h=i.inherit({...n,_construct:function(e){i.prototype._construct.call(this,e,"div");var n=this.getSkin();this._elm.style.backgroundColor=Editor.theme.buttonColor,this._elm.style.cursor="pointer",this._elm.style.pointerEvents="auto",this._buildText(),this.preventDragEvents(),this.panel=new s(e,"div"),this.panel._elm.style.overflow="visible",this.panel._elm.style.display="none",this.panel._elm.style.zIndex="300",this.icon=null,this.arrow=document.createElement("img"),this.arrow.style.display="none",this.arrow.style.position="absolute",this.arrow.style.right="5px",this.arrow.style.top="3px",this.arrow.style.width="12px",this.arrow.style.height="12px",this.arrow.src=n.arrowRightImageUrl,this._elm.appendChild(this.arrow),this.direction=h.DOWN,this.expanded=!1,this.itemsSize=new t(150,20),this.items=[];var l=this;this._elm.onmouseenter=function(){l.setExpanded(!0),l._elm.style.backgroundColor=n.buttonOverColor},this._elm.onmouseleave=function(){l.setExpanded(!1),l._elm.style.backgroundColor=n.buttonColor},this.panel._elm.onmouseenter=function(){l.setExpanded(!0)},this.panel._elm.onmouseleave=function(){l.setExpanded(!1)}},setDirection:function(t){this.direction=t},showArrow:function(){this.arrow.style.display="block"},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.display="block",this.icon.style.position="absolute",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t},removeItem:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},addItem:function(t,e,i){var s=new o(this.panel);s._elm.style.zIndex="200",s.setText(t),s.setAlignment(n.LEFT),s.position.set(25,0);var l=this;return s.setOnClick(function(){e(),l.setExpanded(!1)}),void 0!==i&&s.setIcon(i),this.items.push(s),s},addMenu:function(t,e){var i=new h(this.panel);return i.setText(t),i.setDirection(h.LEFT),i.showArrow(),i.setAlignment(n.LEFT),i.setMargin(25),void 0!==e&&i.setIcon(e),this.items.push(i),i},setExpanded:function(t){if(this.expanded=t,this.expanded){if(this.panel._elm.style.display="block",this.direction===h.DOWN)this.panel._elm.style.top=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px",0!==(i=e.testAxis(this.panel)).y&&(this.panel._elm.style.top=null,this.panel._elm.style.bottom=this.position.y+this.size.y+"px"),0!==i.x&&(this.panel._elm.style.left=this.position.x-i.x+"px");else if(this.direction===h.UP){this.panel._elm.style.bottom=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px",0!==(i=e.testAxis(this.panel)).y&&(this.panel._elm.style.bottom=null,this.panel._elm.style.top=this.position.y+this.size.y+"px"),0!==i.x&&(this.panel._elm.style.left=this.position.x-i.x+"px")}else if(this.direction===h.LEFT){this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x+this.size.x+"px",0!==(i=e.testAxis(this.panel)).x&&(this.panel._elm.style.left=this.position.x-this.size.x+"px"),0!==i.y&&(this.panel._elm.style.top=this.position.y-i.y+"px")}else if(this.direction===h.RIGHT){var i;this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x-this.size.x+"px",0!==(i=e.testAxis(this.panel)).x&&(this.panel._elm.style.left=this.position.x+this.size.x+"px"),0!==i.y&&(this.panel._elm.style.top=this.position.y-i.y+"px")}}else this.panel._elm.style.display="none"},updateItems:function(){for(var t=0;t<this.items.length;t++)this.items[t].size.set(this.itemsSize.x,this.itemsSize.y),this.items[t].position.set(0,this.itemsSize.y*t),this.items[t].updateInterface();this.panel._elm.style.width=this.size.x+"px",this.panel._elm.style.height=this.itemsSize.y*this.items.length+"px"},destroy:function(){i.prototype.destroy.call(this),this.parent.destroy()},updateSize:function(){n.updateSize.call(this),this.updateItems()}});return h.DOWN=0,h.UP=1,h.LEFT=2,h.RIGHT=3,h.prototype.addOption=h.prototype.addItem,h.prototype.updateOptions=h.prototype.updateItems,l.DropdownMenu=h});
//# sourceMappingURL=sourcemaps/dropdown-menu.js.map
