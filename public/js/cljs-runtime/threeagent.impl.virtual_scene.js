goog.provide('threeagent.impl.virtual_scene');
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.non_component_keys !== 'undefined')){
} else {
threeagent.impl.virtual_scene.non_component_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
}
threeagent.impl.virtual_scene.print_tree = (function threeagent$impl$virtual_scene$print_tree(var_args){
var G__36382 = arguments.length;
switch (G__36382) {
case 1:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(node,"");
}));

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2 = (function (node,p){
var is_reactive = (!((node.reaction == null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,"|-",node.key,["comp:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["dirty:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.dirty)].join(''),["reactive:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_reactive)].join('')], 0));

var seq__36384 = cljs.core.seq(cljs.core.es6_iterator_seq(node.children.values()));
var chunk__36385 = null;
var count__36386 = (0);
var i__36387 = (0);
while(true){
if((i__36387 < count__36386)){
var child = chunk__36385.cljs$core$IIndexed$_nth$arity$2(null,i__36387);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__36479 = seq__36384;
var G__36480 = chunk__36385;
var G__36481 = count__36386;
var G__36482 = (i__36387 + (1));
seq__36384 = G__36479;
chunk__36385 = G__36480;
count__36386 = G__36481;
i__36387 = G__36482;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36384);
if(temp__5735__auto__){
var seq__36384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36384__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36384__$1);
var G__36483 = cljs.core.chunk_rest(seq__36384__$1);
var G__36484 = c__4591__auto__;
var G__36485 = cljs.core.count(c__4591__auto__);
var G__36486 = (0);
seq__36384 = G__36483;
chunk__36385 = G__36484;
count__36386 = G__36485;
i__36387 = G__36486;
continue;
} else {
var child = cljs.core.first(seq__36384__$1);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__36487 = cljs.core.next(seq__36384__$1);
var G__36488 = null;
var G__36489 = (0);
var G__36490 = (0);
seq__36384 = G__36487;
chunk__36385 = G__36488;
count__36386 = G__36489;
i__36387 = G__36490;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.print_tree.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.node__GT_path = (function threeagent$impl$virtual_scene$node__GT_path(var_args){
var G__36390 = arguments.length;
switch (G__36390) {
case 1:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,node);
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (path,node){
while(true){
if(cljs.core.truth_(node)){
var G__36492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node.key);
var G__36493 = node.parent;
path = G__36492;
node = G__36493;
continue;
} else {
return cljs.core.reverse(path);
}
break;
}
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.get_key = (function threeagent$impl$virtual_scene$get_key(key,meta){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$2(meta,key);
});

/**
* @constructor
*/
threeagent.impl.virtual_scene.Node = (function (parent,depth,key,meta,data,dirty,render,reaction,children){
this.parent = parent;
this.depth = depth;
this.key = key;
this.meta = meta;
this.data = data;
this.dirty = dirty;
this.render = render;
this.reaction = reaction;
this.children = children;
});
(threeagent.impl.virtual_scene.Node.prototype.terminal_QMARK_ = (function (){
var self__ = this;
var this$ = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),self__.children.size);
}));

(threeagent.impl.virtual_scene.Node.prototype.for_each_child = (function (f){
var self__ = this;
var this$ = this;
var seq__36398 = cljs.core.seq(cljs.core.es6_iterator_seq(self__.children.values()));
var chunk__36399 = null;
var count__36400 = (0);
var i__36401 = (0);
while(true){
if((i__36401 < count__36400)){
var child = chunk__36399.cljs$core$IIndexed$_nth$arity$2(null,i__36401);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__36494 = seq__36398;
var G__36495 = chunk__36399;
var G__36496 = count__36400;
var G__36497 = (i__36401 + (1));
seq__36398 = G__36494;
chunk__36399 = G__36495;
count__36400 = G__36496;
i__36401 = G__36497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36398);
if(temp__5735__auto__){
var seq__36398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36398__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36398__$1);
var G__36498 = cljs.core.chunk_rest(seq__36398__$1);
var G__36499 = c__4591__auto__;
var G__36500 = cljs.core.count(c__4591__auto__);
var G__36501 = (0);
seq__36398 = G__36498;
chunk__36399 = G__36499;
count__36400 = G__36500;
i__36401 = G__36501;
continue;
} else {
var child = cljs.core.first(seq__36398__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__36502 = cljs.core.next(seq__36398__$1);
var G__36503 = null;
var G__36504 = (0);
var G__36505 = (0);
seq__36398 = G__36502;
chunk__36399 = G__36503;
count__36400 = G__36504;
i__36401 = G__36505;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(threeagent.impl.virtual_scene.Node.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Node");

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"threeagent.impl.virtual-scene/Node");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Node.
 */
threeagent.impl.virtual_scene.__GT_Node = (function threeagent$impl$virtual_scene$__GT_Node(parent,depth,key,meta,data,dirty,render,reaction,children){
return (new threeagent.impl.virtual_scene.Node(parent,depth,key,meta,data,dirty,render,reaction,children));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Scene = (function (root,renderQueue){
this.root = root;
this.renderQueue = renderQueue;
});
(threeagent.impl.virtual_scene.Scene.prototype.enqueueForRender = (function (node){
var self__ = this;
var this$ = this;
(node.dirty = true);

return self__.renderQueue.enqueue(node.depth,node);
}));

(threeagent.impl.virtual_scene.Scene.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"renderQueue","renderQueue",-1811767425,null)], null);
}));

(threeagent.impl.virtual_scene.Scene.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Scene");

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"threeagent.impl.virtual-scene/Scene");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Scene.
 */
threeagent.impl.virtual_scene.__GT_Scene = (function threeagent$impl$virtual_scene$__GT_Scene(root,renderQueue){
return (new threeagent.impl.virtual_scene.Scene(root,renderQueue));
});

threeagent.impl.virtual_scene.get_in_node = (function threeagent$impl$virtual_scene$get_in_node(node,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return node;
} else {
var G__36506 = node.children.get(cljs.core.first(path));
var G__36507 = cljs.core.rest(path);
node = G__36506;
path = G__36507;
continue;
}
break;
}
});
threeagent.impl.virtual_scene.get_in_scene = (function threeagent$impl$virtual_scene$get_in_scene(scene,path){
return threeagent.impl.virtual_scene.get_in_node(scene.root,cljs.core.rest(path));
});
threeagent.impl.virtual_scene.eval_fn = (function threeagent$impl$virtual_scene$eval_fn(f,args){
while(true){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.fn_QMARK_(result)){
var G__36508 = result;
var G__36509 = args;
f = G__36508;
args = G__36509;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,result], null);
}
break;
}
});
threeagent.impl.virtual_scene.on_react_BANG_ = (function threeagent$impl$virtual_scene$on_react_BANG_(ctx){
var node = ctx.node;
var scene = ctx.scene;
return scene.enqueueForRender(node);
});
threeagent.impl.virtual_scene.extract_comp_config = (function threeagent$impl$virtual_scene$extract_comp_config(config){
var c = cljs.core.transient$(config);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36415_SHARP_,p2__36416_SHARP_){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(p1__36415_SHARP_,p2__36416_SHARP_);
}),c,threeagent.impl.virtual_scene.non_component_keys));
});
threeagent.impl.virtual_scene.node_data = (function threeagent$impl$virtual_scene$node_data(comp_key,comp_config){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)),new cljs.core.Keyword(null,"component-key","component-key",1189239034),comp_key,new cljs.core.Keyword(null,"component-config","component-config",2000790546),threeagent.impl.virtual_scene.extract_comp_config(comp_config)], null);
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node = (function (){var method_table__4654__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36417 = cljs.core.get_global_hierarchy;
return (fexpr__36417.cljs$core$IFn$_invoke$arity$0 ? fexpr__36417.cljs$core$IFn$_invoke$arity$0() : fexpr__36417.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node"),(function (scene,parent,key,p__36418){
var vec__36419 = p__36418;
var seq__36420 = cljs.core.seq(vec__36419);
var first__36421 = cljs.core.first(seq__36420);
var seq__36420__$1 = cljs.core.next(seq__36420);
var l = first__36421;
var r = seq__36420__$1;
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (scene,parent,key,form){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid object form:",form], 0));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (scene,parent,key,form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (scene,parent,key,form){
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,parent,key,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),cljs.core.meta(form)));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (scene,parent,key,form){
var vec__36422 = form;
var seq__36423 = cljs.core.seq(vec__36422);
var first__36424 = cljs.core.first(seq__36423);
var seq__36423__$1 = cljs.core.next(seq__36423);
var comp_key = first__36424;
var rs = seq__36423__$1;
var first_child = cljs.core.first(rs);
var metadata = cljs.core.meta(form);
var key__$1 = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return key;
}
})();
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
var children_map = (new Map());
var data = threeagent.impl.virtual_scene.node_data(comp_key,comp_config);
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var node = (new threeagent.impl.virtual_scene.Node(parent,depth,key__$1,metadata,data,false,null,null,children_map));
var seq__36425_36511 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children));
var chunk__36426_36512 = null;
var count__36427_36513 = (0);
var i__36428_36514 = (0);
while(true){
if((i__36428_36514 < count__36427_36513)){
var vec__36435_36515 = chunk__36426_36512.cljs$core$IIndexed$_nth$arity$2(null,i__36428_36514);
var idx_36516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36435_36515,(0),null);
var child_36517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36435_36515,(1),null);
var temp__5735__auto___36518 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,node,idx_36516,child_36517);
if(cljs.core.truth_(temp__5735__auto___36518)){
var child_node_36519 = temp__5735__auto___36518;
children_map.set(child_node_36519.key,child_node_36519);
} else {
}


