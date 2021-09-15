let produtos = "32100232-B\n322032321-B\n3212122121-C";
console.log(produtos)
const regex = /[0-9]+[-][B]/g; //aqui vai trazer os B
const resultado = produtos.match(regex)
console.log(resultado)