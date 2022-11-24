function accum(str) {
  // your code
  let newStr = []
  for (let i = 0; i < str.length; i++) {
    newStr.push(format(str[i], i + 1))
  }
  return newStr.join("-")
}

function format(str, num) {
  let letter = str.toUpperCase()
  while (letter.length != num) {
    letter += str.toLowerCase()
  }
  return letter
}
