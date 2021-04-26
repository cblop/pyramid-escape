goog.provide('pyramid_escape.app');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
if((typeof pyramid_escape !== 'undefined') && (typeof pyramid_escape.app !== 'undefined') && (typeof pyramid_escape.app.state !== 'undefined')){
} else {
pyramid_escape.app.state = (function (){var G__48767 = cljs.core.PersistentArrayMap.EMPTY;
return (threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.alpha.core.atom.cljs$core$IFn$_invoke$arity$1(G__48767) : threeagent.alpha.core.atom.call(null,G__48767));
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
pyramid_escape.app.escaped_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * remove elem in coll
 */
pyramid_escape.app.vec_remove = (function pyramid_escape$app$vec_remove(pos,coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
pyramid_escape.app.mouse_coords = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doors","doors",-381344314),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.83,-0.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.99,-0.85], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.13,-0.66], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.13,-0.66], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,-0.94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.23,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.23,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.83,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,-0.76], null)], null)], null),new cljs.core.Keyword(null,"lamps","lamps",2039450394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.35,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,-0.2], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.19], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,-0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,-0.06], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.39,-0.19], null)], null)], null),new cljs.core.Keyword(null,"sticks","sticks",1936911459),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.42,-0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.51,-0.76], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,-0.89], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.05,-0.89], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,-0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.51,-0.73], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.52,-0.77], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.42,-0.84], null)], null)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.87,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.73,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.68,0.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.81,0.53], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.56,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.39,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.52,0.53], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.26,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.14,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.1,0.81], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.21,0.54], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.05,0.57], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.16,0.86], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.82], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.08,0.53], null)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.49,0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.38,0.53], null)], null),(5),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.64,0.56], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.74,0.85], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.79,0.84], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.55], null)], null)], null),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.28,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.31,-0.64], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.43,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.41,(-1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.29,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,-0.65], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),-0.83], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.41,(-1)], null)], null)], null)], null);
pyramid_escape.app.door_map = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"--xx","--xx",-1649730603),new cljs.core.Keyword(null,"x-xx","x-xx",-378166609),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"x-x-","x-x-",-238164671)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-xxx","-xxx",1832230437),new cljs.core.Keyword(null,"xxx-","xxx-",1490617012),new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"x-x-","x-x-",-238164671),new cljs.core.Keyword(null,"-xx-","-xx-",-31516070)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"xxxx","xxxx",1041727592),new cljs.core.Keyword(null,"x-x-","x-x-",-238164671),new cljs.core.Keyword(null,"-xxx","-xxx",1832230437),new cljs.core.Keyword(null,"xx--","xx--",1059423959)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"xxxx","xxxx",1041727592),new cljs.core.Keyword(null,"xxx-","xxx-",1490617012),new cljs.core.Keyword(null,"--x-","--x-",-284103454)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x-","--x-",-284103454),new cljs.core.Keyword(null,"----","----",929821777),new cljs.core.Keyword(null,"-xx-","-xx-",-31516070),new cljs.core.Keyword(null,"-xxx","-xxx",1832230437),new cljs.core.Keyword(null,"xx--","xx--",1059423959)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-x-x","-x-x",-829635372),new cljs.core.Keyword(null,"x--x","x--x",-313613135),new cljs.core.Keyword(null,"xx-x","xx-x",713425765),new cljs.core.Keyword(null,"xx-x","xx-x",713425765),new cljs.core.Keyword(null,"x---","x---",771410)], null)], null);
pyramid_escape.app.lamp_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-l-","-l-",904411525),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"--l","--l",-1336229236),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"--l","--l",-1336229236),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l--","l--",-859210881),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-l-","-l-",904411525)], null)], null));
pyramid_escape.app.stick_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-x-","-x-",928650639)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-xx","-xx",-1179357958),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"--x","--x",-1028573985)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"x--","x--",-975085536),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x--","x--",-975085536),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"x-x","x-x",787101322),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"--x","--x",-1028573985)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"--x","--x",-1028573985),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"-x-","-x-",928650639),new cljs.core.Keyword(null,"---","---",818326239),new cljs.core.Keyword(null,"---","---",818326239)], null)], null));
pyramid_escape.app.placement__GT_index = (function pyramid_escape$app$placement__GT_index(type,placement){
var G__48768 = placement;
var G__48768__$1 = (((G__48768 instanceof cljs.core.Keyword))?G__48768.fqn:null);
switch (G__48768__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48768__$1)].join('')));

}
});
pyramid_escape.app.load_room = (function pyramid_escape$app$load_room(){
var room = new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state));
var door_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.door_map,room));
var lamp_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.lamp_map),room));
var stick_string = cljs.core.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.stick_map),room));
var doors = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x")){
var G__48769 = i;
switch (G__48769) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48769)].join('')));

}
} else {
return null;
}
}),door_string)));
var lamps = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var lit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"l");
var unlit_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"x");
if(((lit_QMARK_) || (unlit_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__48770 = i;
switch (G__48770) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48770)].join('')));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),(function (){var G__48771 = i;
switch (G__48771) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48771)].join('')));

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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48772_SHARP_){
var G__48773 = p1__48772_SHARP_;
var G__48773__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__48772_SHARP_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48773,new cljs.core.Keyword(null,"lit?","lit?",923589354),false):G__48773);
if((new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(p1__48772_SHARP_) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48773__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),cljs.core.dec);
} else {
return G__48773__$1;
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

pyramid_escape.app.decrement_burns_left();

return pyramid_escape.app.load_room();
} else {
return null;
}
});
var G__48774_49114 = direction;
var G__48774_49115__$1 = (((G__48774_49114 instanceof cljs.core.Keyword))?G__48774_49114.fqn:null);
switch (G__48774_49115__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48774_49115__$1)].join('')));

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"room","room",536484922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
return cljs.core.reset_BANG_(pyramid_escape.app.escaped_QMARK_,true);
} else {
if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lit?","lit?",923589354),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lamps","lamps",2039450394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))], 0))))){
return pyramid_escape.app.die_BANG_();
} else {
return null;
}
}
});
pyramid_escape.app.walls = (function pyramid_escape$app$walls(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(0),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(20),(10)], null),new cljs.core.Keyword(null,"material","material",460118677),pyramid_escape.app.wall_material], null)], null)], null);
});
pyramid_escape.app.door = (function pyramid_escape$app$door(placement){
var placements = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-5),-11.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-15),-1.4], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(11),(3)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(-5),(-9)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(10),(11)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"scale","scale",-230427353)], null)),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"specular","specular",1475677228),(0)], null)], null)], null)], null);
});
pyramid_escape.app.lamp = (function pyramid_escape$app$lamp(p__48775){
var map__48776 = p__48775;
var map__48776__$1 = cljs.core.__destructure_map(map__48776);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48776__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48776__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var lamp_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(-2),(-10)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null)], null);
var light_placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(0),(-1)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(0),(-1)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lamp_placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?"yellow":"brown")], null)], null)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get.cljs$core$IFn$_invoke$arity$2(light_placements,placement)], null)], null):null)], null);
});
pyramid_escape.app.stick = (function pyramid_escape$app$stick(p__48777){
var map__48778 = p__48777;
var map__48778__$1 = cljs.core.__destructure_map(map__48778);
var placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48778__$1,new cljs.core.Keyword(null,"placement","placement",768366651));
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48778__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48778__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-9),(-5)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),(cljs.core.truth_(lit_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(50),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),(2),(10))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(placements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [placement,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.2,0.2], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(lit_QMARK_)?(function (){var G__48779 = burns_left;
switch (G__48779) {
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
pyramid_escape.app.inventory_item = (function pyramid_escape$app$inventory_item(index,p__48780){
var map__48781 = p__48780;
var map__48781__$1 = cljs.core.__destructure_map(map__48781);
var lit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"lit?","lit?",923589354));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var burns_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48781__$1,new cljs.core.Keyword(null,"burns-left","burns-left",-472769615));
var placements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-13),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(-5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(8),(-5)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-10)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),(1),new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),(1),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(placements,index),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3.0,(0),0.5], null),new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425),false,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,0.4,0.4], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"green":(cljs.core.truth_(lit_QMARK_)?(function (){var G__48782 = burns_left;
switch (G__48782) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48783_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48783_SHARP_),placement);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pyramid_escape.app.state),type)));
});
pyramid_escape.app.light_item = (function pyramid_escape$app$light_item(type,placement){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,type,(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48784_SHARP_){
var G__48785 = p1__48784_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placement,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48784_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48785,new cljs.core.Keyword(null,"lit?","lit?",923589354),true);
} else {
return G__48785;
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
var the_stick = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48786_SHARP_),placement);
}),new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
if(cljs.core.truth_((function (){var and__4149__auto__ = the_stick;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count(my_sticks) < (7));
} else {
return and__4149__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),(function (sticks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48787_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48787_SHARP_),placement);
}),sticks);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),(function (p1__48788_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__48788_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),false,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(the_stick),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(the_stick)], null)], null));
}));

