const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        if (arr.indexOf("--discard-next") + 1  < arr.length) {
          arr.splice(arr.indexOf("--discard-next"), 2);
        } else {
          arr.splice(-1, 1);
        }
      } else if (arr[i] === "--discard-prev") {
        if (arr.indexOf("--discard-prev") - 1  > 0) {
          arr.splice((arr.indexOf("--discard-prev") - 1), 2);
        } else {
          arr.splice(arr.indexOf("--discard-prev"), 1);
        }
      } else if (arr[i] === "--double-next") {
        if (arr.indexOf("--double-next") + 1  < arr.length) {
          arr[arr.indexOf("--double-next")] = arr[arr.indexOf("--double-next") + 1];
        } else {
          arr.splice(arr.indexOf("--double-next"), 1);
        }
      } else if (arr[i] === "--double-prev") {
        if (arr.indexOf("--double-prev") - 1  > 0) {
          arr.splice(arr.indexOf("--double-prev"), 1, arr[arr.indexOf("--double-prev") - 1]);
          
        } else  {
          arr.splice(0, 1);
        }
      }
      
    }
    return arr;
  

  } else {
    throw Error("It is not... an... array(");
  }
};
