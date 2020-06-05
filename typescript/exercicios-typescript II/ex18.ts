import * as rs from 'readline-sync';

var maior = 0;

for (let i = 0; i < 5; i++) {
    var valor = Number(rs.question("Digite um valor: "));
    if (valor > maior) {
        maior = valor;
    }
    
}
console.log(maior)