return pyramid_escape.app.change_room_stick(placement,true);
} else {
return null;
}
});
pyramid_escape.app.light_lamp = (function pyramid_escape$app$light_lamp(placement){
var stick_index = pyramid_escape.app.selected_stick_index();
var selected_stick = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state)),stick_index);
if(cljs.core.truth_(new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(pyramid_escape.app.get_item(new cljs.core.Keyword(null,"lamps","lamps",2039450394),placement)))){
return pyramid_escape.app.light_inv_stick(stick_index);
} else {
return null;
}
});
pyramid_escape.app.on_mouse_down = (function pyramid_escape$app$on_mouse_down(evt){
var vec__48792 = pyramid_escape.app.mouse_evt__GT_screen_coords(evt);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48792,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48792,(1),null);
(pyramid_escape.app.mouse_position.x = x);

(pyramid_escape.app.mouse_position.y = y);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x:",x.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["y:",y.toFixed((2))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))),new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))], 0));

var seq__48795 = cljs.core.seq(cljs.core.keys(pyramid_escape.app.mouse_coords));
var chunk__48796 = null;
var count__48797 = (0);
var i__48798 = (0);
while(true){
if((i__48798 < count__48797)){
var key = chunk__48796.cljs$core$IIndexed$_nth$arity$2(null,i__48798);
var seq__48943_49119 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,key)));
var chunk__48944_49120 = null;
var count__48945_49121 = (0);
var i__48946_49122 = (0);
while(true){
if((i__48946_49122 < count__48945_49121)){
var i_key_49123 = chunk__48944_49120.cljs$core$IIndexed$_nth$arity$2(null,i__48946_49122);
var coords_49124 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_49123], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49124)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49124)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49124)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49124)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_49123);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__48981_49125 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__48982_49126 = null;
var count__48983_49127 = (0);
var i__48984_49128 = (0);
while(true){
if((i__48984_49128 < count__48983_49127)){
var vec__48991_49129 = chunk__48982_49126.cljs$core$IIndexed$_nth$arity$2(null,i__48984_49128);
var i_49130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991_49129,(0),null);
var item_49131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991_49129,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49131);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49123);
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49123,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49130,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49123,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49131),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49131)], null)]));
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48991_49129,i_49130,item_49131,coords_49124,i_key_49123,key,vec__48792,x,y))
);
} else {
}


