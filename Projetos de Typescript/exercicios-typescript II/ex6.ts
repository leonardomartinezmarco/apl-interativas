import * as rs from 'readline-sync'

let nPares = 0, esp = "";

while (nPares <= 12) {
    if (nPares == 12) {
        esp += nPares;
    break;
    }
    if (nPares % 2 != 0) {
        esp += "";
    } else {
        esp += nPares + ",";
    }
        nPares++;
}

console.log(esp);