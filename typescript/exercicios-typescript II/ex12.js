"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n;
function lerNome() {
    n = rs.question("Digite seu nome: ");
    return n;
}
function exibirNome() {
    lerNome();
    console.log("Seu nome: " + n);
}
exibirNome();
