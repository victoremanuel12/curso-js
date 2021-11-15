function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano ){
      window.alert('[ERRO] Idade inexistente,verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        gênero = 'Homem'
        if ( idade >= 0 && idade < 10){
          //criança 
          img.setAttribute('src','menino.png')
        }else if ( idade <=30){
          //adolescente homem
          img.setAttribute('src','jovem homem.png')
        }else if (idade <60){
          //adulto homem
          img.setAttribute('src','adulto.png')
        } else {
          //idoso
          img.setAttribute('src','idoso.png')
        }
    }else if (fsex[1].checked){
      gênero = 'Mulher'
      if ( idade >= 0 && idade < 10){
      //criança 
      img.setAttribute('src','menina.png')
      }else if ( idade <=30){
        //adolescente mulher
        img.setAttribute('src','jovem mulher.png')
      }else if (idade < 50){
        //adulto mulher
        img.setAttribute('src','adulta.png')
      } else {
        //idosa
        img.setAttribute('src','idosa.png')
      }
    }

    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
  }
}