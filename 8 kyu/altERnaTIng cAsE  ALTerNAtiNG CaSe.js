// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
      let result = ''
  
    for (let i = 0; i < this.length; i++) {
      if (this[i] >= 'a' && this[i] <= 'z') {
        result += this[i].toUpperCase()
      } else if (this[i] >= 'A' && this[i] <= 'Z') {
        result += this[i].toLowerCase()
      } else {
        result += this[i]
      }
    }
  
    return result
  }