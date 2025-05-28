// ARRAYS ---> it is an object where you can add mulltiple elements in a single variable

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[3]);
console.log(myArr);

const myHeroes = ["ironman", "hulk", "Thor"];
// console.log(myHeroes[2])

// <--- Array METHODS --->

// 1: push METHOD ---> add a values | elements at the end of the array
myArr.push(6);
myArr.push(7);
console.log(myArr);

// 2: pop METHOD ---> removes the value | element at the end
myArr.pop(6);
myArr.pop(7);
// console.log(myArr);

// 3: unshift METHOD ---> add the element at the start of the array
myArr.unshift(3);
// console.log(myArr);

// 4: shift METHOD ---> removes the element at the start of the array
myArr.shift(3);
// console.log(myArr);

// 5: includes METHOD ---> checks the given value is exist in the array or not
myArr.includes(9);
// console.log(myArr);

// 6: join METHOD ---> adds all the elements of an array into the string
let newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// 7: slice METHOD
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B ", myArr);

// 8: splice METHOD
const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// array inside an array
const marvelHeroes = ["ironman", "hulk", "Thor"];
const dcHeroes = ["superman", "flash", "batman"];

marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// console.log(marvelHeroes[3][1]);

// 9: concat METHOD ---> add both the arrays properly with the help of conacat Metood
const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// 10: spread operator
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// 11: flat METHOD
const realArray = anotherArray.flat(Infinity);
// console.log(realArray);

// 12: isArray METHOD
// console.log(Array.isArray("Moeez"));

// 13: from METHOD
// console.log(Array.from("Moeez"));
// console.log(Array.from(name: "Moeez")); ---> interesting case because it's gives an empty array

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

// 14: of METHOD
// console.log(Array.of(scoreOne, scoreTwo, scoreThree));

// empty array
let array = [];
// console.log(array);

let dailyActivities = ["eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

// console.log(dailyActivities);

// Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// console.log(a);

// a[1] = "Bootstrap";
// console.log(a);

// Creating an Array and Initializing with Values
let a = ["Ahmad", "Moeez", "Zaid"];
// console.log("Original Array: " + a);

// Removes and returns the last element
let last = a.pop();
// console.log("After Removing the last: " + a);

// Removes and returns the first element
let first = a.shift();
// console.log("After Removing the First: " + first);

// Removes 2 elements starting from index 1
a.splice(1, 2);
// console.log("After Removing 2 elements starting from index 1: " + a);

// increase and decrease array length
// Creating an Array and Initializing with Values
let a1 = ["HTML", "CSS", "JS"];

// Increase the array length to 7
a1.length = 7;

// console.log("After Increasing Length: ", a1);

// Decrease the array length to 2
a1.length = 2;
// console.log("After Decreasing Length: ", a1);

// Shallow copy
// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...original };
// shallowCopy.b.c = 3;
// console.log(original.b.c); // Output: 3 (original object changed)

// // Deep copy
// const originalArr = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(originalArr));
// deepCopy.b.c = 3;
// console.log(originalArr.b.c); // Output: 2 (original object remains unchanged)

// another example of shallowCopy
// const name = { firstName: "Moeez" };
// const shallow = { ...name };
// shallow.firstName = "Abdul";
// console.log(name.firstName); // does not change the name // name stilll be Moeez

// shallow copy
let myName = { person: { firstName: "Moeez" } };
let shallowCopy = { ...myName };
shallowCopy.person.firstName = "Abdul";
console.log(myName.person.firstName); // If your object had nested properties (e.g., name = { person: { firstName: "Moeez" }}), then modifying shallowCopy.person.firstName would affect the original object.

// deep copy
let originalArr = { person: { firstName: "Abdul", lastName: "Moeez" } };
let deepCopy = JSON.parse(JSON.stringify(originalArr));
deepCopy.person.lastName = "Tariq";
console.log(originalArr.person.lastName); // creates a completely independent copy of the object and all its nested objects, ensuring no shared data or modifications between the copies. Each object is stored in a separate memory location, making them entirely independent.

let array1 = ["Ali", "Bilal", "Moeez"];
let array2 = ["Hamza", "Sohaib", "Rameez"];

let arrays = array1.join(array2);
let arraysTwo = array1.concat(array2);

console.log(arrays);
console.log(arraysTwo);
