let nome = "Manuel";
let sobrenome = "Silva";
let idade = 65;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = "SIM";

console.log("Boa tarde, Sr. " + nome + " " + sobrenome + ". Sua idade é: " + idade)

//usando o IF que seja substistituido na sequencia
if (ehBomPagador = "SIM") {
    console.log("O Sr." + nome + " é um bom pagador")
}
else {
    console.log("O Sr." + nome + " não é um bom pagador")
}

//substituindo pelo o IF pelo ternario
console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador" : " não é bom pagador"))