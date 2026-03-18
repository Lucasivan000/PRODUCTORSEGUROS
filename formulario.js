// Seleccionamos el formulario y el div de mensajes
const formulario = document.getElementById("formularioEnvioGoogleSheets");
const divMensaje = document.getElementById("completarCampos");

// Definimos un token secreto (cámbialo por uno más largo y complejo)
const AVE_MARIA = "mhgkajhfkajnfjbasflk16151fasfag+1f365sa1f6faa5sf6af51af65asf65a1sfa6fa6s21621656fasf16162as";

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recargar la página
    divMensaje.innerText = ""; // Limpiamos mensajes previos
    divMensaje.style.color = "red"; // Por defecto rojo para errores

    // Obtenemos los valores usando los nombres
    const nombre = formulario.nombre.value.trim();
    const telefono = formulario.telefono.value.trim();
    const email = formulario.email.value.trim();
    const mensaje = formulario.mensaje.value.trim();

    // Validaciones
    const nombreValido = /^[a-zA-Z\s]+$/.test(nombre);
    const telefonoValido = /^\d+$/.test(telefono);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nombreValido) {
        divMensaje.innerText = "Por favor, ingresa un nombre válido.";
        formulario.nombre.focus();
        return;
    }

    if (!telefonoValido) {
        divMensaje.innerText = "Por favor, ingresa un teléfono válido.";
        formulario.telefono.focus();
        return;
    }

    if (!emailValido) {
        divMensaje.innerText = "Por favor, ingresa un correo electrónico válido.";
        formulario.email.focus();
        return;
    }

    if (mensaje === "") {
        divMensaje.innerText = "Por favor, ingrese su consulta.";
        formulario.mensaje.focus();
        return;
    }

    // Agregamos el token secreto al objeto de datos
    const datos = { nombre, telefono, email, mensaje, token: AVE_MARIA };
    const urlScript = "https://script.google.com/macros/s/AKfycby0204FiVR0-nBanYexWBT5H4zqE1VnGWaeYimHG9Zql2dMNQCUoYJ9T2Twq0u_oRZp/exec";

    // Enviamos los datos a Google Sheets usando JSON
    fetch(urlScript, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(() => {
        divMensaje.innerText = "¡Formulario enviado correctamente!";
        divMensaje.style.color = "green"; 
        formulario.reset();
    })
    .catch(error => {
        console.error("Error al enviar el formulario:", error);
        divMensaje.innerText = "Ocurrió un error al enviar el formulario. Intenta nuevamente.";
        divMensaje.style.color = "red";
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});
