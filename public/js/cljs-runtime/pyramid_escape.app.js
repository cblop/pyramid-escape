goog.provide('pyramid_escape.app');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.state !== 'undefined')){
} else {
pyramid_escape.app.state = (function (){var G__26124 = cljs.core.PersistentArrayMap.EMPTY;
return (threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1(G__26124) : threeagent.alpha.core.atom.call(null,G__26124));
})();
}
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.music !== 'undefined')){
} else {
pyramid_escape.app.music = (new module$node_modules$howler$dist$howler.Howl(({"src": ["music/wahmbulance-full.mp3"], "loop": true})));
}
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app._STAR_canvas_element_STAR_ !== 'undefined')){
} else {
pyramid_escape.app._STAR_canvas_element_STAR_ = null;
}
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.mouse_position !== 'undefined')){
} else {
pyramid_escape.app.mouse_position = pyramid_escape.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.wall_color !== 'undefined')){
} else {
pyramid_escape.app.wall_color = (13408512);
}
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.wall_material !== 'undefined')){
} else {
pyramid_escape.app.wall_material = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),pyramid_escape.app.wall_color,new cljs.core.Keyword(null,"normalMap","normalMap",905535508),pyramid_escape.util.threejs.texture("textures/sandstone_blocks_08_nor_2k.jpg"),new cljs.core.Keyword(null,"aoMap","aoMap",461064018),pyramid_escape.util.threejs.texture("textures/sandstone_blocks_08_ao_2k.jpg"),new cljs.core.Keyword(null,"map","map",1371690461),pyramid_escape.util.threejs.texture("textures/sandstone_blocks_08_diff_2k.jpg")], null);
}
pyramid_escape.app.stick_duration = (4);
pyramid_escape.app.show_info_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
pyramid_escape.app.dead_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
pyramid_escape.app.restart_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * remove elem in coll
 */
pyramid_escape.app.vec_remove = (function pyramid_escape$app$vec_remove(pos,coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
pyramid_escape.app.mouse_coords = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doors","doors",-381344314),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,-0.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,-0.85], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,-0.66], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,-0.66], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,-0.76], null)], null)], null),new cljs.core.Keyword(null,"lamps","lamps",2039450394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.35,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null)], null)], null),new cljs.core.Keyword(null,"sticks","sticks",1936911459),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.42,-0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.51,-0.76], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.89], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.89], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.51,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.52,-0.77], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.42,-0.84], null)], null)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.87,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.73,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.68,0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.81,0.53], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.56,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.52,0.53], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.26,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.14,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.1,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.21,0.54], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.16,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.82], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.08,0.53], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.49,0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.38,0.53], null)], null),(5),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.64,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.74,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.79,0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.55], null)], null)], null),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.31,-0.64], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.29,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.41,(-1)], null)], null)], null)], null);
pyramid_escape.app.door_map = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"xx-x","xx-x",713425765),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"----","----",929821777)], null)], null);
pyramid_escape.app.lamp_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-l-","-l-",904411525),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-l-","-l-",904411525),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null)], null));
pyramid_escape.app.stick_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x","--x",-1028573985),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null)], null));
pyramid_escape.app.placement__GT_index = (function pyramid_escape$app$placement__GT_index(type,placement){
var G__26125 = placement;
var G__26125__$1 = (((G__26125 instanceof cljs.core.Keyword))?G__26125.fqn:null);
switch (G__26125__$1) {
case "left":
return (0);

break;
case "middle":
return (1);

break;
case "bottom":
return (2);

break;
case "right":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"door","door",-956406127))){
return (3);
} else {
return (2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26125__$1)].join('')));

}
});
pyramid_escape.app.load_room = (function pyramid_escape$app$load_room(){
var room = new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state));
var door_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.door_map,room));
var lamp_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.lamp_map),room));
var stick_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.stick_map),room));
var doors = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x")){
var G__26126 = i;
switch (G__26126) {
case (0):
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case (1):
return new cljs.core.Keyword(null,"middle","middle",-701029031);

break;
case (2):
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case (3):
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26126)].join('')));

}
} else {
return null;
}
}),door_string)));
var lamps = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var lit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"l");
var unlit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x");
if(((lit_QMARK_) || (unlit_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__26127 = i;
switch (G__26127) {
case (0):
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case (1):
return new cljs.core.Keyword(null,"middle","middle",-701029031);

break;
case (2):
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26127)].join('')));

}
})(),new cljs.core.Keyword(null,"lit?","lit?",923589354),lit_QMARK_], null);
} else {
return null;
}
}),lamp_string)));
var sticks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var lit_QMARK_ = ((v | (0)) > (0));
var burns_left = (v | (0));
var unlit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x");
if(((lit_QMARK_) || (unlit_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__26128 = i;
switch (G__26128) {
case (0):
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case (1):
return new cljs.core.Keyword(null,"middle","middle",-701029031);

break;
case (2):
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26128)].join('')));

}
})(),new cljs.core.Keyword(null,"lit?","lit?",923589354),lit_QMARK_,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),burns_left], null);
} else {
return null;
}
}),stick_string)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"doors","doors",-381344314),doors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lamps","lamps",2039450394),lamps,new cljs.core.Keyword(null,"sticks","sticks",1936911459),sticks], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(pyramid_escape.app.state)], 0));
});
pyramid_escape.app.decrement_burns_left = (function pyramid_escape$app$decrement_burns_left(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),(function (sticks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26129_SHARP_){
var G__26130 = p1__26129_SHARP_;
var G__26130__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__26129_SHARP_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26130,new cljs.core.Keyword(null,"lit?","lit?",923589354),false):G__26130);
if((new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__26129_SHARP_) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26130__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),cljs.core.dec);
} else {
return G__26130__$1;
}
}),sticks));
}));
});
pyramid_escape.app.die_BANG_ = (function pyramid_escape$app$die_BANG_(){
setTimeout((function (){
cljs.core.reset_BANG_(pyramid_escape.app.dead_QMARK_,true);

return pyramid_escape.app.music.fade((1),(0),(2500));
}),(1000));

return setTimeout((function (){
return cljs.core.reset_BANG_(pyramid_escape.app.restart_QMARK_,true);
}),(2500));
});
pyramid_escape.app.change_room = (function pyramid_escape$app$change_room(direction){
var move = (function pyramid_escape$app$change_room_$_move(index,f){
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.door_map,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))))),pyramid_escape.app.placement__GT_index(new cljs.core.Keyword(null,"door","door",-956406127),direction))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.door_map,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(pyramid_escape.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room","room",536484922),index], null),f))):false))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room","room",536484922),index], null),f);

