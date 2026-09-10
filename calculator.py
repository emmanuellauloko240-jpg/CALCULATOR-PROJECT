def calculator(num1, num2, operation):
                if operation == "+":
                    result = num1 + num2
                    # print(result)
                elif operation == "-":
                    result = num1 - num2
                    # print(result)
                elif operation == "*":
                    result = num1 * num2
                    # print(result)
                elif operation == "/":
                    if num2 == 0:
                            result = "Error: Cannot divide by zero"
                    else:
                        result = num1 / num2
                else:
                    result = "Invalid operation"
                return result

while True:

        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        operation = input("Enter operation (-,+,*,/): ")
        answer = calculator(num1,num2,operation)
        print(answer)

        # answer = calculator(____, ____, ____)
        again = input("Do you want to calculate again? (yes/no): ").lower()
        if again == "no" or again == "n":
            break