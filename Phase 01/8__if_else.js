// ==================================================================================================================================================
// ==================================================================== IF ELSE =====================================================================
// ==================================================================================================================================================

// ====================================================================== Easy ======================================================================

// 1. Check whether a number is positive or negative.
let userNumber_1 = 2;

if (userNumber_1 > 0) {
    console.log(`${userNumber_1} is Positive`);
} else if (userNumber_1 < 0) {
    console.log(`${userNumber_1} is Negative`);
} else {
    console.log(`${userNumber_1} is Zero`);
}

console.log();

// ==================================================================================================================================================
// 2. Check whether a number is even or odd.
let userNumber_2 = 3;

if (userNumber_2 % 2 === 0) {
    console.log(`${userNumber_2} is an EVEN number.`);
} else {
    console.log(`${userNumber_2} is an ODD number.`);
}

console.log();

// ==================================================================================================================================================
// 3. Check whether a character is a vowel or consonant.
let userCharacter_3 = "a";

let convertCharacter_3 = userCharacter_3.toLowerCase();

if (
    convertCharacter_3 === "a" ||
    convertCharacter_3 === "e" ||
    convertCharacter_3 === "i" ||
    convertCharacter_3 === "o" ||
    convertCharacter_3 === "u"
) {
    console.log(`${userCharacter_3} is a VOWEL`);
} else {
    console.log(`${userCharacter_3} is a CONSTANT`);
}

console.log();

// ==================================================================================================================================================
// 4. Print the day name based on a number (1–7).
let currentDayNumber_4 = 1;

switch (currentDayNumber_4) {
    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;

    case 7:
        console.log("Today is Sunday");
        break;

    default:
        console.log(`${currentDayNumber_4} is Invalid`);
}

console.log();

// ==================================================================================================================================================
// 5. Determine if a given number is zero, positive, or negative.
let givenNumber_5 = 0;

if (givenNumber_5 > 0) {
    console.log(`${givenNumber_5} is POSITIVE`);
} else if (givenNumber_5 < 0) {
    console.log(`${givenNumber_5} is NEGATIVE`);
} else {
    console.log(`${givenNumber_5} is ZERO`);
}

console.log();

// ==================================================================================================================================================
// 6. Determine if a number is divisible by 3.
let givenNumber_6 = 10;

if (givenNumber_6 % 3 === 0) {
    console.log(`${givenNumber_6} is divisible by 3`);
} else {
    console.log(`${givenNumber_6} is NOT divisible by 3`);
}

console.log();

// ==================================================================================================================================================
// 7. Determine whether a given letter is uppercase or lowercase.
let givenLetter_7 = "1";

if (!/[a-zA-Z]/.test(givenLetter_7)) {
    console.log(`${givenLetter_7} is NOT a VALID character`);
} else if (givenLetter_7 === givenLetter_7.toUpperCase()) {
    console.log(`${givenLetter_7} is UPPERCASE`);
} else {
    console.log(`${givenLetter_7} is LOWERCASE`);
}

console.log();

// ==================================================================================================================================================
// 8. Output the season name based on a month number.

let userInputMonth_8 = "January";
let monthName_8 = userInputMonth_8
    .charAt(0)
    .toUpperCase()
    .concat(userInputMonth_8.slice(1).toLowerCase());

switch (monthName_8) {
    case "December":
    case "January":
    case "February":
        console.log(`It's a WINTER`);
        break;

    case "March":
    case "April":
    case "May":
    case "June":
        console.log(`It's SUMMER`);
        break;

    case "July":
    case "August":
    case "September":
        console.log(`It's RAINY`);
        break;

    case "October":
    case "November":
        console.log(`It's MONSOON`);
        break;

    default:
        console.log(`INVALID MONTH`);
}

console.log();

// ==================================================================================================================================================
// 9. Check whether a given character is a digit or a letter.
let userInput_9 = "A";

if (/[a-zA-Z]/.test(userInput_9)) {
    console.log(`${userInput_9} is a LETTER`);
} else if (/[0-9]/.test(userInput_9)) {
    console.log(`${userInput_9} is a DIGIT`);
} else {
    console.log(`${userInput_9} might be a SYMBOL or EMOJI`);
}

console.log();

// ==================================================================================================================================================
// 10. Check whether a number is a multiple of 7.
let userNumber_10 = 78;

