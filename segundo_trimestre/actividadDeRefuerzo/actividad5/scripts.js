document.addEventListener("click", position);

function position(event) {
    var x = event.clientX;
    var y = event.clientY;
    let ancho = window.innerWidth;
    let alto = window.innerHeight;

    if (x < ancho / 2 && y < alto / 2) {
        alert("arriba izquierda");
    } else if (x < ancho / 2 && y > alto / 2) {
        alert("abajo izquierda");
    } else if (x > ancho / 2 && y < alto / 2) {
        alert("arriba derecha");
    } else if (x > ancho / 2 && y > alto / 2) {
        alert("abajo derecha");
    } else {
        alert("has atinado en to er medio!!");
    }
    console.log("X coords: " + x + ", Y coords: " + y);

    //var mousePositions = document.getElementById("mousePositions");
    //mousePositions.innerHTML = "X coords: " + x + ", Y coords: " + y;
}
