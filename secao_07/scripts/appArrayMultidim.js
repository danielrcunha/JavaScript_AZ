const clientes = [["Manuel", 24, true], ["Edval", 24, false], ["Raphael", 19, true]];

console.table(clientes)

//console.log(clientes[1][0])
//console.log(clientes[1][1])

clientes.push(["Bruno", 27, false]);
console.log(clientes);

console.table(clientes)

clientes.push(["Daniel", 37, true]);
clientes.pop(); //remove do array o último inserido
clientes.pop(4) //remove do array de acordo com o indice
console.table(clientes)