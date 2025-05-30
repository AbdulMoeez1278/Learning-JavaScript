const button = document.querySelector("button");

// click Event
// button.addEventListener("click", function (event) {
//   console.log("Button clicked!", event);
//   button.innerHTML = "Clicked";
//   console.log(button.innerHTML);
// }); // when clicked on the button then this event occurs | triggered

// mouseover Event
// button.addEventListener("mouseover", function () {
//   console.log(button.innerHTML);
// }); // when mouse over the button then this event occurs | triggered

// // mouseoout Event
// button.addEventListener("mouseout", function () {
//   console.log(button.innerHTML);
// }); // when mouse leave out the button then this event occurs | triggered

// dblclick Event
// button.addEventListener("dblclick", function () {
//   console.log(button.innerHTML);
// }); // when clicked on the button double times then this event occurs | triggered

// keydown Event
// button.addEventListener("keydown", function () {
//   console.log(button.innerHTML);
// }); // when pressed the keydown button then this event occurs | triggered

// keypress Event
// button.addEventListener("keypress", function () {
//   console.log(button);
//   //   console.log(button.innerHtml); // gives the undefined value in the console when using it with the keypress event
//   console.log(button.innerText); // it works properly and gives the accurate value
// }); // when press any button on the keyboard then this event occurs | triggered

// Practiced Question

// Build a simple counter that increments whenever a button is clicked
// let numberCount = document.getElementById("numberCount");
// let number = 1;
// function counter() {
//   for (i = 0; i < number; i++) {
//     console.log("Counter is running", number);
//     numberCount.innerText = `${number}`;
//   }
//   number++;
// }

// Build a simple counter that increments whenever a button is clicked
let numberCount = document.getElementById("numberCount");
let number = 0;

function counterPlus() {
  number++;
  numberCount.innerText = `${number}`;
  document.getElementById("minusBtn").disabled = number <= 0;
  //   console.log("Count:", number);
}

function counterMinus() {
  number--;
  if (number <= 0) {
    number = 0;
  }
  numberCount.innerText = `${number}`;
  document.getElementById("minusBtn").disabled = number <= 0;
  //   console.log("Count:", number);
}

counterPlus();
counterMinus();

// button.addEventListener("click", function (event) {
//   counterPlus();
//   event.stopPropagation();
// });

// button.addEventListener("mouseover", function () {
//   counterPlus();
// });

// button.addEventListener("mouseout", function () {
//   counterMinus();
// });

// button.addEventListener("keypress", function () {
//   counterPlus();
// });
