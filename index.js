import arrify from 'arrify';
import {numberSortAscending} from 'num-sort';
import arrayUniq from 'array-uniq';

export default function splitAt(string, index, {remove} = {}) {
	const result = [];
	let lastIndex = 0;

	const indices = arrayUniq(
		arrify(index)
			.map(element => {
				const value = element < 0 ? string.length - 1 - (element * -1) : element;
				return value < 0 ? value * -1 : value;
			})
			.sort(numberSortAscending)
	);

	for (let index of indices) {
		index++;

		result.push(
			string.slice(lastIndex, remove ? index - 1 : index)
		);

		lastIndex = index;
	}

	if (lastIndex < string.length) {
		result.push(string.slice(lastIndex));
	}

	return result;
}
