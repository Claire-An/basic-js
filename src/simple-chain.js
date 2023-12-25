const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrValue: [],

  getLength() {
    return this.arrValue.length;
  },
  addLink(value) {
    this.arrValue.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!position || typeof position != "number" || !Number.isInteger(position) || position < 0 
    || position > this.getLength()) {
      this.arrValue.length = 0;
      this.arrValue = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.arrValue.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arrValue.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.arrValue.join('~~');
    this.arrValue.length = 0;
    this.arrValue = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
