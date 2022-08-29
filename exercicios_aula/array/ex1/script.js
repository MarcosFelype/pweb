var seq = [];
var num2;
var numero = document.getElementById('num');



function preencherSeq() {
  if (seq.length < 1) {
    var numero_valor = Number(numero.value);
    console.log(numero_valor);
    seq.push(numero_valor); 
    num2 = numero_valor + 0; 
    console.log(num2);
    seq.push(num2);
    console.log('Quantidade elementos é:' + seq.length);
    for (let index = 0; index < seq.length; index++) {
      console.log(seq[index]);
    }
    somar();
  } else {
    document.write("Primeiro número já preenchido!");
  }
}

function somar() {
  let soma = 0;
  for (let i = 2; i < 10; i++) {
    soma = seq[i-2] + seq[i-1];
    seq.push(soma);
    
  }
  console.log(seq);
}
  /*else if (seq.length > 1) {
    for (let i=0; i<seq.length; i++) {
      let soma = seq[seq.length - 1] + seq[seq.length -2];
      seq.push(soma);
    }
    console.log(seq);
    document.write(seq);
  }*/
