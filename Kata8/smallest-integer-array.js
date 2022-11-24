// const smallestInteger =function(args){
//     let smallest = args[0]
//     for(let i = 0 ; i < args.length; i ++){
//         if(args[i] < smallest ){
//             smallest = args[i] 
//         }
//     }
//     return smallest
// }
// let result = smallestInteger([2,8,10,14,1,20])
// console.log(result)
// ******************* WITH BUILT IN FUNCTIONS******************************
const smallestInteger =function(array){return Math.min(...array)}
let result = smallestInteger([2,8,10,14,1,20])
console.log(result)

