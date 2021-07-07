
let valor = 1.99
let total = 0

for (let i = 1; i <= 50; i++) {
    total += valor
    console.log(i + " - R$ " + total.toFixed(2))

    //solução do professor:
    //console.log(`${i} - R$ ${i * 1.99}`)
}