if (userNumber_10 % 7 === 0) {
    console.log(`${userNumber_10} is a Multiple of 7`);
} else {
    console.log(`${userNumber_10} is NOT a multiple of 7`);
}

console.log();

// ==================================================================================================================================================
// 11. Determine if a triangle is valid given three angles (must sum to 180).
let firstAngle_11 = 60;
let secondAngle_11 = 60;
let thirdAngle_11 = 60;

if (firstAngle_11 + secondAngle_11 + thirdAngle_11 === 180) {
    console.log(`It's a VALID Triangle.`);
} else {
    console.log(`It's NOT a VALID Triangle.`);
}

console.log();

// ==================================================================================================================================================
// 12. Check whether a number falls within the range 10–50.
let userNumber_12 = 49;

if (typeof userNumber_12 === "number") {
    if (userNumber_12 < 50 && userNumber_12 > 10) {
        console.log(`${userNumber_12} falls within the range 10-50`);
    } else {
        console.log(`${userNumber_12} does NOT falls within the range 10-50`);
    }
} else {
    console.log(`${userNumber_12} is a STRING.`);
}

console.log();

// ==================================================================================================================================================
// 13. Determine if a string is empty or not.
let userString_13 = 66;

if (typeof userString_13 === "string") {
    if (userString_13.length !== 0) {
        console.log(`${userString_13} is NOT EMPTY`);
    } else {
        console.log(`The string is EMPTY`);
    }
} else {
    console.log(
        `The provided value type is a ${typeof userString_13}, NOT STRING`,
    );
}

console.log();

// ==================================================================================================================================================
// 14. Check whether a number ends in 0 (i.e., is a multiple of 10).
let userNumber_14 = 21;

if (typeof userNumber_14 === "number") {
    if (userNumber_14 % 10 === 0) {
        console.log(`${userNumber_14} is a multiple of 10`);
    } else {
        console.log(`${userNumber_14} is NOT a mutiple of 10`);
    }
} else {
    console.log(`${userNumber_14} is a ${typeof userNumber_14}`);
}

console.log();

// ==================================================================================================================================================
// 15. Determine whether a given temperature is above or below freezing (0°C).
let userGivenTemperature_15 = -1;

if (userGivenTemperature_15 < 0) {
    console.log(`The given temperature is BELOW 0°C`);
} else if (userGivenTemperature_15 > 0) {
    console.log(`The given temperature is ABOVE 0°C`);
} else {
    console.log(`The temperaure is 0°C`);
}

console.log();

// ==================================================================================================================================================
// 16. Check whether a person is a minor, adult, or senior citizen (age brackets).
let personAge_16 = 101;

if (personAge_16 > 1 && personAge_16 < 18) {
    console.log(`Person is a MINOR`);
} else if (personAge_16 > 18 && personAge_16 < 60) {
    console.log(`Person is an ADULT`);
} else if (personAge_16 > 60 && personAge_16 < 100) {
    console.log(`Person is a SENIOR CITIZEN`);
} else {
    console.log(`INVALID PERSON AGE`);
}

console.log();

// ==================================================================================================================================================
// 17. Determine if a given month has 30 or 31 days (ignore February).
let userMonthChoice_17 = "May";

let monthName_17 = `${userMonthChoice_17[0].toUpperCase() + userMonthChoice_17.slice(1).toLowerCase()}`;

if (
    monthName_17 === "January" ||
    monthName_17 === "March" ||
    monthName_17 === "May" ||
    monthName_17 === "July" ||
    monthName_17 === "August" ||
    monthName_17 === "October" ||
    monthName_17 === "December"
) {
    console.log(`${userMonthChoice_17} is of 31 days`);
} else if (monthName_17 === "February") {
    console.log(
        `${monthName_17} is of either 28 / 29 days, based on Leap Year`,
    );
} else {
    console.log(`${userMonthChoice_17} is of 30 days`);
}

console.log();

// ==================================================================================================================================================
// 18. Check whether an ATM withdrawal amount is a multiple of 100.
let atmWithdrawal_18 = 20000;

if (atmWithdrawal_18 % 100 === 0) {
    console.log(`₹ ${atmWithdrawal_18}/- withdrawal is a multiple of 100`);
} else {
    console.log(`₹ ${atmWithdrawal_18}/- withdrawal is NOT a multiple of 100`);
}

