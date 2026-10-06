# Quiz de Tarjetas (Trivia)

Trivia de preguntas y respuestas en formato de tarjetas, que avanza sola. Cada pregunta se muestra unos segundos y después aparece la respuesta. Está pensada para pasar en una pantalla o para grabarla como video.

## Documentación

El manual de usuario está en [documentacion-central](https://github.com/FABIOR1981/documentacion-central/tree/main/trivia/documentacion) ([PDF](https://github.com/FABIOR1981/documentacion-central/blob/main/trivia/documentacion/MANUAL_USUARIO.pdf)). También se puede consultar desde la bitácora de proyectos.

## Funcionalidades

- **Áreas temáticas**: Historia, Geografía, Biología, Geología, Espacio, Tecnología y Nutrición. Cada área tiene su propia imagen de pregunta y de respuesta.
- **Varias partes**: las preguntas están divididas en archivos `js/trivias/trivia_parte_N.js`. Al empezar, la app detecta cuáles existen y deja elegir cuál reproducir.
- **Cuenta regresiva** de bienvenida y avance automático: 10 segundos para la pregunta y 3 para la respuesta.
- **Grabación opcional**: si se activa al empezar, la app graba la pestaña con las funciones del propio navegador, sin instalar nada, y descarga el video `.webm` al terminar.
- Precarga de imágenes para que no parpadeen.

## Cómo se usa

1. Abrí `index.html`.
2. En la ventana inicial elegí qué parte de la trivia reproducir y si querés grabarla.
3. Si elegiste grabar, el navegador te va a pedir qué pestaña compartir: elegí la de la trivia.
4. Al terminar, el video se descarga solo.

## Agregar preguntas

1. Copiá uno de los archivos de `js/trivias/` con el número siguiente, por ejemplo `trivia_parte_13.js`.
2. Cada pregunta tiene esta forma:

```js
{
    pregunta: "¿...?",
    area: "Historia",
    imgPregunta: "",   // vacío = usa la imagen del área
    respuesta: "...",
    imgRespuesta: ""
}
```

La parte nueva aparece sola en la ventana de inicio. No hace falta registrarla en ningún lado.

## Configuración

En `js/config.js` se definen:

- si la trivia vuelve a empezar al terminar (`REINICIAR_AL_TERMINAR`);
- las imágenes por defecto y las de cada área;
- los tiempos de pregunta y respuesta.

## Ejecutar localmente

Usa módulos de JavaScript, así que hay que abrirla con un servidor (por ejemplo `npx serve`). Abriendo el archivo directamente no funciona.

## Estructura

```
index.html            Página de inicio
css/style.css         Estilos
js/inicio.js          Ventana inicial: elegir parte y grabación
js/script.js          Ciclo de preguntas y respuestas
js/grabar.js          Grabación de la pestaña
js/config.js          Configuración
js/trivias/           Preguntas, divididas en partes
img/                  Fondo e imágenes por área
```
