  /*const temas = {*/
  window.temas = window.temas || {
  primerParcial: {
    titulo: "Primer parcial ",
    preguntas: [
      { subtitulo: "DOMINIOS" },
      {

        texto: "1) ¿Que identifica una dirección de Dominio?",
        opciones: [
          "A) Identifica una dirección IP ",
          "B) Identifica una dirección MAC",
          "C) Identifica un país",
          "D) DNS Raíz"
        ],
        correcta: 0
      },

        {
        texto: "2) ¿Cuales son los pasos para contratar un Dominio?",
        opciones: [
          "A) Elegir los nombres de dominio según los caracteres permitidos",
          "B) Registración DNS",
          "C) Elegir Dominio- Configurar- Delegar- Renovar ",
          "D) Delegación de Dominio",
        ],
        correcta: 2
      },

          {
        texto: "3) ¿Quien es el máximo responsable en autorizar un dominio .com.ar en nuestro país?",
        opciones: [
          "A) Ministerio de relaciones Exteriores y Culto",
          "B) LACNIC",
          "C) NIC ",
          "D) La secretaría Legal y Técnica de la Nación"
        ],
        correcta: 3
      },

        {
        texto: "4) ¿Qué tipo de Dominios existen?",
        opciones: [
          "A) Dominios Personales",
          "B) Dominios Genéricos /Territoriales ",
          "C) Root Servers",
          "D) DNS",
          "E) Ninguna de as anteriores es verdadera"
        ],
        correcta: 1
      },

       {
        texto: "5) Quién gestiona los DNS a nivel Internacional",
        opciones: [
          "A) APNIC",
          "B) El responsable es el ICANN ",
          "C) AFRINIC"
        ],
        correcta: 1
      },

      { subtitulo: "COMPUTACION EN LA NUBE 2" },
      {
        texto: "1) Modelo de referencia del NIST",
        imagen: "./IMGParcial/12.png",
        opciones: [
          "A) El modelo conceptual muestra una arquitectura PUBLICA-HIBRIDA de alto nivel con la intención de facilitar la comprensión de los requerimientos, usos, características y estándares de la computación en nube.",
          "B) El modelo OBLIGATORIO impuesto, muestra una arquitectura de alto level de la nube PRIVADA.",
          "C) El modelo conceptual muestra una arquitectura de alto level con la intención de facilitar la comprensión de los requerimientos, usos, características y estándares de la computación en nube.",
          "D) Ninguna de las Anteriores es verdadera."
        ],
        correcta: 2
      },

       {
        texto: "2)	¿Cuales de las siguientes son Tipos de Nube?",
        opciones: [
          "A) Nube propia",
          "B) Nube Popular - Nube Híbrida - Nube Pública - Nube Privada",
          "C) Nube Híbrida - Nube Pública - Nube Privada ",
          "D) Nube laas, Paas, SaaS"
        ],
        correcta: 2
      },

        {
        texto: "3) ¿Cuales son Modelos de Cloud Computing?",
        opciones: [
          "A) laaSS",
          "B) Infraestructura como Servicio.",
          "C) ChaaP",
          "D) SasZ"
        ],
        correcta: 1
      },

       {
        texto: "4) ¿La virtualización permite que múltiples instancias de los recursos de la infraestructura se ejecuten en el mismo hardware, Cuál de las siguientes opciones es correcta?",
        imagen: "./IMGParcial/12.png",
        opciones: [
          "A) La virtualización permite que múltiples instancias, con el uso de OS Hipervisor",
          "B) Plataforma propia de Sistema Operativo",
          "C) Todas las anteriores son verdaderas"
        ],
        correcta: 0
      },

      {
        texto: "5) ¿Cuáles son las diferencias entre el Modelo tradicional y el Modelo de Computación en la Nube?",
        opciones: [
          "A) Compra de activos propios versus Compra de Servicios. ; usualmente privada y otra externa.",
          "B) Modelo Inflexible - Modelo Empresarial",
          "C) Recursos lógicos propios - Datos Almacenados",
          "D) Modelo escalable"
        ],
        correcta: 0
      },

       {
        texto: "6) ¿Qué es la computación en la Nube?",
        opciones: [
          "A) Es un conjunto de nodos activos",
          "B) Es un modelo para habilitar un conjunto de recursos computacionales ( redes, servidores, almacenamiento, aplicaciones, servicios)",
          "C) Es un modelo de Capas",
          "D) Todas las anteriores son verdaderas"
        ],
        correcta: 1
      },

      { subtitulo: "COMPUTACION EN LA NUBE 2" },
        {
        texto: "1)En referencia a los Servidores de Alojamiento en la Nube, cuál de las siguientes opciones es verdadera?",
        opciones: [
          "A) Servidores de Alojamiento en la Nube, para el almacenamiento de clientes.",
          "B) Se puede definir como un lugar para el alojamiento de una página Web (hosting), o un espacio en internet para el almacenamiento de cualquier tipo de información sea archivos, correos, videos, etc.",
          "C) Se puede definir como un lugar para el alojamiento FTP/TELNET, o un espacio en internet para el almacenamiento de cualquier tipo de información sea archivos, correos, videos, etc..",
          "D) Servidores de Alojamiento PROXI/FIREWAL, para el almacenamiento de clientes."
        ],
        correcta: 1
      },

       {
        texto: "2)Como puede ser el alojamiento web? Indicar cuál de las siguientes opciones es correcta.",
        opciones: [
          "A) Correcto y Compatible.",
          "B) Administrado segun el Modelo OSI/NIST",
          "C) Administrado - No Administrado/ Pago - Gratuito",
          "D) Observación adicional: SERVIDORES EN LA NUBE"
        ],
        correcta: 2
      },

        {
        texto: "3)Tipos de Servidores, identificar cuál de las siguientes opciones son correctas?",
        opciones: [
          "A) Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - Proxy Servers ",
          "B) Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers _ H0ST",
          "C) Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - INTERFACE Servers",
          "D) Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - ROUTER"
        ],
        correcta: 1
      },

       {
        texto: "4)Indicar cual de las siguientes definiciones es correcta?",
        opciones: [
          "A) Servidor no dedicado: dedican toda su potencia a los clientes y usuarios locales",
          "B) Servidor no dedicado: dedican toda su potencia a los clientes.",
          "C) Servidor Dedicado: dedica toda su potencia a administrar los recursos de la red, atender solicitudes de procesamiento de los clientes.",
          "D) Servidor Dedicado: dedica toda su potencia a los clientes y a usuarios locales"
        ],
        correcta: 2
      },

        {
        texto: "5)Concepto de Servidor, indicar la respuesta correcta",
        opciones: [
          "A) Un servidor es una computadora que forma parte de una red y provee servicios a centrales telefónicas",
          "B) PABX de clientes",
          "C) Un servidor es una computadora que forma parte de una NUBE PUBLICA.",
          "D) Un servidor es una computadora que forma parte de una red y provee servicios a otras computadoras denominadas clientes CORRECTA",
          "E) Ninguna de las anteriores es verdadera"
        ],
        correcta: 3
      },

      { subtitulo: "CLOUD 1 " },
       {
        texto: "1)Cuál de las opciones indicadas corresponde a Sistemas Operativos en la Nube?",
        opciones: [
          "A) AWS-UNIX",
          "B) OpenStack",
          "C) DDOS"
        ],
        correcta: 1
      },

        {
        texto: "2) ¿Cuáles son los modelos de servicio en la nube? (Rearmada)",
        opciones: [
          "A) Software de Servidor",
          "B) IAAS, PAAS, SAAS",
          "C) IAAS, Soporte como Servicio",
          "D) Plataforma como servicio, Infraestructura de RED"
        ],
        correcta: 1
      },

       {
        texto: "3)AWS (AMAZON WEB SEVICES): Cuál de las siguientes opciones es verdadera respecto del servicio de éste proveedor de Cloud?",
        opciones: [
          "A) Invertir en Gastos de infraestructura como cliente",
          "B) Reemplazar Gastos de Capital por Gastos Variables (solo lo que se conmsume)",
          "C) Servicios Inelásticos",
          "D) No puede absorber la demanda en los picos"
        ],
        correcta: 1
      },

        {
        texto: "4)Indicar las formas de interactuar con AWS (proveedor de Cloud)?",
        opciones: [
          "A) Consola de Administración AWS - Interfaz linea de Comandos (AWS CLI) -Kits de Desarrollo de Software",
          "B) SDK",
          "C) Consola de Administración de comandos por Telnet",
          "D) Interfaz gráfica por línea de comandos",
          "E) Kids de Desarrollo de Juegos en linea"
        ],
        correcta: 1
      },

       {
        texto: "5)A qué ámbito apunta el modelo PAAS?",
        opciones: [
          "A) Desarrollos, Pruebas, Implementaciones de configuraciones de RED Uso y configuración de un CLOUD",
          "B) Desarrollos, Pruebas, Implementaciones, administración de servicios y soluciones basadas en la nube.",
          "C) Configuración y administración de Infraestructura",
        ],
        correcta: 1
      },

        { subtitulo: "CLOUD 2 " },
        {
        texto: "1)Respecto de los Riesgos y Amenazas en el Cloud Computing, Indicar cuál de lassiguientes opciones es correcta?",
        opciones: [
          "A) Riesgos organizativos – Riesgos técnicos – Riesgos legales – Riesgos no específicos.",
          "B) Riesgos en el Multicloud"
        ],
        correcta: 0
      },

       {
        texto: "2)Cuál es la Diferencia entre el entorno multicloud y la nube híbrida?",
        opciones: [
          "A) El término nube híbrida se refiere a la presencia de varios tipos de implementaciones(pública o privada) con cierta integración u organización entre ellas.",
          "B) El término multicloud se refiere a la presencia de al menos dos implementaciones de nube del mismo tipo (pública o privada), que provienen de distintos proveedores. Por otro lado, el término nube híbrida se refiere a la presencia de varios tipos de implementaciones (pública o privada) con cierta integración u organización entre ellas.",
          "C) Todas las anteriores son FALSAS"
        ],
        correcta: 1
      },

        {
        texto: "3)	Concepto de arquitectura - infraestructura. Indicar cual es masopción mas correcta",
        opciones: [
          "A) La arquitectura de nube es el plano",
          "B) La infraestructura de nube incorpora todos los materiales, y la arquitectura de nube es el plano técnico.",
          "C) Los materiales, y la arquitectura de nube es el plano técnico.",
          "D) La infraestructura de nube incorpora los materiales"
        ],
        correcta: 1
      },

      {
        texto: "4)Dadas las siguientes opciones indicar cuál es correcta ?",
        opciones: [
          "A) Los registros de log y la gestión de incidentes no deben ser centralizados.",
          "B) Ataques de ingeniería social Es el arte de engañar a las personas para que revele información sensible.",
          "C) Robo de credenciales",
          "D) Robo de información sensible ",
          "E) Malware"
        ],
        correcta: 1
      },

      {
        texto: "5)	Cuál de las siguientes opciones es correcta?",
        opciones: [
          "A) Arquitectura de nube pública: entorno de nube creado a partir de recursos ajenos al usuario final que pueden redistribuirse a otros inquilinos.",
          "B) Arquitectura de nube privada: en líneas generales, se trata de un entorno de nube diseñado solo para el usuario final, generalmente dentro del firewall del usuario .",
          "C) Arquitectura de nube híbrida: varios entornos de nube con cierto nivel de portabilidad, coordinación y gestión de las cargas de trabajo entre ellos",
          "D) Arquitectura multicloud: sistemas de Tl que incluyen más de una nube, pública o privada, y que pueden conectarse en red (o no).",
          "E) Todas las anteriores son correctas."
        ],
        correcta: 4
      },

       {
        texto: "6) Dada la siguiente condición, RESPONDER: VERDADERO o FALSO: El cliente necesariamente cede al proveedor el control de una serie de cuestiones que pueden influir en la seguridad de sus datos e infraestructura. Al mismo tiempo pueden existir deficiencias en los acuerdos de nivel de servicio (SLA).",
        opciones: [
          "A) VERDADERO ",
          "B) FALSO" 
        ],
        correcta: 0
      },

      {
        texto: "7)	iNDlCAR \"respecto de las amenazas de Seguridad\" cuál de las opciones es correcta?",
        opciones: [
          "A) Violación de datos privados ",
          "B) Pérdida de datos",
          "C) Secuestro de cuentas o servicios (hijacking)",
          "D) Interfaces y APIS inseguras",
          "E) Negación de servicio",
          "F) Persona interna mal intencionada (insider)",
          "G) Abuso de servicios en la nube. El uso de recursos ",
          "H) Due diligence insuficiente (diligencia debida insuficiente). ",
          "I) Vulnerabilidades en tecnologías compartidas",
          "J) El Ciclo de vida de los datos, lo cual es necesario gestionar la información de manera adecuada, a través de principios que permitan mejorar el uso eficiente",
          "K) Riesgos Legales",
      
        ],
        correcta: 8
      },

      
      {
        texto: "8)Identificar el tipo de arquitecturas pueden hallarse en el cloud.",
        opciones: [
          "A) Arquitectura Simple",
          "B) Arquitectura de Nube",
          "C) Arquitectura de nube Pública, nube Privada, nube Híbrida, Multicloud.",
          "D) Arquitectura de nube Pública, nube Privada, nube Híbrida, Multitarea"
        ],
        correcta: 2
      },

      {
        texto: "9)Responder VERDADERO o FALSO Agotamiento de recursos es un factor mas entre Los Riesgos y amenazas en el Cloud",
        opciones: [
          "A) VERDADERO ",
          "B) FALSO"
        ],
        correcta: 0
      },

       { subtitulo: "Angular / Node  " },
       {
        texto: "1)	Para que se utiliza el archivo package.json",
        opciones: [
          "A) En el se definen las referencias a los paquetes y dependencias ",
          "B) No es un archivo valido en Angular",
          "C) Solo sirve para utilizar a modo de readme file."
        ],
        correcta: 0
      },

      {
        texto: "2)En node, la palabra reservada await se utiliza para . ",
        opciones: [
          "A) no tiene opcion ,completar!!!!!."
        ],
        correcta: 0
      },

        {
        texto: "3)Que hace la siguiente instruccion? npm run start",
        opciones: [
          "A) Inicializa la aplicacion del directorio actual en un entorno local ",
          "B) Ejecuta una aplicacion llamada start",
          "C) Realiza el upload al repositorio de npm de dos librerias (run y start)",
          "D) Ninguna de las anteriores"
        ],
        correcta: 0
      },

      {
        texto: "4)En angular, para que sirve el componente RouterModule?",
        opciones: [
          "A) Define como nuestra aplicacion se comunica con el exterior ",
          "B) Define la relacion ruta - componente que luego permite renderizar pantallas ",
          "C) Define el modulo de persistencia de nuestra aplicacion",
          "D) Ninguna de las anteriores",
          "E) Todas las anteriores"
        ],
        correcta: 1
      },

       {
        texto: "5)Que hace la siguiente instruccion? ng new my-app",
        opciones: [
          "A) Crea una nueva aplicacion con Angular en el directorior actual ",
          "B) Instancia un nuevo objeto desde la clase my-app",
          "C) Instala el command line interface para poder desarrollar con Angular",
          "D) Ninguna de las anteriores"
        ],
        correcta: 0
      },

      {
        texto: "6)Node escribe codigo sincronico por defecto.",
        opciones: [
          "A) Verdadero",
          "B) Falso"
        ],
        correcta: 1
      },

      {
        texto: "7)Que significa que una aplicacion en node sea una SPA?",
        opciones: [
          "A) Es una web tradicional con caracteristicas dinamicas",
          "B) Usa javascript combinado con html y css para renderizar pantallas",
          "C) Es considerada una aplicacion independiente con todas sus caracteristicas CORRECTA"
        ],
        correcta: 2
      },

      {
        texto: "8)Que es npm?",
        opciones: [
          "A) Node Print Module: Modulo para la gestion de impresiones",
          "B) Node Pipe Module: Modulo para la gestion de tuberias de entrada y salida",
          "C) Node Package Manager: Gestor de paquetes de node ",
          "D) Todas las anteriores"
        ],
        correcta: 2
      },

      {
        texto: " 9)Que es Angular?",
        opciones: [
          "A) Un framework para desarrollar aplicaciones SPA "
        ],
        correcta: 0
      },

       {
        texto: " 10)En angular, el package.json contiene?",
        opciones: [
          "A) Referencia de paquetes y depencias	",
          "B) Scripts para lanzar rapidamente",
          "C) Ninguna de las anteriores",
          "D) Ambas opciones son correctas (1 y 2) "
        ],
        correcta: 3
      },

      {
        texto: " 11)Que hace la siguiente instruccion? npm install -g @angular/cli",
        opciones: [
          "A) Ejecuta una aplicacion desarrollada en angular llamada \"cli\"",
          "B) Instala la aplicacion del directorio actual en la ruta @angular/cli",
          "C) Instala el command line interface para poder desarrollar con Angular ",
          "D) Ninguna de las anteriores"
        ],
        correcta: 2
      },

      {
        texto: " 12)Que hace la siguiente instruccion? npm run build",
        opciones: [
          "A) Ejecuta una aplicacion llamada build desarrollada en angular",
          "B) Genera el paquete que sirve para distribuir nuestra aplicacion CORRECTA",
          "C) Realiza el upload al repositorio de npm de dos librerias (run y build)",
          "D) Ninguna de las anteriores"
        ],
        correcta: 1
      },

      {
        texto: " 13)	Que es Node?",
        opciones: [
          "A) Gestor de librerias javascript",
          "B) Entorno de ejecucion Javascript basado en eventos asincronos",
          "C) Una aplicacion para gestionar servicios backend",
          "D) Todas las anteriores"
        ],
        correcta: 1
      },

      {
        texto: " 14)Para que se utiliza la directiva ngfor",
        opciones: [
          "A) Para iterar elementos de una vista ",
          "B) No existe como directiva",
          "C) Para negar una condicion",
          "D) Ninguna de las anteriores"
        ],
        correcta: 0
      },

      {
        texto: "15)¿Que hace la siguiente estructura?",
         opciones: [
          "A) <div / 'nglf=\"condition ;  else elseBlock\">Titulo.</div>",
          "B) <ng-template #elseBlock>Mensaje importante.</ng-template>",
          "C) Muestra siempre \"Titulo\" y solo muestra \"Mensaje importante\" cuando no se cumple la condicion.",
          "D) Solo muestra \"Mensaje importante\" bajo cualquier condicion",
          "E) Muestra “Titulo” cuando se cumple la condición y muestra “Mensaje importante” cuando no cumple la condición.",
        ],
        correcta: 4
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
