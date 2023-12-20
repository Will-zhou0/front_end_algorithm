const { log } = require("console");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
//   单行输入
//   let number = await readline();
//   let n = parseInt(number);
//   console.log(n);
// 多行输入 第一行n表示行数,接下输入n行
let line = await readline();
let nm = line.split(" ").map(Number);
let arr = [];
for(let i = 0; i < nm[0]; i++) {
    let lines = await readline();
    // let nums = lines.split(" ").map(item => parseInt(item));
    // console.log(nums[0]+nums[1]);
    arr.push(lines.split('')) 
}
console.log(arr);


//   while ((line = await readline())) {
//     let tokens = line.split(" ");
//     let a = parseInt(tokens[0]);
//     let b = parseInt(tokens[1]);
//     console.log(a + b);
//   }
})();
