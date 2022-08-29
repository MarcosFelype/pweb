/*var nome = "Marcos Felype Silva"

var idade = "17"

var matriculado = true

console.log("Nome: " + nome + ".Variável do tipo " +typeof nome)

console.log("Idade: " + idade + ".Variável do tipo " +typeof idade)

console.log("matriculado: " + matriculado + ".É uma variável do tipo " + typeof matriculado)*/

var input1 = document.getElementById('usuario');
var input2 = document.getElementById('senha');
var botao = document.getElementById('botao');

var valor1 = input1.value;
var valor2 = input2.value;

botao.addEventListener('click', alertaEnvio);

function alertaEnvio() {
 if (valor1=="" && valor2=="") {
    window.alert("Os campos não estão preenchidos!");
  }else if (valor1=="") {
    window.alert("O campo de usuário está vazio!");
  }else if (valor2=="") {
    window.alert("O campo de senha está vazio!");
  }else{
    window.alert("Ambos os campos estão preenchidos!");
  } 
}
