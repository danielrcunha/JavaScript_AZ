/*
SISTEMA DO BANCO
*/

let nome
let sobrenome
let idade
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let juros;
let heBomPagador;
let montante;
let avalista;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente, numAnosCliente = 2, heBomPagadorCliente = false, avalistaCliente) {
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    heBomPagador = heBomPagadorCliente;
    taxaDeJuros = defineTaxa(idadeCliente)
    avalistas = avalistaCliente;
}

function defineTaxa(idadeCliente) {
    if (idade >= 18 && idade <= 25) {
        return 0.09;
    } else if (idade >= 26 && idade <= 35) {
        return 0.08;
    } else if (idade >= 36 && idade <= 50) {
        return 0.07;
    } else {
        return 0.06;
    }
}

//console.log("Boa tarde, Sr. " + nome + " " + sobrenome + ". Sua idade é: " + idade)


/*montante = valorEmprestimo + juros
juros = valorEmprestimo * taxaDejuros * numAnos*/

//let juros = valorEmprestimo * taxaDeJuros * numAnos;
//let montante = valorEmprestimo + juros

//console.log("Valor do Montante: " + montante)


cadastraCliente("Edval", "Silveira", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"])
console.log(nome);
console.log(avalistas);
console.log(avalistas[0]);
console.log(avalistas[1]);
console.log(avalistas[2]);

