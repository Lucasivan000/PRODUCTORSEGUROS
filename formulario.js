// Seleccionamos el formulario por su ID
const formulario = document.getElementById("formularioEnvioGoogleSheets");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recargar la página

    // Obtenemos los valores usando los nombres
    const datos = {
        nombre: formulario.nombre.value,
        telefono: formulario.telefono.value,
        email: formulario.email.value,
        mensaje: formulario.mensaje.value
    };

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
        alert("¡Formulario enviado correctamente!");
        formulario.reset();
    })
    .catch(error => console.error("Error al enviar el formulario:", error));
});