// Define variables
var intNumero = 100;

// Imprime 100 numeros
for (var i=1; i<=intNumero; i++) {
    document.write(evaluarNumero(i) + '<br />');
}

// Funcion que evalua si es fizz o buzz 
function evaluarNumero(dato) {
    var intResiduo3 = dato % 3;
    var intResiduo5 = dato % 5;
    var strRetorno = "";
    
    if (intResiduo3 == 0) { // Evalua divisible de 3
        strRetorno = strRetorno + " Fizz ";
    }
    if (intResiduo5 == 0) { // Evalua divisible de 5
        strRetorno = strRetorno + " Buzz ";
    }
    else {
        if (intResiduo3 != 0) {
            strRetorno = strRetorno + i;
        }
    }

    return strRetorno;
}