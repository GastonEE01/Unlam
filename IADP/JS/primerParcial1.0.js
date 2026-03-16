window.temas = window.temas || {};
window.temas["primerParcial1.0"] = {
  titulo: "Primer parcial 1.0",
  preguntas: [
    {
      texto: "1)Defina \"Proceso\" como se compone,que objetivo persigue,describa brevemente algun modo de proceso conocido",
      tipo: "texto",
      posiblesRespuestas: "RTA: El Proceso se define, en términos generales, como la acción de proceder o el método de ejecutar ciertas cosas. En Ingeniería de Software, define el marco de trabajo para el conjunto de actividades del desarrollo, abarcándolo en su totalidad. El objetivo principal del proceso software es establecer un esquema sistemático para planificar, organizar, presupuestar y dirigir la construcción del software, buscando asegurar la calidad del producto resultante. Se compone de cuatro procesos principales: selección del modelo de ciclo de vida, gestión del proyecto, procesos orientados al desarrollo y procesos integrales. Un modo conocido es el Modelo Cascada (o lineal secuencial), que organiza las etapas de desarrollo (como Análisis de Requisitos, Diseño y Codificación) en una secuencia lógica donde una fase debe completarse antes de dar comienzo a la siguiente."
    },
    {
      texto: "2)Marque la opción correcta sobre los MCV",
      opciones: [
        "El ciclo de vida en Cascada es divisible mientras que el Incremental y el Evolutivo no lo son.",
        "El ciclo de vida en Evolutivo, al igual que el Incremental, es divisible y con alcance bien definido.",
        "Todos los ciclos de vida con alcance bien definido son divisibles.",
        "Los ciclos de vida que evolucionan a incrementos o de manera modular son fácilmente divisibles.",
        "Todas las anteriores son correctas",
        "Ninguna de las anteriores es correcta"
      ],
      correcta: 3
    },

    {
      texto: "3)En un proyecto Software la relación gente trabajo:",
      opciones: [
        "Es una relación lineal.",
        "Es una relación dependiente.",
        "Es una relación independiente.",
        "Es una relación no lineal.",
        "Es una relación con distribución triangular.",
        "Todas las anteriores son correctas.",
        "Ninguna de las anteriores es correcta."
      ],
      correcta: 3
    },

    {
      texto: "4)Marque la opción incorrecta sobre EDT (WBS):",
      opciones: [
        "Consiste en dividir en componentes menores para facilitar la planificación y control.",
        "Organigrama jerárquico del proyecto donde se subdivide el mismo en menores componentes.",
        "El nivel más alto de cada división se llama paquete de trabajo.",
        "No define secuencias.",
        "El nivel más bajo se denomina paquete de trabajo; generalmente se agrupan bajo \“Paquetes de control”\.",
        "Todas las anteriores son correctas."
      ],
      correcta: 2
    },

    {
      texto: "5)Los tipos de entregables pueden ser:",
      opciones: [
        "Mandatorios, discretionales, transitorios y permanentes.",
        "Directos, indirectos, externos e internos.",
        "Heredadas, implícitas, externas y transitorias.",
        "Opcionales, discretionales, externas e internas.",
        "Mandatorias, discretionales, externas e internas.",
        "Todas las anteriores son correctas.",
        "Ninguna de las anteriores es correcta."
        
      ],
      correcta: 4
    },

    {
      texto: "6)Cómo se puede modificar un elemento de configuración de una línea base establecida: RTR CON ChatGPT",
      opciones: [
        "Mediante la autorización del manager del proyecto.",
        "Mediante una sesión grupal de todo el equipo para analizar los riesgos e impactos.",
        "Mediante un proceso casi informal, siempre y cuando se comunique adecuadamente.",
        "Mediante un proceso formal.",
        "Todas las anteriores son correctas",
        " Ninguna de las anteriores es correcta."
      ],
      correcta: 3
    },

    {
      texto: "7)El objetivo de una línea base es la: RTR CON ChatGPT",
      opciones: [
        "Impedir los cambios que generen un impacto desmesurado dentro del proyecto.",
        "Controlar los cambios sin impedir aquellos que están debidamente justificados.",
        "Controlar los cambios y efectos de mantener el alcance dentro de lo acordado en el plan de gestión.",
        "Gestionar los elementos de configuración producidos durante la vida del proyecto.",
        "Todas las anteriores son correctas.",
        "Ninguna de las anteriores es correcta."
      ],
      correcta: 2
    },

    {
      texto: "8)Las actividades de la gestión de configuración son: RTR CON ChatGPT",
      opciones: [
        "Identificación, Control de cambios y versiones, Implementación y supervisión, generación de informes de estado.",
        "Revisión, Control de cambios y versiones, gestión de elementos de configuración, generación de informes de estado.",
        "Identificación, Control de cambios y versiones, analisis y evaluacion de impactos, generacion de informes de estado.",
        "Identificación, gestion de elementos de configuracion, auditoria de la configuracion,comunicacion efectiva.",
        "Identificacion, Control de cambios y versiones, auditoria de la configuracion. generacion de informes de estado.",
        "Todas las anteriores son correctas.",
        "Ninguna de las anteriores es correcta"
      ],
      correcta: 4
    },

    {
      texto: "9)Las razones por las que medimos y posteriormente utilizamos métricas son:",
      opciones: [
        "Caracterizar, Evaluar, Predecir y Mejorar.",
        "Estimar, Recopilar, Evaluar y Mejorar.",
        "Predecir, Evaluar, Supervisar y Mejorar.",
        "Identificar, Analizar, Medir y Mejorar.",
        "Cuantificar, Analizar, Evaluar y Mejorar.",
        "Ninguna de las anteriores es correcta"
      ],
      correcta: 0
    },

    {
      texto: "10)Una Métrica es:",
      opciones: [
        "Acción o acto de medir.",
        "Proceso mediante el cual se asignan números o símbolos a los atributos de las entidades del mundo real.",
        "Proporciona un indicio cuantitativo de la extensión, cantidad, dimensión, magnitud o tamaño de algún atributo de un producto o proceso.",
        "Medida cuantitativa del grado en el que un sistema, componente o proceso posee un atributo determinado.",
        "Permite a los gerentes de proyectos aplicar ajustes para hacer las cosas mejor.",
        "Conjunto de métricas que proporcionan comprensión acerca del proceso, proyecto o producto software.",
        "Ninguna de las anteriores es correcta."
      ],
      correcta: 3
    },   
  ]
};

