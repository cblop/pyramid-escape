goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35791 = arguments.length;
var i__4772__auto___35792 = (0);
while(true){
if((i__4772__auto___35792 < len__4771__auto___35791)){
args__4777__auto__.push((arguments[i__4772__auto___35792]));

var G__35793 = (i__4772__auto___35792 + (1));
i__4772__auto___35792 = G__35793;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35618){
var G__35619 = cljs.core.first(seq35618);
var seq35618__$1 = cljs.core.next(seq35618);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35619,seq35618__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35622 = cljs.core.seq(sources);
var chunk__35623 = null;
var count__35624 = (0);
var i__35625 = (0);
while(true){
if((i__35625 < count__35624)){
var map__35633 = chunk__35623.cljs$core$IIndexed$_nth$arity$2(null,i__35625);
var map__35633__$1 = cljs.core.__destructure_map(map__35633);
var src = map__35633__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35634){var e_35798 = e35634;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35798);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35798.message)].join('')));
}

var G__35799 = seq__35622;
var G__35800 = chunk__35623;
var G__35801 = count__35624;
var G__35802 = (i__35625 + (1));
seq__35622 = G__35799;
chunk__35623 = G__35800;
count__35624 = G__35801;
i__35625 = G__35802;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35622);
if(temp__5735__auto__){
var seq__35622__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35622__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35622__$1);
var G__35803 = cljs.core.chunk_rest(seq__35622__$1);
var G__35804 = c__4591__auto__;
var G__35805 = cljs.core.count(c__4591__auto__);
var G__35806 = (0);
seq__35622 = G__35803;
chunk__35623 = G__35804;
count__35624 = G__35805;
i__35625 = G__35806;
continue;
} else {
var map__35635 = cljs.core.first(seq__35622__$1);
var map__35635__$1 = cljs.core.__destructure_map(map__35635);
var src = map__35635__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35637){var e_35807 = e35637;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35807);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35807.message)].join('')));
}

var G__35808 = cljs.core.next(seq__35622__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__35622 = G__35808;
chunk__35623 = G__35809;
count__35624 = G__35810;
i__35625 = G__35811;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35639 = cljs.core.seq(js_requires);
var chunk__35640 = null;
var count__35641 = (0);
var i__35642 = (0);
while(true){
if((i__35642 < count__35641)){
var js_ns = chunk__35640.cljs$core$IIndexed$_nth$arity$2(null,i__35642);
var require_str_35812 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35812);


var G__35813 = seq__35639;
var G__35814 = chunk__35640;
var G__35815 = count__35641;
var G__35816 = (i__35642 + (1));
seq__35639 = G__35813;
chunk__35640 = G__35814;
count__35641 = G__35815;
i__35642 = G__35816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35639);
if(temp__5735__auto__){
var seq__35639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35639__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35639__$1);
var G__35817 = cljs.core.chunk_rest(seq__35639__$1);
var G__35818 = c__4591__auto__;
var G__35819 = cljs.core.count(c__4591__auto__);
var G__35820 = (0);
seq__35639 = G__35817;
chunk__35640 = G__35818;
count__35641 = G__35819;
i__35642 = G__35820;
continue;
} else {
var js_ns = cljs.core.first(seq__35639__$1);
var require_str_35821 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35821);


