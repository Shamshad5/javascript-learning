//Objects
//Objects are used to store multiple values in a single variable
//Objects are written with curly braces {}
//Objects can contain properties and methods
//A property is a variable that is attached to the object
//A method is a function that is attached to the object
//You can access the properties and methods of an object using the dot notation or bracket notation
// Day-5: Objects in JavaScript

//Creating an Object (Object Literal)
const person = {
  name: "Shamshad",
  age: 25,
  isDeveloper: true
};

console.log("Person Object:", person);

//Accessing Properties
console.log("Name:", person.name);      // Dot notation
console.log("Age:", person["age"]);     // Bracket notation

//Adding & Updating Properties
person.city = "Delhi";  // Adding
person.age = 26;        // Updating
console.log("Updated Person:", person);

//Deleting a Property
delete person.isDeveloper;
console.log("After Deleting isDeveloper:", person);

//Nested Objects
const user = {
  username: "sam123",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};
console.log("Nested City:", user.address.city);

//Looping Through Objects (for...in)
for (let key in user) {
  console.log(`${key}:`, user[key]);
}

//Object Methods
const student = {
  name: "John",
  marks: 85,
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  }
};
student.greet(); // Calling the method

//Object.keys(), Object.values(), Object.entries()
console.log("Keys:", Object.keys(student));      // ["name", "marks", "greet"]
console.log("Values:", Object.values(student));  // ["John", 85, ƒ]
console.log("Entries:", Object.entries(student)); // [["name","John"], ["marks",85]...]

//Object Destructuring
const { name, marks } = student;
console.log("Destructured Name:", name);
console.log("Destructured Marks:", marks);

//Spread Operator with Objects
const job = { role: "Developer", company: "ABC Ltd" };
const mergedObj = { ...student, ...job };
console.log("Merged Object:", mergedObj);
