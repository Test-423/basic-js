const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.length === 0 || typeof (arr) !== "object") return arr
  //console.log(arr)
  //console.log(arr.length)
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    //console.log(key)
    if (typeof (key) === "object") return arr

    if (key === "--double-prev") {
      if (typeof (arr[i - 1]) !== "undefined") {
        arr[i] = arr[i - 1]
      }
    }
    else if (key === "--discard-prev") {
      if (typeof (arr[i - 1]) !== "undefined") {
        arr[i - 1] = NaN
        arr[i] = NaN
      }
    }
    else if (key === "--double-next") {
      if (typeof (arr[i + 1]) !== "undefined") {
        arr[i] = arr[i + 1]
      }
    }
    else if (key === "--discard-next") {
      if (typeof (arr[i + 1]) !== "undefined") {
        arr[i + 1] = NaN
        arr[i] = NaN
      }
    }
  }
  //console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr.splice(i, 1)
      i--
    }
  }
  //console.log('Res::')
  //console.log(arr)
  return arr
  throw new CustomError('Not implemented');
}
