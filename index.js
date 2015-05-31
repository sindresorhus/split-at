'use strict';
var arrify = require('arrify');
var numSort = require('num-sort');

module.exports = function (str, i) {
	var ret = [];
	var lastIndex = 0;

	arrify(i).sort(numSort.asc).forEach(function (el, i) {
		el++;
		ret.push(str.slice(lastIndex, el));
		lastIndex = el;
	});

	if (lastIndex < str.length) {
		ret.push(str.slice(lastIndex));
	}

	return ret;
};
