// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionwithTwoParameters(x, y) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}

// invoke the function and pass in two numbers
functionwithTwoParameters(5, 10);

//first param is: 5
//second param is: 10
//return value: 15

// invoke the function and pass in more than two numbers
functionwithTwoParameters(5, 10, 15, 20);
//prints:
//first param is:
//5 second param is: 10
//return value: 15

// invoke the function and pass in only one number
functionwithTwoParameters(5);
//prints:
//first param is: 5
//second param is: undefined
//return value: NaN

// change the function to set default values for the parameters
function functionwithTwoParameters(x = 7, y = 8) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  return x + y;
}

// again, invoke the function and pass in only one number
console.log(functionwithTwoParameters(5));
//prints:
//first param is: 5
//second param is: 8
//return value: 13

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
function functionwithRestParameters(x = 7, y, ...z) {
  console.log("first param is:", x);
  console.log("second param is:", y);
  console.log("rest param is:", z);
  return x + y;
}
functionwithRestParameters(3, 7, 2, 15, 38);
//prints:
//first param is: 3
//second param is: 7
//rest param is: [2, 15, 38]
//return value: 10

