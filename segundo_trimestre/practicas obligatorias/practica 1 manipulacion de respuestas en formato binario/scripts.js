var main = document.querySelector("main");
fetch("https://source.unsplash.com/random")
    .then((response) => {
        if (response.ok) {
            return response.blob();
        } else {
            throw new Error("Los datos no llegaron bien");
        }
    })
    .then((blob) => {
        console.log(blob.type);
        let imagen = document.createElement("img");
        imagen.setAttribute("src", URL.createObjectURL(blob));
        main.innerHTML = "";
        main.appendChild(imagen);
    })
    .catch((error) => {
        main.textContent = error;
    });
