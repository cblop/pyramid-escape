goog.provide('ouroboros.app');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.state !== 'undefined')){
} else {
ouroboros.app.state = (function (){var G__29197 = cljs.core.PersistentArrayMap.EMPTY;
return (threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1(G__29197) : threeagent.alpha.core.atom.call(null,G__29197));
})();
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.music !== 'undefined')){
} else {
ouroboros.app.music = (new module$node_modules$howler$dist$howler.Howl(({"src": ["music/wahmbulance-full.mp3"], "loop": true})));
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app._STAR_canvas_element_STAR_ !== 'undefined')){
} else {
ouroboros.app._STAR_canvas_element_STAR_ = null;
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.mouse_position !== 'undefined')){
} else {
ouroboros.app.mouse_position = ouroboros.util.threejs.vec2.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.wall_color !== 'undefined')){
} else {
ouroboros.app.wall_color = (13408512);
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.wall_material !== 'undefined')){
} else {
ouroboros.app.wall_material = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),ouroboros.app.wall_color,new cljs.core.Keyword(null,"normalMap","normalMap",905535508),ouroboros.util.threejs.texture("textures/sandstone_blocks_08_nor_2k.jpg"),new cljs.core.Keyword(null,"aoMap","aoMap",461064018),ouroboros.util.threejs.texture("textures/sandstone_blocks_08_ao_2k.jpg"),new cljs.core.Keyword(null,"map","map",1371690461),ouroboros.util.threejs.texture("textures/sandstone_blocks_08_diff_2k.jpg")], null);
}
ouroboros.app.stick_duration = (4);
ouroboros.app.show_info_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
ouroboros.app.dead_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
ouroboros.app.restart_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * remove elem in coll
 */
ouroboros.app.vec_remove = (function ouroboros$app$vec_remove(pos,coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
ouroboros.app.mouse_coords = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doors","doors",-381344314),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,-0.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,-0.85], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,-0.66], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,-0.66], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,-0.76], null)], null)], null),new cljs.core.Keyword(null,"lamps","lamps",2039450394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.35,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null)], null)], null),new cljs.core.Keyword(null,"sticks","sticks",1936911459),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.42,-0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.51,-0.76], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.89], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.89], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.51,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.52,-0.77], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.42,-0.84], null)], null)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.87,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.73,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.68,0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.81,0.53], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.56,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.52,0.53], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.26,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.14,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.1,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.21,0.54], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.16,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.82], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.08,0.53], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.49,0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.38,0.53], null)], null),(5),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.64,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.74,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.79,0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.55], null)], null)], null),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.31,-0.64], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.29,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.41,(-1)], null)], null)], null)], null);
ouroboros.app.door_map = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"----","----",929821777)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"xx-x","xx-x",713425765),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"----","----",929821777)], null)], null);
ouroboros.app.lamp_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-l-","-l-",904411525),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-l-","-l-",904411525),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null)], null));
ouroboros.app.stick_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x","--x",-1028573985),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null)], null));
ouroboros.app.placement__GT_index = (function ouroboros$app$placement__GT_index(type,placement){
var G__29198 = placement;
var G__29198__$1 = (((G__29198 instanceof cljs.core.Keyword))?G__29198.fqn:null);
switch (G__29198__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29198__$1)].join('')));

}
});
ouroboros.app.load_room = (function ouroboros$app$load_room(){
var room = new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state));
var door_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.door_map,room));
var lamp_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ouroboros.app.lamp_map),room));
var stick_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ouroboros.app.stick_map),room));
var doors = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x")){
var G__29199 = i;
switch (G__29199) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29199)].join('')));

}
} else {
return null;
}
}),door_string)));
var lamps = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var lit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"l");
var unlit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x");
if(((lit_QMARK_) || (unlit_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__29200 = i;
switch (G__29200) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29200)].join('')));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__29201 = i;
switch (G__29201) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29201)].join('')));

}
})(),new cljs.core.Keyword(null,"lit?","lit?",923589354),lit_QMARK_,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),burns_left], null);
} else {
return null;
}
}),stick_string)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ouroboros.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"doors","doors",-381344314),doors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lamps","lamps",2039450394),lamps,new cljs.core.Keyword(null,"sticks","sticks",1936911459),sticks], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(ouroboros.app.state)], 0));
});
ouroboros.app.decrement_burns_left = (function ouroboros$app$decrement_burns_left(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),(function (sticks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29202_SHARP_){
var G__29203 = p1__29202_SHARP_;
var G__29203__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29203,new cljs.core.Keyword(null,"lit?","lit?",923589354),false):G__29203);
if((new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29203__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),cljs.core.dec);
} else {
return G__29203__$1;
}
}),sticks));
}));
});
ouroboros.app.die_BANG_ = (function ouroboros$app$die_BANG_(){
setTimeout((function (){
cljs.core.reset_BANG_(ouroboros.app.dead_QMARK_,true);

return ouroboros.app.music.fade((1),(0),(2500));
}),(1000));

return setTimeout((function (){
return cljs.core.reset_BANG_(ouroboros.app.restart_QMARK_,true);
}),(2500));
});
ouroboros.app.change_room = (function ouroboros$app$change_room(direction){
var move = (function ouroboros$app$change_room_$_move(index,f){
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.door_map,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))))),ouroboros.app.placement__GT_index(new cljs.core.Keyword(null,"door","door",-956406127),direction))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.door_map,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(ouroboros.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room","room",536484922),index], null),f))):false))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room","room",536484922),index], null),f);

