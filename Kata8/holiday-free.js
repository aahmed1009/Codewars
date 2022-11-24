function dutyFree(normPrice, discount, hol){
    let after_discount = (normPrice*discount)/100
      let total_bottles = hol/after_discount
      return parseInt(total_bottles)
    }