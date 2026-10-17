// ==================================================================================================================================================
// =================================================================== OPERATORS ====================================================================
// ==================================================================================================================================================

// 1. Add two numbers and print the result.
let firstNumber_1 = 2;
let secondNumber_1 = 4;

let result_1 = firstNumber_1 + secondNumber_1;

console.log("Total of", firstNumber_1, "and", secondNumber_1, "is:", result_1);
console.log();

// ==================================================================================================================================================
// 2. Find the remainder when 25 is divided by 4.
let givenNumber_2 = 25;
let anotherNumber_2 = 4;

let result_2 = givenNumber_2 % anotherNumber_2;

console.log(
    givenNumber_2,
    "Divided by",
    anotherNumber_2,
    "gives result:",
    result_2,
);
console.log();

// ==================================================================================================================================================
// 3. Find the square of a number using exponent operator.
let userNumber_3 = 4;

let square_4 = userNumber_3 ** 2;

console.log("Square of", userNumber_3, "is:", square_4);
console.log();

// ==================================================================================================================================================
// 4. Increment a variable using `++`.
let userNumber_5 = 5;
userNumber_5++;

console.log("Final result:", userNumber_5);
console.log();

// ==================================================================================================================================================
// 5. Decrement a variable using `--`.
let variable_5 = 5;
variable_5--;

console.log("Final Result:", variable_5);
console.log();

// ==================================================================================================================================================
// 6. Use `+=` operator to increase a variable by 20.
let variable_6 = 5;
variable_6 += 20;

console.log("Final Result:", variable_6);
console.log();

// ==================================================================================================================================================
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
let firstVariable_7 = 5;
let secondVariable_7 = 6;

console.log("1st Variable > 2nd Variable:", firstVariable_7 > secondVariable_7);
console.log("1st Variable < 2nd Variable:", firstVariable_7 < secondVariable_7);
console.log(
    "1st Variable >= 2nd Variable:",
    firstVariable_7 >= secondVariable_7,
);
console.log(
    "1st Variable <= 2nd Variable:",
    firstVariable_7 <= secondVariable_7,
);
console.log();

// ==================================================================================================================================================
// 8. Check if two values are strictly equal using `===`.
let firstValue_8 = "5";
let secondValue_8 = 5;

console.log("1st Value === 2nd Value:", firstValue_8 === secondValue_8);
console.log();

// ==================================================================================================================================================
// 9. Compare `"10"` and `10` using both `==` and `===`.

// ==================================================================================================================================================
// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let firstBooleanVariable_10 = true;
let secondBooleanVariable_10 = false;

// Test for && (AND Operator)
console.log("AND Operator (&&)");
console.log(firstBooleanVariable_10, "&&", firstBooleanVariable_10, "is:", (firstBooleanVariable_10 && firstBooleanVariable_10));
console.log(firstBooleanVariable_10, "&&", secondBooleanVariable_10, "is:", (firstBooleanVariable_10 && secondBooleanVariable_10));
console.log(secondBooleanVariable_10, "&&", firstBooleanVariable_10, "is:", (secondBooleanVariable_10 && firstBooleanVariable_10));
console.log(secondBooleanVariable_10, "&&", secondBooleanVariable_10, "is:", (secondBooleanVariable_10 && secondBooleanVariable_10));

console.log("==========");

// Test for || (OR Operator)
console.log("OR Operator (||)");
console.log(firstBooleanVariable_10, "||", firstBooleanVariable_10, "is:", (firstBooleanVariable_10 || firstBooleanVariable_10));
console.log(firstBooleanVariable_10, "||", secondBooleanVariable_10, "is:", (firstBooleanVariable_10 || secondBooleanVariable_10));
console.log(secondBooleanVariable_10, "||", firstBooleanVariable_10, "is:",(secondBooleanVariable_10 || firstBooleanVariable_10));
console.log(secondBooleanVariable_10, "||", secondBooleanVariable_10, "is:", (secondBooleanVariable_10 || secondBooleanVariable_10));

console.log("==========");

// Test for ! (NOT Operator)
console.log("NOT Operator (!)");
console.log("!", firstBooleanVariable_10, (!firstBooleanVariable_10));
console.log("!", secondBooleanVariable_10, (!secondBooleanVariable_10));

console.log();

// ==================================================================================================================================================
// 11. Multiply two numbers and display the result.
let firstNumber_11 = 2;
let secondNumber_11 = 5;

let finalResult_11 = firstNumber_11 * secondNumber_11;

