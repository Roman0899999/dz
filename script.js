//1
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );

//2
  function count(obj) {
    return Object.keys(obj).length;
  }






//3

let user = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user;
  
  alert( name ); 
  alert( age ); 
  alert( isAdmin ); 