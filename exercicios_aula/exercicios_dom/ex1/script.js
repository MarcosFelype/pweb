var num1 = parseInt(document.getElementById('c1').value);
  
var num2 = parseInt(document.getElementById('c2').value);
var resultado = document.getElementById('resultado');

var equal = document.getElementById('equal');

function somar(operacao){
  var soma = num1 + num2;
  igual(soma);
}

/*
somar('+')"> + </button>
  <button onclick="subtrair('-')"> - </button>
  <button onclick="multiplicar('*')"> X </button>
  <button onclick="dividir('/')"
*/

function subtrair(operacao){
  var sub = num1 - num2;
  igual(sub);
}

function multiplicar(operacao){
  var mult = num1 * num2;
  igual(mult);
}

function dividir(operacao){
  
  var divi = num1 / num2;
  igual(divi);
  //resultado.innerText = soma;
}

function igual(oper) {
  if (c1 != "" || c2 != "" && igual.target) {
    resultado.innerText = oper;
  } else {
    window.alert("Falha de preenchimento dos campos. Tente novamente.");
  }
}

/*
onclick="igual('=')"
*/