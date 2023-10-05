
const opcion1 = document.getElementById("opcionsm");
const opcion2 = document.getElementById("opcions");
const opcion3 = document.getElementById("opciong");
const opcion4 = document.getElementById("opcionh");
const opcion5 = document.getElementById("opcionsp");

const formulario1 = document.getElementById("formulariosm");
const formulario2 = document.getElementById("formularios");
const formulario3 = document.getElementById("formulariog");
const formulario4 = document.getElementById("formularioh");
const formulario5 = document.getElementById("formulariosp");

opcionsm.addEventListener("click", function() {
formularios.style.display = "none";
formulariog.style.display = "none";
formularioh.style.display = "none";
formulariosp.style.display = "none";
formulariosm.style.display = "block";
});
opcions.addEventListener("click", function() {
formulariosm.style.display = "none";
formulariog.style.display = "none";
formularioh.style.display = "none";
formulariosp.style.display = "none";
formularios.style.display = "block";
});

opciong.addEventListener("click", function() {
formulariosm.style.display = "none";
formularios.style.display = "none";
formularioh.style.display = "none";
formulariosp.style.display = "none";
formulariog.style.display = "block";
});

opcionh.addEventListener("click", function() {
formulariosm.style.display = "none";
formularios.style.display = "none";
formulariog.style.display = "none";
formulariosp.style.display = "none";
formularioh.style.display = "block";
});

opcionsp.addEventListener("click", function() {
formulariosm.style.display = "none";
formularios.style.display = "none";
formulariog.style.display = "none";
formularioh.style.display = "none";
formulariosp.style.display = "block";
});
const mesesSelect = document.getElementById("meses-select");
const mesTitulo = document.getElementById("titulomes");
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesesSelect.addEventListener("change", function() {
const mesSeleccionado = mesesSelect.value;
const nombreMesSeleccionado = nombresMeses[mesSeleccionado - 1];
mesTitulo.textContent = nombreMesSeleccionado;
});
function mostrarordenes() {
var mesSeleccionado = document.getElementById("meses-select").value;
var divordenes = document.getElementById("ordenes");
var contenido = "Orden de servicio #123456\nOrden de servicio #234567\nOrden de servicio #345678\nOrden de servicio #456789\nOrden de servicio #987654";
divordenes.textContent = contenido;
}
