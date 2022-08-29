var jogador = "X";
/*var casas[[]] ;*/

var casas = document.getElementsByClassName('casa');
function verBotao() {
  casas.innerText = jogador;
  //trocarVez();
}

function trocarVez(){
  jogador = "O";
  verBotao();
}
