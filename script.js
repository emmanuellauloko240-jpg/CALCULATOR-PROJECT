let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let firstNumber;
let operation;
let secondNumber;
let justCalculated = false;

function calculate() {
    let first = Number(firstNumber);
    let second = Number(secondNumber);

    switch (operation) {
        case "+":
            display.value = first + second;
            break;

        case "-":
            display.value = first - second;
            break;

        case "*":
            display.value = first * second;
            break;

        case "/":
            if (second === 0) {
                display.value = "Cannot divide by zero";
            } else {
                display.value = first / second;
            }
            break;

        case "%":
            display.value = first % second
            break;

        case "^":
            display.value = first ** second;
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
        firstNumber = value;
        operation = undefined;
        secondNumber = undefined;
        justCalculated = false;
        return;
    }

    if (operation === undefined) {

        if (firstNumber === undefined) {

            if (value === ".") {
                firstNumber = "0.";
                display.value = "0.";
            } else {
                firstNumber = value;
                display.value = value;
            }

        } else {

            if (value === "." && String(firstNumber).includes(".")) {
                return;
            }

            firstNumber = String(firstNumber) + value;
            display.value = String(display.value) + value;
        }

    } else {

        if (secondNumber === undefined) {

            if (value === ".") {
                secondNumber = "0.";
                display.value = String(display.value) + "0.";
            } else {
                secondNumber = value;
                display.value = String(display.value) + value;
            }

        } else {

            if (value === "." && String(secondNumber).includes(".")) {
                return;
            }

            secondNumber = String(secondNumber) + value;
            display.value = String(display.value) + value;
        }
    }
}

function handleOperator(value) {
    if (justCalculated) {
        firstNumber = display.value;
        secondNumber = undefined;
        justCalculated = false;
    }

    operation = value;
    display.value = String(display.value) + value;
}

for (let button of buttons) {

    button.addEventListener("click", function(event) {

        let value = event.target.value;

        if (["+", "-", "*", "/", "^","%"].includes(value)) {
            handleOperator(value);

        } else if (!isNaN(value) || value === ".") {
            handleNumber(value);

        } else if (value === "=") {
            calculate();
            justCalculated = true;

        } else if (value === "C") {
            clearCalculator();
        }
    });
}