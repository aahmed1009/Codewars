// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"
 const repeatIt = function(str, n) {
    if(typeof str == "string")
      {
      return str.repeat(n)
      }
    else
      {
      return  'Not a string'
      }
    }
//    const repeatIt = function(str, n) {
//         let res = '';
//         for (let i = 0; i < n; i++) {
//           if (typeof str != 'string') {
//             res = 'Not a string';
//           } else {
//             res += str;
//           }
//         }
//         return res;
//         }