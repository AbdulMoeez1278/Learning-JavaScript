// HTML INSERTION METHODS IN DOM

// classical way
let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1>Hello World</h1>";

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
a.appendChild(div);

// 1: append Method
a.append(div);

// 2: prepend Method
a.prepend(div);

// 3: before Method
a.before(div);

// 4: after Method
a.after(div);

// 5: replaceWith Method
a.replaceWith(div);
