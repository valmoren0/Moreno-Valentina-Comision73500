// js de preguntas

document.addEventListener("DOMContentLoaded", () => {
  const preguntaForm = document.getElementById("preguntaForm");
  const preguntaInput = document.getElementById("preguntaInput");
  const resultadoPregunta = document.getElementById("resultadoPregunta");

  let respuestasPreguntas = [];

  // Función para cargar las respuestas del JSON
  const cargarRespuestas = async () => {
    try {
      const res = await fetch("../json/respuestas_preguntas.json");
      const data = await res.json();
      respuestasPreguntas = data.respuestas_preguntas;
    } catch (error) {}
  };

  cargarRespuestas();

  preguntaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (respuestasPreguntas.length > 0) {
      const respuestaAleatoria =
        respuestasPreguntas[
          Math.floor(Math.random() * respuestasPreguntas.length)
        ];

      resultadoPregunta.innerHTML = `<p><strong>Pregunta:</strong> ${preguntaInput.value}</p>
      <p><strong>El Oráculo dice:</strong> ${respuestaAleatoria}</p>`;
    } else {
      resultadoPregunta.innerHTML =
        "<p>Las respuestas no están disponibles en este momento. Intenta más tarde.</p>";
    }

    preguntaInput.value = "";
  });
});
