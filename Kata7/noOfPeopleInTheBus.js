const number = function (busStops) {
  // Good Luck!
//   let totalPeople = 0
//   for (let i = 0; i < busStops.length; i++) {
//     let currentPpl = busStops[i]
//     let pplOn = currentPpl[0]
//     let pplOff = currentPpl[1]
//     totalPeople += pplOn
//     totalPeople -= pplOff
//   }
//   return totalPeople
let PplCounter = 0
for (let i = 0; i < busStops.length; i++) {
  PplCounter += busStops[i][0] - busStops[i][1]
}
return PplCounter
}
let result = number([
  [10, 0],
  [3, 5],
  [5, 8],
])
console.log(result)