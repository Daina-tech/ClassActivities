// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

const { totalmem } = require("os");

// 1) create a variable to represent the current number
let curNum = 100;
// 2) create a variable to represent the current total
letcurTot = 0;
// 3) write a while loop that sums the numbers from 1 to 100
let i = 1;
while (i <= 100) {
  curTot += i;
  i++;
}
while (curNum >= 1) {
  curTot += curNum;
  curNum--;
}
console.log(curTot);
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
// let curNum = 100;
// let curTot = 0;

//1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  curTot += i;
}
console.log(curTot);
