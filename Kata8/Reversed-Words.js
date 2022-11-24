function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
  }
//   function reverseWords(str){
//     let arr = str.split(' ')
//     let strR = []
//     for(let i = arr.length - 1; i > -1; i--) {
//       strR.push(arr[i]); 
//     }
//     return strR.join(' ');
//   }
// function reverseWords(str){
//     return str.split(" ").reverse().join(" "); // reverse those words
//   }