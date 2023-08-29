let velocidade = Number(prompt("Qual era a velocidade do seu carro(km)? "))

if (velocidade > 80) {
  alert(`Você foi multado por excesso de velocidade!
O valor da sua multa é de R$${(velocidade-80)*5} reais`)
}