function calcular(){
  var num = document.getElementById('txtn')
  var tab = document.getElementById('seltab')
    if(num.value.length==0){
      window.alert('Digite um número!')
    }else{
      var n = Number(num.value) 
      var c = 1 
      var s
      tab.innerHTML=''
      do{
        var item = document.createElement('option')
        r=n*c
        item.text = `${n} x ${c} = ${r}` 
        tab.appendChild(item)
        c=c+1
      }while(c<=10)
      
    }
}