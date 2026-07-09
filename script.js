const trivia_test = [
    { 
        pregunta: "¿Cuál es la capital de Uruguay?", 
        imgPregunta: "img/uruguay-pregunta.svg", // Ejemplo de ruta local
        respuesta: "Montevideo", 
        imgRespuesta: "img/uruguay-respuesta.svg" 
    },
    { 
        pregunta: "¿Qué planeta es conocido como el Planeta Rojo?", 
        imgPregunta: "img/marte-pregunta.svg", 
        respuesta: "Marte", 
        imgRespuesta: "img/marte-respuesta.svg" 
    },
    { 
        pregunta: "¿Cuántos minutos tiene una hora?", 
        imgPregunta: "img/hora-pregunta.svg", 
        respuesta: "60 minutos", 
        imgRespuesta: "img/hora-respuesta.svg" 
    },
    { 
        pregunta: "¿Cuál es el río más largo del mundo?", 
        imgPregunta: "img/rio-pregunta.svg", 
        respuesta: "El río Amazonas", 
        imgRespuesta: "img/rio-respuesta.svg" 
    },
    { 
        pregunta: "¿Qué año llegó el ser humano a la Luna?", 
        imgPregunta: "img/luna-pregunta.svg", 
        respuesta: "En 1969 (Apolo 11)", 
        imgRespuesta: "img/luna-respuesta.svg" 
    }

];


const trivia = [
   // --- HISTORIA (4 preguntas) ---
    { 
        pregunta: "¿Qué civilización antigua construyó el Coliseo y expandió su imperio por todo el Mediterráneo?", 
        imgPregunta: "", 
        respuesta: "La civilización Romana", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué período histórico comenzó tras la caída del Imperio Romano de Occidente en el año 476?", 
        imgPregunta: "", 
        respuesta: "La Edad Media", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué importante invento de Johannes Gutenberg en el siglo XV permitió duplicar libros de forma masiva?", 
        imgPregunta: "", 
        respuesta: "La imprenta", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué hito histórico de 1789 marcó el fin de la monarquía absoluta en Francia bajo el lema 'Libertad, Igualdad y Fraternidad'?", 
        imgPregunta: "", 
        respuesta: "La Revolución Francesa", 
        imgRespuesta: "" 
    },

    // --- GEOGRAFÍA (4 preguntas) ---
    { 
        pregunta: "¿Cuál es la línea imaginaria que divide a la Tierra en los hemisferios Norte y Sur?", 
        imgPregunta: "", 
        respuesta: "El Ecuador", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "En términos de población, ¿cuál es el continente más poblado del mundo?", 
        imgPregunta: "", 
        respuesta: "Asia", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué gran cordillera montañosa se extiende a lo largo de la costa occidental de América del Sur?", 
        imgPregunta: "", 
        respuesta: "La Cordillera de los Andes", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se llama el proceso por el cual el suelo fértil pierde sus propiedades debido a la sequía o la deforestación?", 
        imgPregunta: "", 
        respuesta: "Desertificación", 
        imgRespuesta: "" 
    },

    // --- BIOLOGÍA (4 preguntas) ---
    { 
        pregunta: "¿Cómo se llaman las células que no tienen un núcleo definido y cuyo material genético está disperso?", 
        imgPregunta: "", 
        respuesta: "Células procariotas", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué proceso realizan las plantas para transformar la luz solar en energía química?", 
        imgPregunta: "", 
        respuesta: "La fotosíntesis", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué molécula con estructura de doble hélice contiene las instrucciones genéticas de los seres vivos?", 
        imgPregunta: "", 
        respuesta: "El ADN", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se denomina a los organismos que producen su propio alimento, como las plantas y las algas?", 
        imgPregunta: "", 
        respuesta: "Organismos autótrofos", 
        imgRespuesta: "" 
    },

    // --- GEOLOGÍA (4 preguntas) ---
    { 
        pregunta: "¿Cuál es la capa más interna y caliente de la Tierra, compuesta principalmente de hierro y níquel?", 
        imgPregunta: "", 
        respuesta: "El núcleo", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se llama el supercontinente que existió hace millones de años antes de dividirse en los actuales?", 
        imgPregunta: "", 
        respuesta: "Pangea", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué tipo de rocas se forman a partir del enfriamiento y solidificación del magma o la lava?", 
        imgPregunta: "", 
        respuesta: "Rocas ígneas (o magmáticas)", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se llaman los fragmentos de la litosfera que se mueven sobre el manto terrestre y causan terremotos?", 
        imgPregunta: "", 
        respuesta: "Placas tectónicas", 
        imgRespuesta: "" 
    },

    // --- ESPACIO (4 preguntas) ---
    { 
        pregunta: "¿Cuál es el planeta más grande de nuestro sistema solar?", 
        imgPregunta: "", 
        respuesta: "Júpiter", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué fuerza invisible mantiene a los planetas orbitando alrededor del Sol?", 
        imgPregunta: "", 
        respuesta: "La fuerza de gravedad", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿A qué planeta del sistema solar se le conoce popularmente como el 'lucero del alba' debido a su gran brillo?", 
        imgPregunta: "", 
        respuesta: "Venus", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se llama la gigantesca agrupación de estrellas, gas y polvo a la que pertenece nuestro sistema solar?", 
        imgPregunta: "", 
        respuesta: "La Vía Láctea", 
        imgRespuesta: "" 
    },

    // --- TECNOLOGÍA (4 preguntas) ---
    { 
        pregunta: "¿Qué componente de la computadora es considerado el 'cerebro' encargado de procesar todas las instrucciones?", 
        imgPregunta: "", 
        respuesta: "La CPU (Unidad Central de Procesamiento)", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Cómo se llama el sistema de redes interconectadas a nivel mundial que permite compartir información?", 
        imgPregunta: "", 
        respuesta: "Internet", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué componente de hardware se utiliza para almacenar los datos de manera temporal mientras los programas se ejecutan?", 
        imgPregunta: "", 
        respuesta: "Memoria RAM", 
        imgRespuesta: "" 
    },
    { 
        pregunta: "¿Qué tipo de periférico es una impresora: de entrada, de salida o de almacenamiento?", 
        imgPregunta: "", 
        respuesta: "Periférico de salida", 
        imgRespuesta: "" 
    }
];

