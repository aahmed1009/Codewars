// function correct(s){
//     s = s.split('');
//     for (var i = 0; i < s.length; i++) {
//       if (s[i] === '5') s[i] = 'S';
//       else if (s[i] === '0') s[i] = 'O';
//       else if (s[i] === '1') s[i] = 'I';
//       }
//     return s.join('');
//   }
//   function correct(string) {
// 	return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
// }
function correct(s)
{
  // your code here
  
 s = s.split('')
  for(let i = 0;i<s.length;i++){
    if(s[i]=='5')s[i]='S'
   else if(s[i]=='0')s[i]='O'
   else if(s[i]=='1')s[i]='I'
  }
  return s.join('')
}