return pyramid_escape.app.load_room();
} else {
return null;
}
});
var G__26131_26471 = direction;
var G__26131_26472__$1 = (((G__26131_26471 instanceof cljs.core.Keyword))?G__26131_26471.fqn:null);
switch (G__26131_26472__$1) {
case "left":
move((1),cljs.core.dec);

break;
case "middle":
move((0),cljs.core.dec);

break;
case "bottom":
move((0),cljs.core.inc);

break;
case "right":
move((1),cljs.core.inc);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26131_26472__$1)].join('')));

}

pyramid_escape.app.decrement_burns_left();

if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lit?","lit?",923589354),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lamps","lamps",2039450394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))], 0))))){
return pyramid_escape.app.die_BANG_();
} else {
return null;
}
});
pyramid_escape.app.walls = (function pyramid_escape$app$walls(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null)], null);
});
pyramid_escape.app.door = (function pyramid_escape$app$door(placement){
var placements = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-5),-11.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-15),-1.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"scale","scale",-230427353)], null)),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"specular","specular",1475677228),(0)], null)], null)], null)], null);
});
pyramid_escape.app.lamp = (function pyramid_escape$app$lamp(p__26132){
var map__26133 = p__26132;
var map__26133__$1 = cljs.core.__destructure_map(map__26133);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var lamp_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null)], null);
var light_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(0),(-1)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(0),(-1)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?"yellow":"brown")], null)], null)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get.cljs$core$IFn$_invoke$arity$2(light_placements,placement)], null)], null):null)], null);
});
pyramid_escape.app.stick = (function pyramid_escape$app$stick(p__26134){
var map__26135 = p__26134;
var map__26135__$1 = cljs.core.__destructure_map(map__26135);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(50),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),(2),(10))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?(function (){var G__26136 = burns_left;
switch (G__26136) {
case (4):
return (16777088);

break;
case (3):
return "yellow";

break;
case (2):
return "orange";

break;
case (1):
return "red";

break;
default:
return "brown";

}
})():"brown")], null)], null)], null)], null);
});
pyramid_escape.app.inventory_item = (function pyramid_escape$app$inventory_item(index,p__26137){
var map__26138 = p__26137;
var map__26138__$1 = cljs.core.__destructure_map(map__26138);
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(8),(-5)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(placements,index),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.0,(0),0.5], null),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"green":(cljs.core.truth_(lit_QMARK_)?(function (){var G__26139 = burns_left;
switch (G__26139) {
case (4):
return (16777088);

break;
case (3):
return "yellow";

break;
case (2):
return "orange";

break;
case (1):
return "red";

break;
default:
return "brown";

}
})():"brown"
))], null)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(burns_left / (2)),new cljs.core.Keyword(null,"distance","distance",-1671893894),(50),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(placements,index),(2),(10))], null)], null):null)], null);
});
pyramid_escape.app.mouse_evt__GT_screen_coords = (function pyramid_escape$app$mouse_evt__GT_screen_coords(evt){
var rect = pyramid_escape.app._STAR_canvas_element_STAR_.getBoundingClientRect();
var x = (evt.clientX - rect.left);
var y = (evt.clientY - rect.top);
var w = rect.width;
var h = rect.height;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((2) * (x / w)) - (1)),((1) + ((2) * (- (y / h))))], null);
});
pyramid_escape.app.selected_stick_index = (function pyramid_escape$app$selected_stick_index(){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(s))){
return i;
} else {
return null;
}
}),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)))));
});
pyramid_escape.app.get_selected_stick = (function pyramid_escape$app$get_selected_stick(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),pyramid_escape.app.selected_stick_index()], null));
});
pyramid_escape.app.get_item = (function pyramid_escape$app$get_item(type,placement){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26140_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26140_SHARP_),placement);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.state),type)));
});
pyramid_escape.app.light_item = (function pyramid_escape$app$light_item(type,placement){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,type,(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26141_SHARP_){
var G__26142 = p1__26141_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placement,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26141_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26142,new cljs.core.Keyword(null,"lit?","lit?",923589354),true);
} else {
return G__26142;
}
}),items);
}));
});
pyramid_escape.app.light_inv_stick = (function pyramid_escape$app$light_inv_stick(index){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615)], null),pyramid_escape.app.stick_duration);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"lit?","lit?",923589354)], null),true);
});
pyramid_escape.app.change_room_stick = (function pyramid_escape$app$change_room_stick(placement,take_QMARK_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["THIS STICK",pyramid_escape.app.get_selected_stick()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(pyramid_escape.app.get_selected_stick()))], 0));

