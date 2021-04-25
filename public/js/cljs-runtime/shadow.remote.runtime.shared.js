goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31079,res){
var map__31085 = p__31079;
var map__31085__$1 = cljs.core.__destructure_map(map__31085);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31085__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31085__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31087 = res;
var G__31087__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31087,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31087);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31087__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31087__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31094 = arguments.length;
switch (G__31094) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31101,msg,handlers,timeout_after_ms){
var map__31108 = p__31101;
var map__31108__$1 = cljs.core.__destructure_map(map__31108);
var runtime = map__31108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31275 = arguments.length;
var i__4772__auto___31277 = (0);
while(true){
if((i__4772__auto___31277 < len__4771__auto___31275)){
args__4777__auto__.push((arguments[i__4772__auto___31277]));

var G__31278 = (i__4772__auto___31277 + (1));
i__4772__auto___31277 = G__31278;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31117,ev,args){
var map__31118 = p__31117;
var map__31118__$1 = cljs.core.__destructure_map(map__31118);
var runtime = map__31118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31120 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31123 = null;
var count__31124 = (0);
var i__31125 = (0);
while(true){
if((i__31125 < count__31124)){
var ext = chunk__31123.cljs$core$IIndexed$_nth$arity$2(null,i__31125);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31280 = seq__31120;
var G__31281 = chunk__31123;
var G__31282 = count__31124;
var G__31283 = (i__31125 + (1));
seq__31120 = G__31280;
chunk__31123 = G__31281;
count__31124 = G__31282;
i__31125 = G__31283;
continue;
} else {
var G__31284 = seq__31120;
var G__31285 = chunk__31123;
var G__31286 = count__31124;
var G__31287 = (i__31125 + (1));
seq__31120 = G__31284;
chunk__31123 = G__31285;
count__31124 = G__31286;
i__31125 = G__31287;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31120);
if(temp__5735__auto__){
var seq__31120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31120__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31120__$1);
var G__31290 = cljs.core.chunk_rest(seq__31120__$1);
var G__31291 = c__4591__auto__;
var G__31292 = cljs.core.count(c__4591__auto__);
var G__31293 = (0);
seq__31120 = G__31290;
chunk__31123 = G__31291;
count__31124 = G__31292;
i__31125 = G__31293;
continue;
} else {
var ext = cljs.core.first(seq__31120__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31294 = cljs.core.next(seq__31120__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__31120 = G__31294;
chunk__31123 = G__31295;
count__31124 = G__31296;
i__31125 = G__31297;
continue;
} else {
var G__31298 = cljs.core.next(seq__31120__$1);
var G__31299 = null;
var G__31300 = (0);
var G__31301 = (0);
seq__31120 = G__31298;
chunk__31123 = G__31299;
count__31124 = G__31300;
i__31125 = G__31301;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31111){
var G__31112 = cljs.core.first(seq31111);
var seq31111__$1 = cljs.core.next(seq31111);
var G__31113 = cljs.core.first(seq31111__$1);
var seq31111__$2 = cljs.core.next(seq31111__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31112,G__31113,seq31111__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31140,p__31141){
var map__31144 = p__31140;
var map__31144__$1 = cljs.core.__destructure_map(map__31144);
var runtime = map__31144__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31144__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31146 = p__31141;
var map__31146__$1 = cljs.core.__destructure_map(map__31146);
var msg = map__31146__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31146__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31151 = cljs.core.deref(state_ref);
var map__31151__$1 = cljs.core.__destructure_map(map__31151);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31151__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31151__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31155){
var map__31156 = p__31155;
var map__31156__$1 = cljs.core.__destructure_map(map__31156);
var runtime = map__31156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31157,msg){
var map__31158 = p__31157;
var map__31158__$1 = cljs.core.__destructure_map(map__31158);
var runtime = map__31158__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31164,key,p__31165){
var map__31167 = p__31164;
var map__31167__$1 = cljs.core.__destructure_map(map__31167);
var state = map__31167__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31167__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31168 = p__31165;
var map__31168__$1 = cljs.core.__destructure_map(map__31168);
var spec = map__31168__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31175,key,spec){
var map__31176 = p__31175;
var map__31176__$1 = cljs.core.__destructure_map(map__31176);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31177_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31177_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31178_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31178_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31179_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31179_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31180_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31180_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31181_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31181_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31191,key){
var map__31192 = p__31191;
var map__31192__$1 = cljs.core.__destructure_map(map__31192);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31192__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31198,msg){
var map__31199 = p__31198;
var map__31199__$1 = cljs.core.__destructure_map(map__31199);
var runtime = map__31199__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31203,p__31204){
var map__31206 = p__31203;
var map__31206__$1 = cljs.core.__destructure_map(map__31206);
var runtime = map__31206__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31206__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31207 = p__31204;
var map__31207__$1 = cljs.core.__destructure_map(map__31207);
var msg = map__31207__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31207__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31207__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31210 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31213 = null;
var count__31214 = (0);
var i__31215 = (0);
while(true){
if((i__31215 < count__31214)){
var map__31247 = chunk__31213.cljs$core$IIndexed$_nth$arity$2(null,i__31215);
var map__31247__$1 = cljs.core.__destructure_map(map__31247);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31247__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31384 = seq__31210;
var G__31385 = chunk__31213;
var G__31386 = count__31214;
var G__31387 = (i__31215 + (1));
seq__31210 = G__31384;
chunk__31213 = G__31385;
count__31214 = G__31386;
i__31215 = G__31387;
continue;
} else {
var G__31388 = seq__31210;
var G__31389 = chunk__31213;
var G__31390 = count__31214;
var G__31391 = (i__31215 + (1));
seq__31210 = G__31388;
chunk__31213 = G__31389;
count__31214 = G__31390;
i__31215 = G__31391;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31210);
if(temp__5735__auto__){
var seq__31210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31210__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31210__$1);
var G__31392 = cljs.core.chunk_rest(seq__31210__$1);
var G__31393 = c__4591__auto__;
var G__31394 = cljs.core.count(c__4591__auto__);
var G__31395 = (0);
seq__31210 = G__31392;
chunk__31213 = G__31393;
count__31214 = G__31394;
i__31215 = G__31395;
continue;
} else {
var map__31252 = cljs.core.first(seq__31210__$1);
var map__31252__$1 = cljs.core.__destructure_map(map__31252);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31252__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31399 = cljs.core.next(seq__31210__$1);
var G__31400 = null;
var G__31401 = (0);
var G__31402 = (0);
seq__31210 = G__31399;
chunk__31213 = G__31400;
count__31214 = G__31401;
i__31215 = G__31402;
continue;
} else {
var G__31403 = cljs.core.next(seq__31210__$1);
var G__31404 = null;
var G__31405 = (0);
var G__31406 = (0);
seq__31210 = G__31403;
chunk__31213 = G__31404;
count__31214 = G__31405;
i__31215 = G__31406;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
