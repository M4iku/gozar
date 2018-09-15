// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._header[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._header["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._has_body[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._body[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._body["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__12355__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__12355__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__12355__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__12355__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__12354__auto__ = temp__6753__auto____$2;
return goog.object.get(o__12354__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12376 = arguments.length;
var i__8680__auto___12377 = (0);
while(true){
if((i__8680__auto___12377 < len__8679__auto___12376)){
args__8686__auto__.push((arguments[i__8680__auto___12377]));

var G__12378 = (i__8680__auto___12377 + (1));
i__8680__auto___12377 = G__12378;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq12375){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12375));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12380 = arguments.length;
var i__8680__auto___12381 = (0);
while(true){
if((i__8680__auto___12381 < len__8679__auto___12380)){
args__8686__auto__.push((arguments[i__8680__auto___12381]));

var G__12382 = (i__8680__auto___12381 + (1));
i__8680__auto___12381 = G__12382;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq12379){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12379));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12384 = arguments.length;
var i__8680__auto___12385 = (0);
while(true){
if((i__8680__auto___12385 < len__8679__auto___12384)){
args__8686__auto__.push((arguments[i__8680__auto___12385]));

var G__12386 = (i__8680__auto___12385 + (1));
i__8680__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq12383){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12383));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12388 = arguments.length;
var i__8680__auto___12389 = (0);
while(true){
if((i__8680__auto___12389 < len__8679__auto___12388)){
args__8686__auto__.push((arguments[i__8680__auto___12389]));

var G__12390 = (i__8680__auto___12389 + (1));
i__8680__auto___12389 = G__12390;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12387){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12387));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12392 = arguments.length;
var i__8680__auto___12393 = (0);
while(true){
if((i__8680__auto___12393 < len__8679__auto___12392)){
args__8686__auto__.push((arguments[i__8680__auto___12393]));

var G__12394 = (i__8680__auto___12393 + (1));
i__8680__auto___12393 = G__12394;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq12391){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12391));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12396 = arguments.length;
var i__8680__auto___12397 = (0);
while(true){
if((i__8680__auto___12397 < len__8679__auto___12396)){
args__8686__auto__.push((arguments[i__8680__auto___12397]));

var G__12398 = (i__8680__auto___12397 + (1));
i__8680__auto___12397 = G__12398;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq12395){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12395));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12400 = arguments.length;
var i__8680__auto___12401 = (0);
while(true){
if((i__8680__auto___12401 < len__8679__auto___12400)){
args__8686__auto__.push((arguments[i__8680__auto___12401]));

var G__12402 = (i__8680__auto___12401 + (1));
i__8680__auto___12401 = G__12402;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq12399){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12399));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12410 = arguments.length;
var i__8680__auto___12411 = (0);
while(true){
if((i__8680__auto___12411 < len__8679__auto___12410)){
args__8686__auto__.push((arguments[i__8680__auto___12411]));

var G__12412 = (i__8680__auto___12411 + (1));
i__8680__auto___12411 = G__12412;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12406){
var vec__12407 = p__12406;
var state_override = cljs.core.nth.call(null,vec__12407,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12407,state_override){
return (function (p1__12403_SHARP_){
return cljs.core.merge.call(null,p1__12403_SHARP_,state_override);
});})(vec__12407,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq12404){
var G__12405 = cljs.core.first.call(null,seq12404);
var seq12404__$1 = cljs.core.next.call(null,seq12404);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__12405,seq12404__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12414 = arguments.length;
var i__8680__auto___12415 = (0);
while(true){
if((i__8680__auto___12415 < len__8679__auto___12414)){
args__8686__auto__.push((arguments[i__8680__auto___12415]));

var G__12416 = (i__8680__auto___12415 + (1));
i__8680__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq12413){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12413));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12419 = arguments.length;
var i__8680__auto___12420 = (0);
while(true){
if((i__8680__auto___12420 < len__8679__auto___12419)){
args__8686__auto__.push((arguments[i__8680__auto___12420]));

var G__12421 = (i__8680__auto___12420 + (1));
i__8680__auto___12420 = G__12421;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12417){
var G__12418 = cljs.core.first.call(null,seq12417);
var seq12417__$1 = cljs.core.next.call(null,seq12417);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__12418,seq12417__$1);
});


//# sourceMappingURL=format.js.map?rel=1537053748076