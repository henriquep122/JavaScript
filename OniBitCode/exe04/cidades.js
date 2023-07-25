const turista = prompt("Olá qual o seu nome? ")
let cidades = ""
let cont = 0

let continuar = prompt(`${turista}, você visitou alguma cidade? (Sim/Não)`)

while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada? ")
  cidades += " - " + cidade + "\n"
  cont++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  `Turista: ${turista}
  \nQuantidade de cidades visitadas: ${cont}
  \nCidades Visitadas:\n${cidades}`
)

