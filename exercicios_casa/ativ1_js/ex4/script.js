/*
4- O ponto B = (3, b) é equidistante dos pontos A = (6, 0) e C = (0, 6). Em JavaScript, calcule o ponto B.
*/

vax = 6

vay = 0

vbx = 3

// vby = ?

vcx = 0

vcy = 6

console.log("---------")

console.log(vax)
console.log(vay)

console.log(vbx)
console.log(vby)

console.log(vcx)
console.log(vcy)


/*  CÁLCULOS DE DISTÂNCIA  */

// subtrando X de Y, tanto em D quanto C
difa = vax-vay
difb = vbx-vby
difc = vcx-vcy

// elevando ao quadrado as diferenças acima
var p1 = difa*difa
var p2 = difb*difb
var p3 = difc*difc

// somando o anterior
som1 = p1 + p2
som2 = p1 + p3
som3 = p2 + p3


// raiz quadrada do último (agora sim a distância em si!)
var d1 = Math.sqrt(som1)
console.log("A distância entre os pontos A e B é " + d1.toFixed(2))

var d2 = Math.sqrt(som2)
console.log("A distância entre os pontos A e C é " + d2.toFixed(2))

var d3 = Math.sqrt(som3)
console.log("A distância entre os pontos B e C é " + d3.toFixed(2)) 
