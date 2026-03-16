// Seleccionamos todos los botones
const botones = document.querySelectorAll('#botonesPDF button');
const visor = document.getElementById('visorPDF');

// Función para cargar el PDF
function cargarPDF(pdfNombre) {
    // Ruta relativa correcta desde viewer.html
    const rutaPDF = '../../PDF/' + pdfNombre;

    // URL al visor con el PDF
    const viewerURL = './PDFS/web/viewer.html?file=' + encodeURIComponent(rutaPDF);
    visor.src = viewerURL;
}

// Asignamos evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const pdf = boton.getAttribute('data-pdf');
        cargarPDF(pdf);
    });
});

// Cargar PDF por defecto
cargarPDF('Unidad1.pdf');
