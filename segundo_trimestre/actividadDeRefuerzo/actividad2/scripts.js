function urlActual() {
    let url = document.getElementById("url");
    url.innerHTML = window.location;
}
function irA(link) {
    window.open("https://" + link, "", "width=400, height=200");
}
