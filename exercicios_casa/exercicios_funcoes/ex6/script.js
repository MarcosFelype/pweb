function repetirCallback(string, numero){
    for (var i=0; i<numero; i++){
        alert(string);
    }
}

function repeat(string,numero,callback){
    callback(string, numero);
}

repeat("opa", 5, repetirCallback)