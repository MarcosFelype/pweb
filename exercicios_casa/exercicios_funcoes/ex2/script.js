

const counterFunc = (counter) => {

    if (counter > 100) {

        counter = 0; 
    } else { 
        counter++; 
    } 
    return counter;
}

//obs: a lógica é similar ao flutter!

/*
builder: (context) => Menu_Astronautica()),


se não tivesse parâmetros, fica só os parênteses

ex: 
*/

console.log(counterFunc(5));



 