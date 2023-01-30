document.body.addEventListener("keyup", function (ev) {
    if (ev.altKey && ev.key == "F12") {
        let capa = document.getElementById("imagen");
        capa.style.backgroundImage = "url('https://source.unsplash.com/random')";
    }
});
