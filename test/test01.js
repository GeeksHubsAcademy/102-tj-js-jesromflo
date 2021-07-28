function numPrimo(input) {
    var arrayPrimosHastaN = [];
    for (var i = input; i > 0; i--) {
        var casos = 0;
        for (var j = 0; j < i; j++) {//doble bucle donde recorremos todos  los numeros inferiores a un numero i, así sabremos cuantos lo dividen.
            if (i % j == 0) {
                casos++;
            }
        }
        if (casos < 2 && i != 1) {
            arrayPrimosHastaN.push(i);
        }
    }
    if (input == 1) {
        arrayPrimosHastaN = -1;
    } else {
        arrayPrimosHastaN.sort((a, b) => a - b);
    }//ordenamos en orden descendente solo si es un array, por eso lo metemos en el else

    return arrayPrimosHastaN;
}
module.exports = numPrimo;
