//aula 07 - maus metodos arrays


/*
const numeros = [10, 15, 25, 55, 40];
const numeroRetornado = numeros.find((numero) => numero > 25);
console.log(numeroRetornado); //55
*/

/*
let indiceRetornado = numeros.findIndex((numero) => numero > 25);
console.log(indiceRetornado);
*/

const numeros = [-7, -10, -3, 0, 4, 5, 100];

let numeroRetornado = numeros.find((numero) => numero > 0);
let indiceRetornado = numeros.findIndex((numero) => numero > 0);
console.log(numeroRetornado);
console.log(indiceRetornado);