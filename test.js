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
		t.true(isHexDigit(digit));
	});

	t.false(isHexDigit('Q'));
	t.false(isHexDigit('unicorn'));
	t.false(isHexDigit('fA'));
	t.false(isHexDigit('aa'));

	t.throws(function () {
		isHexDigit({});
	});

	t.end();
});