var G__36520 = seq__36425_36511;
var G__36521 = chunk__36426_36512;
var G__36522 = count__36427_36513;
var G__36523 = (i__36428_36514 + (1));
seq__36425_36511 = G__36520;
chunk__36426_36512 = G__36521;
count__36427_36513 = G__36522;
i__36428_36514 = G__36523;
continue;
} else {
var temp__5735__auto___36524 = cljs.core.seq(seq__36425_36511);
if(temp__5735__auto___36524){
var seq__36425_36525__$1 = temp__5735__auto___36524;
if(cljs.core.chunked_seq_QMARK_(seq__36425_36525__$1)){
var c__4591__auto___36526 = cljs.core.chunk_first(seq__36425_36525__$1);
var G__36527 = cljs.core.chunk_rest(seq__36425_36525__$1);
var G__36528 = c__4591__auto___36526;
var G__36529 = cljs.core.count(c__4591__auto___36526);
var G__36530 = (0);
seq__36425_36511 = G__36527;
chunk__36426_36512 = G__36528;
count__36427_36513 = G__36529;
i__36428_36514 = G__36530;
continue;
} else {
var vec__36438_36531 = cljs.core.first(seq__36425_36525__$1);
var idx_36532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36438_36531,(0),null);
var child_36533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36438_36531,(1),null);
var temp__5735__auto___36534__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,node,idx_36532,child_36533);
if(cljs.core.truth_(temp__5735__auto___36534__$1)){
var child_node_36535 = temp__5735__auto___36534__$1;
children_map.set(child_node_36535.key,child_node_36535);
} else {
}


