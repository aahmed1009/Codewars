function include(arr, item){
    let i = 0;
    let res = 0;
    if (arr == 0) {
      return false;
    }
    while (i < arr.length) {
      if (arr[i] === item) {
        res = item;
      }
      i++;
    }
    return res === item;
  }
function include(arr, item){
    // ...
    if(arr.includes(item)){
      return true
    }
    else
      return false
  }