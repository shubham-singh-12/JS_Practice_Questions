# ARRAYS

## Beginners

1. Create an array of 5 fruits.
2. Print first and last element of array.
3. Find length of array.
4. Add element at end using `push`.
5. Remove last element using `pop`.
6. Add element at beginning using `unshift`.
7. Remove first element using `shift`.
8. Reverse an array.
9. Sort numbers ascending.
10. Sort numbers descending.
11. Create a new array containing only prices greater than 300.

```JavaScript
let price = [100, 250, 500, 150, 700];
```

```
Expected output: [500, 700]
```

<hr>

12. Prints the last student's name.

```JavaScript
let students = ["Shubham", "Aman", "ritik", "Priya", "Rahul"];
```

<hr>

13. Add "Monitor" to the end of the array.

```JavaScript
let products = ["Laptop", "Mouse", "Keyboard"]
```

<hr>

14. Remove the latest notification

```JavaScript
let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];
```

<hr>

15. Check if "Ritik" exists

```JavaScript
let users = ["Shubham", "Aman", "Ritik", "Priya"];
```

<hr>

16. Create a new array where each mark is followed by %

```JavaScript
let marks = [80, 90, 70];
```

```
Expected Output: ["80%", "90%", "70%"]
```

<hr>

17. Print total number of products.

```JavaScript
let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];
```

<hr><hr>
<br>

## Intermediate

1. Use `splice` to remove elements.
2. Use `splice` to insert elements.
3. Use `slice` to copy array.
4. Find index of an element.
5. Check if array contains a value.
6. Join array elements with .(dot)
7. Merge two arrays using spread operator.
8. Copy array using spread operator.
9. Find maximum value using `Math.max`.
10. Swap two variables using destructuring.
11. Calculate the average marks of all students.
12. Return all even numbers.
13. Calculate total revenue.
14. Convert every username into uppercase.
15. Find the first age greater than or equal to 18.
16. Check if every number is positive.

<hr><hr>
<br>

## Hard

1. Find the number that appears the most.

```JavaScript
let numbers_1 = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
```

<hr>

2. Find the second largest number.

```JavaScript
let nums_2 = [10, 50, 20, 80, 40];
```

```
Expected Output: 50
```

<hr>

3. Create a new array with unique values.

```JavaScript
let ids_3 = [1, 2, 2, 3, 4, 4, 5, 5];
```

```
Expected Output: [1, 2, 3, 4, 5]
```

<hr>

4. Find the longest word

```JavaScript
let words_4 = ["JavaScript", "HTML", "CSS", "Programming"];
```

<hr>

5. Rotate array right

```JavaScript
let nums_5 = [1, 2, 3, 4, 5];
```

```
Expected Output: [5,1,2,3,4]
```

<hr>

6. Find the product sold the most.

```JavaScript
let sales_6 = ["Mouse", "Keyboard", "Mouse", "Laptop", "Mouse", "Keyboard"];
```

```
Expected Output: "Mouse"
```

<hr><hr>
<br>

## Array Iteration Method

1. Use `forEach` to print all numbers doubled.

```JavaScript
let arr_21 = [1, 2, 3, 4, 5, 6];
```

<hr>

2. Use `map` to square all numbers.

```JavaScript
let arr_22 = [1, 2, 3, 4, 5, 6];
```

<hr>

3. Use `filter` to get even numbers.

```JavaScript
let arr_23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<hr>

4. Use `reduce` to calculate sum.

```JavaScript
let arr_24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<hr>

5. Use `reduce` to find maximum number.

```JavaScript
let arr_25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<hr>

6. Use `find` to get first even number.

```JavaScript
let arr_26 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<hr>

7. Use `findIndex` to locate number > 50.

```JavaScript
let arr_27 = [1, 10, 20, 50, 60, 70];
```

<hr>

8. Use `some` to check if any number is negative.

```JavaScript
let arr_28 = [1, 2, 3, 4, -5, -7, 8, 9];
```

<hr>

9.  Use `every` to check if all numbers are positive.

```JavaScript
let arr_29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];
```

<hr>

10. Create array of names and convert all to uppercase.

```JavaScript
let arr_30 = ["shubham", "shivam", "shourya", "deepak", "ajay"];
```