var G__36536 = cljs.core.next(seq__36425_36525__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__36425_36511 = G__36536;
chunk__36426_36512 = G__36537;
count__36427_36513 = G__36538;
i__36428_36514 = G__36539;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (scene,parent,key,form){
var key__$1 = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return key;
}
})();
var vec__36441 = form;
var seq__36442 = cljs.core.seq(vec__36441);
var first__36443 = cljs.core.first(seq__36442);
var seq__36442__$1 = cljs.core.next(seq__36442);
var f = first__36443;
var args = seq__36442__$1;
var reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null], null));
var vec__36444 = reagent.ratom.run_in_reaction((function (){
return threeagent.impl.virtual_scene.eval_fn(f,args);
}),reaction_ctx,"reaction",threeagent.impl.virtual_scene.on_react_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
var final_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36444,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36444,(1),null);
var node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,parent,key__$1,result);
(node.originalFn = f);

(node.render = final_fn);

(node.form = form);

(node.renderedForm = result);

var temp__5735__auto___36540 = reaction_ctx.reaction;
if(cljs.core.truth_(temp__5735__auto___36540)){
var reaction_36541 = temp__5735__auto___36540;
(reaction_ctx.scene = scene);

(reaction_ctx.node = node);

(node.reaction = reaction_36541);
} else {
}