// --- CONFIGURACIÓN DE IMÁGENES POR DEFECTO ---
const IMG_PREGUNTA_DEFECTO = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400"; 
const IMG_RESPUESTA_DEFECTO = "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400"; 

let indiceActual = 0;
const tarjeta = document.getElementById('tarjeta');
const textoPregunta = document.getElementById('texto-pregunta');
const textoRespuesta = document.getElementById('texto-respuesta');

// Nuevas referencias para controlar las etiquetas <img> del HTML
const imgPregunta = document.getElementById('img-pregunta');
const imgRespuesta = document.getElementById('img-respuesta');

// Tiempos en milisegundos (ajustados a 5s para dar tiempo a ver la imagen de la pregunta)
const TIEMPO_MOSTRAR_PREGUNTA = 5000; 
const TIEMPO_MOSTRAR_RESPUESTA = 3000; 

// Mezclar las preguntas al cargar el juego por primera vez
trivia.sort(() => Math.random() - 0.5);

function iniciarTrivia() {
    // Volver a empezar y reorganizar cuando se terminen las 15 tarjetas
    if (indiceActual >= trivia.length) {
        indiceActual = 0; 
        trivia.sort(() => Math.random() - 0.5); 
    }

    const tarjetaActual = trivia[indiceActual];

    // 1. Cargar datos del Frente (Pregunta)
    textoPregunta.textContent = tarjetaActual.pregunta;
    // Si la propiedad existe y no está vacía usa esa, de lo contrario pone la genérica
    imgPregunta.src = tarjetaActual.imgPregunta ? tarjetaActual.imgPregunta : IMG_PREGUNTA_DEFECTO;

    // 2. Cargar datos del Dorso (Respuesta)
    textoRespuesta.textContent = tarjetaActual.respuesta;
    imgRespuesta.src = tarjetaActual.imgRespuesta ? tarjetaActual.imgRespuesta : IMG_RESPUESTA_DEFECTO;

    // Asegurar que la tarjeta inicie de frente
    tarjeta.classList.remove('volteada');

    // 3. Esperar unos segundos y girar la tarjeta
    setTimeout(() => {
        tarjeta.classList.add('volteada');

        // 4. Esperar el tiempo de la respuesta y pasar a la siguiente tarjeta
        setTimeout(() => {
            indiceActual++;
            iniciarTrivia(); 
        }, TIEMPO_MOSTRAR_RESPUESTA);

    }, TIEMPO_MOSTRAR_PREGUNTA);
}

// Arrancar el ciclo al cargar la página
document.addEventListener('DOMContentLoaded', iniciarTrivia);