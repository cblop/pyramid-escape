goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28807 = arguments.length;
switch (G__28807) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28808 = (function (f,blockable,meta28809){
this.f = f;
this.blockable = blockable;
this.meta28809 = meta28809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28810,meta28809__$1){
var self__ = this;
var _28810__$1 = this;
return (new cljs.core.async.t_cljs$core$async28808(self__.f,self__.blockable,meta28809__$1));
}));

(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28810){
var self__ = this;
var _28810__$1 = this;
return self__.meta28809;
}));

(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28809","meta28809",-709312044,null)], null);
}));

(cljs.core.async.t_cljs$core$async28808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28808");

(cljs.core.async.t_cljs$core$async28808.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28808.
 */
cljs.core.async.__GT_t_cljs$core$async28808 = (function cljs$core$async$__GT_t_cljs$core$async28808(f__$1,blockable__$1,meta28809){
return (new cljs.core.async.t_cljs$core$async28808(f__$1,blockable__$1,meta28809));
});

}

return (new cljs.core.async.t_cljs$core$async28808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28820 = arguments.length;
switch (G__28820) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28828 = arguments.length;
switch (G__28828) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28832 = arguments.length;
switch (G__28832) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31535 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31535) : fn1.call(null,val_31535));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31535) : fn1.call(null,val_31535));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28837 = arguments.length;
switch (G__28837) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___31545 = n;
var x_31546 = (0);
while(true){
if((x_31546 < n__4648__auto___31545)){
(a[x_31546] = x_31546);

var G__31547 = (x_31546 + (1));
x_31546 = G__31547;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28861 = (function (flag,meta28862){
this.flag = flag;
this.meta28862 = meta28862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28863,meta28862__$1){
var self__ = this;
var _28863__$1 = this;
return (new cljs.core.async.t_cljs$core$async28861(self__.flag,meta28862__$1));
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28863){
var self__ = this;
var _28863__$1 = this;
return self__.meta28862;
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28862","meta28862",-930734358,null)], null);
}));

(cljs.core.async.t_cljs$core$async28861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28861");

(cljs.core.async.t_cljs$core$async28861.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28861.
 */
cljs.core.async.__GT_t_cljs$core$async28861 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28861(flag__$1,meta28862){
return (new cljs.core.async.t_cljs$core$async28861(flag__$1,meta28862));
});

}

return (new cljs.core.async.t_cljs$core$async28861(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28881 = (function (flag,cb,meta28882){
this.flag = flag;
this.cb = cb;
this.meta28882 = meta28882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28883,meta28882__$1){
var self__ = this;
var _28883__$1 = this;
return (new cljs.core.async.t_cljs$core$async28881(self__.flag,self__.cb,meta28882__$1));
}));

(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28883){
var self__ = this;
var _28883__$1 = this;
return self__.meta28882;
}));

(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28882","meta28882",620730038,null)], null);
}));

(cljs.core.async.t_cljs$core$async28881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28881");

(cljs.core.async.t_cljs$core$async28881.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28881.
 */
cljs.core.async.__GT_t_cljs$core$async28881 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28881(flag__$1,cb__$1,meta28882){
return (new cljs.core.async.t_cljs$core$async28881(flag__$1,cb__$1,meta28882));
});

}