var update_room = (function pyramid_escape$app$change_room_stick_$_update_room(room_kw){
var chars = cljs.core.vec(cljs.core.name(room_kw));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.assoc_in(chars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.placement__GT_index(new cljs.core.Keyword(null,"stick","stick",1958932215),placement)], null),(cljs.core.truth_(take_QMARK_)?"-":cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(pyramid_escape.app.get_selected_stick()))))));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.stick_map,cljs.core.update_in,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),update_room);
});
pyramid_escape.app.take_stick = (function pyramid_escape$app$take_stick(placement){
var my_sticks = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state));
var the_stick = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26143_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26143_SHARP_),placement);
}),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
if(cljs.core.truth_((function (){var and__4149__auto__ = the_stick;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count(my_sticks) < (7));
} else {
return and__4149__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),(function (sticks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26144_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26144_SHARP_),placement);
}),sticks);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),(function (p1__26145_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__26145_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),false,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(the_stick),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(the_stick)], null)], null));
}));

return pyramid_escape.app.change_room_stick(placement,true);
} else {
return null;
}
});
pyramid_escape.app.light_lamp = (function pyramid_escape$app$light_lamp(placement){
var stick_index = pyramid_escape.app.selected_stick_index();
var selected_stick = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),stick_index);
if(cljs.core.truth_(new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(selected_stick))){
pyramid_escape.app.light_item(new cljs.core.Keyword(null,"lamps","lamps",2039450394),placement);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),stick_index,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),false);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(pyramid_escape.app.get_item(new cljs.core.Keyword(null,"lamps","lamps",2039450394),placement)))){
return pyramid_escape.app.light_inv_stick(stick_index);
} else {
return null;
}
}
});
pyramid_escape.app.on_mouse_down = (function pyramid_escape$app$on_mouse_down(evt){
var vec__26149 = pyramid_escape.app.mouse_evt__GT_screen_coords(evt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26149,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26149,(1),null);
(pyramid_escape.app.mouse_position.x = x);

(pyramid_escape.app.mouse_position.y = y);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x:",x.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["y:",y.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))], 0));

var seq__26152 = cljs.core.seq(cljs.core.keys(pyramid_escape.app.mouse_coords));
var chunk__26153 = null;
var count__26154 = (0);
var i__26155 = (0);
while(true){
if((i__26155 < count__26154)){
var key = chunk__26153.cljs$core$IIndexed$_nth$arity$2(null,i__26155);
var seq__26300_26476 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,key)));
var chunk__26301_26477 = null;
var count__26302_26478 = (0);
var i__26303_26479 = (0);
while(true){
if((i__26303_26479 < count__26302_26478)){
var i_key_26480 = chunk__26301_26477.cljs$core$IIndexed$_nth$arity$2(null,i__26303_26479);
var coords_26481 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_26480], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26481)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26481)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26481)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26481)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_26480);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__26338_26482 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__26339_26483 = null;
var count__26340_26484 = (0);
var i__26341_26485 = (0);
while(true){
if((i__26341_26485 < count__26340_26484)){
var vec__26348_26486 = chunk__26339_26483.cljs$core$IIndexed$_nth$arity$2(null,i__26341_26485);
var i_26487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348_26486,(0),null);
var item_26488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348_26486,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26488);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26480);
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26480,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26487,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26480,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26488),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26488)], null)]));
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26348_26486,i_26487,item_26488,coords_26481,i_key_26480,key,vec__26149,x,y))
);
} else {
}


