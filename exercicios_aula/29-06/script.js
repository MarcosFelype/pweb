



function carregarImg(){
    fetch('coffee.jpeg')
    .then({
        //neste then, chama o XMLHttpRequest  
    })

    .then( {
        //neste then, cria o atributo img, com o appendChild
    })

    .catch(function(err) {
    console.log('Fetch problem: ' + err.message);
    });
}
    

carregarImg();