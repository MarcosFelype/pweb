var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'content-Type': 'text/plain'});
    
    response.end('Olá, 913!');


}).listen(8080,'127.0.0.1'); // 0.0.0.0 se for no repl.it

console.log("Servidor executando...");