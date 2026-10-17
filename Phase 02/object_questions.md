# OBJECTS

## Beginner

1. Create object for a student.
2. Access properties using dot notation.
3. Access properties using bracket notation.
4. Add new property dynamically.
5. Update existing property.
6. Delete a property.
7. Create object method.
8. Use `this` keyword inside method.
9. Create nested object.
10. Access deeply nested property.
11. Destructure object properties.
12. Rename variables while destructuring.
13. Add default values during destructuring.
14. Copy object using spread operator.
15. Merge two objects.
16. Create an Object

```
Create an object for a student with:

name
age
course

Then print all values.
```

<hr>

1.  Access Properties

```
Given:
```

```JavaScript
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}
```

```
Print:

- brand
- model
```

```
using both:

- dot notation
- bracket notation
```

<hr>

18. Update Object Value

```
Change the age of a user from 20 to 25.
```

```JavaScript
const user = {
  name: "Anubhav",
  age: 20
}
```

<hr>

19. Add New Property

```
Add a new property to this object.:
```

```JavaScript
isAdmin: true
```

<hr>

20. Delete Property

```
Remove the `password` property from the object.
```

```JavaScript
const account = {
  username: "john",
  password: "12345"
}
```

<hr>

21. Update age to 21.

```JavaScript
let user = {
    name: "Shubham",
    age: 20,
};
```

<hr>

22. Print the user's name.

```JavaScript
let user = {
    name: "Shubham",
    age: 21,
    city: "Delhi"
};
```

```
Expected Output: Shubham
```

<hr>

23. Update age to 22

```JavaScript
let user = {
    name: "Shubham",
    age: 21
};
```

```
Expected Output:
```

```JavaScript
{
name: "Shubham",
age: 22
}
```

<hr>

24. Add a property: country: "India"

```JavaScript
let user = {
    name: "Shubham",
    Ciy: "Delhi"
};
```

<hr>

25. Delete the password property

```JavaScript
let user = {
    name: "Shubham",
    age: 21,
    password: "12345"
}
```

<hr>

26. Check if the object contains a property called "price".

```JavaScript
let product = {
    name: "Laptop",
    price: 60000
};
```

<hr>

27. Print all property names.

```JavaScript
let car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};
```

```
Expected Output: ["brand", "model", "year"]
```

<hr>

28. Print all values

```JavaScript
let car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};
```

```
Expected Output: ["BMW", "X5", 2025]
```

<hr><hr>
<br>

## Intermediate

### 1. Count Properties

```
Write a function that returns how many properties an object has.
```

```
Example:
countProperties({a:1,b:2,c:3})
```

```
Expecter Output:
// 3
```

```
Hint:
Use:
- Object.keys()
```

<hr>

### 2. Loop Through Object

```
Print all keys and values from this object.
```

```JavaScript
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
```

```
Hint:
Use:
- for...in
```

<hr>

### 3. Check Property Exists

```
Check whether `"email"` exists inside an object or not.
```

```
Hint:
Use:
- in
```

<hr>

### 4. Merge Two Objects

```
Merge these two objects into one.
```

```JavaScript
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
```

```
Hint:
Use:
- spread operator
```

<hr>

### 5. Convert Object to Array

```
Convert this object into an array of key-value pairs.
```

```JavaScript
const user = {
  name: "Aman",
  age: 21
}
```

```
Hint:
Use:
- Object.entries()
```

<hr>

### 6. Find Highest Value

```
Find the student with highest marks.
```

```JavaScript
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}
```

```
Expected Output:
"Anubhav"
```

<hr>

### 7. Sum of Object Values

```
Find total salary.
```

```JavaScript
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}
```

```
Expected Output:
4500
```

<hr>

### 8. Nested Object Access

```
Print:
- city
- pincode
```

```JavaScript
const user = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}
```

<hr>

### 9. Object Method Practice

```
Create an object with:
- name
- marks
- method called `getResult`
```

```
If marks > 40:
"Pass"
else:
"Fail"
```

<hr>

### 10. Convert Array to Object

```
Convert this array into an object.
```

```JavaScript
const arr = ["name", "Anubhav", "age", 24]
```

```
Expected Output:
```

```JavaScript
{
  name: "Anubhav",
  age: 24
}
```

<hr>

### 11. Print user information

```JavaScript
let user = {
    name: "Shubham",
    age: 20,
    city: "Delhi",
};
```

```
Expected Output:
```

```
name: Shubham
age: 21
city: Delhi
```

<hr>

### 12. Increase Employee salary by 10%

```JavaScript
let employee = {
    name: "Shubham",
    salary: 50000
};
```

<hr>

### 13. Print city information

```JavaScript
let user = {
    name: "Shubham",
    address: {
        city: "Delhi",
        state: "UP"
    }
};
```

```
Expected Output: Delhi
```

