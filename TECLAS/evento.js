// Define variables
var objCanvas = document.getElementById("dibujo");
var objLienzo = objCanvas.getContext("2d");
var intxFinal = 150;
var intyFinal = 150;
var intxInicial = 150;
var intyInicial = 150;
var objTeclas = {
	ARRIBA: 38, 
	ABAJO: 40,
	IZQUIERDA: 37,
	DERECHA: 39,
	NUEVO: 78
};
var intMovimiento = 3;

// Agrega eventos
document.addEventListener("keyup",presionarTeclado); // dibujar por Teclado
objCanvas.addEventListener("mousedown", presionarMouse); // Cuando se presiona el raton

// Define funciones
function presionarMouse(evento) {
	// Busca las coordenadas del raton para realizar el dibujo
	var strColorMouse = "red";
	intxInicial = evento.offsetX;
	intyInicial = evento.offsetY;
	
	intxFinal = intxInicial + intMovimiento;
	intyFinal = intyInicial + intMovimiento;
	dibujarLinea(strColorMouse,intxInicial,intyInicial,intxFinal,intyFinal);
}

function presionarTeclado(evento) {
	var strColorTeclado = "blue";
	
	switch (evento.keyCode) {
		case objTeclas.ARRIBA: // Flecha arriba	
			intyFinal = intyFinal - intMovimiento;
			dibujarLinea(strColorTeclado,intxInicial,intyInicial,intxFinal,intyFinal);
			intyInicial = intyInicial - intMovimiento;
			break;						
		case objTeclas.ABAJO: // Flecha abajo
			intyFinal = intyFinal + intMovimiento;
			dibujarLinea(strColorTeclado,intxInicial,intyInicial,intxFinal,intyFinal);
			intyInicial = intyInicial + intMovimiento;
			break;	
		case objTeclas.IZQUIERDA: // Flecha izquierda
			intxFinal = intxFinal - intMovimiento;
			dibujarLinea(strColorTeclado,intxInicial,intyInicial,intxFinal,intyFinal);
			intxInicial = intxInicial - intMovimiento;
			break;
		case objTeclas.DERECHA: // Flecha derecha
			intxFinal = intxFinal + intMovimiento;
			dibujarLinea(strColorTeclado,intxInicial,intyInicial,intxFinal,intyFinal);
			intxInicial = intxInicial + intMovimiento;
			break;
		case objTeclas.NUEVO: // Presiona n limpia el dibujo
			objLienzo.clearRect(0, 0, objCanvas.width, objCanvas.height);
			intxFinal = 150;
			intyFinal = 150;
			intxInicial = 150;
			intyInicial = 150;
			
		default:
	}
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	objLienzo.beginPath();
	objLienzo.strokeStyle = color;
	objLienzo.lineWidth = 3;
	objLienzo.moveTo(xinicial,yinicial);
	objLienzo.lineTo(xfinal,yfinal);
	objLienzo.stroke();
	objLienzo.closePath();
}