var G__49132 = seq__48981_49125;
var G__49133 = chunk__48982_49126;
var G__49134 = count__48983_49127;
var G__49135 = (i__48984_49128 + (1));
seq__48981_49125 = G__49132;
chunk__48982_49126 = G__49133;
count__48983_49127 = G__49134;
i__48984_49128 = G__49135;
continue;
} else {
var temp__5735__auto___49136 = cljs.core.seq(seq__48981_49125);
if(temp__5735__auto___49136){
var seq__48981_49137__$1 = temp__5735__auto___49136;
if(cljs.core.chunked_seq_QMARK_(seq__48981_49137__$1)){
var c__4591__auto___49138 = cljs.core.chunk_first(seq__48981_49137__$1);
var G__49139 = cljs.core.chunk_rest(seq__48981_49137__$1);
var G__49140 = c__4591__auto___49138;
var G__49141 = cljs.core.count(c__4591__auto___49138);
var G__49142 = (0);
seq__48981_49125 = G__49139;
chunk__48982_49126 = G__49140;
count__48983_49127 = G__49141;
i__48984_49128 = G__49142;
continue;
} else {
var vec__48994_49143 = cljs.core.first(seq__48981_49137__$1);
var i_49144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994_49143,(0),null);
var item_49145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994_49143,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49145);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49123);
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49123,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49144,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49123,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49145),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49145)], null)]));
});})(seq__48981_49125,chunk__48982_49126,count__48983_49127,i__48984_49128,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__48994_49143,i_49144,item_49145,seq__48981_49137__$1,temp__5735__auto___49136,coords_49124,i_key_49123,key,vec__48792,x,y))
);
} else {
}


