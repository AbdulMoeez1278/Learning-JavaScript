const accountId = 23455454; // BLOCK SCOPE
let accountEmail = "abdulm2915@gmail.com"; // BLOCK SCOPE
var accountPassword = "12345"; // GLOBAL SCOPE
accountCity = "Lahore"; // ADD VARIABLE WITHOUT USING THE DATATYPE
let accountState; // GIVES UNDEFINED VALUE

// re-initializing the const variable
// accountId = 2;
// console.log("accountId");
// OUTPUT
// script.js:7 Uncaught TypeError: Assignment to constant variable.

accountEmail = "moizy@gmail.com";
accountPassword = "878578420";
accountCity = "Chishtian";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// {
//     // SCOPE
// }

// We have different kind of scopes:
// 1: Global Scope
// 2: Block Scope
// 3: Functional Scope
