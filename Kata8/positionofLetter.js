const alphabet = () => {
    const a = 97
    const charArray = {}
    for (let i = 0; i < 26; i++) {
      charArray[String.fromCharCode(a + i)] = i + 1
    }
    return charArray
  }
  const position = letter => `Position of alphabet: ${alphabet()[letter]}`
//   function position(letter){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
//   }