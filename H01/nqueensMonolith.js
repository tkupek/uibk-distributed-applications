'use strict';

let num_queens = -1;


function acceptable(queen_rows) {
    for (let i = 0; i < num_queens; i++) {
        for (let j = i + 1; j < num_queens; j++) {
            if (queen_rows[i] === queen_rows[j]) {
                return false;
            }
            if (queen_rows[i] - queen_rows[j] === i - j || queen_rows[i] - queen_rows[j] === j - i) {
                return false;
            }
        }
    }
    return true;
}


function fraction(n, from, to) {
    num_queens = n;
    let solutions = 0;
    for (let iter = from; iter < to; iter++) {
        let code = iter;
        const queen_rows = [];
        for (let i = 0; i < num_queens; i++) {
            queen_rows[i] = code % num_queens;
            code = Math.floor(code / num_queens);
        }
        if (acceptable(queen_rows)) {
            solutions += 1;
            console.log("Found valid placement: ", queen_rows);
        }
    }
    return solutions;
}


function calc_nqueens(n) {
    let max_iter = 1;
    for (let i = 0; i < n; i++) {
        max_iter *= n;
    }
    return fraction(n, 0, max_iter);
}

function main(params) {
    let n = parseInt(params['n'])
    if(isNaN(n)) {
        return {error: 'no valid parameter n provided, use with n > 0'}
    }

    let result = calc_nqueens(n)
    return {result: result};
}