function cargarTema(clave) {
  const tema = window.temas[clave];
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = `<h2>${tema.titulo}</h2>`;

  let index = 0;

  tema.preguntas.forEach((pregunta) => {
    const div = document.createElement("div");

    if (pregunta.subtitulo) {
      div.innerHTML = `<h3 style="margin-top: 30px;">${pregunta.subtitulo}</h3>`;
      div.style.borderLeft = "4px solid #4db8ff";
      div.style.padding = "10px";
      div.style.margin = "20px 0";
      contenedor.appendChild(div);
      return;
    }

    div.className = "question";
    let html = `<h4>${pregunta.texto}</h4>`;

    if (pregunta.tipo === "texto") {
      html += `<textarea id="respuestaTexto${index}" rows="6" style="width: 100%; margin-top:10px;"></textarea>`;
    }

    if (pregunta.opciones) {
      const isMultiple = Array.isArray(pregunta.correcta);
      html += '<div class="opciones">';
      pregunta.opciones.forEach((opcion, j) => {
        html += `
          <div class="option">
            <input type="${isMultiple ? 'checkbox' : 'radio'}" name="preg${index}" id="p${index}o${j}" value="${j}">
            <label for="p${index}o${j}">${opcion}</label>
          </div>`;
      });
      html += '</div>';
    }

    div.innerHTML = html;
    contenedor.appendChild(div);

    // Si la pregunta es esquema interactivo, agregamos canvas, imagen y controles
    if (pregunta.tipo === "esquemaInteractivo") {
      const esquemaDiv = document.createElement("div");
      esquemaDiv.classList.add("esquema-container");
      esquemaDiv.id = `esquema${index}`;
      esquemaDiv.style.position = "relative";
      esquemaDiv.style.marginTop = "20px";

      const img = document.createElement("img");
      img.src = pregunta.imagen;
      img.id = `imagen${index}`;
      img.style.display = "block";
      esquemaDiv.appendChild(img);

      const canvas = document.createElement("canvas");
      canvas.id = `canvas${index}`;
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      esquemaDiv.appendChild(canvas);

      const notasLayer = document.createElement("div");
      notasLayer.id = `notasLayer${index}`;
      notasLayer.style.position = "absolute";
      notasLayer.style.top = "0";
      notasLayer.style.left = "0";
      esquemaDiv.appendChild(notasLayer);

      contenedor.appendChild(esquemaDiv);

      // Inicializar canvas y controles
      inicializarCanvas(index);
      agregarControlesEsquema(index);

      // Subpreguntas del esquema
      if (pregunta.subpreguntas) {
        pregunta.subpreguntas.forEach((sub,j) => {
          const subDiv = document.createElement("div");
          subDiv.classList.add("question");
          subDiv.innerHTML = `<label>${sub.texto}</label><textarea id="subpreg${index}_${j}" rows="2" style="width:100%; margin-top:5px;"></textarea>`;
          contenedor.appendChild(subDiv);
        });
      }
    }

    index++;
  });

  const btn = document.createElement("button");
  btn.textContent = "Corregir Tema";
  btn.onclick = () => corregirTema(tema);
  btn.style.marginTop = "20px";
  btn.style.padding = "10px 20px";
  contenedor.appendChild(btn);
}