return ouroboros.app.load_room();
} else {
return null;
}
});
var G__29204_29544 = direction;
var G__29204_29545__$1 = (((G__29204_29544 instanceof cljs.core.Keyword))?G__29204_29544.fqn:null);
switch (G__29204_29545__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29204_29545__$1)].join('')));

}

ouroboros.app.decrement_burns_left();

if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lit?","lit?",923589354),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lamps","lamps",2039450394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))], 0))))){
return ouroboros.app.die_BANG_();
} else {
return null;
}
});
ouroboros.app.walls = (function ouroboros$app$walls(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),ouroboros.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),ouroboros.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),ouroboros.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),ouroboros.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),ouroboros.app.wall_material], null)], null)], null);
});
ouroboros.app.door = (function ouroboros$app$door(placement){
var placements = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-5),-11.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-15),-1.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"scale","scale",-230427353)], null)),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"specular","specular",1475677228),(0)], null)], null)], null)], null);
});
ouroboros.app.lamp = (function ouroboros$app$lamp(p__29205){
var map__29206 = p__29205;
var map__29206__$1 = cljs.core.__destructure_map(map__29206);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29206__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29206__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var lamp_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null)], null);
var light_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(0),(-1)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(0),(-1)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?"yellow":"brown")], null)], null)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get.cljs$core$IFn$_invoke$arity$2(light_placements,placement)], null)], null):null)], null);
});
ouroboros.app.stick = (function ouroboros$app$stick(p__29207){
var map__29208 = p__29207;
var map__29208__$1 = cljs.core.__destructure_map(map__29208);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29208__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(50),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),(2),(10))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?(function (){var G__29209 = burns_left;
switch (G__29209) {
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
ouroboros.app.inventory_item = (function ouroboros$app$inventory_item(index,p__29210){
var map__29211 = p__29210;
var map__29211__$1 = cljs.core.__destructure_map(map__29211);
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(8),(-5)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(placements,index),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.0,(0),0.5], null),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"green":(cljs.core.truth_(lit_QMARK_)?(function (){var G__29212 = burns_left;
switch (G__29212) {
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
ouroboros.app.mouse_evt__GT_screen_coords = (function ouroboros$app$mouse_evt__GT_screen_coords(evt){
var rect = ouroboros.app._STAR_canvas_element_STAR_.getBoundingClientRect();
var x = (evt.clientX - rect.left);
var y = (evt.clientY - rect.top);
var w = rect.width;
var h = rect.height;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((2) * (x / w)) - (1)),((1) + ((2) * (- (y / h))))], null);
});
ouroboros.app.selected_stick_index = (function ouroboros$app$selected_stick_index(){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(s))){
return i;
} else {
return null;
}
}),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)))));
});
ouroboros.app.get_selected_stick = (function ouroboros$app$get_selected_stick(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ouroboros.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),ouroboros.app.selected_stick_index()], null));
});
ouroboros.app.get_item = (function ouroboros$app$get_item(type,placement){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29213_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29213_SHARP_),placement);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ouroboros.app.state),type)));
});
ouroboros.app.light_item = (function ouroboros$app$light_item(type,placement){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,type,(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29214_SHARP_){
var G__29215 = p1__29214_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placement,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29214_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29215,new cljs.core.Keyword(null,"lit?","lit?",923589354),true);
} else {
return G__29215;
}
}),items);
}));
});
ouroboros.app.light_inv_stick = (function ouroboros$app$light_inv_stick(index){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615)], null),ouroboros.app.stick_duration);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),index,new cljs.core.Keyword(null,"lit?","lit?",923589354)], null),true);
});
ouroboros.app.change_room_stick = (function ouroboros$app$change_room_stick(placement,take_QMARK_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["THIS STICK",ouroboros.app.get_selected_stick()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(ouroboros.app.get_selected_stick()))], 0));

