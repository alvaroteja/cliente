const tablaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
const DNI_REGEX = /^\d{8}[A-Z]$/i;
const NIE_REGEX = /^[XYZ][0-9]{7}[A-Z]$/i;
const CIF_REGEX = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/i;

function main() {
    let numeroAValidar = document.getElementById("numero").value;

    if (DNI_REGEX.test(numeroAValidar)) {
        validarDNI(numeroAValidar);
    } else if (NIE_REGEX.test(numeroAValidar)) {
        validarNIE(numeroAValidar);
    } else if (CIF_REGEX.test(numeroAValidar)) {
        validarCIF(numeroAValidar);
    } else {
        if (numeroAValidar.length == 0) {
            imprimirMensaje("El campo está vacío.");
        } else if (numeroAValidar.length > 0 && numeroAValidar.length < 9) {
            imprimirMensaje("Se requiere un número de 9 dígitos.");
        } else {
            imprimirMensaje("El número introducido no es ni un DNI ni un NIE ni un CIF.");
        }
    }
}

function validarDNI(dni) {
    dni = dni.toUpperCase();

    let parteNumerica = dni.substr(0, dni.length - 1);
    let letra = dni.substr(dni.length - 1, dni.length);

    if (letra == tablaLetras[parteNumerica % 23]) {
        imprimirMensaje("El número introducido " + dni + " corresponde a un DNI y es correcto");
    } else {
        imprimirMensaje("La letra de control de tu DNI es incorrecta.");
    }
}

function validarNIE(nie) {
    nie = nie.toUpperCase();

    let parteNumerica = nie.substr(0, nie.length - 1);
    parteNumerica = parteNumerica.replace("X", "");
    parteNumerica = parteNumerica.replace("Y", 1);
    parteNumerica = parteNumerica.replace("Z", 2);

    let letra = nie.substr(-1, nie.length);

    if (letra == tablaLetras[parteNumerica % 23]) {
        imprimirMensaje("El número introducido " + nie + " corresponde a un NIE y es correcto.");
    } else {
        imprimirMensaje("La letra de control de tu NIE es incorrecta.");
    }
}

function validarCIF(cif) {
    cif = cif.toUpperCase();
    let tabla = ["J", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
    let parteNumerica = cif.substring(1, cif.length - 1);
    let ultimoDigito = cif.substring(cif.length - 1, cif.length);
    let digito = 0;
    let pares = 0;
    let impares = 0;
    let sumatorio = 0;

    //suma de los pares
    for (let i = 1; i < parteNumerica.length; i = i + 2) {
        pares += parseInt(parteNumerica.substring(i, i + 1));
    }

    //suma de los impares
    for (let i = 0; i < parteNumerica.length; i = i + 2) {
        let aux = 2 * parseInt(parteNumerica.substring(i, i + 1));
        if (aux > 9) {
            let decenas = aux.toString()[0];
            let unidades = aux.toString()[1];
            aux = parseInt(decenas) + parseInt(unidades);
        }
        impares += aux;
    }

    sumatorio = pares + impares;
    digito = 10 - parseInt(sumatorio.toString()[1]);
    if (ultimoDigito == digito || ultimoDigito == tabla[digito]) {
        imprimirMensaje("El número introducido " + cif + " corresponde a un NIE y es correcto.");
    } else {
        imprimirMensaje("El dígito de control de tu CIF es incorrecto.");
    }
}
function imprimirMensaje(mensaje) {
    let p = document.getElementById("mensajeError");
    p.innerHTML = mensaje;
}
