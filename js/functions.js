// FUNCTIONS // A function is a set of statements that performs a task or calculates a value.

// 🔴🟡🟢✅🔹🧠✔️🎯5️⃣4️⃣3️⃣2️⃣1️⃣🔁🔥 //

// Reuse code (DRY principle: Don’t Repeat Yourself)
// Organize logic better
// Improve readability and maintainability

// average of two numbers
let a = 1;
let b = 2;
let c = 3;
// get an average
console.log("Average of a and b is ", (a + b) / 2);
console.log("Average of a and b is ", (b + c) / 2);
console.log("Average of a and b is ", (a + c) / 2);

// one plus average of two numbers
function onePlusAvg(a, b) {
  return 1 + (a + b) / 2;
}
console.log(onePlusAvg(5, 5));
console.log(onePlusAvg(20, 8));
console.log(onePlusAvg(9, 27));
// onePlusAvg(a, b);
// onePlusAvg(b, c);
// onePlusAvg(a, c);

function onePlusAvg(a, b) {
  return Math.round(1 + (a + b) / 2);
}

// sum function by using arrow function
let x = 1;
let y = 2;
let z = 3;
const sum = (p, q) => {
  return p + q;
};

console.log(sum(5, 25));

// greeting function by using the arrow function
const hello = () => {
  console.log("Hello");
};

hello();

// another simple greeting function
const sayHi = function (name) {
  console.log("Hi, " + name);
};

sayHi("Ali");

// another greeting function by using the arrow function
const greet = (name) => {
  console.log("Hello " + name + "!");
};

greet("Abdul Moeez");

// find a mean of 5 numbers by using the arrow function
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(1, 2, 3, 4, 5));

function add(a, b) {
  return a + b;
}

let result = add(5, 13);
console.log(result);

// Practice Questions

// 1: Write a function that takes a number and returns its square.
function square(n) {
  return n * n;
}

console.log(square(2));

// 2: Create a function that greets the user by name.
function greets(name) {
  return "Hello " + name + "!";
}

console.log(greets("Moiz"));

// 3: Write a function that adds two numbers and returns the result.
function sumTwoNumbers(a, b) {
  return a + b;
}

console.log(sumTwoNumbers(3, 2));

// if we don't pass the arguments or simply call the function
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius;
console.log(value); // gives the function as it is

// if we call the function without passing an argument
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let values = toCelsius();
console.log(values); // it gives NaN as an output because we are not giving any arguments.

// Write a function that takes a person object and prints a greeting using their name and age.
// functions with objects //
const user = {
  username: "Moeez",
  age: 23,
};

function handleObjects(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObjects(user);
// also pass direct object in the arguments
handleObjects({
  username: "Moeez",
  age: 23,
});

// functions with arrays //
const newArr = [200, 400, 500];

function withArray(getArray) {
  return getArray[1];
}

// console.log(withArray(newArr));
// we can also pass direct array in the argument
console.log(withArray([200, 400, 500]));

// Create a function that returns the number of keys in an object.
let keyObject = {
  a: 1,
  b: 2,
  c: 3,
};

function keysNumber(obj) {
  return Object.keys(obj).length;
  // console.log(Object.keys(obj).length);
}

console.log("Number of keys are:", keysNumber(keyObject)); // Output: 3
