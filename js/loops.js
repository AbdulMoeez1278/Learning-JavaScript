// LOOPS ---> to perform repeated actions

// types of loops
// 1: for loop
// 2: for in loop
// 3: for of loop
// 4: while loop
// 5: do-while loop

// 1: for loop
for (let i = 0; i < 5; i++) {
  // console.log(i);
}

let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  // console.log(i);
  sum += i + 1;
}

// console.log("Sum of first " + n + " natural numbers is " + sum);

// 2: for in loop
let obj = {
  moeez: 90,
  hamza: 60,
  rameez: 45,
};

for (let a in obj) {
  //   console.log("Marks of " + a + " are " + obj[a]);
}

// 3: for of loop
for (let b of "Moeez") {
  //   console.log(b);
}

// 4: while loops
let x = prompt("Enter the value of x");
x = Number.parseInt(x);

let i = 0;
while (i < x) {
  //   console.log(i);
  i++;
}

// 5: do-while loop
let m = prompt("Enter the value of m");
m = Number.parseInt(m);

let a = 0;
do {
  //   console.log(i);
  a++;
} while (a < m);
