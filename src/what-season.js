const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (date instanceof Date === false || date.getTime() === false) {
    throw Error("Nope.");
  } else {
    let season = date.getMonth();
    
    if (season === 0 || season === 1 || season === 11) {
      return "winter";
    } else if (season === 2 || season === 3 || season === 4) {
      return "spring";
    } else if (season === 5 || season === 7 || season === 6) {
      return "summer";
    } else if (season === 9 || season === 10 || season === 8) {
      return "autumn";
    }
  }
};
