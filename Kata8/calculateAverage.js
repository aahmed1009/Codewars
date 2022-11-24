const calcAverage = (...numbers)=>{
    let sum = 0
    numbers.forEach((num)=>sum+=num)
    const average = sum / numbers.length
    return average
    // return `The average  is ${average}`
}
console.log(calcAverage('age',100,50,64))