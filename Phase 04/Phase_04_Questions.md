# this KEYWORD

1. Global vs Function `this`

```
Create a function `showThis()` and print the value of `this` when:
-> Called normally
-> Called in strict mode
```

```
Expected Learning
-> Default Binding
-> Strict Mode Behavior
```

<hr>

2. Object Method Context

```
Create an object:
```

```JavaScript
const user = {
  name: "Anubhav"
};
```

```
Add a method that prints:
-> Hello Anubhav
```

```
Then store the method in another variable and call it.
```

```
Expected Learning
-> Method Binding
-> Call Site Concept
```

<hr>

3. Arrow Function vs Regular Function

```
Create an object with:
-> name: "Rahul"
```

```
Implement:
-> One regular method
-> One arrow method
```

```
Print `this.name` from both.
```

```
Expected Learning
-> Lexical `this`
-> Object Method Context
```

<hr>

4. Nested Callback Problem

```
Create an object:
```

```JavaScript
{
 name: "Rahul",
 hobbies: ["Coding", "Gaming", "Reading"]
}
```

```
Print:
-> Rahul likes Coding
-> Rahul likes Gaming
-> Rahul likes Reading
```

```
without storing `this` in another variable.
```

```
Expected Learning
-> Arrow Functions
-> Preserving `this`
```

<hr>

5. Event Handler Simulation

```
Create an object representing a button.
```

```
Write:
-> One regular function handler
-> One arrow function handler
```

```
Compare the value of `this`.
```

```
Expected Learning
-> Event Context
-> Lexical Scope
```

<hr><hr>
<br>

# CALL(), APPLY(), BIND()

1. Borrow a Method using call()

```
Create:
-> const person1 = { name: "Anubhav" };
-> const person2 = { name: "Rahul" };
```

```
Create a method that introduces a person and use `call()` to borrow it.
```

```
Expected Output
-> Hi, I am Anubhav
-> Hi, I am Rahul
```

<hr>

2. apply() with Array Arguments

```
Create a function:
-> introduce(city, country)
```

```
Pass values using `apply()`.
```

```
Expected Output
-> I am Rahul from Indore, India
```

<hr>

3. bind() for Delayed Execution

```
Create a function that prints a user's name after 2 seconds using:
-> setTimeout()
and `bind()`.
```

```
Expected Learning
-> Permanent Binding
-> Callback Context
```

<hr>

4. Custom Calculator

```
Create an object:
```

```JavaScript
{
 value: 100
}
```

```
Create a function that adds numbers to `value`.
```

```
Use:
-> call()
-> apply()
-> bind()
to execute it.
```

<hr><hr>
<br>

# PROTOTYPES

1. Prototype Lookup

```
Create:
```

```JavaScript
const person = {
  name: "Rahul"
};
```

```
Check whether:
-> person.hasOwnProperty("name")
comes from the object itself or its prototype.
```

```
Expected Learning
-> Prototype Chain
```

<hr>

2. Create a Custom Prototype Method

```
Add a method to:
-> Array.prototype
```

```
called:
-> sum()
```

```
Example:
-> [1,2,3,4].sum()
```

```
Output:
-> 10
```

<hr>

3. Object.create()

```
Create:
-> animal
```

```
object containing:
-> eat()
-> sleep()
```

```
Create a `dog` object using:
-> Object.create()
and access inherited methods.
```

<hr>

4. Prototype Inheritance

```
Create Object:
-> vehicle
```

```
Create Object:
-> car
-> bike
-> truck
```

```
using prototype inheritance.
```

```
Each should inherit:
-> start()
-> stop()
```

<hr>

5. Constructor Function + Prototype

```
Create a constructor:
-> Person
```

```
that accepts:
-> name
-> age
```

```
Add a method using:
-> Person.prototype.greet
```

```
Expected Output:
-> Hi, I am Rahul
```

<hr>

6. Prototype Chain Investigation

```
Create:
-> const arr = [];
```

```
Print:
-> arr.**proto**
-> arr.**proto**.**proto**
-> arr.**proto**.**proto**.**proto**
```

```
Explain the output.
```
