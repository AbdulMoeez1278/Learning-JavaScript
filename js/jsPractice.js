// variables - it's like containers which is used to store different types of data
// 1: var - can be re-declared or re-initialized
// 2: let - can't be re-declared but can re-initialized
// 3: const - can't be re-declared and re-initialized

// declaration & initialization
let a; // declaration
let b = 10; // declaration & initialization

// string method : slice() method
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

let part = str.substring(7, 13);
console.log(part);

// toUpperCase method
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

let text3 = "HellO WORLD!";
let text5 = text1.toLowerCase();
console.log(text5);
