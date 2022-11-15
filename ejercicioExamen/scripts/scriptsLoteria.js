function botonGenerar() {
    let listaAleatorios = generarListaAleatorios();
    listaAleatorios = ordenarArray(listaAleatorios);
    pintarNumerosEnN(listaAleatorios);
}

function generarListaAleatorios() {
    let listaAleatorios = [];
    for (let index = 0; index < 6; index++) {
        repetido = true;
        do {
            num = parseInt(Math.random() * (50 - 1) + 1);
            if (!listaAleatorios.includes(parseInt(num))) {
                listaAleatorios.push(num);
                repetido = false;
            }
        } while (repetido);
    }
    return listaAleatorios;
}

function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

function pintarNumerosEnN(listaNumeros) {
    for (let index = 0; index < listaNumeros.length; index++) {
        document.getElementById("numero" + (index + 1)).value =
            listaNumeros[index];
    }
}
function apostar() {
    let numerosApostados = leerNumeros();
    numerosValidos = validarNumerosApostados(numerosApostados);
    if (numerosValidos) {
        numeroGanador = generarListaAleatorios();
        //numeroGanador = ['1', '2', '3', '4', '5', '6'];

        document.getElementById("numeroGanador").innerHTML =
            "El número ganador es: " + numeroGanador;
        document.getElementById("numeroJugador").innerHTML =
            "El número ganador es: " + numerosApostados;
        hayGanador = compararListas(numeroGanador, numerosApostados);
        if (hayGanador) {
            document.getElementById("resultadoApuesta").innerHTML =
                "¡Estás de suerte! has ganado un pin.";
        } else {
            document.getElementById("resultadoApuesta").innerHTML =
                "Hoy no hay suerte...";
        }
    } else {
        alert(
            "Los números introducidos no son válidos, introduce numeros del 1 al 49 no repetidos"
        );
    }
}
function leerNumeros() {
    let numerosApostados = [];
    for (let index = 0; index < 6; index++) {
        n = document.getElementById("numero" + (index + 1)).value;
        numerosApostados.push(n);
    }
    return numerosApostados;
}

function validarNumerosApostados(numerosApostados) {
    let numerosValidos = true;
    for (let index = 0; index < numerosApostados.length; index++) {
        if (!(numerosApostados[index] > 0 && numerosApostados[index] < 50)) {
            numerosValidos = false;
        }
    }
    return numerosValidos;
}
function compararListas(array1, array2) {
    let sonIguales = true;
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] !== array2[index]) {
            sonIguales = false;
        }
    }
    return sonIguales;
}

function generar50Numeros() {
    let texto = crearTexto(50);
    document.getElementById("combinacionesAleatorias").innerHTML = texto;
}

function crearTexto(n) {
    let texto = "";
    for (let i = 0; i < n; i++) {
        i < 9 ? (cero = 0) : (cero = "");
        let numeros = generarListaAleatorios();
        texto +=
            '<div id="combinacionAleatoria' +
            (i + 1) +
            '" class="combinacionAleatoria"><div class="nCombinacionAleatoria">' +
            cero +
            (i + 1) +
            "</div>";
        for (let j = 0; j < 6; j++) {
            texto +=
                '<div id= "numeroCombinacionAleatoria' +
                (i + 1) +
                "-" +
                (j + 1) +
                '" class="numeroCombinacionAleatoria">' +
                numeros[j] +
                "</div>";
        }
        texto +=
            '	<input type="button" id="combinacionAleatoria' +
            (i + 1) +
            '" value="Elegir" onClick="seleccionarCombinacionAleatoria(this.id)"/></div>';
    }
    return texto;
}
function seleccionarCombinacionAleatoria(clicked_id) {
    let text = clicked_id;
    let id = "aaa";
    let numerosElegidos = [];
    if (isNaN(text.split("")[text.length - 2])) {
        id = text.split("")[text.length - 1];
    } else {
        id = text.split("")[text.length - 2] + text.split("")[text.length - 1];
    }
    for (let index = 0; index < 6; index++) {
        let value = document.getElementById(
            "numeroCombinacionAleatoria" + id + "-" + (index + 1)
        ).textContent;
        numerosElegidos.push(value);
    }
    pintarNumerosEnN(numerosElegidos);
}
