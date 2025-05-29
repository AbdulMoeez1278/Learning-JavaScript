console.dir;
// console.dir; // returns the DOM element as a JavaScript object, which can be used to access its properties and methods.
// // console.dir(idOne);

// // NODE NAME | TAG NAME

// //nodeName
// let nodeName = document.getElementById("idOne").nodeName; // Returns the name of the node (e.g., "DIV", "SPAN", "P", etc.).
// // console.log(nodeName); // Returns the name of the node (e.g., "DIV", "SPAN", "P", etc.).

// // TagName
// let tagName = document.getElementById("idOne").tagName; // Returns the name of the tag (e.g., "DIV", "SPAN", "P", etc.).
// // console.log(tagName); // Returns the name of the tag (e.g., "DIV", "SPAN", "P", etc.).

// // innerHTML | outerHtML

// // innerHTML
// let innerHTML = document.getElementById("idOne").innerHTML; // Returns the HTML content inside the element.
// // console.log(innerHTML); // Returns the HTML content inside the element.

// // outerHTML
// let outerHTML = document.getElementById("idOne").outerHTML; // Returns the HTML content of the element, including the element itself.
// // console.log(outerHTML); // Returns the HTML content of the element, including the element itself.

// // textContent
// let textContent = document.getElementById("myText").textContent; // Returns the text content of the element, including all child elements.
// // console.log(textContent); // Returns the text content of the element, including all child elements.

// // hidden Property
// let hidden = document.getElementById("idOne").hidden; // Returns true if the element is hidden, false otherwise.
// // console.log(hidden); // Returns true if the element is hidden, false otherwise.

// // hidden = document.getElementById("idOne").hidden = true; // Hides the element by setting the hidden property to true.
// // console.log(hidden); // Returns true if the element is hidden, false otherwise.

// // hidden = document.getElementById("idOne").hidden = false; // Shows the element by setting the hidden property to false.
// console.log(hidden); // Returns true if the element is hidden, false otherwise.

// append textNode in the html tag
const heading = document.getElementById("myText");
const headingText = document.createTextNode("This is h1 tag! ");
heading.appendChild(headingText);
// console.log(headingText);

console.log(heading);
console.log(heading.outerHTML);
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);
console.log(heading.TEXT_NODE);
console.log(heading.COMMENT_NODE)

// let paraText = `<p>This is para</p>`;
const paraText = "This is a paragraph";
// heading.append(paraText);
// console.log(heading);

// Practiced Questions

// // 1: Build a simple counter that increments whenever a button is clicked
// let numberCount = document.getElementById("numberCount");
// let number = 0;

// function counterPlus() {
//   number++;
//   numberCount.innerText = `${number}`;
//   document.getElementById("minusBtn").disabled = number <= 0;
//   //   console.log("Count:", number);
// }

// function counterMinus() {
//   number--;
//   if (number <= 0) {
//     number = 0;
//   }
//   numberCount.innerText = `${number}`;
//   document.getElementById("minusBtn").disabled = number <= 0;
//   //   console.log("Count:", number);
// }

// counterPlus();
// counterMinus();

// 2: Change the background color of the page by clicking a button or selecting from a list of colors.
function randomHsl() {
  return `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 1)`;
}

let button = document.getElementById("innerButton");
let myText = document.getElementById("myText");

button.addEventListener("click", () => {
  myText.style.width = "fit-content";
  myText.style.boxShadow = "8px 10px";
  myText.style.backgroundColor = randomHsl();
  if (myText.textContent === myText.textContent.toLowerCase()) {
    myText.textContent = myText.textContent.toUpperCase();
    myText.innerText = "THE H1 TAG IS CHANGING AGAIN AND AGAIN";
  } else {
    myText.textContent = myText.textContent.toLowerCase();
    myText.innerText = "the h1 tag is changing again and again";
  }

  //   myText.style.padding = "10px";
  //   document.body.style.background = randomHsl();
  //   console.log("Button is pressed ");
});

// setInterval(() => {
//   myText.style.width = "fit-content";
//   myText.style.boxShadow = "8px 10px";
//   myText.style.backgroundColor = randomHsl();
//   if (myText.textContent === myText.textContent.toLowerCase()) {
//     myText.textContent = myText.textContent.toUpperCase();
//     myText.innerText = "THE H1 TAG IS CHANGING AGAIN AND AGAIN";
//   } else {
//     myText.textContent = myText.textContent.toLowerCase();
//     myText.innerText = "the h1 tag is changing again and again";
//   }
// }, 3000);
