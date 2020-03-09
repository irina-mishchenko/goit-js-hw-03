"use strict";

const countTotalSalary = function(employees) {
    const salaries = Object.values(employees);
    let sum = 0;
    for(let i = 0; i < salaries.length; i += 1) {
        sum += salaries[i];
    }
    console.log(sum);
  };
  
  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  );