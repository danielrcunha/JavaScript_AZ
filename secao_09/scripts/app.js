//MOSTRA O ERRO
/*
try {
    let num = 1;
    num.toUpperCase();
} catch (erro) {
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message);
} finally {
    console.log('Fim da instrução try/catch/finally');
}*/

//mesmo código sem ERRO
try {
    let nome = 'Daniel';
    console.log(nome.toUpperCase());
} catch (erro) {
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message);
} finally {
    console.log('Fim da instrução try/catch/finally');
}