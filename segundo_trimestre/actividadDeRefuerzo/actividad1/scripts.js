let myWindow;
function abrirVentanaNueva() {
    myWindow = window.open("", "", "width=400, height=200");
}

function cerrarVentana() {
    myWindow.close();
}

function moverVentana() {
    myWindow.moveTo(100, 0);
}
