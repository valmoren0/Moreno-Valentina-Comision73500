// Variables y Constantes Globales
let nombreUsuario = "";
let contadorPredicciones = 0;

const respuestasOraculo = [
  // --- Respuestas de la categoría AMOR
  {
    id: 1,
    texto:
      "El amor te espera a la vuelta de la esquina. Pero recuerda, a veces la esquina está en otro continente.",
    tipo: "amor",
  },
  {
    id: 2,
    texto:
      "El universo se alinea para que encuentres la pieza que faltaba en tu rompecabezas emocional. Prepara tu corazón para un flechazo inesperado.",
    tipo: "amor",
  },
  {
    id: 3,
    texto:
      "El amor está en el aire... y también el polen, cuidado con las alergias.",
    tipo: "amor",
  },
  {
    id: 4,
    texto:
      "Tus lazos afectivos se fortalecerán. Es un momento ideal para cultivar nuevas conexiones o reavivar viejas llamas. ¡El amor está en el aire!",
    tipo: "amor",
  },
  {
    id: 5,
    texto:
      "La química está garantizada... al menos en tu próximo experimento de limpieza.",
    tipo: "amor",
  },

  // --- Respuestas de la categoría DINERO
  {
    id: 6,
    texto:
      "Tus finanzas crecerán tan rápido como tu lista de pendientes. ¡Felicidades!",
    tipo: "dinero",
  },
  {
    id: 7,
    texto:
      "Encontrarás una fuente inesperada de riqueza... en el bolsillo de un pantalón viejo.",
    tipo: "dinero",
  },
  {
    id: 8,
    texto:
      "Una corriente de prosperidad se acerca. Espera oportunidades financieras que superarán tus expectativas. ¡Es hora de invertir!",
    tipo: "dinero",
  },
  {
    id: 9,
    texto:
      "Pronto recibirás una suma importante. Probablemente sea la factura del mes pasado.",
    tipo: "dinero",
  },
  {
    id: 10,
    texto:
      "El flujo de la abundancia está a tu favor. Se acercan ganancias inesperadas o el éxito en proyectos que te traerán gran beneficio económico.",
    tipo: "dinero",
  },

  // --- Respuestas de la categoría SUERTE
  {
    id: 11,
    texto:
      "Tu suerte es como el Wi-Fi público: a veces funciona, a veces te deja colgado.",
    tipo: "suerte",
  },
  {
    id: 12,
    texto:
      "La rueda de la fortuna gira a tu favor. Hoy, las estrellas te sonríen, trayendo oportunidades únicas y resultados sorprendentemente positivos.",
    tipo: "suerte",
  },
  {
    id: 13,
    texto:
      "Un golpe de suerte está a la vuelta de la esquina. Prepárate para que las cosas salgan a tu favor de maneras que nunca imaginaste.",
    tipo: "suerte",
  },
  {
    id: 14,
    texto:
      "La fortuna te sonríe... o quizás solo tiene gases. Acepta el misterio.",
    tipo: "suerte",
  },
  {
    id: 15,
    texto:
      "Un golpe de suerte se avecina. Asegúrate de no estar durmiendo cuando pase.",
    tipo: "suerte",
  },

  // --- Respuestas de la categoría DESTINO
  {
    id: 16,
    texto:
      "Los hilos del destino tejen un camino brillante. Una nueva dirección se abre, llena de posibilidades y logros inesperados que te llevarán lejos.",
    tipo: "destino",
  },
  {
    id: 17,
    texto:
      "El destino te sonríe... o quizás solo está practicando su cara de póker.",
    tipo: "destino",
  },
  {
    id: 18,
    texto:
      "Un nuevo camino se abre, pero probablemente solo sea la puerta de la nevera.",
    tipo: "destino",
  },
  {
    id: 19,
    texto:
      "Tu futuro es tan claro como el agua. Como la de un charco después de la lluvia.",
    tipo: "destino",
  },
  {
    id: 20,
    texto:
      "Tu camino se ilumina con claridad. Estás en la senda correcta hacia tus mayores aspiraciones, con el universo conspirando a tu favor.",
    tipo: "destino",
  },

  // --- Respuestas de la categoría GENERALES
  {
    id: 21,
    texto:
      "El universo conspira a tu favor... o al menos, no en tu contra. Por ahora.",
    tipo: "general",
  },
  {
    id: 22,
    texto:
      "Se avecinan cambios. Podría ser el clima o tu opinión sobre la pizza con anana.",
    tipo: "general",
  },
  {
    id: 23,
    texto:
      "Este año, tus sueños se harán realidad. Pero solo los que tengas mientras duermes.",
    tipo: "general",
  },
  {
    id: 24,
    texto:
      "Una ola de buena fortuna se extiende por tu camino. Prepará el café, porque el día te sorprenderá con noticias y oportunidades que alegrarán tu espíritu.",
    tipo: "general",
  },
  {
    id: 25,
    texto:
      "No te preocupes por el futuro, el pasado ya te ha dado suficiente material para memes.",
    tipo: "general",
  },
  {
    id: 26,
    texto:
      "El universo te guiña un ojo. Se avecina un período de crecimiento personal y descubrimientos inesperados que te llenarán de satisfacción.",
    tipo: "general",
  },
  {
    id: 27,
    texto:
      "Tu intuición te guiará, pero no te fíes si te dice que el último chocolate no tiene calorías.",
    tipo: "general",
  },
  {
    id: 28,
    texto:
      "Grandes revelaciones están por llegar, justo cuando pensabas que no podía ser más extraño.",
    tipo: "general",
  },
  {
    id: 29,
    texto:
      "Los astros predicen que hoy es un buen día para ser tú mismo. O para ser un pingüino, lo que te venga mejor.",
    tipo: "general",
  },
];

