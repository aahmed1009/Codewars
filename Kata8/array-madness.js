// function arrayMadness(a, b) {
//     // Ready, get set, GO!!!
//      return a.reduce((acc, cur) => acc + (cur ** 2), 0) > b.reduce((acc, cur) => acc + (cur ** 3), 0);
// }

// function arrayMadness(a, b) {
//     let sum1=0;
//     let sum2=0;
//     for (let n of a) {
//       sum1 += n*n;
//     }
//     for (let n of b) {
//       sum2 += n*n*n; //Math.pow is still longer than that.
//     }
//     return (sum1 > sum2);
//   }
function arrayMadness(a, b) {
  let firstArray = 0
  let secondArray = 0
  for (let i = 0; i < a.length; i++) {
    firstArray += a[i] ** 2
  }

  for (let i = 0; i < b.length; i++) {
    secondArray += b[i] ** 3
  }

  return firstArray > secondArray
}
