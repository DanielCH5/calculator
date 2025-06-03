const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clearButton");
const sumButton = document.querySelector(".sumButton");
const addButton = document.querySelector(".addButton");
const subtractButton = document.querySelector(".subtractButton");
const multiplyButton = document.querySelector(".multiplyButton");
const divideButton = document.querySelector(".divideButton");

let operatorAdded = 0;
function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;
let result;
let resultDisplayed = false;


function operate(numberOne, operator, numberTwo) {
  switch (operator) {
    case 'add':
      result = add(numberOne, numberTwo);
      firstNumber = result;
      secondNumber = 0;
      operatorAdded = 0;
      break;

    case 'subtract':
      result = subtract(numberOne, numberTwo);
      firstNumber = result;
      secondNumber = 0;
      operatorAdded = 0;
      break;

    case 'multiply':
      result = multiply(numberOne, numberTwo);
      firstNumber = result;
      secondNumber = 0;
      operatorAdded = 0;
      break;

    case 'divide':
      result = divide(numberOne, numberTwo);
      firstNumber = result;
      secondNumber = 0;
      operatorAdded = 0;
      break;

    default:
      display.textContent = 'Please enter a value';
      break;
  }
  return result;
}
//Find out which number was pressed and save it as a variable
function detectNumber(numberButton) {
  if(resultDisplayed && !operatorAdded){
    clearAll();
  }
  const number = numberButton.textContent;
  //If an operator has been added, we are no longer working with the first number, but instead the second.
  if (operatorAdded && !secondNumber) {
    secondNumber = number;
    display.textContent += number;
    console.log(`This is #2 ${secondNumber}`)
  } else if (operatorAdded && secondNumber){
    secondNumber += number;
    display.textContent += number;
    console.log(`This is #2 ${secondNumber}`)
  }
  if (!operatorAdded && !firstNumber) {
    firstNumber = number;
    console.log(`This is #1 ${firstNumber}`);
    display.textContent = firstNumber;
  } else if (!operatorAdded && !secondNumber){
    firstNumber += number;
    display.textContent += number;
    console.log(`This is #1 x2 ${firstNumber}`);
  }
}
//Clears display and resets numbers
function clearAll(){
  display.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  resultDisplayed = false;
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    detectNumber(button);
  })
})

addButton.addEventListener("click", () => {
  if(!firstNumber){
    display.textContent = 'Please enter a number';
    return;
  }
  if(operatorAdded){
    firstNumber = operate(firstNumber, operator, secondNumber);
  }
  operatorAdded++;
  display.textContent += ` ${addButton.textContent} `;
  operator = 'add';
});
subtractButton.addEventListener("click", () => {
  if(!firstNumber){
    display.textContent = 'Please enter a number';
    return;
  }
  if(operatorAdded){
    firstNumber = operate(firstNumber, operator, secondNumber);
  }
  operatorAdded++;
  display.textContent += ` ${subtractButton.textContent} `;
  operator = 'subtract';
});
multiplyButton.addEventListener("click", () => {
  if(!firstNumber){
    display.textContent = 'Please enter a number';
    return;
  }
  if(operatorAdded){
    firstNumber = operate(firstNumber, operator, secondNumber);
  }
  operatorAdded++;
  display.textContent += ` ${multiplyButton.textContent} `;
  operator = 'multiply';
});
divideButton.addEventListener("click", () => {
  if(!firstNumber){
    display.textContent = 'Please enter a number';
    return;
  }
  if(operatorAdded){
    firstNumber = operate(firstNumber, operator, secondNumber);
  }
  operatorAdded++;
  display.textContent += ` ${divideButton.textContent} `;
  operator = 'divide';
});

sumButton.addEventListener('click', () => {
  if(!firstNumber && !secondNumber){
    display.textContent = 'Please enter some values';
  } else {
    operate(firstNumber, operator, secondNumber);
    display.textContent = result;
    result = 0;
    resultDisplayed = true;
  }
})
clearButton.addEventListener('click', () => {
  clearAll();
})