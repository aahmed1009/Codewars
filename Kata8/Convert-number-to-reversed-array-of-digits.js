// var num = 348597,
//     arr = String(num).split("").reverse().map(Number);

// console.log(arr);  // [7, 9, 5, 8, 4,3]
const digitize=function(n) {
    //code here
   let digits =n +''  
  let result =[] 
  for(let i = 0, length = digits.length;i < length;i++)
  {
     result[length - 1 - i] = +digits[i];
    }
  return result
  }
  let numbers=1234567
  console.log(digitize(numbers))