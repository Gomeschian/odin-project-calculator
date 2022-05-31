let runningTotal = "";
let displayValue = "";
let nextNumber = "";
let operator = "";
let lastButtonPressed = "";
const keys = Array.from(document.querySelectorAll(".key"));
const display = document.querySelector(".screen");

const updateDisplay = function(e)
{
  if (e.target.textContent === "Clear")
  {
    clearCalculator();
  }
  else if (/^[0-9]+$/.test(e.target.textContent))
  {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
  }
  else if (/^[+-/*]+$/.test(e.target.textContent))
  {
      operator = e.target.textContent;
      runningTotal = display.textContent;
      nextNumber = 0;
      displayValue = "";
  }
  else if (e.target.textContent === "Enter")
  {
    nextNumber = display.textContent;
    runningTotal = operate(operator, Number(runningTotal), Number(nextNumber));
    displayValue = runningTotal;
    display.textContent = displayValue;
    displayValue = "";
    operator = "";
  }
  }  

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
	return (number1/number2);
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
}
const clearCalculator = function()
{ 
  displayValue = "";
  nextNumber = "";
  runningTotal = "";
  operator = "";
  display.textContent = displayValue;
};

keys.forEach(key => key.addEventListener("click",(e) =>
{
  return updateDisplay(e);
}));
