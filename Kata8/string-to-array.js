// const stringToArray=function(string){
//     return string.split(' ')
// }
// str = "Robin Singh"
// console.log(stringToArray(str))
// stringToArray = function (str) {
//     return str.trim().split(" ");
// };
// console.log(stringToArray("I am learning JavaScript right now"));
function stringToArray(string){
    let resMid = '';
    let res = [];
    for (var i = 0, j = 0; i < string.length; i++) {
      if (string[i] != ' ') {
        resMid += string[i];
      } else {
        resMid = [resMid];
        res.push(resMid[j]);
        resMid.pop();
      }
    }
    res.push(resMid);
    return res;
  }