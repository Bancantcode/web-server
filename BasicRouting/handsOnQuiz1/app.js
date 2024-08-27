const { add, subtract, multiply, divide } = require('./calculation.js');

const ratePerHour = 300;
const hoursWorkedPerDay = 4;
const daysWorkedInWeek = 6;

const grossIncome = multiply(ratePerHour, multiply(hoursWorkedPerDay, daysWorkedInWeek));
const tax = multiply(grossIncome, 0.1);
const sss = 1200;
const pagIbigFund = 300;
const philHealth = 400;
const totalDeductions = add(tax, add(sss, add(pagIbigFund, philHealth)));
const netSalary = subtract(grossIncome, totalDeductions);

console.log(`The gross income is ${grossIncome}.`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sss}`);
console.log(`Pag-Ibig fund: ${pagIbigFund}`);
console.log(`PhilHealth: ${philHealth}`);
console.log(`Total deductions: ${totalDeductions}`);
console.log(`The net salary is ${netSalary}.`);
