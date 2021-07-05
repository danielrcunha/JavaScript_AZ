/*
Sistema de cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 65;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = "SIM";

console.log("Boa tarde, Sr. " + nome + " " + sobrenome + ". Sua idade é: " + idade)


/*montante = valorEmprestimo + juros
juros = valorEmprestimo * taxaDejuros * numAnos*/

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros

console.log("Valor do Montante: " + montante)

if (idade >= 18 && idade <= 25) {
    taxaDeJuros = 0.09
} else if (idade >= 26 && idade <= 35) {
    taxaDeJuros = 0.08
} else if (idade >= 36 && idade <= 50) {
    taxaDeJuros = 0.07
} else if (idade >= 18 && idade <= 25) {
    taxaDeJuros = 0.09
} else {
    taxaDeJuros = 0.06
}

console.log(taxaDeJuros)
console.log("O cliente " + nome + (heBomPagador + 'é bom pagador'))