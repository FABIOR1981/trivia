// 1. IMPORTAR LAS PREGUNTAS Y LA CONFIGURACIÓN DESDE OTRO ARCHIVO
import { trivia } from './trivias.js';
import {
    REINICIAR_AL_TERMINAR,
    IMG_PREGUNTA_DEFECTO,
    IMG_RESPUESTA_DEFECTO,
    IMG_BIENVENIDA,
    IMAGENES_POR_AREA,
    TIEMPO_MOSTRAR_PREGUNTA,
    TIEMPO_MOSTRAR_RESPUESTA,
    TIEMPO_CUENTA_ATRAS
} from './config.js';

// Iniciamos en -1 para controlar el estado de "Bienvenida" antes de las preguntas
let indiceActual = -1; 
const tarjeta = document.getElementById('tarjeta');
const textoPregunta = document.getElementById('texto-pregunta');
const textoRespuesta = document.getElementById('texto-respuesta');
const imgPregunta = document.getElementById('img-pregunta');
const imgRespuesta = document.getElementById('img-respuesta');

// Mezclar las preguntas al cargar el juego por primera vez
trivia.sort(() => Math.random() - 0.5);

// Precarga automática de imágenes en segundo plano para que no parpadeen
function precargarImagenes() {
    Object.values(IMAGENES_POR_AREA).forEach(tema => {
        const imgP = new Image(); imgP.src = tema.pregunta;
        const imgR = new Image(); imgR.src = tema.respuesta;
    });
}

function iniciarTrivia() {
    // --- ESTADO DE BIENVENIDA Y CUENTA ATRÁS ---
    if (indiceActual === -1) {
        precargarImagenes(); // Empieza a cachear las imágenes de los temas
        textoPregunta.textContent = "¿Te animas a adivinar?";
        imgPregunta.src = IMG_BIENVENIDA;
        tarjeta.classList.remove('volteada');

        let segundosRestantes = TIEMPO_CUENTA_ATRAS;
        textoRespuesta.textContent = `Comenzamos en... ${segundosRestantes}`;

        // Iniciamos la cuenta regresiva numérica
        const intervaloBienvenida = setInterval(() => {
            segundosRestantes--;
            if (segundosRestantes > 0) {
                textoRespuesta.textContent = `Comenzamos en... ${segundosRestantes}`;
            } else {
                clearInterval(intervaloBienvenida);
                indiceActual = 0; // Pasamos a la primera pregunta real
                iniciarTrivia();
            }
        }, 1000);

        return; // Detiene la ejecución aquí para que no avance al ciclo de preguntas aún
    }

    // --- VERIFICACIÓN DE FIN DE JUEGO ---
    if (indiceActual >= trivia.length) {
        if (REINICIAR_AL_TERMINAR) {
            indiceActual = 0; 
            trivia.sort(() => Math.random() - 0.5); 
            console.log("El bucle está activo. Reiniciando trivia...");
        } else {
            console.log("Fin de las preguntas. El juego se ha detenido.");
            mostrarPantallaFin();
            return;
        }
    }

    // --- CICLO NORMAL DE PREGUNTAS ---
    const tarjetaActual = trivia[indiceActual];
    const areaTema = tarjetaActual.area;

    // 3. CARGAR DATOS DEL FRENTE (Pregunta)
    textoPregunta.textContent = tarjetaActual.pregunta;
    
    if (tarjetaActual.imgPregunta) {
        imgPregunta.src = tarjetaActual.imgPregunta;
    } else if (areaTema && IMAGENES_POR_AREA[areaTema]) {
        imgPregunta.src = IMAGENES_POR_AREA[areaTema].pregunta;
    } else {
        imgPregunta.src = IMG_PREGUNTA_DEFECTO;
    }

    // 4. CARGAR DATOS DEL DORSO (Respuesta)
    //textoRespuesta.textContent = tarjetaActual.respuesta;
    textoRespuesta.textContent = `Respuesta: ${tarjetaActual.respuesta}`;
    
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

function mostrarPantallaFin() {
    textoPregunta.textContent = "¡Has completado todas las preguntas!";
    imgPregunta.src = IMG_BIENVENIDA; 
    tarjeta.classList.remove('volteada');
}

// Arrancar el ciclo al cargar la página
document.addEventListener('DOMContentLoaded', iniciarTrivia);