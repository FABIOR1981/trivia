// grabar.js
// Graba esta pestaña del navegador con las APIs nativas (sin instalar nada)
// y descarga el .webm automáticamente cuando la trivia termina.
// Se usa desde js/inicio.js, después de que el usuario confirma el modal.
//
// Nota: el estado de la grabación solo se informa por consola (F12), nunca
// en pantalla, para que ningún aviso quede "quemado" dentro del video grabado.

let mediaRecorder = null;
let chunks = [];
let stream = null;
let descargado = false;

function logEstado(texto) {
    console.log('[grabar.js]', texto);
}

function descargarVideo(parte) {
    if (descargado || chunks.length === 0) return;
    descargado = true;
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trivia_parte_${parte}.webm`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    logEstado('✅ Video descargado: trivia_parte_' + parte + '.webm');
    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

/**
 * Pide permiso para grabar la pestaña actual y arranca el MediaRecorder.
 * Se detiene y descarga solo cuando la trivia dispara 'trivia-finalizada'.
 * @param {string|number} parte - número de trivia_parte_N.js, para el nombre del archivo
 * @returns {Promise<boolean>} true si el usuario aceptó grabar
 */
export async function iniciarGrabacion(parte) {
    try {
        stream = await navigator.mediaDevices.getDisplayMedia({
            video: { frameRate: 30 },
            audio: false,
            preferCurrentTab: true, // Chrome: evita elegir manualmente la pestaña
        });
    } catch (err) {
        logEstado('❌ No se pudo grabar (permiso denegado o cancelado).');
        return false;
    }

    chunks = [];
    descargado = false;

    const tiposPosibles = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'];
    const mimeType = tiposPosibles.find((t) => MediaRecorder.isTypeSupported(t)) || '';

    mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
        descargarVideo(parte);
        stream.getTracks().forEach((t) => t.stop());
    };

    // Si el usuario corta el "compartir pantalla" manualmente, igual se descarga lo grabado
    stream.getVideoTracks()[0].addEventListener('ended', () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    });

    // Auto-stop cuando la trivia dispara su evento de fin (ver script.js)
    document.addEventListener('trivia-finalizada', () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            logEstado('🏁 Trivia terminada. Descargando video...');
            setTimeout(() => mediaRecorder.stop(), 800); // pequeño colchón final
        }
    });

    mediaRecorder.start(1000); // un chunk por segundo (más seguro ante cortes)
    logEstado('🔴 Grabando trivia_parte_' + parte + '... se descarga sola al terminar.');
    return true;
}
