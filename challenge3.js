// const taxthresh=24000;
// const taxGroup1=0.1;
// const taxGroup2=0.15;
// const taxGroup3=0.2;

// const nhifRate=0.02;
// const nssfRate=0.06;






// function calcPaye(basicSalary){
//     if(basicSalary<=taxthresh){
//         return 0;
//     }
//     else if(basicSalary<=40000){
//         return(basicSalary-taxthresh)*taxGroup1;
//     }
//     else if(basicSalary<=80000){
//         return(basicSalary-taxthresh)*taxGroup2;
//     }
//     else{
//         return(basicSalary-taxthresh)*taxGroup3
//     }
// }

// function calcNhif(basicSalary){
//     return basicSalary*nhifRate
// }

// function calcNssf(basicSalary){
//     return basicSalary*nssfRate
// }

// function grossSalary(basicSalary,benefits){
//     return basicSalary + benefits
// }
// function netSalary(basicSalary,benefit){

 

//     const paye=calcPaye(basicSalary);
//     const grossSalary =grossSalary(basicSalary,benefit);
//     const nssf= calcNssf(basicSalary);
//     const nhif= calcNhif(basicSalary);
//     const netSalo= grossSalary-paye-nhif-nssf;
//     return netSalo;
// }
// const benefits=parseFloat(prompt(`enter your benefits`))
//  const basicSalary=parseFloat(prompt(`enter your basicsalary`))
//  alert(`Net Salary:`+ netSalo);
 




const taxthresh = 24000;
const taxGroup1 = 0.1;
const taxGroup2 = 0.15;
const taxGroup3 = 0.2;

const nhifRate = 0.02;
const nssfRate = 0.06;

function calcPaye(basicSalary) {
  if (basicSalary <= taxthresh) {
    return 0;
  } else if (basicSalary <= 40000) {
    return (basicSalary - taxthresh) * taxGroup1;
  } else if (basicSalary <= 80000) {
    return (basicSalary - taxthresh) * taxGroup2;
  } else {
    return (basicSalary - taxthresh) * taxGroup3;
  }
}

function calcNhif(basicSalary) {
  return basicSalary * nhifRate;
}

function calcNssf(basicSalary) {
  return basicSalary * nssfRate;
}

function grossSalary(basicSalary, benefits) {
  return basicSalary + benefits;
}
function netSalary(basicSalary, benefit) {
  const paye = calcPaye(basicSalary);
  const gross = grossSalary(basicSalary, benefit);
  const nssf = calcNssf(basicSalary);
  const nhif = calcNhif(basicSalary);
  const netSalo = gross - paye - nhif - nssf;
  return netSalo;
}
const benefits = parseFloat(prompt(`enter your benefits`));
const basicSalary = parseFloat(prompt(`enter your basicsalary`));
const netSalo = netSalary(basicSalary, benefits)
alert("Net Salary:" + netSalo);