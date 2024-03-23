// Function declaration
const prompt = require('prompt-sync')({sigint:true})
function markGrader(score){
  // conditions
   if(score < 0 || score > 100){
    return "Invalid Score"
   }
  else if ( score > 79 && score<= 100){
    return "A";
  } else if(score >=60 && score<=79){
    return "B"
  } else if ( score>= 49 && score<=59){
    return "C"
  } else if(score >=40 && score <=48 ){
    return "D"
  }
  else {
    return "E"
  }
 }
const score =parseInt(prompt("Enter the score: "))
 //print grade
  console.log(markGrader(score));

