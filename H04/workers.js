'use strict';

// https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H04-workers

function main(params) {
    let distributor = parseInt(params.k);
    let num_queens = parseInt(params.N);
    let num_regions = parseInt(params.R);

    let workers = Math.round((Math.pow((num_queens / 3), distributor)));
    let placements_total = Math.pow(num_queens, num_queens);
    let placements_per_function = placements_total / workers;

    let placements_from = [];

    for (let i = 0; i < placements_total; i += placements_per_function) {
        placements_from.push(i);
    }

    // adjustments for multiple regions
    workers = Math.round(workers / num_regions);
    let result = {
        "workers_per_loop": workers,
        "placements_per_function": placements_per_function
    };

    let chunk = placements_from.length / num_regions;
    for (let i = 0; i < placements_from.length; i += chunk) {
        result[`placements_from_${i / chunk}`] = placements_from.slice(i, i + chunk);
    }

    return result;
}
