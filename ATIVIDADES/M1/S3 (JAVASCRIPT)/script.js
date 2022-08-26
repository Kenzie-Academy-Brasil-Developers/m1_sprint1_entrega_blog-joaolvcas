//function calculaValorSalario(valorFixo, valorComissoes){
    if(valorComissoes >= 1500){
       let comissaoFinal = (valorComissoes * 0.05)
       let salarioFinal = (comissaoFinal + valorFixo)
        console.log(salarioFinal)
    }else{
        let comissaoFinal = (valorComissoes * 0.03)
        let salarioFinal = (comissaoFinal + valorFixo)
         console.log(salarioFinal)
    }

//}
//calculaValorSalario(1200, 900)

const arr = [5, 4, 7, 30, 16, 89]

function encontrarPares(lista) {
  let numerosPares = []
  for(let i = 0; i < lista.length; i++){
    
     let numeroAtual = lista[i]
     if(numeroAtual % 2 == 0){
        numerosPares.push(numeroAtual)
     }
  }
  
  return numerosPares
}
