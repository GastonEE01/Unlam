  /*const temas = {*/
  window.temas = window.temas || {
  primerParcial: {
    titulo: "Primer parcial ",
    preguntas: [
     // { subtitulo: "1P - Teoria - BBDD - Clausula LIKE" },
      {
        texto: "1) ¿A que ataque del OWASP Top Ten se refiere la siguiente definicion: \"El atacante puede ejecutarsecuencias de comandos en el navegador de la victima..\"?",
        opciones: [
          "A) Secuencia de comandos en Sitios Cruzados (XSS)",
          "B) Ausencia de Control de Acceso a Funciones",
          "C) Falsificación de Peticiones en Sitios Cruzados (CSRF)",
          "D) Referencia Directa Insegura a Objetos"
        ],
        correcta: 0
      },

        {
        texto: "2) ¿Cuál de estas tecnologías es considerada generadora de riesgo por ser ejecutada en el cliente?",
        opciones: [
          "A) Java Applet",
          "B) ActiveX",
          "C) Javascript",
          "D) Todas las respuestas.",
        ],
        correcta: 3
      },

          {
        texto: "3) ¿Cuál de los siguientes puntos NO corresponde a un tipo de vulnerabilidad?",
        opciones: [
          "A) Debidas al uso",
          "B) Debidas al diseño",
          "C) Debidas a la implementacion",
          "D) Ninguna de las anteriores"
        ],
        correcta: 3
      },

        {
        texto: "4) ¿Cuál de estas afirmaciones es verdadera en relacion a los Firewalls?",
        opciones: [
          "A) No protege de accesos no autorizados",
          "B) No protege de ataques internos",
          "C) No protege de todos los ataques dañinos",
          "D) Todas las anteriores"
        ],
        correcta: 3
      },

       {
        texto: "5) ¿Cuál de los siguientes puntos no es un atributo del protocolo TCP?",
        opciones: [
          "A) No es orientado a conexión.",
          "B) Corre sobre IP",
          "C) Cada paquete tiene un numero de secuencia y un flag",
          "D) Un paquete tiene un numero de puerto origen y destino"
        ],
        correcta: 0
      },

        {
        texto: "6) ¿Qué se entiende por tampering?",
        opciones: [
          "A) Es una tecnica para redireccionar al usuario hacia otro servidor.",
          "B) Es un ataque de alteracion de datos no autorizados",
          "C) Ninguna respuesta es correcta",
          "D) Es una vulnerabilidad que afecta al codigo javascript"
        ],
        correcta: 1
      },

       {
        texto: "7) ¿Cuál de los siguientes factores no es evaluado por la OWASP para determinar los riesgos incluidos en el proyecto Top Ten?",
        opciones: [
          "A) Vectores de Ataque",
          "B) Detectabilidad de debilidades",
          "C) Impacto tecnico",
          "D) Impacto en el negocio"
        ],
        correcta: 3
      },

        {
        texto: "8) ¿Qué es un bugtraq?",
        opciones: [
          "A) Ninguna de las opciones es correcta",
          "B) Es una lista de notificaciones sobre vulnerabilidades encontradas en software y hardware.",
          "C) Es una variante de virus o troyano",
          "D) Es un software diseñado para buscar vulnerabilidades"
        ],
        correcta: 1
      },

       {
        texto: "9) ¿Cómo se denomina a la zona ubicada entre la red interna y la externa donde habitualmente se ubican a los servidores de la empresa (Web, DB, FTP, Etc.)?",
        opciones: [
          "A) DMZ",
          "B) B2B",
          "C) Router",
          "D) LBA"
        ],
        correcta: 0
      },

        {
        texto: "10) ¿Qué es un firewall?",
        opciones: [
          "A) Un dispositivo que permite bloquear o filtrar el acceso entre dos redes; usualmente privada y otra externa.",
          "B) Un dispositivo de antivirus de red",
          "C) Una librería de software que permite asegurar una aplicación web",
          "D) Un dispositivo que permite la autenticacion en aplicaciones."
        ],
        correcta: 0
      },

       {
        texto: "11) ¿Cuál es la principal función de un comprobador de integridad?",
        opciones: [
          "A) Identificar archivos que han sido alterados en el sistema de archivos.",
          "B)Notificar via email sobre cambios en el sistema de archivos.",
          "C) Identificar los cambios realizados en los archivos del sistema",
          "D) Identificar al usuario que ha producido cambios en el sistema de archivos."
        ],
        correcta: 0
      },

        {
        texto: "12) ¿A qué tipo de equipo se esta refiriendo la siguiente definición? \"Analiza el trafico de la red para tratar de detectar patrones sospechosos que indiquen ataques o intenciones de ataques contra algun recurso. Una vez identificados, puede tomar ciertas medidas contra ese tipo de trafico, como generar alertas o inclusive bloquear o descartar el tráfico que viene de ese origen.",
        opciones: [
          "A) Statefulls",
          "B) HoneyNets",
          "C) IDS",
          "D) HonetPots"
        ],
        correcta: 2
      },

       {
        texto: "13) ¿Cuál de los siguientes elementos corresponde a una modalidad de acceso a la informacion en seguridad logica?",
        opciones: [
          "A) Escritura",
          "B) Ejecución",
          "C) Borrado",
          "D) Lectura",
          "E) Todas las opciones son correctas"
        ],
        correcta: 4
      },

        {
        texto: "14) ¿Cuál de las siguientes opciones corresponde al modelo de funcionamiento general de un IDS?",
        opciones: [
          "A) Filtrado - Identificación - Acción",
          "B) Recolección - Análisis - Respuesta",
          "C) Ninguno de los anteriores",
          "D) Recolección - Identificación - Clasificación"
        ],
        correcta: 1
      },

       {
        texto: "15) ¿A qué tipo de equipo se esta refiriendo la siguiente definicion? \"Divide la LAN en varios segmen tos limitando el trafico a uno o mas segmentos en vez de permitir la difusión de los paquetes por todos los puertos\"",
        opciones: [
          "A) Switch",
          "B) Router",
          "C) Bridge",
          "D) Hub"
        ],
        correcta: 0
      },

        {
        texto: "16) ¿Cuál de los siguientes elementos no compone la lista de tecnicas de OWASP Top Ten Proctive Controls?",
        opciones: [
          "A) Implement Appropiate Access Controls",
          "B) Validate All Inputs",
          "C) Parameterize Queries",
          "D) Use Virtual Keyboard in the login",
          "E) Encode data"
        ],
        correcta: 3
      },

       {
        texto: "17) Indique el tipo de ataque correspondiente a la siguiente definicion: \"[...] ocurren cada vez que una aplicación toma datos no confiables y los envia al navegador web sin una validación y codificación apropiada.\"",
        opciones: [
          "A) Falsificación de peticiones en sitios cruzados (CSRF)",
          "B) Inyección",
          "C) Referencia directa insegura a objetos",
          "D) XSS-Cross Site Scripting"
        ],
        correcta: 3
      },

        {
        texto: "18) Indique el tipo de ataque correspondiente a la siguiente definicion: \"ocurre cuando datos no confiables son enviados a un interprete como parte de un comando o consulta. Los datos hostiles del atacante pueden engañar al interprete en ejecutar comandos no intencionados o acceder datos no autorizados.\"",
        opciones: [
          "A) Referencia directa insegura a objetos",
          "B) Inyección",
          "C) Falsificación de peticiones en sitios cruzados (CSRF)",
          "D) Pérdida de autenticación y gestion de sesiones"
        ],
        correcta: 1
      },

       {
        texto: "19) ¿Cuál de los siguientes tipos no corresponde a la lista OWASP de los ataques mas frecuentes?",
        opciones: [
          "A) Inyección",
          "B) Control de accesos sin contraseñas seguras",
          "C) Pérdida de autenticación y gestión de sesiones",
          "D) Falsificación de peticiones en sitios cruzados (CSRF)"
        ],
        correcta: 1
      },

        {
        texto: "20) ¿A qué ataque del OWASP Top Ten se refiere la siguiente definición: \"El atacante puede ejecutar secuencias de comandos en el navegador de la victima...\"?",
        opciones: [
          "A) Referencia directa insegura a objetos",
          "B) Ausencia de control de Acceso a Funciones",
          "C) Falsificación de peticiones en sitios cruzados (CSRF)",
          "D) Secuencia de Comandos en Sitios Cruzados (XSS)"
        ],
        correcta: 3
      },

       {
        texto: "21) ¿Cuál de las siguientes características no estan asociadas a los firewalls?",
        opciones: [
          "A) Alta disponibilidad (AD)",
          "B) Balanceo de carga (BCFW)",
          "C) Filtrados de contenidos/ Anti-spam",
          "D) Almacenamiento de datos de negocio"
        ],
        correcta: 3
      },

        {
        texto: "22) ¿Cuál de los siguientes elementos NO esta catalogado como una Accion Hostil en Seguridad Física?",
        opciones: [
          "A) Sabotaje",
          "B) Fraude",
          "C) Inundacion",
          "D) Robo"
        ],
        correcta: 2
      },

       {
        texto: "23) ¿Cuál de los siguiente elementos NO forma parte de la pirámide ID?",
        opciones: [
          "A) Confidencialidad",
          "B) Identificación",
          "C) Disponibilidad",
          "D) Ninguno"
        ],
        correcta: 1
      },

        {
        texto: "24) ¿Cuál de los siguientes elementos NO se encuentra dentro de los Controles de Acceso Interno de la seguridad lógica?",
        opciones: [
          "A) Ninguno",
          "B) Contraseñas",
          "C) Etiquetas de seguridad",
          "D) Listas de control de accesos"
        ],
        correcta: 0
      },

      {
        texto: "25) Seleccione la opción según la definición de amenaza: \"Entendemos por amenaza aquella situación de daño cuyo...\"",
        opciones: [
          "A) Riesgo de producirse es significativo",
          "B) Impacto genera una detención total del sistema",
          "C) Origen se encuentra en el código de la aplicación",
          "D) Impacto no afecta a la funcionalidad del sistema"
        ],
        correcta: 0
      },

      {
        texto: "26) La tecnología de TLS es un aporte para reducir la probabilidad de cuál de los siguientes tipos de ataque?",
        opciones: [
          "A) Inyección",
          "B) Almacenamiento criptográfico inseguro",
          "C) XSS",
          "D) Exposición de datos sensibles"
        ],
        correcta: 3
      },

       {
        texto: "27) ¿Cuál de los siguientes elementos se utiliza con el fin de capturar tramas de red?",
        opciones: [
          "A) Sniffer",
          "B) Ninguno de los anteriores",
          "C) IDS",
          "D) Firewall personal"
        ],
        correcta: 0
      },

      {
        texto: "28) ¿En qué zona ubica al ataque de inyección?",
        opciones: [
          "A) Area de servidor",
          "B) Area de Red",
          "C) Area de Cliente",
          "D) Ninguna"
        ],
        correcta: 0
      },

      
      {
        texto: "29) ¿Cuál de los siguientes elementos no forma parte del OWASP Top-Ten?",
        opciones: [
          "A) Referencia directa insegura a objetos",
          "B) Redirecciones y reenvios no validos",
          "C) Configuracion de seguridad incorrecta.",
          "D) Denegación de servicio"
        ],
        correcta: 3
      },

      {
        texto: "30) Indique a que termino se asocia la siguiente definición: \"[...] es la propiedad que busca mantener los datos libres de modificaciones no autorizadas.\"",
        opciones: [
          "A) Integridad",
          "B) Disponibilidad",
          "C) Consistencia",
          "D) Confidencialidad"
        ],
        correcta: 0
      },

       {
        texto: "31) ¿En qué zona ubica al ataque de exposicion de datos sensibles?",
        opciones: [
          "A) Area del cliente",
          "B) Area de Red",
          "C) Area de Servidor",
          "D) Area de red y area de servidor"
        ],
        correcta: 0
      },

      {
        texto: "32) ¿A que se denomina \"Learning mode\" en el contexto de la implementación de un WAF?",
        opciones: [
          "A) Al modo de operación donde la herramienta registra la actividad normal de la aplicaciónpara que posteriormente pueda ser utilizada a fin de generar reglas.",
          "B) Al modo de operación donde se permite que el usuario acceda a la aplicación para generar los ataques que posteriormente seran bloqueados.",
          "C) A la capacitacion del personal que llevara adelante la configuración de la herramienta.",
          "D) Ninguna de las opciones."
        ],
        correcta: 0
      },

        {
        texto: "33) SYN Flood corresponde a una tecnica utilizada para realizar un ataquede...",
        opciones: [
          "A) Inyeccion",
          "B) Denegación de servicio",
          "C) Control remoto de un servidor",
          "D) Secuencia de comandos en sitios cruzados(XSS)"
        ],
        correcta: 1
      },

      {
        texto: "34) ¿Cuál de las siguientes tecnologías no puede ser utilizada en un ataque de inyeccion?",
        opciones: [
          "A) SQL",
          "B) LDAP",
          "C) X-Path",
          "D) Ninguna"
        ],
        correcta: 3
      },

       {
        texto: "35) ¿Cuál de estas afirmaciones es verdadera en relacion a los firewalls?",
        opciones: [
          "A) No protege de accesos no autorizados",
          "B) No protege de todos los ataques dañinos",
          "C) No protege de ataques internos",
          "D) Todas las anteriores"
        ],
        correcta: 3
      },

      {
        texto: "36) ¿Qué protocolo soporta la implementacion de VPNs?",
        opciones: [
          "A) IPSec",
          "B) Secure TCP",
          "C) ICMP",
          "D) Ninguna de las opciones."
        ],
        correcta: 0
      },

      
      {
        texto: "37) Seleccione el tipo de ataque correspondiente a la siguiente definicion: \" es un ataque a un sistema de computadoras o red que causa que un servicio o recurso sea inaccesible a los usuarios legitimos.\"",
        opciones: [
          "A) Inyeccion",
          "B) Perdida de autenticacion",
          "C) Tampering",
          "D) Denegación de servicio"
        ],
        correcta: 3
      },

      {
        texto: "38) ¿Cuál de estos elementos corresponde a la siguiente definicion: \"Se trata de un dispositivo que analiza el tráfico web (entre el servidor web y la WAN), los datos recibidos por parte del usuario y protege de diferentes ataques\"?",
        opciones: [
          "A) Firewall personal",
          "B) WAF",
          "C) Layer 3 firewall",
          "D) IDS"
        ],
        correcta: 1
      },

      {
        texto: " 39) La seguridad informática se encarga de:",
        opciones: [
          "A) Asegurar la confidencialidad, integridad y disponibilidad de la información.",
          "B) Implementar tecnologías de protección de la información, como antivirus, firewalls, etc.",
          "C) Desarrollar políticas y procedimientos de seguridad de la información.",
          "D) Analizar los riesgos y amenazas a la información."
        ],
        correcta: 1
      },

       {
        texto: " 40)¿A qué término corresponde la definición: \"Es una lista de tipos de debilidades de software y hardware\"?",
        opciones: [
          "A) CVE",
          "B) OVAL",
          "C) OVE",
          "D) CWE"
        ],
        correcta: 3
      },

      {
        texto: " 41) ¿Cuál de los siguientes elementos no corresponde a la lista de CWE?",
        opciones: [
          "A) Log Injection",
          "B) LDAP Injection",
          "C) Cross Site Request Forgery",
          "D) Integer Overflow"
        ],
        correcta: 0
      },

      {
        texto: " 42) La seguridad de la información comprende:",
        opciones: [
          "A) Plan Director / Configuración Segura / Auditoría de Eventos",
          "B) Normativa / Arquitectura de Protección / Plan Director",
          "C) Análisis de Riesgo / Normativa / Plan Director",
          "D) Análisis de Riesgo / Auditoría de Eventos / Normativas"
        ],
        correcta: 2
      },

      {
        texto: " 43) ¿Cuál es el conjunto de estándares que nos permite asignar a las vulnerabilidades una valoración numérica entre 0.0 y 10.0?",
        opciones: [
          "A) CVE",
          "B) TopTen",
          "C) CVSS",
          "D) CWE"
        ],
        correcta: 2
      },

      {
        texto: " 44) ¿Para qué tipo de ataque se podría utilizar la siguiente instrucción? “document.body.innerHTML = ‘’”",
        opciones: [
          "A) XSS (site defacement)",
          "B) CRLF",
          "C) JS Injection",
          "D) Injection"
        ],
        correcta: 0
      },

      {
        texto: "45) Explique el ataque por injection comparandolo y asociandolo con el de XSS. Adicionalmente indique que medidas se recomiendan para proteger a una aplicación de este ataque?",
        tipo: "texto",
        posiblesRespuestas: 
        "RTA: Ataque por inyección (Injection Attack): Es un tipo de vulnerabilidad que ocurre cuando datos no confiables (generalmente introducidos por el usuario) son enviados a un intérprete como parte de un comando o consulta. El ejemplo más común es la inyección SQL, donde un atacante puede manipular una consulta SQL para acceder, modificar o eliminar información de una base de datos.\n\n" +
        "Cross-Site Scripting (XSS): Es un tipo de ataque que se produce cuando una aplicación web permite la inserción de scripts maliciosos (normalmente en JavaScript) en el contenido que se muestra a otros usuarios. A diferencia de la inyección SQL, XSS afecta principalmente al navegador del usuario, permitiendo robar cookies, secuestrar sesiones o mostrar contenido fraudulento.\n\n" +
        "Comparación y asociación:\n" +
        "● Ambos ataques aprovechan la falta de validación y saneamiento de datos de entrada.\n" +
        "● La inyección SQL apunta al servidor (base de datos), mientras que XSS apunta al cliente (navegador).\n" +
        "● Los dos pueden usarse para robar información confidencial o alterar el comportamiento esperado de la aplicación.\n\n" +
        "Medidas de protección comunes:\n" +
        "● Validar y sanear siempre todas las entradas del usuario.\n" +
        "● Usar consultas preparadas (prepared statements) con parámetros en lugar de concatenar datos en consultas SQL.\n" +
        "● Escapar caracteres especiales en los datos enviados a la base de datos o al navegador.\n" +
        "● Implementar filtros de contenido para prevenir scripts maliciosos en campos que se muestran a otros usuarios."
      },

      {
        texto: "46) Desarrolle la definición y función de un IDS, explique sus diferencias con un IPS y un Firewall",
        tipo: "texto",
        posiblesRespuestas: "RTA: IDS (Intrusion Detection System):\n" +
        "Es un sistema de detección de intrusos que analiza el tráfico de red o la actividad de un sistema en busca de patrones que indiquen ataques o accesos no autorizados. Su función principal es identificar y alertar, pero no actúa directamente para detener la amenaza.\n\n" +
        "IPS (Intrusion Prevention System):\n" +
        "Es similar al IDS pero con capacidad de prevención. Además de detectar, puede bloquear o detener automáticamente el tráfico malicioso.\n\n" +
        "Firewall:\n" +
        "Es un sistema que filtra el tráfico de red según reglas predefinidas (puertos, direcciones IP, protocolos, etc.). Su objetivo es controlar qué tráfico está permitido o denegado, actuando como primera línea de defensa.\n\n" +
        "Diferencias:\n" +
          "● El IDS solo detecta y alerta, no bloquea.\n" +
          "● El IPS detecta y además bloquea/prevenir ataques.\n" +
          "● El Firewall se centra en reglas de comunicación (qué entra o sale), mientras que IDS/IPS se enfocan en analizar el tráfico en busca de patrones maliciosos."
        }  
    ]
  }
};