var G__35822 = cljs.core.next(seq__35639__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35639 = G__35822;
chunk__35640 = G__35823;
count__35641 = G__35824;
i__35642 = G__35825;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35644){
var map__35645 = p__35644;
var map__35645__$1 = cljs.core.__destructure_map(map__35645);
var msg = map__35645__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35646(s__35647){
return (new cljs.core.LazySeq(null,(function (){
var s__35647__$1 = s__35647;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35647__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35652 = cljs.core.first(xs__6292__auto__);
var map__35652__$1 = cljs.core.__destructure_map(map__35652);
var src = map__35652__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35652__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__35647__$1,map__35652,map__35652__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35645,map__35645__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35646_$_iter__35648(s__35649){
return (new cljs.core.LazySeq(null,((function (s__35647__$1,map__35652,map__35652__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35645,map__35645__$1,msg,info,reload_info){
return (function (){
var s__35649__$1 = s__35649;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35649__$1);
if(temp__5735__auto____$1){
var s__35649__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35649__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__35649__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__35651 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__35650 = (0);
while(true){
if((i__35650 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__35650);
cljs.core.chunk_append(b__35651,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35828 = (i__35650 + (1));
i__35650 = G__35828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35651),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35646_$_iter__35648(cljs.core.chunk_rest(s__35649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35651),null);
}
} else {
var warning = cljs.core.first(s__35649__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35646_$_iter__35648(cljs.core.rest(s__35649__$2)));
}
} else {
return null;
}
break;
}
});})(s__35647__$1,map__35652,map__35652__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35645,map__35645__$1,msg,info,reload_info))
,null,null));
});})(s__35647__$1,map__35652,map__35652__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35645,map__35645__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35646(cljs.core.rest(s__35647__$1)));
} else {
var G__35829 = cljs.core.rest(s__35647__$1);
s__35647__$1 = G__35829;
continue;
}
} else {
var G__35830 = cljs.core.rest(s__35647__$1);
s__35647__$1 = G__35830;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35655_35831 = cljs.core.seq(warnings);
var chunk__35656_35832 = null;
var count__35657_35833 = (0);
var i__35658_35834 = (0);
while(true){
if((i__35658_35834 < count__35657_35833)){
var map__35661_35835 = chunk__35656_35832.cljs$core$IIndexed$_nth$arity$2(null,i__35658_35834);
var map__35661_35836__$1 = cljs.core.__destructure_map(map__35661_35835);
var w_35837 = map__35661_35836__$1;
var msg_35838__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661_35836__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661_35836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661_35836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661_35836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35841)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35839),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35840),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35838__$1)].join(''));


var G__35842 = seq__35655_35831;
var G__35843 = chunk__35656_35832;
var G__35844 = count__35657_35833;
var G__35845 = (i__35658_35834 + (1));
seq__35655_35831 = G__35842;
chunk__35656_35832 = G__35843;
count__35657_35833 = G__35844;
i__35658_35834 = G__35845;
continue;
} else {
var temp__5735__auto___35846 = cljs.core.seq(seq__35655_35831);
if(temp__5735__auto___35846){
var seq__35655_35847__$1 = temp__5735__auto___35846;
if(cljs.core.chunked_seq_QMARK_(seq__35655_35847__$1)){
var c__4591__auto___35848 = cljs.core.chunk_first(seq__35655_35847__$1);
var G__35849 = cljs.core.chunk_rest(seq__35655_35847__$1);
var G__35850 = c__4591__auto___35848;
var G__35851 = cljs.core.count(c__4591__auto___35848);
var G__35852 = (0);
seq__35655_35831 = G__35849;
chunk__35656_35832 = G__35850;
count__35657_35833 = G__35851;
i__35658_35834 = G__35852;
continue;
} else {
var map__35662_35853 = cljs.core.first(seq__35655_35847__$1);
var map__35662_35854__$1 = cljs.core.__destructure_map(map__35662_35853);
var w_35855 = map__35662_35854__$1;
var msg_35856__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35854__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35854__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35854__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35854__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35859)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35857),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35858),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35856__$1)].join(''));


