function findShort(s) {
  let arr = s.split(" ")
  let shortest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i]
    }
  }
  return shortest.length
}
