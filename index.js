'use strict';
var arrify = require('arrify');
var numSort = require('num-sort');
var arrayUniq = require('array-uniq');

module.exports = function (str, i, opts) {
	opts = opts || {};

	var ret = [];
	var lastIndex = 0;

	arrayUniq(arrify(i).map(function (el) {
		var val = el < 0 ? ((str.length - 1) - (el * -1)) : el;
		return val < 0 ? (val * -1) : val;
	}).sort(numSort.asc)).forEach(function (el) {
		el++;
		ret.push(str.slice(lastIndex, opts.remove ? el - 1 : el));
		lastIndex = el;
	});

	if (lastIndex < str.length) {
		ret.push(str.slice(lastIndex));
	}

	return ret;
};
