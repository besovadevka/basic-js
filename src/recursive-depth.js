const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, arrC = []) {
    arrC.push(count);
    for (let el of arr) {
      if (Array.isArray(el)) {
        this.calculateDepth(arr[arr.indexOf(el)], count + 1, arrC);
    }
  }
  
  let res = Math.max(...arrC);
  return res;
  
    }
};