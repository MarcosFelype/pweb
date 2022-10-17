var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('', {useUnifenedTopology: true}).then((err, client) => {
    var db = client.db('pweb');
    db.collection('animais').find().toArray((err, result) => {
        console.log(result);
    })

    app.get("/", function(req, res){
        res.send("Olá, 913");
    });

    app.listen(8080, function(){
        console.log("Node js em execução");
    });

})
    
