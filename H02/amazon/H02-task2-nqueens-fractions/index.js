const external = require("./external.js")
const _ = require("lodash")

module.exports = async (event) => {
  let num_queens = event.num_queens
  let from = event.from
  let to = event.to

  var solutions = 0
  for (var iter = from; iter < to; iter++) {
    var code = iter
    var queen_rows = []
    for (var i = 0; i < num_queens; i++) {
      queen_rows[i] = code % num_queens
      code = Math.floor(code / num_queens)
    }
    if (external.acceptable(num_queens, queen_rows)) {
      solutions += 1
      console.log("Found valid placement: ", queen_rows)
    }
  }
  var result = { solutions: solutions }
  return result
}

module.exports.handler = async (event, context) => {
  const userFunc = module.exports
  let res
  try {
    res = await userFunc(event)
  } catch (e) {
    context.fail(e)
  }
  context.succeed(res)
}
