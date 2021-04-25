goog.provide('threeagent.impl.threejs');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
threeagent.impl.threejs.perspective_camera = (function threeagent$impl$threejs$perspective_camera(fov,aspect,near,far){
return (new module$node_modules$three$build$three.PerspectiveCamera(fov,aspect,near,far));
});
threeagent.impl.threejs.point_light = (function threeagent$impl$threejs$point_light(c,i,d){
return (new module$node_modules$three$build$three.PointLight(c,i,d));
});
threeagent.impl.threejs.directional_light = (function threeagent$impl$threejs$directional_light(c,i){
return (new module$node_modules$three$build$three.DirectionalLight(c,i));
});
threeagent.impl.threejs.hemisphere_light = (function threeagent$impl$threejs$hemisphere_light(sky_color,ground_color,intensity){
return (new module$node_modules$three$build$three.HemisphereLight(sky_color,ground_color,intensity));
});
threeagent.impl.threejs.box_geometry = (function threeagent$impl$threejs$box_geometry(x,y,z){
return (new module$node_modules$three$build$three.BoxGeometry(x,y,z));
});
threeagent.impl.threejs.plane_geometry = (function threeagent$impl$threejs$plane_geometry(width,height,segments_width,segments_height){
return (new module$node_modules$three$build$three.PlaneGeometry(width,height,segments_width,segments_height));
});
threeagent.impl.threejs.sphere_geometry = (function threeagent$impl$threejs$sphere_geometry(radius,width_seg,height_seg){
return (new module$node_modules$three$build$three.SphereGeometry(radius,width_seg,height_seg));
});
threeagent.impl.threejs.text_geometry = (function threeagent$impl$threejs$text_geometry(text,cfg){
return (new module$node_modules$three$build$three.TextGeometry(text,cljs.core.clj__GT_js(cfg)));
});
threeagent.impl.threejs.mesh_basic_material = (function threeagent$impl$threejs$mesh_basic_material(c){
return (new module$node_modules$three$build$three.MeshBasicMaterial(cljs.core.clj__GT_js(c)));
});
threeagent.impl.threejs.mesh_phong_material = (function threeagent$impl$threejs$mesh_phong_material(c){
return (new module$node_modules$three$build$three.MeshPhongMaterial(cljs.core.clj__GT_js(c)));
});
threeagent.impl.threejs.mesh = (function threeagent$impl$threejs$mesh(geo,mat){
return (new module$node_modules$three$build$three.Mesh(geo,mat));
});
threeagent.impl.threejs.object = (function threeagent$impl$threejs$object(){
return (new module$node_modules$three$build$three.Object3D());
});
threeagent.impl.threejs.group = (function threeagent$impl$threejs$group(){
return (new module$node_modules$three$build$three.Group());
});
threeagent.impl.threejs.vec3 = (function threeagent$impl$threejs$vec3(var_args){
var G__26093 = arguments.length;
switch (G__26093) {
case 1:
return threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 0:
return threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$1 = (function (p__26095){
var vec__26096 = p__26095;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}));

(threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new module$node_modules$three$build$three.Vector3());
}));

(threeagent.impl.threejs.vec3.cljs$lang$maxFixedArity = 3);

threeagent.impl.threejs.arrow_helper = (function threeagent$impl$threejs$arrow_helper(dir,origin,length){
return (new module$node_modules$three$build$three.ArrowHelper(threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$1(dir),threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$1(origin),length));
});
threeagent.impl.threejs.vec3__GT_vector = (function threeagent$impl$threejs$vec3__GT_vector(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.x,v.y,v.z], null);
});
threeagent.impl.threejs.euler = (function threeagent$impl$threejs$euler(x,y,z){
return (new module$node_modules$three$build$three.Euler(x,y,z,"XYZ"));
});
threeagent.impl.threejs.euler__GT_vector = (function threeagent$impl$threejs$euler__GT_vector(e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.x,e.y,e.z], null);
});
threeagent.impl.threejs.color = (function threeagent$impl$threejs$color(var_args){
var G__26101 = arguments.length;
switch (G__26101) {
case 1:
return threeagent.impl.threejs.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return threeagent.impl.threejs.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.threejs.color.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new module$node_modules$three$build$three.Color(s));
}));

(threeagent.impl.threejs.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new module$node_modules$three$build$three.Color(r,g,b));
}));

(threeagent.impl.threejs.color.cljs$lang$maxFixedArity = 3);

threeagent.impl.threejs.raycaster = (function threeagent$impl$threejs$raycaster(origin,dir,near,far){
return (new module$node_modules$three$build$three.Raycaster(origin,dir,near,far));
});
threeagent.impl.threejs.world_position = (function threeagent$impl$threejs$world_position(obj){
if(cljs.core.truth_(obj)){
var v = threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$0();
obj.getWorldPosition(v);

return v;
} else {
return null;
}
});
threeagent.impl.threejs.rotation__GT_direction = (function threeagent$impl$threejs$rotation__GT_direction(obj){
var quat = (new module$node_modules$three$build$three.Quaternion()).setFromRotationMatrix(obj.matrixWorld);
var vector = threeagent.impl.threejs.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
vector.applyQuaternion(quat);

vector.normalize();

return vector;
});
threeagent.impl.threejs.set_position_BANG_ = (function threeagent$impl$threejs$set_position_BANG_(obj,p__26117){
var vec__26118 = p__26117;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26118,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26118,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26118,(2),null);
obj.position.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_rotation_BANG_ = (function threeagent$impl$threejs$set_rotation_BANG_(obj,p__26121){
var vec__26122 = p__26121;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26122,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26122,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26122,(2),null);
obj.setRotationFromEuler(threeagent.impl.threejs.euler(x,y,z));

return obj;
});
threeagent.impl.threejs.set_scale_BANG_ = (function threeagent$impl$threejs$set_scale_BANG_(obj,p__26125){
var vec__26126 = p__26125;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26126,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26126,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26126,(2),null);
obj.scale.set(x,y,z);

return obj;
});
threeagent.impl.threejs.add_child_BANG_ = (function threeagent$impl$threejs$add_child_BANG_(parent,child){
return parent.add(child);
});
threeagent.impl.threejs.remove_child_BANG_ = (function threeagent$impl$threejs$remove_child_BANG_(parent,child){
return parent.remove(child);
});
threeagent.impl.threejs.remove_all_children_BANG_ = (function threeagent$impl$threejs$remove_all_children_BANG_(parent){
var iter__4564__auto___26150 = (function threeagent$impl$threejs$remove_all_children_BANG__$_iter__26129(s__26130){
return (new cljs.core.LazySeq(null,(function (){
var s__26130__$1 = s__26130;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26130__$1);
if(temp__5735__auto__){
var s__26130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26130__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__26130__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__26132 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__26131 = (0);
while(true){
if((i__26131 < size__4563__auto__)){
var c = cljs.core._nth(c__4562__auto__,i__26131);
cljs.core.chunk_append(b__26132,threeagent.impl.threejs.remove_child_BANG_(parent,c));

var G__26151 = (i__26131 + (1));
i__26131 = G__26151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26132),threeagent$impl$threejs$remove_all_children_BANG__$_iter__26129(cljs.core.chunk_rest(s__26130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26132),null);
}
} else {
var c = cljs.core.first(s__26130__$2);
return cljs.core.cons(threeagent.impl.threejs.remove_child_BANG_(parent,c),threeagent$impl$threejs$remove_all_children_BANG__$_iter__26129(cljs.core.rest(s__26130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4564__auto___26150(parent.children);

return parent;
});

//# sourceMappingURL=threeagent.impl.threejs.js.map
