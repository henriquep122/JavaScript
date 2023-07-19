function carregar() {
  var msg = document.getElementById("msg")
  var img = document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 0 && hora < 12){
    img.src = "imagens/manhã.png"
    document.body.style.background = "linear-gradient(to top, #a9a9a9, #f9f983)"
  } else if(hora >= 12 && hora < 18){
    img.src = "imagens/tarde.png"
    document.body.style.background = "linear-gradient(to top, #a9a9a9, #b9846f)"
  } else {
    img.src = "imagens/noite.png"
    document.body.style.background = "linear-gradient(to top, #a9a9a9, #515154"
  }
}
