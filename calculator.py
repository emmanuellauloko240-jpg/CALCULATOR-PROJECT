while True:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        operation = input("Enter operation:(+-/*) ")
        if operation == "+":
            print("Result: ", num1 + num2)
        elif operation == "-":
            print("Result: ", num1 - num2)
        elif operation == "*":
            print("Result: ", num1 * num2)
        elif operation == "/":
            if num2 == 0:
                print("Error: Cannot divide by zero")
            else:
                print("Result:", num1 / num2)
        else:
            print("Invalid operation")
    again = input("Do you want to calculate again? (yes/no): ").lower()
    if again == "no" or again == "n":
        break
