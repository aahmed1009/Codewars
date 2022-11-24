function fakeBin(x){
    result = ''
  stringNum = x
    for (let  i =0;i<x.length;i++){
      {
        if (x[i] < '5')
            result += '0';
        else
            result += '1';
      }
    }
    return result
  }
//   function bmi(weight, height) {
//     var formula = (weight / Math.pow(height, 2));
//     switch (true) {
//       case formula <=18.5:
//       return 'Underweight';
//       case formula <=25.0:
//       return 'Normal';
//       case formula <=30:
//       return 'Overweight';
//       default:
//       return 'Obese';
      
//     }
//   }