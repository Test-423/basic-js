const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(matrix) {
  if (typeof (matrix) !== "object" || matrix === null) return false;
  let colin = [], final = "", checker = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (typeof (matrix[i]) === "string") {
      matrix[i] = matrix[i].replace(/\s/g, '');
      colin[checker] = matrix[i][0].toUpperCase();
      checker++;
    }
  }
  if (colin.length === 0) return false;
  colin.sort();
  for (let j = 0; j < colin.length; j++) {
    final = final + colin[j];
  }
  return final;
  throw new CustomError('Not implemented');
};

// Done
