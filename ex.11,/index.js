 var num=[8,6,7,9]
 //num.push(3)
 //num.sort()
 console.log(num)
 //console.log(`O vetor tem ${num.length} posições:`)
 //console.log(`O primeiro vetor é ${num[0]}`)

  // console.log('como seia:')
  // console.log(num[0])
  // console.log(num[1])
  // console.log(num[2])
  // console.log(num[3])
 // forma mais fácil usando repetições^,usando percurso para exibição de vetores:
 //for(var pos = 0;pos<num.length;pos++){
   //console.log( `A posição ${pos} tem ${num[pos]} valor` )}
   //for(var pos in num){
     //console.log(`A posição ${pos} tem ${num[pos]} valor`)
   //}

   var pos = num.indexOf(80)
   
    if(pos==-1){
      console.log(`Não existe esse valor`)
    }else{
      console.log(`O valor 6 está na posição ${pos}`)
    }

 


