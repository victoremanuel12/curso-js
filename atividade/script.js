function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
  if(hora >= 0 && hora < 12){
    //bomd dia
    img.src="fotos/foto manha em circulo.png"
    document.body.style.background='#FAEBBB'
  }else if(hora>=12 && hora<=18){
      //boa tarde
    img.src="fotos/foto tarde em circulo.png"
    document.body.style.background='#F2AB6D'
  }else{
    //boa noite
    img.src="fotos/noite em circulo.png"
    document.body.style.background='#68788C'
  }
}