var G__49146 = cljs.core.next(seq__48981_49137__$1);
var G__49147 = null;
var G__49148 = (0);
var G__49149 = (0);
seq__48981_49125 = G__49146;
chunk__48982_49126 = G__49147;
count__48983_49127 = G__49148;
i__48984_49128 = G__49149;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_49123);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49124,i_key_49123,key,vec__48792,x,y){
return (function (i,item){
var G__48997 = item;
var G__48997__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49123,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48997,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__48997);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49123,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48997__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__48997__$1;
}
});})(seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49124,i_key_49123,key,vec__48792,x,y))
,items));
});})(seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49124,i_key_49123,key,vec__48792,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_49123);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_49123], 0));
} else {
}


var G__49150 = seq__48943_49119;
var G__49151 = chunk__48944_49120;
var G__49152 = count__48945_49121;
var G__49153 = (i__48946_49122 + (1));
seq__48943_49119 = G__49150;
chunk__48944_49120 = G__49151;
count__48945_49121 = G__49152;
i__48946_49122 = G__49153;
continue;
} else {
var temp__5735__auto___49154 = cljs.core.seq(seq__48943_49119);
if(temp__5735__auto___49154){
var seq__48943_49155__$1 = temp__5735__auto___49154;
if(cljs.core.chunked_seq_QMARK_(seq__48943_49155__$1)){
var c__4591__auto___49156 = cljs.core.chunk_first(seq__48943_49155__$1);
var G__49157 = cljs.core.chunk_rest(seq__48943_49155__$1);
var G__49158 = c__4591__auto___49156;
var G__49159 = cljs.core.count(c__4591__auto___49156);
var G__49160 = (0);
seq__48943_49119 = G__49157;
chunk__48944_49120 = G__49158;
count__48945_49121 = G__49159;
i__48946_49122 = G__49160;
continue;
} else {
var i_key_49161 = cljs.core.first(seq__48943_49155__$1);
var coords_49162 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_49161], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49162)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49162)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49162)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49162)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_49161);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__48998_49163 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__48999_49164 = null;
var count__49000_49165 = (0);
var i__49001_49166 = (0);
while(true){
if((i__49001_49166 < count__49000_49165)){
var vec__49008_49167 = chunk__48999_49164.cljs$core$IIndexed$_nth$arity$2(null,i__49001_49166);
var i_49168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49008_49167,(0),null);
var item_49169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49008_49167,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49169);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49161);
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49161,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49168,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49161,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49169),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49169)], null)]));
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49008_49167,i_49168,item_49169,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
);
} else {
}


var G__49170 = seq__48998_49163;
var G__49171 = chunk__48999_49164;
var G__49172 = count__49000_49165;
var G__49173 = (i__49001_49166 + (1));
seq__48998_49163 = G__49170;
chunk__48999_49164 = G__49171;
count__49000_49165 = G__49172;
i__49001_49166 = G__49173;
continue;
} else {
var temp__5735__auto___49174__$1 = cljs.core.seq(seq__48998_49163);
if(temp__5735__auto___49174__$1){
var seq__48998_49175__$1 = temp__5735__auto___49174__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48998_49175__$1)){
var c__4591__auto___49176 = cljs.core.chunk_first(seq__48998_49175__$1);
var G__49177 = cljs.core.chunk_rest(seq__48998_49175__$1);
var G__49178 = c__4591__auto___49176;
var G__49179 = cljs.core.count(c__4591__auto___49176);
var G__49180 = (0);
seq__48998_49163 = G__49177;
chunk__48999_49164 = G__49178;
count__49000_49165 = G__49179;
i__49001_49166 = G__49180;
continue;
} else {
var vec__49011_49181 = cljs.core.first(seq__48998_49175__$1);
var i_49182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011_49181,(0),null);
var item_49183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011_49181,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49183);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49161);
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49161,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49182,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49161,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49183),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49183)], null)]));
});})(seq__48998_49163,chunk__48999_49164,count__49000_49165,i__49001_49166,seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,vec__49011_49181,i_49182,item_49183,seq__48998_49175__$1,temp__5735__auto___49174__$1,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
);
} else {
}