function cargarTema(clave) {
  // const tema = temas[clave];
   const tema = window.temas[clave];
   const contenedor = document.getElementById("contenido");
   contenedor.innerHTML = `<h2>${tema.titulo}</h2>`;
 
   let index = 0; 
 
   tema.preguntas.forEach((pregunta, i) => {
     const div = document.createElement("div");
 
     // Si es subtítulo, mostrarlo aparte
     if (pregunta.subtitulo) {
       div.innerHTML = `<h3 style="margin-top: 30px;">${pregunta.subtitulo}</h3>`;
       div.style.borderLeft = "4px solid #4db8ff";
       div.style.padding = "10px";
       div.style.margin = "20px 0";
       contenedor.appendChild(div);
       return;
     }
 
     // Si es pregunta real
     div.className = "question";
     let html = `<h4>${pregunta.texto}</h4>`;
 
     if (pregunta.tipo === "texto") {
       // Para preguntas de desarrollo
       html += `
         <div class="text-answer">
           <textarea 
             id="respuestaTexto${index}" 
             rows="6" 
             style="width: 100%; 
             padding: 10px; 
             margin-top: 10px; 
             background-color: #2b2b2b; 
             color: #fff; 
             border: 1px solid #444;
             border-radius: 4px;
             resize: vertical;"
             placeholder="Escribe tu respuesta aquí..."></textarea>
         </div>`;
     } else if (pregunta.imagen) {
       html += `<div><img src="${pregunta.imagen}" alt="Imagen de pregunta" style="max-width: 100%; margin: 10px 0;" /></div>`;
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
       html += '</div>'; // Cerramos el div de opciones
     }
 
     div.innerHTML = html;
     contenedor.appendChild(div);
     index++;
   });
 
   const btn = document.createElement("button");
   btn.textContent = "Corregir";
   btn.onclick = () => corregirTema(tema);
   btn.style.marginTop = "20px";
   btn.style.padding = "10px 20px";
   contenedor.appendChild(btn);
 }

