'use strict';

// https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H03-reduction

function main(params) {
	let results = params.results;
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let solutions = results.reduce(reducer);
	return { "solutions": solutions};
}
