'use strict';

// https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H03-workers

function main(params) {
	let distributor = parseInt(params.k);
	let num_queens = parseInt(params.N);

	let workers = Math.pow((num_queens/3), distributor);
	let placements_total = Math.pow(num_queens,num_queens);
	let placements_per_function = placements_total/workers;
	let placements_from = [];

	for(let i = 0; i < placements_total; i += placements_per_function ) {
		placements_from.push(i);
	}

	return {
		"workers": workers,
		"placements from": placements_from,
		"placements per function": placements_per_function
	};
}

main({N: 9, k:2})
