"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var maior = 0;
for (var i = 0; i < 5; i++) {
    var valor = Number(rs.question("Digite um valor: "));
    if (valor > maior) {
        maior = valor;
    }
}
console.log(maior);
