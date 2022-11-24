// in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let str = ''
    for(let i = 0 ; i < this.length ; i ++){
      if(this[i]==this[i].toUpperCase())
      {
        str+=this[i].toLowerCase()
    }
      else
      {
      str+=this[i].toUpperCase()
    }
      }
    return str
  }