// BOM | DOM | WINDOWS

// DOM - Document Object Model
window.console.log(window);

console.log(document.body);

document.body.style.backgroundColor = "lightblue";

// BOM - Browser Object Model
// ALERT | PROMPT | CONFIRM ---> also part of BOM

// window.alert("Hello World");

// const name = prompt("Enter your name: ");
// alert(name);

// PROMPT - returns a string
let age = prompt("Enter your age: ");
age = Number.parseInt(age);

if (age < 0) {
  console.error("Invalid age.");
}

const canDrive = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

if (canDrive(age)) {
  alert("You can drive.");
} else {
  alert("You cannot drive.");
}

// CONFIRM - returns a boolean
let isAdult = confirm("Are you an adult?");
console.log(isAdult);

if (isAdult) {
  alert("You are an adult.");
} else {
  alert("You are not an adult.");
}

// change the browser color according to user's choice using prompt
let color = prompt("Enter a color: ");
document.body.style.backgroundColor = color;