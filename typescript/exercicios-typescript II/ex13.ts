import * as rs from 'readline-sync';

const numero1 = Number(rs.question("Digite o primeiro valor: "));
const numero2 = Number(rs.question("Digite o segundo valor: "));
let maior: number;

function verificaMaiorNumero(n1: number, n2: number){
    if (numero1 > numero2){
        maior = n1;
        return maior;
    } else if (numero2 > numero1){
        maior = n2;
         return maior;
    } else{
        console.log("Valores iguais!");
    }
}

console.log("O numero maior: " + verificaMaiorNumero(numero1, numero2));