console.log();

// ==================================================================================================================================================
// 19. Determine whether a light switch state ("ON"/"OFF") should toggle correctly.
let currentLightSwitchState_19 = "OFF";

if (currentLightSwitchState_19 === "ON") {
    currentLightSwitchState_19 = "OFF";
} else {
    currentLightSwitchState_19 = "ON";
}
console.log(`Currently Light switch state is: ${currentLightSwitchState_19}`);

console.log();

// ==================================================================================================================================================
// 20. Check if a number is a single-digit or multi-digit number.
let userNumber_20;
let useNumberLength_20 = Math.abs(userNumber_20).toString().length;
console.log(useNumberLength_20);

if (useNumberLength_20 === 1) {
    console.log(`Number is a Single-digit number: ${userNumber_20}`);
} else {
    console.log(`Number is a Multi-digit number: ${userNumber_20}`);
}

console.log();

// ==================================================================================================================================================
// 21. Determine whether today is a weekday or weekend, given a day number (1–7).

// 1: Sunday, 2: Monday, 3: Tuesday, 4: Wednesday, 5: Thursday, 6: Friday, 7: Saturday
let userGivenNumber_21 = "2";

switch (Number(userGivenNumber_21)) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log(`Today is a Weekday`);
        break;

    case 7:
    case 1:
        console.log(`Today is Weekend`);
        break;

    default:
        console.log(`INVALID DAY INPUT`);
}

console.log();

// ==================================================================================================================================================
// 22. Check whether a given price qualifies for free shipping (above ₹500).
let userProductPrice_22 = 501;

if (
    typeof userProductPrice_22 !== "number" ||
    isNaN(userProductPrice_22) ||
    userProductPrice_22 < 0
) {
    console.log(`INVALID INPUT`);
} else if (userProductPrice_22 <= 500) {
    console.log(`NOT Eligible for free shipping`);
} else {
    console.log(`Eligible for free shipping`);
}

console.log();

// ==================================================================================================================================================
// 23. Determine if a shape name entered matches "circle", "square", or "triangle".
let userDetermineShape_23 = "Rectangle";

if (userDetermineShape_23.toLowerCase().trim() === "circle") {
    console.log(`User Guess CIRCLE`);
} else if (userDetermineShape_23.toLowerCase().trim() === "square") {
    console.log(`User Guess SQUARE`);
} else if (userDetermineShape_23.toLowerCase().trim() === "triangle") {
    console.log(`User Guess TRIANGLE`);
} else {
    console.log(`USER Guess Something else`);
}

console.log();

// ==================================================================================================================================================
// 24. Check whether a given number is positive, and if so, whether it's also even.
let userGivenNumber_24 = NaN;

if (typeof userGivenNumber_24 !== "number" || isNaN(userGivenNumber_24)) {
    console.log(`INVALID INPUT`);
} else if (userGivenNumber_24 === 0) {
    console.log(`User Choose ZERO (neither -ve nor -ve)`);
} else if (userGivenNumber_24 > 0) {
    if (userGivenNumber_24 % 2 === 0) {
        console.log(`User Choose +ve EvVEN Number.`);
    } else {
        console.log(`User Choose +ve ODD Number.`);
    }
} else {
    console.log(`User Choose -ve Number`);
}

console.log();

// ==================================================================================================================================================
// 25. Determine if a movie ticket should get a child, adult, or senior price based on age.
let userAge_25 = 70;

if (typeof userAge_25 !== "number" || isNaN(userAge_25) || userAge_25 < 0) {
    console.log(`INVALID INPUT`);
} else if (userAge_25 >= 0 && userAge_25 <= 12) {
    console.log(`CHILD PRICE`);
} else if (userAge_25 >= 13 && userAge_25 <= 64) {
    console.log(`ADULT PRICE`);
} else {
    console.log(`SENIOR PRICE`);
}

// ==================================================================================================================================================
// 26. Check whether a battery percentage is low (<20%), medium, or full.
let batteryPercentage_26 = 20;

