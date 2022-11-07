var button = document.getElementById("miimagen");
button.addEventListener("click", cambiaIMG, false);

function cambiaIMG() {
    var imagen = document.getElementById("imagen");

    if (imagen.src.match("img1.jpg")) {
        imagen.src = "img2.jpg";
    } else if (imagen.src.match("img2.jpg")) {
        imagen.src = "img3.jpg";
    } else if (imagen.src.match("img3.jpg")) {
        imagen.src = "img4.jpg";
    } else if (imagen.src.match("img4.jpg")) {
        imagen.src = "img1.jpg";
    }
}