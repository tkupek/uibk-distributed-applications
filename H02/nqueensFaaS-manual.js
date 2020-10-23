'use strict';

var external = require('./external');

exports.fraction = async function (ev, res) {
    var from = parseInt(ev.params.from);
    var to = parseInt(ev.params.to);
    var num_queens = parseInt(ev.params.num_queens);
    var solutions = 0;
    for(var iter = from; iter < to; iter++){
        var code = iter;
        var queen_rows = [];
        for(var i = 0; i < num_queens; i++){
            queen_rows[i] = code % num_queens;
            code = Math.floor(code/num_queens);
        }
        if(external.acceptable(num_queens, queen_rows)){
            solutions += 1;
            console.log("Found valid placement: ", queen_rows);
        }
    }
    var result = { "solutions": solutions };
    return result;
}


async function main(params) {
    let num_queens = parseInt(params['num_queens'])
    let from = parseInt(params['from'])
    let to = parseInt(params['to'])
    if(isNaN(num_queens)) {
        return {error: 'no valid parameter num_queens provided, use with num_queens > 0'}
    }
    if(isNaN(from)) {
        return {error: 'no valid parameter from provided, use with from >= 0'}
    }
    if(isNaN(to)) {
        return {error: 'no valid parameter to provided, use with to > 0'}
    }

    console.log("Running for placement range ", from, " to ", to);
    let result = await exports.fraction({ params: { from: from, to: to, num_queens: num_queens } })
    return {result: result['solutions']};
}

exports.main = main;