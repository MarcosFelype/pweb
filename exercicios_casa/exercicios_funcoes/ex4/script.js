
function incrementTentativas(tentativas){
    return tentativas+1;
}

function play(numero){
  return function (tentativa){
    if (numero == tentativa){
        window.alert ("Parabéns, você adivinhou o número sorteado!")
    }else{
        window.alert("Não foi dessa vez. Continue tentando.");

        var inc = controleJogo().tentativas + 1;
        alert(inc);

        /*incrementTentativas(controleJogo().tentativas);
        alert(incrementTentativas(controleJogo().tentativas));
        if (incrementTentativas(controleJogo().tentativas) == 0){
            alert("opa")
            const tentativas = controleJogo().tentativas + 1;
            alert(tentativas);
        }else{
            alert("kkkk")
            const tentativas = incrementTentativas(incrementTentativas(tentativas));
            alert(tentativas);
        }*/

        
    }  
  }
}



function controleJogo(){
  var resposta = Math.floor(Math.random() * 11);
  var tentativas=0;


    return {
        resposta,
        tentativas
    }
}

for (var i=0; i<15; i++){
    const mandar_resp = play(controleJogo().resposta);
    const tentativa = window.prompt("Digite um número e verifique se correspondeu com o sorteado");
    mandar_resp(tentativa);

}




//alert(respostaJogo())



