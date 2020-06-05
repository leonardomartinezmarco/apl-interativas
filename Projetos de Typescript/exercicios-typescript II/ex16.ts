import * as rs from 'readline-sync';

let nomes = new Array(100);
let sair: String = "sair";
let i: number = 0;

while (nomes[(i - 1)] != sair) {
    let nome = rs.question("Digite um nome ou sair: ");
    nomes[i] = nome;
    i++;
}

for (let numero = 0; numero < (i - 1); numero++) {
    console.log(nomes[numero])
}
