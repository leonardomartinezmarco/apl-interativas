import * as rs from 'readline-sync';
let num = new Array(3);

for (let x = 0; x < num.length; x++) {
    num[x] = Number(rs.question("Digite um numero: "));
}

for (let j = num.length - 1; j >= 0; j--) {
    console.log(num[j]);
}