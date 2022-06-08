let runningTotal = "";
let displayValue = "";
let storedNumber = "";
let nextNumber = "";
let operator = "";
let lastButtonPressed = "";
const keys = Array.from(document.querySelectorAll(".key"));
const display = document.querySelector(".screen");
const maxDisplayableNumber = 999999999999;

const updateDisplay = function(e)
{
  if (e.target.textContent === "Clear")
  {
    clearCalculator();
  }
  else if (/^[0-9]+$/.test(e.target.textContent))
  {
    if (operator === "" && runningTotal === "")
    {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
      storedNumber = displayValue;
    }
    else
    {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
      nextNumber = displayValue;
    }
  }
  else if (/^[+-/*]+$/.test(e.target.textContent))
  {
      if (storedNumber !== "")
      {
        if (operator === "")
        {
          operator = e.target.textContent;
          displayValue = "";
          if (nextNumber === "")
          {
            nextNumber = storedNumber;
          }
        }
        else
        {
          runningTotal = operate(operator, Number(storedNumber), Number(nextNumber));
          displayValue = runningTotal;
          display.textContent = displayValue;
          displayValue = "";
          storedNumber = runningTotal;
          operator = e.target.textContent;
        }
      }
  }
  else if (e.target.textContent === "Enter")
  {
    if (operator !== "" && nextNumber !== "")
    {
      runningTotal = operate(operator, Number(storedNumber), Number(nextNumber));
      displayValue = runningTotal;
      display.textContent = displayValue;
      displayValue = "";
      storedNumber = runningTotal;
      operator = "";
    }
  }
  if (display.textContent >= maxDisplayableNumber)
{
  display.textContent = "OVERFLOW";
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
  storedNumber = "";
  nextNumber = "";
  runningTotal = "";
  operator = "";
  display.textContent = displayValue;
};

keys.forEach(key => key.addEventListener("click",(e) =>
{
  return updateDisplay(e);
}));


