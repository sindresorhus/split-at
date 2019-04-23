import {expectType} from 'tsd';
import splitAt = require('.');

const options: splitAt.Options = {};

expectType<string[]>(splitAt('unicorn', 2));
expectType<string[]>(splitAt('unicorn&rainbow', [6, 7]));
expectType<string[]>(splitAt('unicorn&rainbow', 7, {remove: true}));
