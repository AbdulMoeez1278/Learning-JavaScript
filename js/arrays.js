// ARRAYS ---> it is an object where you can add mulltiple elements in a single variable

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[3]);

const myHeroes = ["ironman", "hulk", "Thor"];
// console.log(myHeroes[2])

// Array METHODS --->

// 1: push METHOD ---> add a values | elements at the end of the array
myArr.push(6);
myArr.push(7);
// console.log(myArr);

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
