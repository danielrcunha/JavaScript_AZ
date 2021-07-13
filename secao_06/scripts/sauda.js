let nome = "Manoel"

function sauda() {
    let saudacao = "Olá Sr. " + nome;
    return saudacao
}

console.log(sauda())
console.log(saudacao())//variaval local

//as variaveis locais não podem ser acessadas pela global
//as variaveis globais podem ser acessadas pela locais