// select the root node
document.querySelector("html");
const root = document.querySelector("html");
// select the last child of the root node
root.lastElementChild;
root.children;

console.log(root.lastElementChild);

console.log("root last child:", root.lastElementChild);
//because the root variable selected the root node, we can use the variable chain property to it instead of having to retype all of the selector again like this: document.querySelector("html").lastElementChild;

// select all the children of the body element
const bodyChildren = document.querySelector("body").children;

console.log("body children:", bodyChildren);

// select the next sibling of the h2 node
const h2NextSibling = document.querySelector("h2").nextElementSibling;

console.log("h2NextSibling:", h2NextSibling);

const h2NextSibling2 = document.querySelector("h2").nextElementSibling;
console.log("h2 next sibling:", h2NextSibling);
// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentElement;
console.log("h1 parent:", h1Parent);
