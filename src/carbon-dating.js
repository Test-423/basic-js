const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if(typeof(activity)!=="string" || activity==="") return false
  for(let i=0; i<activity.length;i++){
    if(!(activity[i].charCodeAt()>=48 && activity[i].charCodeAt()<=57))
    return false
  }
  let N = activity.toString()
  let res = (HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/N))/(0.693);
  if(res<0 || res===Infinity) return false
  return res
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
