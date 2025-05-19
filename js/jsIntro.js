const myHeading = document.querySelector("h1");
console.log("myHeading: ", myHeading);

myHeading.textContent = "Hello world!";

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);

// Variables
let myVariable = "Hello world!";
console.log("myVariable: ", myVariable);

// Strings
let myString = "Hello world!";  
console.log("myString: ", myString);

// Number
let myNumber = 42;
console.log("myNumber: ", myNumber);

// Boolean
let myBoolean = true;
console.log("myBoolean: ", myBoolean);

// Array
let myArray = [1, 2, 3, 4, 5];
console.log("myArray: ", myArray);

// Object
let myObject = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("myObject: ", myObject);

// Function
function myFunction() {
  console.log("Hello from myFunction!");
}
myFunction();

// Arrow function
const myArrowFunction = () => {
  console.log("Hello from myArrowFunction!");
};
myArrowFunction();

// Class
// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }