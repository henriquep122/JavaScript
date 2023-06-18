const entrada1 = prompt("Informe o 1° número: ")
const entrada2 = prompt("Informe o 2° número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const adcao = x + y
const subtracao = x - y
const multiplicacao = x * y
const divicao = x / y

alert(
  "Resultados" + 
  "\nA soma é de:" + " " + adcao + 
  "\nA subtração é de:" + " " + subtracao +
  "\nA multiplicação é de:" + " " + multiplicacao +
  "\nA divisão é de:" + " " + divicao
)
