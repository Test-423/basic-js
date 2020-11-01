const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr)
    return rec(arr,1);
    throw new CustomError('Not implemented');
  }
};
function rec(arr, vol){
  let max = vol,boolen;
  console.log(max);
  for(let i=0 ; i<arr.length; i++){
    if(typeof(arr[i])==="object"){
      boolen = rec(arr[i],vol + 1);
      if(boolen>max) max = boolen;
    }
  }
  return max;
}