var G__26489 = seq__26338_26482;
var G__26490 = chunk__26339_26483;
var G__26491 = count__26340_26484;
var G__26492 = (i__26341_26485 + (1));
seq__26338_26482 = G__26489;
chunk__26339_26483 = G__26490;
count__26340_26484 = G__26491;
i__26341_26485 = G__26492;
continue;
} else {
var temp__5735__auto___26493 = cljs.core.seq(seq__26338_26482);
if(temp__5735__auto___26493){
var seq__26338_26494__$1 = temp__5735__auto___26493;
if(cljs.core.chunked_seq_QMARK_(seq__26338_26494__$1)){
var c__4591__auto___26495 = cljs.core.chunk_first(seq__26338_26494__$1);
var G__26496 = cljs.core.chunk_rest(seq__26338_26494__$1);
var G__26497 = c__4591__auto___26495;
var G__26498 = cljs.core.count(c__4591__auto___26495);
var G__26499 = (0);
seq__26338_26482 = G__26496;
chunk__26339_26483 = G__26497;
count__26340_26484 = G__26498;
i__26341_26485 = G__26499;
continue;
} else {
var vec__26351_26500 = cljs.core.first(seq__26338_26494__$1);
var i_26501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26351_26500,(0),null);
var item_26502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26351_26500,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26502);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26480);
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26480,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26501,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26480,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26502),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26502)], null)]));
});})(seq__26338_26482,chunk__26339_26483,count__26340_26484,i__26341_26485,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26351_26500,i_26501,item_26502,seq__26338_26494__$1,temp__5735__auto___26493,coords_26481,i_key_26480,key,vec__26149,x,y))
);
} else {
}


var G__26503 = cljs.core.next(seq__26338_26494__$1);
var G__26504 = null;
var G__26505 = (0);
var G__26506 = (0);
seq__26338_26482 = G__26503;
chunk__26339_26483 = G__26504;
count__26340_26484 = G__26505;
i__26341_26485 = G__26506;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_26480);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26481,i_key_26480,key,vec__26149,x,y){
return (function (i,item){
var G__26354 = item;
var G__26354__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26480,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26354,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__26354);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26480,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26354__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__26354__$1;
}
});})(seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26481,i_key_26480,key,vec__26149,x,y))
,items));
});})(seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26481,i_key_26480,key,vec__26149,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_26480);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_26480], 0));
} else {
}


var G__26507 = seq__26300_26476;
var G__26508 = chunk__26301_26477;
var G__26509 = count__26302_26478;
var G__26510 = (i__26303_26479 + (1));
seq__26300_26476 = G__26507;
chunk__26301_26477 = G__26508;
count__26302_26478 = G__26509;
i__26303_26479 = G__26510;
continue;
} else {
var temp__5735__auto___26511 = cljs.core.seq(seq__26300_26476);
if(temp__5735__auto___26511){
var seq__26300_26512__$1 = temp__5735__auto___26511;
if(cljs.core.chunked_seq_QMARK_(seq__26300_26512__$1)){
var c__4591__auto___26513 = cljs.core.chunk_first(seq__26300_26512__$1);
var G__26514 = cljs.core.chunk_rest(seq__26300_26512__$1);
var G__26515 = c__4591__auto___26513;
var G__26516 = cljs.core.count(c__4591__auto___26513);
var G__26517 = (0);
seq__26300_26476 = G__26514;
chunk__26301_26477 = G__26515;
count__26302_26478 = G__26516;
i__26303_26479 = G__26517;
continue;
} else {
var i_key_26518 = cljs.core.first(seq__26300_26512__$1);
var coords_26519 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_26518], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26519)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26519)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26519)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26519)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_26518);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__26355_26520 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__26356_26521 = null;
var count__26357_26522 = (0);
var i__26358_26523 = (0);
while(true){
if((i__26358_26523 < count__26357_26522)){
var vec__26365_26524 = chunk__26356_26521.cljs$core$IIndexed$_nth$arity$2(null,i__26358_26523);
var i_26525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26365_26524,(0),null);
var item_26526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26365_26524,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26526);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26518);
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26518,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26525,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26518,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26526),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26526)], null)]));
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26365_26524,i_26525,item_26526,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
);
} else {
}


