"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=c(function(G,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function O(r,e,t,f,i,v,q){var a,o,u,s,n;if(r<=0)return i;if(o=f,u=q,a=p(e[o]),i[u]=a,u+=v,n=1,m(a)===!1)for(n;n<r;n++){if(o+=t,s=p(e[o]),m(s)){a=s;break}s<a&&(a=s),i[u]=a,u+=v}if(m(a))for(n;n<r;n++)i[u]=a,u+=v;return i}x.exports=O
});var y=c(function(H,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=b();function h(r,e,t,f,i){var v=j(r,t),q=j(r,i);return g(r,e,t,v,f,i,q)}l.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),z=b();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),d,E=B(A(__dirname,"./native.js"));C(E)?d=D:d=E;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
