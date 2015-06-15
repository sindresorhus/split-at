# split-at [![Build Status](https://travis-ci.org/sindresorhus/split-at.svg?branch=master)](https://travis-ci.org/sindresorhus/split-at)

> Split a string at one or more indices


## Install

```
$ npm install --save split-at
```


## Usage

```js
var splitAt = require('split-at');

splitAt('unicorn', 2);
//=> ['uni', 'corn']

splitAt('unicorn&rainbow', [6, 7]);
//=> ['unicorn', '&', 'rainbow']

splitAt('unicorn&rainbow', 7, {remove: true});
//=> ['unicorn', 'rainbow']
```


## API

### splitAt(input, index, [options])

#### input

Type: `string`

String to be split.

#### index

Type: `number`, `array` of `number`

One or more indices.

#### options

Type: `object`

##### remove

Type: `boolean`  
Default: `false`

Remove the chosen indices.

Similar to the default `String#split` behaviour.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
