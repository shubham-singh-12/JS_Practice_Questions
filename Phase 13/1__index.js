// ===================================================================================================================================================
// =================================================== this, call/apply/bind, Prototypes & Classes ===================================================
// ===================================================================================================================================================

// ====================================================================== EASY =======================================================================
/*
1. Identify what 'this' refers to when a method is called using an object.

const user = {
    name: "Shubham",
    greet() {
        console.log(this.name);
    }
};

user.greet();

Expected Output: Shubham
*/

// ===================================================================================================================================================
/*
2. 
function show() {
    console.log(this);
};

show();

Expected Output
Depends on:
- Browser
- Node.js
- Strict Mode
*/

// ===================================================================================================================================================
/* 3.
const car = {
    brand: "BMW",
    showBrand() {
        console.log(this.brand);
    }
};

Predict Output.
*/

// ===================================================================================================================================================
/*
function greet() {
    console.log(this.name);
};

const user = {
    name: "Shubham"
}

Use 'call()' to print:
Shubham
*/

// ===================================================================================================================================================
/*
function introduce(city) {
    console.log(`${this.name} from ${city}`);
}

const person = {
    name: "Shubham"
};

Use apply()

Expected Output:
Shubham from Delhi
*/

// ===================================================================================================================================================
/*
function greet() {
    console.log(this.name);
};

const user = {
    name: "Priya"
};

Create a permanently bound function.
*/

// ===================================================================================================================================================
/*
7. Arrow Function 'this'

const user = {
    name: "Shubham",
    greet: () => {
        console.log(this.name);
    }
};

user.greet();

Predict Output
*/

// ===================================================================================================================================================
/*
8. Event Handler Theory

What is the difference between:
button.addEventListener("click", function(){})

and
button.addEventListener("click", () => {})

    regarding this ?
*/

// ===================================================================================================================================================
/*
9. Constructor Function

Create:
function Person(name) {
    this.name = name;
}

Create an object:
new Person("Shubham")

Expected Output:
{
name: "Shubham"
}
*/

// ===================================================================================================================================================
/*
10. Prototype Lookup

const arr = [1, 2, 3];

where does:
arr.push()

come from ?
*/

// ===================================================================================================================================================
// ==================================================================== MODERATE =====================================================================

/*
11. Lost 'this'

Fix it:

const user = {
    name: "Shubham",
    greet() {
        console.log(this.name);
    }
};

const fn = user.greet;
fn();

Expected Output:
Shubham
*/

// ===================================================================================================================================================
/*
12. Borrow Method using call()

const user1 = {
    name: "Shubham"
};

const user2 = {
    name: "Aman"
};

Create one method and use it for both objects.
*/

// ===================================================================================================================================================
/*
13. Apply with Math.max

Find maximum number using:
Math.max()

and:
apply()

Array:
[10, 20, 50, 5]

Expected Output:
50
*/

// ===================================================================================================================================================
/*
14. Create prototype inheritance

const animal = {
    eats: true
}

Create:
dog

using:
Object.create()
*/

// ===================================================================================================================================================
/*
15. Shared Prototype Method

Create:
person.prototype.greet
and make multiple object use it.
*/

// ===================================================================================================================================================
/*
16. Check Prototype Relationship

function Person() {}

const p = newPerson();

Varify:
p.__proto__===Person.prototype

Expected Output:
true
*/

// ===================================================================================================================================================
/*
17. Student Class

Create:
class Student

with:
name
marks
*/

// ===================================================================================================================================================
/*
18. Car Class

Create:
class Car

with:
brand
start()

output:
BMW started
*/

// ===================================================================================================================================================
/*
19. Getter

Create:
fullName
using a getter.

Example
p.fullName

Should return:
Shubham Singh
*/

// ===================================================================================================================================================
/*
20. Setter

Create: 
fullName
setter

Input:
p.fullName = "Shubham Singh"

Expected Behaviour
Update:
fullname
lastName
*/

// ===================================================================================================================================================
// ====================================================================== HARD =======================================================================
/*
21. Employee Inheritance

Create:
class Employee

and
class Developer

using:
extends
*/

// ===================================================================================================================================================
/*
22. Animal Hierarchy

Create:
Animal -> Dog -> Labrador

Scenario:
multi-level inheritance
*/

// ===================================================================================================================================================
/*
23. Static Method

Create:
MathHelper.add()

Example
MathHelper.add(5, 10)

Output:
15
*/

// ===================================================================================================================================================
/*
24. Static Property

Create:
mathHelper.PI

Output:
3.14159
*/

// ===================================================================================================================================================
/*
Bank Account

Create:
class BankAccount

with:
#balance

Methods:
deposit()
withdraw()

Expected Output:
700

after:
deposit(1000)
withdraw(300)
*/

// ===================================================================================================================================================
/*
26. Shopping Cart Class

Crete:
class ShoppingCart

Methods:
additem()
removeItem()
getTotal()
*/

// ===================================================================================================================================================
/*
27. Library Management System

Create classes:
Book
Library

Methods:
addBook()
borrowBook()
returnBook()
*/

// ===================================================================================================================================================
/*
28. Prototype vs Class investigation

Create:
class Person{}

Verify:
typeof Person

Expected Output:
function
*/

// ===================================================================================================================================================
/*
29. Custom Array Method

Add:
Array.prototype.last

Example:
[1, 2, 3].last()

Output:
3
*/

// ===================================================================================================================================================
/*
30. Complete School Management System (Interview Level)

Create:
class Student
class Teacher
class School

Requirements:
Student
- name
- marks

Teacher
- name
- subject

School
Methods:
- addStudent()
- addTeacher()
- getTopper()
- getAverageMarks()

Example Output:
Topper: Shubham
AverageMarks: 82
*/
