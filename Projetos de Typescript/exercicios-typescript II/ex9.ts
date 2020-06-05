import * as rs from "readline-sync";

var altura = 0;
var altura_atleta = 0;

for (let i = 1; i <= 5; i++) {
    let nome = String(rs.question("Digite o nome do atleta: "));
    altura_atleta = Number(rs.question("Digite a altura do atleta " + nome.toUpperCase() + ": "));

    if (altura_atleta > altura_atleta){
        var nome_atleta_alto = nome;
        altura_atleta = altura_atleta;
    }
    
}

console.log("O atleta mais alto é o " + nome_atleta_alto.toUpperCase());