const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mass: new Array(),
  getLength() {
    return this.mass.length
  },
  addLink(value) {
    if (value === undefined) {
      while (this.mass.length > 0) { this.mass.pop() };
      throw new CustomError('Not implemented');
    }
    this.mass.push((arguments.length) ? ((typeof (value) === "string") ? `( ${value} )` : `( ${value} )`) : "(  )")
    return this
  },
  removeLink(position) {
    if (position === undefined || typeof (position) !== "number" || position % 1 !== 0 || position < 1) {
      while (this.mass.length > 0) { this.mass.pop() };
      throw Error
    }
    let len = this.mass.length
    for (let i = 0; i < this.mass.length; i++) {
      if (i + 1 === position) this.mass.splice(i, 1)
    }
    if (len === this.mass.length) {
      while (this.mass.length > 0) { this.mass.pop() };
      throw Error
    }
    return this
  },
  reverseChain() {
    if (this.mass.length > 0) { this.mass.reverse() }
    return this
  },
  finishChain() {
    let str = ""
    for (let i = 0; i < this.mass.length; i++) {
      if (i === 0) str += this.mass[i]
      else str += "~~" + this.mass[i]
    }
    while (this.mass.length > 0) { this.mass.pop() }
    return str
  }
};

module.exports = chainMaker;
