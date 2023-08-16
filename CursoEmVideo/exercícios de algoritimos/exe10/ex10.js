const altura = Number(prompt("Informe a altura da parede: "))
const largura = Number(prompt("Informe a largura da parede: "))

let metros = altura * largura

alert(`A área a ser pintada é de ${metros} metros².
A quantidade de tinta nescessária para pintar essa parede é de ${metros/2} Litros`)