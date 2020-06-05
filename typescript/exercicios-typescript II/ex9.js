"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var altura = 0;
var altura_atleta = 0;
for (var i = 1; i <= 5; i++) {
    var nome = String(rs.question("Digite o nome do atleta: "));
    altura_atleta = Number(rs.question("Digite a altura do atleta " + nome.toUpperCase() + ": "));
    if (altura_atleta > altura_atleta) {
        var nome_atleta_alto = nome;
        altura_atleta = altura_atleta;
    }
}
console.log("O atleta mais alto é o " + nome_atleta_alto.toUpperCase());