var G__49184 = cljs.core.next(seq__48998_49175__$1);
var G__49185 = null;
var G__49186 = (0);
var G__49187 = (0);
seq__48998_49163 = G__49184;
chunk__48999_49164 = G__49185;
count__49000_49165 = G__49186;
i__49001_49166 = G__49187;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_49161);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y){
return (function (i,item){
var G__49014 = item;
var G__49014__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49161,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49014,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__49014);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49161,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49014__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__49014__$1;
}
});})(seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
,items));
});})(seq__48943_49119,chunk__48944_49120,count__48945_49121,i__48946_49122,seq__48795,chunk__48796,count__48797,i__48798,coords_49162,i_key_49161,seq__48943_49155__$1,temp__5735__auto___49154,key,vec__48792,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_49161);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_49161], 0));
} else {
}


var G__49188 = cljs.core.next(seq__48943_49155__$1);
var G__49189 = null;
var G__49190 = (0);
var G__49191 = (0);
seq__48943_49119 = G__49188;
chunk__48944_49120 = G__49189;
count__48945_49121 = G__49190;
i__48946_49122 = G__49191;
continue;
}
} else {
}
}
break;
}


var G__49192 = seq__48795;
var G__49193 = chunk__48796;
var G__49194 = count__48797;
var G__49195 = (i__48798 + (1));
seq__48795 = G__49192;
chunk__48796 = G__49193;
count__48797 = G__49194;
i__48798 = G__49195;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48795);
if(temp__5735__auto__){
var seq__48795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48795__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__48795__$1);
var G__49196 = cljs.core.chunk_rest(seq__48795__$1);
var G__49197 = c__4591__auto__;
var G__49198 = cljs.core.count(c__4591__auto__);
var G__49199 = (0);
seq__48795 = G__49196;
chunk__48796 = G__49197;
count__48797 = G__49198;
i__48798 = G__49199;
continue;
} else {
var key = cljs.core.first(seq__48795__$1);
var seq__49015_49200 = cljs.core.seq(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,key)));
var chunk__49016_49201 = null;
var count__49017_49202 = (0);
var i__49018_49203 = (0);
while(true){
if((i__49018_49203 < count__49017_49202)){
var i_key_49204 = chunk__49016_49201.cljs$core$IIndexed$_nth$arity$2(null,i__49018_49203);
var coords_49205 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_49204], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49205)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49205)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49205)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49205)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_49204);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__49053_49206 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__49054_49207 = null;
var count__49055_49208 = (0);
var i__49056_49209 = (0);
while(true){
if((i__49056_49209 < count__49055_49208)){
var vec__49063_49210 = chunk__49054_49207.cljs$core$IIndexed$_nth$arity$2(null,i__49056_49209);
var i_49211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49063_49210,(0),null);
var item_49212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49063_49210,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49212);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49204);
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49204,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49211,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49204,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49212),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49212)], null)]));
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49063_49210,i_49211,item_49212,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
}


var G__49213 = seq__49053_49206;
var G__49214 = chunk__49054_49207;
var G__49215 = count__49055_49208;
var G__49216 = (i__49056_49209 + (1));
seq__49053_49206 = G__49213;
chunk__49054_49207 = G__49214;
count__49055_49208 = G__49215;
i__49056_49209 = G__49216;
continue;
} else {
var temp__5735__auto___49217__$1 = cljs.core.seq(seq__49053_49206);
if(temp__5735__auto___49217__$1){
var seq__49053_49218__$1 = temp__5735__auto___49217__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49053_49218__$1)){
var c__4591__auto___49219 = cljs.core.chunk_first(seq__49053_49218__$1);
var G__49220 = cljs.core.chunk_rest(seq__49053_49218__$1);
var G__49221 = c__4591__auto___49219;
var G__49222 = cljs.core.count(c__4591__auto___49219);
var G__49223 = (0);
seq__49053_49206 = G__49220;
chunk__49054_49207 = G__49221;
count__49055_49208 = G__49222;
i__49056_49209 = G__49223;
continue;
} else {
var vec__49066_49224 = cljs.core.first(seq__49053_49218__$1);
var i_49225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066_49224,(0),null);
var item_49226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49066_49224,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49226);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49204);
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49204,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49225,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49204,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49226),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49226)], null)]));
});})(seq__49053_49206,chunk__49054_49207,count__49055_49208,i__49056_49209,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49066_49224,i_49225,item_49226,seq__49053_49218__$1,temp__5735__auto___49217__$1,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
}


