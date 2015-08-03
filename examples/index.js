'use strict';

var table = require( './../lib' );

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
