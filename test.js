'use strict';
var assert = require('assert');
var test = require('ava');
var splitAt = require('./');

test(function (t) {
	assert.deepEqual(splitAt('unicorn', 2), ['uni', 'corn']);

	assert.deepEqual(
		splitAt('unicorn & rainbows', [6, 13, 2, 9]),
		['uni', 'corn', ' & ', 'rain', 'bows']
	);

	assert.deepEqual(splitAt('unicorn', 5), ['unicor', 'n']);
	assert.deepEqual(splitAt('unicorn', 6), ['unicorn']);
	assert.deepEqual(splitAt('unicorn', 100), ['unicorn']);

	t.end();
});
