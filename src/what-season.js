const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) === "undefined") return 'Unable to determine the time of year!';
  let season;
  if (Object.keys(date).length > 0 || typeof (date) !== "object") throw "Error";
  season = date.getMonth();
  if (season === 11 || season < 2) return "winter";
  if (season > 1 && season < 5) return "spring";
  if (season > 4 && season < 8) return "summer";
  if (season > 7 && season < 11) return "fall";
  return "0";
  throw new CustomError('Not implemented');
};

// Done
