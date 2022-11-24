function whatIsBetween(a,b){
    let result = []
    if(a<b){
        for(let i = a ; i<=b; i++){
            result.push(i)
        }
    }
    return result
}
console.log(whatIsBetween(1,50))