return node;
}));
threeagent.impl.virtual_scene.form__GT_form_type = (function threeagent$impl$virtual_scene$form__GT_form_type(p__36447){
var vec__36448 = p__36447;
var seq__36449 = cljs.core.seq(vec__36448);
var first__36450 = cljs.core.first(seq__36449);
var seq__36449__$1 = cljs.core.next(seq__36449);
var l = first__36450;
var r = seq__36449__$1;
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node_shallow !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node_shallow = (function (){var method_table__4654__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36451 = cljs.core.get_global_hierarchy;
return (fexpr__36451.cljs$core$IFn$_invoke$arity$0 ? fexpr__36451.cljs$core$IFn$_invoke$arity$0() : fexpr__36451.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node-shallow"),(function (key,f){
return threeagent.impl.virtual_scene.form__GT_form_type(f);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (key,form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (key,form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (key,form){
if(cljs.core.empty_QMARK_(form)){
return null;
} else {
var m = cljs.core.meta(form);
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.get_key(key,m),cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),m));
}
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (key,form){
var vec__36455 = form;
var seq__36456 = cljs.core.seq(vec__36455);
var first__36457 = cljs.core.first(seq__36456);
var seq__36456__$1 = cljs.core.next(seq__36456);
var comp_key = first__36457;
var rs = seq__36456__$1;
var first_child = cljs.core.first(rs);
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36452_SHARP_){
return (((!((p1__36452_SHARP_ == null)))) && ((!(cljs.core.empty_QMARK_(p1__36452_SHARP_)))));
}),((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(comp_key,comp_config),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__36454_SHARP_,p2__36453_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__36453_SHARP_));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return p1__36454_SHARP_;
}
})(),p2__36453_SHARP_],null));
}),children)], null);
}));
threeagent.impl.virtual_scene.dispose_node_BANG_ = (function threeagent$impl$virtual_scene$dispose_node_BANG_(node){
(node.disposed = true);

var temp__5735__auto___36550 = node.reaction;
if(cljs.core.truth_(temp__5735__auto___36550)){
var reaction_36551 = temp__5735__auto___36550;
reagent.ratom.dispose_BANG_(reaction_36551);
} else {
}

return node.for_each_child(threeagent.impl.virtual_scene.dispose_node_BANG_);
});
threeagent.impl.virtual_scene.add_node_BANG_ = (function threeagent$impl$virtual_scene$add_node_BANG_(scene,parent_node,key,form,changelog){
var temp__5735__auto__ = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,parent_node,key,form);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"add","add",235287739),null,node.data], null));

return node;
} else {
return null;
}
});
threeagent.impl.virtual_scene.remove_node_BANG_ = (function threeagent$impl$virtual_scene$remove_node_BANG_(node,changelog){
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"remove","remove",-131428414),node.data,null], null));

(node.data = null);

(node.dirty = false);

