// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false;
let y = x;
console.log(x === y);
x = !x;
console.log(x === y);
// below is false because the value of x is not the same as y

console.log([1, 2, "c"] === [1, 2, "c"]);
console.log({} === {});
//false because arrays [] are not the same as objects {} and objects are not the same as arrays

y = { id: 1 };
x = y;
console.log(x === y);
y.id += 1;
console.log(x);
console.log(y);

console.lo
