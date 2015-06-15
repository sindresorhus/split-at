'use strict';
var arrify = require('arrify');
var numSort = require('num-sort');

module.exports = function (str, i, opts) {
	opts = opts || {};

	var ret = [];
	var lastIndex = 0;

	arrify(i).sort(numSort.asc).forEach(function (el) {
		el++;
		ret.push(str.slice(lastIndex, opts.remove ? el - 1 : el));
		lastIndex = el;
	});

	if (lastIndex < str.length) {
		ret.push(str.slice(lastIndex));
	}

	return ret;
};
