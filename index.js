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

module.exports = function (digit) {
	if (typeof digit !== 'number' && typeof digit !== 'string') {
		throw new TypeError('Expected a number or a string');
	}

	return digits.indexOf(String(digit).toLowerCase()) !== -1;
};
