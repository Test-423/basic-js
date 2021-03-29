const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let bar = [], check = 0, bool = []
  if (arr.length === 0 || typeof (arr) !== "object") return arr
  for (let key of arr) {
    if (key === "--double-prev") {
      if (arr[check - 1] !== undefined && arr[check - 1] !== "--discarded--") {
        bar.push(arr[check - 1])
      }
    }
    else if (key === "--discard-prev") {
      if (typeof (arr[check - 1]) !== "undefined" && arr[check - 1] !== "--discarded--") {
        bar.pop()
      }
    }
    else if (key === "--double-next") {
      if (check + 1 !== arr.length) {
        bar.push(arr[check + 1])
      }
    }
    else if (key === "--discard-next") {
      if (check + 1 !== arr.length) {
        bool.push(arr[check + 1])
        arr[check + 1] = "--discarded--"
      }
    }
    else if (key !== "--discarded--") {
      bar.push(key)
    }
    check++
  }
  check = 0
  for (let key of arr) {
    if (key === "--discarded--") {
      arr[check] = bool.shift()
    }
    check++
  }
  return bar
  throw new CustomError('Not implemented');
}

