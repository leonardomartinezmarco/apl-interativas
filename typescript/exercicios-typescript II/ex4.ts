import * as rs from 'readline-sync';

let n1 = Number(rs.question("Primeira nota?"));
let n2 = Number(rs.question("Segunda nota?"));
let n3 = Number(rs.question("Terceira nota?"));
let m = 0;

m = (n1 + n2 + n3) / 2;

    if (m >= 10 || m === 10) {
        console.log("Nota A");
    } else if (m >= 8 || m === 9) {
        console.log("Nota B");
    } else if (m >= 7 || m < 8) {
        console.log("Nota C");
    } else if (m >= 5 || m <= 6) {
        console.log("Nota D");
    } else if (m >= 4) {
        console.log ("Nota E");
    }