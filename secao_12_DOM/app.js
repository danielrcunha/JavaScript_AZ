const container = document.querySelector(".container");
const erro = document.querySelector(".erro");
const input = document.querySelector(".input_div");
const botaoCadastra = document.querySelector(".botao_adc");
const listaAtividades = document.querySelector(".lista_atividades");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");

console.log(container);
console.log(listaAtividades);
console.log(input);
console.log(erro);
console.log(botaoCadastra);
console.log(paleta1);
console.log(paleta2);
console.log(paleta3);

function criaAtividade() {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade"); /*"atividade é um objeto encontrado no css, vamos utilizar seus atributos nessa FN"*/
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value; /* resposavel por guardar o valor do texto */
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}



function cadastraAtividade() {
    if (input.value.length > 3) {
        erro.style.display = "none";
        //criaAtividade();
    } else {
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput() {
    input.value = "";
}

/*vai validar o "cadastraAtividade()" ao ser clicado*/
window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cadastraAtividade();
    }
});