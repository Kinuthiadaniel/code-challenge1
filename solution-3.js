const prompt = require('prompt-sync')({sigint:true})
//function declaration
function calculateNetPay(benefits, basic){
  //tax variable with tax bracket function returning tax based on basic pay

  const taxMoney = function (basic){
    if ( (basic) <= 24000){  return (basic)*0.1;}
    else if ((basic) >= 24001 && (basic) <= 32333){ return (basic) * 0.25;}
     else if( (basic) >= 32334 && (basic) <= 500000){  return (basic) * 0.3;}
      else if ((basic) >=500001 && (basic)<= 800000){ return (basic)*0.325}
    else { return (basic) * 0.35;}
  }

  //nhif variable with an anonymous function passed as argument based on different gross pays, returns default deductions

  const nhif = function (benefits,basic){
    if ((benefits + basic) <= 5999){return 150;  }
    else if ((benefits + basic) >=6000 && (benefits + basic) <=7999){ return 300;  }
    else if( (benefits + basic) >=8000 && (benefits + basic)<= 11999){    return 400;  }
    else if((benefits + basic) >= 12000 && (benefits + basic)<=14999){    return 500;  }
    else if ((benefits + basic) >=15000 && (benefits + basic) <19999){    return 600;  }
    else if( (benefits + basic) >=20000 && (benefits + basic) <=24999){return 750;  }
    else if((benefits + basic) >= 25000 && (benefits + basic) <29999){ return 850;  }
    else if ((benefits + basic)>= 30000 && (benefits + basic) <=34999){    return 900;  }
    else if ((benefits + basic) >=35000 && (benefits + basic) <= 39999){   return 950;  }
    else if ((benefits + basic) >=40000 && (benefits + basic) <= 44999){    return 1000;  }
    else if ((benefits + basic)>= 45000 && (benefits + basic) <=49999){    return 1100;  }
    else if((benefits + basic) >=50000 && (benefits + basic) <= 59999){    return 1200;  }
    else if ((benefits + basic) >=60000 && (benefits + basic)<= 69999){    return 1300;  }
    else if( (benefits + basic) >= 70000 && (benefits + basic) <=79999){return 1400}
    else if ((benefits + basic) >=80000 && (benefits + basic) <=89999){ return 1500}
    else if ((benefits + basic) >=90000 && (benefits + basic) <= 99999){return 1600}
    else { return 1700};
  }

  // housing levy varible with an anonymous function passed as the argument, returns housing tax

  const housing = function (benefits, basic){
    return (benefits + basic) * 0.015;
    }

    // nssf varible with an anonymous function passed as the argument, returns nssf deductions.

  const nssf = function (benefits,  basic){
    const tierRate = 0.06
    const lowestPensinable = 7001
    if ( (benefits+basic)<= lowestPensinable){
      return lowestPensinable*tierRate;
    }else { return (benefits+ basic)*tierRate};
  }

  // totalDeductions which is the sum of tax,housing,nssf and nhif returns

const totalDeductions = (taxMoney(basic)+ nhif(benefits,basic)+ housing(benefits, basic) + nssf(benefits, basic));

// netPay variable assigned the sum of gross pay and substracts total deductions;

  let netPay = (benefits+ basic) - totalDeductions;
return netPay;
}
const benefits = parseInt(prompt("Enter Benefits: "));
const basic = parseInt(prompt("Enter basic pay:"))
console.log(calculateNetPay(benefits, basic));
