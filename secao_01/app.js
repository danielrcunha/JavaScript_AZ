/*
Sistema de cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = "SIM";

console.log("Boa tarde, Sr. "+ nome +" "+ sobrenome + ". Sua idade é: " +idade)

/*montante = valorEmprestimo + juros
juros = valorEmprestimo * taxaDejuros * numAnos*/

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros

console.log("Valor do Montante: " + montante)