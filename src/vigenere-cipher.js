const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (value = true) {
    this.value = value;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Nope.");
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyword_index = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message[i]) === " ") {
      result += message[i];
      } else {
        let p = (alph.indexOf(message[i]) + alph.indexOf(key[keyword_index])) % 26;
        if (alph.indexOf(message[i]) === -1) {
          result += message[i];
        } else {
          result += alph[p];
          keyword_index++;
          if (keyword_index === key.length) keyword_index = 0;
        }
      }
    }
    if (this.value) {
      return result 
    } else {
      return result.split("").reverse().join("");
    }
  }   
  decrypt(message, key) {
    if (!message || !key) throw new Error("Nope.");
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    key = key.toUpperCase();
    let result = "";
    let keyword_index = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message[i]) === " ") {
      result += message[i];
      } else {
        let p = (alph.indexOf(message[i]) + 26 - alph.indexOf(key[keyword_index])) % 26;
        if (alph.indexOf(message[i]) === -1) {
          result += message[i];
        } else {
          result += alph[p];
          keyword_index++;
          if (keyword_index === key.length) keyword_index = 0;
        }
      }
    }
    if (this.value) {
      return result 
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
