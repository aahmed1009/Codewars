// function findNeedle(haystack) {
//     // your code here
//     return 'found the needle at position '+haystack.findIndex((s)=>s=='needle')
//   }
const findNeedle =function(stack){
    for(let i = 0; i < stack.length; i++)
    
        if(stack[i] == 'needle')
    
    return 'found the needle at position ' + i
}
let result=['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
console.log(findNeedle(result))