var G__49227 = cljs.core.next(seq__49053_49218__$1);
var G__49228 = null;
var G__49229 = (0);
var G__49230 = (0);
seq__49053_49206 = G__49227;
chunk__49054_49207 = G__49228;
count__49055_49208 = G__49229;
i__49056_49209 = G__49230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_49204);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (i,item){
var G__49069 = item;
var G__49069__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49204,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49069,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__49069);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49204,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49069__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__49069__$1;
}
});})(seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,items));
});})(seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49205,i_key_49204,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_49204);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_49204], 0));
} else {
}


var G__49231 = seq__49015_49200;
var G__49232 = chunk__49016_49201;
var G__49233 = count__49017_49202;
var G__49234 = (i__49018_49203 + (1));
seq__49015_49200 = G__49231;
chunk__49016_49201 = G__49232;
count__49017_49202 = G__49233;
i__49018_49203 = G__49234;
continue;
} else {
var temp__5735__auto___49235__$1 = cljs.core.seq(seq__49015_49200);
if(temp__5735__auto___49235__$1){
var seq__49015_49236__$1 = temp__5735__auto___49235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49015_49236__$1)){
var c__4591__auto___49237 = cljs.core.chunk_first(seq__49015_49236__$1);
var G__49238 = cljs.core.chunk_rest(seq__49015_49236__$1);
var G__49239 = c__4591__auto___49237;
var G__49240 = cljs.core.count(c__4591__auto___49237);
var G__49241 = (0);
seq__49015_49200 = G__49238;
chunk__49016_49201 = G__49239;
count__49017_49202 = G__49240;
i__49018_49203 = G__49241;
continue;
} else {
var i_key_49242 = cljs.core.first(seq__49015_49236__$1);
var coords_49243 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pyramid_escape.app.mouse_coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,i_key_49242], null));
if((((x > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49243)))) && ((x < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,coords_49243)))) && ((y > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49243)))) && ((y < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,coords_49243)))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"doors","doors",-381344314))){
pyramid_escape.app.change_room(i_key_49242);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"floor","floor",1882041021))){
var seq__49070_49244 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
var chunk__49071_49245 = null;
var count__49072_49246 = (0);
var i__49073_49247 = (0);
while(true){
if((i__49073_49247 < count__49072_49246)){
var vec__49080_49248 = chunk__49071_49245.cljs$core$IIndexed$_nth$arity$2(null,i__49073_49247);
var i_49249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080_49248,(0),null);
var item_49250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080_49248,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49250);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49242);
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49242,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49249,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49242,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49250),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49250)], null)]));
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49080_49248,i_49249,item_49250,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
}


var G__49251 = seq__49070_49244;
var G__49252 = chunk__49071_49245;
var G__49253 = count__49072_49246;
var G__49254 = (i__49073_49247 + (1));
seq__49070_49244 = G__49251;
chunk__49071_49245 = G__49252;
count__49072_49246 = G__49253;
i__49073_49247 = G__49254;
continue;
} else {
var temp__5735__auto___49255__$2 = cljs.core.seq(seq__49070_49244);
if(temp__5735__auto___49255__$2){
var seq__49070_49256__$1 = temp__5735__auto___49255__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49070_49256__$1)){
var c__4591__auto___49257 = cljs.core.chunk_first(seq__49070_49256__$1);
var G__49258 = cljs.core.chunk_rest(seq__49070_49256__$1);
var G__49259 = c__4591__auto___49257;
var G__49260 = cljs.core.count(c__4591__auto___49257);
var G__49261 = (0);
seq__49070_49244 = G__49258;
chunk__49071_49245 = G__49259;
count__49072_49246 = G__49260;
i__49073_49247 = G__49261;
continue;
} else {
var vec__49083_49262 = cljs.core.first(seq__49070_49256__$1);
var i_49263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49083_49262,(0),null);
var item_49264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49083_49262,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(item_49264);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(p1__48789_SHARP_),i_key_49242);
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,and__4149__auto__,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,new cljs.core.Keyword(null,"sticks","sticks",1936911459).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pyramid_escape.app.state))));
} else {
return and__4149__auto__;
}
})())){
pyramid_escape.app.change_room_stick(i_key_49242,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48790_SHARP_){
return pyramid_escape.app.vec_remove(i_49263,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__48790_SHARP_));
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"sticks","sticks",1936911459),((function (seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (p1__48791_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__48791_SHARP_,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placement","placement",768366651),i_key_49242,new cljs.core.Keyword(null,"lit?","lit?",923589354),new cljs.core.Keyword(null,"lit?","lit?",923589354).cljs$core$IFn$_invoke$arity$1(item_49264),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615),new cljs.core.Keyword(null,"burns-left","burns-left",-472769615).cljs$core$IFn$_invoke$arity$1(item_49264)], null)]));
});})(seq__49070_49244,chunk__49071_49245,count__49072_49246,i__49073_49247,seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,vec__49083_49262,i_49263,item_49264,seq__49070_49256__$1,temp__5735__auto___49255__$2,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
}


