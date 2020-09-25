const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {turns : 0, seconds : 0};
  obj.turns = 2 ** disksNumber - 1;
  let turnsPerSec = turnsSpeed / 60 / 60;
  let oneTurnTime = 1 / turnsPerSec;
  obj.seconds = Math.floor(obj.turns * oneTurnTime);
  return obj;
};
