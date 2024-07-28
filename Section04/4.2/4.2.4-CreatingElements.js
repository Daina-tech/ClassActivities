// create a new unordered list (ul) element
const newUL = document.createElement('ul');

// remove the paragraph element in the nav-bar
const removeParagraph = document.querySelector(".nav > p");
removeParagraph.remove();
//.remove() removes the element from the DOM
// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUL);

// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');

listItem1.textContent = "Home";
listItem2.textContent = "About";

// add the li elements to the ul in the nav-bar
document.querySelector("nav > ul").appendChild(listItem1);
document.querySelector("nav > ul").appendChild(listItem2);
