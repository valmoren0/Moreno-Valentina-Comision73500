// librerias.js

// ---------------------------------------------------------------------------------------------------
// FUNCIONES REUTILIZABLES CON LIBRERÍAS
// ---------------------------------------------------------------------------------------------------

/**
 * Muestra una notificación temporal usando la librería Toastify
 * @param {string} mensaje
 * @param {string} color
 * @param {number} [duracion=3000]
 */
const mostrarNotificacion = (mensaje, color, duracion = 3000) => {
  Toastify({
    text: mensaje,
    duration: duracion,
    close: true,
    gravity: "bottom",
    position: "right",
    backgroundColor: color,
  }).showToast();
};

/**
 * Muestra una alerta de confirmación usando la librería SweetAlert2
 * @param {string} titulo
 * @param {string} texto
 * @param {string} icono
 * @returns {Promise<SweetAlertResult>}
 */
const mostrarAlertaConfirmacion = (titulo, texto, icono) => {
  return Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar",
  });
};

/**
 * Muestra una alerta simple usando SweetAlert2.
 * @param {string} titulo
 * @param {string} texto
 * @param {string} icono
 */
const mostrarAlerta = (titulo, texto, icono) => {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
  });
};
