// variables - it's like containers which is used to store different types of data
// 1: var - can be re-declared or re-initialized
// 2: let - can't be re-declared but can re-initialized
// 3: const - can't be re-declared and re-initialized

// declaration & initialization
let a; // declaration
let b = 10; // declaration & initialization

// string methods
// slice() method - (starting and ending index) - the ending index not included
let text = "Apple, Banana, Kiwi";

let part1 = text.slice(7); // slice out the rest of parameters
console.log(part1);

let part2 = text.slice(7, 13); // Banana
console.log(part2);

let part3 = text.slice(0, 5); // Apple
console.log(part3);

let part4 = text.slice(15, 19); // Kiwi
console.log(part4);

let str = "Apple, Banana, Kiwi";

// substring method // same as slice method (starting and ending index) - the ending index not included
let subStringPart = str.substring(7, 13);
console.log(subStringPart);

// toUpperCase method
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// toLowerCase method
let text3 = "HellO WORLD!";
let text4 = text1.toLowerCase();
console.log(text4);

// trim method
let strText = "    Hello World!    ";
console.log(strText);

let strText2 = "Abdul Moeez";
console.log(strText2);

let textTrim = strText.trim(); // removes white spaces in the text
console.log(textTrim);

// trimStart method
let trimStart = strText.trimStart(); // removes white spaces from the start of the text
console.log(trimStart);

// trimEnd method
let trimEnd = strText.trimEnd(); // removes white spaces from the end of the text
console.log(trimEnd);

// repeat method
let repeatText = strText.repeat(2); // repeats the word according to the value passed to the parameters || returns a new string with a number of copies of a string
console.log(repeatText);

// length method
let strLength = strText2.length; // returns the length of the text in numbers
console.log(strLength);

// Arrays - are object types that are used for storing data collections || special types of object
let arr = [];
console.log(arr);

let arr2 = [10, 20, 30];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

let arr3 = ["HTML", "CSS", "JS"];
console.log(arr3);

// Accessing Last Array Elements
let lastItem = arr3[arr3.length - 1];
console.log("Last Item is: ", lastItem);

// modifying the array elements
arr3[1] = "Bootstrap"; // element at index 1
console.log(arr3);

arr3[0] = "XHTML"; // element at index 0
console.log(arr3);

arr3[2] = "TS"; // element at index 2
console.log(arr3);

// looping array elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let fruitsText = "<ul>";
for (let i = 0; i < fLen; i++) {
  fruitsText += "<li>" + fruits[i] + "</li>";
}
fruitsText += "</ul>";

console.log(fruitsText);

// looping thrrough forEach function
const fruitsArr = ["Banana", "Orange", "Apple", "Mango"];

let textFruits = "<ul>";
fruitsArr.forEach(myFunction);
textFruits += "</ul>";

function myFunction(value) {
  textFruits += "<li>" + value + "</li>";
}

console.log("Ul list of fruits", textFruits);
console.log(textFruits);

// typeof operator
console.log(typeof fruitsArr); // object

// es5 new method
console.log(Array.isArray(fruitsArr));

// array methods
const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];

// length() method
let size = fruitsArray.length;
console.log(size);

// toString() method
let myList = fruitsArray.toString();
console.log(myList);

// getting objects data from an array
let arrArray = [
  {
    id: 1,
    title: "Celestial Chronicles",
    genre: ["Action", "Fantasy"],
    episodes: 12,
    rating: 8.6,
    release_year: 2023,
    studio: "StarForge Studios",
    // data: {
    //   id: 3,
    //   title: "Dreamscape Pulse",
    //   genre: ["Sci-Fi", "Mystery", "Psychological"],
    //   episodes: 13,
    //   rating: 9.1,
    //   release_year: 2022,
    //   studio: "NeonInk Works",
    // },
  },
  {
    id: 2,
    title: "Tokyo Drift Spirits",
    genre: ["Sports", "Drama"],
    episodes: 24,
    rating: 7.9,
    release_year: 2021,
    studio: "Kinetic Drive Animation",
    // data: {
    //   id: 1,
    //   title: "Celestial Chronicles",
    //   genre: ["Action", "Fantasy"],
    //   episodes: 12,
    //   rating: 8.6,
    //   release_year: 2023,
    //   studio: "StarForge Studios",
    // },
  },
  {
    id: 3,
    title: "Dreamscape Pulse",
    genre: ["Sci-Fi", "Mystery", "Psychological"],
    episodes: 13,
    rating: 9.1,
    release_year: 2022,
    studio: "NeonInk Works",
    // data: {
    //   id: 2,
    //   title: "Tokyo Drift Spirits",
    //   genre: ["Sports", "Drama"],
    //   episodes: 24,
    //   rating: 7.9,
    //   release_year: 2021,
    //   studio: "Kinetic Drive Animation",
    // },
  },
];

console.log(arrArray[0]); // returns the first object in an array
console.log(arrArray[0].title); // returns the title of the first object in an array
// console.log(arrArray[0].data.release_year);
// console.log(arrArray[0].data.id); // returns the id of the nested object from the first object in an array

console.log(arrArray[1]);
console.log(arrArray[1].episodes);
console.log(arrArray[1].rating);

console.log(arrArray[2]);
console.log(arrArray[2].genre);
console.log(arrArray[2].studio);

// Array at() method
const arrayOfFruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = arrayOfFruits.at(2); // returns the element not the index
console.log(fruit);

let fruit2 = arrayOfFruits[3]; // returns the array element at the following index
console.log(fruit2);

// join() method
let myText = (document.getElementById("myText").innerHTML =
  arrayOfFruits.join(" * "));
console.log(myText);

// closure example:
function createCounter() {
  let count = 0; // This variable is in the outer scope

  return function () {
    // This inner function is the closure
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
// document.write(counter1()); // Output: 3

const counter2 = createCounter(); // Creates a new independent closure
console.log(counter2()); // Output: 1
// document.write(counter2()); // Output: 2

// another closures example
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer variable: ${outerVariable}`);
    console.log(`Inner variable: ${innerVariable}`);
    document.write(`${outerVariable} ${innerVariable}`);
  };
}

const myClosure = outerFunction("Hello");
myClosure("World");
// document.write(myClosure("Hello")); // returns undefined

// closure example
let outerFunc = function outer() {
  let outerVar = "I'm in the outer scope!";
  function inner() {
    console.log(outerVar);
  }
  return inner;
};

const closure = outerFunc();
closure();

// const closure = outerFunc; // returns undefined
// console.log(outerFunc); // returns undefined
// const closure = outer();

// x is not defined
let x;
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
// document.write(x);

// // promises example:
// let myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation
//   setTimeout(() => {
//     let success = true; // Or false for rejection
//     if (success) {
//       resolve("Operation completed successfully!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000);
// });

// myPromise
//   .then((message) => {
//     console.log(message); // "Operation completed successfully!"
//   })
//   .catch((error) => {
//     console.error(error); // "Operation failed!"
//   })
//   .finally(() => {
//     console.log("Promise settled.");
//   });

// // console.log(myPromise);

// let myProm = myPromise;
// console.log(myProm);
// // document.write(myProm);

// Destructuring
let a1, b2, rest;
[a1, b2] = [10, 20];

console.log(a1);
console.log(b2);

[a1, b2, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue

// Binding in js
// 1: Variable Binding
// 2: Function Binding
// 3: Lexical Binding
