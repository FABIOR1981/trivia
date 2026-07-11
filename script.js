// 1. IMPORTAR LAS PREGUNTAS DESDE EL OTRO ARCHIVO
import { trivia } from './trivias.js';

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
    // Volver a empezar y reorganizar cuando se terminen todas las tarjetas (ahora son 24)
    if (indiceActual >= trivia.length) {
        indiceActual = 0; 
        trivia.sort(() => Math.random() - 0.5); 
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

// Arrancar el ciclo al cargar la página
document.addEventListener('DOMContentLoaded', iniciarTrivia);