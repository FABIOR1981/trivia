import { trivia } from "./trivias.js";

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