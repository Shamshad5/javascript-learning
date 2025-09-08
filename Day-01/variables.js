//VARIABLES IN JAVASCRIPT

// There are three ways to declare variables in JavaScript: var, let, and const.
// Each has its own characteristics and use cases.
//1. var
//2. let
//3. const
//1. VAR

// Example of using a variable before declaration
console.log(x); // ✅ undefined (due to hoisting)
var x = 10;
console.log(x); // ✅ 10

// Example of redeclaring a variable with 'var'
var y = 20;
var y = 30; // ✅ Allowed
console.log(y); // 30

// Example of function scope with 'var'
function testVar() {
  var z = 40;
  console.log(z); // 40
}

testVar();
// console.log(z); // ❌ ReferenceError: z is not defined (outside function scope)

//2. LET

// Example of using a variable before declaration
console.log(a); // ❌ ReferenceError
let a = 5;
console.log(a); // ✅ 5

// Example of redeclaring a variable with 'let'
let count = 1;
let count = 2; // ❌ SyntaxError: Identifier 'count' has already been declared
console.log(count);

//you can reassign the variable, but not redeclare it
let count = 1;
count = 2; // ✅ Allowed
console.log(count); // 2

//example of block scope with 'let'
let a = 100;
{
  let a = 200;
  console.log(a); // 200 (block scope)
}
console.log(a); // 100 (outer scope)


//CONSTANTS
const name = "Shamshad";
console.log(name); // Shamshad
name = "Alam"; // ❌ TypeError: Assignment to constant variable


// Example of block scope with 'const'
{
  const city = "Delhi";
  console.log(city); // ✅ Delhi
}
console.log(city); // ❌ ReferenceError: city is not defined

// Example of using a constant before declaration
console.log(a); // ❌ ReferenceError
const a = 10;
console.log(a); // ✅ 10

//you cannot  reassigned a constant
const num = 5;
num = 10; // ❌ TypeError: Assignment to constant variable


//you cannot redeclare a constant
const language = "JavaScript";
const language = "Python"; // ❌ SyntaxError: Identifier 'language' has already been declared


// However, you can modify properties of a constant object
const person = { name: "Alice", age: 25 };
person.age = 26; // ✅ Allowed (modifying property)
console.log(person.age); // 26

// ❌ Not allowed: reassigning the whole object
person = { name: "Bob", age: 30 }; // TypeError


// Similarly, you can modify elements of a constant array
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed (modifying array)
console.log(numbers); // [1, 2, 3, 4]

// ❌ Not allowed: reassigning array
numbers = [10, 20]; // TypeError




// Notes:
// - var is function scoped, let & const are block scoped
// - const cannot be reassigned
// - Prefer let/const in modern JavaScript



