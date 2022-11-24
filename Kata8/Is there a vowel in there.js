function isVow(a) {
  let vowels = ["a", "e", "i", "o", "u"]
  return a
    .map((el) => String.fromCharCode(el))
    .map((el) => {
      if (!vowels.includes(el)) {
        el = el.charCodeAt()
      }
      return el
    })
}
