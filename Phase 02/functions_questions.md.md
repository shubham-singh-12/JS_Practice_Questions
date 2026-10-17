# FUNCTIONS

## Beginners

1. Create a function named `greet` that prints `"Hello World"`.
2. Create a function `add(a, b)` that returns the sum.
3. Write a function to calculate the square of a number.
4. Create a function that checks whether a number is even or odd.
5. Write a function that converts Celsius to Fahrenheit.
6. Create a function with default parameter `"Guest"`.
7. Write a function that returns the greater of two numbers.
8. Create a function to calculate area of rectangle.
9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
10. Create a function to reverse a string.
11. Create a function.
    > - Function name: greet(name)
    > - Expected Output:
    > - Hello Shubham

<hr>

12. Create a function that returns the sum
    > - Function name: add(a, b)
    > - Example: add(10, 20)
    > - Output: 30

<hr>

13. Create a function that returns the square of a number
    > - Function name: square(num)
    > - Example: square(5)
    > - Output: 25

<hr>

14. Create a function that returns true if the number is even, otherwise false
    > - Function name: isEven(num)

<hr>

15. Create a function
    > - Function name: greet(name = "Guest")
    > - Example: greet()
    > - Output: Hello Guest

<hr>

16. Create a function for weather application
    > - Function name: convertTemp(celsius)
    > - Formula: (celsius \* 9/5) + 32

<hr>

17. Convert this function into an arrow function.
    > - function multiply(a, b) {
    > - return a \* b;
    > - }

<hr><hr>
<br>

## Intermediate

1. Write a function expression for multiplication.
2. Convert a normal function into an arrow function.
3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
4. Write a function that counts vowels in a string.
5. Create a function that checks if a string is palindrome.
6. Write a callback function example using `setTimeout`.
7. Create a higher-order function that executes another function twice.
8. Write a function that returns another function.
9. Create a pure function for subtraction.
10. Create an impure function using global variable modification.
11. Create a function that take input, perform calculation, return result.
    > - Function name: calculateDiscount(price)
    > - Rule: 10% discount
    > - Input: 500
    > - Output: 450

<hr>

12. Create a function that returns the largest number.
    > - Function name: findLargest(a, b, c);
    > - Example: findLargest(10, 50, 20);
    > - Output: 50

<hr>

13. Create a function to reverse a string.
    > - Function name: reverseString(str)
    > - Example: reverseString("hello")
    > - Output: "olleh"

<hr>

14. Create a function to count vowels
    > - Function name: countVowels(str)
    > - Example: countVowels("javascript")
    > - Output: 3

<hr>

15. Create a function to generate username
    > - Function name: generateUsername(name)
    > - Input: "Shubham Singh"
    > - Output: "shubham_singh"

<hr>

16. Create a function for dynamic sum
    > - Function name: sum(...numbers)
    > - Example: sum(1, 2, 3, 4)
    > - Output: 10

<hr>

17. Create a function for login validation
    > - Function name: login(username, password)
    > - Rules:
    >     - username === "admin"
    >     - password === "1234"
    >     - Return: "Login Successful" OR "Invalid Credentials"

<hr><hr>
<br>

## Advanced

1. Write a recursive function for factorial.
2. Write recursive Fibonacci function.
3. Create a function that finds power using recursion.
4. Create an IIFE that prints `"Executed"`.
5. Write a function that memoizes factorial calculation.
6. Create a closure counter function.
7. Write a function currying example for addition.
8. Create debounce function logic.
9. Create throttle function logic.
10. Write a function that executes only once.
11. Create custom implementation of `map`.
12. Create custom implementation of `filter`.
13. Create custom implementation of `reduce`.
14. Create custom `forEach`.
15. Explain Output:

```JavaScript
function test() {
    return;
    console.log("Hello");
}
console.log(test());
```

<hr>

16. Create a function to find factorial
    > - Function name: factorial(n)
    > - Example: factorial(5)
    > - Output: 120

<hr>

17. Create a function to check Palindrome
    > - Function name: isPalindrome(str)
    > - Example: isPalindrome("madam")
    > - Output: true

<hr>

18. Create a function to check password strength
    > - Function name: checkPassword(password)
    > - Return: "Strong" OR "Weak"

<hr>

19. Create a function to returning function
    > - Function name: makeMultiplier(multiplier)
    > - Example:
    > - let double = makeMultiplier(2);
    > - double(10);
    > - Output: 20

<hr>

20. Create a callback function
    > - Function name: processUser(name, callback)
    > - Example: processUser("Shubham", welcomeUser);
    > - Output:
    > - Processing User...
    > - Welcome Shubham

<hr>

21. Create a function to generate shopping bill
    > - Function name: generateBill(item)
    > - Example:

```JavaScript
[
    {name: "Mouse", price: 500},
    {name: "Keyboard", price: 1000},
    {name: "Monitor", price: 10000}
]
```
> - Output:
> - Total: 11500

<hr><hr>
<br>

## Advanced Functional Programming

1. Implement compose function.
2. Implement pipe function.
3. Create custom event emitter.
4. Build promise-like function logic.
5. Create retry mechanism function.

<hr><hr>
<br>

## Final Challenge

1. Build complete Notes App logic.
2. Build Student Dashboard logic.
3. Build Quiz App data handling.
4. Build E-commerce Cart System.
5. Build Mini Netflix Watchlist System.

<hr><hr>
<br>

## Real World

1. Create authentication validation functions.
2. Create OTP generator.
3. Create password strength checker.
4. Build leaderboard system.
5. Create attendance management logic.