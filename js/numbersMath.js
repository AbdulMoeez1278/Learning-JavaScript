// NUMBERS:
const score = 400;
// console.log(score);

// specifically type number
const balance = new Number(100);
// console.log(balance);

// ---> PROPERTIES OF NUMBERS

// 1:convert number to string
// console.log(balance.toString().length);

// 2: fixed the value
// console.log(balance.toFixed(2));

// 3: precision value
const otherNumber = 23.8965;
// console.log(otherNumber.toPrecision(3));

// 4: toLocaleString METHOD
const anyNumbers = 1000000;
// console.log(anyNumbers.toLocaleString(en-PK));

// MATHS: ---> by default in javascript
// console.log(Math);

// ---> PROPERTIES OF MATH

// 1: absolute VALUE
// console.log(Maths.abs(-3));

// 2: round VALUE
// console.log(Math.round(5.8));

// 3: ceil VALUE
// console.log(Math.ceil(4.3));

// 4: floor Value
// console.log(Math.floor(4.3));

// 5: minimum VALUE
// console.log(Math.min(4, 3, 9, 1));

// 6: maximum VALUE
// console.log(Math.max(4, 3, 9, 1));

// 7: random VALUE ---> values from 0 to 1
// console.log(Math.random() * 10 + 1); // ---> if to get the minimum value
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
// values from 10 to 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min); ---> +1 to avoid 0
