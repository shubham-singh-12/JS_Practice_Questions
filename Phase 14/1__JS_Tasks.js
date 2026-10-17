// ===================================================================================================================================================
// ==================================================================== JS TASKS =====================================================================
// ===================================================================================================================================================

// ====================================================================== EASY =======================================================================
// 1. Even or Odd Checker
// Write a function that takes one number as input. Inside the function, check whether the number divides evenly by 2 using the % (modulo) operator. If there is no remainder, the function should return the word "Even"; otherwise, it should return "Odd". Try your function with a few different numbers, including 0 and a negative number, to make sure it always gives the right answer.

// 2. Greeting Generator
// Write a function that takes two inputs: a person's name and their age. Inside the function, use a template literal (a string written with backticks and ${ }) to build and return a sentence such as "Hello, Riya! You are 21 years old." Make sure the name and age you pass in always show up correctly inside the sentence.

// 3. Rectangle Area Calculator
// Write a function that takes the width and height of a rectangle as two separate inputs. Inside the function, multiply the two numbers together to get the area, and return that result. Test the function with a few different width and height values to confirm the area comes out correct.

// 4. Private Counter with Closures
// Write an outer function that has one variable inside it to keep track of a count, starting at 0. This outer function should return another (inner) function that, every time it is called, increases the count by 1 and returns the new value. The important part is that the count variable should not be reachable or changeable from outside - the only way to change it should be by calling the function that was returned.

// 5. Find the Largest Number
// Write a function that takes an array of numbers and returns the largest number in it. You are not allowed to use the built-in Math.max() method - instead, loop through the array yourself, compare each number to the others, and keep track of the biggest one you have found so far.

// ===================================================================================================================================================
// ===================================================================== MEDIUM ======================================================================
// 6. Product Data Processor
// You will work with an array of product objects, where each object has a name, a price, and a category. First, use the map() method to make a new array that only contains the product names. Second, use the filter() method to make another array that only contains products from one specific category. Third, use the reduce() method to add up the prices of every product and return the total.

// 7. Debounce Utility from Scratch
// Write your own function called debounce that takes two inputs: another function (fn) and a delay time in milliseconds. Your debounce function should return a new function that, every time it is called, waits for the given delay before actually running fn. If it gets called again before that delay finishes, it should cancel the earlier wait and start counting the delay again from zero. This trick is useful for things like search boxes, where you don't want to run code on every single keystroke.

// 8. Sequential Task Runner
// Write three separate functions, where each one waits for a short delay (you can use a Promise with setTimeout inside it) and then logs a different message to the console, such as "Step 1 done", "Step 2 done", and "Step 3 done". Then write one more function that uses async/await to run all three, one after another, so Step 2 never starts before Step 1 has fully finished, and Step 3 never starts before Step 2 has fully finished.

// 9. API Data Cleaner
// Write a function that uses fetch() to get data from a public API of your choice (for example, JSONPlaceholder). Once the data arrives, pick out only the specific fields you actually need (for example, just the title and the id) and return a new, simplified array or object built from those fields only. Wrap your code in a try/catch block so that if the network request fails, your function handles the error nicely instead of crashing.

// 10. Mini Event Emitter
// Build your own small object (you can call it an event emitter) with three methods: on(eventName, callback) to register a function that should run when a named event happens, emit(eventName, data) to actually trigger that event and run every function registered for it, and off(eventName, callback) to remove a function you registered earlier. This lets different parts of your code talk to each other through named events instead of calling each other directly.

// ===================================================================================================================================================
// ======================================================================/ HARD ======================================================================

// 11. Memoization Utility
// Write a function called memoize that takes another function (fn) as input and returns a new version of it. This new version should remember (cache) the result every time it is called with a particular set of arguments. If it is ever called again later with the exact same arguments, it should return the saved result right away instead of running fn again. This is handy for slow calculations that get called repeatedly with the same input.

// 12. Auto-Retry for Failing Promises
// Write a function called retry that takes an async function and a number of attempts as inputs. Your retry function should call the async function, and if it fails (throws an error or rejects), it should automatically try calling it again, up to the number of attempts you chose. If every attempt fails, retry should finally give up and reject with an error. Test it using a fake function that fails the first couple of times and then succeeds.

// 13. Mini State Store
// Build a small object from scratch that manages one piece of shared data (state). It should have a getState() method that returns the current state, a setState(newState) method that updates the state, and a subscribe(callback) method that lets other parts of your code register a function to be called automatically every time the state changes. This is similar to how popular state-management libraries like Redux work behind the scenes, just in a much smaller form.

// 14. Deep Clone Utility
// Write a function called deepClone that takes any object or array, including ones with other objects and arrays nested inside them, and returns a brand-new copy. Changing the new copy afterward should never affect the original, no matter how deeply nested the data is. You are not allowed to solve this using JSON.parse(JSON.stringify(...)) or any outside library - write the copying logic yourself, most likely using recursion.

// 15. Concurrency-Limited Task Queue
// Write a function that takes a list of async tasks (functions that each return a promise) and a maximum number, N, of tasks allowed to run at the same time. Your function should start tasks immediately, but only N of them at once - as soon as one finishes, the next waiting task should start. Make sure every task eventually runs and finishes, just never more than N of them running at the exact same moment.
