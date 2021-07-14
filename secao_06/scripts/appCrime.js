function interrogatorio() {
    let numSim = 0;
    let pergunta1 = prompt("Telefonou para a vitima?")
    let pergunta_1 = pergunta1.toLowerCase()

    let pergunta2 = prompt("Esteve no local do crime?")
    let pergunta_2 = pergunta2.toLowerCase()

    let pergunta3 = prompt("Mora perto da vitima?")
    let pergunta_3 = pergunta3.toLowerCase()

    let pergunta4 = prompt("Devia para a vitima?")
    let pergunta_4 = pergunta4.toLowerCase()

    let pergunta5 = prompt("Já trabalhou com a vitima?")
    let pergunta_5 = pergunta5.toLowerCase()


    if (pergunta_1 === "sim") {
        numSim += 1;
    }
    if (pergunta_2 === "sim") {
        numSim += 1;
    }
    if (pergunta_3 === "sim") {
        numSim += 1;
    }
    if (pergunta_4 === "sim") {
        numSim += 1;
    }
    if (pergunta_5 === "sim") {
        numSim += 1;
    }
    return numSim;
}

function classifica(numSim) {
    if (numSim === 5) {
        console.log("Assassino")
    } else if (numSim === 3 || numSim === 4) {
        console.log("Cumplice")
    } else if (numSim === 2) {
        console.log("Suspeito")
    } else {
        console.log("Inocente")
    }
}

classifica(interrogatorio());