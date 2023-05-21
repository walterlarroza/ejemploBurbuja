// Obtener referencia a los elementos del DOM
const formularioReserva = document.querySelector('#formulario-reserva');
const listaReservas = document.querySelector('#lista-reservas');

// Array para almacenar las reservas
let reservas = [];

// Función para mostrar las reservas existentes
function mostrarReservas() {
  // Limpiar la lista de reservas
  listaReservas.innerHTML = '';

  // Iterar sobre las reservas y crear elementos de lista para cada una
  reservas.forEach((reserva) => {
    const elementoReserva = document.createElement('li');
    elementoReserva.textContent = `${reserva.nombre} - ${reserva.fecha} - ${reserva.hora}`;
    listaReservas.appendChild(elementoReserva);
  });
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(evento) {
  evento.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.querySelector('#nombre').value;
  const fecha = document.querySelector('#fecha').value;
  const hora = document.querySelector('#hora').value;

  // Crear un objeto de reserva con los valores
  const reserva = {
    nombre: nombre,
    fecha: fecha,
    hora: hora
  };

  // Agregar la reserva al array
  reservas.push(reserva);

  // Mostrar las reservas actualizadas
  mostrarReservas();

  // Limpiar el formulario
  formularioReserva.reset();
}

// Agregar evento de envío del formulario
formularioReserva.addEventListener('submit', manejarEnvioFormulario);

// Mostrar las reservas existentes al cargar la página
mostrarReservas();
