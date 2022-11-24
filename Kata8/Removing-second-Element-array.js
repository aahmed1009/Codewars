// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
const removeEveryOther = function(arr){
    //your code here
    let array = []
    for (let i = 0 ; i<arr.length;i+=2){
      array.push(arr[i])
    }
    return array
  }
// function removeEveryOther(arr){
//     //your code here
//     for (var i = 1; i < arr.length;i++){
//         arr.splice(i,1);
//     }
//     return arr;
//   }
  let result = removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
  console.log(result)