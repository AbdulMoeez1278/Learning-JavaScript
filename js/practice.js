// // Tasks for Day 1 (JavaScript Introduction & Output)
// // Day 1 Practice Questions:

// // 1: Show your name using alert().
// // alert("Abdul Moeez");

// // 2: Show your favorite color using console.log().
// console.log("Blue");

// // 4: Display your city name using document.write().
// let variable = "Chishtian";
// document.write(variable);
// console.log("Chishtian");

// // 5: Use innerHTML to change the content of an element with id="myText" (Example: change "Hello" to "I love JavaScript").
// let myText = document.getElementById("myText");
// myText.innerHTML = "I love JavaScript";
// console.log(myText);

// // 6: Combine two strings (like "Hello" + " World") and print the result in the console.
// let twoStrings = "Hello" + " World";
// console.log(twoStrings);

// // Day 2: JavaScript Variables & Data Types
// // Day 2 Practice Questions:

// // Declare 3 variables: your name, your age, your city (use let)
// let name = "Abdul Moeez";
// let age = 20;
// let city = "Chishtian";

// console.log("name: " + name);
// console.log("age: " + age);
// console.log("city: " + city);

// // 2: Declare a constant variable for your country.
// const country = "Pakistan";
// console.log("country: " + country);

// // 3: Declare a variable without assigning a value, then console.log() it.
// let myVariable;
// console.log("myVariable: " + myVariable);

// // 4: Create a variable isOnline and set it to true. Print its type using typeof.
// let isOnline = true;
// console.log(typeof isOnline);

// // 5: Create an object with properties: firstName, lastName, and age.
// let obj = {
//   firstName: "Abdul",
//   lastName: "Moeez",
//   age: 20,
// };
// console.log(typeof obj);

// // 6: Create an array with 5 of your favorite foods and log the second item.
// let favoriteFoods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Sushi"];
// console.log(typeof favoriteFoods);

// // 7: Show the output of typeof for these values: "hello", 99, true, null, undefined, [1, 2, 3]
// console.log(typeof "hell0");
// console.log(typeof 99);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof [1, 2, 3]);

let intro = document.getElementById("intro").innerHTML;
console.log(intro);
let intro2 = document.getElementById("intro2").outerHTML;
console.log(intro2);
let intro3 = document.getElementById("intro3").innerText;
console.log(intro3);
let intro4 = document.getElementById("intro4").textContent;
console.log(intro4);

// let num1 = 4;
// console.log(num1);
// num1++;
// console.log(num1);

// Day 3: JavaScript Operators
//  Practice Questions for Day 3:

// 1: Create 2 variables: x = 12, y = 4. Show results of all arithmetic operations using console.log().
let x = 12;
let y = 4;
// console.log(x);
// console.log(y);

// console.log("Addition: " + (x + y));
// console.log("Subtraction: " + (x - y));
// console.log("Multiplication: " + x * y);
// console.log("Division: " + x / y);
// console.log("Modulus: " + (x % y));
// console.log("Exponentiation: " + x ** y);
// console.log("Increment: " + ++x);
// console.log("Decrement: " + --y);

// 2: Try x += y, then print the new value of x.
x += y;
// console.log(x);
// console.log(y);
console.log("New value of x: " + x);

// 3: Use == and === to compare 5 and '5' — what’s the difference?
console.log(5 == "5");
console.log(5 === "5");
// console.log(5 === 5);
// console.log("5" === "5");

// 4: Use !== to check if 10 and '10' are not equal (strict).
console.log(10 !== "10");
// console.log(10 !== 10);
// console.log("10" !== "10");

// 5: Write a condition using && to check if:
// Age is above 18 AND
// User is verified (boolean)
let age = 20;
let isVerified = true;
if (age > 18 && isVerified) {
  console.log("User is above 18 and verified.");
}

// 6: Write a condition using || to check if:
// Age is less than 18 OR
// User is not verified
let age2 = 10;
let isVerifiedAge = true;
if (age2 < 18 || !isVerifiedAge) {
  console.log("User is either under 18 or not verified.");
}

// Day 4: JavaScript Strings & String Methods
// Day 4 Practice Questions:

// 1: Declare a string variable with your full name.
let fullName = "Abdul Moeez Tariq";
console.log("Full Name is:" + " " + fullName);

// 2: Print how many characters are in your name.
let nameLength = fullName.length;
console.log("Length is" + " " + nameLength);

// 3: Convert your name to uppercase and lowercase.
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// 4: Get the first and last character from your name.
console.log(fullName[0]); // first character
console.log(fullName.charAt(0)); // first character
console.log(fullName.charAt(16)); // last character
console.log(fullName.charAt(fullName.length - 1)); // last character

// 5: Replace your first name with a nickname.
console.log(fullName.replace("Abdul Moeez Tariq", "Moizy"));

// 6: Create a sentence like "I love JavaScript!", then check if it includes the word "love".
let sentence = "I love JavaScript!";
console.log(sentence.includes("love"));

// 7: Split the sentence "HTML,CSS,JavaScript" into an array.
let languages = "HTML,CSS,JavaScript";
let languagesArray = languages.split(",");
console.log(languagesArray);

// 8: Trim the extra spaces from " Frontend Developer " and print the result.
let designation = " Frontend Developer ";
console.log(designation.trim());

// 9: Use slice/substring to extract "Script" from "JavaScript".
let extractString = "JavaScript";
console.log(extractString.substring(4, 10));
console.log(extractString.slice(4, 10));
