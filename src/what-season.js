const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) === "undefined") return 'Unable to determine the time of year!';
  if (Object.keys(date).length > 0 || typeof (date) !== "object") throw "Error";
  let season = date.getMonth() -1;
  if (season === 10 || season < 1) return "winter";
  if (season < 4) return "spring";
  if (season < 7) return "summer";
  if (season < 10) return "fall";
  return "0";
};

// Done
