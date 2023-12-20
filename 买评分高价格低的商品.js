const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        console.log(a + b);
    }
    
let n = parseInt(await readline());
let a_price = (await readline()).split(' ').map(Number);
let b_price = (await readline()).split(' ').map(Number);
let a_score = (await readline()).split(' ').map(Number);
let b_score = (await readline()).split(' ').map(Number);
let count = 0;
for(let i=0; i<n; i++){
    if(a_price[i]<b_price[i] && a_score[i]>b_score[i]){
        count++;
    }
}
console.log(count);


}()
