// ===================================================================================================================================================
// ================================================================= `this` KEYWORD ==================================================================
// ===================================================================================================================================================

/*
Problem 1: Global vs Function `this`

Create a function `showThis()` and print the value of `this` when:
-> Called normally
-> Called in strict mode

Expected Learning
-> Default Binding
-> Strict Mode Behavior
*/

// ===================================================================================================================================================
/*
Problem 2: Object Method Context

Create an object:
const user = {
  name: "Anubhav"
};

Add a method that prints:
-> Hello Anubhav

Then store the method in another variable and call it.

Expected Learning
-> Method Binding
-> Call Site Concept
*/

// ===================================================================================================================================================
/*
Problem 3: Arrow Function vs Regular Function

Create an object with:
-> name: "Rahul"

Implement:
-> One regular method
-> One arrow method

Print `this.name` from both.

Expected Learning
-> Lexical `this`
-> Object Method Context
*/

// ===================================================================================================================================================
/*
Problem 4: Nested Callback Problem

Create an object:
{
 name: "Rahul",
 hobbies: ["Coding", "Gaming", "Reading"]
}

Print:
-> Rahul likes Coding
-> Rahul likes Gaming
-> Rahul likes Reading

without storing `this` in another variable.

Expected Learning
-> Arrow Functions
-> Preserving `this`
*/

// ===================================================================================================================================================
/*
Problem 5: Event Handler Simulation

Create an object representing a button.

Write:
-> One regular function handler
-> One arrow function handler

Compare the value of `this`.

Expected Learning
-> Event Context
-> Lexical Scope
*/
