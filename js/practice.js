// Tasks for Day 1 (JavaScript Introduction & Output)
// Day 1 Practice Questions:

// 1: Show your name using alert().
// alert("Abdul Moeez");

// 2: Show your favorite color using console.log().
console.log("Blue");

// 4: Display your city name using document.write().
document.write("Chishtian");
console.log("Chishtian");

// 5: Use innerHTML to change the content of an element with id="myText" (Example: change "Hello" to "I love JavaScript").
let myText = document.getElementById("myText");
myText.innerHTML = "I love JavaScript";
console.log(myText);

// 6: Combine two strings (like "Hello" + " World") and print the result in the console.
let twoStrings = "Hello" + " World";
console.log(twoStrings);

// Day 2: JavaScript Variables & Data Types
// Day 2 Practice Questions:

// Declare 3 variables: your name, your age, your city (use let)
let name = "Abdul Moeez";
let age = 20;
let city = "Chishtian";

console.log("name: " + name);
console.log("age: " + age);
console.log("city: " + city);

// 2: Declare a constant variable for your country.
const country = "Pakistan";
console.log("country: " + country);

// 3: Declare a variable without assigning a value, then console.log() it.
let myVariable;
console.log("myVariable: " + myVariable);

// 4: Create a variable isOnline and set it to true. Print its type using typeof.
let isOnline = true;
console.log(typeof isOnline);

// 5: Create an object with properties: firstName, lastName, and age.
let obj = {
  firstName: "Abdul",
  lastName: "Moeez",
  age: 20,
};
console.log(obj);

// 6: Create an array with 5 of your favorite foods and log the second item.
let favoriteFoods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Sushi"];
console.log(favoriteFoods[1]);

// 7: Show the output of typeof for these values: "hello", 99, true, null, undefined, [1, 2, 3]
console.log(typeof "hell0");
console.log(typeof 99);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1, 2, 3]);
