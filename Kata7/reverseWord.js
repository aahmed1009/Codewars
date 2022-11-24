function ReverseWord(string){
return string.split("").reverse().join("").split(" ").reverse().join(" ")
}
let result = ReverseWord("I love you")
console.log(result)
