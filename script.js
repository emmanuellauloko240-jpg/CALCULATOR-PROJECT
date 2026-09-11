console.log("JavaScript connected!!!");

let number1 = 10;
let number2 = 5;
console.log(number1+number2);
let display = document.getElementById("display")
let seven = document.getElementById("seven")
let buttons = document.querySelectorAll("button")
let firstNumber;
let operation;
let secondNumber;

for (let button of buttons){
    button.addEventListener("click",function(event) {
        display.value = display.value + event.target.value;
        if (["+","-","*","/"].includes(event.target.value)){
            operation = event.target.value
        }
        if (!isNaN(event.target.value)){
            if (operation === undefined){
                if (firstNumber === undefined) {
                    firstNumber = Number(event.target.value)
                }else{
                    firstNumber = event.target.value + Number(event.target.value)
                    }
            
            }else{
            secondNumber = Number(event.target.value)
        }
    }
        if (event.target.value === "="){
            if (operation === "+"){
                display.value = firstNumber + secondNumber
        }
            if (operation === "-"){
                display.value = firstNumber - secondNumber
        }
            if (operation === "*"){
                display.value = firstNumber * secondNumber
        }
            if (operation === "/"){
                display.value = firstNumber / secondNumber
        }
        
         
            

            firstNumber = undefined;
            operation = undefined;
            secondNumber = undefined;
            console.log(firstNumber);
            console.log(operation);
            console.log(secondNumber);
        }else{

        }
    })
}

