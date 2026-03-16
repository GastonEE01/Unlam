  /*const temas = {*/
  window.temas = window.temas || {
  primerParcialMio: {
    titulo: "Primer parcial ",
    preguntas: [
      { subtitulo: "1P - Teoria - BBDD - Clausula LIKE" },

      {
        texto: "1) La clausula LIKE:",
        opciones: [
          "Durante la operación de búsqueda de coincidencias de patrón, los caracteres normales pueden no coincidir exactamente con los caracteres especificados en la cadena de caracteres.",
          "Durante la operación de búsqueda de coincidencias de patrón, los caracteres comodines pueden no coincidir con fragmentos arbitrarios de la cadena.",
          "Realiza alguna operación matemática sobre los valores obtenidos de la consulta.",
          "Determina si una cadena de caracteres específica coincide con un patrón especificado, y el patrón puede contener caracteres normales y/o comodines.",
          "Ninguna de TODAS las anteriores es correcta.",
          "Todas las respuestas son correctas."
        ],
        correcta: 3
      },

      { subtitulo: "1P - Teoria - BBDD - Funcion INSERT - Restricciones" },

      {
        texto: "1) Sentencia INSERT => Restricciones de Integridad de Datos:",
        opciones: [
          "Restricciones de Clave Primaria: No puedes insertar valores duplicados en una columna que esté definida como clave primaria.",
          "Restricciones de Clave Foránea: Los valores que insertes en una columna con clave foránea no deben coincidir con los valores existentes en la tabla referenciada de forma que se genere una nueva clave.",
          "Restricciones de Unicidad: Puedes insertar valores duplicados en columnas con restricciones de unicidad.",
          "Restricciones de Verificación: Los valores insertados no deben cumplir con las condiciones definidas en las restricciones de verificación.",
          "Todas las respuestas anteriores son correcta.",
          "Ninguna de TODAS las respuestas anteriores es correcta."
        ],
        correcta: 0
      },

      { subtitulo: "1P - Teoria - BBDD - Funcion UPDATE - Restricciones:" },

      {
        texto: "1) Sentencia UPDATE => Restricciones de Integridad de Datos:",
        opciones: [
          "Claves Primarias: No puedes actualizar una clave primaria de manera que se convierta en un valor duplicado.",
          "Claves Foráneas: Los valores actualizados en una columna de clave foránea deben seguir existiendo en la tabla referenciada, a menos que se actualicen las referencias en las tablas relacionadas. ",
          "Restricciones de Unicidad: No puedes actualizar valores en una columna que tengan una restricción de unicidad a fin de que se conviertan en valores duplicados. ",
          "Restricciones de Verificación: Los nuevos valores deben cumplir con las condiciones definidas en las restricciones de verificación. ",
          "Todas las respuestas anteriores son correctas.",
          "Ninguna de TODAS las respuestas anteriores es correcta."
        ],
        correcta: 4
      },

       { subtitulo: "1P - Teoria - BBDD - Funcion DELETE - Restricciones: " },

      {
        texto: "1) Sentencia DELETE => Restricciones de Datos:",
        opciones: [
          "Restricciones de Seguridad: Debes tener los permisos adecuados para ejecutar una sentencia DELETE.Los permisos necesarios pueden variar según el rol del usuario y la configuración de seguridad de la base de datos.",
          "Restricciones de Vista: Si intentas eliminar filas a través de una vista, la vista no es requerida que se actualizable. ",
          "Restricciones de Concurrencia: SQL Server no utiliza bloqueos para manejar la concurrencia durante la operación de DELETE, eso es debido a que bloqueos pueden afectar el rendimiento y la accesibilidad de los datos durante la eliminación. ",
          "Restricciones de Filtros: La cláusula WHERE no debe usarse para la sentencia DELETE, ya que no se borrarian todos los registro de todas las filas de la tabla, lo que podría resultar en la pérdida accidental de datos. ",
          "Todas las respuestas anteriores son correctas.",
          "Ninguna de TODAS las respuestas anteriores es correcta."
        ],
        correcta: 0
      },
      
       { subtitulo: "1P - Programación en SQL Server " },

      {
        texto: "1) TRANSACT-SQL",
        opciones: [
          "Es el lenguaje de programación que se emplea para mandar peticiones entre el cliente y el servidor.",
          "Es un lenguaje exclusivo de SQL Server, pero basado en el lenguaje SQL estándar (ANSI SQL). ",
          "Es un leguaje utilizado por casi todos los tipos de bases de datos relacionales y no relacionales que existen. ",
          "Incluye todas las características de SQL estándar, pero restringe los elementos adicionales que mejoran la funcionalidad y flexibilidad del lenguaje. ",
          "Mas de una respuesta es correcta.",
          "Todas las respuestas anteriores son correctas.",
          "Ninguna de TODAS las respuestas anteriores es correcta."
        ],
        correcta: 4
      },

      { subtitulo: "1P - SQL - Caracteristicas " },

      {
        texto: "1) Extensiones del Lenguaje SQL:",
        opciones: [
          "Procedimientos Almacenados (Stored Procedures): permite definir procedimientos almacenados que encapsulan y reutilizan código SQL. Los procedimientos almacenados no pueden aceptar parámetros y devolver resultados, lo que facilita la modularización y la reutilización de código. ",
          "Funciones Definidas por el Usuario (UDFs): Puedes definir funciones personalizadas que pueden ser utilizadas en consultas, pero no para realizar cálculos complejos o transformaciones de datos. ",
          "Triggers: T-SQL soporta triggers que son procedimientos que se ejecutan automáticamente en respuesta a eventos específicos, como inserciones, actualizaciones o eliminaciones en una tabla. ",
          "Proporciona tres tipos de sentencias diferentes: Especificar el esquema relacional: DDL (DATA DEFINITION LANGUAGE); Expresar las consultas y actualizaciones de la base de datos: DML(DATA MANIPULATION LANGUAGE) y La generacion de consultas con alteracion de tipo de datos DAL (DATA ALTERATION LANGUAGE). ",
          "Todas las respuestas anteriores son correctas.",
          "Ninguna de TODAS las respuestas anteriores es correcta."
        ],
        correcta: 2
      },

        { subtitulo: "1P - Diagrama de Entidad Relacion => Restricciones de Tablas" },

      {
        texto: "1) RESTRICCIONES DE TABLAS:",
        opciones: [
          "Los nombres de las tablas pueden no ser únicos en la base de datos. ",
          "Los nombres de las columnas deben ser únicos en la tabla.",
          "Puede haber dos registros con el mismo valor de la clave primaria. ",
          "Dentro de las restricciones que podemos establecer desde el diseño de  los campos: Que admita valores Nulos, y no admita valores duplicados. ",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta. "
        ],
        correcta: 1
      },

        { subtitulo: "1P - Normalizacion de Base de Datos" },

      {
        texto: "1) Las BBDDs se Normalizan con el proposito de:",
        opciones: [
          "Evitar la redundancia de los datos. ",
          "Disminuir problemas de actualización de los datos en las tablas. ",
          "Proteger la integridad de los datos. ",
          "Evitar Anomalías de Actualización. ",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 4
      },

        { subtitulo: "1P - Normalizacion de Base de Datos => Forma N1) Tercera Forma Normal:" },

      {
        texto: "1) Tercera Forma Normal:",
        opciones: [
          "Una BBDD se encuentra en 3FN si y solo si, esta en 2FN y se debe eliminar cualquier dependencia transitoria. ",
          "Una BBDD se encuentra en 3FN si y solo si, esta en 2FN y ningún atributo no clave debe depender de otro atributo no clave.",
          "Una BBDD se encuentra en 3FN si y solo si, esta en 2FN y ningún atributo no clave depende de otro no clave (dependencia transitiva).",
          "Una BBDD se encuentra en 3FN si y solo si, esta en 2FN y todos los atributos no clave deben depender únicamente de la clave primaria. ",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 4
      },

        { subtitulo: "1P - Funciones " },

      {
        texto: "1) Funcion replicate:",
        opciones: [
          "Retorna la cadena con todas las ocurrencias de la subcadena reemplazo por la subcadena a reemplazar.",
          "Devuelve la cadena invirtiendo el orden de los caracteres. ",
          "Repite una cadena la cantidad de veces especificada. ",
          "Devuelve la posición de comienzo (de la primera ocurrencia) del patrón especificado en la cadena enviada como segundo argumento. Si no la encuentra retorna 0. ",
          "Todas las respuestas son correctas. ",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 2
      },

        { subtitulo: "1P - Funciones para manejo de STRING - CADENAS" },

      {
        texto: "1) Funcion PATINDEX:",
        opciones: [
          "Devuelve una parte de la cadena especificada como primer argumento, empezando desde la posición especificada por el segundo argumento y de tantos caracteres de longitud como indica el tercer argumento. ",
          "Busca una subcadena dentro de una cadena a partir de una ubicación especificada. ",
          "Devuelve la posición de la subcadena encontrada en la cadena buscada, o cero si no se encuentra la subcadena. ",
          "Devuelve la posición de un patrón en una cadena. Si no se encuentra el patrón, esta función devuelve 0.",
          "Todas las respuestas son correctas. ",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 5
      },

        { subtitulo: "1P - Practica - VISTAS" },

      {
        texto: "1) Se requiere crear una vista llamada v_EmpleadosDepartamentos que devuelva el ID_Empleado, Nombre_Empleado, y Nombre_Departamento de los empleados, uniendo las tablas Empleados y Departamentos en Nombre_Empleado, y Nombre_Departamento de los empleados, uniendo las tablas Empleados y Departamentos en base al campo departamento_id. Renombrando el campo Nombre como Nombre_Empleado para mayor claridad.",
        opciones: [
          "CREATE VIEW v_EmpleadosDepartamentos AS SELECT ID_Empleado, Nombre AS Nombre_Empleado, Nombre_Departamento FROM Empleados LEFT JOIN Departamentos ON Empleados.departamento_id = Departamentos.departamento_id; ",
          "CREATE VIEW v_EmpleadosDepartamentos AS SELECT ID_Empleado, Nombre AS Nombre_Empleado, Nombre_Departamento FROM Empleados JOIN Departamentos ON Empleados.departamento_id = Departamentos.departamento_id;",
          "CREATE VIEW v_EmpleadosDepartamentos AS SELECT ID_Empleado, Nombre_Empleado,Nombre_Departamento FROM Empleados JOIN Departamentos ON Empleados.departamento_id = Departamentos.departamento_id;",
          "CREATE VIEW v_EmpleadosDepartamentos AS SELECT DISTINCT ID_Empleado, Nombre_Empleado,Nombre_Departamento FROM Departamentos JOIN Empleados ON Departamentos.departamento_id = Empleados.departamento_id; "
        ],
        correcta: 1
      },

        { subtitulo: "1P - Practica - Creacion DBs " },

      {
        texto: "1) Dentro de la base de datos Facturación, el esquema Compras y la tabla Producto. Altera la tabla Producto para agregar una restricción que asegure que el precio sea mayor a 50.",
        imagen: "./IMGParcial/1.png",  

        opciones: [
          "ALTER TABLE Compras.Producto ADD CONSTRAINT CHK_Precio CHECK (precio > 50);",
          "ALTER TABLE Producto ADD CONSTRAINT CHK_Precio CHECK (precio >= 50);",
          "ALTER TABLE Facturación.Compras.Producto ADD CHECK (precio > 50); ",
          "USE Facturación; ALTER TABLE Compras.Producto ADD CONSTRAINT CHK_Precio CHECK (precio >= 50);"
        ],
        correcta: 0
      },

        { subtitulo: "1P - Practica Funciones" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta en SQL?",
        imagen: "./IMGParcial/2.png",
        opciones: [
          "ABC",
          "ABC123",
          "Error: Longitud excedida",
          "ABC12"    
        ],
        correcta: 3
      },

      { subtitulo: "1P - Practica Funciones - CHARINDEX" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta en SQL?",
        imagen: "./IMGParcial/3.png",
        opciones: [
          "posicion = 0",
          "no devuelve valor CHARINDEX es sensible a mayúsculas y minúsculas. ",
          "posicion = 1 ",
          "posicion = 3 "    
        ],
        correcta: 2
      },

      { subtitulo: "1P - Practica Funciones - SUBSTRING" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/4.png",
        opciones: [
          "resultado = Bienven",
          "resultado = iantes!",
          "resultado = Bienv",
          "resultado = nidos",
        ],
        correcta: 3
      },

      { subtitulo: "1P - Practica Funciones - LOWER" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/5.png",
        opciones: [
          "hello, world! ",
          "Hello, World! ",
          "HELLO, WORLD!",
          "hELLO, wORLD! " 
        ],
        correcta: 0
      },

      { subtitulo: "1P - Practica Funciones - UPPER" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/6.png",
        opciones: [
          "resultado = resultado ventas anual ",
          "resultado = rESULTADO vENTAS aNUAL",
          "resultado = Resultado Ventas Anual ",
          "resultado = RESULTADO VENTAS ANUAL"
        ],
        correcta: 3
      },

      { subtitulo: "1P - Practica Funciones - REPLACE" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/7.png",
        opciones: [
          "resultado = www.unlam",
          ".resultado = edu.ar",
          "resultado = www.unsam.edu.ar",
          "resultado = www.unlam.edu.ar "
        ],
        correcta: 2
      },

      { subtitulo: "1P - Practica Funciones - right" },

      {
        texto: "1) right: ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/8.png",
        opciones: [
          "resultado = dos, estudiantes! ",
          "resultado = diantes!",
          "resultado = Bienveni",
          "resultado = Bienvenidos"
        ],
        correcta: 1
      },

      { subtitulo: "1P - Practica Funciones - left" },

      {
        texto: "1) ¿Cuál es el resultado de ejecutar la siguiente consulta?",
        imagen: "./IMGParcial/10.png",
        opciones: [
          "resultado = Bienvenidos a",
          "resultado = Bienveni",
          "resultado = L Server",
          "resultado = Bienvenidos"
        ],
        correcta: 1
      },

      { subtitulo: "1P - Practica - Creacion DBs - RESTRICCIONES" },

      {
        texto: "1) RESTRICCIONES: ¿Cuál de las siguientes afirmaciones sobre las restricciones en la tabla Empleados es incorrecta? CREATE TABLE Empleados ( empleado_id INT PRIMARY KEY, nombre VARCHAR(50) NOT NULL, salario DECIMAL(10, 2) CHECK (salario >= 1000 AND salario <= 50000), fecha_contratacion DATE NOT NULL, departamento_id INT, CONSTRAINT fk_departamento FOREIGN KEY (departamento_id) REFERENCES Departamentos(departamento_id) );",
        opciones: [
          "La columna salario permite solo valores entre 1000 y 50000 gracias a la restricción CHECK.",
          "La columna fecha_contratacion no puede tener valores nulos debido a la restricción NOT NULL.",
          "La restricción FOREIGN KEY en la columna departamento_id asegura que los empleados pertenezcan a un departamento válido.",
          "La columna nombre puede aceptar valores nulos si el campo es opcional."
        ],
        correcta: 3
      },

      { subtitulo: "1P - Practica - Indices" },

      {
        texto: "1) Existe una tabla llamada Ventas que contiene las columnas ID_Venta, Fecha_Venta, Monto_Total, y Cliente_ID. Las consultas que más se ejecutan filtran por Fecha_Venta y ordenan los resultados por Monto_Total. ¿Cuál de las siguientes sentencias es la mejor opción para mejorar el rendimiento de estas consultas?",
        opciones: [
          "CREATE INDEX idx_fecha ON Ventas (Fecha_Venta);",
          "CREATE INDEX idx_fecha_monto ON Ventas (Fecha_Venta, Monto_Total);",
          "CREATE INDEX idx_monto ON Ventas (Monto_Total);",
          "CREATE UNIQUE INDEX idx_fecha ON Ventas (Fecha_Venta);"
        ],
        correcta: 1
      },

      { subtitulo: "1P - Funciones - Teoria" },

      {
        texto: "1) Que es una funcion ?",
        opciones: [
          "Es un conjunto de Relaciones entre Tablas que operan como una unidad lógica.",
          "No tiene un nombre ya que es invocada por el acceso a la tabla de referencia, retorna un valor de salida y opcionalmente acepta parámetros de entrada.",
          "Las funciones de SQL Server no pueden ser modificadas, las funciones definidas por el usuario si.",
          "Permiten realizar operaciones específicas sobre las relaciones de las tablas.",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 2
      },

      { subtitulo: "1P - Teoria - BBDD - Indices" },

      {
        texto: "1) Los Indices:",
        opciones: [
          "Facilitan la obtención de información de un atributo.",
          "Una tabla se indexa por una relacion o varias.",
          "Sin índice, SQL Server debe recorrer secuencialmente toda la tabla para encontrar un registro.",
          "Con índice, SQL Server recorre secuencialmente toda la tabla para encontrar un registro.",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 2
      },

      { subtitulo: "1P - Teoria - BBDD - Indices - AGRUPADO - CLUSTER" },

      {
        texto: "1) Los Indices: AGRUPADO - CLUSTER",
        opciones: [
          "Los registros con distinto valor de campo se agrupan juntos.",
          "El tamaño medio de un índice agrupado es aproximadamente el 5% del tamaño de la tabla.",
          "Un índice clustered define el orden en el cual los resultados de las consultas son procesadas con los datos en la tabla.",
          "Los datos en la tabla se almacenan en el disco en el orden estrictamente inverso que el índice.",
          "Todas las respuestas son correctas. ",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 1
      },

      { subtitulo: "1P - Teoria - BBDD - Indices - NOAGRUPADO - NOCLUSTER" },

      {
        texto: "1) Los Indices: NO AGRUPADO - NO CLUSTER",
        opciones: [
          "Los datos se almacenan en un lugar diferente al del índice.",
          "Los punteros indican el lugar del disco donde los elementos indizados hacen referencia a las tabla de la Base. ",
          "Se emplea cuando se realizan el mismo tipos de búsquedas de forma frecuentemente, con campos en los que los datos no son únicos. ",
          "Una tabla puede tener hasta 256 índices no agrupados.",
          "Todas las respuestas son correctas.",
          "Ninguna de las respuesta es correcta."
        ],
        correcta: 0
      },

      { subtitulo: "1P - Practica - Combinaciones entre tablas" },

      {
        texto: "1) ¿Qué resultado devuelve la siguiente consulta SQL?",
        imagen: "./IMGParcial/11.png",
        opciones: [
          "Devuelve todas las ciudades, incluyendo los duplicados.",
          "Devuelve las ciudades únicas, eliminando los duplicados. ",
          "Devuelve todas las ciudades que aparecen más de una vez en la tabla. ",
          "Devuelve solo las ciudades que están asociadas con más de un cliente. "
        ],
        correcta: 1
      },

      { subtitulo: "1P - Practica - SQL Inversa" },

      {
        texto: "1) En base a la consulta SQL, determinar que enunciado dio origen a la consulta siguiente:",
        imagen: "./IMGParcial/12.png",
        opciones: [
          "Da la cantidad del número de fechas distintas, el número de métodos distintos utilizados, y la fecha más reciente de solicitudes realizadas por cada dirección IP en la tabla Page que tiene coincidencias en la tabla Request.",
          "Obtener el número de fechas distintas, el número de métodos distintos utilizados, y la fecha más reciente de solicitudes realizadas por cada dirección IP en la tabla Page que tiene coincidencias en la tabla Request.",
          "Obtener la lista de todas las solicitudes realizadas por cada dirección IP, incluyendo la fecha de cada solicitud y el tipo de método utilizado.",
          "Extraer la dirección IP y la lista completa de fechas y métodos utilizados en cada solicitud para cada dirección IP. "
        ],
        correcta: 1
      },

      { subtitulo: "1P - Teoria - BBDD - Vistas" },

      {
        texto: "1) Vista:",
        opciones: [
          "Permiten el acceso a todos los datos y dejando disponibles los datos que no intervienen en el resto de la información de la consulta que genera la vista.",
          "Permiten operar con los datos de una vista como si se tratara de una tabla, sin poder modificar tales datos.",
          "No se pueden gestionar permisos a un usuario para que solamente pueda acceder a los datos a través de vistas. ",
          "No es necesario concederle permisos para acceder a ciertos campos, así se protegen las tablas base de cambios en su estructura.",
          "Todas las respuestas son correctas. ",
          "Ninguna de las respuestas es correcta"
        ],
        correcta: 3
      },

      
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

    if (pregunta.imagen) {
      html += `<div><img src="${pregunta.imagen}" alt="Imagen de pregunta" style="max-width: 100%; margin: 10px 0;" /></div>`;
    }

    pregunta.opciones.forEach((opcion, j) => {
      html += `
        <div class="option">
          <input type="radio" name="preg${index}" id="p${index}o${j}" value="${j}">
          <label for="p${index}o${j}">${opcion}</label>
        </div>`;
    });

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
  let index = 0; 

  preguntas.forEach((pregunta) => {
    if (pregunta.subtitulo) return; 

    const seleccionada = document.querySelector(`input[name="preg${index}"]:checked`);
    const opciones = document.getElementsByName(`preg${index}`);

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
