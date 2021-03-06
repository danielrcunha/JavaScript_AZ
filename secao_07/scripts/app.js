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
let avalistas;


function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente, numAnosCliente = 2,
    heBomPagadorCliente = false, avalistaCliente) {
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

function adicionaAvalista(avalista) {
    avalistas.push(avalista);
}

function removeAvalista() {
    avalistas.pop();
}

function editaAvalista(nomeAvalista, indice) {
    avalistas[indice] = nomeAvalista;
}

function ordenaAvaslita() {
    return avalistas.sort();
}

function exibeAvalistas() {
    avalistas.forEach((avalista, indice) => {
        console.log(`O ${indice + 1}º avalista é ${avalista}`);
    });
}

adicionaAvalista("Andrew")
adicionaAvalista("José")
adicionaAvalista("Marcos")
console.log(avalistas);

removeAvalista();
removeAvalista();
console.log(avalistas);

editaAvalista("Manuel Silva", 0);
console.log(avalistas[0]);
console.log(ordenaAvaslita());

exibeAvalistas();