var G__35860 = cljs.core.next(seq__35655_35847__$1);
var G__35861 = null;
var G__35862 = (0);
var G__35863 = (0);
seq__35655_35831 = G__35860;
chunk__35656_35832 = G__35861;
count__35657_35833 = G__35862;
i__35658_35834 = G__35863;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35643_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35643_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35665){
var map__35666 = p__35665;
var map__35666__$1 = cljs.core.__destructure_map(map__35666);
var msg = map__35666__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35667 = cljs.core.seq(updates);
var chunk__35669 = null;
var count__35670 = (0);
var i__35671 = (0);
while(true){
if((i__35671 < count__35670)){
var path = chunk__35669.cljs$core$IIndexed$_nth$arity$2(null,i__35671);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35704_35864 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35708_35865 = null;
var count__35709_35866 = (0);
var i__35710_35867 = (0);
while(true){
if((i__35710_35867 < count__35709_35866)){
var node_35868 = chunk__35708_35865.cljs$core$IIndexed$_nth$arity$2(null,i__35710_35867);
if(cljs.core.not(node_35868.shadow$old)){
var path_match_35869 = shadow.cljs.devtools.client.browser.match_paths(node_35868.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35869)){
var new_link_35870 = (function (){var G__35720 = node_35868.cloneNode(true);
G__35720.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35869),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35720;
})();
(node_35868.shadow$old = true);

(new_link_35870.onload = ((function (seq__35704_35864,chunk__35708_35865,count__35709_35866,i__35710_35867,seq__35667,chunk__35669,count__35670,i__35671,new_link_35870,path_match_35869,node_35868,path,map__35666,map__35666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35868);
});})(seq__35704_35864,chunk__35708_35865,count__35709_35866,i__35710_35867,seq__35667,chunk__35669,count__35670,i__35671,new_link_35870,path_match_35869,node_35868,path,map__35666,map__35666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35869], 0));

goog.dom.insertSiblingAfter(new_link_35870,node_35868);


var G__35871 = seq__35704_35864;
var G__35872 = chunk__35708_35865;
var G__35873 = count__35709_35866;
var G__35874 = (i__35710_35867 + (1));
seq__35704_35864 = G__35871;
chunk__35708_35865 = G__35872;
count__35709_35866 = G__35873;
i__35710_35867 = G__35874;
continue;
} else {
var G__35875 = seq__35704_35864;
var G__35876 = chunk__35708_35865;
var G__35877 = count__35709_35866;
var G__35878 = (i__35710_35867 + (1));
seq__35704_35864 = G__35875;
chunk__35708_35865 = G__35876;
count__35709_35866 = G__35877;
i__35710_35867 = G__35878;
continue;
}
} else {
var G__35879 = seq__35704_35864;
var G__35880 = chunk__35708_35865;
var G__35881 = count__35709_35866;
var G__35882 = (i__35710_35867 + (1));
seq__35704_35864 = G__35879;
chunk__35708_35865 = G__35880;
count__35709_35866 = G__35881;
i__35710_35867 = G__35882;
continue;
}
} else {
var temp__5735__auto___35883 = cljs.core.seq(seq__35704_35864);
if(temp__5735__auto___35883){
var seq__35704_35884__$1 = temp__5735__auto___35883;
if(cljs.core.chunked_seq_QMARK_(seq__35704_35884__$1)){
var c__4591__auto___35885 = cljs.core.chunk_first(seq__35704_35884__$1);
var G__35886 = cljs.core.chunk_rest(seq__35704_35884__$1);
var G__35887 = c__4591__auto___35885;
var G__35888 = cljs.core.count(c__4591__auto___35885);
var G__35889 = (0);
seq__35704_35864 = G__35886;
chunk__35708_35865 = G__35887;
count__35709_35866 = G__35888;
i__35710_35867 = G__35889;
continue;
} else {
var node_35890 = cljs.core.first(seq__35704_35884__$1);
if(cljs.core.not(node_35890.shadow$old)){
var path_match_35891 = shadow.cljs.devtools.client.browser.match_paths(node_35890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35891)){
var new_link_35892 = (function (){var G__35723 = node_35890.cloneNode(true);
G__35723.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35891),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35723;
})();
(node_35890.shadow$old = true);

(new_link_35892.onload = ((function (seq__35704_35864,chunk__35708_35865,count__35709_35866,i__35710_35867,seq__35667,chunk__35669,count__35670,i__35671,new_link_35892,path_match_35891,node_35890,seq__35704_35884__$1,temp__5735__auto___35883,path,map__35666,map__35666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35890);
});})(seq__35704_35864,chunk__35708_35865,count__35709_35866,i__35710_35867,seq__35667,chunk__35669,count__35670,i__35671,new_link_35892,path_match_35891,node_35890,seq__35704_35884__$1,temp__5735__auto___35883,path,map__35666,map__35666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35891], 0));

goog.dom.insertSiblingAfter(new_link_35892,node_35890);


var G__35893 = cljs.core.next(seq__35704_35884__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35704_35864 = G__35893;
chunk__35708_35865 = G__35894;
count__35709_35866 = G__35895;
i__35710_35867 = G__35896;
continue;
} else {
var G__35897 = cljs.core.next(seq__35704_35884__$1);
var G__35898 = null;
var G__35899 = (0);
var G__35900 = (0);
seq__35704_35864 = G__35897;
chunk__35708_35865 = G__35898;
count__35709_35866 = G__35899;
i__35710_35867 = G__35900;
continue;
}
} else {
var G__35901 = cljs.core.next(seq__35704_35884__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35704_35864 = G__35901;
chunk__35708_35865 = G__35902;
count__35709_35866 = G__35903;
i__35710_35867 = G__35904;
continue;
}
}
} else {
}
}
break;
}


