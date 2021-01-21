const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(name) {
    this.name = name;
  }
  encrypt(mes, key) {
    console.log(`Mes: ${mes} , Key: ${key}`)
    if (arguments.length !== 2 ) {
      console.log("error 1")
      throw false;
    }
    if (mes.length !== key.length) {
      console.log("eeorr 2")
      throw Error;
    }
    //throw new CustomError('Not implemented');
    let final = ""
    mes = mes.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0; i < mes.length; i++) {
      let x = mes[i], y = key[i], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() - y.charCodeAt() + 65
          if (code < 65) final += (code + 26).toString()
          else final += (code).toString()
        } else {
          final += x;
        }
      } else {
        final += x;
      }
    }
    return final
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(mes, key) {
    console.log(`Mes: ${mes} , Key: ${key}`)
    if (arguments.length !== 2 ) {
      console.log("error 1")
      throw false
    }
    if ( mes.length !== key.length) throw Error;
    let final = ""
    mes = mes.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0; i < mes.length; i++) {
      let x = mes[i], y = key[i], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() + y.charCodeAt() - 65
          if (code > 90) final += (code - 26).toString()
          else final += (code).toString()
        } else {
          final += x;
        }
      } else {
        final += x;
      }
    }
    return final
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
