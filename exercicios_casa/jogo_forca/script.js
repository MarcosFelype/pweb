var palavras = ["CASA","GATO","SAPATO","QUEIJO","BOLO", "PIZZA" ];

var parag = document.getElementById('paragrafo');

  
console.log(palavras);
/*for (i in palavras){
  console.log(palavras[i]);
}*/

//SORTEIO

const numero = Math.floor(Math.random() * palavras.length);
console.log(numero)
var sorteio = palavras[numero];
console.log(palavras[numero]);

console.log(sorteio.length);
//var sorteio_clone = ["_" + " " + "_" + " " + "_" + " " + "_" + " " + "_" + " " + "_"];


/* //TESTE SUBSTITUINDO STRING VAZIA POR UMA STRING QUALQUER


var sorteio_clone="";


function palavra_sorteada() {
  for (var i=0; i<sorteio.length ; i++) {
    sorteio_clone = "spfc";
    
  }
  parag.textContent = sorteio_clone; 
}
palavra_sorteada();*/


//

var sorteioClone = "";


function palavraSorteada() {
  for (var i=0; i<sorteio.length ; i++) {
    sorteioClone += "_"+" "; 
  }
  parag.textContent = sorteioClone; 
}
palavraSorteada();

console.log(sorteioClone);



function verLetra(){ //avaliar se a letra digtada se encontra na palavra sorteada
  let cloneComLetras = "";
  let letraDigitada = document.getElementById('letra').value.toUpperCase();
  //console.log(letraDigitada + "-->Tipo: " + letraDigitada.typeof);
  
    let posicaoEncontada = sorteio.indexOf(letraDigitada);
    for (let i = 0; i < sorteio.length; i++){
      //console.log(cloneComLetras[i]);
      if (sorteio.includes(letraDigitada) ) {
          if (sorteio[i] == letraDigitada){
            cloneComLetras += letraDigitada;
          }else if (cloneComLetras == "") {
            cloneComLetras += "_" + " ";
          }
        }
      /*else if (cloneComLetras[i] != 'A' || cloneComLetras[i] !='B' || cloneComLetras[i] != 'C' || cloneComLetras[i] != 'D' || cloneComLetras[i] != 'E' || cloneComLetras[i] !=
'F' || cloneComLetras[i] != 'G' || cloneComLetras[i] != 'H' || cloneComLetras[i] != 'I' || cloneComLetras[i] != 'J' || cloneComLetras[i] != 'K' || cloneComLetras[i] != 'L' || cloneComLetras[i] != 'M' || cloneComLetras[i] != 'N' || cloneComLetras[i] != 'O' || cloneComLetras[i] !=  'P' || cloneComLetras[i] != 'Q' || cloneComLetras[i] != 'R' || cloneComLetras[i] != 'S' || cloneComLetras[i] != 'T' || cloneComLetras[i] != 'U' || cloneComLetras[i] != 'W' || cloneComLetras[i] != 'X' || cloneComLetras[i] != 'Y' || cloneComLetras[i] != 'Z'){
  if (sorteio[i] == letraDigitada){
            cloneComLetras += letraDigitada;
          }else{
            cloneComLetras += "_" + " ";
          }
}

*/
    }
  console.log(cloneComLetras);
  parag.textContent = cloneComLetras;
  

    //console.log(sorteio.includes(letraDigitada) );
    /*console.log(sorteio[i]);
    console.log(letraDigitada);*/
    
    
}
         