let a = setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

// clearTimeout(a); // ---> clears the timeout
console.log(a); // ---> returns a timeout ID

let b = setInterval(() => {
  console.log("This message runs every second");
}, 1000);

// clearInterval(b); // ---> clears the interval
console.log(b); // ---> returns an interval ID

// setTimeout and setInterval are used to execute code after a delay or at regular intervals
// clearTimeout and clearInterval are used to stop the execution of the code

// setInterval
let count = 0;
const timerId = setInterval(function () {
  count++;
  console.log("Timer count:", count);
}, 1000); // This will log "Timer count: X" every second

// To stop the timer after 5 seconds
setTimeout(function () {
  clearInterval(timerId);
  console.log("Timer stopped after 5 seconds");
}, 5000); // This will stop the timer after 5 seconds and log "Timer stopped after 5 seconds"

// setTimeout
setTimeout(function () {
  console.log("This message is displayed after 3 seconds");
}, 3000); // This will log the message after 3 seconds

// Example of using setTimeout with a function
function delayedMessage() {
  console.log("This message is displayed after 4 seconds");
}
setTimeout(delayedMessage, 4000); // This will log the message after 4 seconds

// Example of using setInterval to create a countdown
let countdown = 5;
const countdownInterval = setInterval(function () {
  console.log("Countdown:", countdown);
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Countdown finished");
  }
}, 1000); // This will log the countdown every second until it reaches 0
