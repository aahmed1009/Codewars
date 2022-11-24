function multipleindex(arr){
    let arr1 = []
    for(let i = 1;i < arr.length;i++){
        if(arr[i]%i==0)
        {
            arr1.push(arr[i])
        }
    }
    return arr1
}
console.log(multipleindex([22, -6, 32, 82, 9, 25]))