/*
Utilize o DOM para adicionar campos dinâmicos em um formulário de cadastro de alunos, por exemplo. Cada vez que um botão for clicado, um novo campo para escrever o nome do aluno deve ser inserido.
*/
var ids = 0;

function criarCampos() {
  //criando labels
  var lab = document.createElement("label");
  var lab_text = document.createTextNode("Nome: ");
  lab.appendChild(lab_text);
  lab.
  document.body.appendChild(lab);

  //criando inputs

  var inp = document.createElement("input");
  document.body.appendChild(inp);
}