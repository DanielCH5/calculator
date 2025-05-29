const numberButtons = document.querySelectorAll('.numberButton');
const display = document.querySelector('.display');
const addButton = document.querySelector('.addButton');
const subtractButton = document.querySelector('.subtractButton');
const multiplyButton = document.querySelector('.multiplyButton');
const divideButton = document.querySelector('.divideButton');
const sumButton = document.querySelector('.sumButton');
const clearButton = document.querySelector('.clearButton');

function add(a, b) {
  return a + b;
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

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case add:
      console.log(add(firstNumber, secondNumber));
      break;

    case subtract:
      console.log(subtract(firstNumber, secondNumber));
      break;

    case multiply:
      console.log(multiply(firstNumber, secondNumber));
      break;

    case divide:
      console.log(divide(firstNumber, secondNumber));
      break;

    default:
      console.log("Please enter the values");
      break;
  }
}


