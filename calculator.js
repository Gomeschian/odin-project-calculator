const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(number1, number2) {

  return number1 * number2;

};

const divide = function(number1, number2) {
	return (number1/number2) + (number1 % number2);
};

const operate = function(operator, number1, number2) {

  if (operator === "+")
  {
    return add(number1, number2);
  }
  
  if (operator === "-")
  {
    return subtract(number1, number2);
  }

  if (operator === "*")
  {
    return multiply(number1, number2);
  }

  if (operator === "/")
  {
    return divide(number1, number2);
  }
};