return threeagent.impl.virtual_scene.dispose_node_BANG_(node);
});
threeagent.impl.virtual_scene.replace_node_BANG_ = (function threeagent$impl$virtual_scene$replace_node_BANG_(scene,node,new_form,changelog){
var parent = node.parent;
var key = node.key;
threeagent.impl.virtual_scene.remove_node_BANG_(node,changelog);

var new_node = threeagent.impl.virtual_scene.add_node_BANG_(scene,parent,key,new_form,changelog);
return parent.children.set(key,new_node);
});
threeagent.impl.virtual_scene.diff_fn_QMARK_ = (function threeagent$impl$virtual_scene$diff_fn_QMARK_(node,new_form){
var original_fn = node.originalFn;
return (((!((original_fn == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_fn,cljs.core.first(new_form))));
});
threeagent.impl.virtual_scene.update_node_BANG_ = (function threeagent$impl$virtual_scene$update_node_BANG_(scene,node,new_form,changelog){
(node.dirty = false);

if(threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
var render_fn = node.render;
var original_fn = node.originalFn;
var new_type = threeagent.impl.virtual_scene.form__GT_form_type(new_form);
var rendered_form = (cljs.core.truth_((function (){var and__4149__auto__ = render_fn;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),new_type);
} else {
return and__4149__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.rest(new_form)):new_form);
var old_form = node.renderedForm;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_form,old_form)){
var key = node.key;
var children = node.children;
var old_data = node.data;
var shallow_node = threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$2(key,rendered_form);
var new_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(shallow_node);
var current_keys = cljs.core.set(cljs.core.es6_iterator_seq(children.keys()));
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807).cljs$core$IFn$_invoke$arity$1(shallow_node)));
var dropped_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_keys,new_keys);
(node.data = new_data);

if(cljs.core.truth_(render_fn)){
(node.form = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn], null),cljs.core.rest(new_form)));
} else {
}

(node.renderedForm = new_form);

changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"update","update",1045576396),old_data,new_data], null));

var seq__36458_36560 = cljs.core.seq(dropped_keys);
var chunk__36459_36561 = null;
var count__36460_36562 = (0);
var i__36461_36563 = (0);
while(true){
if((i__36461_36563 < count__36460_36562)){
var child_key_36564 = chunk__36459_36561.cljs$core$IIndexed$_nth$arity$2(null,i__36461_36563);
var child_node_36565 = children.get(child_key_36564);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_36565,changelog);

children.delete(child_key_36564);


var G__36566 = seq__36458_36560;
var G__36567 = chunk__36459_36561;
var G__36568 = count__36460_36562;
var G__36569 = (i__36461_36563 + (1));
seq__36458_36560 = G__36566;
chunk__36459_36561 = G__36567;
count__36460_36562 = G__36568;
i__36461_36563 = G__36569;
continue;
} else {
var temp__5735__auto___36570 = cljs.core.seq(seq__36458_36560);
if(temp__5735__auto___36570){
var seq__36458_36571__$1 = temp__5735__auto___36570;
if(cljs.core.chunked_seq_QMARK_(seq__36458_36571__$1)){
var c__4591__auto___36572 = cljs.core.chunk_first(seq__36458_36571__$1);
var G__36573 = cljs.core.chunk_rest(seq__36458_36571__$1);
var G__36574 = c__4591__auto___36572;
var G__36575 = cljs.core.count(c__4591__auto___36572);
var G__36576 = (0);
seq__36458_36560 = G__36573;
chunk__36459_36561 = G__36574;
count__36460_36562 = G__36575;
i__36461_36563 = G__36576;
continue;
} else {
var child_key_36577 = cljs.core.first(seq__36458_36571__$1);
var child_node_36578 = children.get(child_key_36577);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_36578,changelog);

children.delete(child_key_36577);


var G__36579 = cljs.core.next(seq__36458_36571__$1);
var G__36580 = null;
var G__36581 = (0);
var G__36582 = (0);
seq__36458_36560 = G__36579;
chunk__36459_36561 = G__36580;
count__36460_36562 = G__36581;
i__36461_36563 = G__36582;
continue;
}
} else {
}
}
break;
}