console.log(
    firstNumber_11,
    "*",
    secondNumber_11,
    "is:",
    firstNumber_11 * secondNumber_11,
);
console.log();

// ==================================================================================================================================================
// 12. Calculate the remainder of 50 divided by 6.
let firstNumber_12 = 50;
let secondNumber_12 = 6;

let remainder_12 = (firstNumber_12 % secondNumber_12);

console.log("Remainder is:", remainder_12);
console.log();

// ==================================================================================================================================================
// 13. Compute the fourth power of a number using the exponent operator.
let userNumber_13 = 2;

let finalResult_13 = userNumber_13 ** 4;

console.log("Final Result is:", finalResult_13);
console.log();

// ==================================================================================================================================================
// 14. Use ++ to bump up a counter variable twice.
let givenNumber_14 = 2;
givenNumber_14++;
givenNumber_14++;

console.log("Final Result:", givenNumber_14);
console.log();

// ==================================================================================================================================================
// 15. Use -- to bring down a counter variable.
let givenNumber_15 = 5;
givenNumber_15--;
givenNumber_15--;

console.log("Final Result:", givenNumber_15);
console.log();

// ==================================================================================================================================================
// 16. Use -= to reduce a variable's value by 25.
let givenNumber_16 = 50;
givenNumber_16 -= 25;

console.log("Final Result:", givenNumber_16);
console.log();

// ==================================================================================================================================================
// 17. Compare two test scores using >, <, >=, and <=.
let firstTestScore_17 = 5;
let secondTestScore_17 = 7;

console.log(firstTestScore_17, ">", secondTestScore_17, "is:", (firstTestScore_17 > secondTestScore_17));
console.log(firstTestScore_17, "<", secondTestScore_17, "is:", (firstTestScore_17 < secondTestScore_17));
console.log(firstTestScore_17, ">=", secondTestScore_17, "is:", (firstTestScore_17 >= secondTestScore_17));
console.log(firstTestScore_17, "<=", secondTestScore_17, "is:", (firstTestScore_17 <= secondTestScore_17));

console.log();

// ==================================================================================================================================================
// 18. Use === to check strict equality between "0" and 0.
let firstNumber_18 = "0";
let secondNumber_18 = 0;

let isStrictlyEqual_18 = (firstNumber_18 === secondNumber_18);

console.log(firstNumber_18, "===", secondNumber_18, "is:", (isStrictlyEqual_18));
console.log();

// ==================================================================================================================================================
// 19. Compare NaN with itself using == and ===.
let firstGivenNumber_19 = NaN;
let secondGivenNumber_19 = NaN;

let isEqual_19 = (firstGivenNumber_19 == secondGivenNumber_19);
let isStrictEqual_19 = (firstGivenNumber_19 === secondGivenNumber_19);

console.log(firstGivenNumber_19, "==", secondGivenNumber_19, "is:", isEqual_19);
console.log(firstGivenNumber_19, "===", secondGivenNumber_19, "is:", isStrictEqual_19);
console.log();

// ==================================================================================================================================================
// 20. Declare two booleans and check the outcome of &&, ||, and ! separately.
let firstBoolean_20 = true;
let secondBoolean_20 = false;

// Check for && (AND Operator)
console.log("AND Operator (&&)");
console.log(firstBoolean_20, "&&", firstBoolean_20, "is:", (firstBoolean_20 && firstBoolean_20));
console.log(firstBoolean_20, "&&", secondBoolean_20, "is:", (firstBoolean_20 && secondBoolean_20));
console.log(secondBoolean_20, "&&", firstBoolean_20, "is:", (secondBoolean_20 && firstBoolean_20));
console.log(secondBoolean_20, "&&", secondBoolean_20, "is:", (secondBoolean_20 && secondBoolean_20));

console.log("==========");

// Check for || (OR Operator)
console.log("OR Operator (||)");
console.log(firstBoolean_20, "||", firstBoolean_20, "is:", (firstBoolean_20 || firstBoolean_20));
console.log(firstBoolean_20, "||", secondBoolean_20, "is:", (firstBoolean_20 || secondBoolean_20));
console.log(secondBoolean_20, "||", firstBoolean_20, "is:", (secondBoolean_20 || firstBoolean_20));
console.log(secondBoolean_20, "||", secondBoolean_20, "is:", (secondBoolean_20 || secondBoolean_20));

console.log("==========");

// Check for ! (NOT Operator)
console.log("NOT Operator (!)");
console.log("!", firstBoolean_20, "is:", (!firstBoolean_20));
console.log("!", secondBoolean_20, "is:", (!secondBoolean_20));