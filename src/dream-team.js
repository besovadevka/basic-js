const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let membersNames = [];
    for (let el of members) {
      if (typeof el === "string" ) {
        let elLetter = el.trim().split("");
        membersNames.push(elLetter[0]);  
      }
    } 
    return membersNames.join("").toUpperCase().split("").sort().join("");
  } else {
      return false;
  }  
};
