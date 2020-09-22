const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else if (typeof date !== "object") {
    throw new Error('Nope.');
  } else {

  }
};
