<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dcuminabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the cumulative minimum absolute value of double-precision floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dcuminabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dcuminabs@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dcuminabs/tags). For example,

```javascript
dcuminabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dcuminabs@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dcuminabs = require( 'path/to/vendor/umd/stats-base-dcuminabs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dcuminabs@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dcuminabs;
})();
</script>
```

#### dcuminabs( N, x, strideX, y, strideY )

Computes the cumulative minimum absolute value of double-precision floating-point strided array elements.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcuminabs( x.length, x, 1, y, 1 );
// y => <Float64Array>[ 1.0, 1.0, 1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to compute the cumulative minimum absolute value of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( x.length );

var v = dcuminabs( 4, x, 2, y, 1 );
// y => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dcuminabs( 4, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 4.0, 2.0, 2.0, 1.0, 0.0 ]
```

#### dcuminabs.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative minimum absolute value of double-precision floating-point strided array elements using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcuminabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 1.0, 1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, `offsetX` and `offsetY` parameters support indexing semantics based on a starting indices. For example, to calculate the cumulative minimum absolute value of every other value in `x` starting from the second value and to store in the last `N` elements of `y` starting from the last element

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float64Array( x.length );

dcuminabs.ndarray( 4, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dcuminabs@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var y;
var x;
var i;

x = new Float64Array( 10 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );
console.log( y );

dcuminabs( x.length, x, 1, y, -1 );
console.log( y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/cuminabs`][@stdlib/stats/base/cuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/dcumaxabs`][@stdlib/stats/base/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats-base/dcumin`][@stdlib/stats/base/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats-base/scuminabs`][@stdlib/stats/base/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dcuminabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dcuminabs

[test-image]: https://github.com/stdlib-js/stats-base-dcuminabs/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dcuminabs/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dcuminabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dcuminabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dcuminabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dcuminabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dcuminabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dcuminabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dcuminabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dcuminabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dcuminabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dcuminabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dcuminabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dcuminabs/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats-base-cuminabs/tree/umd

[@stdlib/stats/base/dcumaxabs]: https://github.com/stdlib-js/stats-base-dcumaxabs/tree/umd

[@stdlib/stats/base/dcumin]: https://github.com/stdlib-js/stats-base-dcumin/tree/umd

[@stdlib/stats/base/scuminabs]: https://github.com/stdlib-js/stats-base-scuminabs/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
