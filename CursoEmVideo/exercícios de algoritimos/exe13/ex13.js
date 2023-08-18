let salarioAtual = Number(prompt("Informe o seu salário: "))
let aumento = 0.15 * salarioAtual
let novoSalario = salarioAtual + aumento

alert(`Seu novo salário com 15% de aumento é de:  R$ ${novoSalario.toFixed(2)}`)