function corregirTema(tema) {
  const preguntas = tema.preguntas;
  let correctas = 0;
  let totalPreguntas = 0;
  let preguntaIndex = 0;

  preguntas.forEach((pregunta) => {
    if (pregunta.subtitulo) return;

    totalPreguntas++;
    
    if (pregunta.tipo === "texto") {
      // Para preguntas abiertas
      const respuesta = document.getElementById(`respuestaTexto${preguntaIndex}`);
      if (respuesta) {
        if (respuesta.value.trim().length > 0) {
          respuesta.style.borderColor = "#28e07f";
          correctas++; // Se considera "correcta" si escribió algo
        } else {
          respuesta.style.borderColor = "#ff4c4c";
        }

        if (pregunta.posiblesRespuestas) {
          let sugerida = document.getElementById(`sugerida${preguntaIndex}`);
          if (!sugerida) {
            sugerida = document.createElement("div");
            sugerida.id = `sugerida${preguntaIndex}`;
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
    } else if (pregunta.opciones) {
      // Para preguntas de opción múltiple
      const seleccionada = document.querySelector(`input[name="preg${preguntaIndex}"]:checked`);
      const opciones = document.getElementsByName(`preg${preguntaIndex}`);

      opciones.forEach((opcionInput, j) => {
        const label = document.querySelector(`label[for="${opcionInput.id}"]`);
        if (!label) return;

        label.classList.remove("correct", "incorrect");

        if (parseInt(opcionInput.value) === pregunta.correcta) {
          label.classList.add("correct");
        }

        if (seleccionada && parseInt(seleccionada.value) === j && j !== pregunta.correcta) {
          label.classList.add("incorrect");
        }
      });

      if (seleccionada && parseInt(seleccionada.value) === pregunta.correcta) {
        correctas++;
      }
    }

    preguntaIndex++;
  });

  // Mostrar resultado
  let resultado = document.getElementById("resultadoFinal");
  if (!resultado) {
    resultado = document.createElement("div");
    resultado.id = "resultadoFinal";
    resultado.style.marginTop = "20px";
    document.getElementById("contenido").appendChild(resultado);
  }
  resultado.innerHTML = `<h3>Resultado: ${correctas} de ${totalPreguntas} correctas.</h3>`;
}