return (new cljs.core.async.t_cljs$core$async28881(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28895_SHARP_){
var G__28905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28895_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28905) : fret.call(null,G__28905));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28896_SHARP_){
var G__28907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28896_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28907) : fret.call(null,G__28907));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31565 = (i + (1));
i = G__31565;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31567 = arguments.length;
var i__4772__auto___31568 = (0);
while(true){
if((i__4772__auto___31568 < len__4771__auto___31567)){
args__4777__auto__.push((arguments[i__4772__auto___31568]));

var G__31569 = (i__4772__auto___31568 + (1));
i__4772__auto___31568 = G__31569;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28916){
var map__28917 = p__28916;
var map__28917__$1 = cljs.core.__destructure_map(map__28917);
var opts = map__28917__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28909){
var G__28910 = cljs.core.first(seq28909);
var seq28909__$1 = cljs.core.next(seq28909);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28910,seq28909__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28938 = arguments.length;
switch (G__28938) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28730__auto___31579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (7))){
var inst_29037 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29051_31580 = state_29045__$1;
(statearr_29051_31580[(2)] = inst_29037);

(statearr_29051_31580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (1))){
var state_29045__$1 = state_29045;
var statearr_29052_31589 = state_29045__$1;
(statearr_29052_31589[(2)] = null);

(statearr_29052_31589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (4))){
var inst_28977 = (state_29045[(7)]);
var inst_28977__$1 = (state_29045[(2)]);
var inst_29014 = (inst_28977__$1 == null);
var state_29045__$1 = (function (){var statearr_29056 = state_29045;
(statearr_29056[(7)] = inst_28977__$1);

return statearr_29056;
})();
if(cljs.core.truth_(inst_29014)){
var statearr_29057_31593 = state_29045__$1;
(statearr_29057_31593[(1)] = (5));

} else {
var statearr_29058_31594 = state_29045__$1;
(statearr_29058_31594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (13))){
var state_29045__$1 = state_29045;
var statearr_29060_31596 = state_29045__$1;
(statearr_29060_31596[(2)] = null);

(statearr_29060_31596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (6))){
var inst_28977 = (state_29045[(7)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29045__$1,(11),to,inst_28977);
} else {
if((state_val_29046 === (3))){
var inst_29040 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29045__$1,inst_29040);
} else {
if((state_val_29046 === (12))){
var state_29045__$1 = state_29045;
var statearr_29067_31642 = state_29045__$1;
(statearr_29067_31642[(2)] = null);

(statearr_29067_31642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (2))){
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29045__$1,(4),from);
} else {
if((state_val_29046 === (11))){
var inst_29026 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
if(cljs.core.truth_(inst_29026)){
var statearr_29069_31648 = state_29045__$1;
(statearr_29069_31648[(1)] = (12));

} else {
var statearr_29072_31649 = state_29045__$1;
(statearr_29072_31649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (9))){
var state_29045__$1 = state_29045;
var statearr_29074_31659 = state_29045__$1;
(statearr_29074_31659[(2)] = null);

(statearr_29074_31659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (5))){
var state_29045__$1 = state_29045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29079_31660 = state_29045__$1;
(statearr_29079_31660[(1)] = (8));

} else {
var statearr_29080_31661 = state_29045__$1;
(statearr_29080_31661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (14))){
var inst_29035 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29081_31663 = state_29045__$1;
(statearr_29081_31663[(2)] = inst_29035);

(statearr_29081_31663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (10))){
var inst_29023 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29082_31664 = state_29045__$1;
(statearr_29082_31664[(2)] = inst_29023);

(statearr_29082_31664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (8))){
var inst_29020 = cljs.core.async.close_BANG_(to);
var state_29045__$1 = state_29045;
var statearr_29086_31668 = state_29045__$1;
(statearr_29086_31668[(2)] = inst_29020);

(statearr_29086_31668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29088 = [null,null,null,null,null,null,null,null];
(statearr_29088[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29088[(1)] = (1));

return statearr_29088;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29045){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29045);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29092){var ex__28548__auto__ = e29092;
var statearr_29093_31671 = state_29045;
(statearr_29093_31671[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29045[(4)]))){
var statearr_29094_31672 = state_29045;
(statearr_29094_31672[(1)] = cljs.core.first((state_29045[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31673 = state_29045;
state_29045 = G__31673;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29095 = f__28731__auto__();
(statearr_29095[(6)] = c__28730__auto___31579);

return statearr_29095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29099){
var vec__29100 = p__29099;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(1),null);
var job = vec__29100;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28730__auto___31676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29107){
var state_val_29108 = (state_29107[(1)]);
if((state_val_29108 === (1))){
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29107__$1,(2),res,v);
} else {
if((state_val_29108 === (2))){
var inst_29104 = (state_29107[(2)]);
var inst_29105 = cljs.core.async.close_BANG_(res);
var state_29107__$1 = (function (){var statearr_29109 = state_29107;
(statearr_29109[(7)] = inst_29104);

return statearr_29109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29107__$1,inst_29105);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29110 = [null,null,null,null,null,null,null,null];
(statearr_29110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29110[(1)] = (1));

return statearr_29110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29107){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29107);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29112){var ex__28548__auto__ = e29112;
var statearr_29113_31679 = state_29107;
(statearr_29113_31679[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29107[(4)]))){
var statearr_29114_31680 = state_29107;
(statearr_29114_31680[(1)] = cljs.core.first((state_29107[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31681 = state_29107;
state_29107 = G__31681;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29118 = f__28731__auto__();
(statearr_29118[(6)] = c__28730__auto___31676);

return statearr_29118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29119){
var vec__29120 = p__29119;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29120,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29120,(1),null);
var job = vec__29120;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___31684 = n;
var __31685 = (0);
while(true){
if((__31685 < n__4648__auto___31684)){
var G__29123_31690 = type;
var G__29123_31691__$1 = (((G__29123_31690 instanceof cljs.core.Keyword))?G__29123_31690.fqn:null);
switch (G__29123_31691__$1) {
case "compute":
var c__28730__auto___31693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31685,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = ((function (__31685,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function (state_29136){
var state_val_29137 = (state_29136[(1)]);
if((state_val_29137 === (1))){
var state_29136__$1 = state_29136;
var statearr_29138_31695 = state_29136__$1;
(statearr_29138_31695[(2)] = null);

(statearr_29138_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (2))){
var state_29136__$1 = state_29136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29136__$1,(4),jobs);
} else {
if((state_val_29137 === (3))){
var inst_29134 = (state_29136[(2)]);
var state_29136__$1 = state_29136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29136__$1,inst_29134);
} else {
if((state_val_29137 === (4))){
var inst_29126 = (state_29136[(2)]);
var inst_29127 = process(inst_29126);
var state_29136__$1 = state_29136;
if(cljs.core.truth_(inst_29127)){
var statearr_29142_31697 = state_29136__$1;
(statearr_29142_31697[(1)] = (5));

} else {
var statearr_29143_31698 = state_29136__$1;
(statearr_29143_31698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (5))){
var state_29136__$1 = state_29136;
var statearr_29150_31699 = state_29136__$1;
(statearr_29150_31699[(2)] = null);

(statearr_29150_31699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (6))){
var state_29136__$1 = state_29136;
var statearr_29151_31701 = state_29136__$1;
(statearr_29151_31701[(2)] = null);

(statearr_29151_31701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (7))){
var inst_29132 = (state_29136[(2)]);
var state_29136__$1 = state_29136;
var statearr_29152_31702 = state_29136__$1;
(statearr_29152_31702[(2)] = inst_29132);

(statearr_29152_31702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31685,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
;
return ((function (__31685,switch__28544__auto__,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29153 = [null,null,null,null,null,null,null];
(statearr_29153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29153[(1)] = (1));

return statearr_29153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29136){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29136);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29154){var ex__28548__auto__ = e29154;
var statearr_29155_31703 = state_29136;
(statearr_29155_31703[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29136[(4)]))){
var statearr_29156_31704 = state_29136;
(statearr_29156_31704[(1)] = cljs.core.first((state_29136[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31708 = state_29136;
state_29136 = G__31708;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
;})(__31685,switch__28544__auto__,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
})();
var state__28732__auto__ = (function (){var statearr_29157 = f__28731__auto__();
(statearr_29157[(6)] = c__28730__auto___31693);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
});})(__31685,c__28730__auto___31693,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
);


break;
case "async":
var c__28730__auto___31710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31685,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = ((function (__31685,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function (state_29170){
var state_val_29171 = (state_29170[(1)]);
if((state_val_29171 === (1))){
var state_29170__$1 = state_29170;
var statearr_29172_31712 = state_29170__$1;
(statearr_29172_31712[(2)] = null);

(statearr_29172_31712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (2))){
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29170__$1,(4),jobs);
} else {
if((state_val_29171 === (3))){
var inst_29168 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29170__$1,inst_29168);
} else {
if((state_val_29171 === (4))){
var inst_29160 = (state_29170[(2)]);
var inst_29161 = async(inst_29160);
var state_29170__$1 = state_29170;
if(cljs.core.truth_(inst_29161)){
var statearr_29173_31713 = state_29170__$1;
(statearr_29173_31713[(1)] = (5));

} else {
var statearr_29174_31714 = state_29170__$1;
(statearr_29174_31714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (5))){
var state_29170__$1 = state_29170;
var statearr_29175_31715 = state_29170__$1;
(statearr_29175_31715[(2)] = null);

(statearr_29175_31715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (6))){
var state_29170__$1 = state_29170;
var statearr_29176_31720 = state_29170__$1;
(statearr_29176_31720[(2)] = null);

(statearr_29176_31720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (7))){
var inst_29166 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29177_31724 = state_29170__$1;
(statearr_29177_31724[(2)] = inst_29166);

(statearr_29177_31724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31685,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
;
return ((function (__31685,switch__28544__auto__,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29178 = [null,null,null,null,null,null,null];
(statearr_29178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29178[(1)] = (1));

return statearr_29178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29170){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29170);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29179){var ex__28548__auto__ = e29179;
var statearr_29180_31728 = state_29170;
(statearr_29180_31728[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29170[(4)]))){
var statearr_29181_31729 = state_29170;
(statearr_29181_31729[(1)] = cljs.core.first((state_29170[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31736 = state_29170;
state_29170 = G__31736;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
;})(__31685,switch__28544__auto__,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
})();
var state__28732__auto__ = (function (){var statearr_29182 = f__28731__auto__();
(statearr_29182[(6)] = c__28730__auto___31710);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
});})(__31685,c__28730__auto___31710,G__29123_31690,G__29123_31691__$1,n__4648__auto___31684,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29123_31691__$1)].join('')));

}

var G__31737 = (__31685 + (1));
__31685 = G__31737;
continue;
} else {
}
break;
}

var c__28730__auto___31738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29208){
var state_val_29210 = (state_29208[(1)]);
if((state_val_29210 === (7))){
var inst_29204 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29213_31742 = state_29208__$1;
(statearr_29213_31742[(2)] = inst_29204);

(statearr_29213_31742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var state_29208__$1 = state_29208;
var statearr_29214_31743 = state_29208__$1;
(statearr_29214_31743[(2)] = null);

(statearr_29214_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29186 = (state_29208[(7)]);
var inst_29186__$1 = (state_29208[(2)]);
var inst_29187 = (inst_29186__$1 == null);
var state_29208__$1 = (function (){var statearr_29215 = state_29208;
(statearr_29215[(7)] = inst_29186__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29187)){
var statearr_29216_31746 = state_29208__$1;
(statearr_29216_31746[(1)] = (5));

} else {
var statearr_29217_31748 = state_29208__$1;
(statearr_29217_31748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var inst_29191 = (state_29208[(8)]);
var inst_29186 = (state_29208[(7)]);
var inst_29191__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29196 = [inst_29186,inst_29191__$1];
var inst_29197 = (new cljs.core.PersistentVector(null,2,(5),inst_29195,inst_29196,null));
var state_29208__$1 = (function (){var statearr_29219 = state_29208;
(statearr_29219[(8)] = inst_29191__$1);

return statearr_29219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29208__$1,(8),jobs,inst_29197);
} else {
if((state_val_29210 === (3))){
var inst_29206 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29208__$1,inst_29206);
} else {
if((state_val_29210 === (2))){
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29208__$1,(4),from);
} else {
if((state_val_29210 === (9))){
var inst_29201 = (state_29208[(2)]);
var state_29208__$1 = (function (){var statearr_29223 = state_29208;
(statearr_29223[(9)] = inst_29201);

return statearr_29223;
})();
var statearr_29224_31756 = state_29208__$1;
(statearr_29224_31756[(2)] = null);

(statearr_29224_31756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (5))){
var inst_29189 = cljs.core.async.close_BANG_(jobs);
var state_29208__$1 = state_29208;
var statearr_29225_31767 = state_29208__$1;
(statearr_29225_31767[(2)] = inst_29189);

(statearr_29225_31767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29191 = (state_29208[(8)]);
var inst_29199 = (state_29208[(2)]);
var state_29208__$1 = (function (){var statearr_29226 = state_29208;
(statearr_29226[(10)] = inst_29199);

return statearr_29226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29208__$1,(9),results,inst_29191);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29208){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29208);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29228){var ex__28548__auto__ = e29228;
var statearr_29229_31773 = state_29208;
(statearr_29229_31773[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29208[(4)]))){
var statearr_29230_31774 = state_29208;
(statearr_29230_31774[(1)] = cljs.core.first((state_29208[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31777 = state_29208;
state_29208 = G__31777;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29231 = f__28731__auto__();
(statearr_29231[(6)] = c__28730__auto___31738);

return statearr_29231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


var c__28730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (7))){
var inst_29269 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29279_31782 = state_29273__$1;
(statearr_29279_31782[(2)] = inst_29269);

(statearr_29279_31782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (20))){
var state_29273__$1 = state_29273;
var statearr_29280_31783 = state_29273__$1;
(statearr_29280_31783[(2)] = null);

(statearr_29280_31783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (1))){
var state_29273__$1 = state_29273;
var statearr_29281_31788 = state_29273__$1;
(statearr_29281_31788[(2)] = null);

(statearr_29281_31788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (4))){
var inst_29238 = (state_29273[(7)]);
var inst_29238__$1 = (state_29273[(2)]);
var inst_29239 = (inst_29238__$1 == null);
var state_29273__$1 = (function (){var statearr_29282 = state_29273;
(statearr_29282[(7)] = inst_29238__$1);

return statearr_29282;
})();
if(cljs.core.truth_(inst_29239)){
var statearr_29283_31789 = state_29273__$1;
(statearr_29283_31789[(1)] = (5));

} else {
var statearr_29284_31790 = state_29273__$1;
(statearr_29284_31790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (15))){
var inst_29251 = (state_29273[(8)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29273__$1,(18),to,inst_29251);
} else {
if((state_val_29274 === (21))){
var inst_29264 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29289_31793 = state_29273__$1;
(statearr_29289_31793[(2)] = inst_29264);

(statearr_29289_31793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (13))){
var inst_29266 = (state_29273[(2)]);
var state_29273__$1 = (function (){var statearr_29290 = state_29273;
(statearr_29290[(9)] = inst_29266);

return statearr_29290;
})();
var statearr_29291_31796 = state_29273__$1;
(statearr_29291_31796[(2)] = null);

(statearr_29291_31796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (6))){
var inst_29238 = (state_29273[(7)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29273__$1,(11),inst_29238);
} else {
if((state_val_29274 === (17))){
var inst_29259 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29259)){
var statearr_29297_31800 = state_29273__$1;
(statearr_29297_31800[(1)] = (19));

} else {
var statearr_29298_31801 = state_29273__$1;
(statearr_29298_31801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (3))){
var inst_29271 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29273__$1,inst_29271);
} else {
if((state_val_29274 === (12))){
var inst_29248 = (state_29273[(10)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29273__$1,(14),inst_29248);
} else {
if((state_val_29274 === (2))){
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29273__$1,(4),results);
} else {
if((state_val_29274 === (19))){
var state_29273__$1 = state_29273;
var statearr_29301_31802 = state_29273__$1;
(statearr_29301_31802[(2)] = null);

(statearr_29301_31802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (11))){
var inst_29248 = (state_29273[(2)]);
var state_29273__$1 = (function (){var statearr_29303 = state_29273;
(statearr_29303[(10)] = inst_29248);

return statearr_29303;
})();
var statearr_29304_31807 = state_29273__$1;
(statearr_29304_31807[(2)] = null);

(statearr_29304_31807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (9))){
var state_29273__$1 = state_29273;
var statearr_29308_31808 = state_29273__$1;
(statearr_29308_31808[(2)] = null);

(statearr_29308_31808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (5))){
var state_29273__$1 = state_29273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29309_31809 = state_29273__$1;
(statearr_29309_31809[(1)] = (8));

} else {
var statearr_29314_31810 = state_29273__$1;
(statearr_29314_31810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (14))){
var inst_29251 = (state_29273[(8)]);
var inst_29251__$1 = (state_29273[(2)]);
var inst_29252 = (inst_29251__$1 == null);
var inst_29253 = cljs.core.not(inst_29252);
var state_29273__$1 = (function (){var statearr_29315 = state_29273;
(statearr_29315[(8)] = inst_29251__$1);

return statearr_29315;
})();
if(inst_29253){
var statearr_29316_31811 = state_29273__$1;
(statearr_29316_31811[(1)] = (15));

} else {
var statearr_29317_31812 = state_29273__$1;
(statearr_29317_31812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (16))){
var state_29273__$1 = state_29273;
var statearr_29324_31813 = state_29273__$1;
(statearr_29324_31813[(2)] = false);

(statearr_29324_31813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (10))){
var inst_29245 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29325_31818 = state_29273__$1;
(statearr_29325_31818[(2)] = inst_29245);

(statearr_29325_31818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (18))){
var inst_29256 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29332_31819 = state_29273__$1;
(statearr_29332_31819[(2)] = inst_29256);

(statearr_29332_31819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (8))){
var inst_29242 = cljs.core.async.close_BANG_(to);
var state_29273__$1 = state_29273;
var statearr_29333_31821 = state_29273__$1;
(statearr_29333_31821[(2)] = inst_29242);

(statearr_29333_31821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29334[(1)] = (1));

return statearr_29334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29273){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29273);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29335){var ex__28548__auto__ = e29335;
var statearr_29336_31828 = state_29273;
(statearr_29336_31828[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29273[(4)]))){
var statearr_29337_31829 = state_29273;
(statearr_29337_31829[(1)] = cljs.core.first((state_29273[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31831 = state_29273;
state_29273 = G__31831;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29338 = f__28731__auto__();
(statearr_29338[(6)] = c__28730__auto__);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

return c__28730__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29352 = arguments.length;
switch (G__29352) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29361 = arguments.length;
switch (G__29361) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29363 = arguments.length;
switch (G__29363) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28730__auto___31849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29395){
var state_val_29396 = (state_29395[(1)]);
if((state_val_29396 === (7))){
var inst_29389 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
var statearr_29398_31860 = state_29395__$1;
(statearr_29398_31860[(2)] = inst_29389);

(statearr_29398_31860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (1))){
var state_29395__$1 = state_29395;
var statearr_29403_31861 = state_29395__$1;
(statearr_29403_31861[(2)] = null);

(statearr_29403_31861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (4))){
var inst_29369 = (state_29395[(7)]);
var inst_29369__$1 = (state_29395[(2)]);
var inst_29370 = (inst_29369__$1 == null);
var state_29395__$1 = (function (){var statearr_29410 = state_29395;
(statearr_29410[(7)] = inst_29369__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29370)){
var statearr_29411_31868 = state_29395__$1;
(statearr_29411_31868[(1)] = (5));

} else {
var statearr_29412_31869 = state_29395__$1;
(statearr_29412_31869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (13))){
var state_29395__$1 = state_29395;
var statearr_29413_31871 = state_29395__$1;
(statearr_29413_31871[(2)] = null);

(statearr_29413_31871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (6))){
var inst_29369 = (state_29395[(7)]);
var inst_29376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29369) : p.call(null,inst_29369));
var state_29395__$1 = state_29395;
if(cljs.core.truth_(inst_29376)){
var statearr_29414_31872 = state_29395__$1;
(statearr_29414_31872[(1)] = (9));

} else {
var statearr_29415_31873 = state_29395__$1;
(statearr_29415_31873[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (3))){
var inst_29392 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29395__$1,inst_29392);
} else {
if((state_val_29396 === (12))){
var state_29395__$1 = state_29395;
var statearr_29416_31874 = state_29395__$1;
(statearr_29416_31874[(2)] = null);

(statearr_29416_31874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (2))){
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29395__$1,(4),ch);
} else {
if((state_val_29396 === (11))){
var inst_29369 = (state_29395[(7)]);
var inst_29380 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29395__$1,(8),inst_29380,inst_29369);
} else {
if((state_val_29396 === (9))){
var state_29395__$1 = state_29395;
var statearr_29421_31875 = state_29395__$1;
(statearr_29421_31875[(2)] = tc);

(statearr_29421_31875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (5))){
var inst_29372 = cljs.core.async.close_BANG_(tc);
var inst_29373 = cljs.core.async.close_BANG_(fc);
var state_29395__$1 = (function (){var statearr_29424 = state_29395;
(statearr_29424[(8)] = inst_29372);

return statearr_29424;
})();
var statearr_29425_31886 = state_29395__$1;
(statearr_29425_31886[(2)] = inst_29373);

(statearr_29425_31886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (14))){
var inst_29387 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
var statearr_29430_31888 = state_29395__$1;
(statearr_29430_31888[(2)] = inst_29387);

(statearr_29430_31888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (10))){
var state_29395__$1 = state_29395;
var statearr_29431_31889 = state_29395__$1;
(statearr_29431_31889[(2)] = fc);

(statearr_29431_31889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (8))){
var inst_29382 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
if(cljs.core.truth_(inst_29382)){
var statearr_29432_31890 = state_29395__$1;
(statearr_29432_31890[(1)] = (12));

} else {
var statearr_29433_31891 = state_29395__$1;
(statearr_29433_31891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29395){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29395);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29435){var ex__28548__auto__ = e29435;
var statearr_29436_31892 = state_29395;
(statearr_29436_31892[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29395[(4)]))){
var statearr_29437_31894 = state_29395;
(statearr_29437_31894[(1)] = cljs.core.first((state_29395[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31896 = state_29395;
state_29395 = G__31896;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29438 = f__28731__auto__();
(statearr_29438[(6)] = c__28730__auto___31849);

return statearr_29438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (7))){
var inst_29462 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29471_31906 = state_29466__$1;
(statearr_29471_31906[(2)] = inst_29462);

(statearr_29471_31906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (1))){
var inst_29439 = init;
var inst_29440 = inst_29439;
var state_29466__$1 = (function (){var statearr_29474 = state_29466;
(statearr_29474[(7)] = inst_29440);

return statearr_29474;
})();
var statearr_29476_31907 = state_29466__$1;
(statearr_29476_31907[(2)] = null);

(statearr_29476_31907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (4))){
var inst_29448 = (state_29466[(8)]);
var inst_29448__$1 = (state_29466[(2)]);
var inst_29449 = (inst_29448__$1 == null);
var state_29466__$1 = (function (){var statearr_29487 = state_29466;
(statearr_29487[(8)] = inst_29448__$1);

return statearr_29487;
})();
if(cljs.core.truth_(inst_29449)){
var statearr_29488_31913 = state_29466__$1;
(statearr_29488_31913[(1)] = (5));

} else {
var statearr_29489_31914 = state_29466__$1;
(statearr_29489_31914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (6))){
var inst_29453 = (state_29466[(9)]);
var inst_29448 = (state_29466[(8)]);
var inst_29440 = (state_29466[(7)]);
var inst_29453__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29440,inst_29448) : f.call(null,inst_29440,inst_29448));
var inst_29454 = cljs.core.reduced_QMARK_(inst_29453__$1);
var state_29466__$1 = (function (){var statearr_29491 = state_29466;
(statearr_29491[(9)] = inst_29453__$1);

return statearr_29491;
})();
if(inst_29454){
var statearr_29492_31915 = state_29466__$1;
(statearr_29492_31915[(1)] = (8));

} else {
var statearr_29493_31916 = state_29466__$1;
(statearr_29493_31916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (3))){
var inst_29464 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29466__$1,inst_29464);
} else {
if((state_val_29467 === (2))){
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29466__$1,(4),ch);
} else {
if((state_val_29467 === (9))){
var inst_29453 = (state_29466[(9)]);
var inst_29440 = inst_29453;
var state_29466__$1 = (function (){var statearr_29494 = state_29466;
(statearr_29494[(7)] = inst_29440);

return statearr_29494;
})();
var statearr_29495_31918 = state_29466__$1;
(statearr_29495_31918[(2)] = null);

(statearr_29495_31918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (5))){
var inst_29440 = (state_29466[(7)]);
var state_29466__$1 = state_29466;
var statearr_29496_31923 = state_29466__$1;
(statearr_29496_31923[(2)] = inst_29440);

(statearr_29496_31923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (10))){
var inst_29460 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29497_31924 = state_29466__$1;
(statearr_29497_31924[(2)] = inst_29460);

(statearr_29497_31924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (8))){
var inst_29453 = (state_29466[(9)]);
var inst_29456 = cljs.core.deref(inst_29453);
var state_29466__$1 = state_29466;
var statearr_29499_31926 = state_29466__$1;
(statearr_29499_31926[(2)] = inst_29456);

(statearr_29499_31926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28545__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28545__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = cljs$core$async$reduce_$_state_machine__28545__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var cljs$core$async$reduce_$_state_machine__28545__auto____1 = (function (state_29466){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29466);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29501){var ex__28548__auto__ = e29501;
var statearr_29502_31933 = state_29466;
(statearr_29502_31933[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29466[(4)]))){
var statearr_29503_31934 = state_29466;
(statearr_29503_31934[(1)] = cljs.core.first((state_29466[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31935 = state_29466;
state_29466 = G__31935;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28545__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28545__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28545__auto____0;
cljs$core$async$reduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28545__auto____1;
return cljs$core$async$reduce_$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29508 = f__28731__auto__();
(statearr_29508[(6)] = c__28730__auto__);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

return c__28730__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (1))){
var inst_29511 = cljs.core.async.reduce(f__$1,init,ch);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29516__$1,(2),inst_29511);
} else {
if((state_val_29517 === (2))){
var inst_29513 = (state_29516[(2)]);
var inst_29514 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29513) : f__$1.call(null,inst_29513));
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29516__$1,inst_29514);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28545__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28545__auto____0 = (function (){
var statearr_29521 = [null,null,null,null,null,null,null];
(statearr_29521[(0)] = cljs$core$async$transduce_$_state_machine__28545__auto__);

(statearr_29521[(1)] = (1));

return statearr_29521;
});
var cljs$core$async$transduce_$_state_machine__28545__auto____1 = (function (state_29516){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29516);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29527){var ex__28548__auto__ = e29527;
var statearr_29528_31936 = state_29516;
(statearr_29528_31936[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29516[(4)]))){
var statearr_29530_31938 = state_29516;
(statearr_29530_31938[(1)] = cljs.core.first((state_29516[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31939 = state_29516;
state_29516 = G__31939;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28545__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28545__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28545__auto____0;
cljs$core$async$transduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28545__auto____1;
return cljs$core$async$transduce_$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29531 = f__28731__auto__();
(statearr_29531[(6)] = c__28730__auto__);

return statearr_29531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

return c__28730__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29535 = arguments.length;
switch (G__29535) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29547 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29570_31942 = state_29567__$1;
(statearr_29570_31942[(2)] = inst_29547);

(statearr_29570_31942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var inst_29541 = cljs.core.seq(coll);
var inst_29542 = inst_29541;
var state_29567__$1 = (function (){var statearr_29571 = state_29567;
(statearr_29571[(7)] = inst_29542);

return statearr_29571;
})();
var statearr_29572_31947 = state_29567__$1;
(statearr_29572_31947[(2)] = null);

(statearr_29572_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29542 = (state_29567[(7)]);
var inst_29545 = cljs.core.first(inst_29542);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29567__$1,(7),ch,inst_29545);
} else {
if((state_val_29568 === (13))){
var inst_29561 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29588_31949 = state_29567__$1;
(statearr_29588_31949[(2)] = inst_29561);

(statearr_29588_31949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var inst_29550 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29550)){
var statearr_29598_31950 = state_29567__$1;
(statearr_29598_31950[(1)] = (8));

} else {
var statearr_29599_31951 = state_29567__$1;
(statearr_29599_31951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (12))){
var state_29567__$1 = state_29567;
var statearr_29603_31952 = state_29567__$1;
(statearr_29603_31952[(2)] = null);

(statearr_29603_31952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (2))){
var inst_29542 = (state_29567[(7)]);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29542)){
var statearr_29604_31953 = state_29567__$1;
(statearr_29604_31953[(1)] = (4));

} else {
var statearr_29607_31954 = state_29567__$1;
(statearr_29607_31954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (11))){
var inst_29558 = cljs.core.async.close_BANG_(ch);
var state_29567__$1 = state_29567;
var statearr_29613_31955 = state_29567__$1;
(statearr_29613_31955[(2)] = inst_29558);

(statearr_29613_31955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var state_29567__$1 = state_29567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29614_31956 = state_29567__$1;
(statearr_29614_31956[(1)] = (11));

} else {
var statearr_29617_31957 = state_29567__$1;
(statearr_29617_31957[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var inst_29542 = (state_29567[(7)]);
var state_29567__$1 = state_29567;
var statearr_29619_31959 = state_29567__$1;
(statearr_29619_31959[(2)] = inst_29542);

(statearr_29619_31959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29563 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29621_31961 = state_29567__$1;
(statearr_29621_31961[(2)] = inst_29563);

(statearr_29621_31961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29542 = (state_29567[(7)]);
var inst_29552 = cljs.core.next(inst_29542);
var inst_29542__$1 = inst_29552;
var state_29567__$1 = (function (){var statearr_29625 = state_29567;
(statearr_29625[(7)] = inst_29542__$1);

return statearr_29625;
})();
var statearr_29626_31964 = state_29567__$1;
(statearr_29626_31964[(2)] = null);

(statearr_29626_31964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29628 = [null,null,null,null,null,null,null,null];
(statearr_29628[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29628[(1)] = (1));

return statearr_29628;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29567){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29567);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29631){var ex__28548__auto__ = e29631;
var statearr_29632_31965 = state_29567;
(statearr_29632_31965[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29567[(4)]))){
var statearr_29635_31966 = state_29567;
(statearr_29635_31966[(1)] = cljs.core.first((state_29567[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31968 = state_29567;
state_29567 = G__31968;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_29638 = f__28731__auto__();
(statearr_29638[(6)] = c__28730__auto__);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

return c__28730__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_31974 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31974(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31975 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31975(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31983 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31983(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31987 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31987(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29687 = (function (ch,cs,meta29688){
this.ch = ch;
this.cs = cs;
this.meta29688 = meta29688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29689,meta29688__$1){
var self__ = this;
var _29689__$1 = this;
return (new cljs.core.async.t_cljs$core$async29687(self__.ch,self__.cs,meta29688__$1));
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29689){
var self__ = this;
var _29689__$1 = this;
return self__.meta29688;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29688","meta29688",876233580,null)], null);
}));

(cljs.core.async.t_cljs$core$async29687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29687");

(cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29687.
 */
cljs.core.async.__GT_t_cljs$core$async29687 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29687(ch__$1,cs__$1,meta29688){
return (new cljs.core.async.t_cljs$core$async29687(ch__$1,cs__$1,meta29688));
});

}

return (new cljs.core.async.t_cljs$core$async29687(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28730__auto___31996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_29879){
var state_val_29880 = (state_29879[(1)]);
if((state_val_29880 === (7))){
var inst_29867 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29899_31998 = state_29879__$1;
(statearr_29899_31998[(2)] = inst_29867);

(statearr_29899_31998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (20))){
var inst_29754 = (state_29879[(7)]);
var inst_29767 = cljs.core.first(inst_29754);
var inst_29768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29767,(0),null);
var inst_29769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29767,(1),null);
var state_29879__$1 = (function (){var statearr_29905 = state_29879;
(statearr_29905[(8)] = inst_29768);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29769)){
var statearr_29906_32000 = state_29879__$1;
(statearr_29906_32000[(1)] = (22));

} else {
var statearr_29907_32002 = state_29879__$1;
(statearr_29907_32002[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (27))){
var inst_29808 = (state_29879[(9)]);
var inst_29718 = (state_29879[(10)]);
var inst_29801 = (state_29879[(11)]);
var inst_29803 = (state_29879[(12)]);
var inst_29808__$1 = cljs.core._nth(inst_29801,inst_29803);
var inst_29810 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29808__$1,inst_29718,done);
var state_29879__$1 = (function (){var statearr_29908 = state_29879;
(statearr_29908[(9)] = inst_29808__$1);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29810)){
var statearr_29909_32007 = state_29879__$1;
(statearr_29909_32007[(1)] = (30));

} else {
var statearr_29910_32008 = state_29879__$1;
(statearr_29910_32008[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (1))){
var state_29879__$1 = state_29879;
var statearr_29913_32009 = state_29879__$1;
(statearr_29913_32009[(2)] = null);

(statearr_29913_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (24))){
var inst_29754 = (state_29879[(7)]);
var inst_29774 = (state_29879[(2)]);
var inst_29776 = cljs.core.next(inst_29754);
var inst_29729 = inst_29776;
var inst_29730 = null;
var inst_29731 = (0);
var inst_29732 = (0);
var state_29879__$1 = (function (){var statearr_29915 = state_29879;
(statearr_29915[(13)] = inst_29729);

(statearr_29915[(14)] = inst_29731);

(statearr_29915[(15)] = inst_29730);

(statearr_29915[(16)] = inst_29732);

(statearr_29915[(17)] = inst_29774);

return statearr_29915;
})();
var statearr_29916_32010 = state_29879__$1;
(statearr_29916_32010[(2)] = null);

(statearr_29916_32010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (39))){
var state_29879__$1 = state_29879;
var statearr_29923_32011 = state_29879__$1;
(statearr_29923_32011[(2)] = null);

(statearr_29923_32011[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (4))){
var inst_29718 = (state_29879[(10)]);
var inst_29718__$1 = (state_29879[(2)]);
var inst_29720 = (inst_29718__$1 == null);
var state_29879__$1 = (function (){var statearr_29924 = state_29879;
(statearr_29924[(10)] = inst_29718__$1);

return statearr_29924;
})();
if(cljs.core.truth_(inst_29720)){
var statearr_29927_32013 = state_29879__$1;
(statearr_29927_32013[(1)] = (5));

} else {
var statearr_29928_32014 = state_29879__$1;
(statearr_29928_32014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (15))){
var inst_29729 = (state_29879[(13)]);
var inst_29731 = (state_29879[(14)]);
var inst_29730 = (state_29879[(15)]);
var inst_29732 = (state_29879[(16)]);
var inst_29750 = (state_29879[(2)]);
var inst_29751 = (inst_29732 + (1));
var tmp29919 = inst_29729;
var tmp29920 = inst_29731;
var tmp29921 = inst_29730;
var inst_29729__$1 = tmp29919;
var inst_29730__$1 = tmp29921;
var inst_29731__$1 = tmp29920;
var inst_29732__$1 = inst_29751;
var state_29879__$1 = (function (){var statearr_29932 = state_29879;
(statearr_29932[(13)] = inst_29729__$1);

(statearr_29932[(14)] = inst_29731__$1);

(statearr_29932[(15)] = inst_29730__$1);

(statearr_29932[(16)] = inst_29732__$1);

(statearr_29932[(18)] = inst_29750);

return statearr_29932;
})();
var statearr_29934_32024 = state_29879__$1;
(statearr_29934_32024[(2)] = null);

(statearr_29934_32024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (21))){
var inst_29779 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29938_32025 = state_29879__$1;
(statearr_29938_32025[(2)] = inst_29779);

(statearr_29938_32025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (31))){
var inst_29808 = (state_29879[(9)]);
var inst_29813 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29808);
var state_29879__$1 = state_29879;
var statearr_29939_32029 = state_29879__$1;
(statearr_29939_32029[(2)] = inst_29813);

(statearr_29939_32029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (32))){
var inst_29800 = (state_29879[(19)]);
var inst_29801 = (state_29879[(11)]);
var inst_29803 = (state_29879[(12)]);
var inst_29802 = (state_29879[(20)]);
var inst_29815 = (state_29879[(2)]);
var inst_29816 = (inst_29803 + (1));
var tmp29935 = inst_29800;
var tmp29936 = inst_29801;
var tmp29937 = inst_29802;
var inst_29800__$1 = tmp29935;
var inst_29801__$1 = tmp29936;
var inst_29802__$1 = tmp29937;
var inst_29803__$1 = inst_29816;
var state_29879__$1 = (function (){var statearr_29940 = state_29879;
(statearr_29940[(19)] = inst_29800__$1);

(statearr_29940[(21)] = inst_29815);

(statearr_29940[(11)] = inst_29801__$1);

(statearr_29940[(12)] = inst_29803__$1);

(statearr_29940[(20)] = inst_29802__$1);

return statearr_29940;
})();
var statearr_29941_32035 = state_29879__$1;
(statearr_29941_32035[(2)] = null);

(statearr_29941_32035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (40))){
var inst_29838 = (state_29879[(22)]);
var inst_29842 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29838);
var state_29879__$1 = state_29879;
var statearr_29946_32036 = state_29879__$1;
(statearr_29946_32036[(2)] = inst_29842);

(statearr_29946_32036[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (33))){
var inst_29819 = (state_29879[(23)]);
var inst_29821 = cljs.core.chunked_seq_QMARK_(inst_29819);
var state_29879__$1 = state_29879;
if(inst_29821){
var statearr_29954_32041 = state_29879__$1;
(statearr_29954_32041[(1)] = (36));

} else {
var statearr_29960_32042 = state_29879__$1;
(statearr_29960_32042[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (13))){
var inst_29743 = (state_29879[(24)]);
var inst_29747 = cljs.core.async.close_BANG_(inst_29743);
var state_29879__$1 = state_29879;
var statearr_29974_32047 = state_29879__$1;
(statearr_29974_32047[(2)] = inst_29747);

(statearr_29974_32047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (22))){
var inst_29768 = (state_29879[(8)]);
var inst_29771 = cljs.core.async.close_BANG_(inst_29768);
var state_29879__$1 = state_29879;
var statearr_29988_32048 = state_29879__$1;
(statearr_29988_32048[(2)] = inst_29771);

(statearr_29988_32048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (36))){
var inst_29819 = (state_29879[(23)]);
var inst_29823 = cljs.core.chunk_first(inst_29819);
var inst_29824 = cljs.core.chunk_rest(inst_29819);
var inst_29825 = cljs.core.count(inst_29823);
var inst_29800 = inst_29824;
var inst_29801 = inst_29823;
var inst_29802 = inst_29825;
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_29993 = state_29879;
(statearr_29993[(19)] = inst_29800);

(statearr_29993[(11)] = inst_29801);

(statearr_29993[(12)] = inst_29803);

(statearr_29993[(20)] = inst_29802);

return statearr_29993;
})();
var statearr_29994_32049 = state_29879__$1;
(statearr_29994_32049[(2)] = null);

(statearr_29994_32049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (41))){
var inst_29819 = (state_29879[(23)]);
var inst_29844 = (state_29879[(2)]);
var inst_29846 = cljs.core.next(inst_29819);
var inst_29800 = inst_29846;
var inst_29801 = null;
var inst_29802 = (0);
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_29995 = state_29879;
(statearr_29995[(25)] = inst_29844);

(statearr_29995[(19)] = inst_29800);

(statearr_29995[(11)] = inst_29801);

(statearr_29995[(12)] = inst_29803);

(statearr_29995[(20)] = inst_29802);

return statearr_29995;
})();
var statearr_30003_32051 = state_29879__$1;
(statearr_30003_32051[(2)] = null);

(statearr_30003_32051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (43))){
var state_29879__$1 = state_29879;
var statearr_30010_32056 = state_29879__$1;
(statearr_30010_32056[(2)] = null);

(statearr_30010_32056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (29))){
var inst_29854 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30018_32057 = state_29879__$1;
(statearr_30018_32057[(2)] = inst_29854);

(statearr_30018_32057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (44))){
var inst_29864 = (state_29879[(2)]);
var state_29879__$1 = (function (){var statearr_30019 = state_29879;
(statearr_30019[(26)] = inst_29864);

return statearr_30019;
})();
var statearr_30020_32064 = state_29879__$1;
(statearr_30020_32064[(2)] = null);

(statearr_30020_32064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (6))){
var inst_29790 = (state_29879[(27)]);
var inst_29789 = cljs.core.deref(cs);
var inst_29790__$1 = cljs.core.keys(inst_29789);
var inst_29791 = cljs.core.count(inst_29790__$1);
var inst_29792 = cljs.core.reset_BANG_(dctr,inst_29791);
var inst_29797 = cljs.core.seq(inst_29790__$1);
var inst_29800 = inst_29797;
var inst_29801 = null;
var inst_29802 = (0);
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_30026 = state_29879;
(statearr_30026[(27)] = inst_29790__$1);

(statearr_30026[(19)] = inst_29800);

(statearr_30026[(28)] = inst_29792);

(statearr_30026[(11)] = inst_29801);

(statearr_30026[(12)] = inst_29803);

(statearr_30026[(20)] = inst_29802);

return statearr_30026;
})();
var statearr_30027_32069 = state_29879__$1;
(statearr_30027_32069[(2)] = null);

(statearr_30027_32069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (28))){
var inst_29800 = (state_29879[(19)]);
var inst_29819 = (state_29879[(23)]);
var inst_29819__$1 = cljs.core.seq(inst_29800);
var state_29879__$1 = (function (){var statearr_30047 = state_29879;
(statearr_30047[(23)] = inst_29819__$1);

return statearr_30047;
})();
if(inst_29819__$1){
var statearr_30049_32071 = state_29879__$1;
(statearr_30049_32071[(1)] = (33));

} else {
var statearr_30051_32072 = state_29879__$1;
(statearr_30051_32072[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (25))){
var inst_29803 = (state_29879[(12)]);
var inst_29802 = (state_29879[(20)]);
var inst_29805 = (inst_29803 < inst_29802);
var inst_29806 = inst_29805;
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29806)){
var statearr_30065_32073 = state_29879__$1;
(statearr_30065_32073[(1)] = (27));

} else {
var statearr_30066_32074 = state_29879__$1;
(statearr_30066_32074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (34))){
var state_29879__$1 = state_29879;
var statearr_30067_32075 = state_29879__$1;
(statearr_30067_32075[(2)] = null);

(statearr_30067_32075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (17))){
var state_29879__$1 = state_29879;
var statearr_30068_32076 = state_29879__$1;
(statearr_30068_32076[(2)] = null);

(statearr_30068_32076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (3))){
var inst_29869 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29879__$1,inst_29869);
} else {
if((state_val_29880 === (12))){
var inst_29784 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30069_32077 = state_29879__$1;
(statearr_30069_32077[(2)] = inst_29784);

(statearr_30069_32077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (2))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29879__$1,(4),ch);
} else {
if((state_val_29880 === (23))){
var state_29879__$1 = state_29879;
var statearr_30074_32078 = state_29879__$1;
(statearr_30074_32078[(2)] = null);

(statearr_30074_32078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (35))){
var inst_29852 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30075_32080 = state_29879__$1;
(statearr_30075_32080[(2)] = inst_29852);

(statearr_30075_32080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (19))){
var inst_29754 = (state_29879[(7)]);
var inst_29758 = cljs.core.chunk_first(inst_29754);
var inst_29759 = cljs.core.chunk_rest(inst_29754);
var inst_29760 = cljs.core.count(inst_29758);
var inst_29729 = inst_29759;
var inst_29730 = inst_29758;
var inst_29731 = inst_29760;
var inst_29732 = (0);
var state_29879__$1 = (function (){var statearr_30077 = state_29879;
(statearr_30077[(13)] = inst_29729);

(statearr_30077[(14)] = inst_29731);

(statearr_30077[(15)] = inst_29730);

(statearr_30077[(16)] = inst_29732);

return statearr_30077;
})();
var statearr_30082_32086 = state_29879__$1;
(statearr_30082_32086[(2)] = null);

(statearr_30082_32086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (11))){
var inst_29729 = (state_29879[(13)]);
var inst_29754 = (state_29879[(7)]);
var inst_29754__$1 = cljs.core.seq(inst_29729);
var state_29879__$1 = (function (){var statearr_30083 = state_29879;
(statearr_30083[(7)] = inst_29754__$1);

return statearr_30083;
})();
if(inst_29754__$1){
var statearr_30084_32090 = state_29879__$1;
(statearr_30084_32090[(1)] = (16));

} else {
var statearr_30085_32091 = state_29879__$1;
(statearr_30085_32091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (9))){
var inst_29787 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30086_32092 = state_29879__$1;
(statearr_30086_32092[(2)] = inst_29787);

(statearr_30086_32092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (5))){
var inst_29727 = cljs.core.deref(cs);
var inst_29728 = cljs.core.seq(inst_29727);
var inst_29729 = inst_29728;
var inst_29730 = null;
var inst_29731 = (0);
var inst_29732 = (0);
var state_29879__$1 = (function (){var statearr_30091 = state_29879;
(statearr_30091[(13)] = inst_29729);

(statearr_30091[(14)] = inst_29731);

(statearr_30091[(15)] = inst_29730);

(statearr_30091[(16)] = inst_29732);

return statearr_30091;
})();
var statearr_30092_32097 = state_29879__$1;
(statearr_30092_32097[(2)] = null);

(statearr_30092_32097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (14))){
var state_29879__$1 = state_29879;
var statearr_30098_32099 = state_29879__$1;
(statearr_30098_32099[(2)] = null);

(statearr_30098_32099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (45))){
var inst_29861 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30099_32110 = state_29879__$1;
(statearr_30099_32110[(2)] = inst_29861);

(statearr_30099_32110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (26))){
var inst_29790 = (state_29879[(27)]);
var inst_29856 = (state_29879[(2)]);
var inst_29858 = cljs.core.seq(inst_29790);
var state_29879__$1 = (function (){var statearr_30100 = state_29879;
(statearr_30100[(29)] = inst_29856);

return statearr_30100;
})();
if(inst_29858){
var statearr_30101_32114 = state_29879__$1;
(statearr_30101_32114[(1)] = (42));

} else {
var statearr_30102_32117 = state_29879__$1;
(statearr_30102_32117[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (16))){
var inst_29754 = (state_29879[(7)]);
var inst_29756 = cljs.core.chunked_seq_QMARK_(inst_29754);
var state_29879__$1 = state_29879;
if(inst_29756){
var statearr_30107_32118 = state_29879__$1;
(statearr_30107_32118[(1)] = (19));

} else {
var statearr_30112_32119 = state_29879__$1;
(statearr_30112_32119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (38))){
var inst_29849 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30113_32120 = state_29879__$1;
(statearr_30113_32120[(2)] = inst_29849);

(statearr_30113_32120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (30))){
var state_29879__$1 = state_29879;
var statearr_30118_32121 = state_29879__$1;
(statearr_30118_32121[(2)] = null);

(statearr_30118_32121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (10))){
var inst_29730 = (state_29879[(15)]);
var inst_29732 = (state_29879[(16)]);
var inst_29742 = cljs.core._nth(inst_29730,inst_29732);
var inst_29743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29742,(0),null);
var inst_29744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29742,(1),null);
var state_29879__$1 = (function (){var statearr_30121 = state_29879;
(statearr_30121[(24)] = inst_29743);

return statearr_30121;
})();
if(cljs.core.truth_(inst_29744)){
var statearr_30126_32123 = state_29879__$1;
(statearr_30126_32123[(1)] = (13));

} else {
var statearr_30127_32124 = state_29879__$1;
(statearr_30127_32124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (18))){
var inst_29782 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_30129_32125 = state_29879__$1;
(statearr_30129_32125[(2)] = inst_29782);

(statearr_30129_32125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (42))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29879__$1,(45),dchan);
} else {
if((state_val_29880 === (37))){
var inst_29718 = (state_29879[(10)]);
var inst_29838 = (state_29879[(22)]);
var inst_29819 = (state_29879[(23)]);
var inst_29838__$1 = cljs.core.first(inst_29819);
var inst_29839 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29838__$1,inst_29718,done);
var state_29879__$1 = (function (){var statearr_30130 = state_29879;
(statearr_30130[(22)] = inst_29838__$1);

return statearr_30130;
})();
if(cljs.core.truth_(inst_29839)){
var statearr_30132_32126 = state_29879__$1;
(statearr_30132_32126[(1)] = (39));

} else {
var statearr_30137_32127 = state_29879__$1;
(statearr_30137_32127[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (8))){
var inst_29731 = (state_29879[(14)]);
var inst_29732 = (state_29879[(16)]);
var inst_29734 = (inst_29732 < inst_29731);
var inst_29735 = inst_29734;
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29735)){
var statearr_30141_32128 = state_29879__$1;
(statearr_30141_32128[(1)] = (10));

} else {
var statearr_30142_32129 = state_29879__$1;
(statearr_30142_32129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28545__auto__ = null;
var cljs$core$async$mult_$_state_machine__28545__auto____0 = (function (){
var statearr_30144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30144[(0)] = cljs$core$async$mult_$_state_machine__28545__auto__);

(statearr_30144[(1)] = (1));

return statearr_30144;
});
var cljs$core$async$mult_$_state_machine__28545__auto____1 = (function (state_29879){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29879);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30145){var ex__28548__auto__ = e30145;
var statearr_30147_32133 = state_29879;
(statearr_30147_32133[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29879[(4)]))){
var statearr_30148_32134 = state_29879;
(statearr_30148_32134[(1)] = cljs.core.first((state_29879[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_29879;
state_29879 = G__32135;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28545__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28545__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28545__auto____0;
cljs$core$async$mult_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28545__auto____1;
return cljs$core$async$mult_$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30152 = f__28731__auto__();
(statearr_30152[(6)] = c__28730__auto___31996);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30156 = arguments.length;
switch (G__30156) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32139 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32139(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32140 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32140(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32145 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32145(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32148 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32148(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32149 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32149(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32155 = arguments.length;
var i__4772__auto___32156 = (0);
while(true){
if((i__4772__auto___32156 < len__4771__auto___32155)){
args__4777__auto__.push((arguments[i__4772__auto___32156]));

var G__32157 = (i__4772__auto___32156 + (1));
i__4772__auto___32156 = G__32157;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30197){
var map__30198 = p__30197;
var map__30198__$1 = cljs.core.__destructure_map(map__30198);
var opts = map__30198__$1;
var statearr_30199_32159 = state;
(statearr_30199_32159[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30200_32160 = state;
(statearr_30200_32160[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30201_32162 = state;
(statearr_30201_32162[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30190){
var G__30191 = cljs.core.first(seq30190);
var seq30190__$1 = cljs.core.next(seq30190);
var G__30192 = cljs.core.first(seq30190__$1);
var seq30190__$2 = cljs.core.next(seq30190__$1);
var G__30193 = cljs.core.first(seq30190__$2);
var seq30190__$3 = cljs.core.next(seq30190__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30191,G__30192,G__30193,seq30190__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30220 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30221){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30221 = meta30221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30222,meta30221__$1){
var self__ = this;
var _30222__$1 = this;
return (new cljs.core.async.t_cljs$core$async30220(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30221__$1));
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30222){
var self__ = this;
var _30222__$1 = this;
return self__.meta30221;
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30221","meta30221",763491513,null)], null);
}));

(cljs.core.async.t_cljs$core$async30220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30220");

(cljs.core.async.t_cljs$core$async30220.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30220.
 */
cljs.core.async.__GT_t_cljs$core$async30220 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30221){
return (new cljs.core.async.t_cljs$core$async30220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30221));
});

}

return (new cljs.core.async.t_cljs$core$async30220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28730__auto___32190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30315){
var state_val_30316 = (state_30315[(1)]);
if((state_val_30316 === (7))){
var inst_30311 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30320_32191 = state_30315__$1;
(statearr_30320_32191[(2)] = inst_30311);

(statearr_30320_32191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (20))){
var inst_30305 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30322_32192 = state_30315__$1;
(statearr_30322_32192[(2)] = inst_30305);

(statearr_30322_32192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (1))){
var inst_30254 = calc_state();
var inst_30255 = cljs.core.__destructure_map(inst_30254);
var inst_30256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30255,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30255,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30255,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30260 = inst_30254;
var state_30315__$1 = (function (){var statearr_30324 = state_30315;
(statearr_30324[(7)] = inst_30256);

(statearr_30324[(8)] = inst_30260);

(statearr_30324[(9)] = inst_30258);

(statearr_30324[(10)] = inst_30257);

return statearr_30324;
})();
var statearr_30325_32198 = state_30315__$1;
(statearr_30325_32198[(2)] = null);

(statearr_30325_32198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (4))){
var inst_30273 = (state_30315[(11)]);
var inst_30274 = (state_30315[(12)]);
var inst_30272 = (state_30315[(2)]);
var inst_30273__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30272,(0),null);
var inst_30274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30272,(1),null);
var inst_30275 = (inst_30273__$1 == null);
var inst_30276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30274__$1,change);
var inst_30277 = ((inst_30275) || (inst_30276));
var state_30315__$1 = (function (){var statearr_30329 = state_30315;
(statearr_30329[(11)] = inst_30273__$1);

(statearr_30329[(12)] = inst_30274__$1);

return statearr_30329;
})();
if(cljs.core.truth_(inst_30277)){
var statearr_30331_32203 = state_30315__$1;
(statearr_30331_32203[(1)] = (5));

} else {
var statearr_30332_32204 = state_30315__$1;
(statearr_30332_32204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (15))){
var inst_30264 = (state_30315[(13)]);
var inst_30260 = inst_30264;
var state_30315__$1 = (function (){var statearr_30334 = state_30315;
(statearr_30334[(8)] = inst_30260);

return statearr_30334;
})();
var statearr_30335_32211 = state_30315__$1;
(statearr_30335_32211[(2)] = null);

(statearr_30335_32211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (13))){
var inst_30297 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
if(cljs.core.truth_(inst_30297)){
var statearr_30338_32212 = state_30315__$1;
(statearr_30338_32212[(1)] = (14));

} else {
var statearr_30339_32214 = state_30315__$1;
(statearr_30339_32214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (6))){
var inst_30288 = (state_30315[(14)]);
var inst_30274 = (state_30315[(12)]);
var inst_30265 = (state_30315[(15)]);
var inst_30288__$1 = (inst_30265.cljs$core$IFn$_invoke$arity$1 ? inst_30265.cljs$core$IFn$_invoke$arity$1(inst_30274) : inst_30265.call(null,inst_30274));
var state_30315__$1 = (function (){var statearr_30345 = state_30315;
(statearr_30345[(14)] = inst_30288__$1);

return statearr_30345;
})();
if(cljs.core.truth_(inst_30288__$1)){
var statearr_30346_32217 = state_30315__$1;
(statearr_30346_32217[(1)] = (11));

} else {
var statearr_30347_32218 = state_30315__$1;
(statearr_30347_32218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (17))){
var inst_30300 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
if(cljs.core.truth_(inst_30300)){
var statearr_30348_32220 = state_30315__$1;
(statearr_30348_32220[(1)] = (18));

} else {
var statearr_30349_32221 = state_30315__$1;
(statearr_30349_32221[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (3))){
var inst_30313 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30315__$1,inst_30313);
} else {
if((state_val_30316 === (12))){
var inst_30266 = (state_30315[(16)]);
var inst_30274 = (state_30315[(12)]);
var inst_30265 = (state_30315[(15)]);
var inst_30292 = cljs.core.empty_QMARK_(inst_30265);
var inst_30293 = (inst_30266.cljs$core$IFn$_invoke$arity$1 ? inst_30266.cljs$core$IFn$_invoke$arity$1(inst_30274) : inst_30266.call(null,inst_30274));
var inst_30294 = cljs.core.not(inst_30293);
var inst_30295 = ((inst_30292) && (inst_30294));
var state_30315__$1 = state_30315;
var statearr_30350_32226 = state_30315__$1;
(statearr_30350_32226[(2)] = inst_30295);

(statearr_30350_32226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (2))){
var inst_30264 = (state_30315[(13)]);
var inst_30260 = (state_30315[(8)]);
var inst_30264__$1 = cljs.core.__destructure_map(inst_30260);
var inst_30265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30264__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30264__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30264__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30315__$1 = (function (){var statearr_30351 = state_30315;
(statearr_30351[(16)] = inst_30266);

(statearr_30351[(15)] = inst_30265);

(statearr_30351[(13)] = inst_30264__$1);

return statearr_30351;
})();
return cljs.core.async.ioc_alts_BANG_(state_30315__$1,(4),inst_30267);
} else {
if((state_val_30316 === (19))){
var state_30315__$1 = state_30315;
var statearr_30352_32232 = state_30315__$1;
(statearr_30352_32232[(2)] = null);

(statearr_30352_32232[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (11))){
var inst_30288 = (state_30315[(14)]);
var state_30315__$1 = state_30315;
var statearr_30354_32233 = state_30315__$1;
(statearr_30354_32233[(2)] = inst_30288);

(statearr_30354_32233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (9))){
var state_30315__$1 = state_30315;
var statearr_30355_32234 = state_30315__$1;
(statearr_30355_32234[(2)] = null);

(statearr_30355_32234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (5))){
var inst_30273 = (state_30315[(11)]);
var inst_30279 = (inst_30273 == null);
var state_30315__$1 = state_30315;
if(cljs.core.truth_(inst_30279)){
var statearr_30356_32240 = state_30315__$1;
(statearr_30356_32240[(1)] = (8));

} else {
var statearr_30357_32241 = state_30315__$1;
(statearr_30357_32241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (14))){
var inst_30273 = (state_30315[(11)]);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30315__$1,(17),out,inst_30273);
} else {
if((state_val_30316 === (16))){
var inst_30309 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30358_32243 = state_30315__$1;
(statearr_30358_32243[(2)] = inst_30309);

(statearr_30358_32243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (10))){
var inst_30284 = (state_30315[(2)]);
var inst_30285 = calc_state();
var inst_30260 = inst_30285;
var state_30315__$1 = (function (){var statearr_30362 = state_30315;
(statearr_30362[(8)] = inst_30260);

(statearr_30362[(17)] = inst_30284);

return statearr_30362;
})();
var statearr_30363_32250 = state_30315__$1;
(statearr_30363_32250[(2)] = null);

(statearr_30363_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (18))){
var inst_30264 = (state_30315[(13)]);
var inst_30260 = inst_30264;
var state_30315__$1 = (function (){var statearr_30365 = state_30315;
(statearr_30365[(8)] = inst_30260);

return statearr_30365;
})();
var statearr_30367_32251 = state_30315__$1;
(statearr_30367_32251[(2)] = null);

(statearr_30367_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (8))){
var inst_30274 = (state_30315[(12)]);
var inst_30281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30274);
var state_30315__$1 = state_30315;
var statearr_30369_32252 = state_30315__$1;
(statearr_30369_32252[(2)] = inst_30281);

(statearr_30369_32252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28545__auto__ = null;
var cljs$core$async$mix_$_state_machine__28545__auto____0 = (function (){
var statearr_30371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30371[(0)] = cljs$core$async$mix_$_state_machine__28545__auto__);

(statearr_30371[(1)] = (1));

return statearr_30371;
});
var cljs$core$async$mix_$_state_machine__28545__auto____1 = (function (state_30315){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30315);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30372){var ex__28548__auto__ = e30372;
var statearr_30373_32255 = state_30315;
(statearr_30373_32255[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30315[(4)]))){
var statearr_30374_32256 = state_30315;
(statearr_30374_32256[(1)] = cljs.core.first((state_30315[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32257 = state_30315;
state_30315 = G__32257;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28545__auto__ = function(state_30315){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28545__auto____1.call(this,state_30315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28545__auto____0;
cljs$core$async$mix_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28545__auto____1;
return cljs$core$async$mix_$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30375 = f__28731__auto__();
(statearr_30375[(6)] = c__28730__auto___32190);

return statearr_30375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32263 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32263(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32270 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32270(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32282 = (function() {
var G__32283 = null;
var G__32283__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32283__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32283 = function(p,v){
switch(arguments.length){
case 1:
return G__32283__1.call(this,p);
case 2:
return G__32283__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32283.cljs$core$IFn$_invoke$arity$1 = G__32283__1;
G__32283.cljs$core$IFn$_invoke$arity$2 = G__32283__2;
return G__32283;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30418 = arguments.length;
switch (G__30418) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32282(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32282(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30438 = arguments.length;
switch (G__30438) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30431_SHARP_){
if(cljs.core.truth_((p1__30431_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30431_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30431_SHARP_.call(null,topic)))){
return p1__30431_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30431_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30441 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30442){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30442 = meta30442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30443,meta30442__$1){
var self__ = this;
var _30443__$1 = this;
return (new cljs.core.async.t_cljs$core$async30441(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30442__$1));
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30443){
var self__ = this;
var _30443__$1 = this;
return self__.meta30442;
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30442","meta30442",1440305563,null)], null);
}));

(cljs.core.async.t_cljs$core$async30441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30441");

(cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30441.
 */
cljs.core.async.__GT_t_cljs$core$async30441 = (function cljs$core$async$__GT_t_cljs$core$async30441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30442){
return (new cljs.core.async.t_cljs$core$async30441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30442));
});

}

return (new cljs.core.async.t_cljs$core$async30441(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28730__auto___32329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30554_32332 = state_30546__$1;
(statearr_30554_32332[(2)] = inst_30542);

(statearr_30554_32332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (20))){
var state_30546__$1 = state_30546;
var statearr_30559_32336 = state_30546__$1;
(statearr_30559_32336[(2)] = null);

(statearr_30559_32336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var state_30546__$1 = state_30546;
var statearr_30564_32339 = state_30546__$1;
(statearr_30564_32339[(2)] = null);

(statearr_30564_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (24))){
var inst_30524 = (state_30546[(7)]);
var inst_30534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30524);
var state_30546__$1 = state_30546;
var statearr_30565_32341 = state_30546__$1;
(statearr_30565_32341[(2)] = inst_30534);

(statearr_30565_32341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30470 = (state_30546[(8)]);
var inst_30470__$1 = (state_30546[(2)]);
var inst_30471 = (inst_30470__$1 == null);
var state_30546__$1 = (function (){var statearr_30566 = state_30546;
(statearr_30566[(8)] = inst_30470__$1);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30471)){
var statearr_30567_32364 = state_30546__$1;
(statearr_30567_32364[(1)] = (5));

} else {
var statearr_30568_32368 = state_30546__$1;
(statearr_30568_32368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (15))){
var inst_30518 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30571_32372 = state_30546__$1;
(statearr_30571_32372[(2)] = inst_30518);

(statearr_30571_32372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (21))){
var inst_30539 = (state_30546[(2)]);
var state_30546__$1 = (function (){var statearr_30572 = state_30546;
(statearr_30572[(9)] = inst_30539);

return statearr_30572;
})();
var statearr_30575_32374 = state_30546__$1;
(statearr_30575_32374[(2)] = null);

(statearr_30575_32374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (13))){
var inst_30495 = (state_30546[(10)]);
var inst_30497 = cljs.core.chunked_seq_QMARK_(inst_30495);
var state_30546__$1 = state_30546;
if(inst_30497){
var statearr_30576_32387 = state_30546__$1;
(statearr_30576_32387[(1)] = (16));

} else {
var statearr_30577_32388 = state_30546__$1;
(statearr_30577_32388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (22))){
var inst_30530 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30530)){
var statearr_30578_32389 = state_30546__$1;
(statearr_30578_32389[(1)] = (23));

} else {
var statearr_30579_32393 = state_30546__$1;
(statearr_30579_32393[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30526 = (state_30546[(11)]);
var inst_30524 = (state_30546[(7)]);
var inst_30470 = (state_30546[(8)]);
var inst_30524__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30470) : topic_fn.call(null,inst_30470));
var inst_30525 = cljs.core.deref(mults);
var inst_30526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30525,inst_30524__$1);
var state_30546__$1 = (function (){var statearr_30580 = state_30546;
(statearr_30580[(11)] = inst_30526__$1);

(statearr_30580[(7)] = inst_30524__$1);

return statearr_30580;
})();
if(cljs.core.truth_(inst_30526__$1)){
var statearr_30581_32397 = state_30546__$1;
(statearr_30581_32397[(1)] = (19));

} else {
var statearr_30582_32398 = state_30546__$1;
(statearr_30582_32398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (25))){
var inst_30536 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30586_32399 = state_30546__$1;
(statearr_30586_32399[(2)] = inst_30536);

(statearr_30586_32399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (17))){
var inst_30495 = (state_30546[(10)]);
var inst_30508 = cljs.core.first(inst_30495);
var inst_30510 = cljs.core.async.muxch_STAR_(inst_30508);
var inst_30511 = cljs.core.async.close_BANG_(inst_30510);
var inst_30512 = cljs.core.next(inst_30495);
var inst_30481 = inst_30512;
var inst_30482 = null;
var inst_30483 = (0);
var inst_30484 = (0);
var state_30546__$1 = (function (){var statearr_30589 = state_30546;
(statearr_30589[(12)] = inst_30481);

(statearr_30589[(13)] = inst_30483);

(statearr_30589[(14)] = inst_30511);

(statearr_30589[(15)] = inst_30484);

(statearr_30589[(16)] = inst_30482);

return statearr_30589;
})();
var statearr_30592_32426 = state_30546__$1;
(statearr_30592_32426[(2)] = null);

(statearr_30592_32426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (12))){
var inst_30520 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30594_32429 = state_30546__$1;
(statearr_30594_32429[(2)] = inst_30520);

(statearr_30594_32429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30546__$1,(4),ch);
} else {
if((state_val_30547 === (23))){
var state_30546__$1 = state_30546;
var statearr_30595_32456 = state_30546__$1;
(statearr_30595_32456[(2)] = null);

(statearr_30595_32456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (19))){
var inst_30526 = (state_30546[(11)]);
var inst_30470 = (state_30546[(8)]);
var inst_30528 = cljs.core.async.muxch_STAR_(inst_30526);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30546__$1,(22),inst_30528,inst_30470);
} else {
if((state_val_30547 === (11))){
var inst_30481 = (state_30546[(12)]);
var inst_30495 = (state_30546[(10)]);
var inst_30495__$1 = cljs.core.seq(inst_30481);
var state_30546__$1 = (function (){var statearr_30596 = state_30546;
(statearr_30596[(10)] = inst_30495__$1);

return statearr_30596;
})();
if(inst_30495__$1){
var statearr_30598_32465 = state_30546__$1;
(statearr_30598_32465[(1)] = (13));

} else {
var statearr_30599_32467 = state_30546__$1;
(statearr_30599_32467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (9))){
var inst_30522 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30600_32469 = state_30546__$1;
(statearr_30600_32469[(2)] = inst_30522);

(statearr_30600_32469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (5))){
var inst_30478 = cljs.core.deref(mults);
var inst_30479 = cljs.core.vals(inst_30478);
var inst_30480 = cljs.core.seq(inst_30479);
var inst_30481 = inst_30480;
var inst_30482 = null;
var inst_30483 = (0);
var inst_30484 = (0);
var state_30546__$1 = (function (){var statearr_30602 = state_30546;
(statearr_30602[(12)] = inst_30481);

(statearr_30602[(13)] = inst_30483);

(statearr_30602[(15)] = inst_30484);

(statearr_30602[(16)] = inst_30482);

return statearr_30602;
})();
var statearr_30603_32480 = state_30546__$1;
(statearr_30603_32480[(2)] = null);

(statearr_30603_32480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (14))){
var state_30546__$1 = state_30546;
var statearr_30607_32483 = state_30546__$1;
(statearr_30607_32483[(2)] = null);

(statearr_30607_32483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (16))){
var inst_30495 = (state_30546[(10)]);
var inst_30500 = cljs.core.chunk_first(inst_30495);
var inst_30503 = cljs.core.chunk_rest(inst_30495);
var inst_30504 = cljs.core.count(inst_30500);
var inst_30481 = inst_30503;
var inst_30482 = inst_30500;
var inst_30483 = inst_30504;
var inst_30484 = (0);
var state_30546__$1 = (function (){var statearr_30608 = state_30546;
(statearr_30608[(12)] = inst_30481);

(statearr_30608[(13)] = inst_30483);

(statearr_30608[(15)] = inst_30484);

(statearr_30608[(16)] = inst_30482);

return statearr_30608;
})();
var statearr_30609_32497 = state_30546__$1;
(statearr_30609_32497[(2)] = null);

(statearr_30609_32497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (10))){
var inst_30481 = (state_30546[(12)]);
var inst_30483 = (state_30546[(13)]);
var inst_30484 = (state_30546[(15)]);
var inst_30482 = (state_30546[(16)]);
var inst_30489 = cljs.core._nth(inst_30482,inst_30484);
var inst_30490 = cljs.core.async.muxch_STAR_(inst_30489);
var inst_30491 = cljs.core.async.close_BANG_(inst_30490);
var inst_30492 = (inst_30484 + (1));
var tmp30604 = inst_30481;
var tmp30605 = inst_30483;
var tmp30606 = inst_30482;
var inst_30481__$1 = tmp30604;
var inst_30482__$1 = tmp30606;
var inst_30483__$1 = tmp30605;
var inst_30484__$1 = inst_30492;
var state_30546__$1 = (function (){var statearr_30610 = state_30546;
(statearr_30610[(12)] = inst_30481__$1);

(statearr_30610[(13)] = inst_30483__$1);

(statearr_30610[(17)] = inst_30491);

(statearr_30610[(15)] = inst_30484__$1);

(statearr_30610[(16)] = inst_30482__$1);

return statearr_30610;
})();
var statearr_30611_32505 = state_30546__$1;
(statearr_30611_32505[(2)] = null);

(statearr_30611_32505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (18))){
var inst_30515 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30612_32508 = state_30546__$1;
(statearr_30612_32508[(2)] = inst_30515);

(statearr_30612_32508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30483 = (state_30546[(13)]);
var inst_30484 = (state_30546[(15)]);
var inst_30486 = (inst_30484 < inst_30483);
var inst_30487 = inst_30486;
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30487)){
var statearr_30613_32517 = state_30546__$1;
(statearr_30613_32517[(1)] = (10));

} else {
var statearr_30614_32518 = state_30546__$1;
(statearr_30614_32518[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30546){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30546);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30616){var ex__28548__auto__ = e30616;
var statearr_30617_32536 = state_30546;
(statearr_30617_32536[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30546[(4)]))){
var statearr_30618_32537 = state_30546;
(statearr_30618_32537[(1)] = cljs.core.first((state_30546[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32538 = state_30546;
state_30546 = G__32538;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30619 = f__28731__auto__();
(statearr_30619[(6)] = c__28730__auto___32329);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30625 = arguments.length;
switch (G__30625) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30631 = arguments.length;
switch (G__30631) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30637 = arguments.length;
switch (G__30637) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28730__auto___32554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30706){
var state_val_30707 = (state_30706[(1)]);
if((state_val_30707 === (7))){
var state_30706__$1 = state_30706;
var statearr_30708_32558 = state_30706__$1;
(statearr_30708_32558[(2)] = null);

(statearr_30708_32558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (1))){
var state_30706__$1 = state_30706;
var statearr_30711_32560 = state_30706__$1;
(statearr_30711_32560[(2)] = null);

(statearr_30711_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (4))){
var inst_30652 = (state_30706[(7)]);
var inst_30654 = (state_30706[(8)]);
var inst_30660 = (inst_30654 < inst_30652);
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30660)){
var statearr_30713_32561 = state_30706__$1;
(statearr_30713_32561[(1)] = (6));

} else {
var statearr_30714_32562 = state_30706__$1;
(statearr_30714_32562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (15))){
var inst_30692 = (state_30706[(9)]);
var inst_30697 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30692);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30706__$1,(17),out,inst_30697);
} else {
if((state_val_30707 === (13))){
var inst_30692 = (state_30706[(9)]);
var inst_30692__$1 = (state_30706[(2)]);
var inst_30693 = cljs.core.some(cljs.core.nil_QMARK_,inst_30692__$1);
var state_30706__$1 = (function (){var statearr_30715 = state_30706;
(statearr_30715[(9)] = inst_30692__$1);

return statearr_30715;
})();
if(cljs.core.truth_(inst_30693)){
var statearr_30719_32566 = state_30706__$1;
(statearr_30719_32566[(1)] = (14));

} else {
var statearr_30723_32567 = state_30706__$1;
(statearr_30723_32567[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (6))){
var state_30706__$1 = state_30706;
var statearr_30724_32569 = state_30706__$1;
(statearr_30724_32569[(2)] = null);

(statearr_30724_32569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (17))){
var inst_30699 = (state_30706[(2)]);
var state_30706__$1 = (function (){var statearr_30727 = state_30706;
(statearr_30727[(10)] = inst_30699);

return statearr_30727;
})();
var statearr_30728_32573 = state_30706__$1;
(statearr_30728_32573[(2)] = null);

(statearr_30728_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (3))){
var inst_30704 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30706__$1,inst_30704);
} else {
if((state_val_30707 === (12))){
var _ = (function (){var statearr_30729 = state_30706;
(statearr_30729[(4)] = cljs.core.rest((state_30706[(4)])));

return statearr_30729;
})();
var state_30706__$1 = state_30706;
var ex30726 = (state_30706__$1[(2)]);
var statearr_30731_32575 = state_30706__$1;
(statearr_30731_32575[(5)] = ex30726);


if((ex30726 instanceof Object)){
var statearr_30732_32577 = state_30706__$1;
(statearr_30732_32577[(1)] = (11));

(statearr_30732_32577[(5)] = null);

} else {
throw ex30726;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (2))){
var inst_30651 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30652 = cnt;
var inst_30654 = (0);
var state_30706__$1 = (function (){var statearr_30737 = state_30706;
(statearr_30737[(11)] = inst_30651);

(statearr_30737[(7)] = inst_30652);

(statearr_30737[(8)] = inst_30654);

return statearr_30737;
})();
var statearr_30739_32587 = state_30706__$1;
(statearr_30739_32587[(2)] = null);

(statearr_30739_32587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (11))){
var inst_30670 = (state_30706[(2)]);
var inst_30671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30706__$1 = (function (){var statearr_30740 = state_30706;
(statearr_30740[(12)] = inst_30670);

return statearr_30740;
})();
var statearr_30743_32590 = state_30706__$1;
(statearr_30743_32590[(2)] = inst_30671);

(statearr_30743_32590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (9))){
var inst_30654 = (state_30706[(8)]);
var _ = (function (){var statearr_30745 = state_30706;
(statearr_30745[(4)] = cljs.core.cons((12),(state_30706[(4)])));

return statearr_30745;
})();
var inst_30677 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30654) : chs__$1.call(null,inst_30654));
var inst_30678 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30654) : done.call(null,inst_30654));
var inst_30679 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30677,inst_30678);
var ___$1 = (function (){var statearr_30746 = state_30706;
(statearr_30746[(4)] = cljs.core.rest((state_30706[(4)])));

return statearr_30746;
})();
var state_30706__$1 = state_30706;
var statearr_30747_32595 = state_30706__$1;
(statearr_30747_32595[(2)] = inst_30679);

(statearr_30747_32595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (5))){
var inst_30690 = (state_30706[(2)]);
var state_30706__$1 = (function (){var statearr_30748 = state_30706;
(statearr_30748[(13)] = inst_30690);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30706__$1,(13),dchan);
} else {
if((state_val_30707 === (14))){
var inst_30695 = cljs.core.async.close_BANG_(out);
var state_30706__$1 = state_30706;
var statearr_30749_32601 = state_30706__$1;
(statearr_30749_32601[(2)] = inst_30695);

(statearr_30749_32601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (16))){
var inst_30702 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30750_32604 = state_30706__$1;
(statearr_30750_32604[(2)] = inst_30702);

(statearr_30750_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (10))){
var inst_30654 = (state_30706[(8)]);
var inst_30682 = (state_30706[(2)]);
var inst_30684 = (inst_30654 + (1));
var inst_30654__$1 = inst_30684;
var state_30706__$1 = (function (){var statearr_30751 = state_30706;
(statearr_30751[(14)] = inst_30682);

(statearr_30751[(8)] = inst_30654__$1);

return statearr_30751;
})();
var statearr_30752_32607 = state_30706__$1;
(statearr_30752_32607[(2)] = null);

(statearr_30752_32607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (8))){
var inst_30688 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30753_32609 = state_30706__$1;
(statearr_30753_32609[(2)] = inst_30688);

(statearr_30753_32609[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30754[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30754[(1)] = (1));

return statearr_30754;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30706){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30706);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30755){var ex__28548__auto__ = e30755;
var statearr_30756_32623 = state_30706;
(statearr_30756_32623[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30706[(4)]))){
var statearr_30757_32625 = state_30706;
(statearr_30757_32625[(1)] = cljs.core.first((state_30706[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32626 = state_30706;
state_30706 = G__32626;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30758 = f__28731__auto__();
(statearr_30758[(6)] = c__28730__auto___32554);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30762 = arguments.length;
switch (G__30762) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___32632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30797){
var state_val_30798 = (state_30797[(1)]);
if((state_val_30798 === (7))){
var inst_30777 = (state_30797[(7)]);
var inst_30776 = (state_30797[(8)]);
var inst_30776__$1 = (state_30797[(2)]);
var inst_30777__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30776__$1,(0),null);
var inst_30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30776__$1,(1),null);
var inst_30779 = (inst_30777__$1 == null);
var state_30797__$1 = (function (){var statearr_30799 = state_30797;
(statearr_30799[(9)] = inst_30778);

(statearr_30799[(7)] = inst_30777__$1);

(statearr_30799[(8)] = inst_30776__$1);

return statearr_30799;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30800_32638 = state_30797__$1;
(statearr_30800_32638[(1)] = (8));

} else {
var statearr_30801_32639 = state_30797__$1;
(statearr_30801_32639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (1))){
var inst_30766 = cljs.core.vec(chs);
var inst_30767 = inst_30766;
var state_30797__$1 = (function (){var statearr_30803 = state_30797;
(statearr_30803[(10)] = inst_30767);

return statearr_30803;
})();
var statearr_30804_32640 = state_30797__$1;
(statearr_30804_32640[(2)] = null);

(statearr_30804_32640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (4))){
var inst_30767 = (state_30797[(10)]);
var state_30797__$1 = state_30797;
return cljs.core.async.ioc_alts_BANG_(state_30797__$1,(7),inst_30767);
} else {
if((state_val_30798 === (6))){
var inst_30793 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30805_32643 = state_30797__$1;
(statearr_30805_32643[(2)] = inst_30793);

(statearr_30805_32643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (3))){
var inst_30795 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30797__$1,inst_30795);
} else {
if((state_val_30798 === (2))){
var inst_30767 = (state_30797[(10)]);
var inst_30769 = cljs.core.count(inst_30767);
var inst_30770 = (inst_30769 > (0));
var state_30797__$1 = state_30797;
if(cljs.core.truth_(inst_30770)){
var statearr_30807_32649 = state_30797__$1;
(statearr_30807_32649[(1)] = (4));

} else {
var statearr_30808_32650 = state_30797__$1;
(statearr_30808_32650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (11))){
var inst_30767 = (state_30797[(10)]);
var inst_30786 = (state_30797[(2)]);
var tmp30806 = inst_30767;
var inst_30767__$1 = tmp30806;
var state_30797__$1 = (function (){var statearr_30809 = state_30797;
(statearr_30809[(11)] = inst_30786);

(statearr_30809[(10)] = inst_30767__$1);

return statearr_30809;
})();
var statearr_30810_32657 = state_30797__$1;
(statearr_30810_32657[(2)] = null);

(statearr_30810_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (9))){
var inst_30777 = (state_30797[(7)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30797__$1,(11),out,inst_30777);
} else {
if((state_val_30798 === (5))){
var inst_30791 = cljs.core.async.close_BANG_(out);
var state_30797__$1 = state_30797;
var statearr_30811_32658 = state_30797__$1;
(statearr_30811_32658[(2)] = inst_30791);

(statearr_30811_32658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (10))){
var inst_30789 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30814_32661 = state_30797__$1;
(statearr_30814_32661[(2)] = inst_30789);

(statearr_30814_32661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (8))){
var inst_30778 = (state_30797[(9)]);
var inst_30777 = (state_30797[(7)]);
var inst_30767 = (state_30797[(10)]);
var inst_30776 = (state_30797[(8)]);
var inst_30781 = (function (){var cs = inst_30767;
var vec__30772 = inst_30776;
var v = inst_30777;
var c = inst_30778;
return (function (p1__30759_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30759_SHARP_);
});
})();
var inst_30782 = cljs.core.filterv(inst_30781,inst_30767);
var inst_30767__$1 = inst_30782;
var state_30797__$1 = (function (){var statearr_30815 = state_30797;
(statearr_30815[(10)] = inst_30767__$1);

return statearr_30815;
})();
var statearr_30816_32666 = state_30797__$1;
(statearr_30816_32666[(2)] = null);

(statearr_30816_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30817[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30817[(1)] = (1));

return statearr_30817;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30797){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30797);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30820){var ex__28548__auto__ = e30820;
var statearr_30821_32671 = state_30797;
(statearr_30821_32671[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30797[(4)]))){
var statearr_30822_32673 = state_30797;
(statearr_30822_32673[(1)] = cljs.core.first((state_30797[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32678 = state_30797;
state_30797 = G__32678;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30825 = f__28731__auto__();
(statearr_30825[(6)] = c__28730__auto___32632);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30827 = arguments.length;
switch (G__30827) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___32713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (7))){
var inst_30833 = (state_30851[(7)]);
var inst_30833__$1 = (state_30851[(2)]);
var inst_30834 = (inst_30833__$1 == null);
var inst_30835 = cljs.core.not(inst_30834);
var state_30851__$1 = (function (){var statearr_30854 = state_30851;
(statearr_30854[(7)] = inst_30833__$1);

return statearr_30854;
})();
if(inst_30835){
var statearr_30855_32721 = state_30851__$1;
(statearr_30855_32721[(1)] = (8));

} else {
var statearr_30856_32722 = state_30851__$1;
(statearr_30856_32722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var inst_30828 = (0);
var state_30851__$1 = (function (){var statearr_30857 = state_30851;
(statearr_30857[(8)] = inst_30828);

return statearr_30857;
})();
var statearr_30858_32723 = state_30851__$1;
(statearr_30858_32723[(2)] = null);

(statearr_30858_32723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30851__$1,(7),ch);
} else {
if((state_val_30852 === (6))){
var inst_30846 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30859_32724 = state_30851__$1;
(statearr_30859_32724[(2)] = inst_30846);

(statearr_30859_32724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30848 = (state_30851[(2)]);
var inst_30849 = cljs.core.async.close_BANG_(out);
var state_30851__$1 = (function (){var statearr_30863 = state_30851;
(statearr_30863[(9)] = inst_30848);

return statearr_30863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30851__$1,inst_30849);
} else {
if((state_val_30852 === (2))){
var inst_30828 = (state_30851[(8)]);
var inst_30830 = (inst_30828 < n);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30830)){
var statearr_30865_32745 = state_30851__$1;
(statearr_30865_32745[(1)] = (4));

} else {
var statearr_30866_32749 = state_30851__$1;
(statearr_30866_32749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (11))){
var inst_30828 = (state_30851[(8)]);
var inst_30838 = (state_30851[(2)]);
var inst_30839 = (inst_30828 + (1));
var inst_30828__$1 = inst_30839;
var state_30851__$1 = (function (){var statearr_30867 = state_30851;
(statearr_30867[(10)] = inst_30838);

(statearr_30867[(8)] = inst_30828__$1);

return statearr_30867;
})();
var statearr_30868_32751 = state_30851__$1;
(statearr_30868_32751[(2)] = null);

(statearr_30868_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (9))){
var state_30851__$1 = state_30851;
var statearr_30869_32752 = state_30851__$1;
(statearr_30869_32752[(2)] = null);

(statearr_30869_32752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var state_30851__$1 = state_30851;
var statearr_30871_32753 = state_30851__$1;
(statearr_30871_32753[(2)] = null);

(statearr_30871_32753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (10))){
var inst_30843 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30872_32761 = state_30851__$1;
(statearr_30872_32761[(2)] = inst_30843);

(statearr_30872_32761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30833 = (state_30851[(7)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30851__$1,(11),out,inst_30833);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30874[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30874[(1)] = (1));

return statearr_30874;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30851){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30851);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30877){var ex__28548__auto__ = e30877;
var statearr_30880_32768 = state_30851;
(statearr_30880_32768[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30851[(4)]))){
var statearr_30881_32771 = state_30851;
(statearr_30881_32771[(1)] = cljs.core.first((state_30851[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32773 = state_30851;
state_30851 = G__32773;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30882 = f__28731__auto__();
(statearr_30882[(6)] = c__28730__auto___32713);

return statearr_30882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30884 = (function (f,ch,meta30885){
this.f = f;
this.ch = ch;
this.meta30885 = meta30885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30886,meta30885__$1){
var self__ = this;
var _30886__$1 = this;
return (new cljs.core.async.t_cljs$core$async30884(self__.f,self__.ch,meta30885__$1));
}));

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30886){
var self__ = this;
var _30886__$1 = this;
return self__.meta30885;
}));

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30888 = (function (f,ch,meta30885,_,fn1,meta30889){
this.f = f;
this.ch = ch;
this.meta30885 = meta30885;
this._ = _;
this.fn1 = fn1;
this.meta30889 = meta30889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30890,meta30889__$1){
var self__ = this;
var _30890__$1 = this;
return (new cljs.core.async.t_cljs$core$async30888(self__.f,self__.ch,self__.meta30885,self__._,self__.fn1,meta30889__$1));
}));

(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30890){
var self__ = this;
var _30890__$1 = this;
return self__.meta30889;
}));

(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30883_SHARP_){
var G__30896 = (((p1__30883_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30883_SHARP_) : self__.f.call(null,p1__30883_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30896) : f1.call(null,G__30896));
});
}));

(cljs.core.async.t_cljs$core$async30888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30885","meta30885",-1577529148,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30884","cljs.core.async/t_cljs$core$async30884",-1429837656,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30889","meta30889",1643013802,null)], null);
}));

(cljs.core.async.t_cljs$core$async30888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30888");

(cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30888.
 */
cljs.core.async.__GT_t_cljs$core$async30888 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30888(f__$1,ch__$1,meta30885__$1,___$2,fn1__$1,meta30889){
return (new cljs.core.async.t_cljs$core$async30888(f__$1,ch__$1,meta30885__$1,___$2,fn1__$1,meta30889));
});

}

return (new cljs.core.async.t_cljs$core$async30888(self__.f,self__.ch,self__.meta30885,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30902 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30902) : self__.f.call(null,G__30902));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30885","meta30885",-1577529148,null)], null);
}));

(cljs.core.async.t_cljs$core$async30884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30884");

(cljs.core.async.t_cljs$core$async30884.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30884.
 */
cljs.core.async.__GT_t_cljs$core$async30884 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30884(f__$1,ch__$1,meta30885){
return (new cljs.core.async.t_cljs$core$async30884(f__$1,ch__$1,meta30885));
});

}

return (new cljs.core.async.t_cljs$core$async30884(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30904 = (function (f,ch,meta30905){
this.f = f;
this.ch = ch;
this.meta30905 = meta30905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30906,meta30905__$1){
var self__ = this;
var _30906__$1 = this;
return (new cljs.core.async.t_cljs$core$async30904(self__.f,self__.ch,meta30905__$1));
}));

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30906){
var self__ = this;
var _30906__$1 = this;
return self__.meta30905;
}));

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30905","meta30905",652201009,null)], null);
}));

(cljs.core.async.t_cljs$core$async30904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30904");

(cljs.core.async.t_cljs$core$async30904.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30904.
 */
cljs.core.async.__GT_t_cljs$core$async30904 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30904(f__$1,ch__$1,meta30905){
return (new cljs.core.async.t_cljs$core$async30904(f__$1,ch__$1,meta30905));
});

}

return (new cljs.core.async.t_cljs$core$async30904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30920 = (function (p,ch,meta30921){
this.p = p;
this.ch = ch;
this.meta30921 = meta30921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30922,meta30921__$1){
var self__ = this;
var _30922__$1 = this;
return (new cljs.core.async.t_cljs$core$async30920(self__.p,self__.ch,meta30921__$1));
}));

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30922){
var self__ = this;
var _30922__$1 = this;
return self__.meta30921;
}));

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30921","meta30921",1078268214,null)], null);
}));

(cljs.core.async.t_cljs$core$async30920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30920");

(cljs.core.async.t_cljs$core$async30920.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30920.
 */
cljs.core.async.__GT_t_cljs$core$async30920 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30920(p__$1,ch__$1,meta30921){
return (new cljs.core.async.t_cljs$core$async30920(p__$1,ch__$1,meta30921));
});

}

return (new cljs.core.async.t_cljs$core$async30920(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30945 = arguments.length;
switch (G__30945) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___32968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_30969){
var state_val_30970 = (state_30969[(1)]);
if((state_val_30970 === (7))){
var inst_30965 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30971_32971 = state_30969__$1;
(statearr_30971_32971[(2)] = inst_30965);

(statearr_30971_32971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (1))){
var state_30969__$1 = state_30969;
var statearr_30975_32973 = state_30969__$1;
(statearr_30975_32973[(2)] = null);

(statearr_30975_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (4))){
var inst_30951 = (state_30969[(7)]);
var inst_30951__$1 = (state_30969[(2)]);
var inst_30952 = (inst_30951__$1 == null);
var state_30969__$1 = (function (){var statearr_30976 = state_30969;
(statearr_30976[(7)] = inst_30951__$1);

return statearr_30976;
})();
if(cljs.core.truth_(inst_30952)){
var statearr_30977_32974 = state_30969__$1;
(statearr_30977_32974[(1)] = (5));

} else {
var statearr_30978_32975 = state_30969__$1;
(statearr_30978_32975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (6))){
var inst_30951 = (state_30969[(7)]);
var inst_30956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30951) : p.call(null,inst_30951));
var state_30969__$1 = state_30969;
if(cljs.core.truth_(inst_30956)){
var statearr_30980_32976 = state_30969__$1;
(statearr_30980_32976[(1)] = (8));

} else {
var statearr_30981_32977 = state_30969__$1;
(statearr_30981_32977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (3))){
var inst_30967 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30969__$1,inst_30967);
} else {
if((state_val_30970 === (2))){
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30969__$1,(4),ch);
} else {
if((state_val_30970 === (11))){
var inst_30959 = (state_30969[(2)]);
var state_30969__$1 = state_30969;
var statearr_30982_32979 = state_30969__$1;
(statearr_30982_32979[(2)] = inst_30959);

(statearr_30982_32979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (9))){
var state_30969__$1 = state_30969;
var statearr_30983_32981 = state_30969__$1;
(statearr_30983_32981[(2)] = null);

(statearr_30983_32981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (5))){
var inst_30954 = cljs.core.async.close_BANG_(out);
var state_30969__$1 = state_30969;
var statearr_30984_32989 = state_30969__$1;
(statearr_30984_32989[(2)] = inst_30954);

(statearr_30984_32989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (10))){
var inst_30962 = (state_30969[(2)]);
var state_30969__$1 = (function (){var statearr_30985 = state_30969;
(statearr_30985[(8)] = inst_30962);

return statearr_30985;
})();
var statearr_30986_32991 = state_30969__$1;
(statearr_30986_32991[(2)] = null);

(statearr_30986_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30970 === (8))){
var inst_30951 = (state_30969[(7)]);
var state_30969__$1 = state_30969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30969__$1,(11),out,inst_30951);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null,null,null];
(statearr_30988[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30969){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30969);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30989){var ex__28548__auto__ = e30989;
var statearr_30990_33077 = state_30969;
(statearr_30990_33077[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30969[(4)]))){
var statearr_30991_33085 = state_30969;
(statearr_30991_33085[(1)] = cljs.core.first((state_30969[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33087 = state_30969;
state_30969 = G__33087;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_30993 = f__28731__auto__();
(statearr_30993[(6)] = c__28730__auto___32968);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30996 = arguments.length;
switch (G__30996) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_31077){
var state_val_31080 = (state_31077[(1)]);
if((state_val_31080 === (7))){
var inst_31071 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
var statearr_31092_33093 = state_31077__$1;
(statearr_31092_33093[(2)] = inst_31071);

(statearr_31092_33093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (20))){
var inst_31036 = (state_31077[(7)]);
var inst_31048 = (state_31077[(2)]);
var inst_31049 = cljs.core.next(inst_31036);
var inst_31017 = inst_31049;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31077__$1 = (function (){var statearr_31095 = state_31077;
(statearr_31095[(8)] = inst_31017);

(statearr_31095[(9)] = inst_31048);

(statearr_31095[(10)] = inst_31018);

(statearr_31095[(11)] = inst_31020);

(statearr_31095[(12)] = inst_31019);

return statearr_31095;
})();
var statearr_31096_33097 = state_31077__$1;
(statearr_31096_33097[(2)] = null);

(statearr_31096_33097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var state_31077__$1 = state_31077;
var statearr_31099_33098 = state_31077__$1;
(statearr_31099_33098[(2)] = null);

(statearr_31099_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_30999 = (state_31077[(13)]);
var inst_30999__$1 = (state_31077[(2)]);
var inst_31000 = (inst_30999__$1 == null);
var state_31077__$1 = (function (){var statearr_31100 = state_31077;
(statearr_31100[(13)] = inst_30999__$1);

return statearr_31100;
})();
if(cljs.core.truth_(inst_31000)){
var statearr_31102_33105 = state_31077__$1;
(statearr_31102_33105[(1)] = (5));

} else {
var statearr_31103_33110 = state_31077__$1;
(statearr_31103_33110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (15))){
var state_31077__$1 = state_31077;
var statearr_31107_33113 = state_31077__$1;
(statearr_31107_33113[(2)] = null);

(statearr_31107_33113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (21))){
var state_31077__$1 = state_31077;
var statearr_31109_33121 = state_31077__$1;
(statearr_31109_33121[(2)] = null);

(statearr_31109_33121[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (13))){
var inst_31017 = (state_31077[(8)]);
var inst_31018 = (state_31077[(10)]);
var inst_31020 = (state_31077[(11)]);
var inst_31019 = (state_31077[(12)]);
var inst_31027 = (state_31077[(2)]);
var inst_31029 = (inst_31020 + (1));
var tmp31104 = inst_31017;
var tmp31105 = inst_31018;
var tmp31106 = inst_31019;
var inst_31017__$1 = tmp31104;
var inst_31018__$1 = tmp31105;
var inst_31019__$1 = tmp31106;
var inst_31020__$1 = inst_31029;
var state_31077__$1 = (function (){var statearr_31110 = state_31077;
(statearr_31110[(8)] = inst_31017__$1);

(statearr_31110[(10)] = inst_31018__$1);

(statearr_31110[(11)] = inst_31020__$1);

(statearr_31110[(14)] = inst_31027);

(statearr_31110[(12)] = inst_31019__$1);

return statearr_31110;
})();
var statearr_31114_33139 = state_31077__$1;
(statearr_31114_33139[(2)] = null);

(statearr_31114_33139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (22))){
var state_31077__$1 = state_31077;
var statearr_31115_33145 = state_31077__$1;
(statearr_31115_33145[(2)] = null);

(statearr_31115_33145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var inst_30999 = (state_31077[(13)]);
var inst_31015 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30999) : f.call(null,inst_30999));
var inst_31016 = cljs.core.seq(inst_31015);
var inst_31017 = inst_31016;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31077__$1 = (function (){var statearr_31116 = state_31077;
(statearr_31116[(8)] = inst_31017);

(statearr_31116[(10)] = inst_31018);

(statearr_31116[(11)] = inst_31020);

(statearr_31116[(12)] = inst_31019);

return statearr_31116;
})();
var statearr_31119_33149 = state_31077__$1;
(statearr_31119_33149[(2)] = null);

(statearr_31119_33149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (17))){
var inst_31036 = (state_31077[(7)]);
var inst_31041 = cljs.core.chunk_first(inst_31036);
var inst_31042 = cljs.core.chunk_rest(inst_31036);
var inst_31043 = cljs.core.count(inst_31041);
var inst_31017 = inst_31042;
var inst_31018 = inst_31041;
var inst_31019 = inst_31043;
var inst_31020 = (0);
var state_31077__$1 = (function (){var statearr_31128 = state_31077;
(statearr_31128[(8)] = inst_31017);

(statearr_31128[(10)] = inst_31018);

(statearr_31128[(11)] = inst_31020);

(statearr_31128[(12)] = inst_31019);

return statearr_31128;
})();
var statearr_31129_33158 = state_31077__$1;
(statearr_31129_33158[(2)] = null);

(statearr_31129_33158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31073 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31077__$1,inst_31073);
} else {
if((state_val_31080 === (12))){
var inst_31057 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
var statearr_31130_33169 = state_31077__$1;
(statearr_31130_33169[(2)] = inst_31057);

(statearr_31130_33169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (2))){
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31077__$1,(4),in$);
} else {
if((state_val_31080 === (23))){
var inst_31069 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
var statearr_31133_33172 = state_31077__$1;
(statearr_31133_33172[(2)] = inst_31069);

(statearr_31133_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (19))){
var inst_31052 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
var statearr_31134_33177 = state_31077__$1;
(statearr_31134_33177[(2)] = inst_31052);

(statearr_31134_33177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (11))){
var inst_31017 = (state_31077[(8)]);
var inst_31036 = (state_31077[(7)]);
var inst_31036__$1 = cljs.core.seq(inst_31017);
var state_31077__$1 = (function (){var statearr_31135 = state_31077;
(statearr_31135[(7)] = inst_31036__$1);

return statearr_31135;
})();
if(inst_31036__$1){
var statearr_31136_33182 = state_31077__$1;
(statearr_31136_33182[(1)] = (14));

} else {
var statearr_31137_33183 = state_31077__$1;
(statearr_31137_33183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var inst_31059 = (state_31077[(2)]);
var inst_31064 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31077__$1 = (function (){var statearr_31138 = state_31077;
(statearr_31138[(15)] = inst_31059);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31064)){
var statearr_31139_33189 = state_31077__$1;
(statearr_31139_33189[(1)] = (21));

} else {
var statearr_31142_33190 = state_31077__$1;
(statearr_31142_33190[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (5))){
var inst_31002 = cljs.core.async.close_BANG_(out);
var state_31077__$1 = state_31077;
var statearr_31148_33193 = state_31077__$1;
(statearr_31148_33193[(2)] = inst_31002);

(statearr_31148_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (14))){
var inst_31036 = (state_31077[(7)]);
var inst_31038 = cljs.core.chunked_seq_QMARK_(inst_31036);
var state_31077__$1 = state_31077;
if(inst_31038){
var statearr_31152_33195 = state_31077__$1;
(statearr_31152_33195[(1)] = (17));

} else {
var statearr_31153_33196 = state_31077__$1;
(statearr_31153_33196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (16))){
var inst_31055 = (state_31077[(2)]);
var state_31077__$1 = state_31077;
var statearr_31154_33197 = state_31077__$1;
(statearr_31154_33197[(2)] = inst_31055);

(statearr_31154_33197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (10))){
var inst_31018 = (state_31077[(10)]);
var inst_31020 = (state_31077[(11)]);
var inst_31025 = cljs.core._nth(inst_31018,inst_31020);
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31077__$1,(13),out,inst_31025);
} else {
if((state_val_31080 === (18))){
var inst_31036 = (state_31077[(7)]);
var inst_31046 = cljs.core.first(inst_31036);
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31077__$1,(20),out,inst_31046);
} else {
if((state_val_31080 === (8))){
var inst_31020 = (state_31077[(11)]);
var inst_31019 = (state_31077[(12)]);
var inst_31022 = (inst_31020 < inst_31019);
var inst_31023 = inst_31022;
var state_31077__$1 = state_31077;
if(cljs.core.truth_(inst_31023)){
var statearr_31161_33207 = state_31077__$1;
(statearr_31161_33207[(1)] = (10));

} else {
var statearr_31162_33208 = state_31077__$1;
(statearr_31162_33208[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_31163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__);

(statearr_31163[(1)] = (1));

return statearr_31163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1 = (function (state_31077){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31077);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31166){var ex__28548__auto__ = e31166;
var statearr_31170_33212 = state_31077;
(statearr_31170_33212[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31077[(4)]))){
var statearr_31171_33218 = state_31077;
(statearr_31171_33218[(1)] = cljs.core.first((state_31077[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33223 = state_31077;
state_31077 = G__33223;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__ = function(state_31077){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1.call(this,state_31077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_31182 = f__28731__auto__();
(statearr_31182[(6)] = c__28730__auto__);

return statearr_31182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));

return c__28730__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31184 = arguments.length;
switch (G__31184) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31195 = arguments.length;
switch (G__31195) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31205 = arguments.length;
switch (G__31205) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___33284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_31241){
var state_val_31242 = (state_31241[(1)]);
if((state_val_31242 === (7))){
var inst_31236 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31244_33292 = state_31241__$1;
(statearr_31244_33292[(2)] = inst_31236);

(statearr_31244_33292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (1))){
var inst_31212 = null;
var state_31241__$1 = (function (){var statearr_31245 = state_31241;
(statearr_31245[(7)] = inst_31212);

return statearr_31245;
})();
var statearr_31246_33295 = state_31241__$1;
(statearr_31246_33295[(2)] = null);

(statearr_31246_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (4))){
var inst_31220 = (state_31241[(8)]);
var inst_31220__$1 = (state_31241[(2)]);
var inst_31222 = (inst_31220__$1 == null);
var inst_31223 = cljs.core.not(inst_31222);
var state_31241__$1 = (function (){var statearr_31249 = state_31241;
(statearr_31249[(8)] = inst_31220__$1);

return statearr_31249;
})();
if(inst_31223){
var statearr_31250_33368 = state_31241__$1;
(statearr_31250_33368[(1)] = (5));

} else {
var statearr_31251_33369 = state_31241__$1;
(statearr_31251_33369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (6))){
var state_31241__$1 = state_31241;
var statearr_31253_33370 = state_31241__$1;
(statearr_31253_33370[(2)] = null);

(statearr_31253_33370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (3))){
var inst_31238 = (state_31241[(2)]);
var inst_31239 = cljs.core.async.close_BANG_(out);
var state_31241__$1 = (function (){var statearr_31254 = state_31241;
(statearr_31254[(9)] = inst_31238);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31241__$1,inst_31239);
} else {
if((state_val_31242 === (2))){
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31241__$1,(4),ch);
} else {
if((state_val_31242 === (11))){
var inst_31220 = (state_31241[(8)]);
var inst_31230 = (state_31241[(2)]);
var inst_31212 = inst_31220;
var state_31241__$1 = (function (){var statearr_31256 = state_31241;
(statearr_31256[(7)] = inst_31212);

(statearr_31256[(10)] = inst_31230);

return statearr_31256;
})();
var statearr_31259_33376 = state_31241__$1;
(statearr_31259_33376[(2)] = null);

(statearr_31259_33376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (9))){
var inst_31220 = (state_31241[(8)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31241__$1,(11),out,inst_31220);
} else {
if((state_val_31242 === (5))){
var inst_31220 = (state_31241[(8)]);
var inst_31212 = (state_31241[(7)]);
var inst_31225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31220,inst_31212);
var state_31241__$1 = state_31241;
if(inst_31225){
var statearr_31264_33377 = state_31241__$1;
(statearr_31264_33377[(1)] = (8));

} else {
var statearr_31265_33378 = state_31241__$1;
(statearr_31265_33378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (10))){
var inst_31233 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31267_33380 = state_31241__$1;
(statearr_31267_33380[(2)] = inst_31233);

(statearr_31267_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (8))){
var inst_31212 = (state_31241[(7)]);
var tmp31262 = inst_31212;
var inst_31212__$1 = tmp31262;
var state_31241__$1 = (function (){var statearr_31268 = state_31241;
(statearr_31268[(7)] = inst_31212__$1);

return statearr_31268;
})();
var statearr_31269_33381 = state_31241__$1;
(statearr_31269_33381[(2)] = null);

(statearr_31269_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31241){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31241);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31273){var ex__28548__auto__ = e31273;
var statearr_31274_33383 = state_31241;
(statearr_31274_33383[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31241[(4)]))){
var statearr_31276_33384 = state_31241;
(statearr_31276_33384[(1)] = cljs.core.first((state_31241[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_31241;
state_31241 = G__33386;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_31279 = f__28731__auto__();
(statearr_31279[(6)] = c__28730__auto___33284);

return statearr_31279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31289 = arguments.length;
switch (G__31289) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___33400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_31343){
var state_val_31344 = (state_31343[(1)]);
if((state_val_31344 === (7))){
var inst_31337 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31349_33424 = state_31343__$1;
(statearr_31349_33424[(2)] = inst_31337);

(statearr_31349_33424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (1))){
var inst_31302 = (new Array(n));
var inst_31303 = inst_31302;
var inst_31304 = (0);
var state_31343__$1 = (function (){var statearr_31351 = state_31343;
(statearr_31351[(7)] = inst_31303);

(statearr_31351[(8)] = inst_31304);

return statearr_31351;
})();
var statearr_31352_33427 = state_31343__$1;
(statearr_31352_33427[(2)] = null);

(statearr_31352_33427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (4))){
var inst_31307 = (state_31343[(9)]);
var inst_31307__$1 = (state_31343[(2)]);
var inst_31308 = (inst_31307__$1 == null);
var inst_31309 = cljs.core.not(inst_31308);
var state_31343__$1 = (function (){var statearr_31353 = state_31343;
(statearr_31353[(9)] = inst_31307__$1);

return statearr_31353;
})();
if(inst_31309){
var statearr_31354_33429 = state_31343__$1;
(statearr_31354_33429[(1)] = (5));

} else {
var statearr_31355_33430 = state_31343__$1;
(statearr_31355_33430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (15))){
var inst_31331 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31356_33431 = state_31343__$1;
(statearr_31356_33431[(2)] = inst_31331);

(statearr_31356_33431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (13))){
var state_31343__$1 = state_31343;
var statearr_31357_33438 = state_31343__$1;
(statearr_31357_33438[(2)] = null);

(statearr_31357_33438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (6))){
var inst_31304 = (state_31343[(8)]);
var inst_31325 = (inst_31304 > (0));
var state_31343__$1 = state_31343;
if(cljs.core.truth_(inst_31325)){
var statearr_31358_33439 = state_31343__$1;
(statearr_31358_33439[(1)] = (12));

} else {
var statearr_31359_33440 = state_31343__$1;
(statearr_31359_33440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (3))){
var inst_31340 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31343__$1,inst_31340);
} else {
if((state_val_31344 === (12))){
var inst_31303 = (state_31343[(7)]);
var inst_31328 = cljs.core.vec(inst_31303);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31343__$1,(15),out,inst_31328);
} else {
if((state_val_31344 === (2))){
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31343__$1,(4),ch);
} else {
if((state_val_31344 === (11))){
var inst_31319 = (state_31343[(2)]);
var inst_31320 = (new Array(n));
var inst_31303 = inst_31320;
var inst_31304 = (0);
var state_31343__$1 = (function (){var statearr_31360 = state_31343;
(statearr_31360[(10)] = inst_31319);

(statearr_31360[(7)] = inst_31303);

(statearr_31360[(8)] = inst_31304);

return statearr_31360;
})();
var statearr_31365_33441 = state_31343__$1;
(statearr_31365_33441[(2)] = null);

(statearr_31365_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (9))){
var inst_31303 = (state_31343[(7)]);
var inst_31317 = cljs.core.vec(inst_31303);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31343__$1,(11),out,inst_31317);
} else {
if((state_val_31344 === (5))){
var inst_31303 = (state_31343[(7)]);
var inst_31312 = (state_31343[(11)]);
var inst_31307 = (state_31343[(9)]);
var inst_31304 = (state_31343[(8)]);
var inst_31311 = (inst_31303[inst_31304] = inst_31307);
var inst_31312__$1 = (inst_31304 + (1));
var inst_31313 = (inst_31312__$1 < n);
var state_31343__$1 = (function (){var statearr_31366 = state_31343;
(statearr_31366[(11)] = inst_31312__$1);

(statearr_31366[(12)] = inst_31311);

return statearr_31366;
})();
if(cljs.core.truth_(inst_31313)){
var statearr_31367_33442 = state_31343__$1;
(statearr_31367_33442[(1)] = (8));

} else {
var statearr_31368_33443 = state_31343__$1;
(statearr_31368_33443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (14))){
var inst_31334 = (state_31343[(2)]);
var inst_31335 = cljs.core.async.close_BANG_(out);
var state_31343__$1 = (function (){var statearr_31374 = state_31343;
(statearr_31374[(13)] = inst_31334);

return statearr_31374;
})();
var statearr_31375_33448 = state_31343__$1;
(statearr_31375_33448[(2)] = inst_31335);

(statearr_31375_33448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (10))){
var inst_31323 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31376_33450 = state_31343__$1;
(statearr_31376_33450[(2)] = inst_31323);

(statearr_31376_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (8))){
var inst_31303 = (state_31343[(7)]);
var inst_31312 = (state_31343[(11)]);
var tmp31369 = inst_31303;
var inst_31303__$1 = tmp31369;
var inst_31304 = inst_31312;
var state_31343__$1 = (function (){var statearr_31377 = state_31343;
(statearr_31377[(7)] = inst_31303__$1);

(statearr_31377[(8)] = inst_31304);

return statearr_31377;
})();
var statearr_31378_33451 = state_31343__$1;
(statearr_31378_33451[(2)] = null);

(statearr_31378_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31379[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31379[(1)] = (1));

return statearr_31379;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31343){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31343);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31380){var ex__28548__auto__ = e31380;
var statearr_31381_33474 = state_31343;
(statearr_31381_33474[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31343[(4)]))){
var statearr_31382_33476 = state_31343;
(statearr_31382_33476[(1)] = cljs.core.first((state_31343[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_31343;
state_31343 = G__33478;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_31383 = f__28731__auto__();
(statearr_31383[(6)] = c__28730__auto___33400);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31397 = arguments.length;
switch (G__31397) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28730__auto___33480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28731__auto__ = (function (){var switch__28544__auto__ = (function (state_31452){
var state_val_31454 = (state_31452[(1)]);
if((state_val_31454 === (7))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31456_33484 = state_31452__$1;
(statearr_31456_33484[(2)] = inst_31448);

(statearr_31456_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (1))){
var inst_31409 = [];
var inst_31410 = inst_31409;
var inst_31411 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31452__$1 = (function (){var statearr_31457 = state_31452;
(statearr_31457[(7)] = inst_31410);

(statearr_31457[(8)] = inst_31411);

return statearr_31457;
})();
var statearr_31458_33499 = state_31452__$1;
(statearr_31458_33499[(2)] = null);

(statearr_31458_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (4))){
var inst_31414 = (state_31452[(9)]);
var inst_31414__$1 = (state_31452[(2)]);
var inst_31415 = (inst_31414__$1 == null);
var inst_31416 = cljs.core.not(inst_31415);
var state_31452__$1 = (function (){var statearr_31459 = state_31452;
(statearr_31459[(9)] = inst_31414__$1);

return statearr_31459;
})();
if(inst_31416){
var statearr_31460_33509 = state_31452__$1;
(statearr_31460_33509[(1)] = (5));

} else {
var statearr_31461_33510 = state_31452__$1;
(statearr_31461_33510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (15))){
var inst_31442 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31462_33511 = state_31452__$1;
(statearr_31462_33511[(2)] = inst_31442);

(statearr_31462_33511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (13))){
var state_31452__$1 = state_31452;
var statearr_31464_33512 = state_31452__$1;
(statearr_31464_33512[(2)] = null);

(statearr_31464_33512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (6))){
var inst_31410 = (state_31452[(7)]);
var inst_31437 = inst_31410.length;
var inst_31438 = (inst_31437 > (0));
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31438)){
var statearr_31472_33513 = state_31452__$1;
(statearr_31472_33513[(1)] = (12));

} else {
var statearr_31474_33514 = state_31452__$1;
(statearr_31474_33514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (3))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31452__$1,inst_31450);
} else {
if((state_val_31454 === (12))){
var inst_31410 = (state_31452[(7)]);
var inst_31440 = cljs.core.vec(inst_31410);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31452__$1,(15),out,inst_31440);
} else {
if((state_val_31454 === (2))){
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31452__$1,(4),ch);
} else {
if((state_val_31454 === (11))){
var inst_31419 = (state_31452[(10)]);
var inst_31414 = (state_31452[(9)]);
var inst_31430 = (state_31452[(2)]);
var inst_31431 = [];
var inst_31432 = inst_31431.push(inst_31414);
var inst_31410 = inst_31431;
var inst_31411 = inst_31419;
var state_31452__$1 = (function (){var statearr_31475 = state_31452;
(statearr_31475[(7)] = inst_31410);

(statearr_31475[(11)] = inst_31432);

(statearr_31475[(12)] = inst_31430);

(statearr_31475[(8)] = inst_31411);

return statearr_31475;
})();
var statearr_31476_33530 = state_31452__$1;
(statearr_31476_33530[(2)] = null);

(statearr_31476_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (9))){
var inst_31410 = (state_31452[(7)]);
var inst_31428 = cljs.core.vec(inst_31410);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31452__$1,(11),out,inst_31428);
} else {
if((state_val_31454 === (5))){
var inst_31419 = (state_31452[(10)]);
var inst_31414 = (state_31452[(9)]);
var inst_31411 = (state_31452[(8)]);
var inst_31419__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31414) : f.call(null,inst_31414));
var inst_31420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31419__$1,inst_31411);
var inst_31421 = cljs.core.keyword_identical_QMARK_(inst_31411,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31422 = ((inst_31420) || (inst_31421));
var state_31452__$1 = (function (){var statearr_31477 = state_31452;
(statearr_31477[(10)] = inst_31419__$1);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31422)){
var statearr_31478_33554 = state_31452__$1;
(statearr_31478_33554[(1)] = (8));

} else {
var statearr_31479_33556 = state_31452__$1;
(statearr_31479_33556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (14))){
var inst_31445 = (state_31452[(2)]);
var inst_31446 = cljs.core.async.close_BANG_(out);
var state_31452__$1 = (function (){var statearr_31481 = state_31452;
(statearr_31481[(13)] = inst_31445);

return statearr_31481;
})();
var statearr_31482_33584 = state_31452__$1;
(statearr_31482_33584[(2)] = inst_31446);

(statearr_31482_33584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (10))){
var inst_31435 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31483_33589 = state_31452__$1;
(statearr_31483_33589[(2)] = inst_31435);

(statearr_31483_33589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (8))){
var inst_31419 = (state_31452[(10)]);
var inst_31414 = (state_31452[(9)]);
var inst_31410 = (state_31452[(7)]);
var inst_31425 = inst_31410.push(inst_31414);
var tmp31480 = inst_31410;
var inst_31410__$1 = tmp31480;
var inst_31411 = inst_31419;
var state_31452__$1 = (function (){var statearr_31485 = state_31452;
(statearr_31485[(7)] = inst_31410__$1);

(statearr_31485[(14)] = inst_31425);

(statearr_31485[(8)] = inst_31411);

return statearr_31485;
})();
var statearr_31486_33605 = state_31452__$1;
(statearr_31486_33605[(2)] = null);

(statearr_31486_33605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31487[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31487[(1)] = (1));

return statearr_31487;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31452){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31452);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31488){var ex__28548__auto__ = e31488;
var statearr_31493_33622 = state_31452;
(statearr_31493_33622[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31452[(4)]))){
var statearr_31494_33624 = state_31452;
(statearr_31494_33624[(1)] = cljs.core.first((state_31452[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33632 = state_31452;
state_31452 = G__33632;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28732__auto__ = (function (){var statearr_31500 = f__28731__auto__();
(statearr_31500[(6)] = c__28730__auto___33480);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28732__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
