goog.provide('threeagent.impl.scene');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.scene !== 'undefined') && (typeof threeagent.impl.scene.contexts !== 'undefined')){
} else {
threeagent.impl.scene.contexts = [];
}

/**
* @constructor
*/
threeagent.impl.scene.Context = (function (virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,clock,renderer,beforeRenderCb,afterRenderCb){
this.virtualScene = virtualScene;
this.sceneRoot = sceneRoot;
this.domRoot = domRoot;
this.animateFn = animateFn;
this.canvas = canvas;
this.camera = camera;
this.clock = clock;
this.renderer = renderer;
this.beforeRenderCb = beforeRenderCb;
this.afterRenderCb = afterRenderCb;
});

(threeagent.impl.scene.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"virtualScene","virtualScene",992990126,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("vscene","Scene","vscene/Scene",658119375,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"sceneRoot","sceneRoot",1033417013,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("vscene","Node","vscene/Node",1790107141,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"domRoot","domRoot",-591277325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"animateFn","animateFn",1982297624,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"beforeRenderCb","beforeRenderCb",1113466702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"afterRenderCb","afterRenderCb",-28620285,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null);
}));

(threeagent.impl.scene.Context.cljs$lang$type = true);

(threeagent.impl.scene.Context.cljs$lang$ctorStr = "threeagent.impl.scene/Context");

(threeagent.impl.scene.Context.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"threeagent.impl.scene/Context");
}));

/**
 * Positional factory function for threeagent.impl.scene/Context.
 */
threeagent.impl.scene.__GT_Context = (function threeagent$impl$scene$__GT_Context(virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,clock,renderer,beforeRenderCb,afterRenderCb){
return (new threeagent.impl.scene.Context(virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,clock,renderer,beforeRenderCb,afterRenderCb));
});

threeagent.impl.scene.create_object = (function threeagent$impl$scene$create_object(node_data){
var comp_config = new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(node_data);
var obj = threeagent.impl.component.render_component(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node_data),comp_config);
threeagent.impl.threejs.set_position_BANG_(obj,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(node_data));

threeagent.impl.threejs.set_rotation_BANG_(obj,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(node_data));

threeagent.impl.threejs.set_scale_BANG_(obj,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(node_data));

return obj;
});
threeagent.impl.scene.set_node_object = (function threeagent$impl$scene$set_node_object(context,node,node_data,obj){
(node.threejs = obj);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node_data))){
return (context.camera = obj);
} else {
return null;
}
});
threeagent.impl.scene.add_node = (function threeagent$impl$scene$add_node(context,parent_object,node){
try{var node_data = node.data;
var comp_config = new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(node_data);
var obj = threeagent.impl.scene.create_object(node_data);
threeagent.impl.scene.set_node_object(context,node,node_data,obj);

parent_object.add(obj);

node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(threeagent.impl.scene.add_node,context,obj));

obj.dispatchEvent(({"type": "on-added"}));

var temp__5735__auto___26222 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5735__auto___26222)){
var callback_26223 = temp__5735__auto___26222;
(callback_26223.cljs$core$IFn$_invoke$arity$1 ? callback_26223.cljs$core$IFn$_invoke$arity$1(obj) : callback_26223.call(null,obj));
} else {
}

return obj;
}catch (e26198){var e = e26198;
threeagent.impl.util.log("Failed to add node");

threeagent.impl.util.log(e);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}});
threeagent.impl.scene.remove_node_BANG_ = (function threeagent$impl$scene$remove_node_BANG_(node){
var obj = node.threejs;
var parent_obj = node.parent.threejs;
obj.dispatchEvent(({"type": "on-removed"}));

var temp__5735__auto___26224 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5735__auto___26224)){
var callback_26225 = temp__5735__auto___26224;
(callback_26225.cljs$core$IFn$_invoke$arity$1 ? callback_26225.cljs$core$IFn$_invoke$arity$1(obj) : callback_26225.call(null,obj));
} else {
}

parent_obj.remove(obj);

