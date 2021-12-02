var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
let valores = []

function innum(n){
 if (Number(n) >= 1 && Number(n) <= 100){
   return true
 }else{
   return false
 }
}

function inlista(n,l){
  if( l.indexOf(Number(n)) !=-1){
    return true
  }else{
    return false
  }

}


function adicionar(){
  if (  innum(num.value) && !inlista  (num.value,valores)){
   valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text= `valor ${num.value}      adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  }else{
    window.alert('Valor invalido ou já está na lista')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    window.alert('adicione algum valor!')
  }else{
     var tot =valores.length
     let maior = valores[0]
     let menor = valores[0]
     let soma = 0
     let media = 0
     for(let pos in valores){
       soma +=valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
        if( valores[pos] < menor)
        menor = valore[pos]
     }
     media = soma/tot
     res.innerHtml =''
     res.innerHTML+= `<p> Ao todo temos ${tot} números cadastrados`
     res.innerHTML+= `<p>O maior valor informado foi : ${maior}</p>`
     res.innerHTML+= `<p>O menor valor informado foi : ${menor}</p>`
     res.innerHTML+= `<p>somando todos os valores temos: ${soma}</p>`
     res.innerHTML+= `<p>A média dos valores é: ${media}</p>`
  }
}