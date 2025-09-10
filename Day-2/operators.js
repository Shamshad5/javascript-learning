//OPERATORS IN JAVASCRIPT

// This file demonstrates various operators in JavaScript with examples.
// Each operator is shown with a brief comment explaining its purpose.
// You can run this code in a JavaScript environment to see the results.

// Arithmetic Operators
let a = 10;
let b = 5; 
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0
console.log(a ** b); // Exponentiation: 100000  
console.log(++a); // Increment: 11
console.log(--b); // Decrement: 4
console.log(a); // 11
console.log(b); // 4

// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15
c -= 3; // c = c - 3
console.log(c); // 12
c *= 2; // c = c * 2
console.log(c); // 24
c /= 4; // c = c / 4
console.log(c); // 6
c %= 4; // c = c % 4
console.log(c); // 2
c **= 3; // c = c ** 3
console.log(c); // 8

// Comparison Operators
let x = 10;
let y = '10';
console.log(x == y); // Equal to: true
console.log(x === y); // Strict equal to: false
console.log(x != y); // Not equal to: false
console.log(x !== y);   // Strict not equal to: true
console.log(x > 5); // Greater than: true
console.log(x < 15); // Less than: true
console.log(x >= 10); // Greater than or equal to: true
console.log(x <= 10); // Less than or equal to: true

// Logical Operators
let p = true;
let q = false;
console.log(p && q); // Logical AND: false
console.log(p || q); // Logical OR: true
console.log(!p); // Logical NOT: false
console.log(!q); // Logical NOT: true

// Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log(m & n); // Bitwise AND: 1 (0001 in binary)
console.log(m | n); // Bitwise OR: 7 (0111 in binary)
console.log(m ^ n); // Bitwise XOR: 6 (0110 in binary)
console.log(~m); // Bitwise NOT: -6 (inverts bits)
console.log(m << 1); // Left shift: 10 (1010 in binary)
console.log(m >> 1); // Right shift: 2 (0010 in binary)
console.log(m >>> 1); // Unsigned right shift: 2 (0010 in binary)

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Yes

// Type Operators
let str = "Hello";
let num = 42;
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)

// Comma Operator
let e = (1, 2, 3);
console.log(e); // 3 (the last value)

// Note: All these operators can be used in normal JavaScript code.




