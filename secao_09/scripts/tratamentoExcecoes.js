//tratamento de excecoes
function somaDois(a, b) {
    if (typeof a !== "number") {
        throw TypeError("O primeiro argumento deve ser um numero.");
    }
    if (typeof b !== "number") {
        throw TypeError("O segundo argumento deve ser um numero");
    }
    return a + b;
}

try {
    console.log(somaDois(10, 20));
} catch (erro) {
    console.log(erro);
}

try {
    console.log(somaDois("Daniel", 20));
} catch (erro) {
    console.log(erro);
}

try {
    console.log(somaDois(10, "Daniel"));
} catch (erro) {
    console.log(erro);
}

