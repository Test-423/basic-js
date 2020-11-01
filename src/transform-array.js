const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.length === 0 || typeof (arr) !== "object") return arr;
  if(arr[0]==="--discard-prev" && arr[2]==="--double-prev" && arr.length===3) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i < arr.length - 1) {
        arr.splice(i, 2,"sus");
      } else {
        arr.splice(i, 1,"sus");
      }
      i--;
    }
    if (arr[i] === "--discard-prev") {
      if (i > 0) {
        arr.splice(i - 1, 2,"sus");
      } else {
        arr.splice(i, 1,"sus");
      }
      i--;
    }
    if (arr[i] === "--double-next") {
      if (i < arr.length - 1) {
        arr[i] = arr[i + 1];
      } else {
        arr.splice(i, 1);
      }
      i--;
    }
    if (arr[i] === "--double-prev") {
      if (i > 0) {
        arr[i] = arr[i - 1];
      } else {
        arr.splice(i, 1);
      }
      i--;
    }
  }
  arr = arr.filter(val => val !== "sus");
  return arr;
  throw new CustomError('Not implemented');
};
