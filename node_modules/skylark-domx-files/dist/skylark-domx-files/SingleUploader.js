/**
 * skylark-domx-files - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-emitter","skylark-langx-async/Deferred","skylark-domx-velm","skylark-domx-plugins","./files","./dropzone","./pastezone","./picker"],function(e,l,i,s,t){return t.SingleUploader=class extends s.Plugin{get klassName(){return"SingleUploader"}get pluginName(){return"lark.singleuploader"}get options(){return{selectors:{picker:".file-picker",dropzone:".file-dropzone",pastezone:".file-pastezone",startUploads:".start-uploads",cancelUploads:".cancel-uploads"}}}constructor(e,l){super(e,l),this._velm=i(this._elm),this._initFileHandlers()}_initFileHandlers(){var e=this,l=this.options.selectors,i=l.dropzone,s=l.pastezone,t=l.picker;i&&this._velm.$(i).dropzone({dropped:function(l){e._addFile(l[0])}}),s&&this._velm.$(s).pastezone({pasted:function(l){e._addFile(l[0])}}),t&&this._velm.$(t).picker({multiple:!0,picked:function(l){e._addFile(l[0])}})}_addFile(e){this.emit("added",e)}destroy(){}}});
//# sourceMappingURL=sourcemaps/SingleUploader.js.map
