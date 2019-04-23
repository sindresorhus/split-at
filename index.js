'use strict';
const arrify = require('arrify');
const numSort = require('num-sort');
const arrayUniq = require('array-uniq');

module.exports = (string, index, options = {}) => {
	const result = [];
	let lastIndex = 0;

	arrayUniq(
		arrify(index)
			.map(element => {
				const value = element < 0 ? string.length - 1 - (element * -1) : element;
				return value < 0 ? value * -1 : value;
			})
			.sort(numSort.ascending)
	).forEach(element => {
		element++;
		result.push(
			string.slice(lastIndex, options.remove ? element - 1 : element)
		);
		lastIndex = element;
	});

	if (lastIndex < string.length) {
		result.push(string.slice(lastIndex));
	}

	return result;
};