<hr>

11. Filter all students with marks > 80.

```JavaScript
let arr_31 = [20, 40, 56, 78, 86, 89, 97, 95, 40];
```

<hr>

12. Calculate average using reduce.

```JavaScript
let arr_32 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

<hr>

13. Count occurrences of numbers in array.

```JavaScript
let arr_33 = [1, 2, 2, 3, 3, 4, 5, 6];
```

<hr>

14. Flatten nested arrays using `flat`.

```JavaScript
let arr_34 = [1, 2, [3, 4, 5, 6, [7, 8, 9, 1, 2, [3, 4, 5]]]];
```

<hr>

15. Remove duplicates using `Set`.

```JavaScript
let arr_35 = ["apple", "banana", "grapes", "apple", "banana", "orange", "grapes", "orange"];
```

<hr>

16. Sort array of objects by age.

```JavaScript
let arr_36 = [
     { name: "Amit", age: 25 },
     { name: "Priya", age: 19 },
     { name: "Rahul", age: 34 },
 ];
```

<hr>

17. Find total price of shopping cart.

```JavaScript
let arr_37 = [20, 40, 50, 60 ,70 ,80 ,90 ,100, 120, 140, 160];
```

<hr>

18. Group users by age.

```JavaScript
let arr_38 = [
     { name: "Amit", age: 25 },
     { name: "Priya", age: 19 },
     { name: "Rahul", age: 25 },
     { name: "Sneha", age: 19 },
 ];
```

<hr>

19. Chain `filter` and `map`.

```JavaScript
let arr_39 = [
    { name: "Amit", age: 25 },
    { name: "Priya", age: 19 },
    { name: "Rahul", age: 25 },
    { name: "Sneha", age: 19 },
];
```

<hr>

20. Explain difference between `map` and `forEach`.

## Debugging Questions

1.

```JavaScript
const arr = [1,2,3];
arr[10] = 5;
console.log(arr.length);
```

<hr>

2.

```JavaScript
console.log(typeof []);
```

<hr>

3.

```JavaScript
console.log([] == false);
```

<hr>

4.

```JavaScript
console.log([1,2] + [3,4]);
```

<hr>

5.

```JavaScript
function x(a,b){
   return a+b;
}
console.log(x(2));
```

<hr><hr>
<br>

## Ultra Advanced

1. Build custom `Array.prototype.map`.
2. Build custom `Array.prototype.filter`.
3. Build custom `Array.prototype.reduce`.
4. Implement deep clone function.
5. Create student management system.
6. Create library management system.
7. Create expense tracker logic.
8. Build inventory management system.
9. Create function composition utility.
10. Build calculator using objects and methods.

<hr><hr>
<br>

## Scenario Based Questions

1. You have an array of users. Return only active users.
2. Calculate total revenue from orders array.
3. Find second largest number in array.
4. Find missing number in array.
5. Check whether two objects are equal.

<hr><hr>
<br>

## Interview Level

1. Difference between:

```
function declaration
function expression
arrow function
```

<hr>

2. Difference between:

```
`slice`
`splice`
```

<hr>

3. Difference between:

```
`map`
`filter`
`reduce`
```

<hr>

4. Difference between:

```
`for...in`
`for...of`
```

<hr>

5. Difference between:

```
shallow copy
deep copy
```

<hr><hr>
<br>

## Logic Building

1. Rotate array by k positions.
2. Find frequency of characters in string.
3. Find longest word in sentence.
4. Check if two strings are anagrams.
5. Capitalize first letter of every word.
6. Remove falsy values from array.
7. Convert array into object.
8. Convert object into array.
9. Find duplicate elements.
10. Merge two sorted arrays.

<hr><hr>
<br>

## Method Based

### Basic Array

#### Intermediate Question

1. Create an array of 5 favorite movies and print all values.

```
Hint:

Use indexing
```

#### Hard Question

1. Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

```
Hint:

Mixed data types + nested indexing
```

<hr>

### Indexing in Array

#### Intermediate Question

1. Print the first and last element of an array.

```
Hint:

Use `0` and `length - 1`
```

#### Hard Question

1. Swap the second and second-last element using indexing.

```
Hint:

