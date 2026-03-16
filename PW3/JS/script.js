// Datos de los PDFs
const pdfs = {
  primer: {
    teoria: [
      "https://drive.google.com/file/d/1KCs8IFIUih9_8pkYfoL4uYJvdJ-Zb9CT/preview",
      "https://drive.google.com/file/d/1ANg7BJJ3koxO7qpDZ3sShKg5llG2akIN/preview",
      "https://drive.google.com/file/d/1Ybw5bwpqgpZDGCxlYX1MUVkuDj3aoy1e/preview",
      "https://drive.google.com/file/d/1yET5sCiZtR5IWnhF5mpEshWkJCoFioMk/preview",
    ],
    practica: [
      "https://drive.google.com/file/d/1HHmlx3oixPKYNxvEu2laq2pHXqemLs3a/preview",
      "https://drive.google.com/file/d/10epmAat-mtXrmlM631WAwcBNlzkwzuPt/preview",
      "https://drive.google.com/file/d/1EFnnle_g4qgreEpAa97-L0lBRkCrocj3/preview",
      "https://drive.google.com/file/d/1zBSiTmkj2W9RnxZCb0k9VR8hFLhsatcQ/preview",
      "https://drive.google.com/file/d/1WSrWrnmSbuM95iChx2vNWVi69d8rqh9V/preview",
    ],
  },
  segundo: {
    teoria: [
      "https://drive.google.com/file/d/1SnwxpYLwj3sD_qztRGBosNSpvMgVu9gv/preview",
      "https://drive.google.com/file/d/1jyCkMniFSnNLdIcTQvGO6C04SZs7exuN/preview",
    ],
    practica: [
      "https://drive.google.com/file/d/1_AN1BBE4o2p7ZGEogUGZJ3fHBLTR6XiI/preview",
      "https://drive.google.com/file/d/1eSVfucQWBT8EVy4jOS0SjmbOa5l88yvt/preview",
    ],
  },
}

// Variables para el estado actual
let parcialActivo = null
let tipoActivo = null

// Elementos DOM
const pdfContainer = document.getElementById("pdf-container")
const parcialButtons = document.querySelectorAll(".parcial-button")
const submenuButtons = document.querySelectorAll(".submenu-button")
const submenus = document.querySelectorAll(".submenu")

// Inicializar: ocultar todos los submenús
submenus.forEach((submenu) => {
  submenu.classList.remove("active")
})

// Función para manejar clic en botón de parcial
parcialButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parcial = this.getAttribute("data-parcial")
    const submenu = document.getElementById(`submenu-${parcial}`)

    // Si ya está activo, desactivar
    if (parcialActivo === parcial) {
      this.classList.remove("active")
      submenu.classList.remove("active")
      parcialActivo = null
      tipoActivo = null
      mostrarEstadoVacio()
    } else {
      // Desactivar todos los botones y submenús
      parcialButtons.forEach((btn) => btn.classList.remove("active"))
      submenus.forEach((menu) => menu.classList.remove("active"))

      // Activar el actual
      this.classList.add("active")
      submenu.classList.add("active")
      parcialActivo = parcial
    }
  })
})

// Función para manejar clic en botón de submenu
submenuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parcial = this.getAttribute("data-parcial")
    const tipo = this.getAttribute("data-tipo")

    // Desactivar todos los botones de submenu
    submenuButtons.forEach((btn) => btn.classList.remove("active"))

    // Activar el actual
    this.classList.add("active")
    tipoActivo = tipo

    // Cargar los PDFs
    cargarPDFs(parcial, tipo)
  })
})

// Función para cargar PDFs
function cargarPDFs(parcial, tipo) {
  const pdfList = pdfs[parcial][tipo]
  const showInTwoColumns = parcial === "primer" && tipo === "teoria"

  // Limpiar el contenedor
  pdfContainer.innerHTML = ""

  // Aplicar clase para columnas si es necesario
  if (showInTwoColumns) {
    pdfContainer.classList.add("dos-columnas")
  } else {
    pdfContainer.classList.remove("dos-columnas")
  }

  // Crear elementos para cada PDF
  pdfList.forEach((src, index) => {
    const pdfItem = document.createElement("div")
    pdfItem.className = "pdf-item"

    const pdfHeader = document.createElement("div")
    pdfHeader.className = "pdf-header"
    pdfHeader.textContent = `PDF ${index + 1} - ${parcial === "primer" ? "Primer" : "Segundo"} Parcial (${tipo === "teoria" ? "Teoría" : "Práctica"})`

    const iframe = document.createElement("iframe")
    iframe.src = src
    iframe.setAttribute("allow", "autoplay")
    iframe.setAttribute("title", `PDF ${index + 1}`)

    pdfItem.appendChild(pdfHeader)
    pdfItem.appendChild(iframe)
    pdfContainer.appendChild(pdfItem)
  })
}

// Función para mostrar estado vacío
function mostrarEstadoVacio() {
  pdfContainer.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-file-pdf"></i>
            <h2>Selecciona un parcial y tipo para ver los PDFs</h2>
        </div>
    `
  pdfContainer.classList.remove("dos-columnas")
}

// Inicializar con estado vacío
mostrarEstadoVacio()
