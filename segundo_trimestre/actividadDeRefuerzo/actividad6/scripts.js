document.body.addEventListener("mousemove", function seguir(ev) {
    let cHola = document.getElementById("cHola");

    if (ev.clientX < 500) {
        cHola.style.left = ev.clientX + 10 + "px";
        cHola.style.top = ev.clientY + 10 + "px";
        cHola.innerHTML = "X: " + ev.clientX + " | Y: " + ev.clientY + "<br>X: " + ev.screenX + " | Y: " + ev.screenY;
    }
});