Use temporary variable
```

<hr>

### Multi-Dimensional Array

#### Intermediate Question

1. Create a 2D array and print all first elements of inner arrays.

```
Hint:

Double indexing
```

#### Hard Question

1. Find the sum of all diagonal elements in a 3x3 matrix.

```
Hint:

Same row and column index
```

<hr>

### length

#### Intermediate Question

1. Find total elements in an array without counting manually.

```
Hint:

Use `.length`
```

<hr>

#### Hard Question

1. Create a function that checks whether array length is even or odd.

```
Hint:

Use modulus operator
```

<hr>

### push()

#### Intermediate Question

1. Add 3 new elements at the end of array.

```
Hint:

Use `push()`
```

#### Hard Question

1. Add elements dynamically inside loop from another array.

```
Hint:

Loop + push
```

<hr>

### pop()

#### Intermediate Question

1. Remove last element and print removed value.

```
Hint:

Store `pop()` result
```

#### Hard Question

1. Keep removing elements until array becomes empty.

```
Hint:

Use `while` loop
```

<hr>

### unshift()

#### Intermediate Question

1. Add one username at beginning of array.

```
Hint:

Use `unshift()`
```

#### Hard Question

1. Insert multiple elements at beginning without replacing existing ones.

```
Hint:

Multiple arguments
```

<hr>

### shift()

#### Intermediate Question

1. Remove first element from array.

```
Hint:

Use `shift()`
```

#### Hard Question

1. Remove first element repeatedly until only 2 elements remain.

```
Hint:

Loop + length check
```

<hr>

### splice()

#### Intermediate Question

1. Remove 2 elements from middle of array.

```
Hint:

`splice(start, deleteCount)`
```

#### Hard Question

1. Replace 3 middle elements with 5 new values.

```
Hint:

Use insertion with splice
```

<hr>

### reverse()

#### Intermediate Question

1. Reverse an array using method.

```
Hint:

Use `reverse()`
```

#### Hard Question

1. Reverse only first half of array.

```
Hint:

Manual swapping
```

<hr>

### sort()

#### Intermediate Question

1. Sort numbers in ascending order.

```
Hint:

Compare function
```

#### Hard Question

1. Sort array so even numbers come first and odd later.

```
Hint:

Custom compare logic
```

<hr>

### slice()

#### Intermediate Question

1. Extract first 4 elements into new array.

```
Hint:

Use `slice()`
```

#### Hard Question

1. Create a copy excluding first and last element.

```
Hint:

Use start and end indexes
```

<hr>

### concat()

#### Intermediate Question

1. Merge two arrays.

```
Hint:

Use `concat()`
```

#### Hard Question

1. Merge 3 arrays and remove duplicate values.

```
Hint:

Combine + loop/includes
```

<hr>

### includes()

#### Intermediate Question

1. Check whether `"apple"` exists in array.

```
Hint:

Use boolean result
```

#### Hard Question

1. Check if all elements of one array exist inside another.

```
Hint:

Loop + includes
```

<hr>

### indexOf()

#### Intermediate Question

1. Find index of `"Rahul"` in array.

```
Hint:

Use `indexOf()`
```

#### Hard Question

1. Find all positions of repeated number `5`.

```
Hint:

Loop through entire array
```

<hr>

### join()

#### Intermediate Question

1. Convert array into comma separated string.

```
Hint:

Use `join(",")`
```

#### Hard Question

1. Convert array into sentence format.

```
Hint:

Join with spaces
```

<hr>

### for Loop

#### Intermediate Question

1. Print all array elements using loop.

```
Hint:

Loop through indexes
```

#### Hard Question

1. Print elements at only even indexes.

```
Hint:

Increase loop smartly
```

<hr>

### for...of Loop

#### Intermediate Question

1. Print all values using `for...of`.

```
Hint:

Direct value iteration
```

#### Hard Question

1. Count vowels from array of characters.

```
Hint:

Use conditions inside loop
```

<hr>

### Reference Behaviour of Array

#### Intermediate Question

1. Assign one array to another variable and modify second one.

```
Hint:

Observe original array
```

#### Hard Question

1. Create true copy so original array does not change.

```
Hint:

Use spread operator
```

<hr>

### Spread Operator

#### Intermediate Question

1. Copy array into new array.

```
Hint:

