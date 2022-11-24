// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!
function calculateAge(current,result) {
    return (result - current > 1 ) ? `You are ${result - current} years old.` : 
    (result - current == -1) ? `You will be born in 1 year.` :
    (result - current < 0) ? `You will be born in ${current - result} years.` :
    (result - current == 1 ) ? `You are 1 year old.` : 
    (result - current == 0 ) ? `You were born this very year!` : false
 }
// function  calculateAge(a,b) {
//     if (a>b&&+a-b==1)return `You will be born in ${+a-b} year.`
//     else if (a<b&&+b-a==1)return `You are ${b-a} year old.`
//     else if (a>b)return `You will be born in ${+a-b} years.`
//     else if (a<b) return `You are ${b-a} years old.`
//     return 'You were born this very year!'
//   }