var seq__36462 = cljs.core.seq(new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807).cljs$core$IFn$_invoke$arity$1(shallow_node));
var chunk__36463 = null;
var count__36464 = (0);
var i__36465 = (0);
while(true){
if((i__36465 < count__36464)){
var vec__36472 = chunk__36463.cljs$core$IIndexed$_nth$arity$2(null,i__36465);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36472,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36472,(1),null);
var temp__5733__auto___36583 = children.get(child_key);
if(cljs.core.truth_(temp__5733__auto___36583)){
var child_36584 = temp__5733__auto___36583;
(threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$4 ? threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$4(scene,child_36584,child_form,changelog) : threeagent.impl.virtual_scene.update_node_BANG_.call(null,scene,child_36584,child_form,changelog));
} else {
var temp__5735__auto___36585 = threeagent.impl.virtual_scene.add_node_BANG_(scene,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5735__auto___36585)){
var child_node_36586 = temp__5735__auto___36585;
children.set(child_key,child_node_36586);
} else {
}
}


var G__36587 = seq__36462;
var G__36588 = chunk__36463;
var G__36589 = count__36464;
var G__36590 = (i__36465 + (1));
seq__36462 = G__36587;
chunk__36463 = G__36588;
count__36464 = G__36589;
i__36465 = G__36590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36462);
if(temp__5735__auto__){
var seq__36462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36462__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36462__$1);
var G__36591 = cljs.core.chunk_rest(seq__36462__$1);
var G__36592 = c__4591__auto__;
var G__36593 = cljs.core.count(c__4591__auto__);
var G__36594 = (0);
seq__36462 = G__36591;
chunk__36463 = G__36592;
count__36464 = G__36593;
i__36465 = G__36594;
continue;
} else {
var vec__36475 = cljs.core.first(seq__36462__$1);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36475,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36475,(1),null);
var temp__5733__auto___36595 = children.get(child_key);
if(cljs.core.truth_(temp__5733__auto___36595)){
var child_36596 = temp__5733__auto___36595;
(threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$4 ? threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$4(scene,child_36596,child_form,changelog) : threeagent.impl.virtual_scene.update_node_BANG_.call(null,scene,child_36596,child_form,changelog));
} else {
var temp__5735__auto___36597__$1 = threeagent.impl.virtual_scene.add_node_BANG_(scene,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5735__auto___36597__$1)){
var child_node_36598 = temp__5735__auto___36597__$1;
children.set(child_key,child_node_36598);
} else {
}
}


var G__36599 = cljs.core.next(seq__36462__$1);
var G__36600 = null;
var G__36601 = (0);
var G__36602 = (0);
seq__36462 = G__36599;
chunk__36463 = G__36600;
count__36464 = G__36601;
i__36465 = G__36602;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
threeagent.impl.virtual_scene.render_node_BANG_ = (function threeagent$impl$virtual_scene$render_node_BANG_(scene,node,changelog){
var form = node.form;
return threeagent.impl.virtual_scene.update_node_BANG_(scene,node,form,changelog);
});
threeagent.impl.virtual_scene.render_BANG_ = (function threeagent$impl$virtual_scene$render_BANG_(scene,changelog){
reagent.core.flush();

var queue = scene.renderQueue;
var node = queue.dequeue();
while(true){
if(cljs.core.truth_(node)){
if(cljs.core.truth_(node.dirty)){
threeagent.impl.virtual_scene.render_node_BANG_(scene,node,changelog);
} else {
}

var G__36603 = queue.dequeue();
node = G__36603;
continue;
} else {
return null;
}
break;
}
});
threeagent.impl.virtual_scene.destroy_BANG_ = (function threeagent$impl$virtual_scene$destroy_BANG_(scene){
return threeagent.impl.virtual_scene.dispose_node_BANG_(scene.root);
});
threeagent.impl.virtual_scene.create = (function threeagent$impl$virtual_scene$create(root_fn){
var scene = (new threeagent.impl.virtual_scene.Scene(null,(new goog.structs.PriorityQueue())));
var root_node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$4(scene,null,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_fn], null));
(scene.root = root_node);

return scene;
});

//# sourceMappingURL=threeagent.impl.virtual_scene.js.map