function corregirTema(tema) {
  const preguntas = tema.preguntas;
  let correctas = 0;
  let index = 0;

  preguntas.forEach((pregunta) => {
    if (pregunta.subtitulo) return;

    if (pregunta.tipo === "texto") {
      const respuesta = document.getElementById(`respuestaTexto${index}`);
      if (respuesta) {
        if (respuesta.value.trim().length > 0) {
          respuesta.style.borderColor = "#28e07f";
          correctas++;
        } else {
          respuesta.style.borderColor = "#ff4c4c";
        }

        if (pregunta.posiblesRespuestas) {
          let sugerida = document.getElementById(`sugerida${index}`);
          if (!sugerida) {
            sugerida = document.createElement("div");
            sugerida.id = `sugerida${index}`;
            sugerida.style.marginTop = "10px";
            sugerida.style.padding = "10px";
            sugerida.style.background = "#333";
            sugerida.style.borderRadius = "6px";
            sugerida.style.border = "1px solid #444";
            sugerida.style.color = "#4db8ff";
            respuesta.parentElement.appendChild(sugerida);
          }
          sugerida.innerText = `Posible respuesta:\n${pregunta.posiblesRespuestas}`;
        }
      }
    }

    if (pregunta.opciones) {
      const opciones = document.getElementsByName(`preg${index}`);
      const isMultiple = Array.isArray(pregunta.correcta);

      if (isMultiple) {
        let seleccionadas = [];
        opciones.forEach((opcionInput, j) => {
          const label = opcionInput.parentElement;
          label.classList.remove("correct", "incorrect");

          if (pregunta.correcta.includes(j)) label.classList.add("correct");
          if (opcionInput.checked) {
            seleccionadas.push(j);
            if (!pregunta.correcta.includes(j)) label.classList.add("incorrect");
          }
        });

        if (seleccionadas.length === pregunta.correcta.length &&
            seleccionadas.every(val => pregunta.correcta.includes(val))) {
          correctas++;
        }

      } else {
        const seleccionada = document.querySelector(`input[name="preg${index}"]:checked`);
        opciones.forEach((opcionInput, j) => {
          const label = opcionInput.parentElement;
          label.classList.remove("correct", "incorrect");

          if (j === pregunta.correcta) label.classList.add("correct");
          if (seleccionada && parseInt(seleccionada.value) === j && j !== pregunta.correcta) {
            label.classList.add("incorrect");
          }
        });

        if (seleccionada && parseInt(seleccionada.value) === pregunta.correcta) {
          correctas++;
        }
      }
    }

    index++;
  });

  let resultado = document.getElementById("resultadoFinal");
  if (!resultado) {
    resultado = document.createElement("div");
    resultado.id = "resultadoFinal";
    resultado.style.marginTop = "20px";
    document.getElementById("contenido").appendChild(resultado);
  }
  resultado.innerHTML = `<h3>Resultado: ${correctas} de ${index} correctas.</h3>`;
}

// Logica para hacer una IMG interactiva

// --- Canvas y dibujo ---
const canvasData = {}; // Guardar ctx, canvas, notasLayer por index
const modoActual = {};

function inicializarCanvas(index) {
  const canvas = document.getElementById(`canvas${index}`);
  const imagen = document.getElementById(`imagen${index}`);
  const notasLayer = document.getElementById(`notasLayer${index}`);

  if (!canvas || !imagen) return;

  if (imagen.complete) {
    configurarCanvas(index, canvas, imagen, notasLayer);
  } else {
    imagen.onload = () => configurarCanvas(index, canvas, imagen, notasLayer);
  }
}

function configurarCanvas(index, canvas, imagen, notasLayer) {
  const ctx = canvas.getContext("2d");
  canvas.width = imagen.naturalWidth || 800;
  canvas.height = imagen.naturalHeight || 600;
  canvas.style.width = canvas.width+"px";
  canvas.style.height = canvas.height+"px";

  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 2;
  ctx.font = "16px Arial";
  ctx.fillStyle = "#ff0000";

  canvasData[index] = {canvas, ctx, notasLayer};

  modoActual[index] = "linea";

  agregarEventosMouse(index);
}