var G__26527 = seq__26355_26520;
var G__26528 = chunk__26356_26521;
var G__26529 = count__26357_26522;
var G__26530 = (i__26358_26523 + (1));
seq__26355_26520 = G__26527;
chunk__26356_26521 = G__26528;
count__26357_26522 = G__26529;
i__26358_26523 = G__26530;
continue;
} else {
var temp__5735__auto___26531__$1 = cljs.core.seq(seq__26355_26520);
if(temp__5735__auto___26531__$1){
var seq__26355_26532__$1 = temp__5735__auto___26531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26355_26532__$1)){
var c__4591__auto___26533 = cljs.core.chunk_first(seq__26355_26532__$1);
var G__26534 = cljs.core.chunk_rest(seq__26355_26532__$1);
var G__26535 = c__4591__auto___26533;
var G__26536 = cljs.core.count(c__4591__auto___26533);
var G__26537 = (0);
seq__26355_26520 = G__26534;
chunk__26356_26521 = G__26535;
count__26357_26522 = G__26536;
i__26358_26523 = G__26537;
continue;
} else {
var vec__26368_26538 = cljs.core.first(seq__26355_26532__$1);
var i_26539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26368_26538,(0),null);
var item_26540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26368_26538,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26540);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26518);
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26518,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26539,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26518,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26540),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26540)], null)]));
});})(seq__26355_26520,chunk__26356_26521,count__26357_26522,i__26358_26523,seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,vec__26368_26538,i_26539,item_26540,seq__26355_26532__$1,temp__5735__auto___26531__$1,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
);
} else {
}


var G__26541 = cljs.core.next(seq__26355_26532__$1);
var G__26542 = null;
var G__26543 = (0);
var G__26544 = (0);
seq__26355_26520 = G__26541;
chunk__26356_26521 = G__26542;
count__26357_26522 = G__26543;
i__26358_26523 = G__26544;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_26518);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y){
return (function (i,item){
var G__26371 = item;
var G__26371__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26518,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26371,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__26371);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26518,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26371__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__26371__$1;
}
});})(seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
,items));
});})(seq__26300_26476,chunk__26301_26477,count__26302_26478,i__26303_26479,seq__26152,chunk__26153,count__26154,i__26155,coords_26519,i_key_26518,seq__26300_26512__$1,temp__5735__auto___26511,key,vec__26149,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_26518);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_26518], 0));
} else {
}


var G__26545 = cljs.core.next(seq__26300_26512__$1);
var G__26546 = null;
var G__26547 = (0);
var G__26548 = (0);
seq__26300_26476 = G__26545;
chunk__26301_26477 = G__26546;
count__26302_26478 = G__26547;
i__26303_26479 = G__26548;
continue;
}
} else {
}
}
break;
}


var G__26549 = seq__26152;
var G__26550 = chunk__26153;
var G__26551 = count__26154;
var G__26552 = (i__26155 + (1));
seq__26152 = G__26549;
chunk__26153 = G__26550;
count__26154 = G__26551;
i__26155 = G__26552;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26152);
if(temp__5735__auto__){
var seq__26152__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26152__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__26152__$1);
var G__26553 = cljs.core.chunk_rest(seq__26152__$1);
var G__26554 = c__4591__auto__;
var G__26555 = cljs.core.count(c__4591__auto__);
var G__26556 = (0);
seq__26152 = G__26553;
chunk__26153 = G__26554;
count__26154 = G__26555;
i__26155 = G__26556;
continue;
} else {
var key = cljs.core.first(seq__26152__$1);
var seq__26372_26557 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,key)));
var chunk__26373_26558 = null;
var count__26374_26559 = (0);
var i__26375_26560 = (0);
while(true){
if((i__26375_26560 < count__26374_26559)){
var i_key_26561 = chunk__26373_26558.cljs$core$IIndexed$_nth$arity$2(null,i__26375_26560);
var coords_26562 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_26561], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26562)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26562)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26562)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26562)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_26561);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__26410_26563 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__26411_26564 = null;
var count__26412_26565 = (0);
var i__26413_26566 = (0);
while(true){
if((i__26413_26566 < count__26412_26565)){
var vec__26420_26567 = chunk__26411_26564.cljs$core$IIndexed$_nth$arity$2(null,i__26413_26566);
var i_26568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420_26567,(0),null);
var item_26569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420_26567,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26569);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26561);
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26561,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26568,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26561,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26569),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26569)], null)]));
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26420_26567,i_26568,item_26569,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
}


