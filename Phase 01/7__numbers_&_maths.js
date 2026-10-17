// ==================================================================================================================================================
// ================================================================ NUMBERS & MATHS =================================================================
// ==================================================================================================================================================

// 1. Round `4.7` using `Math.round()`.
let givenNumber_1 = 4.7;

console.log(`Round of ${givenNumber_1} is: ${Math.round(givenNumber_1)}`);
console.log();

// ==================================================================================================================================================
// 2. Find the square root of 81.
let givenNumber_2 = 81;

console.log(`Square root of ${givenNumber_2} is: ${Math.sqrt(givenNumber_2)}`);
console.log();

// ==================================================================================================================================================
// 3. Find the maximum number from `10, 20, 5, 99`.
let givenNumbers_3 = [10, 20, 5, 99];

console.log(`Maximum number from (${givenNumbers_3}) is: ${Math.max(...givenNumbers_3)}`);
console.log();

// ==================================================================================================================================================
// 4. Generate a random number between 1 and 10.
let randomNumber_4 = Math.floor(Math.random()*10 + 1);

console.log(`Random Number from 1 and 10 is: ${randomNumber_4}`);
console.log();

// ==================================================================================================================================================
// 5. Convert `"99.99"` into an integer.
let givenString_5 = "99.99";

let integerValue_5 = parseInt(givenString_5);

console.log(`Converted integer value is: ${integerValue_5}`);
console.log(`Type of ${integerValue_5} is: ${typeof integerValue_5}`);
console.log();

// ==================================================================================================================================================
// 6. Check whether `25` is an integer or not.
let givenValue_6 = 25;

console.log(`Type of ${givenValue_6} is: ${typeof(givenValue_6)}`);
console.log();

// ==================================================================================================================================================
// 7. Use `toFixed(2)` on `3.141592`.
let givenValue_7 = 3.141592;

let resultedNumber_7 = givenValue_7.toFixed(2);

console.log(`Final Output is: ${resultedNumber_7}`);
console.log();

// ==================================================================================================================================================
// 8. Round 6.2 to the nearest whole number.
let givenNumber_8 = 6.2;

console.log(`Nearest whole number from ${givenNumber_8} is: ${Math.round(givenNumber_8)}`);
console.log();

// ==================================================================================================================================================
// 9. Find the square root of 225.
let givenNumber_9 = 225;

console.log(`Square root of ${givenNumber_9} is: ${Math.sqrt(givenNumber_9)}`);
console.log();

// ==================================================================================================================================================
// 10. Find the largest value among 7, 42, 19, 3.
let givenArray_10 = [7, 42, 19, 3];

console.log(`Largest number from ${givenArray_10} is: ${Math.max(...givenArray_10)}`);
console.log();

// ==================================================================================================================================================
// 11. Produce a random number between 1 and 50.
let randomNumber_11 = Math.floor(Math.random() * 50 + 1);

console.log(`Random number from 1 and 50 is: ${randomNumber_11}`);
console.log();

// ==================================================================================================================================================
// 12. Turn the string "12.49" into a plain integer.
let givenString_12 = "12.49";

let plainInteger_12 = parseInt(givenString_12);

console.log(`${givenString_12} into integer is: ${plainInteger_12}`);
console.log();

// ==================================================================================================================================================
// 13. Determine whether 18.0 counts as an integer.
let givenInteger_13 = 18.0;

console.log(`Type of ${givenInteger_13} is: ${typeof(givenInteger_13)}`);
console.log();

// ==================================================================================================================================================
// 14. Apply toFixed(3) to the number 2.71828.
let givenNumber_14 = 2.71828;

console.log(`Final output is: ${givenNumber_14.toFixed(2)}`);
console.log();