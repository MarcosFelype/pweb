/*
 2- No plano cartesiano existem os pontos D (3,2) e C (6,4). Escreva um código em JavaScript que calcule a distância entre D e C. 
*/

//Atribuindo valores aos números
num1 = 3
num2 = 2

num3 = 6
num4 = 4


// subtrando X de Y, tanto em D quanto C
difd = num1-num2
difc = num3-num4

// elevando ao quadrado as diferenças acima
var p1 = difd*difd
var p2 = difc*difc

// somando o anterior
som = p1 + p2


// raiz quadrada do último (agora sim a distância em si!)
var d = Math.sqrt(som) 

console.log("A distância entre os pontos D e C é " + d.toFixed(2))



