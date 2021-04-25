goog.provide('pyramid_escape.util.threejs');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
pyramid_escape.util.threejs.color = (function pyramid_escape$util$threejs$color(var_args){
var G__26043 = arguments.length;
switch (G__26043) {
case 1:
return pyramid_escape.util.threejs.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return pyramid_escape.util.threejs.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pyramid_escape.util.threejs.color.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new module$node_modules$three$build$three.Color(s));
}));

(pyramid_escape.util.threejs.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new module$node_modules$three$build$three.Color(r,g,b));
}));

(pyramid_escape.util.threejs.color.cljs$lang$maxFixedArity = 3);

pyramid_escape.util.threejs.vec3 = (function pyramid_escape$util$threejs$vec3(var_args){
var G__26076 = arguments.length;
switch (G__26076) {
case 1:
return pyramid_escape.util.threejs.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return pyramid_escape.util.threejs.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pyramid_escape.util.threejs.vec3.cljs$core$IFn$_invoke$arity$1 = (function (p__26081){
var vec__26082 = p__26081;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(pyramid_escape.util.threejs.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(pyramid_escape.util.threejs.vec3.cljs$lang$maxFixedArity = 3);

pyramid_escape.util.threejs.vec2 = (function pyramid_escape$util$threejs$vec2(var_args){
var G__26086 = arguments.length;
switch (G__26086) {
case 1:
return pyramid_escape.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pyramid_escape.util.threejs.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pyramid_escape.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1 = (function (p__26087){
var vec__26088 = p__26087;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(1),null);
return (new module$node_modules$three$build$three.Vector2(x,y));
}));

(pyramid_escape.util.threejs.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new module$node_modules$three$build$three.Vector2(x,y));
}));

(pyramid_escape.util.threejs.vec2.cljs$lang$maxFixedArity = 2);

pyramid_escape.util.threejs.raycaster = (function pyramid_escape$util$threejs$raycaster(origin,dir,near,far){
return (new module$node_modules$three$build$three.Raycaster(origin,dir,near,far));
});
pyramid_escape.util.threejs.texture = (function pyramid_escape$util$threejs$texture(file){
return (new module$node_modules$three$build$three.TextureLoader()).load(file);
});
pyramid_escape.util.threejs.mesh = (function pyramid_escape$util$threejs$mesh(object){
return (new module$node_modules$three$build$three.Mesh(object));
});

//# sourceMappingURL=pyramid_escape.util.threejs.js.map
