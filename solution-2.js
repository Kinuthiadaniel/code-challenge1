//function declaration
const prompt = require('prompt-sync')({sigint:true})
function speedDetector(driverSpeed){
  //variables assignment to values

  const speed = 70;
  let demeritPoints = (driverSpeed - speed)/5;
  const demeritthreshold = 12;

  // conditions for awarding points

  if (demeritPoints >= demeritthreshold){
    return "License Suspended";
  }
  else if ( driverSpeed<=speed){
    return "OK";
  }
  else {
    return (driverSpeed-speed)/5;
  }

}
//function call and print
const driverSpeed = parseInt(prompt("Enter your speed: "))
console.log(speedDetector(driverSpeed));
