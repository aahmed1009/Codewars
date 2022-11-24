// // const remove = s => s.replace(/!+$/, '');
// function remove(s)
// {
//     while(s && s.slice(-1) == "!") 
//     { 
//         s = s.slice(0,-1) 
//     }
//     return s;
// }
function remove(s){
    //coding and coding....
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
  }