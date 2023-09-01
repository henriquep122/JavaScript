let anoNascimento = Number(prompt("Informe seu ano de nascimento: "))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

let idade = anoAtual - anoNascimento

if (idade >= 16 && idade >= 60) {
  alert("Você tem idade para votar! (Voto não obrigatório)")
} if (idade >= 18) {
  alert("Você tem idade suficiente para votar! (Voto obrigatório)")
} else {
  
} {
  alert("Você não tem idade para votar!")
}