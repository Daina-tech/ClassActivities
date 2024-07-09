// create a constant variable (const)
const myCar = "Escalade";
// create a variable that can be reassigned (let)
let myYear = 2022;
// create three variables and assign them values of different data types (=)
let myColor = "black";
let myDoor = 5;
let fourWheelDrive = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof myCar);
console.log(typeof myYear);
console.log(typeof fourWheelDrive);
// change the value referenced by a variable (dynamic typing)
fourWheelDrive = "false";
// print the type of the variable you just changed (typeof)
console.log(typeof fourWheelDrive);
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
let myName = "Daina";
let myLanguage = "JavaScript";
let weeks = 2;
let masterStatus = false;

//console.log "Hello, my name is " + {add a name} + ", and I am learning " + {add a language} + ". I have been practicing for only " +  {add a number} + " weeks, so my status as a master is: " + {true or false} + ".";
console.log(
  "Hello, my name is " +
    myName +
    ", and I am learning " +
    myLanguage +
    ". I have been practicing for only " +
    weeks +
    " weeks, so my status as a master is: " +
    masterStatus +
    "."
);
