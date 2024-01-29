// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function g(){var g,j,f,c,b;if(0===arguments.length)g=l();else if(1===arguments.length&&r(arguments[0]))if(o(f=arguments[0],"prng")){if(!i(f.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));g=l({prng:f.prng})}else g=l(f);else{if(!s(b=arguments[0]))throw new TypeError(h("invalid argument. First argument must be a positive number. Value: `%s`.",b));if(arguments.length>1){if(!r(f=arguments[1]))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));g=l(b,{prng:f.prng})}else g=l(b,f)}else g=l(b)}return c=void 0===b?T:O,j=g.PRNG,e(c,"NAME","chi"),f&&f.prng?(e(c,"seed",null),e(c,"seedLength",null),n(c,"state",d(null),m),e(c,"stateLength",null),e(c,"byteLength",null),e(c,"toJSON",d(null))):(t(c,"seed",v),t(c,"seedLength",x),n(c,"state",L,N),t(c,"stateLength",y),t(c,"byteLength",w),e(c,"toJSON",E)),e(c,"PRNG",j),c;function v(){return j.seed}function x(){return j.seedLength}function y(){return j.stateLength}function w(){return j.byteLength}function L(){return j.state}function N(e){j.state=e}function E(){var e={type:"PRNG"};return e.name=c.NAME,e.state=p(j.state),e.params=void 0===b?[]:[b],e}function O(){return u(g())}function T(e){return a(e)||e<=0?NaN:u(g(e))}}var j=g();e(j,"factory",g);export{j as default,g as factory};
//# sourceMappingURL=index.mjs.map
