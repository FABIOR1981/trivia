// 1. IMPORTAR LAS PREGUNTAS DESDE EL OTRO ARCHIVO
import { trivia } from './trivias.js';

// Configuración del juego
const REINICIAR_AL_TERMINAR = false; // true = vuelve a empezar en bucle / false = se detiene

// --- CONFIGURACIÓN DE IMÁGENES POR DEFECTO ---
const IMG_PREGUNTA_DEFECTO = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400"; 
const IMG_RESPUESTA_DEFECTO = "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400"; 

// 2. CONFIGURACIÓN DE IMÁGENES FIJAS POR ÁREA TEMÁTICA
const IMAGENES_POR_AREA = {
    "Historia": {
        pregunta: "img/tarjetas/historia-pregunta.webp",
        respuesta: "img/tarjetas/historia-respuesta.webp"
    },
    "Geografía": {
        pregunta: "img/tarjetas/geografia-pregunta.webp",
        respuesta: "img/tarjetas/geografia-respuesta.webp"
    },
    "Biología": {
        pregunta: "img/tarjetas/biologia-pregunta.webp",
        respuesta: "img/tarjetas/biologia-respuesta.webp"
    },
    "Geología": {
        pregunta: "img/tarjetas/geologia-pregunta.webp",
        respuesta: "img/tarjetas/geologia-respuesta.webp"
    },
    "Espacio": {
        pregunta: "img/tarjetas/espacio-pregunta.webp",
        respuesta: "img/tarjetas/espacio-respuesta.webp"
    },
    "Tecnología": {
        pregunta: "img/tarjetas/tecnologia-pregunta.webp",
        respuesta: "img/tarjetas/tecnologia-respuesta.webp"
    },
     "Nutricion": {
        pregunta: "img/nutricion-pregunta.webp",
        respuesta: "img/nutricion-respuesta.webp"
    }
};

let indiceActual = 0;
const tarjeta = document.getElementById('tarjeta');
const textoPregunta = document.getElementById('texto-pregunta');
const textoRespuesta = document.getElementById('texto-respuesta');
const imgPregunta = document.getElementById('img-pregunta');
const imgRespuesta = document.getElementById('img-respuesta');

// Tiempos en milisegundos (5s pregunta / 3s respuesta)
const TIEMPO_MOSTRAR_PREGUNTA = 5000; 
const TIEMPO_MOSTRAR_RESPUESTA = 3000; 

// Mezclar las preguntas al cargar el juego por primera vez
trivia.sort(() => Math.random() - 0.5);

function iniciarTrivia() {
    // Verificar si llegamos al final de las preguntas
    if (indiceActual >= trivia.length) {
        if (REINICIAR_AL_TERMINAR) {
            // Si está en true, resetea, mezcla de nuevo y continúa
            indiceActual = 0; 
            trivia.sort(() => Math.random() - 0.5); 
            console.log("El bucle está activo. Reiniciando trivia...");
        } else {
            // Si está en false, detenemos la ejecución aquí
            console.log("Fin de las preguntas. El juego se ha detenido.");
            mostrarPantallaFin(); // Opcional: una función para avisar al usuario
            return; // El 'return' corta la función y evita que siga cargando tarjetas
        }
    }

    const tarjetaActual = trivia[indiceActual];
    const areaTema = tarjetaActual.area; // Obtiene el área (ej: "Historia")

    // 3. CARGAR DATOS DEL FRENTE (Pregunta)
    textoPregunta.textContent = tarjetaActual.pregunta;
    
    // Lógica de descarte: Imagen propia -> Imagen del Área -> Imagen por Defecto
    if (tarjetaActual.imgPregunta) {
        imgPregunta.src = tarjetaActual.imgPregunta;
    } else if (areaTema && IMAGENES_POR_AREA[areaTema]) {
        imgPregunta.src = IMAGENES_POR_AREA[areaTema].pregunta;
    } else {
        imgPregunta.src = IMG_PREGUNTA_DEFECTO;
    }

    // 4. CARGAR DATOS DEL DORSO (Respuesta)
    textoRespuesta.textContent = tarjetaActual.respuesta;
    
    if (tarjetaActual.imgRespuesta) {
        imgRespuesta.src = tarjetaActual.imgRespuesta;
    } else if (areaTema && IMAGENES_POR_AREA[areaTema]) {
        imgRespuesta.src = IMAGENES_POR_AREA[areaTema].respuesta;
    } else {
        imgRespuesta.src = IMG_RESPUESTA_DEFECTO;
    }

    // Asegurar que la tarjeta inicie de frente
    tarjeta.classList.remove('volteada');

    // Esperar unos segundos y girar la tarjeta
    setTimeout(() => {
        tarjeta.classList.add('volteada');

        // Esperar el tiempo de la respuesta y pasar a la siguiente tarjeta
        setTimeout(() => {
            indiceActual++;
            iniciarTrivia(); 
        }, TIEMPO_MOSTRAR_RESPUESTA);

    }, TIEMPO_MOSTRAR_PREGUNTA);
}

// Función opcional por si quieres limpiar la pantalla o mostrar un mensaje al terminar
function mostrarPantallaFin() {
    // Ejemplo: puedes ocultar la tarjeta o poner un texto amigable
    textoPregunta.textContent = "¡Has completado todas las preguntas!";
    imgPregunta.src = IMG_PREGUNTA_DEFECTO; 
    tarjeta.classList.remove('volteada');
}

// Arrancar el ciclo al cargar la página
document.addEventListener('DOMContentLoaded', iniciarTrivia);