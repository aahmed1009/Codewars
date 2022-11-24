function isPalindrome(x) {
    // your code here
    return x.toLowerCase()==x.split('').reverse().join('').toLowerCase()
  }
  console.log(isPalindrome("Madam"))
//   function isPalindrome(x) {
//     let rev = '';
//     for (let i in x) {
//       rev = x[i] + rev;
//     }
//     return rev.toLowerCase() == x.toLowerCase();
//   }