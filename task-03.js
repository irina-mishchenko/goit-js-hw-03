"use strict";

const findBestEmployee = function(employees) {
  
    let bestResult = 0;
    let name;

    const salaryKeys = Object.keys(employees);

    for(const key of salaryKeys) {
      if (bestResult < employees[key]) {
        bestResult = employees[key];
        name = key; 
      }
    }
    
    return name;
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); 