const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(nums) {
  // with array.reduce():
  return nums.reduce((total, current) => total + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, current) => total * current, 1);
};

// recursive implementations for fancyness
const power = function(base,expo) {
  if (expo === 0){
    return 1;
  }else{
    return base * power(base, expo-1 );
  }
};

const factorial = function(fac) {
  if (fac === 0){
    return 1;
  }else{
    return fac * factorial(fac-1); 
  }
};

//let x=factorial(3);
//console.log(x);
//sum(2,3,4,5,6);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

