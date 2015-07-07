'use strict';
var test = require('ava');
var isHexDigit = require('./');

test(function (t) {
	[
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
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F'
	].forEach(function (digit) {
		t.assert(isHexDigit(digit));
	});

	t.assert(!isHexDigit('Q'));
	t.assert(!isHexDigit('unicorn'));
	t.assert(!isHexDigit('fA'));
	t.assert(!isHexDigit('aa'));

	try {
		isHexDigit({});
		t.assert(false);
	} catch (error) {}
});
