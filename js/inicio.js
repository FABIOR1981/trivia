// inicio.js
// Punto de entrada de la app. Antes de arrancar la trivia:
//   1. Detecta qué archivos trivia_parte_N.js existen en js/trivias/
//   2. Muestra un modal para elegir cuál reproducir y si se quiere
//      grabar + descargar el video al terminar.
//   3. Recién ahí importa script.js y arranca el juego.

const MAX_PARTES_A_BUSCAR = 20; // tope de búsqueda; ajustar si algún día hay más de 20 archivos

async function detectarPartesDisponibles() {
    const disponibles = [];
    for (let n = 1; n <= MAX_PARTES_A_BUSCAR; n++) {
        try {
            // Un 404 en un import() dinámico rechaza la promesa: así detectamos
            // qué archivos existen realmente en js/trivias/ sin necesitar un
            // listado manual ni un endpoint de servidor.
            await import(`./trivias/trivia_parte_${n}.js`);
            disponibles.push(n);
        } catch (err) {
            // Si falla la 1 o 2 seguidas asumimos que no hay más archivos después
            if (disponibles.length > 0) break;
        }
    }
    return disponibles;
}

function crearModal(partes) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed',
            inset: '0',
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            fontFamily: 'sans-serif',
        });

        const caja = document.createElement('div');
        Object.assign(caja.style, {
            background: '#fff',
            borderRadius: '12px',
            padding: '28px 32px',
            maxWidth: '360px',
            width: '90%',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            textAlign: 'center',
        });

        const titulo = document.createElement('h2');
        titulo.textContent = 'Quiz de Tarjetas';
        titulo.style.margin = '0 0 4px';

        const subtitulo = document.createElement('p');
        subtitulo.textContent = 'Elegí qué trivia querés reproducir.';
        subtitulo.style.margin = '0 0 18px';
        subtitulo.style.color = '#555';
        subtitulo.style.fontSize = '14px';

        const selectLabel = document.createElement('label');
        selectLabel.textContent = 'Trivia:';
        selectLabel.style.display = 'block';
        selectLabel.style.textAlign = 'left';
        selectLabel.style.fontSize = '13px';
        selectLabel.style.marginBottom = '4px';
        selectLabel.style.fontWeight = 'bold';

        const select = document.createElement('select');
        Object.assign(select.style, {
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            marginBottom: '18px',
            borderRadius: '6px',
            border: '1px solid #ccc',
        });
        partes.forEach((n) => {
            const opt = document.createElement('option');
            opt.value = String(n);
            opt.textContent = `Parte ${n} (trivia_parte_${n}.js)`;
            select.appendChild(opt);
        });

        const checkboxWrap = document.createElement('label');
        Object.assign(checkboxWrap.style, {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            textAlign: 'left',
            marginBottom: '22px',
            cursor: 'pointer',
        });
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const checkboxTexto = document.createElement('span');
        checkboxTexto.textContent = 'Grabar y descargar el video al terminar';
        checkboxWrap.appendChild(checkbox);
        checkboxWrap.appendChild(checkboxTexto);

        const nota = document.createElement('p');
        nota.textContent = 'Si activás la grabación, Chrome te va a pedir permiso para compartir esta pestaña.';
        Object.assign(nota.style, {
            fontSize: '11px',
            color: '#888',
            margin: '-14px 0 18px',
            display: 'none',
        });
        checkbox.addEventListener('change', () => {
            nota.style.display = checkbox.checked ? 'block' : 'none';
        });

        const boton = document.createElement('button');
        boton.textContent = 'Comenzar';
        Object.assign(boton.style, {
            width: '100%',
            padding: '10px',
            fontSize: '15px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            background: '#d32f2f',
            color: '#fff',
            cursor: 'pointer',
        });

        boton.addEventListener('click', () => {
            overlay.remove();
            resolve({ parte: select.value, grabar: checkbox.checked });
        });

        caja.appendChild(titulo);
        caja.appendChild(subtitulo);
        caja.appendChild(selectLabel);
        caja.appendChild(select);
        caja.appendChild(checkboxWrap);
        caja.appendChild(nota);
        caja.appendChild(boton);
        overlay.appendChild(caja);
        document.body.appendChild(overlay);
    });
}

async function main() {
    const partes = await detectarPartesDisponibles();

    if (partes.length === 0) {
        document.body.innerHTML =
            '<p style="font-family:sans-serif;text-align:center;margin-top:40px;">No se encontró ningún archivo trivia_parte_N.js en js/trivias/</p>';
        return;
    }

    const { parte, grabar } = await crearModal(partes);

    const moduloTrivia = await import(`./trivias/trivia_parte_${parte}.js`);
    const { iniciarApp } = await import('./script.js');

    if (grabar) {
        const { iniciarGrabacion } = await import('./grabar.js');
        await iniciarGrabacion(parte);
    }

    iniciarApp(moduloTrivia.trivia);
}

main();
