while True:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        operation = input("Enter operation:(+,-,/,*) ")
        
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 == 0:
                    result = "Error: Cannot divide by zero"
            else:
                result = num1 / num2
        else:
            result = "Invalid operation"

    # except ValueError:
    #     print("that's not a valid number. Please enter digits only.")
    
    again = input("Do you want to calculate again? (yes/no): ").lower()
    if again == "no" or again == "n":
        break