const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {
    turns: 0,
    seconds: 0
  }
  if (disksNumber === 0) return hanoi
  hanoi.turns = hanoiReccursive(disksNumber)
  hanoi.seconds = Math.floor(hanoi.turns *3600/ turnsSpeed)
  return hanoi
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

function hanoiReccursive(level) {
  if (level === 1) return 1;
  else return hanoiReccursive(level - 1) * 2 + 1;
}
