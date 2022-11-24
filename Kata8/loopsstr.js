function padIt(str, n) {
  //coding here
  let counter = 1
  while (counter <= n) {
    if (counter % 2 != 0) str = "*" + str
    if (counter % 2 == 0) str += "*"
    counter++
  }
  return str
}
console.log(padIt("#", 10))
