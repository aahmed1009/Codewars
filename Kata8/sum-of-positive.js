function positive(arr){
    let sum = 0
    for (let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum +=arr[i]
        }
    }
    return sum
}
// Gauss Summation
// const summation = n => n * (n + 1) / 2;