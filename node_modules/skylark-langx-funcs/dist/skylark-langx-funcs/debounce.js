/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./funcs"],function(n){return n.debounce=function(n,u){var e;return function(){var t=this,i=arguments;e&&clearTimeout(e),e=setTimeout(function(){e=null,n.apply(t,i)},u)}}});
//# sourceMappingURL=sourcemaps/debounce.js.map
