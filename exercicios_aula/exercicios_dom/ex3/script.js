/*
  3- Implemente um questionário para as seguintes questões de biologia:
https://www.qconcursos.com/questoes-do-enem/questoes/634c5ed3-7a 
https://www.qconcursos.com/questoes-do-enem/questoes/6342977d-7a 
https://www.qconcursos.com/questoes-do-enem/questoes/63265c87-7a 
Na sua implementação, você deve permitir que o usuário selecione as respostas, envie, e o sistema baseado em JavaScript irá exibir quais foram as respostas corretas/erradas e a pontuação final obtida.

*/

var leriA = document.getElementsByClassName("altern")[0].value;

var leriB = document.getElementsByClassName("altern")[1].value;

var leriC = document.getElementsByClassName("altern")[2].value;

var leriD = document.getElementsByClassName("letran")[3].value;

var leriE = document.getElementsByClassName("letran")[4].value;

function conferirResposta1(letra) {
  if (leriE){
    window.alert("Parabéns, você acertou!");
  }else{
    window.alert("Não foi dessa vez. Tente novamente!");
  }
}