"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
function verificaNumeroPrimo(num) {
    var div = 0;
    for (var count = 1; count <= num; count++)
        if (num % count == 0)
            div++;
    if (div == 2) {
        console.log('É primo');
        return true;
    }
    else {
        console.log('Não é primo');
        return false;
    }
}
var n1 = Number(rs.question("Digite um valor: "));
verificaNumeroPrimo(n1);
