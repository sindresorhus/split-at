export interface Options {
	/**
	Remove the chosen indices.

	Similar to the default `String#split` behaviour.

	@default false
	*/
	readonly remove?: boolean;
}

/**
Split a string at one or more indices.

@param string - String to be split.
@param index - One or more indices. A negative index is a 1-based position from the end of the string. For example, -1 is the index of the last place in the string. Duplicate indices are removed from the `index` array. A negative index and positive index that refer to the same position in the string are treated as duplicates.

@example
```
import splitAt from 'split-at';

splitAt('unicorn', 2);
//=> ['uni', 'corn']

splitAt('unicorn', -2);
//=> ['unico', 'rn']

splitAt('unicorn&rainbow', [6, 7]);
//=> ['unicorn', '&', 'rainbow']

splitAt('unicorn&rainbow', 7, {remove: true});
//=> ['unicorn', 'rainbow']
```
*/
export default function splitAt(
	string: string,
	index: number | readonly number[],
	options?: Options
): string[];
