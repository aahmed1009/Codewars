function minMax(arr) {
  let min = arr[0]
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i]
    }
    if (arr[i] >= max) {
      max = arr[i]     
    }
  }
  return [min, max] // fix me!
}
console.log(minMax([1, 2, 3, 4, 5]))
