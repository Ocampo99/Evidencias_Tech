// script.js

// Validar formulario al enviar
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();

    if (!name || !email || !reason) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado con éxito.');
});

// Función para validar correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
