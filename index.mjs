// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function i(s,e,i,n,d,a,m){var o,f,l,j,p;if(s<=0)return d;if(l=m,o=r(e[f=n]),d[l]=o,l+=a,p=1,!1===t(o))for(;p<s;p++){if(j=r(e[f+=i]),t(j)){o=j;break}j<o&&(o=j),d[l]=o,l+=a}if(t(o))for(;p<s;p++)d[l]=o,l+=a;return d}function n(s,t,r,n,d){return i(s,t,r,e(s,r),n,d,e(s,d))}s(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map