var G__26570 = seq__26410_26563;
var G__26571 = chunk__26411_26564;
var G__26572 = count__26412_26565;
var G__26573 = (i__26413_26566 + (1));
seq__26410_26563 = G__26570;
chunk__26411_26564 = G__26571;
count__26412_26565 = G__26572;
i__26413_26566 = G__26573;
continue;
} else {
var temp__5735__auto___26574__$1 = cljs.core.seq(seq__26410_26563);
if(temp__5735__auto___26574__$1){
var seq__26410_26575__$1 = temp__5735__auto___26574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26410_26575__$1)){
var c__4591__auto___26576 = cljs.core.chunk_first(seq__26410_26575__$1);
var G__26577 = cljs.core.chunk_rest(seq__26410_26575__$1);
var G__26578 = c__4591__auto___26576;
var G__26579 = cljs.core.count(c__4591__auto___26576);
var G__26580 = (0);
seq__26410_26563 = G__26577;
chunk__26411_26564 = G__26578;
count__26412_26565 = G__26579;
i__26413_26566 = G__26580;
continue;
} else {
var vec__26423_26581 = cljs.core.first(seq__26410_26575__$1);
var i_26582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26423_26581,(0),null);
var item_26583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26423_26581,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26583);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26561);
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26561,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26582,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26561,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26583),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26583)], null)]));
});})(seq__26410_26563,chunk__26411_26564,count__26412_26565,i__26413_26566,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26423_26581,i_26582,item_26583,seq__26410_26575__$1,temp__5735__auto___26574__$1,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
}


var G__26584 = cljs.core.next(seq__26410_26575__$1);
var G__26585 = null;
var G__26586 = (0);
var G__26587 = (0);
seq__26410_26563 = G__26584;
chunk__26411_26564 = G__26585;
count__26412_26565 = G__26586;
i__26413_26566 = G__26587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_26561);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (i,item){
var G__26426 = item;
var G__26426__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26561,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26426,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__26426);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26561,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26426__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__26426__$1;
}
});})(seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,items));
});})(seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26562,i_key_26561,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_26561);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_26561], 0));
} else {
}


var G__26588 = seq__26372_26557;
var G__26589 = chunk__26373_26558;
var G__26590 = count__26374_26559;
var G__26591 = (i__26375_26560 + (1));
seq__26372_26557 = G__26588;
chunk__26373_26558 = G__26589;
count__26374_26559 = G__26590;
i__26375_26560 = G__26591;
continue;
} else {
var temp__5735__auto___26592__$1 = cljs.core.seq(seq__26372_26557);
if(temp__5735__auto___26592__$1){
var seq__26372_26593__$1 = temp__5735__auto___26592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26372_26593__$1)){
var c__4591__auto___26594 = cljs.core.chunk_first(seq__26372_26593__$1);
var G__26595 = cljs.core.chunk_rest(seq__26372_26593__$1);
var G__26596 = c__4591__auto___26594;
var G__26597 = cljs.core.count(c__4591__auto___26594);
var G__26598 = (0);
seq__26372_26557 = G__26595;
chunk__26373_26558 = G__26596;
count__26374_26559 = G__26597;
i__26375_26560 = G__26598;
continue;
} else {
var i_key_26599 = cljs.core.first(seq__26372_26593__$1);
var coords_26600 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_26599], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26600)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_26600)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26600)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_26600)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_26599);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__26427_26601 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__26428_26602 = null;
var count__26429_26603 = (0);
var i__26430_26604 = (0);
while(true){
if((i__26430_26604 < count__26429_26603)){
var vec__26437_26605 = chunk__26428_26602.cljs$core$IIndexed$_nth$arity$2(null,i__26430_26604);
var i_26606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26437_26605,(0),null);
var item_26607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26437_26605,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26607);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26599);
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26599,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26606,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26599,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26607),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26607)], null)]));
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26437_26605,i_26606,item_26607,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
}


