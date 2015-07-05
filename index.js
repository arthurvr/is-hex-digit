'use strict';

var digits = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f'
];

module.exports = function (str) {
	if (typeof str !== 'number' && typeof str !== 'string') {
		throw new TypeError('Expected a number or a string');
	}

	return digits.indexOf(String(str).toLowerCase()) !== -1;
};
