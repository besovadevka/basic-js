const CustomError = require("../extensions/custom-error");



const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === null) {
      value = "null";
    } else if (value === undefined) {
      value = "undefined";
    } else {
      value.toString();
    }
    
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    
    if (typeof position === "number" && this.arr[position - 1] !== undefined && position > 0) {
      this.arr.splice((position - 1), 1);
      return this;
    } else {
      this.arr = [];
      throw new Error ("(((((");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let a = this.arr.join('~~');
    this.arr = [];
    return a;
    
  }
};



module.exports = chainMaker;
