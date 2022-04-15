// Define las variables	
var objCanvas = document.getElementById("dibujo");
var objLienzo = objCanvas.getContext("2d");
var objLinea = document.getElementById("txtlinea");
var objBoton1 = document.getElementById("btnlinea");
var objBoton2 = document.getElementById("btnnuevo");

objBoton1.addEventListener("click",DibujarClick);
objBoton2.addEventListener("click",NuevoClick);

//console.log(objLienzo);

// objLienzo.beginPath();
// objLienzo.strokeStyle = "red";
// objLienzo.moveTo(100,100);
// objLienzo.lineTo(200,200);
// objLienzo.stroke();
// objLienzo.closePath();

// DibujarLinea("grey",0,0,10,300);
// DibujarLinea("blue",0,10,20,300);
// DibujarLinea("blue",0,20,30,300);


// Define funciones	
function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	objLienzo.beginPath();
	objLienzo.strokeStyle = color;
	objLienzo.moveTo(xinicial,yinicial);
	objLienzo.lineTo(xfinal,yfinal);
	objLienzo.stroke();
	objLienzo.closePath();
}

function DibujarClick() {	
	// Valida que las lineas tengan como maximo 30 entradas
	if (objLinea.value > 30) {
		alert("Error! el máximo de líneas a elegir es 30!")
	}
	else {
		// Ejecuta el metodo
		DibujarEsquinas();
	}
}

function NuevoClick() {
	// Limpia el canvas
	objLienzo.clearRect(0, 0, objCanvas.width, objCanvas.height);
}

function DibujarEsquinas() {
	var posInicial1;
	var posInicial2;
	var intlineas = 30 - objLinea.value	

	// Esquina 1
	posInicial1 = -10;
	posInicial2 = 0;

	for (var i = intlineas; i < 29; i++) {
		posInicial1 = posInicial1 + 10;
		posInicial2 = posInicial2 + 10;
		DibujarLinea("blue",0,posInicial1,posInicial2,300);
	}

	DibujarLinea("red",1,1,1,299);
	DibujarLinea("red",1,299,299,299);

	// Esquina 2
	posInicial1 = -10;
	posInicial2 = 300;

	for (var i = intlineas; i < 29; i++) {
		posInicial1 = posInicial1 + 10;
		posInicial2 = posInicial2 - 10;
		DibujarLinea("red",posInicial2,300,300,posInicial1);
	}

	DibujarLinea("blue",299,299,299,1);
	DibujarLinea("blue",299,1,1,1);
}
