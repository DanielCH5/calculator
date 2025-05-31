const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clearButton");
const sumButton = document.querySelector(".sumButton");
const addButton = document.querySelector(".addButton");
const subtractButton = document.querySelector(".subtractButton");
const multiplyButton = document.querySelector(".multiplyButton");
const divideButton = document.querySelector(".divideButton");

let operatorAdded = false;
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
//Adds event listeners to the number buttons and updates the display
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    if (!firstNumber) {
      display.textContent += numberButton.textContent;
      firstNumber = display.textContent;
    } else {
      if (operatorAdded) {
        if (!secondNumber) {
          display.textContent += numberButton.textContent;
          secondNumber = numberButton.textContent;
        } else {
          display.textContent += numberButton.textContent;
          secondNumber += numberButton.textContent;
        }
      } else{
          display.textContent += numberButton.textContent;
          firstNumber += numberButton.textContent;
      }
    }
  });
});

addButton.addEventListener("click", () => {
  operatorAdded = true;
  display.textContent += ` ${addButton.textContent} `;
  operator = 'add';
});
subtractButton.addEventListener("click", () => {
  operatorAdded = true;
  display.textContent += ` ${subtractButton.textContent} `;
  operator = 'subtract';
});
multiplyButton.addEventListener("click", () => {
  operatorAdded = true;
  display.textContent += ` ${multiplyButton.textContent} `;
  operator = 'multiply';
});
divideButton.addEventListener("click", () => {
  operatorAdded = true;
  display.textContent += ` ${divideButton.textContent} `;
  operator = 'divide';
});

sumButton.addEventListener('click', () =>{
    operate(firstNumber, operator, secondNumber);
})
