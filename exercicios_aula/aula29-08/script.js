var nome = document.getElementById('inp1');
var lastNome = document.getElementById('inp2');

var name = "";
var lastName = "";
function PegarNomes(){
  name = nome.value;
  lastName = lastNome.value;
  escreverNome(name, lastName);
}

function escreverNome(name, lastName){
  console.log ("Olá, "+name+" "+lastName);
}