var G__49265 = cljs.core.next(seq__49070_49256__$1);
var G__49266 = null;
var G__49267 = (0);
var G__49268 = (0);
seq__49070_49244 = G__49265;
chunk__49071_49245 = G__49266;
count__49072_49246 = G__49267;
i__49073_49247 = G__49268;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"sticks","sticks",1936911459))){
pyramid_escape.app.take_stick(i_key_49242);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"inventory","inventory",860201871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.update,new cljs.core.Keyword(null,"inventory","inventory",860201871),((function (seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y){
return (function (i,item){
var G__49086 = item;
var G__49086__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49242,i))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49086,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false):G__49086);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_key_49242,i)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49086__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return G__49086__$1;
}
});})(seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
,items));
});})(seq__49015_49200,chunk__49016_49201,count__49017_49202,i__49018_49203,seq__48795,chunk__48796,count__48797,i__48798,coords_49243,i_key_49242,seq__49015_49236__$1,temp__5735__auto___49235__$1,key,seq__48795__$1,temp__5735__auto__,vec__48792,x,y))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"lamps","lamps",2039450394))){
pyramid_escape.app.light_lamp(i_key_49242);
} else {
}
}
}
}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,i_key_49242], 0));
} else {
}


var G__49269 = cljs.core.next(seq__49015_49236__$1);
var G__49270 = null;
var G__49271 = (0);
var G__49272 = (0);
seq__49015_49200 = G__49269;
chunk__49016_49201 = G__49270;
count__49017_49202 = G__49271;
i__49018_49203 = G__49272;
continue;
}
} else {
}
}
break;
}