var G__35905 = seq__35667;
var G__35906 = chunk__35669;
var G__35907 = count__35670;
var G__35908 = (i__35671 + (1));
seq__35667 = G__35905;
chunk__35669 = G__35906;
count__35670 = G__35907;
i__35671 = G__35908;
continue;
} else {
var G__35909 = seq__35667;
var G__35910 = chunk__35669;
var G__35911 = count__35670;
var G__35912 = (i__35671 + (1));
seq__35667 = G__35909;
chunk__35669 = G__35910;
count__35670 = G__35911;
i__35671 = G__35912;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35667);
if(temp__5735__auto__){
var seq__35667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35667__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35667__$1);
var G__35913 = cljs.core.chunk_rest(seq__35667__$1);
var G__35914 = c__4591__auto__;
var G__35915 = cljs.core.count(c__4591__auto__);
var G__35916 = (0);
seq__35667 = G__35913;
chunk__35669 = G__35914;
count__35670 = G__35915;
i__35671 = G__35916;
continue;
} else {
var path = cljs.core.first(seq__35667__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35724_35917 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35728_35918 = null;
var count__35729_35919 = (0);
var i__35730_35920 = (0);
while(true){
if((i__35730_35920 < count__35729_35919)){
var node_35921 = chunk__35728_35918.cljs$core$IIndexed$_nth$arity$2(null,i__35730_35920);
if(cljs.core.not(node_35921.shadow$old)){
var path_match_35922 = shadow.cljs.devtools.client.browser.match_paths(node_35921.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35922)){
var new_link_35923 = (function (){var G__35738 = node_35921.cloneNode(true);
G__35738.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35922),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35738;
})();
(node_35921.shadow$old = true);

(new_link_35923.onload = ((function (seq__35724_35917,chunk__35728_35918,count__35729_35919,i__35730_35920,seq__35667,chunk__35669,count__35670,i__35671,new_link_35923,path_match_35922,node_35921,path,seq__35667__$1,temp__5735__auto__,map__35666,map__35666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35921);
});})(seq__35724_35917,chunk__35728_35918,count__35729_35919,i__35730_35920,seq__35667,chunk__35669,count__35670,i__35671,new_link_35923,path_match_35922,node_35921,path,seq__35667__$1,temp__5735__auto__,map__35666,map__35666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35922], 0));

goog.dom.insertSiblingAfter(new_link_35923,node_35921);


var G__35924 = seq__35724_35917;
var G__35925 = chunk__35728_35918;
var G__35926 = count__35729_35919;
var G__35927 = (i__35730_35920 + (1));
seq__35724_35917 = G__35924;
chunk__35728_35918 = G__35925;
count__35729_35919 = G__35926;
i__35730_35920 = G__35927;
continue;
} else {
var G__35928 = seq__35724_35917;
var G__35929 = chunk__35728_35918;
var G__35930 = count__35729_35919;
var G__35931 = (i__35730_35920 + (1));
seq__35724_35917 = G__35928;
chunk__35728_35918 = G__35929;
count__35729_35919 = G__35930;
i__35730_35920 = G__35931;
continue;
}
} else {
var G__35932 = seq__35724_35917;
var G__35933 = chunk__35728_35918;
var G__35934 = count__35729_35919;
var G__35935 = (i__35730_35920 + (1));
seq__35724_35917 = G__35932;
chunk__35728_35918 = G__35933;
count__35729_35919 = G__35934;
i__35730_35920 = G__35935;
continue;
}
} else {
var temp__5735__auto___35936__$1 = cljs.core.seq(seq__35724_35917);
if(temp__5735__auto___35936__$1){
var seq__35724_35937__$1 = temp__5735__auto___35936__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35724_35937__$1)){
var c__4591__auto___35938 = cljs.core.chunk_first(seq__35724_35937__$1);
var G__35939 = cljs.core.chunk_rest(seq__35724_35937__$1);
var G__35940 = c__4591__auto___35938;
var G__35941 = cljs.core.count(c__4591__auto___35938);
var G__35942 = (0);
seq__35724_35917 = G__35939;
chunk__35728_35918 = G__35940;
count__35729_35919 = G__35941;
i__35730_35920 = G__35942;
continue;
} else {
var node_35943 = cljs.core.first(seq__35724_35937__$1);
if(cljs.core.not(node_35943.shadow$old)){
var path_match_35944 = shadow.cljs.devtools.client.browser.match_paths(node_35943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35944)){
var new_link_35945 = (function (){var G__35743 = node_35943.cloneNode(true);
G__35743.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35743;
})();
(node_35943.shadow$old = true);

(new_link_35945.onload = ((function (seq__35724_35917,chunk__35728_35918,count__35729_35919,i__35730_35920,seq__35667,chunk__35669,count__35670,i__35671,new_link_35945,path_match_35944,node_35943,seq__35724_35937__$1,temp__5735__auto___35936__$1,path,seq__35667__$1,temp__5735__auto__,map__35666,map__35666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35943);
});})(seq__35724_35917,chunk__35728_35918,count__35729_35919,i__35730_35920,seq__35667,chunk__35669,count__35670,i__35671,new_link_35945,path_match_35944,node_35943,seq__35724_35937__$1,temp__5735__auto___35936__$1,path,seq__35667__$1,temp__5735__auto__,map__35666,map__35666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35944], 0));

