# split-at

> Split a string at one or more indices

## Install

```
$ npm install split-at
```

## Usage

```js
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

## API

### splitAt(string, index, options?)

#### string

Type: `string`

String to be split.

#### index

Type: `number | number[]`

One or more indices. A negative index is a 1-based position from the end of the string. For example, -1 is the index of the last place in the string. Duplicate indices are removed from the `index` array. A negative index and positive index that refer to the same position in the string are treated as duplicates.

#### options

Type: `object`

##### remove

Type: `boolean`\
Default: `false`

Remove the chosen indices.

Similar to the default `String#split` behaviour.

## Related

- [split-on-first](https://github.com/sindresorhus/split-on-first) - Split a string on the first occurrence of a given separator
