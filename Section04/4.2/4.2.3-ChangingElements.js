// print the outer HTML of the navigation bar
const navBarOuter = document.querySelector(".nav-bar");
console.log(navBar.outerHTML);
or
const navBar = document.querySelector(".nav-bar" .outerHTML);
console.log(navBar);
// print the inner HTML of the navigation bar
console.log(navBar.innerHTML);
or
console.log(navBarOuter.innerHTML);
// print the text content of the #class-schedule-list element
const classScheduleList = document.querySelector("#class-schedule-list");
console.log(classScheduleList.textContent);
// select the classList for the first class-week, then add the class "week-1"
const classWeek = document.querySelectorAll(".class-week");
classWeek.classList.add("week-1");
console.log(classWeek);
// select the img element and add a src attribute
document.querySelector("img").src = "https://www.w3schools.com/howto/img_fjords.jpg";
// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
