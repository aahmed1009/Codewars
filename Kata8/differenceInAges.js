
// function differenceInAges(ages){
//     return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
//     }
function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0];
    for(i = 0; i < ages.length; i++) {
      if(ages[i] > oldest) {
        oldest = ages[i];
      } else if(ages[i] < youngest) {
        youngest = ages[i];
      }
    }
    return [youngest, oldest, oldest - youngest];
  }