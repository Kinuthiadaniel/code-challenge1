// Function declaration
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

 //print grade
  console.log(markGrader(500));

