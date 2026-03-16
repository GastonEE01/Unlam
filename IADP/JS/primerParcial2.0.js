window.temas = window.temas || {};
window.temas["primerParcial2.0"] = {
    titulo: "Primer parcial 2.0",
    preguntas: [
      //{ subtitulo: "2P - Variables SQL" },
         {
        texto: "1)Defina \"Proceso\" como se compone,que objetivo persigue,describa brevemente algun modo de proceso conocido",
        tipo: "texto",
        posiblesRespuestas: "RTA: El Proceso se define, en términos generales, como la acción de proceder o el método de ejecutar ciertas cosas. En Ingeniería de Software, define el marco de trabajo para el conjunto de actividades del desarrollo, abarcándolo en su totalidad. El objetivo principal del proceso software es establecer un esquema sistemático para planificar, organizar, presupuestar y dirigir la construcción del software, buscando asegurar la calidad del producto resultante. Se compone de cuatro procesos principales: selección del modelo de ciclo de vida, gestión del proyecto, procesos orientados al desarrollo y procesos integrales. Un modo conocido es el Modelo Cascada (o lineal secuencial), que organiza las etapas de desarrollo (como Análisis de Requisitos, Diseño y Codificación) en una secuencia lógica donde una fase debe completarse antes de dar comienzo a la siguiente."
      },
      {
        texto: '2) Explique brevemente y describa las principales diferencias de los MCV Cascada, Incremental y Evolutivo.',
        tipo: "texto" ,
        posiblesRespuestas:
        "RTA: El Modelo Cascada (Lineal Secuencial) es un enfoque rígido y secuencial en el que una etapa debe completarse para pasar a la siguiente, asumiendo que los requisitos deben estar totalmente definidos y congelados al comienzo, lo que resulta en una entrega funcional tardía. En contraste, el Modelo Incremental entrega el producto en incrementos operacionales que contienen funcionalidades cerradas, combinando elementos de cascada con prototipado, permitiendo iniciar sin tener todos los requisitos detallados. Los Modelos Evolutivos (como el Iterativo o el Espiral) asumen que los requisitos son inestables o inciertos, permitiendo que el producto evolucione en el tiempo mediante un proceso de refinamiento y mejora continuos."
      },
    
      {  
        texto: "3)Las diferencias entre medición, medida, métrica e indicador son las siguientes:",
        opciones: [
          "Medición es el acto de determinar una medida, la cual mediante la aplicación de algún cálculo se transforma en una métrica que proporciona una indicación cuantitativa de algún atributo y un conjunto de métricas nos da un indicador.",
          "Medición es el acto de medir del cual se obtiene una métrica, la cual mediante la aplicación de algún cálculo se transforma en una medida y un conjunto de medidas nos da un indicador.",
          "Medición es el acto de determinar una metrica, la cual mediante la aplicacion de algun calculo se transforma en una medida que proporciona una indicacion cuantitativa de algun atributo y un conjunto de metricas y medidas nos da un indicador.",
          "Medición es el acto de determinar una medida, la cual mediante el análisis y la estimación se transforma en una métrica que proporciona una indicación cualitativa de algún atributo y un conjunto de métricas nos da un indicador.",
          "Medición es el acto de determinar una medida, que puede ser directa o indirecta, la cual mediante la aplicación de algun proceso de mejora se transforma en una metrica que proporciona una indicacion cualitativa de algun atributo y un conjunto de metricas nos da un indicador.",
          "Ninguna de las anteriores es correcta."
        ],
        correcta: 2
      },

      {
        texto: "4)Las razones por las que medimos y posteriormente utilizamos métricas son:",
        opciones: [
          "Caracterizar, Evaluar, Predecir y Mejorar.",
          "Estimar, Recopilar, Evaluar y Mejorar.",
          "Predecir, Evaluar, Supervisar y Mejorar.",
          "Identificar, Analizar, Medir y Mejorar.",
          "Cuantificar, Analizar, Evaluar y Mejorar.",
          "Ninguna de las anteriores es correcta."
        ],
        correcta: 0
      },
      
      {
        texto: "5)La planificación puede llevarse a cabo con:",
        opciones: [
          "Fecha estimada o fecha resultante.",
          "Fecha prefijada o fecha predecible.",
          "Fecha resultante o fecha estipulada.",
          "Fecha Análoga o fecha heurística.",
          "Fecha resultante o fecha estimada por juicio experto.",
          "Todas las anteriores son correctas.",
          "Ninguna de las anteriores es correcta."
          
        ],
        correcta: 2
      },

      {
        texto: "6)Seleccione la opción que más se acerque a la definición de “Reunión de Planificación” (Planning Meeting):",
        opciones: [
          "Se realiza al inicio del proyecto y se estiman todos los PBI (Historial de Usuario) para luego distribuirlos en los sprints.",
          "Se realiza al inicio de cada Sprint donde se define qué se va a construir y cómo, y se define el incremento.",
          "El Scrum Master selecciona que probables PBI (Historiales de Usuario) se podrían construir y valida con el Equipo.",
          "El Product Owner selecciona que probables PBI (Historias de Usuario) se podrían construir y valida con el Equipo.",
          "Todas las anteriores son correctas.",
          "Ninguna de las anteriores es correcta."
        ],
        correcta: 1
      },

      {
        texto: "7)Marque cuales son Artefactos de Scrum:",
        opciones: [
          "Product Backlog.",
          "Development Backlog Item.",
          "Sprint Planning.",
          "Rtrospective Meeting.",
          "Sprint Backlog.",
          "Ninguna de las anteriores es correcta."
        ],
        correcta: [0,4]
      },

      {
        texto: "8)La diferencia de Fast Tracking con Crashing es:",
        opciones: [
          "Fast Tracking es acelerar los tiempos planificados de desarrollo, mientras que Crashing es comprimir las tareas acortando su duración lo más posible.",
          "Fast Tracking es agregar más recursos al camino crítico para reducir su duración, mientras que Crashing es paralelizar las tareas del camino crítico a fin de acelerar los tiempos del proyecto.",
          "Fast Tracking implica la paralelización de tareas del camino crítico y Crashing es ajustar o incrementar los recursos mientras se comprimen los tiempos planificados siempre manteniendo el alcance original.",
          "Fast Tracking y Crashing son lo mismo depende de cómo se llama una u otra bibliografía",
          "Fast Tracking es agregar mas recursos para permitir incrementar la hogura a fin de no afectar la fecha de finalizacion del proyecto, mientras que Crashing es paralelizar las tareas a fin de acelerar los tiempos del proyecto y reducir esa fecha.",
          "Ninguna de las anteriores es correcta."
        ],
        correcta: 2
      },

      {
        texto: "9)Seleccione la opción más adecuada. MS Project me permite asignar Calendarios a:",
        opciones: [
          "Solamente por Proyecto",
          "Por proyecto y por Recurso",
          "Solamente por Recurso",
          "Ninguna de las anteriores es correcta"
        ],
        correcta: 1
      },

      {
        texto: "10) Según el siguiente diagrama de secuencia de actividades, responda las siguientes preguntas: (La duración se encuentra sobre la tarea y está expresada en días)",
        tipo: "esquemaInteractivo",
        imagen: "./IMG/Pregunta 10.jpg",
        subpreguntas: [
          { texto: "a. ¿Cuál es la holgura de la tarea D?", tipo: "texto" },
          { texto: "b. ¿Cuál es la holgura de la tarea E?", tipo: "texto" },
          { texto: "c. ¿Cuál es la holgura de la tarea G?", tipo: "texto" },
          { texto: "d. ¿Cuál es la holgura de la tarea K?", tipo: "texto" },
          { texto: "e. ¿Cómo se vería afectado el camino crítico si la actividad G se retrasa 1 día?", tipo: "texto" },
          { texto: "f. ¿Cómo se vería afectado el camino crítico si la actividad E se retrasa 3 días?", tipo: "texto" }
        ]
      }
    ]
};
