const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let row = matrix.length, count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "^^") count++;
    }
  }
  if (count > 0) return count;
  else return 0;
  throw new CustomError('Not implemented');
};
