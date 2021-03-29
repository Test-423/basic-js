const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, cryte) {
    cryte = cryte || 1;
    let current, max = cryte
    for (let a of arr) {
      if (typeof (a) === "object") {
        current = this.calculateDepth(a, cryte + 1)
        if (current > max) max = current
      }
    }
    return max
  }
} // Yes