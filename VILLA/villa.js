// Define variables
var objCanvas = document.getElementById("dibujo");
var objLienzo = objCanvas.getContext("2d");
const intTamanoImagen = 80;
const intMaximoMapa = 499;

// Crear objetos para los personajes
var objPersonaje1 = {
	url: "cerdo.png",
	cargaOK: false
};
objPersonaje1.imagen = new Image();
objPersonaje1.imagen.src = objPersonaje1.url;
objPersonaje1.imagen.addEventListener("load", cargarCerdo);

var objPersonaje2 = {
	url: "pollo.png",
	cargaOK: false
};
objPersonaje2.imagen = new Image();
objPersonaje2.imagen.src = objPersonaje2.url;
objPersonaje2.imagen.addEventListener("load", cargarPollo);

var objPersonaje3 = {
	url: "vaca.png",
	cargaOK: false
};
objPersonaje3.imagen = new Image();
objPersonaje3.imagen.src = objPersonaje3.url;
objPersonaje3.imagen.addEventListener("load", cargarVaca);

var objMapa = {
	url: "tile.png",
	cargaOK: false
};
objMapa.imagen = new Image();
objMapa.imagen.src = objMapa.url;
objMapa.imagen.addEventListener("load", cargarMapa);

// funcion para obtener numeros al azar entre rangos
function numerosAleatoriosRango(numeroMinimo, numeroMaximo) {
	var intRPosicion = Math.ceil(((numeroMaximo - numeroMinimo) + 1) * Math.random());

	return (numeroMaximo - (((numeroMaximo - numeroMinimo) + 1) - intRPosicion));
}

// funciones para cargar el mapa y los personajes
function dibujar() {
	if(objMapa.cargaOK) {
		objLienzo.drawImage(objMapa.imagen,0,0);

		for (var i=0; i<=4; i++) {
			dibujarCerdos();
			dibujarPollos();
			dibujarVacas();
		}
	}
}

function dibujarCerdos() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),(objCanvas.width-intTamanoImagen));
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),(objCanvas.height-intTamanoImagen));
	objLienzo.drawImage(objPersonaje1.imagen, intPosicionX, intPosicionY);
}

function dibujarPollos() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),(objCanvas.width-intTamanoImagen));
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),(objCanvas.height-intTamanoImagen));
	objLienzo.drawImage(objPersonaje2.imagen, intPosicionX, intPosicionY);
}

function dibujarVacas() {
	var intPosicionX = posicionAzarImagen((objCanvas.width - objCanvas.width),(objCanvas.width-intTamanoImagen));
	var intPosicionY = posicionAzarImagen((objCanvas.height - objCanvas.height),(objCanvas.height-intTamanoImagen));
	objLienzo.drawImage(objPersonaje3.imagen, intPosicionX, intPosicionY);
}

function posicionAzarImagen(numeroMinimo, numeroMaximo) {
	// var intPosicion = numerosAleatoriosRango(numeroMinimo,numeroMaximo);

	var intPosicion = numerosAleatoriosRango(0,7);
	intPosicion = intPosicion * (intTamanoImagen-20);

	if ((intPosicion + intTamanoImagen) > intMaximoMapa) {
		intPosicion = intPosicion - intTamanoImagen;
	}
	
	return intPosicion;
}

function cargarCerdo() {
	objPersonaje1.cargaOK = true;
	dibujar();
}

function cargarPollo() {
	objPersonaje2.cargaOK = true;
	dibujar();
}

function cargarVaca() {
	objPersonaje3.cargaOk = true;
	dibujar();
}

function cargarMapa() {
	objMapa.cargaOK = true;
	dibujar();
}