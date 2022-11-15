console.log("hola");
function generarAleatorio() {
    listaAleatorios = [];
    for (let index = 0; index < 6; index++) {
        num = parseInt(Math.random() * (49 - 1) + 1);
        console.log(num);
    }
}
