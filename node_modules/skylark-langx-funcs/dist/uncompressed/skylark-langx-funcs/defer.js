define([
	"./funcs"
],function(funcs){
	function defer(fn) {
        if (requestAnimationFrame) {
            requestAnimationFrame(fn);
        } else {
            setTimeoutout(fn);
        }
        return this;
    }

    return funcs.defer = defer;
})