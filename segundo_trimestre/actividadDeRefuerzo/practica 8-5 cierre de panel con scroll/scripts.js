let capaScroll = document.getElementById("capa");
let capaBoton = document.getElementById("boton");
let boton = document.querySelector("#boton button");

capa.addEventListener("scroll", (ev) => {
    if (capaScroll.scrollTop + capaScroll.clientHeight >= capaScroll.scrollHeight) {
        capaBoton.style.display = "block";
    } else {
        capaBoton.style.display = "none";
    }
    if (capaScroll.scrollTop + capaScroll.clientHeight >= capaScroll.scrollHeight / 2) {
        capaScroll.innerHTML +=
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, amet. Fugit nemo qui repudiandae repellendus nam, nesciunt sapiente sit nulla! Vitae ipsa architecto, totam quam minus molestiae unde ad. Natus.</p>";
    }
});
boton.addEventListener("click", (ev) => {
    //document.body.removeChild(capaScroll);
    if (boton.innerHTML == "Cerrar") {
        capaScroll.style.display = "none";
        boton.innerHTML = "Abrir";
    } else if (boton.innerHTML == "Abrir") {
        capaScroll.style.display = "block";
        boton.innerHTML = "Cerrar";
    }
});
