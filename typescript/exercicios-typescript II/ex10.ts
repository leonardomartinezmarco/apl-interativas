import * as rs from "readline-sync";

do {
    var palavra = String(rs.question("Digite uma palavra que coMece com a letra (p) ou contenha a letra (f): "));
    var letra = palavra;
    var texto  = palavra.includes("f");
    console.log(texto);

} while (letra != "p" || texto === false );

console.log("Verdadeiro");