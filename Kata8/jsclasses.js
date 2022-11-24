// function joinStrings(string1, string2) {
//   // code here
//   return string1.concat(string2)
// }
// console.log(joinStrings("Alaa", " Ahmed"))
// var TempleStrings = function (obj, feature) {
//   //complete this
//   return `${obj} are ${feature}`
// }
// console.log(TempleStrings("cats", "good"))
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get info() {
    return `${this.name} 's age is ${this.age}`
  }
}
const square = new Person("Alaa", "20")
console.log(square.info)
