function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fAno.value.lengh == 0 || fAno.value > ano){
    alert(`[ERRO] Verifique os dados e tente novamente`)
  } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'imagens/homemBebe.png')
      } else if (idade < 21){
        img.setAttribute('src', 'imagens/homemJovem.png')
      } else if (idade < 50){
        img.setAttribute('src', 'imagens/homemAdulto.png')
      }else {
        img.setAttribute('src', 'imagens/homemIdoso.png')
      }


    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'imagens/mulherBebe.png')
      } else if (idade < 21){
        img.setAttribute('src', 'imagens/mulherJovem.png')
      } else if (idade < 50){
        img.setAttribute('src', 'imagens/mulherAdulta.png')
      }else {
        img.setAttribute('src', 'imagens/mulherIdosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Genero ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
