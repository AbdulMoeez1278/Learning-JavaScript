// LOOPS ---> to perform repeated actions

// types of loops
// 1: for loop
// 2: for in loop
// 3: for of loop
// 4: while loop
// 5: do-while loop

// 1: for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// for (let i = 0; i < n; i++) {
//  console.log(i);
//   sum += i + 1;
// }

// console.log("Sum of first " + n + " natural numbers is " + sum);

// 2: for in loop
let obj = {
  moeez: 90,
  hamza: 60,
  rameez: 95,
};

for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// 3: for of loop
for (let b of "Moiz") {
  console.log(b);
}

// 4: while loops
let x = 10;
// let x = prompt("Enter the value of x");
// x = Number.parseInt(x);

let i = 0;
while (i <= x) {
  console.log(i);
  i++;
}

// 5: do-while loop
let m = 5;
// let m = prompt("Enter the value of m");
// m = Number.parseInt(m);

let a = 0;
do {
  console.log(a);
  a++;
} while (a <= m);

// Practice Questions

// 1: Print numbers from 1 to 10 using a for loop.
let q = 10;

for (let i = 0; i <= q; i++) {
  console.log("The Value is: ", i);
}

// 2: Print even numbers from 1 to 20.
let w = 20;
for (let i = 0; i <= w; i += 2) {
  console.log("The even number is: ", i);
}

// 3: Print each letter in "JavaScript" using for...of.
let word = "JavaScript";

for (let values of word) {
  console.log("The letter is: ", values);
}

// 4: Use a while loop to count backwards from 10 to 1.
let e = 10;

while (e > 0) {
  console.log("Number is: ", e);
  e--;
}
