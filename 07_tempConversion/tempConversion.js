const convertToCelsius = function(fahrenheit) {
  fahrenheitToCelsius = (fahrenheit - 32 ) * (5/9)
  celsius = Math.round(fahrenheitToCelsius * 10) / 10;

  return celsius;
};

const convertToFahrenheit = function(celsius) {
  celsiusToFahrenheit = ((celsius * 9) / 5) + 32;
  fahrenheit = Math.round( celsiusToFahrenheit * 10) / 10;

  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
