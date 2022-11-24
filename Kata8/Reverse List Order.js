function reverseList(list) {
    const resultArray = [];
    for(let i = list.length - 1; i >= 0; i--) {
      resultArray.push(list[i]);
    }
    return resultArray;
  }