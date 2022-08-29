/*
3- Escreva um código em JavaScript que receba 3 vértices de um triângulo e determine se esse triângulo é isósceles.
*/

// dando nome aos bois

vax = prompt("Digite a coordenada X do primeiro vértice A")
console.log(vax)

vay = prompt("Digite a coordenada Y do primeiro vértice A")
console.log(vay)

vbx = prompt("Digite a coordenada X do segundo vértice B")
console.log(vbx)

vby = prompt("Digite a coordenada Y do segundo vértice B")
console.log(vby)

vcx = prompt("Digite a coordenada X do terceiro vértice C")
console.log(vcx)

vcy = prompt("Digite a coordenada Y do terceiro vértice C")
console.log(vcy)

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


/* AVALIAR SE DOIS LADOS SÃO IGUAIS */

if (d1 == d2 || d1 == d3 || d2 == d3) {
  console.log("O triângulo é isósceles!")
} else {
  console.log("O triângulo não é isósceles!")
}

