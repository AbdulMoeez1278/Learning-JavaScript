// // CONDITIONALS STATEMENTS | EXPRESSIONS

// let a = prompt("Hello World"); // generate a prompt using javascript
// // console.log(a);

// a = Number.parseInt(a); // converting the string to a number
// // console.log(typeof a);

// // 1: if statement
// let x = 10;
// if (x > 8) {
//   //   console.log("X is greater than the given value");
// }

// // 2: if else statement
// if (x > 8) {
//   // ---> if this condition is true than it prints this block
//   // console.log("X is greater than the given value");
// } else {
//   // ---> if the condition is false than this block executes
//   // console.log("X is not greater than the given value");
// }

// // 3: if-else-if statement
// let age = 18;
// if (age < 0) {
//   // console.log("Invalid age");
// } else if (age < 10) {
//   // console.log("You are a kid");
// } else if (age < 18 && a >= 10) {
//   // console.log("You are still a kid");
// } else {
//   // console.log("You are not a kid anymore");
// }

// // Ternary Operator
// let actualAge = 18;
// let drive = actualAge < 18 ? "You can drive!" : " You cannot drive!";
// // console.log(drive);

// single if - statement
let x = 5;
if (x > 10) {
  console.log("x is greater than 10"); // This line will not be executed
}
console.log("This line will always be executed"); // This line will be executed regardless of the condition

// Practiced Questions - (Basic IF / ELSE)
// 1: Write a program that checks if a number is positive or negative.
let number = -5;
if (number < 0) {
  console.log("Number is Negative!");
} else if (number > 0) {
  console.log("Number is Positive!");
} else {
  console.log("Number is Zero!");
}

// 2: Check if a number is even or odd.
if (number % 2 == 0) {
  console.log("Number is Even!");
} else {
  console.log("Number is Odd!");
}

// 3: Check if a person is eligible to vote (age must be ≥ 18).
let personAge = 21;
if (personAge <= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote!");
}

// using ternary operator
const eligible =
  personAge >= 18
    ? "You are eligible to vote."
    : "You are not eligible to vote.";

console.log(eligible);

// 4: Compare two numbers and print the greater one.
let number1 = 10;
let number2 = 20;
if (number1 == number2) {
  console.log("Numbers are Same!");
} else {
  console.log("Numbers are not Same!");
}

let number3 = 10;
let number4 = 10;
if (number3 >= number4) {
  console.log("Numbers are Same!");
} else {
  console.log("Numbers are not Same!");
}

// 5:  Check if a string contains the word "hello".
// let str = "This is a hello world example";
// if (str.contains("hello")) {  // contains method is not for strings in javascript
//   console.log("Str contains the following string!");
// } else {
//   console.log("Str does not contain the following string!");
// }

let str2 = "This is a hello world example";

if (str2.includes("hello")) {
  console.log("The string contains 'hello'");
} else {
  console.log("The string does not contain 'hello'");
}

// Practiced Questions - (IF...ELSE IF / SWITCH / Ternary)
// 6:  Create a grade calculator:
// If marks are:
// 90–100 → A+
// 80–89 → A
// 70–79 → B
// 60–69 → C
// <60 → Fail

let marks = 70;

if (marks >= 90 && marks <= 100) {
  console.log("Grade A+");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade A");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade B");
} else if (marks >= 60 && marks < 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//7:  Check whether a year is a leap year.
// (Hint: divisible by 4, but not 100 unless also 400)
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}

// 8: Ask the user to enter a number from 1 to 7 and print the day of the week using switch.
// let user = prompt("Enter a number from 1 to 7");
// let day = Number.parseInt(user);
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid number! Please enter a number from 1 to 7.");
// }

// 9: Use a ternary operator to check if a number is divisible by 3 or not.
let num = 5;
let result = num % 3 === 0 ? "Divisible by 3" : "Not divisible by 3";
console.log(result);
