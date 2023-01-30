const enlaces = document.querySelectorAll("a");

for (var i = 0; i < enlaces.length; i++) {

    let enlaceEncontrado=true;

    enlaceEncontrado = enlaces[i].href.includes("myfpschool");

    if(enlaceEncontrado){
        console.log(enlaces[i].href);
    }

}
