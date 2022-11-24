var countSheep = function (num){
    //your code here
    let text = ''
    for (let i = 1; i <= num; i++){
      text+=i + ' sheep...'
    }
    return text
  }
  console.log(countSheep(5))