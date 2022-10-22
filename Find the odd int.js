function findOdd(A){
    const map = new Map()
    for(let i = 0 ; i <A.length ; i++){
        if(!map.has(A[i])) map.set(A[i],1)
        else{
            map.set(A[i], map.get(A[i])+1)
        }
    }
for(let [key,value] of map ){
    if(value %2 !== 0 )
    return key
}
return 0 
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))