if (
    typeof batteryPercentage_26 !== "number" ||
    isNaN(batteryPercentage_26) ||
    batteryPercentage_26 > 100
) {
    console.log(`INVALID PERCENTAGE`);
} else if (batteryPercentage_26 <= 20) {
    console.log(`LOW Battery`);
} else if (batteryPercentage_26 <= 70) {
    console.log(`MEDUIM Battery Charged`);
} else {
    console.log(`Almost FULLY Charded`);
}

console.log();

// ==================================================================================================================================================
// 27. Determine if a given string starts with a vowel.
let userString_27 = " Alpha";

if (typeof userString_27 !== "string" || userString_27.trim() === "") {
    console.log(`INVALID INPUT`);
} else {
    let stringFirstLetter_27 = userString_27.trim().charAt(0).toLowerCase();
    let vowels_27 = "aeiou";

    if (vowels_27.includes(stringFirstLetter_27)) {
        console.log(`${userString_27} starts with VOWELS`);
    } else {
        console.log(`${userString_27} does NOT starts with VOWELS`);
    }
}

console.log();

// ==================================================================================================================================================
// 28. Check whether a user's rating (1–5) is valid input.
let userRating_28 = 1;

if (typeof userRating_28 !== "number" || isNaN(userRating_28)) {
    console.log(`INVALID INPUT`);
} else if (userRating_28 >= 1 && userRating_28 <= 5) {
    console.log(`User give rating: ${userRating_28}`);
} else {
    console.log(`User Rating is not VALID`);
}

console.log();

// ==================================================================================================================================================
// ===================================================================== Medium =====================================================================
// ==================================================================================================================================================

// 1. Check whether a person is eligible to vote.
let personAge_1 = 22;

if (typeof personAge_1 !== "number" || isNaN(personAge_1) || personAge_1 < 0) {
    console.log(`INVALID AGE`);
} else if (personAge_1 >= 18 && personAge_1 <= 60) {
    console.log(`Eligible to Vote`);
} else {
    console.log(`Not Eligible to Vote`);
}

console.log();

// ==================================================================================================================================================
// 2. Find the largest among two numbers.
let firstNumber_2 = 1;
let secondNumber_2 = true;

if (
    typeof firstNumber_2 !== "number" ||
    typeof secondNumber_2 !== "number" ||
    isNaN(firstNumber_2) ||
    isNaN(secondNumber_2)
) {
    console.log(`INVALID INPUTS`);
} else if (firstNumber_2 > secondNumber_2) {
    console.log(`${firstNumber_2} is GREATER than ${secondNumber_2}`);
} else if (secondNumber_2 > firstNumber_2) {
    console.log(`${secondNumber_2} is GREATER than ${firstNumber_2}`);
} else {
    console.log(`BOTH are EQUAL`);
}

console.log();

// ==================================================================================================================================================
// 3. Find the largest among three numbers.
let firstNumber_3 = 4;
let secondNumber_3 = 5;
let thirdNumber_3 = 6;

if (
    typeof firstNumber_3 !== "number" ||
    typeof secondNumber_3 !== "number" ||
    typeof thirdNumber_3 !== "number" ||
    isNaN(firstNumber_3) ||
    isNaN(secondNumber_3) ||
    isNaN(thirdNumber_3)
) {
    console.log(`INVALID INPUTS`);
} else {
    let largest_3 = Math.max(firstNumber_3, secondNumber_3, thirdNumber_3);
    console.log(`$Largest number is ${largest_3}`);
}

console.log();

// ==================================================================================================================================================
// 4. Check whether a year is a leap year.

// ==================================================================================================================================================
// 5. Check whether a number is divisible by both 3 and 5.

// ==================================================================================================================================================
// 6. Check whether a username is `"admin"` and password is `"1234"`.

// ==================================================================================================================================================
// 7. Determine if someone qualifies for a student discount (age under 25).

// ==================================================================================================================================================
// 8. Identify the bigger of two given marks.

// ==================================================================================================================================================
// 9. Identify the biggest of three given marks.

// ==================================================================================================================================================
// 10. Determine if a given year falls in the 21st century.

// ==================================================================================================================================================
// 11. Determine if a number is divisible by both 4 and 6.

// ==================================================================================================================================================
// 12. Verify that an entered PIN equals "4321".

// ==================================================================================================================================================
// 13. Build a BMI calculator that classifies a person as Underweight, Normal, Overweight, or Obese.

