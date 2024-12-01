"use strict";var c=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var j=c(function(H,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function h(e,u,o,f,n){var i,s,r,v,a;if(e<=0)return f;if(o<0?s=(1-e)*o:s=0,n<0?r=(1-e)*n:r=0,i=p(u[s]),f[r]=i,r+=n,a=1,m(i)===!1)for(a;a<e;a++){if(s+=o,v=p(u[s]),m(v)){i=v;break}v<i&&(i=v),f[r]=i,r+=n}if(m(i))for(a;a<e;a++)f[r]=i,r+=n;return f}x.exports=h
});var _=c(function(I,R){
var b=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-abs/dist');function w(e,u,o,f,n,i,s){var r,v,a,q,t;if(e<=0)return n;if(v=f,a=s,r=k(u[v]),n[a]=r,a+=i,t=1,b(r)===!1)for(t;t<e;t++){if(v+=o,q=k(u[v]),b(q)){r=q;break}q<r&&(r=q),n[a]=r,a+=i}if(b(r))for(t;t<e;t++)n[a]=r,a+=i;return n}R.exports=w
});var d=c(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=j(),A=_();z(E,"ndarray",A);O.exports=E
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=d(),l,g=C(B(__dirname,"./native.js"));D(g)?l=F:l=g;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
