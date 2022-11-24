// const add = function (a, b) {
//   return (a + b).toString(2)
// }
// let res = add(1, 1)
// console.log(res)

//another answer
const addbinary = function (a, b) {
  let c = a + b
  let res = ""
  while (c >= 1) {
    res = (c % 2) + res
    c = Math.floor(c / 2)
  }
  return res
}
let result = addbinary(1, 1)

console.log(result)
