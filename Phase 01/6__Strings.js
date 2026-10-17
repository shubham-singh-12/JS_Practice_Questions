// ==================================================================================================================================================
// ==================================================================== STRINGS =====================================================================
// ==================================================================================================================================================

// 1. Create a string and print its length.
let userString_1 = "Shubham Singh";

let stringLength_1 = userString_1.length;

console.log("Length os String is:", stringLength_1);
console.log();

// ==================================================================================================================================================
// 2. Convert a string into uppercase.
let userString_2 = "Shubham Singh";

let uppercaseString_2 = userString_2.toUpperCase();

console.log("Final output is:", uppercaseString_2);
console.log();

// ==================================================================================================================================================
// 3. Convert a string into lowercase.
let userString_3 = "Shubham Singh";

let lowercaseString_3 = userString_3.toLowerCase();

console.log("Final Output is:", lowercaseString_3);
console.log();

// ==================================================================================================================================================
// 4. Check if a string includes the word `"JavaScript"`.
let givenString_4 = "Welcome to JavaScript practice questions";

let finalResult_4 = givenString_4.includes("JavaScript");

console.log("Final Output is:", finalResult_4);
console.log();

// ==================================================================================================================================================
// 5. Extract the word `"World"` from `"Hello World"`.
let givenString_5 = "Hello World";

let extractedWord_5 = givenString_5.slice(6, 12);

console.log("Final Output is:", extractedWord_5);
console.log();

// ==================================================================================================================================================
// 6. Replace `"apple"` with `"mango"` in a sentence.
let givenString_6 = "Favourite fruit is apple";

let replacedWord_6 = givenString_6.replace("apple", "mango");

console.log("Final Output is:", replacedWord_6);
console.log();

// ==================================================================================================================================================
// 7. Split `"HTML,CSS,JS"` into an array.
let givenString_7 = "HTML, CSS, JS";

let arrayConverted_7 = givenString_7.split(",");

console.log("Final Output is:", arrayConverted_7);
console.log();

// ==================================================================================================================================================
// 8. Remove extra spaces from a string.
let givenString_8 = "    This is a String.    ";

let finalString_8 = givenString_8.trim();

console.log("Original String is:", givenString_8);
console.log("Final Output is:", finalString_8);
console.log();

// ==================================================================================================================================================
// 9. Repeat the word `"Hi"` 5 times.
let givenWord_9 = "Hi";

let finalResult_9 = givenWord_9.repeat(5);

console.log("Final Output is:", finalResult_9);
console.log();

// ==================================================================================================================================================
// 10. Print the first character of a string.
let originalString_10 = "Shubham Singh";

let firstCharacter_10 = originalString_10.charAt(0);

console.log("Final Output is:", firstCharacter_10);
console.log();

// ==================================================================================================================================================
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let userName_11 = "Aman";
let userAge_11 = 20;

let finalOutput_11 = `My name is ${userName_11} nd I am ${userAge_11} years old.`;

console.log("Final Output is:", finalOutput_11);
console.log();

// ==================================================================================================================================================
// 12. Store a sentence in a variable and print how many characters it has.
let givenSentence_12 = "Hello, World";

let totalCharacter_12 = givenSentence_12.length;

console.log("Total Characters are:", totalCharacter_12);
console.log();

// ==================================================================================================================================================
// 13. Turn a lowercase sentence into all uppercase.
let givenWord_13 = "Shubham Singh";

let upperCaseCharacter_13 = givenWord_13.toUpperCase();

console.log(`Final Output is: ${upperCaseCharacter_13}`);
console.log();

// ==================================================================================================================================================
// 14. Turn an uppercase sentence into all lowercase.
let givenSentence_14 = "SHUBHAM SINGH";

let lowerCaseSentence_14 = givenSentence_14.toLowerCase();

console.log("Final Output is:", lowerCaseSentence_14);
console.log();

// ==================================================================================================================================================
// 15. Check whether a string contains the word "React".
let userString_15 = "React is a JavaScript Library";

let isPresent_15 = userString_15.includes("React");

console.log(`Final Output is: ${isPresent_15}`);
console.log();

// ==================================================================================================================================================
// 16. Pull out the word "Script" from "Java Script Code".
let givenSentence_16 = "Java Script Code";

let extractedWord_16 = givenSentence_16.slice(5, 11);

console.log(`Final Output is: ${extractedWord_16}`);
console.log();

// ==================================================================================================================================================
// 17. Swap "slow" for "fast" inside a sentence.
let givenSentence_17 = "Run Fast";

let replacedWordSentence_17 = givenSentence_17.replace("Fast", "slow");

console.log(`Final Output is: ${replacedWordSentence_17}`);
console.log();

// ==================================================================================================================================================
// 18. Break apart "Mon,Tue,Wed" into an array using the comma.
let givenString_18 = "Mon, Tue, Wed";

let arrayConverted_18 = givenString_18.split(", ");

console.log("Final Output is:", arrayConverted_18);
console.log();

// ==================================================================================================================================================
// 19. Strip the leading and trailing spaces off a messy string.
let givenString_19 = "   hey, this  is a messy string.   ";

let properString_19 = givenString_19.trim();

console.log(`Original String is: ${givenString_19}`);
console.log(`Final Output is: ${properString_19}`);
console.log();

// ==================================================================================================================================================
// 20. Print the word "Yo" repeated 3 times.
let givenWord_20 = "Yo";

let repeatedWord_20 = givenWord_20.repeat(3);

console.log(`Final Output is: ${repeatedWord_20}`);
console.log();

// ==================================================================================================================================================
// 21. Print the last letter of a word.
let givenWord_21 = "Hello, this is JavaScript Practice Questions";

let lastLetters_21 = givenWord_21.charAt(givenWord_21.length - 1);

console.log(`Final Output is: ${lastLetters_21}`);
console.log();

// ==================================================================================================================================================
// 22. Use a template literal to output: "Welcome back, Priya! You have 5 new messages."
let userName_22 = "Priya";
let messageForUser_22 = 4;

console.log(`Welcome back, ${userName_22}! You have ${messageForUser_22} new messages`);
console.log();