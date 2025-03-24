// Dates in JS  ---> Dates type is object in JS

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);

// DATES METHOD
// 1: toString METHOD
// console.log(myDate.toString());

// 2: toDateString METHOD
// console.log(myDate.toDateString());

// 3: toLocaleString METHOD
// console.log(myDate.toLocaleString());

// Specific Date Decleration
const myCreatedDate = new Date(2025, 3, 24);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// Date in yy-mm-dd
const newCreatedDate = new Date("2025-03-24");
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// To get the Time
let createdDate = new Date("2025-03-24");
// console.log(createdDate.getTime());

// To get the seconds
let getSeconds = new Date("2025-03-24");
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// to get the Month 
// console.log(newDate.getMonth() + 1);

// to get the Day 
// console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday:"long",
})