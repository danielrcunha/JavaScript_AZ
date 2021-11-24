//aula 07
//

const titulo = document.createElement("h1");
titulo.textContent = "To Do List";
titulo.classList.add("titulo")
//titulo.classList.remove("titulo")

const body = document.querySelector("body");
const paletas_div = document.querySelector(".paletas_div")
body.insertBefore(titulo, paletas_div);

const paleta4 = document.createElement("div");
paletas_div.appendChild(paleta4);

paleta4.classList.add("paleta")