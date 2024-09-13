function sum(a,b){
    return a + b;
}

/** PARTE I **/

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

/** PARTE II **/

// Ejercicio 3
function paseoBicicleta(h){
    if (!isNaN(h) && h !== null && h > 0) {
        let l_agua = Math.floor(h * 0.5);
        return l_agua;
    }
    return -1;
}

// Ejercicio 5
function piedraPapelTijera(p1, p2) {
    const reglas = {
        piedra: "tijera",
        papel: "piedra",
        tijera: "papel"
    }
    if(typeof p1 === 'string' && typeof p2 === 'string'){
        if ((p1 === 'piedra' || p1 === 'papel' || p1 === 'tijera') && (p2 === 'piedra' || p2 === 'papel' || p2 === 'tijera')) {
            if(p1 === p2){
                return "empate";
            }
            return reglas[p1] === p2 ? "jugador1 gana" : "jugador2 gana";
        }
    }
    return -1;
}

// Ejercicio 6
function validadorDirecciones(direccion) {
    const requiredFields = {
        street: 'string',
        number: 'number',
        zip_code: 'number',
        city: 'string',
        province: 'string'
    };

    // Parametros obligatorios
    for (let field in requiredFields) {
        if (!(field in direccion) || typeof direccion[field] !== requiredFields[field]) {
            return -1;
        }
    }

    // Parametros opcionales:
    if (direccion.floor_apartment && typeof direccion.floor_apartment !== 'string') {
        return -1; 
    }
    if (direccion.town && typeof direccion.town !== 'string') {
        return -1; 
    }

    return direccion;
}


module.exports = {sum, pin, calcularVolumen, calcularSiglo, paseoBicicleta, piedraPapelTijera, validadorDirecciones};