// ==================================================================================================================================================
// 14. Determine ticket pricing based on both age and day of the week (weekday/weekend discount).

// ==================================================================================================================================================
// 15. Build a simple traffic light simulator that prints an action ("Stop", "Wait", "Go") based on color input.

// ==================================================================================================================================================
// 16. Check whether a triangle is equilateral, isosceles, or scalene given three side lengths.

// ==================================================================================================================================================
// 17. Determine whether a given number is a perfect square.

// ==================================================================================================================================================
// 18. Build a password strength checker (Weak/Medium/Strong) based on length and character variety.

// ==================================================================================================================================================
// 19. Determine the quadrant of a point (x, y) on a Cartesian plane.

// ==================================================================================================================================================
// 20. Build a simple login system that also locks the account after checking a failed-attempts counter.

// ==================================================================================================================================================
// 21. Determine shipping cost based on weight (in kg) using tiered pricing.

// ==================================================================================================================================================
// 22. Check whether three given numbers can form a valid triangle (triangle inequality).

// ==================================================================================================================================================
// 23. Build an income tax calculator with multiple tax slabs.
// /*
//   Tax Slabs Breakdown:
//   - ₹0 to ₹3,00,000            : 0% (Exempt)
//   - ₹3,00,001 to ₹7,00,000     : 5%  (Max ₹20,000)
//   - ₹7,00,001 to ₹10,00,000    : 10% (Max ₹30,000)
//   - ₹10,00,001 to ₹12,00,000   : 15% (Max ₹30,000)
//   - ₹12,00,001 to ₹15,00,000   : 20% (Max ₹60,000)
//   - Above ₹15,00,000           : 30%
// */

// ==================================================================================================================================================
// 24. Build a movie rating classifier: G, PG, PG-13, R based on age and content flag.

// ==================================================================================================================================================
// 25. Determine exam pass/fail status based on both attendance percentage and marks.

// ==================================================================================================================================================
// 26. Build a simple currency exchange calculator using switch for currency codes.

// ==================================================================================================================================================
// 27. Determine the day type (Public Holiday, Weekend, Working Day) using both a day number and a holiday flag.

// ==================================================================================================================================================

// ==================================================================================================================================================
// ====================================================================== Hard ======================================================================
// ==================================================================================================================================================

// 1. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

// ==================================================================================================================================================
// 2. Create a calculator using `switch` statement.

// ==================================================================================================================================================
// 3. Build a fuel efficiency rating system:

// ==================================================================================================================================================
// - 20+ km/l → Excellent
// - 15–19 km/l → Good
// - 10–14 km/l → Average
// - below 10 → Poor

// ==================================================================================================================================================
// 4. Build a basic unit converter (km to miles, kg to lbs, etc.) using switch.

// ==================================================================================================================================================
// 5. Build a BMI + age + activity level combined health-risk classifier.

// ==================================================================================================================================================
// 6. Determine whether a given year, month, and day combination represents a valid leap-year February date (e.g., Feb 29 only valid in leap years).

// ==================================================================================================================================================
// 7. Build a multi-tier employee bonus calculator based on department, performance score, and years of experience.

// ==================================================================================================================================================
// 8. Build a loan eligibility checker based on income, credit score, and existing debt ratio.

// ==================================================================================================================================================
// 9. Determine the correct postal/shipping zone and cost using nested conditions on country, weight, and delivery speed.

// ==================================================================================================================================================
// 10. Build a grading system that also computes GPA using nested conditions per subject.

// ==================================================================================================================================================
// 11. Check whether a given chess coordinate (e.g., "e4") is a valid position on the board.

// ==================================================================================================================================================
// 12. Build a flight ticket pricing system factoring in class (Economy/Business/First), season, and advance booking days.

// ==================================================================================================================================================
// 13. Build a multi-condition eligibility checker for a scholarship (marks, income, category, extracurricular score).

// ==================================================================================================================================================
// 14. Simulate a vending machine that checks selected item, inserted amount, and stock availability.

// ==================================================================================================================================================
// 15. Build a weather-based clothing recommender using temperature, humidity, and wind speed together.

// ==================================================================================================================================================
// 16. Build a hospital triage priority system that classifies patients as Critical, Urgent, or Non-Urgent based on multiple vital signs (heart rate, temperature, oxygen level).
