// Selecciona todos los encabezados de los hoteles
const hotelHeaders = document.querySelectorAll('.hotel-header');

// Itera por cada encabezado y agrega el evento de clic
hotelHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // Selecciona el contenido relacionado

        // Alterna la visibilidad del contenido
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});

// Selecciona todos los botones "Consultar Datos de Contacto"
const contactButtons = document.querySelectorAll('.hotel-details button');

// Selecciona el modal y su botón de cerrar
const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('button');

// Agrega eventos de clic a los botones de contacto para abrir el modal
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; // Muestra el modal
    });
});

// Evento de clic para cerrar el modal
modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

// Cierra el modal si el usuario hace clic fuera de la ventana modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
