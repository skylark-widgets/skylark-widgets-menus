define([
    "skylark-langx/langx",
    "skylark-domx-eventer",
    "./fx"
],function(langx,eventer,fx) {
    
    function emulateTransitionEnd(elm,duration) {
        var called = false;
        eventer.one(elm,'transitionEnd', function () { 
            called = true;
        })
        var callback = function () { 
            if (!called) {
                eventer.trigger(elm,browser.support.transition.end) 
            }
        };
        setTimeout(callback, duration);
        
        return this;
    } 



    return fx.emulateTransitionEnd = emulateTransitionEnd;
});