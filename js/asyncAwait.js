// async - await

// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully with async-await!");
//     }, 2000); // Simulating a 2-second delay
//   });
// }
// async function main() {
//   console.log("Fetching data...");
//   const data = await fetchData();
//   console.log(data); // This will log "Data fetched successfully with async-await!" after 2 seconds
// }
// main().catch((error) => {
//   console.error("Error fetching data:", error);
// });

async function greet() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 Degree");
    }, 2000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("25 Degree");
    }, 5000);
  });

  let greetP1 = await p1;
  let greetP2 = await p2;
  //   console.log(greetP1, greetP2);
  return [greetP1, greetP2];

  //   return "Hello!";

  //   greet().then((x) => {
  //     console.log(x);
  //   });
}

let greetPromise = greet();
greetPromise.then((value) => {
  console.log(value);
});
// console.log(greetPromise);

// --- Custom Error Handling ---
// try {
//   //   throw new error("ERROR: There is an error");
//   throw new ReferenceError("ERROR: Error Message");
// } catch (error) {
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

//Example for Custom Error Throw
// try {
//   let age = prompt("Enter your age!");
//   age = Number.parseInt(age);
//   if (age > 150) {
//     throw new ReferenceError("This is not true");
//   }
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }
// console.log("Script is running")

// Finally Clause // runs everytime if there is an error in catch block or the try block
try {
  let a = 4;
  console.log(program);
  console.log("Program ran successfully");
} catch (errors) {
  console.log(errors);
  console.log(errors.name);
  console.log(errors.message);
  console.log(errors.stack);
} finally {
  console.log("Finally Clause is running");
}

// ..  JS - PRACTICE  ..

// let arr = [
//   {
//     name: "Moeez",
//     age: 24,
//   },
// ];

// let array = arr[0].age;
// // // let array = arr.age
// console.log(array);

// const ALI = (a, b) => {
//   console.log( a + b);
// };

// // ALI(1, 2);

// let c = ALI(1,2)

// (function () {
//   alert("hello");
// })();

// function myFunction() {
//   console.log("Helo");
// }
// console.log(typeof myFunction);
// myFunction();

// let a;
// console.log(a);

// let str = "aliuyu";
// // console.log(str.replace("a", "with"));
// console.log(str.slice(0, 4));
// // console.log(str)

// console.log(Math.abs);
// let val = 10.9;
// // console.log(Math.floor(val));
// // console.log(Math.round(val));
// // console.log(Math.ceil(val));
// console.log(Math.trunc(val));

// let x= 0;

// let arr = [1, 322, 34];
// let arr2 = [4, 55, 6];
// let arr3 = ["a", "g", "z", "m"];
// console.log(typeof arr.join(arr2), arr.join(arr2));
// console.log(typeof arr.concat(arr2), arr.concat(arr2));

// console.log(arr.sort());
// console.log(arr2.sort());
// console.log(arr3.sort());
// let arr = [1, 322, 34];
// for (let a = 0; a < arr.length; a++) {
//   console.log(arr[a]);
// }
// for (const abc of arr) {
//   console.log(abc);
// }

// for (const key in arr) {
//   const element = key;
//   console.log(element);
// }
