"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var nomes = new Array(100);
var sair = "sair";
var i = 0;
while (nomes[(i - 1)] != sair) {
    var nome = rs.question("Digite um nome ou sair: ");
    nomes[i] = nome;
    i++;
}
for (var numero = 0; numero < (i - 1); numero++) {
    console.log(nomes[numero]);
}