var G__49273 = cljs.core.next(seq__48795__$1);
var G__49274 = null;
var G__49275 = (0);
var G__49276 = (0);
seq__48795 = G__49273;
chunk__48796 = G__49274;
count__48797 = G__49275;
i__48798 = G__49276;
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
var iter__4564__auto__ = (function pyramid_escape$app$render_doors_$_iter__49087(s__49088){
return (new cljs.core.LazySeq(null,(function (){
var s__49088__$1 = s__49088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49088__$1);
if(temp__5735__auto__){
var s__49088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49088__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49088__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49090 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49089 = (0);
while(true){
if((i__49089 < size__4563__auto__)){
var d = cljs.core._nth(c__4562__auto__,i__49089);
cljs.core.chunk_append(b__49090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.door,d], null));

var G__49277 = (i__49089 + (1));
i__49089 = G__49277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49090),pyramid_escape$app$render_doors_$_iter__49087(cljs.core.chunk_rest(s__49088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49090),null);
}
} else {
var d = cljs.core.first(s__49088__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.door,d], null),pyramid_escape$app$render_doors_$_iter__49087(cljs.core.rest(s__49088__$2)));
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
var iter__4564__auto__ = (function pyramid_escape$app$render_lamps_$_iter__49091(s__49092){
return (new cljs.core.LazySeq(null,(function (){
var s__49092__$1 = s__49092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49092__$1);
if(temp__5735__auto__){
var s__49092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49092__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49092__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49094 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49093 = (0);
while(true){
if((i__49093 < size__4563__auto__)){
var l = cljs.core._nth(c__4562__auto__,i__49093);
cljs.core.chunk_append(b__49094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.lamp,l], null));

var G__49278 = (i__49093 + (1));
i__49093 = G__49278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49094),pyramid_escape$app$render_lamps_$_iter__49091(cljs.core.chunk_rest(s__49092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49094),null);
}
} else {
var l = cljs.core.first(s__49092__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.lamp,l], null),pyramid_escape$app$render_lamps_$_iter__49091(cljs.core.rest(s__49092__$2)));
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
var iter__4564__auto__ = (function pyramid_escape$app$render_sticks_$_iter__49095(s__49096){
return (new cljs.core.LazySeq(null,(function (){
var s__49096__$1 = s__49096;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49096__$1);
if(temp__5735__auto__){
var s__49096__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49096__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49096__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49098 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49097 = (0);
while(true){
if((i__49097 < size__4563__auto__)){
var s = cljs.core._nth(c__4562__auto__,i__49097);
cljs.core.chunk_append(b__49098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.stick,s], null));

var G__49279 = (i__49097 + (1));
i__49097 = G__49279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49098),pyramid_escape$app$render_sticks_$_iter__49095(cljs.core.chunk_rest(s__49096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49098),null);
}
} else {
var s = cljs.core.first(s__49096__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.stick,s], null),pyramid_escape$app$render_sticks_$_iter__49095(cljs.core.rest(s__49096__$2)));
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
var iter__4564__auto__ = (function pyramid_escape$app$render_inventory_$_iter__49099(s__49100){
return (new cljs.core.LazySeq(null,(function (){
var s__49100__$1 = s__49100;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49100__$1);
if(temp__5735__auto__){
var s__49100__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49100__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__49100__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__49102 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__49101 = (0);
while(true){
if((i__49101 < size__4563__auto__)){
var vec__49103 = cljs.core._nth(c__4562__auto__,i__49101);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49103,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49103,(1),null);
cljs.core.chunk_append(b__49102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.inventory_item,index,item], null));

var G__49280 = (i__49101 + (1));
i__49101 = G__49280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49102),pyramid_escape$app$render_inventory_$_iter__49099(cljs.core.chunk_rest(s__49100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49102),null);
}
} else {
var vec__49106 = cljs.core.first(s__49100__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49106,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49106,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.inventory_item,index,item], null),pyramid_escape$app$render_inventory_$_iter__49099(cljs.core.rest(s__49100__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"room","room",536484922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY], 0));

pyramid_escape.app.load_room();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"scene-context","scene-context",-506542150),scene_context);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pyramid_escape.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"camera","camera",-1190348585),scene_context.camera);
});
pyramid_escape.app.ui_root = (function pyramid_escape$app$ui_root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.escaped_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/desert.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#message","div#message",1972424695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Congratulations, you have escaped!"], null)], null)], null):null),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.show_info_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#explanation","div#explanation",-894450615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(pyramid_escape.app.show_info_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You find yourself underneath an ancient Egyptian pyramid."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Using the glowing rods, find your way out through the labyrinth."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Recharge them using the lamps, and leave them on the floor when needed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Good luck!"], null)], null):null),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.dead_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#message","div#message",1972424695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You have died"], null),(cljs.core.truth_(cljs.core.deref(pyramid_escape.app.restart_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),pyramid_escape.app.init], null),"Click here to restart"], null):null)], null):null)], null);
});
pyramid_escape.app.init = (function pyramid_escape$app$init(){
(pyramid_escape.app._STAR_canvas_element_STAR_ = document.getElementById("root"));

threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.root], null),document.getElementById("root"));

var G__49109_49281 = document.getElementById("root");
G__49109_49281.addEventListener("mousedown",pyramid_escape.app.on_mouse_down,false);


reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.ui_root], null),document.getElementById("ui-root"));

pyramid_escape.app.music.play();

cljs.core.reset_BANG_(pyramid_escape.app.state,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(pyramid_escape.app.show_info_QMARK_,true);

cljs.core.reset_BANG_(pyramid_escape.app.dead_QMARK_,false);

cljs.core.reset_BANG_(pyramid_escape.app.restart_QMARK_,false);

cljs.core.reset_BANG_(pyramid_escape.app.escaped_QMARK_,false);

return pyramid_escape.app.load_scene_BANG_();
});
pyramid_escape.app.reload = (function pyramid_escape$app$reload(){
threeagent.alpha.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.root], null),document.getElementById("root"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pyramid_escape.app.ui_root], null),document.getElementById("ui-root"));
});

//# sourceMappingURL=pyramid_escape.app.js.map
