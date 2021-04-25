goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34707){
var map__34708 = p__34707;
var map__34708__$1 = cljs.core.__destructure_map(map__34708);
var m = map__34708__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34710_34912 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34711_34913 = null;
var count__34712_34914 = (0);
var i__34713_34915 = (0);
while(true){
if((i__34713_34915 < count__34712_34914)){
var f_34916 = chunk__34711_34913.cljs$core$IIndexed$_nth$arity$2(null,i__34713_34915);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34916], 0));


var G__34917 = seq__34710_34912;
var G__34918 = chunk__34711_34913;
var G__34919 = count__34712_34914;
var G__34920 = (i__34713_34915 + (1));
seq__34710_34912 = G__34917;
chunk__34711_34913 = G__34918;
count__34712_34914 = G__34919;
i__34713_34915 = G__34920;
continue;
} else {
var temp__5735__auto___34921 = cljs.core.seq(seq__34710_34912);
if(temp__5735__auto___34921){
var seq__34710_34922__$1 = temp__5735__auto___34921;
if(cljs.core.chunked_seq_QMARK_(seq__34710_34922__$1)){
var c__4591__auto___34923 = cljs.core.chunk_first(seq__34710_34922__$1);
var G__34924 = cljs.core.chunk_rest(seq__34710_34922__$1);
var G__34925 = c__4591__auto___34923;
var G__34926 = cljs.core.count(c__4591__auto___34923);
var G__34927 = (0);
seq__34710_34912 = G__34924;
chunk__34711_34913 = G__34925;
count__34712_34914 = G__34926;
i__34713_34915 = G__34927;
continue;
} else {
var f_34928 = cljs.core.first(seq__34710_34922__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34928], 0));


var G__34929 = cljs.core.next(seq__34710_34922__$1);
var G__34930 = null;
var G__34931 = (0);
var G__34932 = (0);
seq__34710_34912 = G__34929;
chunk__34711_34913 = G__34930;
count__34712_34914 = G__34931;
i__34713_34915 = G__34932;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34933 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34933], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34933)))?cljs.core.second(arglists_34933):arglists_34933)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34718_34938 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34719_34939 = null;
var count__34720_34940 = (0);
var i__34721_34941 = (0);
while(true){
if((i__34721_34941 < count__34720_34940)){
var vec__34732_34942 = chunk__34719_34939.cljs$core$IIndexed$_nth$arity$2(null,i__34721_34941);
var name_34943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732_34942,(0),null);
var map__34735_34944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732_34942,(1),null);
var map__34735_34945__$1 = cljs.core.__destructure_map(map__34735_34944);
var doc_34946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735_34945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735_34945__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34943], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34947], 0));

if(cljs.core.truth_(doc_34946)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34946], 0));
} else {
}


var G__34948 = seq__34718_34938;
var G__34949 = chunk__34719_34939;
var G__34950 = count__34720_34940;
var G__34951 = (i__34721_34941 + (1));
seq__34718_34938 = G__34948;
chunk__34719_34939 = G__34949;
count__34720_34940 = G__34950;
i__34721_34941 = G__34951;
continue;
} else {
var temp__5735__auto___34952 = cljs.core.seq(seq__34718_34938);
if(temp__5735__auto___34952){
var seq__34718_34953__$1 = temp__5735__auto___34952;
if(cljs.core.chunked_seq_QMARK_(seq__34718_34953__$1)){
var c__4591__auto___34954 = cljs.core.chunk_first(seq__34718_34953__$1);
var G__34955 = cljs.core.chunk_rest(seq__34718_34953__$1);
var G__34956 = c__4591__auto___34954;
var G__34957 = cljs.core.count(c__4591__auto___34954);
var G__34958 = (0);
seq__34718_34938 = G__34955;
chunk__34719_34939 = G__34956;
count__34720_34940 = G__34957;
i__34721_34941 = G__34958;
continue;
} else {
var vec__34736_34959 = cljs.core.first(seq__34718_34953__$1);
var name_34960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_34959,(0),null);
var map__34739_34961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736_34959,(1),null);
var map__34739_34962__$1 = cljs.core.__destructure_map(map__34739_34961);
var doc_34963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_34962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34739_34962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34960], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34964], 0));

if(cljs.core.truth_(doc_34963)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34963], 0));
} else {
}


var G__34965 = cljs.core.next(seq__34718_34953__$1);
var G__34966 = null;
var G__34967 = (0);
var G__34968 = (0);
seq__34718_34938 = G__34965;
chunk__34719_34939 = G__34966;
count__34720_34940 = G__34967;
i__34721_34941 = G__34968;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34740 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34741 = null;
var count__34742 = (0);
var i__34743 = (0);
while(true){
if((i__34743 < count__34742)){
var role = chunk__34741.cljs$core$IIndexed$_nth$arity$2(null,i__34743);
var temp__5735__auto___34971__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34971__$1)){
var spec_34972 = temp__5735__auto___34971__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34972)], 0));
} else {
}


