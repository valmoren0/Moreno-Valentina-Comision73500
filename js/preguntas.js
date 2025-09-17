// js/preguntas.js

document.addEventListener("DOMContentLoaded", () => {
  const preguntaForm = document.getElementById("preguntaForm");
  const preguntaInput = document.getElementById("preguntaInput");
  const resultadoPregunta = document.getElementById("resultadoPregunta");

  let respuestasPreguntas = [];

  const cargarRespuestas = async () => {
    try {
      const res = await fetch("../json/respuestas_preguntas.json");
      const data = await res.json();
      respuestasPreguntas = data.respuestas_preguntas;
    } catch (error) {
      console.error("Error al cargar las respuestas:", error);
      mostrarNotificacion(
        "Error al cargar el oráculo. Intenta de nuevo más tarde.",
        "#e74c3c"
      );
    }
  };

  cargarRespuestas();

  preguntaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (preguntaInput.value.trim() === "") {
      mostrarNotificacion(
        "Por favor, escribe una pregunta para el Oráculo.",
        "#f39c12"
      );
      return;
    }

    if (respuestasPreguntas.length > 0) {
      const respuestaAleatoria =
        respuestasPreguntas[
          Math.floor(Math.random() * respuestasPreguntas.length)
        ];

      mostrarNotificacion("El Oráculo está meditando...", "#3498db", 2000);

      setTimeout(() => {
        resultadoPregunta.innerHTML = `<p><strong>Pregunta:</strong> ${preguntaInput.value}</p>
        <p><strong>El Oráculo dice:</strong> ${respuestaAleatoria}</p>`;
      }, 1000);
    } else {
      resultadoPregunta.innerHTML =
        "<p>Las respuestas no están disponibles en este momento. Intenta más tarde.</p>";
    }

    preguntaInput.value = "";
  });
});