<hr>

### 14. Extract name, age

```JavaScript
let student = {
    name: "Shubham",
    age: 20,
    course: "B-Tech"
};
```

<hr>

### 15. Rename During Destructuring

```JavaScript
let student = {
    name: "Shubham",
    age: 20
};
```

```
TASK CREATE: studentName, studentAge
```

<hr>

### 16. Combine both objects

```JavaScript
let user = {
    name: "Shubham",
    age: 21
};
```

```JavaScript
let address = {
    city: "Delhi",
    state: "UP"
};
```

<hr>

### 17. Find how many properties exists

```JavaScript
let user = {
    name: "Shubham",
    age: 21,
    city: "Delhi",
    country: "India"
};
```

<hr><hr>
<br>

## Hard

1. Find the employee with the highest salary.

```JavaScript
let employees = {
    aman: 25000,
    ritik: 5000,
    priya: 45000,
};
```

```

Expected Output: "ritik"
```

<hr>

2. Find the language with the highest votes.

```JavaScript
let votes = {
    JavaScript: 25,
    Python: 30,
    Java: 15,
    Cpp: 10
};
```

<hr>

3.

```JavaScript
   let countries = {
       India: "Delhi",
       Japan: "Tokyo",
       France: "Paris"
   };
```

```JavaScript
Convert into:
{
Delhi: "India",
Tokyo: "Japan",
Paris: "France"
}
```

<hr>

4. Calculate total marks

```JavaScript
let marks = {
    math: 90,
    science: 80,
    english: 85
};
```

<hr>

5. Check whether email exists, if not add email: "Not Provided"

```JavaScript
let user = {
    name: "Shubham",
    age: 21
};
```

<hr>

6. Find total items in stock, Product with highest stock, Product with lowest stock.

```JavaScript
let inventory = {
    mouse: 25,
    keyboard: 10,
    monitor: 5,
    laptop: 2
};
```

<hr>

7. Create a person object with properties: name, age, city. Then:

```

- Log each property as: value of "name" property is "Shubham" using loop.
- Add a new property called email to the person object.
- Delete "city" property from person object.
```

<hr>

8. Create a function that takes an object with firstName, middleName, lastName properties and returns the full name.

<hr>

9. Write a function that takes object and returns the number of properties in an Object.

<hr>

10. Write a function that returns an array of names of users who have the role "admin".

```JavaScript
const users = [
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "Charlie", role: "admin"},
];
```

<hr>

11. Write a function searchProducts(products, keyword) that returns an array of products whose name includes tha given keyword (case-insensitive).

```JavaScript
const products = [
    {id: 1, name: "iPhone 14"},
    {id: 2, name: "Samsung Galaxy"},
    {id: 3, name: "Google Pixel"},
];
```

<hr>

12. Write a function groupByPost(comments) that returns an object grouping comments by postId:

```JavaScript
cons comments = [
    {postId: 1, text: "Great post!"},
    {postId: 2, text: "Great Thanks!"},
    {postId: 3, text: "Very helpful!"},
];
```

<hr>

13. Write a buildQuery(params) that returns

```JavaScript
const params = {search: "laptop", page: 2, sort: "price"};
```

```
OUTPUT -> "search=laptop&page=2&sort=price"
```

<hr><hr>
<br>

## Advance Object + Real Logic

1. Use `Object.keys()` on object.
2. Use `Object.values()`.
3. Use `Object.entries()`
4. Loop through object using `for...in`.
5. Freeze an object and test modification.
6. Seal an object and test modification.
7. Create array of objects for users.
8. Find user with highest age.
9. Build a mini TODO app using arrays + objects.
10. Build a shopping cart system with:

```
- add item
- remove item
- calculate total
- quantity update
```

<hr>

11. Frequency Counter

```
Count frequency of each character.
```

```
Input:
"banana"
```

```
Expected Output:
{
  b:1,
  a:3,
  n:2
}
```

<hr>

12. Group By Property

```
Group users by age.
```

```JavaScript
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]
```

```
Expected Output:
{
  20: [
    { name: "A", age: 20 },
    { name: "C", age: 20 }
  ],
  21: [
    { name: "B", age: 21 }
  ]
}
```

<hr>

13. Deep Property Check

```
Check whether this property exists:
```

```
"user.address.city"
```

```
inside an object dynamically.
```

```
Hint:
Use:
- split(".")
```

<hr>

14. Object Comparison

```
Check if two objects have same keys and values.
```

```
Example:
{a:1,b:2}
{a:1,b:2}
```

```
Expected Output:
true
```

<hr>

15. Remove Duplicate Objects

```
Remove duplicate objects from array based on `id`.
```

```JavaScript
[
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]
```

```
Expected Output:
```

```JavaScript
[
  {id:1,name:"A"},
  {id:2,name:"B"}
]
```
