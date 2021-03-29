const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  if (typeof (activity) !== "string" || activity === "" || String(activity).replace(/[0-9\.]+/g, "").length !== 0) {
    return false;
  }
  let res = (HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / activity.toString())) / (0.693);
  return (0 > res || res === Infinity) ? false : Math.ceil(res);
};

