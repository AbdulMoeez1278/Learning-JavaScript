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

// Example of using setTimeout with an arrow function
setTimeout(
  () => {
    console.log(
      "This message is displayed after 2 seconds using an arrow function"
    );
  },

  2000
); // This will log the message after 2 seconds using an arrow function

// Example of using setInterval with an arrow function
const intervalId = setInterval(() => {
  console.log("This message runs every 3 seconds using an arrow function");
}, 3000); // This will log the message every 3 seconds

// To stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds");
}, 10000); // This will stop the interval after 10 seconds and log "Interval stopped after 10 seconds"

// Example of using setTimeout with a callback function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(data);
  }, 2000); // Simulating a 2-second delay
}
fetchData((data) => {
  console.log(data); // This will log "Data fetched successfully!" after 2 seconds
});

// Example of using setInterval with a callback function
function periodicTask(callback) {
  const intervalId = setInterval(() => {
    callback("This message runs every 4 seconds using a callback function");
  }, 4000); // This will log the message every 4 seconds

  // To stop the interval after 12 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Periodic task stopped after 12 seconds");
  }, 12000); // This will stop the interval after 12 seconds
}
periodicTask((message) => {
  console.log(message); // This will log the message every 4 seconds
});

// Example of using setTimeout with a promise
function fetchDataWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully with a promise!");
    }, 3000); // Simulating a 3-second delay
  });
}

fetchDataWithPromise().then((data) => {
  console.log(data); // This will log "Data fetched successfully with a promise!" after 3 seconds
});

// Example of using setInterval with a promise

function periodicTaskWithPromise() {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      console.log("This message runs every 5 seconds using a promise");
    }, 5000); // This will log the message every 5 seconds

    // To stop the interval after 15 seconds
    setTimeout(() => {
      clearInterval(intervalId);
      resolve("Periodic task stopped after 15 seconds");
    }, 15000); // This will stop the interval after 15 seconds
  });
}

periodicTaskWithPromise().then((message) => {
  console.log(message); // This will log "Periodic task stopped after 15 seconds" after 15 seconds
});
