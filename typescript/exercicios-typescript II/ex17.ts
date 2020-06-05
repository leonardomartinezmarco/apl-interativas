let num = new Array(100);
let m = 0;

for (let j = 0; j < num.length; j ++) {
    num[j] = Math.floor(Math.random() * 100);
}

for (let i = 0; i < num.length; i++) {
    m = m + num[i];
}

let total = m / num.length;

console.log(total);