const categoriasPrediccion = [
  "Amor",
  "Dinero",
  "Suerte",
  "Destino",
  "General (¡Sorpréndeme!)",
];

// Funciones del Oráculo
function obtenerNombreUsuario() {
  let nombreInput = prompt(
    "¡Bienvenido! Soy el Oráculo de la Prosperidad Dudosamente Precisa.\n\n¿Cuál es tu nombre para que el Oráculo te reconozca?"
  );

  if (nombreInput === null) {
    return null;
  } else if (nombreInput.trim() === "") {
    return "Usuario Anónimo";
  } else {
    return nombreInput.trim();
  }
}

function generarMensajeMenuCategorias() {
  let mensaje = `¡${nombreUsuario}, el Oráculo espera tu pregunta!\n\n`;
  mensaje +=
    "Primero, elige la categoría de tu curiosidad (ingresa el número):\n\n";
  for (let i = 0; i < categoriasPrediccion.length; i++) {
    mensaje += `${i + 1}. ${categoriasPrediccion[i]}\n`;
  }
  mensaje +=
    "\nO escribe la categoría que te interese (ej: 'trabajo', 'familia', 'salud'):";
  return mensaje;
}

function procesarEleccionCategoria(eleccion) {
  if (eleccion === null) {
    console.log("Usuario canceló la elección de categoría.");
    return { categoria: "general", pregunta: "", continuar: false };
  }

  let categoriaSeleccionada = "";
  let preguntaEspecificaUsuario = "";

  let indiceNumericoCategoria = Number(eleccion) - 1;

  if (
    !isNaN(indiceNumericoCategoria) &&
    indiceNumericoCategoria >= 0 &&
    indiceNumericoCategoria < categoriasPrediccion.length
  ) {
    categoriaSeleccionada =
      categoriasPrediccion[indiceNumericoCategoria].toLowerCase();
    if (categoriaSeleccionada.includes("general")) {
      categoriaSeleccionada = "general";
    }
    alert(
      `Has elegido una predicción de tipo: ${categoriasPrediccion[indiceNumericoCategoria]}.`
    );
    preguntaEspecificaUsuario = prompt(
      `Ahora, ${nombreUsuario}, haz tu pregunta específica sobre ${categoriasPrediccion[indiceNumericoCategoria]} (ej: '¿tendré suerte en el amor?', '¿cambiaré de trabajo?') o simplemente presiona Enter para una revelación misteriosa:`
    );

    if (preguntaEspecificaUsuario === null) {
      console.log("Usuario canceló la pregunta específica.");
      return { categoria: "general", pregunta: "", continuar: false };
    }

    console.log(
      `Categoría seleccionada por índice: "${categoriaSeleccionada}"`
    );
  } else if (eleccion.trim() !== "") {
    categoriaSeleccionada = eleccion.toLowerCase().trim();
    alert(`Has ingresado la categoría: ${eleccion}.`);
    preguntaEspecificaUsuario = prompt(
      `Bien, ${nombreUsuario}, haz tu pregunta específica sobre ${eleccion}:`
    );

    if (preguntaEspecificaUsuario === null) {
      console.log("Usuario canceló la pregunta específica.");
      return { categoria: "general", pregunta: "", continuar: false };
    }

    console.log(
      `Categoría ingresada personalizada: "${categoriaSeleccionada}"`
    );
  } else {
    alert(
      "No has elegido una categoría. El Oráculo te ofrecerá una predicción general."
    );
    categoriaSeleccionada = "general";
    preguntaEspecificaUsuario = prompt(
      `¿Tienes alguna pregunta en mente, ${nombreUsuario}, o el Oráculo debe revelar un misterio general?`
    );

    if (preguntaEspecificaUsuario === null) {
      console.log("Usuario canceló la pregunta específica.");
      return { categoria: "general", pregunta: "", continuar: false };
    }

    console.warn(
      "Usuario no eligió/escribió categoría. Se le asigna la categoría 'general'."
    );
  }

  return {
    categoria: categoriaSeleccionada,
    pregunta: preguntaEspecificaUsuario || "",
    continuar: true,
  };
}

