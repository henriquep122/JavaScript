const primeiroNome = prompt("Informe o 1° nome do recruta: ")
const sobrenome = prompt("Informe o sobrenome do recruta: ")
const campoDeEstudo = prompt("Informe o campo de estudo do recuta: ")
const anoDeNascimento = prompt("Ano de nascimento do recruta: ")

alert(
  "Recruta cadastrado com sucesso!\n" +
  "Nome completo: " + primeiroNome + " " + sobrenome + " " + 
  "\n Campo de estudo: " + campoDeEstudo + 
  "\n Idade: " + (2023 - anoDeNascimento)
)