const disemvowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u"]
  let newStr = ""
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i)
    if (vowels.indexOf(char) == -1) {
      newStr += char
    }
  }
  return newStr
}
console.log(disemvowel("This website is for losers LOL!"))
