const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  return new Array((options.repeatTimes || 1)).fill(
    str + new Array((options.additionRepeatTimes || 1)).fill((options.addition === null)? 'null' : options.addition).join((options.additionSeparator || "|"))
  ).join((options.separator || "+"));
};
//(options.addition === null)? 'null' : options.addition  // Yes