goog.dom.insertSiblingAfter(new_link_35945,node_35943);


var G__35949 = cljs.core.next(seq__35724_35937__$1);
var G__35950 = null;
var G__35951 = (0);
var G__35952 = (0);
seq__35724_35917 = G__35949;
chunk__35728_35918 = G__35950;
count__35729_35919 = G__35951;
i__35730_35920 = G__35952;
continue;
} else {
var G__35953 = cljs.core.next(seq__35724_35937__$1);
var G__35954 = null;
var G__35955 = (0);
var G__35956 = (0);
seq__35724_35917 = G__35953;
chunk__35728_35918 = G__35954;
count__35729_35919 = G__35955;
i__35730_35920 = G__35956;
continue;
}
} else {
var G__35957 = cljs.core.next(seq__35724_35937__$1);
var G__35958 = null;
var G__35959 = (0);
var G__35960 = (0);
seq__35724_35917 = G__35957;
chunk__35728_35918 = G__35958;
count__35729_35919 = G__35959;
i__35730_35920 = G__35960;
continue;
}
}
} else {
}
}
break;
}


var G__35961 = cljs.core.next(seq__35667__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35667 = G__35961;
chunk__35669 = G__35962;
count__35670 = G__35963;
i__35671 = G__35964;
continue;
} else {
var G__35965 = cljs.core.next(seq__35667__$1);
var G__35966 = null;
var G__35967 = (0);
var G__35968 = (0);
seq__35667 = G__35965;
chunk__35669 = G__35966;
count__35670 = G__35967;
i__35671 = G__35968;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35749){
var map__35750 = p__35749;
var map__35750__$1 = cljs.core.__destructure_map(map__35750);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35750__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35769){
var map__35770 = p__35769;
var map__35770__$1 = cljs.core.__destructure_map(map__35770);
var _ = map__35770__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35771,done,error){
var map__35772 = p__35771;
var map__35772__$1 = cljs.core.__destructure_map(map__35772);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35775,done,error){
var map__35776 = p__35775;
var map__35776__$1 = cljs.core.__destructure_map(map__35776);
var msg = map__35776__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35777){
var map__35778 = p__35777;
var map__35778__$1 = cljs.core.__destructure_map(map__35778);
var src = map__35778__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35778__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35779 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35779) : done.call(null,G__35779));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35780){
var map__35781 = p__35780;
var map__35781__$1 = cljs.core.__destructure_map(map__35781);
var msg__$1 = map__35781__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35782){var ex = e35782;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35783){
var map__35784 = p__35783;
var map__35784__$1 = cljs.core.__destructure_map(map__35784);
var env = map__35784__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35785){
var map__35786 = p__35785;
var map__35786__$1 = cljs.core.__destructure_map(map__35786);
var msg = map__35786__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35787){
var map__35788 = p__35787;
var map__35788__$1 = cljs.core.__destructure_map(map__35788);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35789){
var map__35790 = p__35789;
var map__35790__$1 = cljs.core.__destructure_map(map__35790);
var svc = map__35790__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35790__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