var update_room = (function ouroboros$app$change_room_stick_$_update_room(room_kw){
var chars = cljs.core.vec(cljs.core.name(room_kw));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.assoc_in(chars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.placement__GT_index(new cljs.core.Keyword(null,"stick","stick",1958932215),placement)], null),(cljs.core.truth_(take_QMARK_)?"-":cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(ouroboros.app.get_selected_stick()))))));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.stick_map,cljs.core.update_in,new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)),update_room);
});
ouroboros.app.take_stick = (function ouroboros$app$take_stick(placement){
var my_sticks = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state));
var the_stick = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29216_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29216_SHARP_),placement);
}),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
if(cljs.core.truth_((function (){var and__4149__auto__ = the_stick;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count(my_sticks) < (7));
} else {
return and__4149__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),(function (sticks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29217_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29217_SHARP_),placement);
}),sticks);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),(function (p1__29218_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__29218_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),false,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(the_stick),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(the_stick)], null)], null));
}));

return ouroboros.app.change_room_stick(placement,true);
} else {
return null;
}
});
ouroboros.app.light_lamp = (function ouroboros$app$light_lamp(placement){
var stick_index = ouroboros.app.selected_stick_index();
var selected_stick = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)),stick_index);
if(cljs.core.truth_(new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(selected_stick))){
ouroboros.app.light_item(new cljs.core.Keyword(null,"lamps","lamps",2039450394),placement);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inventory","inventory",860201871),stick_index,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),false);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(ouroboros.app.get_item(new cljs.core.Keyword(null,"lamps","lamps",2039450394),placement)))){
return ouroboros.app.light_inv_stick(stick_index);
} else {
return null;
}
}
});
ouroboros.app.on_mouse_down = (function ouroboros$app$on_mouse_down(evt){
var vec__29222 = ouroboros.app.mouse_evt__GT_screen_coords(evt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29222,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29222,(1),null);
(ouroboros.app.mouse_position.x = x);

(ouroboros.app.mouse_position.y = y);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x:",x.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["y:",y.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))], 0));

var seq__29225 = cljs.core.seq(cljs.core.keys(ouroboros.app.mouse_coords));
var chunk__29226 = null;
var count__29227 = (0);
var i__29228 = (0);
while(true){
if((i__29228 < count__29227)){
var key = chunk__29226.cljs$core$IIndexed$_nth$arity$2(null,i__29228);
var seq__29373_29549 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,key)));
var chunk__29374_29550 = null;
var count__29375_29551 = (0);
var i__29376_29552 = (0);
while(true){
if((i__29376_29552 < count__29375_29551)){
var i_key_29553 = chunk__29374_29550.cljs$core$IIndexed$_nth$arity$2(null,i__29376_29552);
var coords_29554 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_29553], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29554)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29554)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29554)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29554)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
ouroboros.app.change_room(i_key_29553);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__29411_29555 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
var chunk__29412_29556 = null;
var count__29413_29557 = (0);
var i__29414_29558 = (0);
while(true){
if((i__29414_29558 < count__29413_29557)){
var vec__29421_29559 = chunk__29412_29556.cljs$core$IIndexed$_nth$arity$2(null,i__29414_29558);
var i_29560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421_29559,(0),null);
var item_29561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421_29559,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29561);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29553);
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29553,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29560,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29553,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29561),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29561)], null)]));
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29421_29559,i_29560,item_29561,coords_29554,i_key_29553,key,vec__29222,x,y))
);
} else {
}


