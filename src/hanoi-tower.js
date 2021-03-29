const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {
    turns: 0,
    seconds: 0
  }
  if (disksNumber === 0) return hanoi
  hanoi.turns = hanoiReccursive(disksNumber)
  hanoi.seconds = Math.floor(hanoi.turns * 3600 / turnsSpeed)
  return hanoi
};

function hanoiReccursive(level) {
  return (level === 1) ? 1 : hanoiReccursive(level - 1) * 2 + 1;
}
// Yes