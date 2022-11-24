function drawStairs(n) {
  // your code here
  let step = "I"
  for (let i = 1; i < n; i++) {
    step += "\n" + " ".repeat(i) + "I"
  }
  return step
}
console.log(drawStairs(10))
