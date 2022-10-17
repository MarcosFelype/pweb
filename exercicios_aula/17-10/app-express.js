var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Olá, torcedor alvinegro!');
});

app.listen(3000, function(){
    console.log(' App executando na porta 3000.');
})