let a = setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

// clearTimeout(a); // ---> clears the timeout
console.log(a); // ---> returns a timeout ID
