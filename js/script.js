// js/script.js

// ---------------------------------------------------------------------------------------------------------------------------------
// VARIABLES Y CONSTANTES
// ---------------------------------------------------------------------------------------------------------------------------------

let respuestasOraculo = [];

const CATEGORIAS_PREDICCION = [
  "amor",
  "dinero",
  "suerte",
  "destino",
  "general",
];

let categoriaSeleccionada = "general";

const bienvenidaContainer = document.getElementById("bienvenida-container");
const oraculoContainer = document.getElementById("oraculo-container");
const nombreForm = document.getElementById("nombreForm");
const nombreInput = document.getElementById("nombreInput");
const tituloBienvenida = document.getElementById("tituloBienvenida");
const categoriasContainer = document.getElementById("categoriasContainer");
const generarBtn = document.getElementById("generarBtn");
const resultadoDiv = document.getElementById("resultadoPrediccion");
const historialContainer = document.getElementById("historialContainer");
const limpiarHistorialBtn = document.getElementById("limpiarHistorialBtn");
const cambiarNombreBtn = document.getElementById("cambiarNombreBtn");

let historialPredicciones =
  JSON.parse(localStorage.getItem("historialOraculo")) || [];

// ---------------------------------------------------------------------------------------------------------------------------------
// FUNCIONES
// ---------------------------------------------------------------------------------------------------------------------------------

const cargarRespuestasOraculo = async () => {
  try {
    const res = await fetch("json/respuestas_oraculo_general.json");
    if (!res.ok) {
      throw new Error(`Error en la carga HTTP! Estado: ${res.status}`);
    }
    const data = await res.json();
    respuestasOraculo = data.respuestas_oraculo;
  } catch (error) {
    console.error("Error al cargar los datos del oráculo:", error);
    resultadoDiv.innerHTML =
      "<p>Hubo un problema al cargar el oráculo. Intenta recargar la página.</p>";
  }
};

const renderizarCategorias = () => {
  const botonesHTML = CATEGORIAS_PREDICCION.map((categoria) => {
    return `<button class="categoria-btn" data-categoria="${categoria}">${categoria}</button>`;
  });
  categoriasContainer.innerHTML = botonesHTML.join("");
};

const renderizarHistorial = () => {
  const ultimasPredicciones = historialPredicciones.slice(-5).reverse();
  if (ultimasPredicciones.length === 0) {
    historialContainer.innerHTML =
      "<p>Aún no hay predicciones en tu historial.</p>";
    return;
  }
  const historialHTML = ultimasPredicciones.map((prediccion) => {
    return `<div class="prediccion-item">
            <p><strong>Categoría:</strong> ${prediccion.categoria}</p>
            <p><strong>Predicción:</strong> ${prediccion.texto}</p>
            <p class="fecha-historial">${prediccion.fecha}</p>
        </div>`;
  });
  historialContainer.innerHTML = historialHTML.join("");
};

const inicializarMensajePrediccion = () => {
  resultadoDiv.innerHTML = `<p>Elige una categoría y presiona "Generar Predicción".</p>`;
};

const generarYGuardarPrediccion = () => {
  if (respuestasOraculo.length === 0) {
    resultadoDiv.innerHTML = `<p>El oráculo no está disponible en este momento. Intenta de nuevo más tarde.</p>`;
    return;
  }
  const respuestasFiltradas = respuestasOraculo.filter(
    (respuesta) => respuesta.tipo === categoriaSeleccionada
  );
  const respuestaElegida =
    respuestasFiltradas[Math.floor(Math.random() * respuestasFiltradas.length)];
  resultadoDiv.innerHTML = `<p>${respuestaElegida.texto}</p>`;
  const nuevaPrediccion = {
    categoria: categoriaSeleccionada,
    texto: respuestaElegida.texto,
    fecha: new Date().toLocaleString(),
  };
  historialPredicciones.push(nuevaPrediccion);
  localStorage.setItem(
    "historialOraculo",
    JSON.stringify(historialPredicciones)
  );
  renderizarHistorial();

  //Notificación de Toastify al guardar la predicción
  mostrarNotificacion("Predicción guardada en tu historial.", "#3498db");
};

const iniciarSimulador = () => {
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  if (nombreUsuario) {
    tituloBienvenida.textContent = `¡Hola, ${nombreUsuario}!`;
    bienvenidaContainer.style.display = "none";
    oraculoContainer.style.display = "block";
    renderizarCategorias();
    renderizarHistorial();
    inicializarMensajePrediccion();
  } else {
    bienvenidaContainer.style.display = "block";
    oraculoContainer.style.display = "none";
    nombreInput.value = localStorage.getItem("nombreUsuario") || "";
  }
};

// ---------------------------------------------------------------------------------------------------------------------------------
// EVENTOS
// ---------------------------------------------------------------------------------------------------------------------------------

//Notificación de Toastify en el formulario
nombreForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = nombreInput.value.trim();
  if (nombre === "") {
    nombre = "Anónimo";
  }

  localStorage.setItem("nombreUsuario", nombre);
  mostrarNotificacion(`¡Bienvenido/a, ${nombre}!`, "#2ecc71");
  iniciarSimulador();
});

categoriasContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("categoria-btn")) {
    categoriaSeleccionada = e.target.dataset.categoria;
    document
      .querySelectorAll(".categoria-btn")
      .forEach((btn) => btn.classList.remove("activo"));
    e.target.classList.add("activo");
  }
});

generarBtn.addEventListener("click", generarYGuardarPrediccion);

//SweetAlert2 para la confirmación de limpieza de historial
limpiarHistorialBtn.addEventListener("click", () => {
  mostrarAlertaConfirmacion(
    "¿Estás seguro de que quieres limpiar el historial?",
    "Esta acción no se puede deshacer.",
    "warning"
  ).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("historialOraculo");
      historialPredicciones = [];
      renderizarHistorial();
      mostrarAlerta(
        "¡Historial Borrado!",
        "Tu historial de predicciones ha sido eliminado.",
        "success"
      );
    }
  });
});

cambiarNombreBtn.addEventListener("click", () => {
  localStorage.removeItem("nombreUsuario");
  bienvenidaContainer.style.display = "block";
  oraculoContainer.style.display = "none";
  nombreInput.value = "";
  resultadoDiv.innerHTML = "";
  historialContainer.innerHTML =
    "<p>Aún no hay predicciones en tu historial.</p>";
});

document.addEventListener("DOMContentLoaded", () => {
  cargarRespuestasOraculo();
  iniciarSimulador();
});
