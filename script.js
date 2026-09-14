let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let firstNumber;
let operation;
let secondNumber;
let justCalculated = false;

function calculate() {
    switch (operation) {
        case "+":
            display.value = firstNumber + secondNumber;
            break;

        case "-":
            display.value = firstNumber - secondNumber;
            break;

        case "*":
            display.value = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                display.value = "Cannot divide by zero";
            } else {
                display.value = firstNumber / secondNumber;
            }
            break;
    }
}

function clearCalculator() {
    display.value = "";
    firstNumber = undefined;
    operation = undefined;
    secondNumber = undefined;
    justCalculated = false;
}

function handleNumber(value) {
    if (justCalculated) {
        display.value = value;
        firstNumber = Number(value);
        operation = undefined;
        secondNumber = undefined;
        justCalculated = false;
        return;
    }

    display.value = display.value + value;

    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = Number(value);
        } else {
            firstNumber = Number(String(firstNumber) + value);
        }
    } else {
        if (secondNumber === undefined) {
            secondNumber = Number(value);
        } else {
            secondNumber = Number(String(secondNumber) + value);
        }
    }
}

function handleOperator(value) {
    if (justCalculated) {
        firstNumber = Number(display.value);
        secondNumber = undefined;
        justCalculated = false;
    }

    operation = value;
    display.value = display.value + value;
}

for (let button of buttons) {
    button.addEventListener("click", function(event) {
        let value = event.target.value;

        if (["+", "-", "*", "/"].includes(value)) {
            handleOperator(value);

        } else if (!isNaN(value)) {
            handleNumber(value);

        } else if (value === "=") {
            calculate();
            justCalculated = true;

        } else if (value === "C") {
            clearCalculator();
        }
    });
}
