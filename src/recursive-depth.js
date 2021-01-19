const CustomError = require("../extensions/custom-error");

let death = {
  count: 0
}

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //console.log(arr)
    death.count = 0
    rec(arr, 1)
    return death.count
    throw new CustomError('Not implemented');
  }
};



function rec(arr, vol) {
  if (vol > death.count) death.count = vol
  //console.log(vol)
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "object") {
      rec(arr[i], vol + 1)
    }
  }
}