return node.for_each_child(threeagent.impl.scene.remove_node_BANG_);
});
threeagent.impl.scene.init_scene = (function threeagent$impl$scene$init_scene(context,virtual_scene,scene_root){
return threeagent.impl.scene.add_node(context,scene_root,virtual_scene.root);
});
threeagent.impl.scene.diff_data = (function threeagent$impl$scene$diff_data(o,n){
var this$ = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(n))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(n)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,n], null):null);
var position = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(n)))?new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(n):null);
var rotation = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(n)))?new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(n):null);
var scale = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(n)))?new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(n):null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rotation], null);
});
threeagent.impl.scene.update_node_BANG_ = (function threeagent$impl$scene$update_node_BANG_(context,node,old_data,new_data){
var diff = threeagent.impl.scene.diff_data(old_data,new_data);
var old_obj = node.threejs;
var metadata = node.meta;
var this$ = new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(diff);
if(cljs.core.truth_(this$)){
try{var vec__26200 = this$;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26200,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26200,(1),null);
var parent_obj = old_obj.parent;
var children = old_obj.children;
var new_obj = threeagent.impl.scene.create_object(new_data);
old_obj.dispatchEvent(({"type": "on-removed"}));

var temp__5735__auto___26227 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5735__auto___26227)){
var callback_26228 = temp__5735__auto___26227;
(callback_26228.cljs$core$IFn$_invoke$arity$1 ? callback_26228.cljs$core$IFn$_invoke$arity$1(old_obj) : callback_26228.call(null,old_obj));
} else {
}

threeagent.impl.scene.set_node_object(context,node,new_data,new_obj);

parent_obj.remove(old_obj);

parent_obj.add(new_obj);

if(cljs.core.truth_(node.terminal_QMARK_())){
} else {
var seq__26203_26229 = cljs.core.seq(children);
var chunk__26204_26230 = null;
var count__26205_26231 = (0);
var i__26206_26232 = (0);
while(true){
if((i__26206_26232 < count__26205_26231)){
var child_26233 = chunk__26204_26230.cljs$core$IIndexed$_nth$arity$2(null,i__26206_26232);
new_obj.add(child_26233);


var G__26234 = seq__26203_26229;
var G__26235 = chunk__26204_26230;
var G__26236 = count__26205_26231;
var G__26237 = (i__26206_26232 + (1));
seq__26203_26229 = G__26234;
chunk__26204_26230 = G__26235;
count__26205_26231 = G__26236;
i__26206_26232 = G__26237;
continue;
} else {
var temp__5735__auto___26238 = cljs.core.seq(seq__26203_26229);
if(temp__5735__auto___26238){
var seq__26203_26239__$1 = temp__5735__auto___26238;
if(cljs.core.chunked_seq_QMARK_(seq__26203_26239__$1)){
var c__4591__auto___26240 = cljs.core.chunk_first(seq__26203_26239__$1);
var G__26241 = cljs.core.chunk_rest(seq__26203_26239__$1);
var G__26242 = c__4591__auto___26240;
var G__26243 = cljs.core.count(c__4591__auto___26240);
var G__26244 = (0);
seq__26203_26229 = G__26241;
chunk__26204_26230 = G__26242;
count__26205_26231 = G__26243;
i__26206_26232 = G__26244;
continue;
} else {
var child_26245 = cljs.core.first(seq__26203_26239__$1);
new_obj.add(child_26245);


var G__26246 = cljs.core.next(seq__26203_26239__$1);
var G__26247 = null;
var G__26248 = (0);
var G__26249 = (0);
seq__26203_26229 = G__26246;
chunk__26204_26230 = G__26247;
count__26205_26231 = G__26248;
i__26206_26232 = G__26249;
continue;
}
} else {
}
}
break;
}
}

new_obj.dispatchEvent(({"type": "on-added"}));

var temp__5735__auto__ = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5735__auto__)){
var callback = temp__5735__auto__;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(new_obj) : callback.call(null,new_obj));
} else {
return null;
}
}catch (e26199){var ex = e26199;
threeagent.impl.util.log("Failed to update node due to error");

threeagent.impl.util.log(ex);

return threeagent.impl.util.log(node);
}} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(diff))){
threeagent.impl.threejs.set_position_BANG_(old_obj,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(diff));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(diff))){
threeagent.impl.threejs.set_rotation_BANG_(old_obj,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(diff));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(diff))){
return threeagent.impl.threejs.set_scale_BANG_(old_obj,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(diff));
} else {
return null;
}
}
});
threeagent.impl.scene.apply_change_BANG_ = (function threeagent$impl$scene$apply_change_BANG_(context,p__26207){
var vec__26208 = p__26207;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26208,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26208,(1),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26208,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26208,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),action)){
return threeagent.impl.scene.add_node(context,node.parent.threejs,node);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),action)){
return threeagent.impl.scene.remove_node_BANG_(node);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),action)){
return threeagent.impl.scene.update_node_BANG_(context,node,old,new$);
} else {
return null;
}
}
}
});
threeagent.impl.scene.apply_virtual_scene_changes_BANG_ = (function threeagent$impl$scene$apply_virtual_scene_changes_BANG_(context,changelog){
var seq__26211 = cljs.core.seq(changelog);
var chunk__26212 = null;
var count__26213 = (0);
var i__26214 = (0);
while(true){
if((i__26214 < count__26213)){
var change = chunk__26212.cljs$core$IIndexed$_nth$arity$2(null,i__26214);
threeagent.impl.scene.apply_change_BANG_(context,change);


var G__26251 = seq__26211;
var G__26252 = chunk__26212;
var G__26253 = count__26213;
var G__26254 = (i__26214 + (1));
seq__26211 = G__26251;
chunk__26212 = G__26252;
count__26213 = G__26253;
i__26214 = G__26254;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26211);
if(temp__5735__auto__){
var seq__26211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26211__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__26211__$1);
var G__26255 = cljs.core.chunk_rest(seq__26211__$1);
var G__26256 = c__4591__auto__;
var G__26257 = cljs.core.count(c__4591__auto__);
var G__26258 = (0);
seq__26211 = G__26255;
chunk__26212 = G__26256;
count__26213 = G__26257;
i__26214 = G__26258;
continue;
} else {
var change = cljs.core.first(seq__26211__$1);
threeagent.impl.scene.apply_change_BANG_(context,change);


var G__26259 = cljs.core.next(seq__26211__$1);
var G__26260 = null;
var G__26261 = (0);
var G__26262 = (0);
seq__26211 = G__26259;
chunk__26212 = G__26260;
count__26213 = G__26261;
i__26214 = G__26262;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.scene.animate = (function threeagent$impl$scene$animate(context){
var stats = context.stats;
var clock = context.clock;
var virtual_scene = context.virtualScene;
var renderer = context.renderer;
var composer = context.composer;
var camera = context.camera;
var scene_root = context.sceneRoot;
var before_render_cb = context.beforeRenderCb;
var after_render_cb = context.afterRenderCb;
if(cljs.core.truth_(stats)){
stats.begin();
} else {
}

var delta_time_26263 = clock.getDelta();
var changelog_26264 = [];
if(cljs.core.truth_(before_render_cb)){
(before_render_cb.cljs$core$IFn$_invoke$arity$1 ? before_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_26263) : before_render_cb.call(null,delta_time_26263));
} else {
}

threeagent.impl.virtual_scene.render_BANG_(virtual_scene,changelog_26264);

threeagent.impl.scene.apply_virtual_scene_changes_BANG_(context,changelog_26264);

if(cljs.core.truth_(composer)){
composer.render(delta_time_26263);
} else {
renderer.render(scene_root,camera);
}

if(cljs.core.truth_(after_render_cb)){
(after_render_cb.cljs$core$IFn$_invoke$arity$1 ? after_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_26263) : after_render_cb.call(null,delta_time_26263));
} else {
}

if(cljs.core.truth_(stats)){
return stats.end();
} else {
return null;
}
});
threeagent.impl.scene.get_canvas = (function threeagent$impl$scene$get_canvas(dom_root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("canvas",clojure.string.lower_case(dom_root.tagName))){
return dom_root;
} else {
var c = document.createElement("canvas");
return dom_root.appendChild(c);
}
});
threeagent.impl.scene.create_context = (function threeagent$impl$scene$create_context(root_fn,dom_root,on_before_render_cb,on_after_render_cb){
var canvas = threeagent.impl.scene.get_canvas(dom_root);
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
var renderer = (new module$node_modules$three$build$three.WebGLRenderer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null))));
var camera = (new module$node_modules$three$build$three.PerspectiveCamera((75),(width / height),0.1,(1000)));
var scene_root = (new module$node_modules$three$build$three.Scene());
var clock = (new module$node_modules$three$build$three.Clock());
renderer.setSize(width,height);