Use `...`
```

#### Hard Question

1. Merge arrays and add extra values in between.

```
Hint:

Combine spread carefully
```

<hr><hr>
<br>

## Array Higher Order Function (hof) Based

### forEach()

#### Intermediate Question

1. You are given an array of prices. Print each price with `"₹"` before it.

```JavaScript
let prices = [100, 250, 399, 499];
```

```
Hint:

`forEach()` runs once for every element.
You don't return anything here.
Use `console.log()` inside it.
```

#### Hard Question

1. You are given an array of students.

```JavaScript
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
```

```
Print:

`"Pass"` if marks are greater than 50
`"Fail"` otherwis
```

```
Output format:
Anubhav - Pass
Rahul - Fail
```

```
Hint:

Loop through objects using `forEach()`
Use condition checking inside loop.
```

<hr>

### map()

#### Intermediate Question

1. Convert all names into uppercase.

```JavaScript
let names = ["anubhav", "rahul", "aman"];
```

```
Expected Output: ["ANUBHAV", "RAHUL", "AMAN"]
```

```
Hint:

`map()` creates a new array.
Use `.toUpperCase()`.
```

#### Hard Question

1. You are given products.

```JavaScript
   let products = [
   { name: "Laptop", price: 50000 },
   { name: "Phone", price: 20000 },
   ];
```

```
Create a new array where:

Every product has a new property `discountPrice`
Discount is 10%
```

Expected:

```JavaScript
[
{ name: "Laptop", price: 50000, discountPrice: 45000 }
];
```

```
Hint:

- Return a new object from `map()`
- Formula: price - (price \* 10 / 100)
```

<hr>

### filter()

#### Intermediate Question

1. Filter all even numbers.

```JavaScript
let nums = [1,2,3,4,5,6,7,8];
```

```
Expected Output: [2,4,6,8]
```

```
Hint:

`filter()` keeps elements when condition is `true`.
```

#### Hard Question

1. You are given users.

```JavaScript
let users = [
{ name: "Anubhav", active: true },
{ name: "Rahul", active: false },
{ name: "Aman", active: true },
];
```

```
Return only active users.
```

```
Hint:

Check `active === true`
Return condition directly.
```

<hr>

### reduce()

#### Intermediate Question

1. Find total sum of array.

```JavaScript
let nums = [10,20,30,40];
```

```
Expected Output: 100
```

```
Hint:

`reduce()` needs:
accumulator
current value
```

#### Hard Question

1. Count frequency of elements.

```JavaScript
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
```

```
Expected Output:
```

```JavaScript
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

```
Hint:

- Create an empty object `{}` as initial value.
- Increase count if already exists.
```

<hr>

### find()

#### Intermediate Question

1. Find first number greater than 50.

```JavaScript
let nums = [20, 35, 60, 80];
```

```
Expected Output: 60
```

```
Hint:

`find()` returns first matching element.
```

#### Hard Question

1. Find a user with username `"admin"`.

```JavaScript
let users = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
```

```
Hint:

- Compare inside callback:
- user.username === "admin"
```

<hr>

### findIndex()

#### Intermediate Question

1. Find index of number `90`.

```JavaScript
let nums = [10, 40, 90, 50];
```

```
Hint:

findIndex()` returns index number.
```

#### Hard Question

1. Find index of first failed student.

```JavaScript
let students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
```

```
Condition:

Failed if marks < 40
```

```
Hint:

Use condition directly inside callback.
```

<hr>

### some()

#### Intermediate Question

1. Check if any number is negative.

```JavaScript
let nums = [10, 20, -5, 40];
```

```
Expected Output: true
```

```
Hint:

some()` returns true if at least one condition matches.
```

#### Hard Question

1. Check if any product is out of stock.

```JavaScript
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
```

```
Hint:

- Check:
- stock === 0
```

<hr>

### every()

#### Intermediate Question

1. Check if all numbers are positive.

```JavaScript
let nums = [10, 20, 30, 40];
```

```
Expected Output: true
```

```
Hint:

`every()` checks all elements.
```

#### Hard Question

1. Check if all students passed.

```JavaScript
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
```

```
Passing marks: 40
```

```
Hint:

- Return condition:
- marks >= 40
```
