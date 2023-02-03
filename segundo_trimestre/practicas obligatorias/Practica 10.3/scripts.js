function primeraMayus(texto) {
    return texto[0].toUpperCase + texto.slice(1).toLowerCase();
}
function rellenaUsuario(capaUsuario, usuario) {
    let foto = usuario.picture.large;
    let mail = usuario.email;
    let nombre = usuario.name.first;
    let apellido = usuario.name.last;
    let calle = usuario.location.street.name + " - " + datos.location.street.number;
    let ciudad = usuario.location.city;
    let estado = usuario.location.state;

    capaUsuario.innerHTML =
        `<figure>` +
        `<img src='${foto}' alt='foto'>` +
        `</figure>` +
        `<p>${nombre} ${apellido}</p>` +
        `<p>${mail}</p>` +
        `<p>${calle}</p>` +
        `${primeraMayus(ciudad)}, (${primeraMayus(estado)})` +
        `<p><button>Cambiar</button></p>`;
}
function generarEventoBoton(capaUsuario) {
    //Asignamos evento al boton
    let boton = capaUsuario.querySelector("button");
    boton.addEventListener("click", (ev) => {
        //Mensaje de espera que desaoarece cuando se cargan los datos
        capaUsuario.textContent = "Esperando usuario nuevo...";
        //Hacemos peticion de 1 usuario aleatorio nuevo
        fetch("https://randomuser.me/api/")
            .then((resp) => resp.json())
            .then((data) => {
                let usuario = data.results[0];
                //modificamos los datos de la capa actual
                rellenaUsuario(capaUsuario, usuario);
                //programamos de nuevo el click del boton que cambia el usuario
                generarEventoBoton(capaUsuario);
            })
            .catch((error) => {
                capaUsuario.innerHTML = `<p class='errir'>${error}</p>` + `<p><button>Intentar de nuevo</button></p>`;
            });
    });

    var main = document.querySelector("main");
    main.textContent = "Esperando usuarios...";
    //peticion de los 10 usuarios
    fetch("https://randomuser.me/api/?results=10")
        .then((resp) => resp.json())
        .then((data) => {
            let datos = data.results;

            main.textContent = "";
            for (let usuario of datos) {
                //generamos el html de cada capa con datos de usuario
                let divUsuario = document.createElement("div");
                rellenaUsuario(divUsuario, usuario);
                //programamos el click del boton que cambia el usuario
                generarEventoBoton(divUsuario);
                //añadimos la nueva capa a main
                main.appendChild(divUsuario);
            }
        })
        .catch((error) => {
            main.innerHTML = `<p class='error'>${error}</p>`;
        });
}
