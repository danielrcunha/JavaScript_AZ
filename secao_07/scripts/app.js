/*
SISTEMA DO BANCO
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let juros;
let montante;

//console.log("Boa tarde, Sr. " + nome + " " + sobrenome + ". Sua idade é: " + idade)


/*montante = valorEmprestimo + juros
juros = valorEmprestimo * taxaDejuros * numAnos*/

//let juros = valorEmprestimo * taxaDeJuros * numAnos;
//let montante = valorEmprestimo + juros

//console.log("Valor do Montante: " + montante)

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

console.log("taxaDeJuros: " + taxaDeJuros)
//console.log("O cliente " + nome + (heBomPagador + 'é bom pagador'))

for (let cont = 0; cont < 3; cont++) {
    valorEmprestimo = parseInt(prompt("Informe o valor do emprestimo:"));
    numAnos = parseInt(prompt("Informe a quantidade de anos"));
    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;
    console.log(montante);
}

console.log("taxaDeJuros: " + taxaDeJuros)
console.log("valorEmprestimo: " + valorEmprestimo)
console.log("numAnos: " + numAnos)