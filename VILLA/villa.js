// Define variables
var objCanvas = document.getElementById("dibujo");
var objLienzo = objCanvas.getContext("2d");

const objMapa = "tile.png";
const objPersonaje1 = "cerdo.png";
const objPersonaje2 = "pollo.png";
const objPersonaje3 = "vaca.png";
const intTamanoImagen = 80;
const intMaximoMapa = 499;

var objFondo = new Image();
var objCerdo = new Image();
var objPollo = new Image();
var objVaca = new Image();

// Asigna las imagenes al objeto
objFondo.src = objMapa;
objCerdo.src = objPersonaje1;
objPollo.src = objPersonaje2;
objVaca.src = objPersonaje3;

// Agregamos eventos
objFondo.addEventListener("load", dibujarMapa);
objCerdo.addEventListener("load", dibujarCerdo);
objPollo.addEventListener("load", dibujarPollo);
objVaca.addEventListener("load", dibujarVaca);

// Define funciones

// funcion para obtener numeros al azar entre rangos
function numerosAleatoriosRango(numeroMinimo, numeroMaximo) {
	var intRPosicion = Math.ceil(((numeroMaximo - numeroMinimo) + 1) * Math.random());

	return (numeroMaximo - (((numeroMaximo - numeroMinimo) + 1) - intRPosicion));
}

// funciones para cargar el mapa y los personajes
function dibujarMapa() {
	objLienzo.drawImage(objFondo,0,0);
}

function dibujarCerdo() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),objCanvas.width);
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),objCanvas.height);
	objLienzo.drawImage(objCerdo, intPosicionX, intPosicionY);
	//document.write(intPosicionX + " - " + intPosicionY + "<br />");
}

function dibujarPollo() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),objCanvas.width);
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),objCanvas.height);
	objLienzo.drawImage(objPollo, intPosicionX, intPosicionY);
	//document.write(intPosicionX + " - " + intPosicionY + "<br />");
}

function dibujarVaca() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),objCanvas.width);
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),objCanvas.height);
	objLienzo.drawImage(objVaca, intPosicionX, intPosicionY);
	//document.write(intPosicionX + " - " + intPosicionY + "<br />");
}

function posicionAzarImagen(numeroMinimo, numeroMaximo) {
	var intPosicion = numerosAleatoriosRango(numeroMinimo,numeroMaximo);
	if ((intPosicion + intTamanoImagen) > intMaximoMapa) {
		intPosicion = intPosicion - intTamanoImagen;
	}
	
	return intPosicion;
}