var G__29562 = seq__29411_29555;
var G__29563 = chunk__29412_29556;
var G__29564 = count__29413_29557;
var G__29565 = (i__29414_29558 + (1));
seq__29411_29555 = G__29562;
chunk__29412_29556 = G__29563;
count__29413_29557 = G__29564;
i__29414_29558 = G__29565;
continue;
} else {
var temp__5735__auto___29566 = cljs.core.seq(seq__29411_29555);
if(temp__5735__auto___29566){
var seq__29411_29567__$1 = temp__5735__auto___29566;
if(cljs.core.chunked_seq_QMARK_(seq__29411_29567__$1)){
var c__4591__auto___29568 = cljs.core.chunk_first(seq__29411_29567__$1);
var G__29569 = cljs.core.chunk_rest(seq__29411_29567__$1);
var G__29570 = c__4591__auto___29568;
var G__29571 = cljs.core.count(c__4591__auto___29568);
var G__29572 = (0);
seq__29411_29555 = G__29569;
chunk__29412_29556 = G__29570;
count__29413_29557 = G__29571;
i__29414_29558 = G__29572;
continue;
} else {
var vec__29424_29573 = cljs.core.first(seq__29411_29567__$1);
var i_29574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424_29573,(0),null);
var item_29575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29424_29573,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29575);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29553);
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29553,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29574,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29553,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29575),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29575)], null)]));
});})(seq__29411_29555,chunk__29412_29556,count__29413_29557,i__29414_29558,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29424_29573,i_29574,item_29575,seq__29411_29567__$1,temp__5735__auto___29566,coords_29554,i_key_29553,key,vec__29222,x,y))
);
} else {
}


var G__29576 = cljs.core.next(seq__29411_29567__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__29411_29555 = G__29576;
chunk__29412_29556 = G__29577;
count__29413_29557 = G__29578;
i__29414_29558 = G__29579;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
ouroboros.app.take_stick(i_key_29553);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29554,i_key_29553,key,vec__29222,x,y){
return (function (i,item){
var G__29427 = item;
var G__29427__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29553,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29427,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__29427);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29553,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29427__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__29427__$1;
}
});})(seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29554,i_key_29553,key,vec__29222,x,y))
,items));
});})(seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29554,i_key_29553,key,vec__29222,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
ouroboros.app.light_lamp(i_key_29553);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_29553], 0));
} else {
}


var G__29580 = seq__29373_29549;
var G__29581 = chunk__29374_29550;
var G__29582 = count__29375_29551;
var G__29583 = (i__29376_29552 + (1));
seq__29373_29549 = G__29580;
chunk__29374_29550 = G__29581;
count__29375_29551 = G__29582;
i__29376_29552 = G__29583;
continue;
} else {
var temp__5735__auto___29584 = cljs.core.seq(seq__29373_29549);
if(temp__5735__auto___29584){
var seq__29373_29585__$1 = temp__5735__auto___29584;
if(cljs.core.chunked_seq_QMARK_(seq__29373_29585__$1)){
var c__4591__auto___29586 = cljs.core.chunk_first(seq__29373_29585__$1);
var G__29587 = cljs.core.chunk_rest(seq__29373_29585__$1);
var G__29588 = c__4591__auto___29586;
var G__29589 = cljs.core.count(c__4591__auto___29586);
var G__29590 = (0);
seq__29373_29549 = G__29587;
chunk__29374_29550 = G__29588;
count__29375_29551 = G__29589;
i__29376_29552 = G__29590;
continue;
} else {
var i_key_29591 = cljs.core.first(seq__29373_29585__$1);
var coords_29592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_29591], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29592)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29592)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29592)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29592)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
ouroboros.app.change_room(i_key_29591);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__29428_29593 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
var chunk__29429_29594 = null;
var count__29430_29595 = (0);
var i__29431_29596 = (0);
while(true){
if((i__29431_29596 < count__29430_29595)){
var vec__29438_29597 = chunk__29429_29594.cljs$core$IIndexed$_nth$arity$2(null,i__29431_29596);
var i_29598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29438_29597,(0),null);
var item_29599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29438_29597,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29599);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29591);
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29591,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29598,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29591,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29599),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29599)], null)]));
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29438_29597,i_29598,item_29599,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
);
} else {
}


