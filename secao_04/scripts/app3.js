let carro = prompt("Informe o carro: ")
console.log("Você pesquisou por: " + carro)

switch(carro){
    case "Gol":
        console.log("Preço: R$ 44,000")
        break
    case "Golf":
        console.log("Preço: R$ 80,000") 
        break   
    default:
        console.log("O carro " + carro + " não está disponível")
}