var G__26608 = seq__26427_26601;
var G__26609 = chunk__26428_26602;
var G__26610 = count__26429_26603;
var G__26611 = (i__26430_26604 + (1));
seq__26427_26601 = G__26608;
chunk__26428_26602 = G__26609;
count__26429_26603 = G__26610;
i__26430_26604 = G__26611;
continue;
} else {
var temp__5735__auto___26612__$2 = cljs.core.seq(seq__26427_26601);
if(temp__5735__auto___26612__$2){
var seq__26427_26613__$1 = temp__5735__auto___26612__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26427_26613__$1)){
var c__4591__auto___26614 = cljs.core.chunk_first(seq__26427_26613__$1);
var G__26615 = cljs.core.chunk_rest(seq__26427_26613__$1);
var G__26616 = c__4591__auto___26614;
var G__26617 = cljs.core.count(c__4591__auto___26614);
var G__26618 = (0);
seq__26427_26601 = G__26615;
chunk__26428_26602 = G__26616;
count__26429_26603 = G__26617;
i__26430_26604 = G__26618;
continue;
} else {
var vec__26440_26619 = cljs.core.first(seq__26427_26613__$1);
var i_26620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26440_26619,(0),null);
var item_26621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26440_26619,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_26621);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),i_key_26599);
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,and__4149__auto__,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_26599,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26147_SHARP_){
return pyramid_escape.app.vec_remove(i_26620,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__26147_SHARP_));
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (p1__26148_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__26148_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_26599,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_26621),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_26621)], null)]));
});})(seq__26427_26601,chunk__26428_26602,count__26429_26603,i__26430_26604,seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,vec__26440_26619,i_26620,item_26621,seq__26427_26613__$1,temp__5735__auto___26612__$2,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
}


var G__26622 = cljs.core.next(seq__26427_26613__$1);
var G__26623 = null;
var G__26624 = (0);
var G__26625 = (0);
seq__26427_26601 = G__26622;
chunk__26428_26602 = G__26623;
count__26429_26603 = G__26624;
i__26430_26604 = G__26625;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_26599);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y){
return (function (i,item){
var G__26443 = item;
var G__26443__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26599,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26443,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__26443);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_26599,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26443__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__26443__$1;
}
});})(seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
,items));
});})(seq__26372_26557,chunk__26373_26558,count__26374_26559,i__26375_26560,seq__26152,chunk__26153,count__26154,i__26155,coords_26600,i_key_26599,seq__26372_26593__$1,temp__5735__auto___26592__$1,key,seq__26152__$1,temp__5735__auto__,vec__26149,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_26599);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_26599], 0));
} else {
}


var G__26626 = cljs.core.next(seq__26372_26593__$1);
var G__26627 = null;
var G__26628 = (0);
var G__26629 = (0);
seq__26372_26557 = G__26626;
chunk__26373_26558 = G__26627;
count__26374_26559 = G__26628;
i__26375_26560 = G__26629;
continue;
}
} else {
}
}
break;
}


