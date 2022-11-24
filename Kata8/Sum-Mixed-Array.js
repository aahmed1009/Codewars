// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// function sumMix(x){
//     let sum = 0;
//     x.map(function(n){
//           sum+=parseInt(n)
//           })
//   return sum
//   }
//   return x.map(a => +a).reduce((a, b) => a + b);
function sumMix(x){
    let sum = 0 
    for (let i of x){
        sum+=parseInt(n)
    }
    return sum 
}