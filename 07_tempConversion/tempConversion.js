
// Formula:  	(20 f - 32) * 5 / 9 = c, c=Celsius , f =Fahrenheit
const convertToCelsius = function(fahrenheit) {
  let celsius = parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
  //let celsius = Math.round(((fahrenheit - 32) * 5 / 9).toFixed(2));
  return celsius;
};

  // Formula:  	(c × 9/5) + 32 = f , c=Celsius , f =Fahrenheit
const convertToFahrenheit = function(celsius) {
  //let fahrenheit= Math.round(celsius * 9 / 5 + 32);
  let fahrenheit= parseFloat((celsius * 9 / 5 + 32).toFixed(1));
  
  return fahrenheit; 
};

//tests for vscode breakpoints
//convertToFahrenheit(20.8);
//convertToCelsius(20);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
