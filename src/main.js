function sum(a,b){
    return a + b;
}

// Ejercicio 1
function pin(pin) {
    // Verificar que pin no sea nulo, sea una cadena numérica y tenga exactamente 4 o 6 caracteres
    if (pin !== null && !isNaN(pin) && (pin.length === 4 || pin.length === 6)) {
        return true;
    } else {
        return false;
    }
}

// Ejercicio 2
function calcularVolumen(diametro, altura, unidad){

    let radio = 0;
    
    if(diametro !== null && altura !== null && unidad !== null && !isNaN(diametro) && !isNaN(altura) && (unidad === 1 || unidad === 2)){
        
        // Transformamos a dm.. 1dm3 = 1l
        switch (unidad) {
            case 1: // Si son centimetros: 
                diametro /= 10;
                altura /= 10;
                break;
            case 2:  // Si son metros
                diametro *= 10
                altura *= 10
                break; 
            default:
                return -1;
        }
        
        radio = diametro / 2;
        let volumen = Math.PI * radio ** 2 * altura; 
        
        return volumen;
    }

    return -1;
}

// Ejercicio 4
function calcularSiglo(anio) {
    if (anio !== null && !isNaN(anio)) {
        // Math.ceil(): redondear hacia arriba.
        return Math.ceil(anio / 100);
    }
    return -1;
}

module.exports = {sum, pin, calcularVolumen, calcularSiglo};