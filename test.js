'use strict';
var assert = require('assert');
var test = require('ava');
var splitAt = require('./');

test('splitAt()', function (t) {
	assert.deepEqual(splitAt('unicorn', 2), ['uni', 'corn']);
	assert.deepEqual(splitAt('unicorn', -2), ['unico', 'rn']);

	assert.deepEqual(
		splitAt('unicorn & rainbows', [6, 13, 2, 9]),
		['uni', 'corn', ' & ', 'rain', 'bows']
	);

	assert.deepEqual(
		splitAt('unicorn & rainbows', [-6, -13, -2, -9]),
		['unico', 'rn &', ' ra', 'inbo', 'ws']
	);

	assert.deepEqual(splitAt('unicorn', 5), ['unicor', 'n']);
	assert.deepEqual(splitAt('unicorn', 6), ['unicorn']);

	assert.deepEqual(splitAt('unicorn', -1), ['unicor', 'n']);

	assert.deepEqual(splitAt('unicorn', 100), ['unicorn']);
	assert.deepEqual(splitAt('unicorn', -100), ['unicorn']);

	assert.deepEqual(splitAt('unicorn', [-4, 2]), [ 'uni', 'corn' ]);
	
	t.end();
});

test('remove option', function (t) {
	assert.deepEqual(
		splitAt('unicorn&rainbow', 7, {remove: true}),
		['unicorn', 'rainbow']
	);

	assert.deepEqual(
		splitAt('unicorn&rainbow', -7, {remove: true}),
		['unicorn', 'rainbow']
	);

	assert.deepEqual(
		splitAt('foo|bar|baz', [3, 7], {remove: true}),
		['foo', 'bar', 'baz']
	);

	t.end();
});
