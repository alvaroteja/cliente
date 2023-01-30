function info(elEvento) {
    var texto = document.getElementById("caja"); //acceso al sitio de escritura
    var evento = elEvento || window.event; // definir objeto event
    if (evento.type == "keydown") {
        texto.innerHTML = "";
    } //borrar texto anterior
    let tipo = "<div id='caja2'><p>Tipo de evento: " + evento.type + "</p>"; //define tipo de evento
    let propkeyCode = "<p>Propiedad keyCode " + evento.keyCode + "</p>"; //info propiedad keyCode
    let propcharCode = "<p>Propiedad charCode " + evento.charCode + "</p>"; //info propiedad charCode
    if (evento.type == "keypress") {
        //el número de caracter sólo está en el evento keypress
        caracter = "<p>Caracter pulsado<br/> -Int. Explorer-: " + String.fromCharCode(evento.keyCode) + "</p>";
        caracter2 = "<p>Caracter pulsado<br/> -Resto naveg.-: " + String.fromCharCode(evento.charCode) + "</p>";
    } else {
        caracter = "";
        caracter2 = "";
    }
    //escribir el texto del evento, al haber tres eventos el texto se escribirá tres veces.
    texto.innerHTML += tipo + propkeyCode + propcharCode + caracter + caracter2 + "<br/></div>";
}
window.onload = function () {
    //acceso a los eventos.
    document.onkeyup = info;
    document.onkeypress = info;
    document.onkeydown = info;
};
