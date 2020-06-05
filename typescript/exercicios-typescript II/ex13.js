"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numero1 = Number(rs.question("Digite o primeiro valor: "));
var numero2 = Number(rs.question("Digite o segundo valor: "));
var maior;
function verificaMaiorNumero(n1, n2) {
    if (numero1 > numero2) {
        maior = n1;
        return maior;
    }
    else if (numero2 > numero1) {
        maior = n2;
        return maior;
    }
    else {
        console.log("Valores iguais!");
    }
}
console.log("O numero maior: " + verificaMaiorNumero(numero1, numero2));