var G__29600 = seq__29428_29593;
var G__29601 = chunk__29429_29594;
var G__29602 = count__29430_29595;
var G__29603 = (i__29431_29596 + (1));
seq__29428_29593 = G__29600;
chunk__29429_29594 = G__29601;
count__29430_29595 = G__29602;
i__29431_29596 = G__29603;
continue;
} else {
var temp__5735__auto___29604__$1 = cljs.core.seq(seq__29428_29593);
if(temp__5735__auto___29604__$1){
var seq__29428_29605__$1 = temp__5735__auto___29604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29428_29605__$1)){
var c__4591__auto___29606 = cljs.core.chunk_first(seq__29428_29605__$1);
var G__29607 = cljs.core.chunk_rest(seq__29428_29605__$1);
var G__29608 = c__4591__auto___29606;
var G__29609 = cljs.core.count(c__4591__auto___29606);
var G__29610 = (0);
seq__29428_29593 = G__29607;
chunk__29429_29594 = G__29608;
count__29430_29595 = G__29609;
i__29431_29596 = G__29610;
continue;
} else {
var vec__29441_29611 = cljs.core.first(seq__29428_29605__$1);
var i_29612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441_29611,(0),null);
var item_29613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441_29611,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29613);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29591);
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29591,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29612,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29591,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29613),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29613)], null)]));
});})(seq__29428_29593,chunk__29429_29594,count__29430_29595,i__29431_29596,seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,vec__29441_29611,i_29612,item_29613,seq__29428_29605__$1,temp__5735__auto___29604__$1,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
);
} else {
}


var G__29614 = cljs.core.next(seq__29428_29605__$1);
var G__29615 = null;
var G__29616 = (0);
var G__29617 = (0);
seq__29428_29593 = G__29614;
chunk__29429_29594 = G__29615;
count__29430_29595 = G__29616;
i__29431_29596 = G__29617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
ouroboros.app.take_stick(i_key_29591);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y){
return (function (i,item){
var G__29444 = item;
var G__29444__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29591,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29444,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__29444);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29591,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29444__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__29444__$1;
}
});})(seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
,items));
});})(seq__29373_29549,chunk__29374_29550,count__29375_29551,i__29376_29552,seq__29225,chunk__29226,count__29227,i__29228,coords_29592,i_key_29591,seq__29373_29585__$1,temp__5735__auto___29584,key,vec__29222,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
ouroboros.app.light_lamp(i_key_29591);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_29591], 0));
} else {
}


var G__29618 = cljs.core.next(seq__29373_29585__$1);
var G__29619 = null;
var G__29620 = (0);
var G__29621 = (0);
seq__29373_29549 = G__29618;
chunk__29374_29550 = G__29619;
count__29375_29551 = G__29620;
i__29376_29552 = G__29621;
continue;
}
} else {
}
}
break;
}


var G__29622 = seq__29225;
var G__29623 = chunk__29226;
var G__29624 = count__29227;
var G__29625 = (i__29228 + (1));
seq__29225 = G__29622;
chunk__29226 = G__29623;
count__29227 = G__29624;
i__29228 = G__29625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29225);
if(temp__5735__auto__){
var seq__29225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29225__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__29225__$1);
var G__29626 = cljs.core.chunk_rest(seq__29225__$1);
var G__29627 = c__4591__auto__;
var G__29628 = cljs.core.count(c__4591__auto__);
var G__29629 = (0);
seq__29225 = G__29626;
chunk__29226 = G__29627;
count__29227 = G__29628;
i__29228 = G__29629;
continue;
} else {
var key = cljs.core.first(seq__29225__$1);
var seq__29445_29630 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,key)));
var chunk__29446_29631 = null;
var count__29447_29632 = (0);
var i__29448_29633 = (0);
while(true){
if((i__29448_29633 < count__29447_29632)){
var i_key_29634 = chunk__29446_29631.cljs$core$IIndexed$_nth$arity$2(null,i__29448_29633);
var coords_29635 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_29634], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29635)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29635)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29635)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29635)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
ouroboros.app.change_room(i_key_29634);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__29483_29636 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
var chunk__29484_29637 = null;
var count__29485_29638 = (0);
var i__29486_29639 = (0);
while(true){
if((i__29486_29639 < count__29485_29638)){
var vec__29493_29640 = chunk__29484_29637.cljs$core$IIndexed$_nth$arity$2(null,i__29486_29639);
var i_29641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493_29640,(0),null);
var item_29642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493_29640,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29642);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29634);
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29634,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29641,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29634,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29642),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29642)], null)]));
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29493_29640,i_29641,item_29642,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
}