var context = (new threeagent.impl.scene.Context(virtual_scene,scene_root,dom_root,null,canvas,camera,clock,renderer,on_before_render_cb,on_after_render_cb));
(context.animateFn = (function (){
return threeagent.impl.scene.animate(context);
}));

threeagent.impl.scene.init_scene(context,virtual_scene,scene_root);

threeagent.impl.scene.contexts.push(context);

return context;
});
threeagent.impl.scene.remove_all_children_BANG_ = (function threeagent$impl$scene$remove_all_children_BANG_(vscene_root){
return vscene_root.for_each_child(threeagent.impl.scene.remove_node_BANG_);
});
threeagent.impl.scene.reset_context_BANG_ = (function threeagent$impl$scene$reset_context_BANG_(context,root_fn,p__26215){
var map__26216 = p__26215;
var map__26216__$1 = cljs.core.__destructure_map(map__26216);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26216__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26216__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var scene_root = context.sceneRoot;
var virtual_scene = context.virtualScene;
var new_virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
threeagent.impl.scene.remove_all_children_BANG_(virtual_scene.root);

threeagent.impl.virtual_scene.destroy_BANG_(virtual_scene);

threeagent.impl.scene.init_scene(context,new_virtual_scene,scene_root);

(context.virtualScene = new_virtual_scene);

(context.beforeRenderCb = on_before_render);

(context.afterRenderCb = on_after_render);

return context;
});
threeagent.impl.scene.find_context = (function threeagent$impl$scene$find_context(dom_root){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26217_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26217_SHARP_.domRoot,dom_root);
}),threeagent.impl.scene.contexts));
});
threeagent.impl.scene.render = (function threeagent$impl$scene$render(root_fn,dom_root,p__26218){
var map__26219 = p__26218;
var map__26219__$1 = cljs.core.__destructure_map(map__26219);
var config = map__26219__$1;
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26219__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26219__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var temp__5733__auto__ = threeagent.impl.scene.find_context(dom_root);
if(cljs.core.truth_(temp__5733__auto__)){
var existing_context = temp__5733__auto__;
return threeagent.impl.scene.reset_context_BANG_(existing_context,root_fn,config);
} else {
var context = threeagent.impl.scene.create_context(root_fn,dom_root,on_before_render,on_after_render);
var renderer = context.renderer;
renderer.setAnimationLoop(context.animateFn);

return context;
}
});

//# sourceMappingURL=threeagent.impl.scene.js.map
