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
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a == 0 || b == 0) {
    return "naughty";
  } else {
    return a / b;
  }
}

let firstNumber;
let operator;
let secondNumber;
let result;
let resultDisplayed = false;

function operate(numberOne, operator, numberTwo) {
  //Checks for division with 0
  if (result === "naughty") {
    return;
  }
  switch (operator) {
    case "add":
      console.log(numberOne, operator, numberTwo);
      result = add(numberOne, numberTwo);
      firstNumber = result;
      display.textContent = result;
      secondNumber = undefined;
      break;

    case "subtract":
      result = subtract(numberOne, numberTwo);
      firstNumber = result;
      display.textContent = result;
      secondNumber = undefined;
      operatorAdded = 0;
      break;

    case "multiply":
      result = multiply(numberOne, numberTwo);
      firstNumber = result;
      display.textContent = result;
      secondNumber = undefined;
      operatorAdded = 0;
      break;

    case "divide":
      result = divide(numberOne, numberTwo);
      if (result === "naughty") {
        clearAll();
        display.textContent = "Stop dividing by 0";
        console.log(firstNumber, result, secondNumber);
      } else {
        firstNumber = result;
        display.textContent = result;
        secondNumber = undefined;
        operatorAdded = 0;
      }
      break;

    default:
      display.textContent = "Please enter a value";
      break;
  }
  return result;
}
//Find out which number was pressed and save it as a variable
function detectNumber(numberButton) {
  if (resultDisplayed && !operatorAdded) {
    clearAll();
  }
  const number = numberButton.textContent;
  //If an operator has been added, we are no longer working with the first number, but instead the second.
  if (operatorAdded && !secondNumber) {
    secondNumber = number;
    display.textContent += number;
    console.log(`This is #2 ${secondNumber}`);
  } else if (operatorAdded && secondNumber) {
    secondNumber += number;
    display.textContent += number;
    console.log(`This is #2 ${secondNumber}`);
  }
  if (!operatorAdded && !firstNumber) {
    firstNumber = number;
    console.log(`This is #1 ${firstNumber}`);
    display.textContent = firstNumber;
  } else if (!operatorAdded && !secondNumber) {
    firstNumber += number;
    display.textContent += number;
    console.log(`This is #1 x2 ${firstNumber}`);
  }
}
//Clears display and resets numbers
function clearAll() {
  display.textContent = "";
  firstNumber = 0;
  secondNumber = undefined;
  result = undefined;
  resultDisplayed = false;
  operatorAdded = 0;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    detectNumber(button);
  });
});

addButton.addEventListener("click", () => {
  if (!firstNumber) {
    clearAll();
    display.textContent = "Please enter a number";
    return;
  }
  if (operatorAdded) {
    if (secondNumber === undefined && operator === "add") {
      return;
    } else if (secondNumber === undefined && operator !== "add") {
      let newString = display.textContent.slice(0, -3);
      display.textContent = newString += ` ${addButton.textContent} `;
      operator = "add";
      return;
    }
    firstNumber = operate(firstNumber, operator, secondNumber);
    console.log(firstNumber, operator, secondNumber);
  }
  if (!firstNumber) {
    return;
  }
  operatorAdded++;
  display.textContent += ` ${addButton.textContent} `;
  operator = "add";
});
subtractButton.addEventListener("click", () => {
  if (!firstNumber) {
    clearAll();
    display.textContent = "Please enter a number";
    return;
  }
  if (operatorAdded) {
    if (secondNumber === undefined && operator === "subtract") {
      return;
    } else if (secondNumber === undefined && operator !== "subtract") {
      let newString = display.textContent.slice(0, -3);
      display.textContent = newString += ` ${subtractButton.textContent} `;
      operator = "subtract";
      return;
    }
    firstNumber = operate(firstNumber, operator, secondNumber);
    console.log(firstNumber, operator, secondNumber);
  }
  if (!firstNumber) {
    return;
  }
  operatorAdded++;
  display.textContent += ` ${subtractButton.textContent} `;
  operator = "subtract";
});
multiplyButton.addEventListener("click", () => {
  if (!firstNumber) {
    clearAll();
    display.textContent = "Please enter a number";
    return;
  }
  if (operatorAdded) {
    if (secondNumber === undefined && operator === "multiply") {
      return;
    } else if (secondNumber === undefined && operator !== "multiply") {
      let newString = display.textContent.slice(0, -3);
      display.textContent = newString += ` ${multiplyButton.textContent} `;
      operator = "multiply";
      return;
    }
    firstNumber = operate(firstNumber, operator, secondNumber);
    console.log(firstNumber, operator, secondNumber);
  }
  if (!firstNumber) {
    return;
  }
  operatorAdded++;
  display.textContent += ` ${multiplyButton.textContent} `;
  operator = "multiply";
});
divideButton.addEventListener("click", () => {
  if (!firstNumber) {
    clearAll();
    display.textContent = "Please enter a number";
    return;
  }
  if (operatorAdded) {
    if (secondNumber === undefined && operator === "divide") {
      return;
    } else if (secondNumber === undefined && operator !== "divide") {
      let newString = display.textContent.slice(0, -3);
      display.textContent = newString += ` ${divideButton.textContent} `;
      operator = "divide";
      return;
    }
    firstNumber = operate(firstNumber, operator, secondNumber);
    console.log(firstNumber, operator, secondNumber);
  }
  if (!firstNumber) {
    return;
  }
  operatorAdded++;
  display.textContent += ` ${divideButton.textContent} `;
  operator = "divide";
});

sumButton.addEventListener("click", () => {
  operate(firstNumber, operator, secondNumber);
  if (!result) {
    clearAll();
    display.textContent = "You can't divide by 0...";
    return;
  }
  if (!firstNumber && !secondNumber) {
    clearAll();
    display.textContent = "Please enter some values";
  } else {
    if (!secondNumber) {
      return;
    }
    
    let isInt = (result) => result % 1 === 0;
    if (!isInt(result)) {
      display.textContent = parseFloat(result).toFixed(2);
      console.log("foo");
    } else {
      display.textContent = result;
    }
    result = 0;
    resultDisplayed = true;
    operatorAdded = 0;
  }
});
clearButton.addEventListener("click", () => {
  clearAll();
});
