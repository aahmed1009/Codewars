var hotpo = function (n) {
  //   if (n == 0) return 0 //Optional Handler to n = 0
  let counter = 0
  while (n > 1) {
    if (n % 2 == 0) {
      counter++
      n = n / 2
    } else {
      counter++
      n = n * 3 + 1
    }
  }
  return counter
}
