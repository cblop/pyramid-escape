goog.provide('threeagent.impl.component');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
threeagent.impl.component.render_component = (function threeagent$impl$component$render_component(key,config){
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(threeagent.alpha.component._STAR_registry_STAR_,key);
if(cljs.core.truth_(renderer)){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(config) : renderer.call(null,config));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Missing renderer for object type",key], 0));
}
});
threeagent.impl.component.__GT_material = (function threeagent$impl$component$__GT_material(config){
if((config instanceof module$node_modules$three$build$three.Material)){
return config;
} else {
return threeagent.impl.threejs.mesh_phong_material(config);
}
});
threeagent.impl.component.to_mesh = (function threeagent$impl$component$to_mesh(geo,material_config){
var mat = threeagent.impl.component.__GT_material(material_config);
return threeagent.impl.threejs.mesh(geo,mat);
});
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"object","object",1474613949),(function (c){
return threeagent.impl.threejs.object();
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"group","group",582596132),(function (c){
return threeagent.impl.threejs.group();
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"camera","camera",-1190348585),(function (p__26152){
var map__26153 = p__26152;
var map__26153__$1 = cljs.core.__destructure_map(map__26153);
var fov = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,new cljs.core.Keyword(null,"fov","fov",-12463282));
var aspectRatio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,new cljs.core.Keyword(null,"aspectRatio","aspectRatio",-218867702));
var near = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,new cljs.core.Keyword(null,"near","near",-1077668328));
var far = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26153__$1,new cljs.core.Keyword(null,"far","far",85807546));
return threeagent.impl.threejs.perspective_camera(fov,aspectRatio,near,far);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (p__26154){
var map__26155 = p__26154;
var map__26155__$1 = cljs.core.__destructure_map(map__26155);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"object","object",1474613949));
return object;
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"plane","plane",-223595224),(function (p__26156){
var map__26157 = p__26156;
var map__26157__$1 = cljs.core.__destructure_map(map__26157);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26157__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.PlaneGeometry(width,height,width_segments,height_segments));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"box","box",1530920394),(function (p__26158){
var map__26159 = p__26158;
var map__26159__$1 = cljs.core.__destructure_map(map__26159);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"width","width",-384071477),1.0);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"height","height",1025178622),1.0);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827),(1));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149),(1));
var depth_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26159__$1,new cljs.core.Keyword(null,"depth-segments","depth-segments",1921571151),(1));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26159__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.BoxGeometry(width,height,depth,width_segments,height_segments,depth_segments));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__26160){
var map__26161 = p__26160;
var map__26161__$1 = cljs.core.__destructure_map(map__26161);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827),(8));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149),(6));
var phi_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"phi-start","phi-start",-1129440297),(0));
var phi_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"phi-length","phi-length",-99998879),threeagent.impl.util.pi_times_2);
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763),(0));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368),threeagent.impl.util.pi);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.SphereGeometry(radius,width_segments,height_segments,phi_start,phi_length,theta_start,theta_length));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__26162){
var map__26163 = p__26162;
var map__26163__$1 = cljs.core.__destructure_map(map__26163);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"height","height",1025178622),1.0);
var radius_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),1.0);
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149),(1));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763),(0));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368),threeagent.impl.util.pi_times_2);
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103),(8));
var radius_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26163__$1,new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),1.0);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.CylinderGeometry(radius_top,radius_bottom,height,radial_segments,height_segments,open_ended_QMARK_,theta_start,theta_length));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__26164){
var map__26165 = p__26164;
var map__26165__$1 = cljs.core.__destructure_map(map__26165);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26165__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26165__$1,new cljs.core.Keyword(null,"segments","segments",1937535949),(8));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26165__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763),(0));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26165__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368),threeagent.impl.util.pi_times_2);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.CircleGeometry(radius,segments,theta_start,theta_length));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"cone","cone",-1644572970),(function (p__26166){
var map__26167 = p__26166;
var map__26167__$1 = cljs.core.__destructure_map(map__26167);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"height","height",1025178622),1.0);
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103),(8));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149),(1));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763),(0));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368),threeagent.impl.util.pi_times_2);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.ConeGeometry(radius,height,radial_segments,height_segments,open_ended_QMARK_,theta_start,theta_length));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),(function (p__26168){
var map__26169 = p__26168;
var map__26169__$1 = cljs.core.__destructure_map(map__26169);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26169__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26169__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025),(0));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26169__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.DodecahedronGeometry(radius,detail));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),(function (p__26170){
var map__26171 = p__26170;
var map__26171__$1 = cljs.core.__destructure_map(map__26171);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26171__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26171__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025),(0));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26171__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.IcosahedronGeometry(radius,detail));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"octahedron","octahedron",245466475),(function (p__26172){
var map__26173 = p__26172;
var map__26173__$1 = cljs.core.__destructure_map(map__26173);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26173__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26173__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025),(0));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26173__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.OctahedronGeometry(radius,detail));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"ring","ring",-974350330),(function (p__26174){
var map__26175 = p__26174;
var map__26175__$1 = cljs.core.__destructure_map(map__26175);
var inner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"inner-radius","inner-radius",-681823510),0.5);
var outer_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"outer-radius","outer-radius",1715267468),1.0);
var theta_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"theta-segments","theta-segments",-1631011703),(8));
var phi_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"phi-segments","phi-segments",1443058713),(8));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763),(0));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26175__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368),threeagent.impl.util.pi_times_2);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.RingGeometry(inner_radius,outer_radius,theta_segments,phi_segments,theta_start,theta_length));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),(function (p__26176){
var map__26177 = p__26176;
var map__26177__$1 = cljs.core.__destructure_map(map__26177);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26177__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26177__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025),(0));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26177__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.TetrahedronGeometry(radius,detail));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"torus","torus",790837427),(function (p__26178){
var map__26179 = p__26178;
var map__26179__$1 = cljs.core.__destructure_map(map__26179);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"tube","tube",-67082178),0.4);
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103),(8));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483),(6));
var arc = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"arc","arc",252411045),threeagent.impl.util.pi_times_2);
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.TorusGeometry(radius,tube,radial_segments,tubular_segments,arc));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"torus-knot","torus-knot",466642313),(function (p__26180){
var map__26181 = p__26180;
var map__26181__$1 = cljs.core.__destructure_map(map__26181);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"tube","tube",-67082178),0.4);
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483),(64));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103),(8));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"p","p",151049309),(2));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26181__$1,new cljs.core.Keyword(null,"q","q",689001697),(3));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26181__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.TorusKnotGeometry(radius,tube,tubular_segments,radial_segments,p,q));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"shape","shape",1190694006),(function (p__26182){
var map__26183 = p__26182;
var map__26183__$1 = cljs.core.__destructure_map(map__26183);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = (new module$node_modules$three$build$three.ShapeGeometry(shape));
return threeagent.impl.component.to_mesh(geo,material);
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),(function (p__26184){
var map__26185 = p__26184;
var map__26185__$1 = cljs.core.__destructure_map(map__26185);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26185__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26185__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.0);
return (new module$node_modules$three$build$three.AmbientLight(color,intensity));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"point-light","point-light",669926690),(function (p__26186){
var map__26187 = p__26186;
var map__26187__$1 = cljs.core.__destructure_map(map__26187);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26187__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26187__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.0);
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26187__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894),(0));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26187__$1,new cljs.core.Keyword(null,"decay","decay",1036712184),1.0);
return (new module$node_modules$three$build$three.PointLight(color,intensity,distance,decay));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"hemisphere-light","hemisphere-light",-1569111131),(function (p__26188){
var map__26189 = p__26188;
var map__26189__$1 = cljs.core.__destructure_map(map__26189);
var sky_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26189__$1,new cljs.core.Keyword(null,"sky-color","sky-color",1803548607),(16777215));
var ground_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26189__$1,new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26189__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1));
return (new module$node_modules$three$build$three.HemisphereLight(sky_color,ground_color,intensity));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"directional-light","directional-light",1424371138),(function (p__26190){
var map__26191 = p__26190;
var map__26191__$1 = cljs.core.__destructure_map(map__26191);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26191__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26191__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.0);
return (new module$node_modules$three$build$three.DirectionalLight(color,intensity));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"rect-area-light","rect-area-light",-1419656976),(function (p__26192){
var map__26193 = p__26192;
var map__26193__$1 = cljs.core.__destructure_map(map__26193);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26193__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26193__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.0);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26193__$1,new cljs.core.Keyword(null,"width","width",-384071477),10.0);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26193__$1,new cljs.core.Keyword(null,"height","height",1025178622),10.0);
return (new module$node_modules$three$build$three.RectAreaLight(color,intensity,width,height));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"spot-light","spot-light",2068323183),(function (p__26194){
var map__26195 = p__26194;
var map__26195__$1 = cljs.core.__destructure_map(map__26195);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16777215));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.0);
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894),(0));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"angle","angle",1622094254),threeagent.impl.util.pi_over_2);
var penumbra = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"penumbra","penumbra",2008278688),0.0);
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26195__$1,new cljs.core.Keyword(null,"decay","decay",1036712184),1.0);
return (new module$node_modules$three$build$three.SpotLight(color,intensity,distance,angle,penumbra,decay));
}));
threeagent.alpha.component.register_component_renderer_BANG_(new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__26196){
var map__26197 = p__26196;
var map__26197__$1 = cljs.core.__destructure_map(map__26197);
var cfg = map__26197__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26197__$1,new cljs.core.Keyword(null,"material","material",460118677));
var geo = threeagent.impl.threejs.text_geometry(text,cfg);
return threeagent.impl.component.to_mesh(geo,material);
}));

//# sourceMappingURL=threeagent.impl.component.js.map
