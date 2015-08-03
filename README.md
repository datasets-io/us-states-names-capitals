US State Names and Capitals
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Maps US state names to state capitals.


## Installation

``` bash
$ npm install datasets-us-states-names-capitals
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var table = require( 'datasets-us-states-names-capitals' );
```

#### table

Maps US state names to state capitals.

``` javascript
console.dir( table );
/*
	{
		"Alabama": "Montgomery",
		"Alaska": "Juneau",
		"Arizona": "Phoenix",
		"Arkansas": "Little Rock",
		"California": "Sacramento",
		...
	}
*/
```


## Examples

``` javascript
var table = require( 'datasets-us-states-names-capitals' );

function getCapital( state ) {
	var capital,
		parts,
		len,
		i;

	// Ensure the first letter of each word comprising a state name is capitalized...
	parts = state.split( ' ' );
	len = parts.length;
	state = '';
	for ( i = 0; i < len; i++ ) {
		state += parts[ i ][ 0 ].toUpperCase() + parts[ i ].substring( 1 );
		if ( i < len-1 ) {
			state += ' ';
		}
	}
	// Get the state capital:
	capital = table[ state ];

	// Ensure a valid state name was provided...
	if ( capital === void 0 ) {
		throw new Error( 'unrecognized state name. Value: `' + state + '`.' );
	}
	return capital;
}

console.log( getCapital( 'Missouri' ) );
console.log( getCapital( 'New Jersey' ) );
console.log( getCapital( 'California' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-us-states-names-capitals.svg
[npm-url]: https://npmjs.org/package/datasets-us-states-names-capitals

[travis-image]: http://img.shields.io/travis/datasets-io/us-states-names-capitals/master.svg
[travis-url]: https://travis-ci.org/datasets-io/us-states-names-capitals

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/us-states-names-capitals/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/us-states-names-capitals?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/us-states-names-capitals.svg
[dependencies-url]: https://david-dm.org/datasets-io/us-states-names-capitals

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/us-states-names-capitals.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/us-states-names-capitals

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/us-states-names-capitals.svg
[github-issues-url]: https://github.com/datasets-io/us-states-names-capitals/issues
