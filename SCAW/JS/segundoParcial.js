window.temas = window.temas || {};
window.temas.segundoParcial = {
    titulo: "Segundo parcial ",
    preguntas: [
      //{ subtitulo: "2P - Variables SQL" },
      {
        texto: "1) ¿Para que se utiliza la firma digital ?",
        opciones: [
          "Generar datos aleatorios",
          "Garantizar la confidencialidad de los datos",
          "Gatantizar la autenticidad de datos",
          "Ninguna de estas opciones"
        ],
        correcta: 2
      },

      {
        texto: "2) ¿Cual de los siguientes algoritsmos es denominado AES ?",
        opciones: [
          "Serpent",
          "Rijndael",
          "IDEA",
          "DES"
        ],
        correcta: 1
      },

       {
        texto: "3) ¿Que condiciona el libre uso de los algoritmos ?",
        opciones: [
          "Ninguna de estas opciones",
          "Que sean publicos",
          "Que tengan patentes en vigencia",
          "Que sean privados"
        ],
        correcta: 2
      },

      {
        texto: "4) ¿Cual de los siguientes elementos NO corresponde a una funcion de negocio de SAMM ?",
        opciones: [
          "Gobierno",
          "Implementacion",
          "Verificacion",
          "Diseño",
          "Construccion"
        ],
        correcta: 4
      },

       {
        texto: "5) ¿Cual de los siguientes elementos NO coresponde a una caracteristica positiva de los sistemas criptograficos simetricos ?",
        opciones: [
          "Robustez",
          "Velocidad de cifrado",
          "Longitud del mensaje limitada por la implementacion",
          "Sencillez de implementacion"
        ],
        correcta: 2
      },

      {
        texto: "6) ¿Cual de los siguientes no es un modo de cifrado de bloques ?",
        opciones: [
          "CBC - Cipher Block Chaining",
          "OFB - Output Feedback",
          "CFB - Cipher Feedback",
          "Ninguna de las opciones"
        ],
        correcta: 3
      },

       {
        texto: "7) ¿Cual de las sigueintes NO es una propiedad de la firma digital ?",
        opciones: [
          "Va ligada indisolublemente al mensaje",
          "Se genera en base a la clave publica del destinatario",
          "solo puede ser generada por su legitimo titular",
          "Es publicacmente verificable"
        ],
        correcta: 1
      },

      {
        texto: "8) ¿Que significa el acronimo CMM ?",
        opciones: [
          "Capacity Model Metrics",
          "Capability Maturity Model",
          "Capability Model and Metrics",
          "Capacity Measure Model"
        ],
        correcta: 1
      },

       {
        texto: "9) ¿Que norma define la metodologia SCRUM ?",
        opciones: [
          "Ninguna de estas opciones",
          "ISO 25000",
          "ISO /IEC 9126",
          "ISO/IEC14598"
        ],
        correcta: 0
      },

      {
        texto: "10) Determina el mensaje original para el siguiente cifrado 101110110010 Contraseña: 011100110110 obteniendo mediante el cifrado de XOR solamente.(aca practiquen muchacho)",
        opciones: [
          "110010000100",
          "101010100011",
          "001110110110",
          "111100111010"
          
        ],
        correcta: 0
      },

       {
        texto: "11) ¿A que se denomina \"Padding\"?",
        opciones: [
          "Al metodo para autenticar mensajes con algoritmos asimetricos",
          "Al metodo para completar el inicio de un bloque de datos",
          "Al metodo que permite generar una distorsion entre los distintos bloques",
          "Al metodo para completar el final de un bloque de datos"
        ],
        correcta: 3
      },

      {
        texto: "12) ¿Cual de los siguientes datos no esta contenido en los campos de un certificado X509 ?",
        opciones: [
          "Numero de serie",
          "Nombre de sujeto",
          "Clave privada del sujeto",
          "Clave publica del sujeto"
        ],
        correcta: 2
      },

       {
        texto: "13) ¿Cual de los siguientes puntos no es de interes para el manejo de sesiones de estado ?",
        opciones: [
          "Seguridad de transporte",
          "Ataques de autenticacion de sesion",
          "Paginas y credenciales en formularios",
          "Entropia de credencial de sesion"
        ],
        correcta: 2
      },

      {
        texto: "14) ¿Cual de estos elementos no corresponde a la lista de requerimientos verificacion de ASVS2014?",
        opciones: [
          "Cryptography at Rest",
          "Authentication",
          "Data Protection",
          "Communications",
          "Mobile",
          "Performance"
        ],
        correcta: 5
      },

       {
        texto: "15) Indique cual es la definicion correcta de j según la siguiente representacion de un sistema criptografico Dj(Ej (m))=m",
        opciones: [
          "Representa el conjunto de transformaciones de cifrado",
          "Representa el conjunto de claves que se pueden emplear",
          "Representa el conjunto de todos los mensajes sin cifrar",
          "Representa el conjunto de todos los posibles mensajes cifrados"
        ],
        correcta: 1
      },

      {
        texto: "16) ¿Cual de los siguientes elementos NO se corresponde con una propiedad de la Calidad en uso ?",
        opciones: [
          "Productividad",
          "Seguridad",
          "Satisfaccion",
          "Eficacia",
          "Ninguna de las opciones"
        ],
        correcta: 4
      },

       {
        texto: "17) ¿Que establece el marco legal para el uso de la Firma Digital en la Republica Argentina ?",
        opciones: [
          "El pacto de San Jose de Costa Rica",
          "La ley 25506",
          "La ley 24449",
          "La constitucion nacional"
        ],
        correcta: 1
      },

      {
        texto: "18) ¿Que caracteristica de calidad interna/externa no esta contemplada en SquaRE?",
        opciones: [
          "Portabilidad",
          "Mantenibilidad",
          "Ninguna de estas opciones",
          "Fiabilidad"
        ],
        correcta: 2
      },

       {
        texto: "19) ¿A que tipo de algoritmo corresponde el cifrado del Cesar ?",
        opciones: [
          "Cifrado por transposicion de grupos",
          "Cifrado por sustitucion",
          "Cifrado Asimetrico",
          "Cifrado de simetrico de flujo"
        ],
        correcta: 1
      },

      {
        texto: "20) ¿Cual de los siguientes puntos No es un objetivo de la administracion de usuarios y privilegios ?",
        opciones: [
          "Los usuarios no pueden acceder o utilizar funcionalidades administrativas",
          "Las funciones de nivel de administrardor estan segregadas apropiadamente de la actividad del usuario",
          "Los usuarios transmiten informacion de manera cifradad y confidencial",
          "Proveer la necesaria auditoria y trazabilidad de funcionalidad administrativa"
        ],
        correcta: 2
      },

       {
        texto: "21) ¿Cual de ests elementos corresponde a la escala con que se representan los niveles de madures de SAMM ?",
        opciones: [
          "A, B, C",
          "Bajo, Medio,Alto",
          "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
          "0, 1, 2, 3"
        ],
        correcta: 3
      },

      {
        texto: "22) ¿Sobre que tecnologia estan desarrollados los Web Services ?",
        opciones: [
          "XML/SOAP",
          "HTTPS",
          "AES",
          "HTML"
        ],
        correcta: 0
      },

       {
        texto: "23) Indique a que corresponde la siguiente definicion: Se define como una funicon o metodo para generar un valor que represente de manera casi univoca a un dato",
        opciones: [
          "Funcion de encriptacion de datos",
          "Funcion de descifrado de datos",
          "Funcion hash",
          "Funcion de firma digital"
        ],
        correcta: 2
      },

      {
        texto: "24) Indique cual es el orden creciente en base al nivel de seguridad de las siguientes tecnicas de autenticacion de",
        opciones: [
          "Basica y segura, Basada en formas, Integrada, Fuerte, Basada en certificado",
          "Basada en formas, Basica y segura, Integrada, Fuerte, Basada en certificado",
          "Basica y segura, Integrada, Basada en formas, Basada en certificado, Fuerte",
          "Basica y segura, Basada en formas, Integrada, Basada en certificado, Fuerte",
          "Basada en formas, Basica y segura, Integrada Basada en certificado, Fuerte"
        ],
        correcta: 3
      },

       {
        texto: "25) ¿Cual de estos elementos corresponde a un nivel que no define requerimientos detallados de verificacion ASVS ?",
        opciones: [
          "Advanced",
          "Cursory",
          "Opportunistic",
          "Standard"
        ],
        correcta: 1
      },

      {
        texto: "26) ¿Que cantidad de Pas estan definidos para el SSE-CMM ?",
        opciones: [
          "24,",
          "16,",
          "18,",
          "22,"
        ],
        correcta: 3
      },

       {
        texto: "27) ¿Que modelo de autorizacion utiliza un sistema UNIX/Linux convencional para mejorar sus archivos ?",
        opciones: [
          "Mandatory Access Control (MAC)",
          "Discretionary Access Control (DAC)",
          "Roole Based Access Control (RBAC)",
          "Ninguna de estas opciones"
        ],
        correcta: 1
      },

      {
        texto: "28) Marque la respuesta correcta según indica el siguiente mensaje generado mediante el cifrado Cesar \" od uhvsxhvwd fruuhfwd frqwlhqh od sdodeud ixhjr \" (practica)",
        opciones: [
          "El fuego se apagará pronto.",
          "Los fideos tienen salsa",
          "Hay estrellas en el cielo",
          "La torre es demasiado alta"
        ],
        correcta: 0
      },

       {
        texto: "29) ¿Que mecanismo adiciona criptografia al proceso de hash con el fin de incorporar autenticacion a la seguridad del mismo ?",
        opciones: [
          "MD5",
          "MAC",
          "AES",
          "Ninguna de estas opciones"
        ],
        correcta: 1
      },

      {
        texto: "30) ¿Cual de los siguientes algoritmos se basa en la dificultad para factorizar grandes numeros?",
        opciones: [
          "Ninguna de estas opciones",
          "RSA",
          "AES",
          "ElGamal"
        ],
        correcta: 1
      },

       {
        texto: "31) ¿Que estandar se ha definido para la seguridad especifica de Web Services ?",
        opciones: [
          "WSDL",
          "TLS",
          "HTTPS",
          "WSS"
        ],
        correcta: 3
      },

      {
        texto: "32) Dada la clave publica (p. y. n) y la clave privada (p,x,n). Indique a que algoritmo corresponden las siguientes definiciones de cifrado : a = p´k (mod n) y b = y´´k m (mod n)",
        opciones: [
          "ElGamal",
          "AES",
          "RSA",
          "Ninguna de estas opciones"
        ],
        correcta: 0
      },

       {
        texto: "33) ¿Cual es el significado SSL ?",
        opciones: [
          "Secure Sockets Layer",
          "SimpleSocket Layer",
          "Secure Socket Level",
          "Standard Socket Layer"
        ],
        correcta: 0
      },

      {
        texto: "34) ¿Cual de estos elementos no corresponde a la lista de verificacion de requerimientos…",
        opciones: [
          "Proteccion de Datos",
          "Desempeño",
          "Communications",
          "Autenticacion"
        ],
        correcta: 1
      },

       {
        texto: "35) ¿Cual de los siguientes algoritmos NO requiere confidencialidad en la distribucion de la clave",
        opciones: [
          "AES",
          "ELGamal",
          "Ninguna de estas opciones",
          "DES"
        ],
        correcta: 1
      },

      {
        texto: "36) ¿Que modelo de infraestructura de seguridad utiliza PGP ?",
        opciones: [
          "Anillo o Circulo de confianza",
          "PKI - Infraestructura de Clave Publica",
          "Ninguna opcion es valida",
          "ISI - Identificacion integrada de seguridad"
        ],
        correcta: 0
      },

       {
        texto: "37) ¿Cual de las siguientes es una ventaja de los algoritmos SIMETRICOS?",
        opciones: [
          "No requiere confidencialidad en la distribucion de clave",
          "La misma clave puede ser utilizada por multiples actores en la comunicación",
          "Permite autentificar mensajes",
          "Sencillez de implementacion"
        ],
        correcta: 3
      },

      {
        texto: "38) ¿Cual de las siguientes opciones corresponde a un modelo enfocado en la madurez de las… las caracteristicas esenciales de los procesos que deben existir en una organización para asegurar… sistemas ?",
        opciones: [
          "PCI DSS",
          "ISO/IEC 21827:2008",
          "A4609",
          "ISO 25000"
        ],
        correcta: 1
      },

       {
        texto: "39) ¿Cual es el significado del acronimo DSA ?",
        opciones: [
          "Ninguna de estas opciones",
          "Data Signature Algorithm",
          "Digital Signature Algorithm",
          "Dynamic Signature Algorithm"
        ],
        correcta: 2
      },

      {
        texto: "40) ¿Cual de los siguientes puntos corresponde al grupo PAs para \"PROJECT AND ORGANIZATIONAL BASE PRACTICES\"?",
        opciones: [
          "Specity Security Needs",
          "Build Assurance Argument",
          "Assess Security Risk",
          "Plan Technical Effort"
        ],
        correcta: 3
      },

       {
        texto: "41) ¿Cual de los siguientes es un metodo de autorizacion en dode se asegura la informacion mediante etiquetas de sencibilidad en la informacion y comparando esto con el nivel de sensibilidad de un usuario?",
        opciones: [
          "Dicretionary Access Control (DAC)",
          "Role Based Access Control (RBAC)",
          "Mandatory Access Control (MAC)",
          "Ninguna de las opciones"
        ],
        correcta: 2
      },

      {
        texto: "42) Según Derning, ¿cual de los siguientes elementos no es una etapa del ciclo de calidad total ?",
        opciones: [
          "Auditar",
          "Planificar",
          "Actuar",
          "Hacer"
        ],
        correcta: 0
      },

         {
        texto: "43) La tecnologia TLS es un aporte para reducir la probabilidad de cual de los siguientes tipos de ataque ?",
        opciones: [
          "Fallas Criptograficas",
          "Almacenamiento criptografico inseguro",
          "Inyeccion",
          "XSS - Cross site reference"
        ],
        correcta: 0
      },

       {
        texto: "44) Cual de los siguientes es la encargada de firmar documentos con la finalidad de probar que existian antes de un determinado instante de tiempo ?",
        opciones: [
          "Autoridad de Certificacion",
          "Autoridad de Registro",
          "Autoridad de Validadcion",
          "Autoridad de Sellado de Tiempo"
        ],
        correcta: 3
      },

      {
        texto: "45) ¿A que Capability Level correpnden los siguientes common features : Objetively Managing Perfomance y Establish Measure Quality Goals",
        opciones: [
          "Capability level 4",
          "Capability level 2",
          "Capability level 5",
          "Capability level 3"
        ],
        correcta: 0
      },

       {
        texto: "46) ¿Cual de las siguientes normas ha sido emitida por la Union Europea ?",
        opciones: [
          "CCPA",
          "GDPR",
          "HPAA",
          "A4609"
        ],
        correcta: 1
      },

      {
        texto: "47) ¿Cual de los siguientes es una ventaja de los algoritmos Asimetricos ?",
        opciones: [
          "Logitud del mensaje \"Ilimitada\"",
          "No requiere confidencialidad en la distribucion de clave",
          "Velocidad de cifrado",
          "Robustez"
        ],
        correcta: 1
      },

       {
        texto: "48) ¿Cual de las siguientes opciones NO es una buena practica para evitar vulnerabilidades de XSS ?",
        opciones: [
          "Validacion de entrada positiva o de \"Lista blanca\"",
          "Ninguna de estas opciones",
          "Codificar los datos no confiables basados en el contexto donde seran ubicados",
          "Utilizar Apis de auto-sanitizacion"
        ],
        correcta: 1
      },

      {
        texto: "49) ¿Que se utiliza cuando una clave publica pierde su validez y debe ser anulada ?",
        opciones: [
          "La clave privada del certificado",
          "Un certificado de revocacion",
          "No se requieren acciones, simplemente se procede a crear un nuevo certificado",
          "Un mail de cancelacion firmado digitalmente"
        ],
        correcta: 1
      },

       {
        texto: "50) Indique a que elemento corresponde la siguiente definicion: es un marco de trabajo abierto para ayudar a las organizaciones formular e implementar una estrategia de seguridad para software que sea adecuada a las necesidades",
        opciones: [
          "WSS",
          "SAMM",
          "SCRUM",
          "Square"
        ],
        correcta: 1
      },

      {
        texto: "51) ¿Cual de los siguentes es un metodo de autorizacion en donde las desiciones de accesos se basan en las funciones de un individuo dentro de la organización ?",
        opciones: [
          "Mandatory Access Control (MAC)",
          "Discretionary Access Control (DAC)",
          "Ninguna de las opciones",
          "Role Based Access Control (RBAC)"
        ],
        correcta: 3
      },

      {
        texto: "52) ¿Cual es el puerto por defecto para transmisiones HTTPS ?",
        opciones: [
          "843",
          "8080,",
          "80,",
          "443,"
        ],
        correcta: 3
      },

       {
        texto: "53) ¿Cual de las siguientes opciones no corresponde a un protocolo para interactuar con una aplicacion sin contraseña?",
        opciones: [
          "HTTP",
          "XML",
          "Opción 2",
          "HTTPS"
        ],
        correcta: 1
      },

      {
        texto: "54) ¿Cual de los siguientes es un metodo de autorizacion en donde se restringe el acceso a la informacion sobre la pertenencia a ciertos grupos?",
        opciones: [
          "DAC",
          "MAC",
          "DAB",
          "POM"
        ],
        correcta: 0
      },

       {
        texto: "55) Cual de los siguientes verifica la relacion de los certificados y la identidad de sus titulares?",
        opciones: [
          "Autoridad de registro",
          "Autoridad por contraseña",
          "Implementacion de metodos asincronicos",
          "Implementacion de metodos sincronicos"
        ],
        correcta: 0
      },

       {
        texto: "56) ¿Que tipo de algoritmo es Salsa20?",
        opciones: [
          "Cifrado simetrico de flujo",
          "Cifrado por remplazo",
          "RSA",
          "Cifrado Vigenere"
        ],
        correcta: 0
      },

       {
        texto: "57) Cual de las siguientes es una VENTAJA de los algoritmos ASIMETRICOS?",
        opciones: [
          "Permite autentificar mensajes",
          "Permite autenticar a los usuarios",
          "Es de facil implementacion",
          "Todas las anteriores"
        ],
        correcta: 0
      },

      {
        texto: "58) Cual de las siguientes es una DESVENTAJA de los algoritmos ASIMETRICOS? ",
        opciones: [
          "Se requieren claves de gran extension",
          "No es tan segura como la simetrica",
          "Se requieren mas de 5 llaves",
          "Ninguna de las anteriores"
        ],
        correcta: 0
      },

       {
        texto: "59) Dentro de calidad externa-interna cual de las siguientes es una caracteristica de usabilidad?",
        opciones: [
          "Operabilidad",
          "Performance",
          "Adaptabilidad",
          "Adecuacion"
        ],
        correcta: 0
      },

        {
        texto: "60) ¿A que corresponde la siguiente definicion? Propiedad o conjunto de propiedades inherentes a un objeto que permiten apreciarlo como mejor, igual o peor que otros objetos de su especie?",
        opciones: [
          "Definicion de CALIDAD de la RAE",
          "Definicion de ADECUACION de la RAE",
          "Definicion de USABILIDAD de la RAE",
          "Ninguna de las anteriores es valida"
        ],
        correcta: 0
      },

       {
        texto: "61) Concepto de calidad externa-interna--- cual de las siguientes es una caracteristica de FUNCIONALIDAD?",
        opciones: [
          "Adecuación",
          "Adaptabilidad",
          "Usabilidad",
          "Todas las anteriores"
        ],
        correcta: 0
      },

       {
        texto: "62) Cual de estas tecnologias no se utiliza para la implementacion de Web Services?",
        opciones: [
          "A) JSON",
          "B) SOAP",
          "C) XML",
          "D) WSDL"
        ],
        correcta: 0
      },

       {
        texto: "63) Cual de los siguientes elementos no corresponde a un modo de operacion por bloques para algoritmos simetricos?",
        opciones: [
          "A) CBC",
          "B) ECB",
          "C) MDQ",
          "D) GCM"
        ],
        correcta: 2
      },

       {
        texto: "64) ¿Cual de los siguientes elementos NO se vincula al area de Portabilidad?",
        opciones: [
          "A) Adaptabilidad",
          "B) Coexistencia",
          "C) Utilizacion de recursos",
          "D) Intercambiabilidad"
        ],
        correcta: 2
      },

      {
        texto: "65) ¿Cual es la utilidad de OWASP ASVS?",
        opciones: [
          "A) Normalizar el nivel de rigurosidad disponible en una verificacion de seguridad",
          "B) Normalizar el rango de cobertura en una verificacion de seguridad",
          "C) Todas son correctas",
          "D) Establecer un estandar tanto para consumidores como para proveedores de servicio o herramienta."
        ],
        correcta: 2
      },

       {
        texto: "66) ¿Cual de los siguientes algoritmos corresponde a un cifrador simetrico de flujo?",
        opciones: [
          "A) MARS",
          "B) Salsa20",
          "C) AES",
          "D) Serpent"
        ],
        correcta: 1
      },

        {
        texto: "67) ¿Cual de los siguientes elementos no forma parte de las funciones de negocio del modelo SAMM?",
        opciones: [
          "A) Implementacion",
          "B) Gobierno",
          "C) Constitucion",
          "D) Verificacion"
        ],
        correcta: 2
      },

       {
        texto: "68) Los cifradores de sustitucion utilizan la tecnica de",
        opciones: [
          "A) Permutacion de cada caracter de texto claro por otro correspondiente al texto cifrado",
          "B) Ninguna",
          "C) Modificacion de cada caracter de texto claro por otro correspondiente al texto cifrado",
          "D) Calculo de hash de los caracteres del texto claro para reemplazar el texto cifrado"
        ],
        correcta: 2
      },

      {
        texto: "69) Que NO se debe registrar en un log?",
        opciones: [
          "A) Ids de sesion",
          "B) Eventos legales",
          "C) Fallos de autenticacion",
          "D) Fallos de validacion"
        ],
        correcta: 0
      },

       {
        texto: "70) Cual de los siguientes algoritmos corresponde a un cifrador asimetrico?",
        opciones: [
          "A) 3DEs",
          "B) RSA",
          "C) AES",
          "D) Twofish"
        ],
        correcta: 1
      },

       {
        texto: "71) Cual de las siguientes no es una buena practica para la autenticacion?",
        opciones: [
          "A) Utilizar sistemas de autenticacion de factor multiple",
          "B) El uso de case sensitive para los user IDs",
          "C) Solicitar re-autenticacion",
          "D) Almacenar contraseñas de forma segura"
        ],
        correcta: 1
      },

       {
        texto: "72)¿Cómo opera el modo ECB (Electronic Codebook)?",
        opciones: [
          "Divide el mensaje en partes y cifra cada parte de manera independiente.",
          "Realiza un XOR con el bloque previo antes de cifrar cada parte.",
          "Utiliza un vector de inicialización para cifrar el mensaje.",
          "Opera de manera similar a CFB pero con bloques de salida."
        ],
        correcta: 0
      },

      {
        texto: "73)¿Cuáles son las dos ramas principales de la criptografía mencionadas en el resumen?",
        opciones: [
          "Clásica y Moderna",
          "Simétrica y Asimétrica",
          "Transposición y Sustitución",
          "ECB y CBC"
        ],
        correcta: 0
      },

       {
        texto: "¿Cuál es la diferencia entre SSE-CMM y ASVS? Desarrolle los detalles y casos de aplicación de cada uno de estos elementos en su respuesta.",
        tipo: "texto"      
       },

      {
        texto: "Enumere, defina y relacione las etapas del proceso de gestión de la “Calidad Total” y su vínculo con el modelo SCRUM.",
        tipo: "texto"
      },
    ]
};
