document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll("#Planos .galeria img");
    const descripcion = document.querySelector("#Planos .descripcion");
    let indiceImagen = 0;

    function mostrarDescripcion() {
        descripcion.textContent = imagenes[indiceImagen].getAttribute("alt");
    }

    // Función para mostrar una imagen específica según su índice
    function mostrarImagen(indice) {
        imagenes.forEach(function(img) {
            img.style.display = "none";
        });
        imagenes[indice].style.display = "block";
        indiceImagen = indice;
        mostrarDescripcion();
    }

    // Función para manejar la navegación a la imagen anterior
    function imagenAnterior() {
        indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indiceImagen);
    }

    // Función para manejar la navegación a la siguiente imagen
    function siguienteImagen() {
        indiceImagen = (indiceImagen + 1) % imagenes.length;
        mostrarImagen(indiceImagen);
    }

    // Evento de escucha para el contenedor de la galería para manejar clics en las imágenes
    document.querySelector("#Planos .galeria").addEventListener("click", function(event) {
        if (event.target.matches("img")) {
            // Si se hace clic en una imagen, mostrar la siguiente imagen
            siguienteImagen();
        }
    });

    // Evento de escucha para el botón "Anterior"
    document.querySelector("#anterior").addEventListener("click", imagenAnterior);

    // Evento de escucha para el botón "Siguiente"
    document.querySelector("#siguiente").addEventListener("click", siguienteImagen);

    // Mostrar la primera imagen y descripción cuando se carga la página
    mostrarImagen(indiceImagen);
});
