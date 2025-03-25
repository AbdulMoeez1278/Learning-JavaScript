// CONDITIONALS STATEMENTS | EXPRESSIONS

let a = prompt("Hello World"); // generate a prompt using javascript
// console.log(a);

a = Number.parseInt(a); // converting the string to a number
// console.log(typeof a);

// 1: if statement
let x = 10;
if (x > 8) {
  //   console.log("X is greater than the given value");
}

// 2: if else statement
if (x > 8) {
  // ---> if this condition is true than it prints this block
  // console.log("X is greater than the given value");
} else {
  // ---> if the condition is false than this block executes
  // console.log("X is not greater than the given value");
}

// 3: if-else-if statement
let age = 18;
if (age < 0) {
  // console.log("Invalid age");
} else if (age < 10) {
  // console.log("You are a kid");
} else if (age < 18 && a >= 10) {
  // console.log("You are still a kid");
} else {
  // console.log("You are not a kid anymore");
}

// Ternary Operator
let actualAge = 18;
let drive = actualAge < 18 ? "You can drive!" : " You cannot drive!";
// console.log(drive);
