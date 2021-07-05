let amigurumi = 1
let charme = 2
let anne = 3

let opcao = prompt("INFORME A LINHA: \n\nAMIGURUMI(1) \nCHARME(2) \nANNE(3)")
console.log(opcao)

switch (opcao) {
    case "1":
        console.log("amigurumi")
        let cor_amigurumi = prompt("Informe a cor desejada: \n\n8001: Branco\n8990: Preto\n7565: Amêndoa\n7563: Chantily")
        switch (cor_amigurumi) {
            case "8001":
                console.log("8001 - Branco")
                break
            case "8990":
                console.log("8990 - Preto")
                break
            case "7565":
                console.log("7565 - Amêndoa")
                break
            case "7563":
                console.log("7563 - Chantily")
                break
            default:
                alert("Amigurumi, cor " + cor_amigurumi + " não está disponível")
        }
        break;
    case "2":
        console.log("Charme")
        let cor_charme = prompt("Informe a cor desejada: \n\n8001: Branco\n8990: Preto\n7565: Amêndoa")
        switch (cor_charme) {
            case "8001":
                console.log("8001 - Branco")
                break
            case "8990":
                console.log("8990 - Preto")
                break
            case "7565":
                console.log("7565 - Amêndoa")
                break
            default:
                alert("Charme, cor " + cor_charme + " não está disponível")
        }
        break;
    case "3":
        console.log("Anne")
        let cor_anne = prompt("Informe a cor desejada: \n\n8001: Branco\n8990: Preto\n7565: Amêndoa")
        switch (cor_anne) {
            case "8001":
                console.log("8001 - Branco")
                break
            case "8990":
                console.log("8990 - Preto")
                break
            case "7565":
                console.log("7565 - Amêndoa")
                break
            default:
                alert("Anne, cor " + cor_anne + " não está disponível")
        }
        break
    default:
        alert(opcao + " não encontrado, verifique as opções no menu!")
}