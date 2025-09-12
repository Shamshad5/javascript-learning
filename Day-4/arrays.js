//ARRAYS IN JAVASCRIPT

// An array is a special variable, which can hold more than one value at a time.
// It is a collection of items stored at contiguous memory locations.
// Each item in an array is called an element, and each element has a numeric index starting from 0.
// Arrays can hold items of any data type, including numbers, strings, objects, and even other arrays.

const myArray = [1, 2, 3, 4, 5];// this is just normal array
console.log(myArray);//output will be [1,2,3,4,5]

//Commonly used array methods and properties:

//Push Method
myArray.push(6);//when you want to add an element at the end of the array use push method                
console.log(myArray);//output will be [1,2,3,4,5,6] 

//Unshift Method
myArray.unshift(0);//when you want to add an element at the beginning of the array use unshift method
console.log(myArray);//output will be [0,1,2,3,4,5,6]

//Pop Method
myArray.pop();//when you want to remove an element from the end of the array use pop method
console.log(myArray);//output will be [0,1,2,3,4,5]

//Shift Method
myArray.shift();//when you want to remove an element from the beginning of the array use shift method
console.log(myArray);//output will be [1,2,3,4,5]

//Splice Method
myArray.splice(2, 1);//when you want to remove an element from a specific index use splice method, 
                     // first argument is the index and second argument is the number of elements to be removed
console.log(myArray);//output will be [1,2,4,5]

//Splice Method to add an element
myArray.splice(2, 0, 3);//when you want to add an element at a specific index use splice method,
                        //  first argument is the index, 
                        // second argument is the number of elements to be removed and third argument is the element to be added
console.log(myArray);//output will be [1,2,3,4,5]

//Slice Method
const newArray = myArray.slice(1, 4);//when you want to create a new array from an existing array use slice method,
                                     // first argument is the starting index and second argument is the ending index (not inclusive)
console.log(newArray);//output will be [2,3,4]
console.log(myArray);//original array will remain unchanged [1,2,3,4,5]

//IndexOf Method
const index = myArray.indexOf(3);//when you want to find the index of an element in an array use indexOf method
console.log(index);//output will be 2

//includes Method
const isPresent = myArray.includes(4);//when you want to check if an element is present in an array use includes method
console.log(isPresent);//output will be true

//Length Property
const length = myArray.length;//when you want to find the length of an array use length property
console.log(length);//output will be 5

//Join Method
const joinedString = myArray.join('-');//when you want to join all elements of an array into a string use join method,
                                      // argument is the separator
console.log(joinedString);//output will be "1-2-3-4-5"

//Reverse Method
const reversedArray = myArray.reverse();//when you want to reverse the order of elements in an array use reverse method
console.log(reversedArray);//output will be [5,4,3,2,1]

//Sort Method
const sortedArray = myArray.sort((a, b) => a - b);//when you want to sort the elements of an array use sort method,
                                                  // argument is a compare function
console.log(sortedArray);//output will be [1,2,3,4,5]

//Map Method
const mappedArray = myArray.map(x => x * 2);//when you want to create a new array by applying a function to each element of an array use map method,
                                              // argument is a function
console.log(mappedArray);//output will be [2,4,6,8,10]

//Filter Method
const filteredArray = myArray.filter(x => x % 2 === 0);//when you want to create a new array with all elements that pass a test use filter method,
                                                       // argument is a function
console.log(filteredArray);//output will be [2,4]

//Reduce Method
const sum = myArray.reduce((acc, curr) => acc + curr, 0);//when you want to reduce an array to a single value use reduce method,
                                                        // first argument is a function and second argument is the initial value
console.log(sum);//output will be 15

//forEach Method
const forEachArray = [];//when you want to execute a function for each element in an array use forEach method
myArray.forEach(x => forEachArray.push(x * 3));
console.log(forEachArray);//output will be [3,6,9,12,15]



//Note: All these methods and properties are available for normal arrays in JavaScript.
//These methods do not modify the original array unless specified (like push, pop, shift, unshift, splice, reverse, sort).
//Methods like slice, map, filter, reduce, forEach return new arrays or values without modifying the original array.
//Also, array indices are zero-based, meaning the first element is at index 0.
//You can chain multiple methods together for more complex operations.
