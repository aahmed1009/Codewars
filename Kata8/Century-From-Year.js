function century(year) {
    let century = 0;
    
    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }
  console.log(century(1905))
// const century = year => Math.ceil(year/100)