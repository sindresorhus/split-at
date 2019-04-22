import test from 'ava';
import splitAt from '.';

test('splitAt()', t => {
	t.deepEqual(splitAt('unicorn', 2), ['uni', 'corn']);
	t.deepEqual(splitAt('unicorn', -2), ['unico', 'rn']);

	t.deepEqual(splitAt('unicorn & rainbows', [6, 13, 2, 9]), [
		'uni',
		'corn',
		' & ',
		'rain',
		'bows'
	]);

	t.deepEqual(splitAt('unicorn & rainbows', [-6, -13, -2, -9]), [
		'unico',
		'rn &',
		' ra',
		'inbo',
		'ws'
	]);

	t.deepEqual(splitAt('unicorn', 5), ['unicor', 'n']);
	t.deepEqual(splitAt('unicorn', 6), ['unicorn']);
	t.deepEqual(splitAt('unicorn', -1), ['unicor', 'n']);
	t.deepEqual(splitAt('unicorn', 100), ['unicorn']);
	t.deepEqual(splitAt('unicorn', -100), ['unicorn']);
	t.deepEqual(splitAt('unicorn', [-4, 2]), ['uni', 'corn']);
});

test('remove option', t => {
	t.deepEqual(splitAt('unicorn&rainbow', 7, {remove: true}), [
		'unicorn',
		'rainbow'
	]);

	t.deepEqual(splitAt('unicorn&rainbow', -7, {remove: true}), [
		'unicorn',
		'rainbow'
	]);

	t.deepEqual(splitAt('foo|bar|baz', [3, 7], {remove: true}), [
		'foo',
		'bar',
		'baz'
	]);
});
