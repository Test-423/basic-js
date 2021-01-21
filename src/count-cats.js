const CustomError = require("../extensions/custom-error");

module.exports = function countCats(m) {
  let c = 0;
  for (let i of m) {
    for (let j of i) {
      if (j === "^^") c++;
    }
  }
  return c;
  //throw new CustomError('Not implemented');
};
// Done