var G__34973 = seq__34740;
var G__34974 = chunk__34741;
var G__34975 = count__34742;
var G__34976 = (i__34743 + (1));
seq__34740 = G__34973;
chunk__34741 = G__34974;
count__34742 = G__34975;
i__34743 = G__34976;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34740);
if(temp__5735__auto____$1){
var seq__34740__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34740__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34740__$1);
var G__34977 = cljs.core.chunk_rest(seq__34740__$1);
var G__34978 = c__4591__auto__;
var G__34979 = cljs.core.count(c__4591__auto__);
var G__34980 = (0);
seq__34740 = G__34977;
chunk__34741 = G__34978;
count__34742 = G__34979;
i__34743 = G__34980;
continue;
} else {
var role = cljs.core.first(seq__34740__$1);
var temp__5735__auto___34981__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34981__$2)){
var spec_34982 = temp__5735__auto___34981__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34982)], 0));
} else {
}


var G__34983 = cljs.core.next(seq__34740__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34740 = G__34983;
chunk__34741 = G__34984;
count__34742 = G__34985;
i__34743 = G__34986;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34994 = cljs.core.ex_cause(t);
via = G__34993;
t = G__34994;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34768 = datafied_throwable;
var map__34768__$1 = cljs.core.__destructure_map(map__34768);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34768__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34769 = cljs.core.last(via);
var map__34769__$1 = cljs.core.__destructure_map(map__34769);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34769__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34769__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34769__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34770 = data;
var map__34770__$1 = cljs.core.__destructure_map(map__34770);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34770__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34770__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34770__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34771 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34771__$1 = cljs.core.__destructure_map(map__34771);
var top_data = map__34771__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34772 = phase;
var G__34772__$1 = (((G__34772 instanceof cljs.core.Keyword))?G__34772.fqn:null);
switch (G__34772__$1) {
case "read-source":
var map__34780 = data;
var map__34780__$1 = cljs.core.__destructure_map(map__34780);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34781 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34781__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34781);
var G__34781__$2 = (cljs.core.truth_((function (){var fexpr__34782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34782.cljs$core$IFn$_invoke$arity$1 ? fexpr__34782.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34782.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34781__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34781__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34781__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34783 = top_data;
var G__34783__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34783,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34783);
var G__34783__$2 = (cljs.core.truth_((function (){var fexpr__34784 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34784.cljs$core$IFn$_invoke$arity$1 ? fexpr__34784.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34784.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34783__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34783__$1);
var G__34783__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34783__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34783__$2);
var G__34783__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34783__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34783__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34783__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34783__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34791 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(3),null);
var G__34799 = top_data;
var G__34799__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34799,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34799);
var G__34799__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34799__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34799__$1);
var G__34799__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34799__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34799__$2);
var G__34799__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34799__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34799__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34799__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34799__$4;
}

break;
case "execution":
var vec__34827 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34827,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34750_SHARP_){
var or__4160__auto__ = (p1__34750_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__34831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34831.cljs$core$IFn$_invoke$arity$1 ? fexpr__34831.cljs$core$IFn$_invoke$arity$1(p1__34750_SHARP_) : fexpr__34831.call(null,p1__34750_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__34836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34836__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34836,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34836);
var G__34836__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34836__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34836__$1);
var G__34836__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34836__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34836__$2);
var G__34836__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34836__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34836__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34836__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34836__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34772__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34864){
var map__34865 = p__34864;
var map__34865__$1 = cljs.core.__destructure_map(map__34865);
var triage_data = map__34865__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34870 = phase;
var G__34870__$1 = (((G__34870 instanceof cljs.core.Keyword))?G__34870.fqn:null);
switch (G__34870__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34871 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34873 = loc;
var G__34874 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34875_35008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34876_35009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34877_35010 = true;
var _STAR_print_fn_STAR__temp_val__34878_35011 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34877_35010);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34878_35011);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34854_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34854_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34876_35009);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34875_35008);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34871,G__34872,G__34873,G__34874) : format.call(null,G__34871,G__34872,G__34873,G__34874));

break;
case "macroexpansion":
var G__34881 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34882 = cause_type;
var G__34883 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34884 = loc;
var G__34885 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34881,G__34882,G__34883,G__34884,G__34885) : format.call(null,G__34881,G__34882,G__34883,G__34884,G__34885));

break;
case "compile-syntax-check":
var G__34886 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34887 = cause_type;
var G__34888 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34889 = loc;
var G__34890 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34886,G__34887,G__34888,G__34889,G__34890) : format.call(null,G__34886,G__34887,G__34888,G__34889,G__34890));

break;
case "compilation":
var G__34891 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34892 = cause_type;
var G__34893 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34894 = loc;
var G__34895 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34891,G__34892,G__34893,G__34894,G__34895) : format.call(null,G__34891,G__34892,G__34893,G__34894,G__34895));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34896 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34897 = symbol;
var G__34898 = loc;
var G__34899 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34900_35012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34901_35013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34902_35014 = true;
var _STAR_print_fn_STAR__temp_val__34903_35015 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34902_35014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34903_35015);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34859_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34859_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34901_35013);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34900_35012);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34896,G__34897,G__34898,G__34899) : format.call(null,G__34896,G__34897,G__34898,G__34899));
} else {
var G__34904 = "Execution error%s at %s(%s).\n%s\n";
var G__34905 = cause_type;
var G__34906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34907 = loc;
var G__34908 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34904,G__34905,G__34906,G__34907,G__34908) : format.call(null,G__34904,G__34905,G__34906,G__34907,G__34908));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34870__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