function generarPrediccion(categoria) {
  let prediccionElegida = "";

  const respuestasFiltradas = respuestasOraculo.filter(
    (respuesta) => respuesta.tipo === categoria
  );

  if (respuestasFiltradas.length > 0) {
    const indiceAleatorio = Math.floor(
      Math.random() * respuestasFiltradas.length
    );
    prediccionElegida = respuestasFiltradas[indiceAleatorio].texto;
    console.log(
      `Predicción elegida de la categoría '${categoria}': "${prediccionElegida}"`
    );
  } else {
    console.warn(
      `No se encontraron predicciones específicas para '${categoria}'. Se genera una predicción general.`
    );
    const respuestasGenerales = respuestasOraculo.filter(
      (respuesta) => respuesta.tipo === "general"
    );
    const indiceAleatorioGeneral = Math.floor(
      Math.random() * respuestasGenerales.length
    );
    prediccionElegida = respuestasGenerales[indiceAleatorioGeneral].texto;
  }

  return `${nombreUsuario}, el Oráculo analizó los hilos del destino y declara:\n\n"${prediccionElegida}"`;
}

function mostrarResultadoFinal(mensajePrediccion) {
  alert(mensajePrediccion);
  contadorPredicciones++;
  console.log(`--- Predicción final mostrada ---`);
  console.log(`Mensaje al usuario:\n${mensajePrediccion}`);
  console.log(`Total de predicciones hasta ahora: ${contadorPredicciones}`);
  console.log(`--------------------------------`);
}

// Lógica Principal del Simulador
function iniciarOraculo() {
  const nombreInicial = obtenerNombreUsuario();

  if (nombreInicial === null) {
    alert("¡Entendido! El Oráculo respeta tu privacidad. ¡Hasta la próxima!");
    console.log("Simulador terminado por el usuario al inicio.");
    return;
  }

  nombreUsuario = nombreInicial;
  alert(
    `¡Un gusto conocerte, ${nombreUsuario}! Prepárate para las verdades del destino.`
  );

  let continuarPrediciendo = true;

  while (continuarPrediciendo) {
    let mensajeMenu = generarMensajeMenuCategorias();
    let eleccionCategoriaUsuario = prompt(mensajeMenu);

    let resultadoEleccion = procesarEleccionCategoria(eleccionCategoriaUsuario);

    if (!resultadoEleccion.continuar) {
      continuarPrediciendo = confirm(
        `¿Aún querés alguna predicción, ${nombreUsuario}? Si no, el Oráculo se despide.`
      );
      if (!continuarPrediciendo) {
        alert(
          `¡Gracias por consultar al Oráculo, ${nombreUsuario}! Que la "prosperidad" te acompañe.`
        );
        console.log("Sesión del Oráculo finalizada por el usuario.");
      } else {
        console.log("\n--- El Oráculo espera tu próxima consulta ---\n");
      }
      continue;
    }

    let categoriaParaPrediccion = resultadoEleccion.categoria;
    let preguntaRealDelUsuario = resultadoEleccion.pregunta;

    console.log(
      `Pregunta final del usuario: "${
        preguntaRealDelUsuario || "No especificada"
      }"`
    );
    console.log(
      `Categoría para la predicción determinada: "${categoriaParaPrediccion}"`
    );

    let prediccionGenerada = generarPrediccion(categoriaParaPrediccion);
    mostrarResultadoFinal(prediccionGenerada);

    continuarPrediciendo = confirm(
      `¿Querés otra predicción, ${nombreUsuario}?`
    );

    if (!continuarPrediciendo) {
      alert(
        `¡Gracias por consultar al Oráculo, ${nombreUsuario}! Que la "prosperidad" te acompañe.`
      );
      console.log("Sesión del Oráculo finalizada por el usuario.");
    } else {
      console.log("\n--- El Oráculo espera tu próxima consulta ---\n");
    }
  }
}

// Inicia el Simulador
iniciarOraculo();
