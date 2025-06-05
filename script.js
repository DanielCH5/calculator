const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clearButton");
const sumButton = document.querySelector(".sumButton");
const addButton = document.querySelector(".addButton");
const subtractButton = document.querySelector(".subtractButton");
const multiplyButton = document.querySelector(".multiplyButton");
const divideButton = document.querySelector(".divideButton");
const floatButton = document.querySelector('#floatButton');
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
let floatAdded = false;
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
  if (floatAdded === true && number === '.') {
    return;
  } else {
    if (operatorAdded && !secondNumber) {
      if (number === '.' && !floatAdded) {
        return;
      }
      secondNumber = number;
      display.textContent += number;
      console.log(`This is #2 ${secondNumber}`);
    } else if (operatorAdded && secondNumber) {
      if (number === '.' && !floatAdded) {
        floatAdded = true;
        secondNumber += number;
        display.textContent += number;
        console.log(`This is #2 ${secondNumber}`);
      } else {
        secondNumber += number;
        display.textContent += number;
        console.log(`This is #2 ${secondNumber}`);
      }
    }
    if (!operatorAdded && !firstNumber) { //For the first digit in the display
      if (number === ".") {
        clearAll();
        display.textContent = 'Please enter a NUMBER, not a dot.'
        return;
      } else {
        firstNumber = number;
        console.log(`This is #1 ${firstNumber}`);
        display.textContent = firstNumber;
      }
    } else if (!operatorAdded && !secondNumber) { //For other digits belonging to the first number

      if (number === '.' && !floatAdded) {
        floatAdded = true;
        firstNumber += number;
        display.textContent += number;
        console.log(`This is #1 x2 ${firstNumber}`);
      } else {
        firstNumber += number;
        display.textContent += number;
        console.log(`This is #1 x2 ${firstNumber}`);
      }
    }
  }
  //If an operator has been added, we are no longer working with the first number, but instead the second.

}

function detectNumberNumPad(eventKey) {
  if (resultDisplayed && !operatorAdded) {
    clearAll();
  }
  const number = eventKey;
  if (floatAdded === true && number === '.') {
    return;
  } else {
    if (operatorAdded && !secondNumber) {
      if (number === '.' && !floatAdded) {
        return;
      }
      secondNumber = number;
      display.textContent += number;
      console.log(`This is #2 ${secondNumber}`);
    } else if (operatorAdded && secondNumber) {
      if (number === '.' && !floatAdded) {
        floatAdded = true;
        secondNumber += number;
        display.textContent += number;
        console.log(`This is #2 ${secondNumber}`);
      } else {
        secondNumber += number;
        display.textContent += number;
        console.log(`This is #2 ${secondNumber}`);
      }
    }
    if (!operatorAdded && !firstNumber) { //For the first digit in the display
      if (number === ".") {
        clearAll();
        display.textContent = 'Please enter a NUMBER, not a dot.'
        return;
      } else {
        firstNumber = number;
        console.log(`This is #1 ${firstNumber}`);
        display.textContent = firstNumber;
      }
    } else if (!operatorAdded && !secondNumber) { //For other digits belonging to the first number

      if (number === '.' && !floatAdded) {
        floatAdded = true;
        firstNumber += number;
        display.textContent += number;
        console.log(`This is #1 x2 ${firstNumber}`);
      } else {
        firstNumber += number;
        display.textContent += number;
        console.log(`This is #1 x2 ${firstNumber}`);
      }
    }
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
  floatAdded = false;
}
function checkForFloat(result) {
  const stringedNumber = result.toString();

  return stringedNumber.includes('.') ? true : false;
}
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    detectNumber(button);
  });
});

window.addEventListener('keydown', (event) => {
  if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "0" ||
    event.key === "." ||
    event.key === "," //Take account for different keyboards
  ) {
    if (event.key === ',') {
      const dot = ".";
      detectNumberNumPad(dot);
    } else {
      detectNumberNumPad(event.key);
      console.log(event.key);
    }
  }

  if (event.key === "Enter") {
    if (!secondNumber) {
      return;
    }
    operate(firstNumber, operator, secondNumber);
    console.log(firstNumber, operator, secondNumber, result);
    if (!result) {
      clearAll();
      display.textContent = "You can't divide by 0...";
      return;
    }
    if (!firstNumber && !secondNumber) {
      clearAll();
      display.textContent = "Please enter some values";
    } else {
      let isInt = (result) => result % 1 === 0;
      if (!isInt(result)) {
        display.textContent = parseFloat(result).toFixed(2);
        console.log("foo");
        floatAdded = true;

      } else {
        display.textContent = result;
        floatAdded = false;
      }
      result = 0;
      resultDisplayed = true;
      operatorAdded = 0;
    }
  }

  if (event.key === "+") {
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
        display.textContent = newString += ` ${event.key} `;
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
    floatAdded = false; //Removes the floatAdded so it can be added to the second number
    display.textContent += ` ${event.key} `;
    operator = "add";
  }

  if (event.key === "-") {
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
        display.textContent = newString += ` ${event.key} `;
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
    floatAdded = false; //Removes the floatAdded so it can be added to the second number
    display.textContent += ` ${event.key} `;
    operator = "subtract";
  }

  if (event.key === "*") {
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
        display.textContent = newString += ` ${event.key} `;
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
    floatAdded = false; //Removes the floatAdded so it can be added to the second number
    display.textContent += ` ${event.key} `;
    operator = "multiply";
  }

  if(event.key === "/") {
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
      display.textContent = newString += ` ${event.key} `;
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
  floatAdded = false; //Removes the floatAdded so it can be added to the second number
  display.textContent += ` ${event.key} `;
  operator = "divide";
  }

  if (event.key === "Delete") {
    clearAll();
  }

  
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
  floatAdded = false; //Removes the floatAdded so it can be added to the second number
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
  floatAdded = false; //Removes the floatAdded so it can be added to the second number
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
  floatAdded = false; //Removes the floatAdded so it can be added to the second number
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
  floatAdded = false; //Removes the floatAdded so it can be added to the second number
  display.textContent += ` ${divideButton.textContent} `;
  operator = "divide";
});

sumButton.addEventListener("click", () => {
  if (!secondNumber) {
    return;
  }
  operate(firstNumber, operator, secondNumber);
  console.log(firstNumber, operator, secondNumber, result);
  if (!result) {
    clearAll();
    display.textContent = "You can't divide by 0...";
    return;
  }
  if (!firstNumber && !secondNumber) {
    clearAll();
    display.textContent = "Please enter some values";
  } else {
    let isInt = (result) => result % 1 === 0;
    if (!isInt(result)) {
      display.textContent = parseFloat(result).toFixed(2);
      console.log("foo");
      floatAdded = true;

    } else {
      display.textContent = result;
      floatAdded = false;
    }
    result = 0;
    resultDisplayed = true;
    operatorAdded = 0;

  }
});
clearButton.addEventListener("click", () => {
  clearAll();
});
