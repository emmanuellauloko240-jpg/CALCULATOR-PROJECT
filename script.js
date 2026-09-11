console.log("JavaScript connected!!!");

let number1 = 10;
let number2 = 5;
console.log(number1+number2);
let display = document.getElementById("display")
let seven = document.getElementById("seven")
let buttons = document.querySelectorAll("button")
let firstNumber;
let operation;
for (let button of buttons){
    button.addEventListener("click",function(event) {
        display.value = display.value + event.target.value;
        if isNaN(event.target.value)
        if (event.target.value === "="){
    
        }else{

        }
        firstNumber = event.target.value;
    })
}

