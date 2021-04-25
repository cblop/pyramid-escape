goog.provide('threeagent.alpha.core');
threeagent.alpha.core.atom = reagent.ratom.atom;
threeagent.alpha.core.cursor = reagent.ratom.cursor;
threeagent.alpha.core.track = reagent.ratom.track;
threeagent.alpha.core.render = (function threeagent$alpha$core$render(var_args){
var G__26221 = arguments.length;
switch (G__26221) {
case 2:
return threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2 = (function (root_fn,dom_root){
return threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$3(root_fn,dom_root,cljs.core.PersistentArrayMap.EMPTY);
}));

(threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$3 = (function (root_fn,dom_root,opts){
return threeagent.impl.scene.render(root_fn,dom_root,opts);
}));

(threeagent.alpha.core.render.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=threeagent.alpha.core.js.map
