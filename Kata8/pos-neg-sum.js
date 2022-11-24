// 
function countPositivesSumNegatives(input) {
    const answer = []
    let positiveSum = 0
    let negativeSum = 0

    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            positiveSum += 1
        } else {
            negativeSum += input[i]
        }
      }
      answer.push(positiveSum)
      answer.push(negativeSum)
    }
    return answer
}
// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) {
//       return [];
//     }
//     let posCount = 0;
//     let negSum = 0;
//     for (let i = 0; i < input.length; i++) {
//        if (input[i] > 0) {
//         posCount++;
//       } else {
//         negSum += input[i];
//       }
//     }
//     return [posCount, negSum];
//   }
  