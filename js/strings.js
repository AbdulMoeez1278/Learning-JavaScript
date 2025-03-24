// STRINGS ---> A string is a sequence of characters intended to represrent the text. Strings can contain any kind of characters, like letter, numbers or special characters.

// declaring strings
const name = "Abdul Moeez";
const repoCount = 18;

// Embeding javascript using template literals
// console.log(name + repoCount + " Value");

// TEMPLATE LITERALS (` `)
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// another method for declaring a string
const gameName = new String("Abdul-Moeez");
// console.log(gameName[3]);
// console.log(gameName.__proto__);

// STRING METHODS ---> Most used methods of strings
// 1: length METHOD
// console.log(gameName.length);

// 2: toUpperCase METHOD
// console.log(gameName.toUpperCase); // it does't change the original string

// 3: charAt METHOD
// console.log(gameName.charAt(3));

// 4: indexOf METHOD
// console.log(gameName.indexOf(l));

// 5: substring METHOD
const newString = gameName.substring(0, 4);
// console.log(newString);

// 6: slice METHOD
const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

// 7: trim METHOD
const newStringOne = "   Moeez   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// 8: replace METHOD
const url = "https://google.com";
// console.log(url.replace("google" , "facebook"));

// 9: split METHOD
console.log(gameName.split("-"));
