//LOOPS ANINHADOS

const quadroFuncionarios = [["Financeiro", "Kilma", "Daniel"],
["Marketing", "Sarah", "Leticia"],
["Diretoria", "Keila", "Marcos"]]

quadroFuncionarios.forEach((departamentos, indiceDep) => {
    departamentos.forEach((funcionario, indiceDep) => {
        console.log(`${indiceDep + 1} - ${funcionario}`);
    })
})