// function take(arr, n) {
//     // Your code here
//     return arr.slice(0, n);
//   }
function take(arr, n) {
    let counter = 0;
    let res = [];
    for (let i of arr) {
      counter += 1;
      if (counter <= n && counter <= arr.length) {
        res.push(i);
      }
    }
    return res;
  }