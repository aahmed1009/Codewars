//with built in functions 
// return a.includes(x)
const check =function(a,x){
    let result =false
    for(let i = 0;i<a.length;i++){
        if(a[i]==x){
            result =true
        }
    }
    return result
}