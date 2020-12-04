'use strict';

const _ = require('lodash')

// https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H03-fractionMonolithGiven

function acceptable(num_queens, queen_rows){
    for(var i of _.range(0, num_queens)){
        for(var j of _.range(i + 1, num_queens)){
            if(queen_rows[i] == queen_rows[j]){
                return false;
            }
            if(queen_rows[i] - queen_rows[j] == i - j || queen_rows[i] - queen_rows[j] == j - i){
                return false;
            }
        }
    }
    return true;
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/**
 *
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
async function main(params) {
    var from = parseInt(params.from);
    var placements_per_function = parseInt(params.placements_per_function);
    var to = from + placements_per_function;
    var num_queens = parseInt(params.N);
    var success_rate = parseInt(params.successRate);

    if (Math.floor(Math.random() * 100) + 1 >= success_rate) {
        await sleep(10000);
        throw 'Force failure';
    }

    var solutions = 0;
    for (var iter = from; iter < to; iter++) {
        var code = iter;
        var queen_rows = [];
        for (var i = 0; i < num_queens; i++) {
            queen_rows[i] = code % num_queens;
            code = Math.floor(code / num_queens);
        }
        if (acceptable(num_queens, queen_rows)) {
            solutions += 1;
            console.log("Found valid placement: ", queen_rows);
        }
    }
    var result = {"solutions": solutions};
    return result;
}

module.exports.handler = async (event, context) => {
    let res
    try {
        res = await main(event)
    } catch (e) {
        context.fail(e)
    }
    context.succeed(res)
}
