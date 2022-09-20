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
    function bar(){
        var z = 15;
        return x + y + z;
    }
    return bar;
}

var soma = foo();
console.log(soma());