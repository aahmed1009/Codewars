function noBoringZeros(n) {
    // your code
    while(n % 10 === 0 && n !== 0) {
      n= n / 10;
    }
    return n;
  }