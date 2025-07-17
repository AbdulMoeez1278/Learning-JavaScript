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

// Arrays - are object types that are used for storing data collections
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
