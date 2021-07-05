let cargo = "Desenvolvedor"

switch (cargo) {
    case "Prog. Junior":
        console.log("Programador Junior recebe 4k")
        break;
    case "Prog. Pleno":
        console.log("Prog. Pleno recebe 5k")
        break;
    case "Prog Senior":
        console.log("Prog Senior recebe 6k")        
        break;
    case "Testador":
        console.log("Testador recebe 5k")
        break;
    case "Arquiteto":
        console.log("Arquiteto recebe 8k")
        break
    case "Analista":
        console.log("Analista recebe 7k")
        break;
    case "Gerente":
    console.log("Gerente recebe 10k")
    break;                
    default:
    console.log("Atenção, "+ cargo +" não é um cargo cadastrado!")
    break;
}