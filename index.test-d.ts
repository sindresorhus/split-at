import {expectType} from 'tsd';
import splitAt from './index.js';

expectType<string[]>(splitAt('unicorn', 2));
expectType<string[]>(splitAt('unicorn&rainbow', [6, 7]));
expectType<string[]>(splitAt('unicorn&rainbow', 7, {remove: true}));