var G__29643 = seq__29483_29636;
var G__29644 = chunk__29484_29637;
var G__29645 = count__29485_29638;
var G__29646 = (i__29486_29639 + (1));
seq__29483_29636 = G__29643;
chunk__29484_29637 = G__29644;
count__29485_29638 = G__29645;
i__29486_29639 = G__29646;
continue;
} else {
var temp__5735__auto___29647__$1 = cljs.core.seq(seq__29483_29636);
if(temp__5735__auto___29647__$1){
var seq__29483_29648__$1 = temp__5735__auto___29647__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29483_29648__$1)){
var c__4591__auto___29649 = cljs.core.chunk_first(seq__29483_29648__$1);
var G__29650 = cljs.core.chunk_rest(seq__29483_29648__$1);
var G__29651 = c__4591__auto___29649;
var G__29652 = cljs.core.count(c__4591__auto___29649);
var G__29653 = (0);
seq__29483_29636 = G__29650;
chunk__29484_29637 = G__29651;
count__29485_29638 = G__29652;
i__29486_29639 = G__29653;
continue;
} else {
var vec__29496_29654 = cljs.core.first(seq__29483_29648__$1);
var i_29655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29496_29654,(0),null);
var item_29656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29496_29654,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29656);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29634);
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29634,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29655,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29634,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29656),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29656)], null)]));
});})(seq__29483_29636,chunk__29484_29637,count__29485_29638,i__29486_29639,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29496_29654,i_29655,item_29656,seq__29483_29648__$1,temp__5735__auto___29647__$1,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
}


var G__29657 = cljs.core.next(seq__29483_29648__$1);
var G__29658 = null;
var G__29659 = (0);
var G__29660 = (0);
seq__29483_29636 = G__29657;
chunk__29484_29637 = G__29658;
count__29485_29638 = G__29659;
i__29486_29639 = G__29660;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
ouroboros.app.take_stick(i_key_29634);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (i,item){
var G__29499 = item;
var G__29499__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29634,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29499,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__29499);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29634,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29499__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__29499__$1;
}
});})(seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,items));
});})(seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29635,i_key_29634,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
ouroboros.app.light_lamp(i_key_29634);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_29634], 0));
} else {
}


var G__29661 = seq__29445_29630;
var G__29662 = chunk__29446_29631;
var G__29663 = count__29447_29632;
var G__29664 = (i__29448_29633 + (1));
seq__29445_29630 = G__29661;
chunk__29446_29631 = G__29662;
count__29447_29632 = G__29663;
i__29448_29633 = G__29664;
continue;
} else {
var temp__5735__auto___29665__$1 = cljs.core.seq(seq__29445_29630);
if(temp__5735__auto___29665__$1){
var seq__29445_29666__$1 = temp__5735__auto___29665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29445_29666__$1)){
var c__4591__auto___29667 = cljs.core.chunk_first(seq__29445_29666__$1);
var G__29668 = cljs.core.chunk_rest(seq__29445_29666__$1);
var G__29669 = c__4591__auto___29667;
var G__29670 = cljs.core.count(c__4591__auto___29667);
var G__29671 = (0);
seq__29445_29630 = G__29668;
chunk__29446_29631 = G__29669;
count__29447_29632 = G__29670;
i__29448_29633 = G__29671;
continue;
} else {
var i_key_29672 = cljs.core.first(seq__29445_29666__$1);
var coords_29673 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ouroboros.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_29672], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29673)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_29673)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29673)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_29673)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
ouroboros.app.change_room(i_key_29672);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__29500_29674 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
var chunk__29501_29675 = null;
var count__29502_29676 = (0);
var i__29503_29677 = (0);
while(true){
if((i__29503_29677 < count__29502_29676)){
var vec__29510_29678 = chunk__29501_29675.cljs$core$IIndexed$_nth$arity$2(null,i__29503_29677);
var i_29679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29510_29678,(0),null);
var item_29680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29510_29678,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29680);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29672);
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29672,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29679,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29672,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29680),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29680)], null)]));
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29510_29678,i_29679,item_29680,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
}


var G__29681 = seq__29500_29674;
var G__29682 = chunk__29501_29675;
var G__29683 = count__29502_29676;
var G__29684 = (i__29503_29677 + (1));
seq__29500_29674 = G__29681;
chunk__29501_29675 = G__29682;
count__29502_29676 = G__29683;
i__29503_29677 = G__29684;
continue;
} else {
var temp__5735__auto___29685__$2 = cljs.core.seq(seq__29500_29674);
if(temp__5735__auto___29685__$2){
var seq__29500_29686__$1 = temp__5735__auto___29685__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29500_29686__$1)){
var c__4591__auto___29687 = cljs.core.chunk_first(seq__29500_29686__$1);
var G__29688 = cljs.core.chunk_rest(seq__29500_29686__$1);
var G__29689 = c__4591__auto___29687;
var G__29690 = cljs.core.count(c__4591__auto___29687);
var G__29691 = (0);
seq__29500_29674 = G__29688;
chunk__29501_29675 = G__29689;
count__29502_29676 = G__29690;
i__29503_29677 = G__29691;
continue;
} else {
var vec__29513_29692 = cljs.core.first(seq__29500_29686__$1);
var i_29693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29513_29692,(0),null);
var item_29694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29513_29692,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_29694);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__29219_SHARP_),i_key_29672);
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,and__4149__auto__,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
} else {
return and__4149__auto__;
}
})())){
ouroboros.app.change_room_stick(i_key_29672,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29220_SHARP_){
return ouroboros.app.vec_remove(i_29693,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__29220_SHARP_));
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (p1__29221_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_29672,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_29694),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_29694)], null)]));
});})(seq__29500_29674,chunk__29501_29675,count__29502_29676,i__29503_29677,seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,vec__29513_29692,i_29693,item_29694,seq__29500_29686__$1,temp__5735__auto___29685__$2,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
}


