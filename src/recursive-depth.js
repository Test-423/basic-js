const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, cryte) {
    if (cryte === undefined) cryte = 1
    let current, max = cryte
    for (let i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === "object") {
        current = this.calculateDepth(arr[i], cryte + 1)
        if (current > max) max = current
      }
      //throw new CustomError('Not implemented');
    }
    return max
  }
}