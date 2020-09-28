const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (Array.isArray(arr)) {
      let arrNew = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
            continue;
         } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
            arrNew.pop();
            i++;
         } else if (arr[i] === '--double-next') {
            if ((i + 2) < arr.length) {
               arrNew.push(arr[i + 1]);
            };
            i++;
         } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
            if ((i - 1) >= 0) {
               arrNew.push(arr[i - 1]);
            };
            i++
         };
         if (arr[i] !== undefined && arr[i] !== "--double-prev" && arr[i] !== "--double-next" && arr[i] !== "--discard-prev" && arr[i] !== "--discard-next" ) {
            arrNew.push(arr[i]);
         };
      }  
         return arrNew;
      
   } else {
    throw new Error("It is not an array((((");
   }
};