const dias = Number(prompt("Informe quantos dias usou o carro: "))
const kms = Number(prompt("Informe a quilometragem do carro: "))
let total = (dias * 90) + (kms * 0.20)

alert(`O carro foi alugado por ${dias} dias e percorreu ${kms}Km.

Dias = R$${dias * 90} reais
Kms = R$${kms * 0.20} reais

Dando um total de R$${total.toFixed(2)} reais pelo aluguel do veículo.`)