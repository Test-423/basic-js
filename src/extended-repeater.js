const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = []
  //console.log(str)
  //console.log(options)
  for (let i = 0; i < ((typeof (options.repeatTimes) === "undefined") ? 1 : options.repeatTimes); i++) {
    if (i !== 0) result.push((typeof (options.separator) === "undefined") ? "+" : options.separator)
    result.push((str===null)? "null": str)
    for (let j = 0; j < ((typeof (options.additionRepeatTimes) === "undefined") ? 1 : options.additionRepeatTimes); j++) {
      if (j !== 0) result.push((typeof (options.additionSeparator) === "undefined") ? "|" : options.additionSeparator)
      result.push((options.addition === null)? "null": options.addition)
    }
  }
  return result.join("")
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
