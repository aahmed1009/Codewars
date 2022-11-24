function rentalCarCost(d) {
    // Your solution here
    let total = 0
    
    for(let i =0 ; i<=d;i++){
     
      if(d>=7){
        return total=(d*40)-50
      }
    else  if(d>=3){
        return total=(d*40)-20
      }
      else {
        return d*40
      }
    }
    return total
  }