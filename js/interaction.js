// ALERTS, PROMPTS, CONFIRM

// ALERT ---> used to invoke a mini window with a message
alert("Hello World");

// PROMPT ---> used to take user input as a string
let a = prompt("Enter the number", "578");
a = Number.parseInt(a);
// document.write(a);
//   console.log(a);
alert("You entered a of type" + typeof a);

// CONFIRM ---> shows the message and wait for the user to press ok or cancel
let write = confirm("Do you want to write it to the page?");
if (write) {
  // document.write(a);
  //   console.log(a);
} else {
  //   document.write("Please allow me to write!");
  //   console.log("Please allow me to write!");
}
