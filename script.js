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

function operate(numberOne, operator, numberTwo) {
  switch (operator) {
    case 'add':
      display.textContent = add(numberOne, numberTwo);
      firstNumber = 0;
      secondNumber = 0;
      operatorAdded = false;
      break;

    case 'subtract':
      display.textContent = subtract(numberOne, numberTwo);
      firstNumber = 0;
      secondNumber = 0;
      operatorAdded = false;
      break;

    case 'multiply':
      display.textContent = multiply(numberOne, numberTwo);
      firstNumber = 0;
      secondNumber = 0;
      operatorAdded = false;
      break;

    case 'divide':
      display.textContent = divide(numberOne, numberTwo);
      firstNumber = 0;
      secondNumber = 0;
      operatorAdded = false;
      break;

    default:
      display.textContent = 'Please enter a value';
      break;
  }
}
//Find out which number was pressed and save it as a variable
function detectNumber(numberButton) {
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
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    detectNumber(button);
  })
})

addButton.addEventListener("click", () => {
  operatorAdded++;
  display.textContent += ` ${addButton.textContent} `;
  operator = 'add';
});
subtractButton.addEventListener("click", () => {
  operatorAdded++;
  display.textContent += ` ${subtractButton.textContent} `;
  operator = 'subtract';
});
multiplyButton.addEventListener("click", () => {
  operatorAdded++;
  display.textContent += ` ${multiplyButton.textContent} `;
  operator = 'multiply';
});
divideButton.addEventListener("click", () => {
  operatorAdded++;
  display.textContent += ` ${divideButton.textContent} `;
  operator = 'divide';
});

sumButton.addEventListener('click', () => {
    operate(firstNumber, operator, secondNumber);
})
//Clears display and resets numbers
clearButton.addEventListener('click', () => {
  display.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
})