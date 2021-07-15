//aula 07 - maus metodos arrays

const numeros = [10, 15, 25, 55, 40];
const numeroRetornado = numeros.find((numero) => numero > 25);
console.log(numeroRetornado); //55

let indiceRetornado = numeros.findIndex((numero) => numero > 25);
console.log(indiceRetornado);