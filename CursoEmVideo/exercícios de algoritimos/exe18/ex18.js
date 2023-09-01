let anoNascimento = Number(prompt("Informe seu ano de nascimento: "))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

let idade = anoAtual - anoNascimento

if (idade >= 18 && idade < 70) {
  alert("Você tem idade para votar! (Voto obrigatório)")
} if (idade >= 16 && idade <= 18 || idade >= 70) {
    alert("Você tem idade para votar! (Voto não obrigatório)")
}  else {
    alert("Você não tem idade suficiente para votar!") 
  }

