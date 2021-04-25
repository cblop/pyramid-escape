goog.provide('ouroboros.util.threejs');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
ouroboros.util.threejs.color = (function ouroboros$util$threejs$color(var_args){
var G__26043 = arguments.length;
switch (G__26043) {
case 1:
return ouroboros.util.threejs.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return ouroboros.util.threejs.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ouroboros.util.threejs.color.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new module$node_modules$three$build$three.Color(s));
}));

(ouroboros.util.threejs.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new module$node_modules$three$build$three.Color(r,g,b));
}));

(ouroboros.util.threejs.color.cljs$lang$maxFixedArity = 3);

ouroboros.util.threejs.vec3 = (function ouroboros$util$threejs$vec3(var_args){
var G__26045 = arguments.length;
switch (G__26045) {
case 1:
return ouroboros.util.threejs.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return ouroboros.util.threejs.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ouroboros.util.threejs.vec3.cljs$core$IFn$_invoke$arity$1 = (function (p__26046){
var vec__26053 = p__26046;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26053,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26053,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26053,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(ouroboros.util.threejs.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(ouroboros.util.threejs.vec3.cljs$lang$maxFixedArity = 3);

ouroboros.util.threejs.vec2 = (function ouroboros$util$threejs$vec2(var_args){
var G__26075 = arguments.length;
switch (G__26075) {
case 1:
return ouroboros.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ouroboros.util.threejs.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ouroboros.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1 = (function (p__26082){
var vec__26084 = p__26082;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(1),null);
return (new module$node_modules$three$build$three.Vector2(x,y));
}));

(ouroboros.util.threejs.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new module$node_modules$three$build$three.Vector2(x,y));
}));

(ouroboros.util.threejs.vec2.cljs$lang$maxFixedArity = 2);

ouroboros.util.threejs.raycaster = (function ouroboros$util$threejs$raycaster(origin,dir,near,far){
return (new module$node_modules$three$build$three.Raycaster(origin,dir,near,far));
});
ouroboros.util.threejs.texture = (function ouroboros$util$threejs$texture(file){
return (new module$node_modules$three$build$three.TextureLoader()).load(file);
});
ouroboros.util.threejs.mesh = (function ouroboros$util$threejs$mesh(object){
return (new module$node_modules$three$build$three.Mesh(object));
});

//# sourceMappingURL=ouroboros.util.threejs.js.map
