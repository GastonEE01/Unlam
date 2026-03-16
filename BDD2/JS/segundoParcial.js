window.temas = window.temas || {};
window.temas.segundoParcialMio = {
    titulo: "Segundo parcial ",
    preguntas: [
      { subtitulo: "2P - Variables SQL" },
      {
        texto: "1) Variables SQL:",
        opciones: [
          "Permiten almacenar un valor y recuperarlo más adelante para emplearlos en otras sentencias.",
          "Son especícas de cada conexión y son liberadas automáticamente al abandonar la conexión.",
          "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre puede contener cualquier carácter.",
          "Una variable debe ser declarada antes de usarse.",
          "Todas las respuestas ANTERIORES son correctas. ",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 4
      },

      { subtitulo: "2P - Variables SQL - Caracteristicas" },
      {
        texto: "1) Variables SQL - Caracteristicas:",
        opciones: [
          "Puede declarar varias variables en una misma sentencia.",
          "No existen variables globales en SQL Server.",
          "Una variable declarada existe dentro del entorno en que se declara.",
          "Una variable a la cual no se le ha asignado un valor contiene \"null\".",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 4
      },

      { subtitulo: "2P - Procedimientos Almacenados" },
      {
        texto: "1) Procedimientos Almacenados:",
        opciones: [
          "Es un grupo de sentencias T-SQL compiladas dentro de un plan de ejecución.",
          "Son un método de encapsular tareas repetitivas que no involucran variables denidas por el motor de SQL para cálculos intermedios.",
          "Son variables de control de ujo de ejecución, para la implementación de bloques condicionales o repetitivos.",
          "Son querys y variables que encapsulan código para su reutilización.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 0
      },

      { subtitulo: "2P - Procedimientos Almacenados - Caracteristicas" },
      {
        texto: "1) Procedimientos Almacenados - Caracteristicas:",
        opciones: [
          "No aceptan parámetros de entrada.",
          "Devuelven un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
          "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
          "No pueden devolver valores en la forma de parámetros de salida.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

      {
        texto: "2) Procedimientos Almacenados - Caracteristicas:",
        opciones: [
          "Aceptan parámetros de entrada.",
          "Devuelven mas de un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
          "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
          "No pueden devolver valores en la forma de parámetros de salida.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 0
      },

      { subtitulo: "2P - Procedimientos Almacenados - Ventajas" },
      {
        texto: "1) Procedimientos Almacenados - Ventajas:",
        opciones: [
          "Encapsulan la lógica de negocio y crean piezas de código reutilizable por la aplicación.",
          "Todas las aplicaciones pueden usar los mismos procedimientos para asegurar un acceso consistente a los datos.",
          "Evitan la exposición de los detalles de las tablas al usuario, haciendo innecesario el acceso a las tablas directa, lo que incrementa sensiblemente la seguridad.",
          "Puede otorgarse permisos de ejecución a un procedimiento a un usuario aun cuando no tenga permisos sobre las tablas o vistas usadas por el procedimiento.",
          "Mas de una respuesta de las ANTERIORES es correcta.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 5
      },

      { subtitulo: "2P - Procedimientos Almacenados - Parametros" },
      {
        texto: "1) Procedimientos Almacenados - Parametros:",
        opciones: [
          "Cuando se denen parámetros de entrada y salida, estos siempre van precedidos por el signo @, seguido del nombre del parámetro y luego una designación del tipo de dato.",
          "Los parámetros de salida deben incluir la palabra clave OUTPUT para diferenciar de los de entrada.",
          "Los Procedimientos son más exibles cuando le incluimos parámetros en su denición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
          "Los parámetros de entrada permiten pasar información al SP. Estos valores son usados como variables locales dentro del procedimiento almacenado.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 4
      },

      { subtitulo: "2P - Tipos de funciones " },
      {
        texto: "1) Tipos de funciones - Funciones Escalares:",
        opciones: [
          "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
          "Este tipo de funciones es sintacticamente similar a funciones del tipo COUNT(), MAX().",
          "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
          "Es similar a una vista ofreciendo mas exibilidad.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

      {
        texto: "2) Tipos de funciones - Funciones Escalares:",
        opciones: [
          "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
          "Devuelven un solo tipo de valor denido en la clausula \"Returns\".",
          "Es similar a un procedimiento, salvo que puede referenciarse como si se tratara de una tabla.",
          "Es similar a una vista ofreciendo mas exibilidad.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

      { subtitulo: "2P - Practica - Procedimientos y Funciones" },
      {
        texto: "1) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
        imagen: "./IMGParcial/13.png",
        opciones: [
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, exceptuando que el Modelo ya exista en la tabla. En caso de que exista el Celular a cargar, el procedimiento debe eliminar el celular existente y luego insertar el nuevo. Generar el manejo de error si ocurre algún problema de inserción.",
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, excepto que el Modelo ya exista en la tabla. En caso de que exista el Celular a cargar, generar el manejo de error correspondiente.",
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, permitiendo que se inserten varios modelos iguales siempre que tengan diferentes marcas. En caso de que el modelo ya exista con la misma marca, se debe actualizar la información del celular existente. Generar el manejo de error.",
          "Confeccionar la creación de tabla y el SP que permite insertar nuevos registros en la tabla Celulares. Este procedimiento recibe como parámetros la marca, modelo, memoria y procesador del celular y realiza la inserción directamente en la tabla. Al establecer SET NOCOUNT ON, se evita el conteo de las afectadas, lo que puede mejorar el rendimiento en ciertas situaciones.",
          "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
        ],
        correcta: 3
      },

      {
        texto: "2) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
        imagen: "./IMGParcial/14.png",
        opciones: [
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, exceptuando que el Modelo ya exista en la tabla. En caso de que exista el Celular a cargar, el procedimiento debe eliminar el celular existente y luego insertar el nuevo. Generar el manejo de error si ocurre algún problema de inserción.",
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, excepto que el Modelo ya exista en la tabla. En caso de que exista el Celular a cargar, generar el manejo de error correspondiente.",
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en una tabla con el nombre dbo.Celulares, permitiendo que se inserten varios modelos iguales siempre que tengan diferentes marcas. En caso de que el modelo ya exista con la misma marca, se debe actualizar la información del celular existente. Generar el manejo de error.",
          "Confeccionar la creación de tabla y el SP que permita insertar Celulares (Marca, Modelo, Memoria,Procesador) en dbo.Celulares. El procedimiento debe permitir la inserción de un modelo existente solo si la memoria es mayor a 64 GB. Si la memoria es igual o menor a 64 GB, debe devolver un error. Además, si no se especica la memoria, debe asignarse automáticamente 64 GB.",
          "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto."
        ],
        correcta: 4
      },

      {
        texto: "3) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
        imagen: "./IMGParcial/15.png",
        opciones: [
          "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.alumnos. Si ya existe un registro con la misma persona, se debe actualizar los campos nuevos del alumno, y si los valores ingresados son identicos a los del alumno ya cargado, se debe generar el error correspondiente y manejarlo.",
          "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.estudiantes. Si ya existe un registro con el mismo DNI, se debe actualizar el nombre, teléfono y correo electrónico. En caso de intentar insertar una persona con un DNI que ya existe, pero con un nombre distinto, debe actualizar también el nombre sin generar ningún error.",
          "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.personas. Si ya existe un registro con el mismo DNI y el mismo nombre_completo, debe actualizar únicamente el campo email (sin tocar el celular). Si el DNI existe pero el nombre_completo es diferente, debe permitir insertar un nuevo registro duplicado con el mismo DNI y el nuevo nombre_completo.",
          "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.alumnos. Si ya existe un registro con la misma persona, se debe actualizar solo los campos nuevos del celular y email, y si el valor ingresado es un DNI igual y nombre-apellido diferentes a uno ya cargado se debe generar el error correspondiente y manejarlo.",
          "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
        ],
        correcta: 4
      },

      { subtitulo: "2P - Practica - Triggers" },
      {
        texto: "1) ¿Cuál es el comportamiento del siguiente trigger cuando se elimina un registro en la tabla Clientes?",
        imagen: "./IMGParcial/16.png",
        opciones: [
          "El trigger inserta todos los clientes eliminados en la tabla Cliente_Historico, sin importar si son VIP o no.",
          "El trigger previene que los clientes de tipo VIP sean eliminados.",
          "El trigger inserta los clientes eliminados de tipo VIP en la tabla Cliente_Historico y los clientes no VIP en la tabla Cliente_Log.",
          "El trigger no registra nada cuando se elimina un cliente de tipo VIP.",
          "Ninguno de los enunciados ANTERIORES es correcto."
        ],
        correcta: 2
      },

      {
        texto: "2) ¿Cuál es el resultado de la siguiente instrucción SQL para crear un trigger AFTER INSERT en la tabla Ventas?",
        imagen: "./IMGParcial/17.png",
        opciones: [
          "El trigger impide que se inserten registros con un monto superior a 10,000.",
          "El trigger calcula el monto total y actualiza los registros en la tabla Ventas.",
          "El trigger ejecuta la acción después de que se inserta un nuevo registro, y si el monto total de la venta es superior a 10,000, muestra un mensaje de alerta.",
          "El trigger muestra el monto total de la venta, independientemente de su valor.",
          "Ninguno de los enunciados ANTERIORES es correcto.",
        ],
        correcta: 2
      },

      { subtitulo: "2P - Seguridad - General SQLServer" },
      {
        texto: "1) Para el acceso a una base de datos Datos SQL Server, indicar los pasos correctos:",
        opciones: [
          "Crear alguno de los dos tipos de inicio de sesión: Inicio de Sesión Windows (usuarios o grupos) o Inicios de Sesión SQL Server (que solo podrán crearse en Autenticación Mixta).",
          "La cadena de conexión especica una autenticación a nivel de Instancia de SQL Server Express.",
          "Una vez se ha autenticado el inicio de sesión, se comprueba si ese inicio de sesión tiene acceso a la base de datos a la que se pretende acceder.",
          "SQL Server mantiene una asociación entre Inicio de Sesión a nivel de Instancia y Usuario a nivel de Base de Datos.",
          "Todas las respuestas ANTERIORES son correcta. ",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 4
      },

      {
        texto: "2) Entidades de seguridad y seguridad de objetos de base de datos:",
        opciones: [
          "El ámbito de inuencia de una entidad de seguridad no depende del ámbito de su denición: Windows,servidor o base de datos; y de si la entidad de seguridad es indivisible o es una colección. ",
          "Un Inicio de sesión de Windows es un ejemplo de entidad de seguridad divisible y un Grupo de Windows es un ejemplo de una del tipo colección.",
          "Toda entidad de seguridad tiene un identicador de seguridad (PID).",
          "Este tema se aplica a todas las versiones de SQL Server, y no hay algunas restricciones en las entidades de seguridad a nivel de servidor de SQL Database.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 5
      },

      { subtitulo: "2P - Seguridad - Usuarios y Esquemas" },
      {
        texto: "1) Inicio de sesión sa:",
        opciones: [
          "La cuenta sa se crea de forma predeterminada cuando se instala una base de datos.",
          "La base de datos predeterminada de la cuenta sa es msdb.",
          "El inicio de sesión sa es miembro del rol jo de nivel de servidor sysadmin. ",
          "Este inicio de sesión, la cuenta sa tiene todos los permisos en el servidor y puede limitarse.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 2
      },

      { subtitulo: "2P - Seguridad - ROLES" },
      {
        texto: "1) Rol público de base de datos y de servidor:",
        opciones: [
          "Cada inicio de sesión pertenece al rol jo de servidor public y cada usuario de base de datos pertenece al rol de base de datos master.",
          "Cuando a un usuario o inicio de sesión se le han concedido permisos concretos para un elemento protegible, hereda los permisos para ese elemento concedidos a public.",
          "El rol jo de servidor public y el de base de datos public pueden quitarse.",
          "Hay muchos de los permisos que se asignan a los roles public de forma predeterminada. La mayoría de estos permisos no son necesarios para realizar operaciones rutinarias en la base de datos; el tipo de tareas que los dba deben poder hacer.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 5
      },

      { subtitulo: "2P - Seguridad - Elementos protegibles" },
      {
        texto: "1) Elementos protegibles => Ámbito protegible: esquema OBJETOS:",
        opciones: [
          "Esquemas XML, Agregada, Función, Ver, Tabla externa.",
          "Agregada, Función, Tipo, Tabla externa.",
          "Procedimiento, Cola, Synonym, Tabla. ",
          "Procedimiento, Tipo, Cola, Synonym, Tabla.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 2
      },

      {
        texto: "2) Elementos protegibles => Ámbito protegible: esquema OBJETOS:",
        opciones: [
          "Esquemas XML, Agregada, Función, Ver, Tabla externa.",
          "Agregada, Función, Ver, Tabla externa. ",
          "Procedimiento, Tipo, Cola, Synonym, Usuario.",
          "Procedimiento, Tipo, Cola, Synonym, Tabla.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

      { subtitulo: "2P - Seguridad - Jerarquía de Cifrado" },
      {
        texto: "1) Jerarquía de cifrado => Conceptos:",
        opciones: [
          "Para obtener el máximo rendimiento, cifre los datos utilizando claves asimétricas en lugar de certicados o claves simétricas.",
          "Las claves maestras de base de datos se protegen mediante la clave asimétricas maestra de servicio.",
          "El módulo de Administración extensible de claves (EKM) mantiene las claves asimétricas o simétricas fuera de SQL Server.",
          "La clave maestra de servicio y todas las claves maestras de base de datos son claves simétricas.",
          "Todas las respuestas ANTERIORES son correcta.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 3
      },

      { subtitulo: "P - Teoria - Triggers" },
      {
        texto: "1) Triggers: Nivel de servidor",
        opciones: [
          "Responden a los eventos que son propios de la base de datos y no a los que están en el alcance de la instancia.",
          "A esta categoría de eventos pertenecen entre otros los de CREATE LOGIN o CREATE/ALTER/DROP Database y los relativos por ejemplo a los nuevos ENDPOINTS.",
          "Están muy alineadas con las de los que son a nivel de Instancia e incluso la información.",
          "La Clausula ON ALL SERVER dentro de una instruccion CREATE TRIGGER no afectaria a todo el servidor sino a la Base de Datos especicada.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

      {
        texto: "2) Triggers: INSTEAD OF",
        opciones: [
          "Pueden usarse como mecanismo para realizar operaciones no controladas en tablas.",
          "La creacion inadecuada pueden causar daño a la base de datos y que la misma se comporte de manera inadecuadamente.",
          "Se disparan en lugar de la operación que los produce.",
          "Una operación de borrado de registros con la instrucción delete sobre una tabla que tiene un TRIGGER de tipo INSTEAD OF, cuando detecta esta operación invoca al TRIGGER que es el responsable de invocar al procedimiento sobre los registros afectados.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 2
      },

      {
        texto: "3) Triggers: Nivel de base de datos",
        opciones: [
          "Responden a la necesidad de garantizar la integridad y disponibilidad de los datos dentro de nuestras tablas de usuario.",
          "No ayudan a mantener las reglas de diseño de nuestra base de datos.",
          "Nos proporcionarán mecanismos para garantizar que nuestra base de datos está diseñada e implementada de acuerdo a los estándares de la instalacion por defecto.",
          "Tienen dos alcances diferenciados, a nivel de Base de Datos y a nivel Instancia.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 1
      },

       { subtitulo: "2P - Transacciones y Bloqueos" },
      {
        texto: "1) Características ACID: => Atomicidad (Atomicity)",
        opciones: [
          "Asegura que las transacciones concurrentes se ejecuten de manera que no afecten entre sí.",
          "Garantiza que los cambios realizados por la transacción se guardan de forma que no se perderán,garantizando la integridad de los datos.",
          "Esta propiedad asegura que una transacción se ejecute de manera completa o no se ejecute en absoluto.",
          "Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 2
      },

      {
        texto: "2) Transacciones Implícitas:",
        opciones: [
          "Inicia manualmente una nueva transacción después de conrmar o revertir la transacción anterior.",
          "Se deben realizar las acciones necesarias para delinear el inicio de una transacción.",
          "Debe validar la totalidad de la ejecución para que conrmar o revertir cada transacción.",
          "Genera una cadena fraccionada de transacciones.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta. "
        ],
        correcta: 5
      },

       { subtitulo: "2P - Teoria - Cursores" },
      {
        texto: "1) Características de los cursores - instrucciones:",
        opciones: [
          "DECLARE => dene el comportamiento de desplazamiento y la consulta utilizada para generar el conjunto de resultados sobre el que opera el cursor.",
          "OPEN => llena el conjunto de resultados.",
          "FETCH => devuelve una la del conjunto de resultados.",
          "CLOSE => libera el conjunto de resultados actual asociado al cursor.",
          "Todas las respuestas ANTERIORES son correctas. ",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta."
        ],
        correcta: 4
      },

      {
        texto: "2) Características de los cursores:",
        opciones: [
          "Nos permite movernos por los registros de una consulta como un unico bloque para analizar el resultado todo junto.",
          "Nos permite recorrer los registros del resultado obtenido de una sentencia WHERE.",
          "Se usa para realizar una acción si el código identicador de un registro no es autonumérico.",
          "Su uso permiten procesar el conjunto de resultados de un sentencia tabla por tabla.",
          "Todas las respuestas ANTERIORES son correctas.",
          "Ninguna de TODAS las respuestas ANTERIORES es correcta. "
        ],
        correcta: 5
      },

       { subtitulo: "2P - Practica - Cursores" },
      {
        texto: "1) ¿Qué sentencia es necesaria para abrir un cursor en SQL?",
        opciones: [
          "OPEN nombre_del_cursor",
          "ACTIVATE nombre_del_cursor",
          "START nombre_del_cursor",
          "EXECUTE nombre_del_cursor",
          "Ninguno de los enunciados ANTERIORES es correcto."
        ],
        correcta: 0
      },

      {
        texto: "2) ¿Cuál es la sentencia correcta para liberar la memoria de un cursor después de utilizarlo?",
        opciones: [
          "FREE nombre_del_cursor",
          "CLOSE nombre_del_cursor",
          "SHUTDOWN nombre_del_cursor",
          "DEALLOCATE nombre_del_cursor",
          "Ninguna de las opciones ANTERIORES es correcta.",
        ],
        correcta: 3
      },

      
    ]
};
