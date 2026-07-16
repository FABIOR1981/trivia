// Configuración del juego
export const REINICIAR_AL_TERMINAR = false; // true = vuelve a empezar en bucle / false = se detiene

// --- CONFIGURACIÓN DE IMÁGENES POR DEFECTO ---
export const IMG_PREGUNTA_DEFECTO = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400";
export const IMG_RESPUESTA_DEFECTO = "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400";
export const IMG_BIENVENIDA = "img/fondo/fondo_1.webp"; // Usamos tu fondo optimizado para la bienvenida

// 2. CONFIGURACIÓN DE IMÁGENES FIJAS POR ÁREA TEMÁTICA
export const IMAGENES_POR_AREA = {
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
        pregunta: "img/tarjetas/nutricion-pregunta.webp",
        respuesta: "img/tarjetas/nutricion-respuesta.webp"
    }
};

// Tiempos en milisegundos (10s pregunta / 3s respuesta  )
export const TIEMPO_MOSTRAR_PREGUNTA = 10000;
export const TIEMPO_MOSTRAR_RESPUESTA = 3000;
export const TIEMPO_CUENTA_ATRAS = 10; // Duración de la cuenta regresiva en segundos