var G__26630 = cljs.core.next(seq__26152__$1);
var G__26631 = null;
var G__26632 = (0);
var G__26633 = (0);
seq__26152 = G__26630;
chunk__26153 = G__26631;
count__26154 = G__26632;
i__26155 = G__26633;
continue;
}
} else {
return null;
}
}
break;
}
});
pyramid_escape.app.render_doors = (function pyramid_escape$app$render_doors(){
var iter__4564__auto__ = (function pyramid_escape$app$render_doors_$_iter__26444(s__26445){
return (new cljs.core.LazySeq(null,(function (){
var s__26445__$1 = s__26445;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26445__$1);
if(temp__5735__auto__){
var s__26445__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26445__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__26445__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__26447 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__26446 = (0);
while(true){
if((i__26446 < size__4563__auto__)){
var d = cljs.core._nth(c__4562__auto__,i__26446);
cljs.core.chunk_append(b__26447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.door,d], null));

var G__26634 = (i__26446 + (1));
i__26446 = G__26634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26447),pyramid_escape$app$render_doors_$_iter__26444(cljs.core.chunk_rest(s__26445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26447),null);
}
} else {
var d = cljs.core.first(s__26445__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.door,d], null),pyramid_escape$app$render_doors_$_iter__26444(cljs.core.rest(s__26445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"doors","doors",-381344314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)));
});
pyramid_escape.app.render_lamps = (function pyramid_escape$app$render_lamps(){
var iter__4564__auto__ = (function pyramid_escape$app$render_lamps_$_iter__26448(s__26449){
return (new cljs.core.LazySeq(null,(function (){
var s__26449__$1 = s__26449;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26449__$1);
if(temp__5735__auto__){
var s__26449__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26449__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__26449__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__26451 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__26450 = (0);
while(true){
if((i__26450 < size__4563__auto__)){
var l = cljs.core._nth(c__4562__auto__,i__26450);
cljs.core.chunk_append(b__26451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.lamp,l], null));

var G__26635 = (i__26450 + (1));
i__26450 = G__26635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26451),pyramid_escape$app$render_lamps_$_iter__26448(cljs.core.chunk_rest(s__26449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26451),null);
}
} else {
var l = cljs.core.first(s__26449__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.lamp,l], null),pyramid_escape$app$render_lamps_$_iter__26448(cljs.core.rest(s__26449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"lamps","lamps",2039450394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)));
});
pyramid_escape.app.render_sticks = (function pyramid_escape$app$render_sticks(){
var iter__4564__auto__ = (function pyramid_escape$app$render_sticks_$_iter__26452(s__26453){
return (new cljs.core.LazySeq(null,(function (){
var s__26453__$1 = s__26453;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26453__$1);
if(temp__5735__auto__){
var s__26453__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26453__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__26453__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__26455 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__26454 = (0);
while(true){
if((i__26454 < size__4563__auto__)){
var s = cljs.core._nth(c__4562__auto__,i__26454);
cljs.core.chunk_append(b__26455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.stick,s], null));

var G__26636 = (i__26454 + (1));
i__26454 = G__26636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26455),pyramid_escape$app$render_sticks_$_iter__26452(cljs.core.chunk_rest(s__26453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26455),null);
}
} else {
var s = cljs.core.first(s__26453__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.stick,s], null),pyramid_escape$app$render_sticks_$_iter__26452(cljs.core.rest(s__26453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)));
});
pyramid_escape.app.render_inventory = (function pyramid_escape$app$render_inventory(){
var iter__4564__auto__ = (function pyramid_escape$app$render_inventory_$_iter__26456(s__26457){
return (new cljs.core.LazySeq(null,(function (){
var s__26457__$1 = s__26457;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26457__$1);
if(temp__5735__auto__){
var s__26457__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26457__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__26457__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__26459 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__26458 = (0);
while(true){
if((i__26458 < size__4563__auto__)){
var vec__26460 = cljs.core._nth(c__4562__auto__,i__26458);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460,(1),null);
cljs.core.chunk_append(b__26459,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.inventory_item,index,item], null));

var G__26637 = (i__26458 + (1));
i__26458 = G__26637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),pyramid_escape$app$render_inventory_$_iter__26456(cljs.core.chunk_rest(s__26457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),null);
}
} else {
var vec__26463 = cljs.core.first(s__26457__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26463,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26463,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.inventory_item,index,item], null),pyramid_escape$app$render_inventory_$_iter__26456(cljs.core.rest(s__26457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
});
pyramid_escape.app.root = (function pyramid_escape$app$root(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.walls], null),pyramid_escape.app.render_doors(),pyramid_escape.app.render_lamps(),pyramid_escape.app.render_sticks(),pyramid_escape.app.render_inventory()], null);
});
pyramid_escape.app.load_scene_BANG_ = (function pyramid_escape$app$load_scene_BANG_(){
var scene_context = threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.root], null),document.getElementById("root"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"room","room",536484922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY], 0));

pyramid_escape.app.load_room();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"scene-context","scene-context",-506542150),scene_context);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"camera","camera",-1190348585),scene_context.camera);
});
pyramid_escape.app.ui_root = (function pyramid_escape$app$ui_root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.show_info_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#explanation","div#explanation",-894450615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(pyramid_escape.app.show_info_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You find yourself underneath an ancient Egyptian pyramid."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Using the glowing rods, find your way out through the labyrinth."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Recharge them using the lamps, and leave them on the floor when needed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good luck!"], null)], null):null),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.dead_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#message","div#message",1972424695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You have died"], null),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.restart_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),pyramid_escape.app.init], null),"Click here to restart"], null):null)], null):null)], null);
});
pyramid_escape.app.init = (function pyramid_escape$app$init(){
(pyramid_escape.app._STAR_canvas_element_STAR_ = document.getElementById("root"));

threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.root], null),document.getElementById("root"));

var G__26466_26638 = document.getElementById("root");
G__26466_26638.addEventListener("mousedown",pyramid_escape.app.on_mouse_down,false);


reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.ui_root], null),document.getElementById("ui-root"));

pyramid_escape.app.music.play();

cljs.core.reset_BANG_(pyramid_escape.app.state,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(pyramid_escape.app.show_info_QMARK_,true);

cljs.core.reset_BANG_(pyramid_escape.app.dead_QMARK_,false);

cljs.core.reset_BANG_(pyramid_escape.app.restart_QMARK_,false);

return pyramid_escape.app.load_scene_BANG_();
});
pyramid_escape.app.reload = (function pyramid_escape$app$reload(){
threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.root], null),document.getElementById("root"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.ui_root], null),document.getElementById("ui-root"));
});

//# sourceMappingURL=pyramid_escape.app.js.map
