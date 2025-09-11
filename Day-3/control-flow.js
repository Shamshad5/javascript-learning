//CONROLE FLOW

// if, else if, else
// switch
// for loop
// while loop
// do while loop
// break, continue
// for...in
// for...of
// forEach

// if, else if, else
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age === 18) {
    console.log("You just became an adult.");
}
else {
    console.log("You are an adult.");
}


// switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// while loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


// do while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// break, continue
for (let l = 1; l <= 10; l++) {
    if (l === 5) {
        break; // exit the loop when l is 5
    }
    if (l % 2 === 0) {
        continue; // skip the even numbers
    }
    console.log(l); // will print only odd numbers less than 5
}


// for...in
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}


// for...of
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}


// forEach
colors.forEach(function (color) {
    console.log(color);
});


// Arrow function with forEach
colors.forEach(color => console.log(color));


// End of controleFlow.js

