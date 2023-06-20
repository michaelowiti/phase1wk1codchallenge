const taxthresh = 24000;
const taxGroup1 = 0.1;
const taxGroup2 = 0.15;
const taxGroup3 = 0.2;
const nssfRate = 0.06;
//for this challenge functions were created to calculate necessary inputs and
//also calculatable deductables e.g payee. if else conditions ensures that it correctly loops through
// the figures and gives the correct formula for calculations neccessary
//prompt was used to initiate a prompt for user input.
//The main function is netSalary that encompasses all functions whose results are values 
//that will be in turn deducted to get the net salary.
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

function calcNhif(gross) {
  
  if (gross <= 5999){
    return nhifRate =  150}
else if (gross <= 7999){
    return nhifRate =  300}
else if (gross <= 11999){
    return nhifRate = 500}
else if (gross <= 14999){
    return nhifRate = 600}
else if(gross <= 19999){
    return nhifRate =  750}
else if( gross<= 24999){
    return nhifRate =  850}
else if (gross <= 29999){
    return nhifRate = 1000}
else if( gross <= 34999){
    return nhifRate =  1100}
else if(gross <= 39999){
    return nhifRate = 1200}
else  if(gross <= 44999){
    return nhifRate =1300}
else if( gross <= 49999){
    return nhifRate = 1400}
else{
   return nhifRate = 1500}
}

function calcNssf(basicSalary) {
  return basicSalary * nssfRate;
}

function grossSalary(basicSalary, benefits) {
  return basicSalary + benefits;
}
function netSalary(basicSalary, benefits) {
  const paye = calcPaye(basicSalary);
  const gross = grossSalary(basicSalary, benefits);
  const nssf = calcNssf(basicSalary);
  const nhif = calcNhif(gross);
  const netSalo = gross - (paye + nhif + nssf);
  return netSalo;
}
const benefits = parseFloat(prompt(`enter your benefits`));
const basicSalary = parseFloat(prompt(`enter your basicsalary`));
const netSalo = netSalary(basicSalary, benefits);
const gross=grossSalary(basicSalary, benefits);
const nssf = calcNssf(basicSalary);
const paye = calcPaye(basicSalary);
const nhif= calcNhif(gross);
alert("Net Salary:" + netSalo);
alert("Gross Salary:"+ gross);
alert("nssf:"+nssf)
alert("paye:"+ paye)
alert("nhif:"+ nhif)