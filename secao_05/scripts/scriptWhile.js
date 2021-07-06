//enquanto a condição for verdadeira continue
let soma = 0;
let numero;

while (soma < 100) {
    numero = parseInt(prompt("Insira um numero: "))
    soma += numero //mesma coisa que soma = soma + numero
    console.log(soma)
}
console.log("FIM")