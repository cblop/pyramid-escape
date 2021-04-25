goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32637 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32637(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32641 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32641(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31556 = coll;
var G__31557 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31556,G__31557) : shadow.dom.lazy_native_coll_seq.call(null,G__31556,G__31557));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31583 = arguments.length;
switch (G__31583) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31597 = arguments.length;
switch (G__31597) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31608 = arguments.length;
switch (G__31608) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31653 = arguments.length;
switch (G__31653) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31669 = arguments.length;
switch (G__31669) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31678){if((e31678 instanceof Object)){
var e = e31678;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31678;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31686 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31687 = null;
var count__31688 = (0);
var i__31689 = (0);
while(true){
if((i__31689 < count__31688)){
var el = chunk__31687.cljs$core$IIndexed$_nth$arity$2(null,i__31689);
var handler_32783__$1 = ((function (seq__31686,chunk__31687,count__31688,i__31689,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31686,chunk__31687,count__31688,i__31689,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32783__$1);


var G__32821 = seq__31686;
var G__32822 = chunk__31687;
var G__32823 = count__31688;
var G__32824 = (i__31689 + (1));
seq__31686 = G__32821;
chunk__31687 = G__32822;
count__31688 = G__32823;
i__31689 = G__32824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31686);
if(temp__5735__auto__){
var seq__31686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31686__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31686__$1);
var G__32825 = cljs.core.chunk_rest(seq__31686__$1);
var G__32826 = c__4591__auto__;
var G__32827 = cljs.core.count(c__4591__auto__);
var G__32828 = (0);
seq__31686 = G__32825;
chunk__31687 = G__32826;
count__31688 = G__32827;
i__31689 = G__32828;
continue;
} else {
var el = cljs.core.first(seq__31686__$1);
var handler_32834__$1 = ((function (seq__31686,chunk__31687,count__31688,i__31689,el,seq__31686__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31686,chunk__31687,count__31688,i__31689,el,seq__31686__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32834__$1);


var G__32837 = cljs.core.next(seq__31686__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__31686 = G__32837;
chunk__31687 = G__32838;
count__31688 = G__32839;
i__31689 = G__32840;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31709 = arguments.length;
switch (G__31709) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31716 = cljs.core.seq(events);
var chunk__31717 = null;
var count__31718 = (0);
var i__31719 = (0);
while(true){
if((i__31719 < count__31718)){
var vec__31733 = chunk__31717.cljs$core$IIndexed$_nth$arity$2(null,i__31719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31733,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32848 = seq__31716;
var G__32849 = chunk__31717;
var G__32850 = count__31718;
var G__32851 = (i__31719 + (1));
seq__31716 = G__32848;
chunk__31717 = G__32849;
count__31718 = G__32850;
i__31719 = G__32851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31716);
if(temp__5735__auto__){
var seq__31716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31716__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31716__$1);
var G__32853 = cljs.core.chunk_rest(seq__31716__$1);
var G__32854 = c__4591__auto__;
var G__32855 = cljs.core.count(c__4591__auto__);
var G__32856 = (0);
seq__31716 = G__32853;
chunk__31717 = G__32854;
count__31718 = G__32855;
i__31719 = G__32856;
continue;
} else {
var vec__31739 = cljs.core.first(seq__31716__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31739,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32863 = cljs.core.next(seq__31716__$1);
var G__32864 = null;
var G__32865 = (0);
var G__32866 = (0);
seq__31716 = G__32863;
chunk__31717 = G__32864;
count__31718 = G__32865;
i__31719 = G__32866;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__31749 = cljs.core.seq(styles);
var chunk__31750 = null;
var count__31751 = (0);
var i__31752 = (0);
while(true){
if((i__31752 < count__31751)){
var vec__31770 = chunk__31750.cljs$core$IIndexed$_nth$arity$2(null,i__31752);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32871 = seq__31749;
var G__32872 = chunk__31750;
var G__32873 = count__31751;
var G__32874 = (i__31752 + (1));
seq__31749 = G__32871;
chunk__31750 = G__32872;
count__31751 = G__32873;
i__31752 = G__32874;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31749);
if(temp__5735__auto__){
var seq__31749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31749__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31749__$1);
var G__32879 = cljs.core.chunk_rest(seq__31749__$1);
var G__32880 = c__4591__auto__;
var G__32881 = cljs.core.count(c__4591__auto__);
var G__32882 = (0);
seq__31749 = G__32879;
chunk__31750 = G__32880;
count__31751 = G__32881;
i__31752 = G__32882;
continue;
} else {
var vec__31778 = cljs.core.first(seq__31749__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32928 = cljs.core.next(seq__31749__$1);
var G__32929 = null;
var G__32930 = (0);
var G__32931 = (0);
seq__31749 = G__32928;
chunk__31750 = G__32929;
count__31751 = G__32930;
i__31752 = G__32931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__31787_32933 = key;
var G__31787_32934__$1 = (((G__31787_32933 instanceof cljs.core.Keyword))?G__31787_32933.fqn:null);
switch (G__31787_32934__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32948 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_32948,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_32948,"aria-");
}
})())){
el.setAttribute(ks_32948,value);
} else {
(el[ks_32948] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31822){
var map__31823 = p__31822;
var map__31823__$1 = cljs.core.__destructure_map(map__31823);
var props = map__31823__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31824 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31824,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31824,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31824,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31827 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31827,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31827;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31832 = arguments.length;
switch (G__31832) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31836){
var vec__31838 = p__31836;
var seq__31839 = cljs.core.seq(vec__31838);
var first__31840 = cljs.core.first(seq__31839);
var seq__31839__$1 = cljs.core.next(seq__31839);
var nn = first__31840;
var first__31840__$1 = cljs.core.first(seq__31839__$1);
var seq__31839__$2 = cljs.core.next(seq__31839__$1);
var np = first__31840__$1;
var nc = seq__31839__$2;
var node = vec__31838;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31841 = nn;
var G__31842 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31841,G__31842) : create_fn.call(null,G__31841,G__31842));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31843 = nn;
var G__31844 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31843,G__31844) : create_fn.call(null,G__31843,G__31844));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31846 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31846,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31846,(1),null);
var seq__31856_32982 = cljs.core.seq(node_children);
var chunk__31857_32983 = null;
var count__31858_32984 = (0);
var i__31859_32985 = (0);
while(true){
if((i__31859_32985 < count__31858_32984)){
var child_struct_32990 = chunk__31857_32983.cljs$core$IIndexed$_nth$arity$2(null,i__31859_32985);
var children_32992 = shadow.dom.dom_node(child_struct_32990);
if(cljs.core.seq_QMARK_(children_32992)){
var seq__31895_32993 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32992));
var chunk__31898_32994 = null;
var count__31899_32995 = (0);
var i__31900_32996 = (0);
while(true){
if((i__31900_32996 < count__31899_32995)){
var child_32999 = chunk__31898_32994.cljs$core$IIndexed$_nth$arity$2(null,i__31900_32996);
if(cljs.core.truth_(child_32999)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32999);


var G__33000 = seq__31895_32993;
var G__33001 = chunk__31898_32994;
var G__33002 = count__31899_32995;
var G__33003 = (i__31900_32996 + (1));
seq__31895_32993 = G__33000;
chunk__31898_32994 = G__33001;
count__31899_32995 = G__33002;
i__31900_32996 = G__33003;
continue;
} else {
var G__33004 = seq__31895_32993;
var G__33005 = chunk__31898_32994;
var G__33006 = count__31899_32995;
var G__33007 = (i__31900_32996 + (1));
seq__31895_32993 = G__33004;
chunk__31898_32994 = G__33005;
count__31899_32995 = G__33006;
i__31900_32996 = G__33007;
continue;
}
} else {
var temp__5735__auto___33008 = cljs.core.seq(seq__31895_32993);
if(temp__5735__auto___33008){
var seq__31895_33009__$1 = temp__5735__auto___33008;
if(cljs.core.chunked_seq_QMARK_(seq__31895_33009__$1)){
var c__4591__auto___33011 = cljs.core.chunk_first(seq__31895_33009__$1);
var G__33013 = cljs.core.chunk_rest(seq__31895_33009__$1);
var G__33014 = c__4591__auto___33011;
var G__33015 = cljs.core.count(c__4591__auto___33011);
var G__33016 = (0);
seq__31895_32993 = G__33013;
chunk__31898_32994 = G__33014;
count__31899_32995 = G__33015;
i__31900_32996 = G__33016;
continue;
} else {
var child_33020 = cljs.core.first(seq__31895_33009__$1);
if(cljs.core.truth_(child_33020)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33020);


var G__33021 = cljs.core.next(seq__31895_33009__$1);
var G__33022 = null;
var G__33023 = (0);
var G__33024 = (0);
seq__31895_32993 = G__33021;
chunk__31898_32994 = G__33022;
count__31899_32995 = G__33023;
i__31900_32996 = G__33024;
continue;
} else {
var G__33025 = cljs.core.next(seq__31895_33009__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__31895_32993 = G__33025;
chunk__31898_32994 = G__33026;
count__31899_32995 = G__33027;
i__31900_32996 = G__33028;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32992);
}


var G__33029 = seq__31856_32982;
var G__33030 = chunk__31857_32983;
var G__33031 = count__31858_32984;
var G__33032 = (i__31859_32985 + (1));
seq__31856_32982 = G__33029;
chunk__31857_32983 = G__33030;
count__31858_32984 = G__33031;
i__31859_32985 = G__33032;
continue;
} else {
var temp__5735__auto___33033 = cljs.core.seq(seq__31856_32982);
if(temp__5735__auto___33033){
var seq__31856_33034__$1 = temp__5735__auto___33033;
if(cljs.core.chunked_seq_QMARK_(seq__31856_33034__$1)){
var c__4591__auto___33035 = cljs.core.chunk_first(seq__31856_33034__$1);
var G__33036 = cljs.core.chunk_rest(seq__31856_33034__$1);
var G__33037 = c__4591__auto___33035;
var G__33038 = cljs.core.count(c__4591__auto___33035);
var G__33039 = (0);
seq__31856_32982 = G__33036;
chunk__31857_32983 = G__33037;
count__31858_32984 = G__33038;
i__31859_32985 = G__33039;
continue;
} else {
var child_struct_33040 = cljs.core.first(seq__31856_33034__$1);
var children_33042 = shadow.dom.dom_node(child_struct_33040);
if(cljs.core.seq_QMARK_(children_33042)){
var seq__31927_33043 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33042));
var chunk__31929_33044 = null;
var count__31930_33045 = (0);
var i__31931_33046 = (0);
while(true){
if((i__31931_33046 < count__31930_33045)){
var child_33047 = chunk__31929_33044.cljs$core$IIndexed$_nth$arity$2(null,i__31931_33046);
if(cljs.core.truth_(child_33047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33047);


var G__33049 = seq__31927_33043;
var G__33050 = chunk__31929_33044;
var G__33051 = count__31930_33045;
var G__33052 = (i__31931_33046 + (1));
seq__31927_33043 = G__33049;
chunk__31929_33044 = G__33050;
count__31930_33045 = G__33051;
i__31931_33046 = G__33052;
continue;
} else {
var G__33106 = seq__31927_33043;
var G__33107 = chunk__31929_33044;
var G__33108 = count__31930_33045;
var G__33109 = (i__31931_33046 + (1));
seq__31927_33043 = G__33106;
chunk__31929_33044 = G__33107;
count__31930_33045 = G__33108;
i__31931_33046 = G__33109;
continue;
}
} else {
var temp__5735__auto___33111__$1 = cljs.core.seq(seq__31927_33043);
if(temp__5735__auto___33111__$1){
var seq__31927_33112__$1 = temp__5735__auto___33111__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31927_33112__$1)){
var c__4591__auto___33114 = cljs.core.chunk_first(seq__31927_33112__$1);
var G__33115 = cljs.core.chunk_rest(seq__31927_33112__$1);
var G__33116 = c__4591__auto___33114;
var G__33117 = cljs.core.count(c__4591__auto___33114);
var G__33118 = (0);
seq__31927_33043 = G__33115;
chunk__31929_33044 = G__33116;
count__31930_33045 = G__33117;
i__31931_33046 = G__33118;
continue;
} else {
var child_33120 = cljs.core.first(seq__31927_33112__$1);
if(cljs.core.truth_(child_33120)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33120);


var G__33122 = cljs.core.next(seq__31927_33112__$1);
var G__33123 = null;
var G__33124 = (0);
var G__33125 = (0);
seq__31927_33043 = G__33122;
chunk__31929_33044 = G__33123;
count__31930_33045 = G__33124;
i__31931_33046 = G__33125;
continue;
} else {
var G__33126 = cljs.core.next(seq__31927_33112__$1);
var G__33127 = null;
var G__33128 = (0);
var G__33129 = (0);
seq__31927_33043 = G__33126;
chunk__31929_33044 = G__33127;
count__31930_33045 = G__33128;
i__31931_33046 = G__33129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33042);
}


var G__33133 = cljs.core.next(seq__31856_33034__$1);
var G__33134 = null;
var G__33135 = (0);
var G__33136 = (0);
seq__31856_32982 = G__33133;
chunk__31857_32983 = G__33134;
count__31858_32984 = G__33135;
i__31859_32985 = G__33136;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__31943 = cljs.core.seq(node);
var chunk__31944 = null;
var count__31945 = (0);
var i__31946 = (0);
while(true){
if((i__31946 < count__31945)){
var n = chunk__31944.cljs$core$IIndexed$_nth$arity$2(null,i__31946);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33151 = seq__31943;
var G__33152 = chunk__31944;
var G__33153 = count__31945;
var G__33154 = (i__31946 + (1));
seq__31943 = G__33151;
chunk__31944 = G__33152;
count__31945 = G__33153;
i__31946 = G__33154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31943);
if(temp__5735__auto__){
var seq__31943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31943__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31943__$1);
var G__33160 = cljs.core.chunk_rest(seq__31943__$1);
var G__33161 = c__4591__auto__;
var G__33162 = cljs.core.count(c__4591__auto__);
var G__33163 = (0);
seq__31943 = G__33160;
chunk__31944 = G__33161;
count__31945 = G__33162;
i__31946 = G__33163;
continue;
} else {
var n = cljs.core.first(seq__31943__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33165 = cljs.core.next(seq__31943__$1);
var G__33166 = null;
var G__33167 = (0);
var G__33168 = (0);
seq__31943 = G__33165;
chunk__31944 = G__33166;
count__31945 = G__33167;
i__31946 = G__33168;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__31963 = arguments.length;
switch (G__31963) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__31969 = arguments.length;
switch (G__31969) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31981 = arguments.length;
switch (G__31981) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33210 = arguments.length;
var i__4772__auto___33211 = (0);
while(true){
if((i__4772__auto___33211 < len__4771__auto___33210)){
args__4777__auto__.push((arguments[i__4772__auto___33211]));

var G__33213 = (i__4772__auto___33211 + (1));
i__4772__auto___33211 = G__33213;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32003_33219 = cljs.core.seq(nodes);
var chunk__32004_33220 = null;
var count__32005_33221 = (0);
var i__32006_33222 = (0);
while(true){
if((i__32006_33222 < count__32005_33221)){
var node_33224 = chunk__32004_33220.cljs$core$IIndexed$_nth$arity$2(null,i__32006_33222);
fragment.appendChild(shadow.dom._to_dom(node_33224));


var G__33226 = seq__32003_33219;
var G__33227 = chunk__32004_33220;
var G__33228 = count__32005_33221;
var G__33229 = (i__32006_33222 + (1));
seq__32003_33219 = G__33226;
chunk__32004_33220 = G__33227;
count__32005_33221 = G__33228;
i__32006_33222 = G__33229;
continue;
} else {
var temp__5735__auto___33231 = cljs.core.seq(seq__32003_33219);
if(temp__5735__auto___33231){
var seq__32003_33234__$1 = temp__5735__auto___33231;
if(cljs.core.chunked_seq_QMARK_(seq__32003_33234__$1)){
var c__4591__auto___33237 = cljs.core.chunk_first(seq__32003_33234__$1);
var G__33238 = cljs.core.chunk_rest(seq__32003_33234__$1);
var G__33239 = c__4591__auto___33237;
var G__33240 = cljs.core.count(c__4591__auto___33237);
var G__33241 = (0);
seq__32003_33219 = G__33238;
chunk__32004_33220 = G__33239;
count__32005_33221 = G__33240;
i__32006_33222 = G__33241;
continue;
} else {
var node_33243 = cljs.core.first(seq__32003_33234__$1);
fragment.appendChild(shadow.dom._to_dom(node_33243));


var G__33244 = cljs.core.next(seq__32003_33234__$1);
var G__33245 = null;
var G__33246 = (0);
var G__33247 = (0);
seq__32003_33219 = G__33244;
chunk__32004_33220 = G__33245;
count__32005_33221 = G__33246;
i__32006_33222 = G__33247;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31999){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31999));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32015_33252 = cljs.core.seq(scripts);
var chunk__32016_33253 = null;
var count__32017_33254 = (0);
var i__32018_33255 = (0);
while(true){
if((i__32018_33255 < count__32017_33254)){
var vec__32032_33258 = chunk__32016_33253.cljs$core$IIndexed$_nth$arity$2(null,i__32018_33255);
var script_tag_33259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32032_33258,(0),null);
var script_body_33260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32032_33258,(1),null);
eval(script_body_33260);


var G__33263 = seq__32015_33252;
var G__33264 = chunk__32016_33253;
var G__33265 = count__32017_33254;
var G__33266 = (i__32018_33255 + (1));
seq__32015_33252 = G__33263;
chunk__32016_33253 = G__33264;
count__32017_33254 = G__33265;
i__32018_33255 = G__33266;
continue;
} else {
var temp__5735__auto___33268 = cljs.core.seq(seq__32015_33252);
if(temp__5735__auto___33268){
var seq__32015_33269__$1 = temp__5735__auto___33268;
if(cljs.core.chunked_seq_QMARK_(seq__32015_33269__$1)){
var c__4591__auto___33271 = cljs.core.chunk_first(seq__32015_33269__$1);
var G__33272 = cljs.core.chunk_rest(seq__32015_33269__$1);
var G__33273 = c__4591__auto___33271;
var G__33274 = cljs.core.count(c__4591__auto___33271);
var G__33275 = (0);
seq__32015_33252 = G__33272;
chunk__32016_33253 = G__33273;
count__32017_33254 = G__33274;
i__32018_33255 = G__33275;
continue;
} else {
var vec__32037_33277 = cljs.core.first(seq__32015_33269__$1);
var script_tag_33278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037_33277,(0),null);
var script_body_33279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037_33277,(1),null);
eval(script_body_33279);


var G__33280 = cljs.core.next(seq__32015_33269__$1);
var G__33281 = null;
var G__33282 = (0);
var G__33283 = (0);
seq__32015_33252 = G__33280;
chunk__32016_33253 = G__33281;
count__32017_33254 = G__33282;
i__32018_33255 = G__33283;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32043){
var vec__32044 = p__32043;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32063 = arguments.length;
switch (G__32063) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32081 = cljs.core.seq(style_keys);
var chunk__32082 = null;
var count__32083 = (0);
var i__32084 = (0);
while(true){
if((i__32084 < count__32083)){
var it = chunk__32082.cljs$core$IIndexed$_nth$arity$2(null,i__32084);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33327 = seq__32081;
var G__33328 = chunk__32082;
var G__33329 = count__32083;
var G__33330 = (i__32084 + (1));
seq__32081 = G__33327;
chunk__32082 = G__33328;
count__32083 = G__33329;
i__32084 = G__33330;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32081);
if(temp__5735__auto__){
var seq__32081__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32081__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32081__$1);
var G__33338 = cljs.core.chunk_rest(seq__32081__$1);
var G__33339 = c__4591__auto__;
var G__33340 = cljs.core.count(c__4591__auto__);
var G__33341 = (0);
seq__32081 = G__33338;
chunk__32082 = G__33339;
count__32083 = G__33340;
i__32084 = G__33341;
continue;
} else {
var it = cljs.core.first(seq__32081__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33345 = cljs.core.next(seq__32081__$1);
var G__33346 = null;
var G__33347 = (0);
var G__33348 = (0);
seq__32081 = G__33345;
chunk__32082 = G__33346;
count__32083 = G__33347;
i__32084 = G__33348;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32094,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32102 = k32094;
var G__32102__$1 = (((G__32102 instanceof cljs.core.Keyword))?G__32102.fqn:null);
switch (G__32102__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32094,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32106){
var vec__32107 = p__32106;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32107,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32107,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32093){
var self__ = this;
var G__32093__$1 = this;
return (new cljs.core.RecordIter((0),G__32093__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32095,other32096){
var self__ = this;
var this32095__$1 = this;
return (((!((other32096 == null)))) && ((this32095__$1.constructor === other32096.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32095__$1.x,other32096.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32095__$1.y,other32096.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32095__$1.__extmap,other32096.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32093){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32130 = cljs.core.keyword_identical_QMARK_;
var expr__32131 = k__4423__auto__;
if(cljs.core.truth_((pred__32130.cljs$core$IFn$_invoke$arity$2 ? pred__32130.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32131) : pred__32130.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32131)))){
return (new shadow.dom.Coordinate(G__32093,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32130.cljs$core$IFn$_invoke$arity$2 ? pred__32130.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32131) : pred__32130.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32131)))){
return (new shadow.dom.Coordinate(self__.x,G__32093,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32093),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32093){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32093,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32098){
var extmap__4454__auto__ = (function (){var G__32143 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32098,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32143);
} else {
return G__32143;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32098),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32098),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32151,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32161 = k32151;
var G__32161__$1 = (((G__32161 instanceof cljs.core.Keyword))?G__32161.fqn:null);
switch (G__32161__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32151,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32164){
var vec__32165 = p__32164;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32165,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32165,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32150){
var self__ = this;
var G__32150__$1 = this;
return (new cljs.core.RecordIter((0),G__32150__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32152,other32153){
var self__ = this;
var this32152__$1 = this;
return (((!((other32153 == null)))) && ((this32152__$1.constructor === other32153.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32152__$1.w,other32153.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32152__$1.h,other32153.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32152__$1.__extmap,other32153.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32150){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32182 = cljs.core.keyword_identical_QMARK_;
var expr__32183 = k__4423__auto__;
if(cljs.core.truth_((pred__32182.cljs$core$IFn$_invoke$arity$2 ? pred__32182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32183) : pred__32182.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32183)))){
return (new shadow.dom.Size(G__32150,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32182.cljs$core$IFn$_invoke$arity$2 ? pred__32182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32183) : pred__32182.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32183)))){
return (new shadow.dom.Size(self__.w,G__32150,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32150),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32150){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32150,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32154){
var extmap__4454__auto__ = (function (){var G__32197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32154,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32154)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32197);
} else {
return G__32197;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32154),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32154),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__33463 = (i + (1));
var G__33464 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33463;
ret = G__33464;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32245){
var vec__32247 = p__32245;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32247,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32254 = arguments.length;
switch (G__32254) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33481 = ps;
var G__33482 = (i + (1));
el__$1 = G__33481;
i = G__33482;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32312 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32317_33491 = cljs.core.seq(props);
var chunk__32318_33492 = null;
var count__32319_33493 = (0);
var i__32320_33494 = (0);
while(true){
if((i__32320_33494 < count__32319_33493)){
var vec__32343_33495 = chunk__32318_33492.cljs$core$IIndexed$_nth$arity$2(null,i__32320_33494);
var k_33496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32343_33495,(0),null);
var v_33497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32343_33495,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33496);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33496),v_33497);


var G__33500 = seq__32317_33491;
var G__33501 = chunk__32318_33492;
var G__33502 = count__32319_33493;
var G__33503 = (i__32320_33494 + (1));
seq__32317_33491 = G__33500;
chunk__32318_33492 = G__33501;
count__32319_33493 = G__33502;
i__32320_33494 = G__33503;
continue;
} else {
var temp__5735__auto___33507 = cljs.core.seq(seq__32317_33491);
if(temp__5735__auto___33507){
var seq__32317_33508__$1 = temp__5735__auto___33507;
if(cljs.core.chunked_seq_QMARK_(seq__32317_33508__$1)){
var c__4591__auto___33515 = cljs.core.chunk_first(seq__32317_33508__$1);
var G__33516 = cljs.core.chunk_rest(seq__32317_33508__$1);
var G__33517 = c__4591__auto___33515;
var G__33518 = cljs.core.count(c__4591__auto___33515);
var G__33519 = (0);
seq__32317_33491 = G__33516;
chunk__32318_33492 = G__33517;
count__32319_33493 = G__33518;
i__32320_33494 = G__33519;
continue;
} else {
var vec__32354_33521 = cljs.core.first(seq__32317_33508__$1);
var k_33522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354_33521,(0),null);
var v_33523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354_33521,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33522);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33522),v_33523);


var G__33525 = cljs.core.next(seq__32317_33508__$1);
var G__33526 = null;
var G__33527 = (0);
var G__33528 = (0);
seq__32317_33491 = G__33525;
chunk__32318_33492 = G__33526;
count__32319_33493 = G__33527;
i__32320_33494 = G__33528;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32378 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32378,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32378,(1),null);
var seq__32381_33535 = cljs.core.seq(node_children);
var chunk__32383_33536 = null;
var count__32384_33537 = (0);
var i__32385_33538 = (0);
while(true){
if((i__32385_33538 < count__32384_33537)){
var child_struct_33539 = chunk__32383_33536.cljs$core$IIndexed$_nth$arity$2(null,i__32385_33538);
if((!((child_struct_33539 == null)))){
if(typeof child_struct_33539 === 'string'){
var text_33543 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33543),child_struct_33539].join(''));
} else {
var children_33548 = shadow.dom.svg_node(child_struct_33539);
if(cljs.core.seq_QMARK_(children_33548)){
var seq__32437_33550 = cljs.core.seq(children_33548);
var chunk__32439_33551 = null;
var count__32440_33552 = (0);
var i__32441_33553 = (0);
while(true){
if((i__32441_33553 < count__32440_33552)){
var child_33555 = chunk__32439_33551.cljs$core$IIndexed$_nth$arity$2(null,i__32441_33553);
if(cljs.core.truth_(child_33555)){
node.appendChild(child_33555);


var G__33557 = seq__32437_33550;
var G__33558 = chunk__32439_33551;
var G__33559 = count__32440_33552;
var G__33560 = (i__32441_33553 + (1));
seq__32437_33550 = G__33557;
chunk__32439_33551 = G__33558;
count__32440_33552 = G__33559;
i__32441_33553 = G__33560;
continue;
} else {
var G__33561 = seq__32437_33550;
var G__33562 = chunk__32439_33551;
var G__33563 = count__32440_33552;
var G__33564 = (i__32441_33553 + (1));
seq__32437_33550 = G__33561;
chunk__32439_33551 = G__33562;
count__32440_33552 = G__33563;
i__32441_33553 = G__33564;
continue;
}
} else {
var temp__5735__auto___33568 = cljs.core.seq(seq__32437_33550);
if(temp__5735__auto___33568){
var seq__32437_33569__$1 = temp__5735__auto___33568;
if(cljs.core.chunked_seq_QMARK_(seq__32437_33569__$1)){
var c__4591__auto___33570 = cljs.core.chunk_first(seq__32437_33569__$1);
var G__33571 = cljs.core.chunk_rest(seq__32437_33569__$1);
var G__33572 = c__4591__auto___33570;
var G__33573 = cljs.core.count(c__4591__auto___33570);
var G__33574 = (0);
seq__32437_33550 = G__33571;
chunk__32439_33551 = G__33572;
count__32440_33552 = G__33573;
i__32441_33553 = G__33574;
continue;
} else {
var child_33575 = cljs.core.first(seq__32437_33569__$1);
if(cljs.core.truth_(child_33575)){
node.appendChild(child_33575);


var G__33576 = cljs.core.next(seq__32437_33569__$1);
var G__33577 = null;
var G__33578 = (0);
var G__33579 = (0);
seq__32437_33550 = G__33576;
chunk__32439_33551 = G__33577;
count__32440_33552 = G__33578;
i__32441_33553 = G__33579;
continue;
} else {
var G__33580 = cljs.core.next(seq__32437_33569__$1);
var G__33581 = null;
var G__33582 = (0);
var G__33583 = (0);
seq__32437_33550 = G__33580;
chunk__32439_33551 = G__33581;
count__32440_33552 = G__33582;
i__32441_33553 = G__33583;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33548);
}
}


var G__33585 = seq__32381_33535;
var G__33586 = chunk__32383_33536;
var G__33587 = count__32384_33537;
var G__33588 = (i__32385_33538 + (1));
seq__32381_33535 = G__33585;
chunk__32383_33536 = G__33586;
count__32384_33537 = G__33587;
i__32385_33538 = G__33588;
continue;
} else {
var G__33590 = seq__32381_33535;
var G__33591 = chunk__32383_33536;
var G__33592 = count__32384_33537;
var G__33593 = (i__32385_33538 + (1));
seq__32381_33535 = G__33590;
chunk__32383_33536 = G__33591;
count__32384_33537 = G__33592;
i__32385_33538 = G__33593;
continue;
}
} else {
var temp__5735__auto___33597 = cljs.core.seq(seq__32381_33535);
if(temp__5735__auto___33597){
var seq__32381_33598__$1 = temp__5735__auto___33597;
if(cljs.core.chunked_seq_QMARK_(seq__32381_33598__$1)){
var c__4591__auto___33599 = cljs.core.chunk_first(seq__32381_33598__$1);
var G__33600 = cljs.core.chunk_rest(seq__32381_33598__$1);
var G__33601 = c__4591__auto___33599;
var G__33602 = cljs.core.count(c__4591__auto___33599);
var G__33603 = (0);
seq__32381_33535 = G__33600;
chunk__32383_33536 = G__33601;
count__32384_33537 = G__33602;
i__32385_33538 = G__33603;
continue;
} else {
var child_struct_33604 = cljs.core.first(seq__32381_33598__$1);
if((!((child_struct_33604 == null)))){
if(typeof child_struct_33604 === 'string'){
var text_33606 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33606),child_struct_33604].join(''));
} else {
var children_33607 = shadow.dom.svg_node(child_struct_33604);
if(cljs.core.seq_QMARK_(children_33607)){
var seq__32484_33608 = cljs.core.seq(children_33607);
var chunk__32486_33609 = null;
var count__32487_33610 = (0);
var i__32488_33611 = (0);
while(true){
if((i__32488_33611 < count__32487_33610)){
var child_33612 = chunk__32486_33609.cljs$core$IIndexed$_nth$arity$2(null,i__32488_33611);
if(cljs.core.truth_(child_33612)){
node.appendChild(child_33612);


var G__33613 = seq__32484_33608;
var G__33614 = chunk__32486_33609;
var G__33615 = count__32487_33610;
var G__33616 = (i__32488_33611 + (1));
seq__32484_33608 = G__33613;
chunk__32486_33609 = G__33614;
count__32487_33610 = G__33615;
i__32488_33611 = G__33616;
continue;
} else {
var G__33618 = seq__32484_33608;
var G__33619 = chunk__32486_33609;
var G__33620 = count__32487_33610;
var G__33621 = (i__32488_33611 + (1));
seq__32484_33608 = G__33618;
chunk__32486_33609 = G__33619;
count__32487_33610 = G__33620;
i__32488_33611 = G__33621;
continue;
}
} else {
var temp__5735__auto___33623__$1 = cljs.core.seq(seq__32484_33608);
if(temp__5735__auto___33623__$1){
var seq__32484_33625__$1 = temp__5735__auto___33623__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32484_33625__$1)){
var c__4591__auto___33626 = cljs.core.chunk_first(seq__32484_33625__$1);
var G__33627 = cljs.core.chunk_rest(seq__32484_33625__$1);
var G__33628 = c__4591__auto___33626;
var G__33629 = cljs.core.count(c__4591__auto___33626);
var G__33630 = (0);
seq__32484_33608 = G__33627;
chunk__32486_33609 = G__33628;
count__32487_33610 = G__33629;
i__32488_33611 = G__33630;
continue;
} else {
var child_33634 = cljs.core.first(seq__32484_33625__$1);
if(cljs.core.truth_(child_33634)){
node.appendChild(child_33634);


var G__33639 = cljs.core.next(seq__32484_33625__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__32484_33608 = G__33639;
chunk__32486_33609 = G__33640;
count__32487_33610 = G__33641;
i__32488_33611 = G__33642;
continue;
} else {
var G__33643 = cljs.core.next(seq__32484_33625__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__32484_33608 = G__33643;
chunk__32486_33609 = G__33644;
count__32487_33610 = G__33645;
i__32488_33611 = G__33646;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33607);
}
}


var G__33647 = cljs.core.next(seq__32381_33598__$1);
var G__33648 = null;
var G__33649 = (0);
var G__33650 = (0);
seq__32381_33535 = G__33647;
chunk__32383_33536 = G__33648;
count__32384_33537 = G__33649;
i__32385_33538 = G__33650;
continue;
} else {
var G__33651 = cljs.core.next(seq__32381_33598__$1);
var G__33652 = null;
var G__33653 = (0);
var G__33654 = (0);
seq__32381_33535 = G__33651;
chunk__32383_33536 = G__33652;
count__32384_33537 = G__33653;
i__32385_33538 = G__33654;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33660 = arguments.length;
var i__4772__auto___33661 = (0);
while(true){
if((i__4772__auto___33661 < len__4771__auto___33660)){
args__4777__auto__.push((arguments[i__4772__auto___33661]));

var G__33662 = (i__4772__auto___33661 + (1));
i__4772__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32545){
var G__32546 = cljs.core.first(seq32545);
var seq32545__$1 = cljs.core.next(seq32545);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32546,seq32545__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32565 = arguments.length;
switch (G__32565) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__28730__auto___33672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_32585){
var state_val_32586 = (state_32585[(1)]);
if((state_val_32586 === (1))){
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32585__$1,(2),once_or_cleanup);
} else {
if((state_val_32586 === (2))){
var inst_32582 = (state_32585[(2)]);
var inst_32583 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32585__$1 = (function (){var statearr_32592 = state_32585;
(statearr_32592[(7)] = inst_32582);

return statearr_32592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32585__$1,inst_32583);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28545__auto__ = null;
var shadow$dom$state_machine__28545__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = shadow$dom$state_machine__28545__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var shadow$dom$state_machine__28545__auto____1 = (function (state_32585){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_32585);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e32598){var ex__28548__auto__ = e32598;
var statearr_32599_33676 = state_32585;
(statearr_32599_33676[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_32585[(4)]))){
var statearr_32602_33677 = state_32585;
(statearr_32602_33677[(1)] = cljs.core.first((state_32585[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33678 = state_32585;
state_32585 = G__33678;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
shadow$dom$state_machine__28545__auto__ = function(state_32585){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28545__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28545__auto____1.call(this,state_32585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28545__auto____0;
shadow$dom$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28545__auto____1;
return shadow$dom$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_32605 = f__28731__auto__();
(statearr_32605[(6)] = c__28730__auto___33672);

return statearr_32605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
