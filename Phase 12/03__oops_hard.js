// ===================================================================================================================================================
// ====================================================================== HARD =======================================================================
// ===================================================================================================================================================

/*
1. Create a class:
class Student

Properties:
name
marks

Methods:
getGrade()

Rules:
90+ => A
75+ => B
60+ => C
Otherwise => F
*/

// ===================================================================================================================================================
/*
2. Create:
class Employee

Properties:
name
salary

Method:
work()

Then create:
class Developer
that extends Employee

Add:
code()
method.
*/

// ===================================================================================================================================================
/*
3. Create:
class BankAccount

Requirements:

Private Field
#balance

Mathods
deposit(amount)
withdraw(amount)
getBalance()

Rule:
- cannot withdraw more than available balance.
- Balance should never be directly accessible.

Example:
const acc = newBankAccount();
acc.deposit(1000);
acc.withdraw(300);
console.log(acc.getBalance());

Output: 700
*/