'use strict';
var arrify = require('arrify');

module.exports = function (str, i) {
	var ret = [];
	var lastIndex = 0;

	arrify(i).sort(function (a, b) {
		return a - b;
	}).forEach(function (el, i) {
		el++;
		ret.push(str.slice(lastIndex, el));
		lastIndex = el;
	});

	if (lastIndex < str.length) {
		ret.push(str.slice(lastIndex));
	}

	return ret;
};
