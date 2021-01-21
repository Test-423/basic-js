const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(name) {
    if(name===true || arguments.length===0) this.name=true
    else if(name===false) this.name = false;
  }
  encrypt(mes, key) {
    if (arguments.length !== 2) {
      return false;
    }
    let final = ""
    mes = mes.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0, j = 0; i < mes.length; i++) {
      let x = mes[i], leng = key.length
      if (j > leng - 1) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() + y.charCodeAt() - 65
          if (code > 90) final += String.fromCharCode(code - 26)
          else final += String.fromCharCode(code)
          j++
        } else {
          final += x;
        }
      } else {
        final += x;
      }
    }
    if(this.name===false) return final.split("").reverse().join("")
    else return final
  }
  decrypt(mes, key) {
    if (arguments.length !== 2) {
      return false;
    }
    let final = ""
    mes = mes.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0, j = 0; i < mes.length; i++) {
      let x = mes[i]
      if (j + 1 > key.length) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() - y.charCodeAt() + 65
          if (code<65) final += String.fromCharCode(code + 26)
          else final += String.fromCharCode(code)
          j++
        } else {
          final += x;
        }
      } else {
        final += x;
      }
    }
    if(this.name===false) return final.split("").reverse().join("")
    else return final
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
