
let nome = prompt("Informe o nome do aluno: ")
let n1 = Number(prompt("Informe a 1° nota do aluno: "))
let n2 = Number(prompt("Informe a 2° nota do aluno: "))

let nota = ((n1+n2)/2).toFixed(2)

alert(`A nota do aluno é de ${nota}pts`)

if (nota >= 7) {
  alert(`O aluno ${nome} está na média com a nota ${nota} - [Aprovado!]`)
} else {
  alert(`O aluno ${nome} não está na média! nota ${nota} - [Reprovado!]`)
}