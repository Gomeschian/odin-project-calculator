let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let lastButtonPressed = "";
const keys = Array.from(document.querySelectorAll(".key"));
const display = document.querySelector(".screen");

const updateDisplay = function(e)
{
  if (e.target.textContent === "Clear")
  {
    displayValue = "";
    firstNumber = "";
    operator = "";
    display.textContent = displayValue;
  }
  else if (/^[0-9]+$/.test(e.target.textContent))
  {
    if (lastButtonPressed === "Enter")
    {
      displayValue = "";
      display.textContent = displayValue;
    }
    displayValue = e.target.textContent;
    display.textContent += displayValue;
  }
  else if (/^[+-/*]+$/.test(e.target.textContent))
  {
    if (/^[0-9]+$/.test(lastButtonPressed))
    {
      if (firstNumber === "" && secondNumber === "")
      {
          firstNumber = display.textContent;
      }
      if (firstNumber !== "" && secondNumber === "")
      {
        secondNumber = display.textContent;
        displayValue = operate(operator, firstNumber, secondNumber)
        display.textContent = displayValue;
      }
    }
  }
  else if (e.target.textContent === "Enter")
  {
    if (firstNumber !== "" && secondNumber !== "" && operator !== "")
    {
      displayValue = operate(operator, firstNumber, secondNumber);
      display.textContent = displayValue;
      firstNumber = secondNumber;
      secondNumber = "";
      operator = "";
    }
  }
  lastButtonPressed = e.target.textContent;
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
keys.forEach(key => key.addEventListener("click",(e) =>
{
  return updateDisplay(e);
}));
