//function declaration
function speedDetector(driverSpeed){
  //variables and values

  const speed = 70;
  let demeritPoints = (driverSpeed - speed)/5;
  const demeritLimit = 12;
  // conditions
  if (demeritPoints >= demeritLimit){
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
speedDetector(90);
console.log(speedDetector(90));
