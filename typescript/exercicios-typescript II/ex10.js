"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
do {
    var palavra = String(rs.question("Digite uma palavra que comece com a letra (p) ou contenha a letra (f): "));
    var letra = palavra.substring(0, 1);
    var texto = palavra.includes("f");
    console.log(texto);
} while (letra != "p" || texto === false);
console.log("Verdadeiro");