var G__29695 = cljs.core.next(seq__29500_29686__$1);
var G__29696 = null;
var G__29697 = (0);
var G__29698 = (0);
seq__29500_29674 = G__29695;
chunk__29501_29675 = G__29696;
count__29502_29676 = G__29697;
i__29503_29677 = G__29698;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
ouroboros.app.take_stick(i_key_29672);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y){
return (function (i,item){
var G__29516 = item;
var G__29516__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29672,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29516,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__29516);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_29672,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29516__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__29516__$1;
}
});})(seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
,items));
});})(seq__29445_29630,chunk__29446_29631,count__29447_29632,i__29448_29633,seq__29225,chunk__29226,count__29227,i__29228,coords_29673,i_key_29672,seq__29445_29666__$1,temp__5735__auto___29665__$1,key,seq__29225__$1,temp__5735__auto__,vec__29222,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
ouroboros.app.light_lamp(i_key_29672);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_29672], 0));
} else {
}


var G__29699 = cljs.core.next(seq__29445_29666__$1);
var G__29700 = null;
var G__29701 = (0);
var G__29702 = (0);
seq__29445_29630 = G__29699;
chunk__29446_29631 = G__29700;
count__29447_29632 = G__29701;
i__29448_29633 = G__29702;
continue;
}
} else {
}
}
break;
}