function agregarEventosMouse(index) {
  const {canvas, ctx} = canvasData[index];
  let dibujando = false;
  let inicioX, inicioY;

  canvas.onmousedown = e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    if (modoActual[index] === "linea") {
      dibujando = true;
      inicioX = x;
      inicioY = y;
    } else if (modoActual[index] === "texto") {
      const texto = prompt("Escribe el texto:");
      if (texto) ctx.fillText(texto, x, y);
    }
  };

  canvas.onmousemove = e => {
    if (!dibujando || modoActual[index] !== "linea") return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.beginPath();
    ctx.moveTo(inicioX, inicioY);
    ctx.lineTo(x, y);
    ctx.stroke();
    inicioX = x;
    inicioY = y;
  };

  canvas.onmouseup = () => dibujando = false;
  canvas.onmouseleave = () => dibujando = false;
}

// --- Funciones de control ---
function activarModoLinea(index) { modoActual[index] = "linea"; actualizarEstado(index, "Modo línea activado"); }
function activarModoTexto(index) { modoActual[index] = "texto"; actualizarEstado(index, "Modo texto activado"); }
function limpiarCanvas(index) { 
  const {canvas, ctx, notasLayer} = canvasData[index];
  ctx.clearRect(0,0,canvas.width, canvas.height);
  notasLayer.innerHTML = "";
  actualizarEstado(index, "Canvas limpiado");
}

function actualizarEstado(index, msg) {
  const span = document.getElementById(`estado${index}`);
  if(span) span.textContent = msg;
}


function agregarControlesEsquema(index) {
  const esquemaDiv = document.getElementById(`esquema${index}`);
  if (!esquemaDiv) return;

  // Contenedor de controles
  const controles = document.createElement("div");
  controles.classList.add("controles-dibujo");
  controles.style.marginTop = "10px";

  // HTML de controles
  controles.innerHTML = `
    <button onclick="activarModoLinea(${index})">Línea</button>
    <button onclick="agregarNotaEsquema(${index})">Agregar nota</button>
    <button onclick="limpiarCanvas(${index})">Limpiar</button>
    <label style="margin-left:10px; color:#fff;">Fondo nota:</label>
    <input type="color" id="colorFondo${index}" value="#ffff88">
    <label style="margin-left:10px; color:#fff;">Texto nota:</label>
    <input type="color" id="colorTexto${index}" value="#000000">
    <span id="estado${index}" style="margin-left:10px;color:#fff;"></span>
  `;
  esquemaDiv.appendChild(controles);

  // Guardamos colores por índice
  if (!window.coloresNotas) window.coloresNotas = {};
  window.coloresNotas[index] = { fondo: "#ffff88", texto: "#000000" };

  // Cambiar color de fondo
  document.getElementById(`colorFondo${index}`).addEventListener("input", (e) => {
    window.coloresNotas[index].fondo = e.target.value;
  });

  // Cambiar color de texto
  document.getElementById(`colorTexto${index}`).addEventListener("input", (e) => {
    window.coloresNotas[index].texto = e.target.value;
  });
}

// Función para agregar notas usando los colores por índice
function agregarNotaEsquema(index) {
  const { notasLayer } = canvasData[index];
  const colores = window.coloresNotas[index];

  const nota = document.createElement("div");
  nota.className = "nota";
  nota.contentEditable = true;
  nota.innerText = "";
  nota.style.position = "absolute";
  nota.style.top = "20px";
  nota.style.left = "20px";
  nota.style.background = colores.fondo;
  nota.style.color = colores.texto;
  nota.style.padding = "10px";
  nota.style.border = "1px solid #333";
  nota.style.borderRadius = "6px";
  nota.style.cursor = "move";
  nota.style.minWidth = "40px";
  nota.style.minHeight = "20px";

  // Hacer la nota movible
  nota.onmousedown = e => {
    if (e.target !== nota) return;
    const shiftX = e.clientX - nota.getBoundingClientRect().left;
    const shiftY = e.clientY - nota.getBoundingClientRect().top;

    function mover(ev) {
      const layerRect = notasLayer.getBoundingClientRect();
      nota.style.left = ev.clientX - shiftX - layerRect.left + "px";
      nota.style.top = ev.clientY - shiftY - layerRect.top + "px";
    }

    document.addEventListener("mousemove", mover);
    document.onmouseup = () => {
      document.removeEventListener("mousemove", mover);
      document.onmouseup = null;
    };
  };
  nota.ondragstart = () => false;

  notasLayer.appendChild(nota);
}
