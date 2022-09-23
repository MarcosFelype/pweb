/*function makeFunc() {
    var nome = "Mozilla";
    function displayName(){
        alert(nome);
    }
    return displayName;
}

var myFunc = makeFunc();
console.log(myFunc());*/

var x = 10;

function foo(){
    var y=20;
    return function bar(){
        var z = 15;
        return {
            z,
            y
        }; 
    }
}

var soma = foo();
console.log(soma());

//pegar valor de z

//console.log(soma().z);

//ou

var getZ = soma();
console.log(getZ);
console.log (`O valor de z é: ${getZ.z}`);


