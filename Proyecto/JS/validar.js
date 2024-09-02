import("../paginas")

function validarNombre(event) {
    event.preventDefault();

    //const registro = document.getElementById("contenido");

    let name = document.getElementById("name").value;
    let numero = document.getElementById("numero").value;
    let correo = document.getElementById("correo").value;
    let comentario = document.getElementById("comentario").value;

    let deportes = [];

    if (document.getElementById("futbol").checked == true) {
        deportes.push(" Cundinamarca");
    }
    if (document.getElementById("natacion").checked == true) {
        deportes.push(" Boyacá");
    }
    if (document.getElementById("tenis").checked == true) {
        deportes.push(" Otro");
    }

    // Validaciones
    let nombreValido = /^[a-zA-Z\s]+$/.test(name);
    let numeroValido = /^\d{3}$/.test(numero);
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (nombreValido == false) {
        alert("Hay algo mal en el nombre");
        return;
    }

    if (numeroValido == false) {
        alert("El número debe tener 3 dígitos.");
        return;
    }

    if (correoValido == false) {
        alert("El correo electrónico no es válido.");
        return;
    }

    if (name.length == 0 || numero.length == 0 || correo.length == 0 ||
        comentario.length == 0) {
        alert("Todos los campos deben ser completados.");
        return;
    }

    //registro.innerHTML = name;

    alert("Nombre: " + name + "\nNumero: " + numero + 
        "\nCorreo: " + correo + "\nDepartamentos: " + deportes + 
        "\nComentario: " + comentario);

    //window.location.href = "../paginas/usuarios.html";

}
