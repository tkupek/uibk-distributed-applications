'use strict';

// https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H04-reduction

function main(params) {
    let results = [];
    Object.entries(params).forEach(([key, value]) => {
        if (key.startsWith('results_')) {
            results = results.concat(value);
        }
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let solutions = results.reduce(reducer);
    return {"solutions": solutions};
}
