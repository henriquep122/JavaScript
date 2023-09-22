let ano = Number(prompt("Informe o ano para verificação: "))

let anobi = ano%4
let anobi2 = ano%400

if (anobi === 0 || anobi2 === 0 ) {
  alert(`O ano de ${ano} é bissexto`)
} else{
  alert(`O ano de ${ano} não é bissexto`)
}