var G__29703 = cljs.core.next(seq__29225__$1);
var G__29704 = null;
var G__29705 = (0);
var G__29706 = (0);
seq__29225 = G__29703;
chunk__29226 = G__29704;
count__29227 = G__29705;
i__29228 = G__29706;
continue;
}
} else {
return null;
}
}
break;
}
});
ouroboros.app.render_doors = (function ouroboros$app$render_doors(){
var iter__4564__auto__ = (function ouroboros$app$render_doors_$_iter__29517(s__29518){
return (new cljs.core.LazySeq(null,(function (){
var s__29518__$1 = s__29518;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29518__$1);
if(temp__5735__auto__){
var s__29518__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29518__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29518__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29520 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29519 = (0);
while(true){
if((i__29519 < size__4563__auto__)){
var d = cljs.core._nth(c__4562__auto__,i__29519);
cljs.core.chunk_append(b__29520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.door,d], null));

var G__29707 = (i__29519 + (1));
i__29519 = G__29707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29520),ouroboros$app$render_doors_$_iter__29517(cljs.core.chunk_rest(s__29518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29520),null);
}
} else {
var d = cljs.core.first(s__29518__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.door,d], null),ouroboros$app$render_doors_$_iter__29517(cljs.core.rest(s__29518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"doors","doors",-381344314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)));
});
ouroboros.app.render_lamps = (function ouroboros$app$render_lamps(){
var iter__4564__auto__ = (function ouroboros$app$render_lamps_$_iter__29521(s__29522){
return (new cljs.core.LazySeq(null,(function (){
var s__29522__$1 = s__29522;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29522__$1);
if(temp__5735__auto__){
var s__29522__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29522__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29522__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29524 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29523 = (0);
while(true){
if((i__29523 < size__4563__auto__)){
var l = cljs.core._nth(c__4562__auto__,i__29523);
cljs.core.chunk_append(b__29524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.lamp,l], null));

var G__29708 = (i__29523 + (1));
i__29523 = G__29708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29524),ouroboros$app$render_lamps_$_iter__29521(cljs.core.chunk_rest(s__29522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29524),null);
}
} else {
var l = cljs.core.first(s__29522__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.lamp,l], null),ouroboros$app$render_lamps_$_iter__29521(cljs.core.rest(s__29522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"lamps","lamps",2039450394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)));
});
ouroboros.app.render_sticks = (function ouroboros$app$render_sticks(){
var iter__4564__auto__ = (function ouroboros$app$render_sticks_$_iter__29525(s__29526){
return (new cljs.core.LazySeq(null,(function (){
var s__29526__$1 = s__29526;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29526__$1);
if(temp__5735__auto__){
var s__29526__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29526__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29526__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29528 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29527 = (0);
while(true){
if((i__29527 < size__4563__auto__)){
var s = cljs.core._nth(c__4562__auto__,i__29527);
cljs.core.chunk_append(b__29528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.stick,s], null));

var G__29709 = (i__29527 + (1));
i__29527 = G__29709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29528),ouroboros$app$render_sticks_$_iter__29525(cljs.core.chunk_rest(s__29526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29528),null);
}
} else {
var s = cljs.core.first(s__29526__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.stick,s], null),ouroboros$app$render_sticks_$_iter__29525(cljs.core.rest(s__29526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state)));
});
ouroboros.app.render_inventory = (function ouroboros$app$render_inventory(){
var iter__4564__auto__ = (function ouroboros$app$render_inventory_$_iter__29529(s__29530){
return (new cljs.core.LazySeq(null,(function (){
var s__29530__$1 = s__29530;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29530__$1);
if(temp__5735__auto__){
var s__29530__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29530__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29530__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29532 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29531 = (0);
while(true){
if((i__29531 < size__4563__auto__)){
var vec__29533 = cljs.core._nth(c__4562__auto__,i__29531);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29533,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29533,(1),null);
cljs.core.chunk_append(b__29532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.inventory_item,index,item], null));

var G__29710 = (i__29531 + (1));
i__29531 = G__29710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29532),ouroboros$app$render_inventory_$_iter__29529(cljs.core.chunk_rest(s__29530__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29532),null);
}
} else {
var vec__29536 = cljs.core.first(s__29530__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.inventory_item,index,item], null),ouroboros$app$render_inventory_$_iter__29529(cljs.core.rest(s__29530__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.state))));
});
ouroboros.app.root = (function ouroboros$app$root(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.walls], null),ouroboros.app.render_doors(),ouroboros.app.render_lamps(),ouroboros.app.render_sticks(),ouroboros.app.render_inventory()], null);
});
ouroboros.app.load_scene_BANG_ = (function ouroboros$app$load_scene_BANG_(){
var scene_context = threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.root], null),document.getElementById("root"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ouroboros.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"room","room",536484922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY], 0));

ouroboros.app.load_room();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"scene-context","scene-context",-506542150),scene_context);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"camera","camera",-1190348585),scene_context.camera);
});
ouroboros.app.ui_root = (function ouroboros$app$ui_root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(ouroboros.app.show_info_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#explanation","div#explanation",-894450615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(ouroboros.app.show_info_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You find yourself underneath an ancient Egyptian pyramid."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Using the glowing rods, find your way out through the labyrinth."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Recharge them using the lamps, and leave them on the floor when needed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good luck!"], null)], null):null),(cljs.core.truth_(cljs.core.deref(ouroboros.app.dead_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#message","div#message",1972424695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You have died"], null),(cljs.core.truth_(cljs.core.deref(ouroboros.app.restart_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),ouroboros.app.init], null),"Click here to restart"], null):null)], null):null)], null);
});
ouroboros.app.init = (function ouroboros$app$init(){
(ouroboros.app._STAR_canvas_element_STAR_ = document.getElementById("root"));

threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.root], null),document.getElementById("root"));

var G__29539_29711 = document.getElementById("root");
G__29539_29711.addEventListener("mousedown",ouroboros.app.on_mouse_down,false);


reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.ui_root], null),document.getElementById("ui-root"));

ouroboros.app.music.play();

cljs.core.reset_BANG_(ouroboros.app.state,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(ouroboros.app.show_info_QMARK_,true);

cljs.core.reset_BANG_(ouroboros.app.dead_QMARK_,false);

cljs.core.reset_BANG_(ouroboros.app.restart_QMARK_,false);

return ouroboros.app.load_scene_BANG_();
});
ouroboros.app.reload = (function ouroboros$app$reload(){
threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.root], null),document.getElementById("root"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.ui_root], null),document.getElementById("ui-root"));
});

//# sourceMappingURL=ouroboros.app.js.map
