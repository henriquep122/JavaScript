const veiculo1 = prompt("Informe o nome do 1° veiculo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do 1° veiculo:"))

const veiculo2 = prompt("Informe o nome do 2° veiculo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do 2° veiculo:"))

if(velocidade1>velocidade2){
  alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if(velocidade2>velocidade1){
  alert(veiculo2 + " é mais rápido do que " + veiculo1)
} else{
  alert(veiculo1 + " e " + veiculo2 + " Tem a mesma velocidade")
}