function spinWords(strings){
    //TODO Have fun :)
 return strings.length >= 5 
     ? strings.split(" ")
     .map((str)=>(str.length>=5 ? str.split("").reverse().join(""): str)).join(" ") : strings ;
  }
  console.log(spinWords( "Hey fellow warriors" ))