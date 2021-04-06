/**
 * skylark-domx-fx - The skylark fx library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-eventer","./fx"],function(n,t,r){return r.emulateTransitionEnd=function(n,r){var e=!1;return t.one(n,"transitionEnd",function(){e=!0}),setTimeout(function(){e||t.trigger(n,browser.support.transition.end)},r),this}});
//# sourceMappingURL=sourcemaps/emulateTransitionEnd.js.map
