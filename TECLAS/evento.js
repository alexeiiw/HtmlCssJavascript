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
var intMovimiento = 5;

// Agrega eventos
document.addEventListener("keyup",presionarTeclado); // dibujar por Teclado
objCanvas.addEventListener("mousedown", presionarMouse); // Cuando se presiona el raton
objCanvas.addEventListener("mouseup", soltarMouse); // Cuando se suelta el raton

// Define funciones
function presionarMouse(evento) {
	console.log(evento);
	console.log(evento.offsetX);
	console.log(evento.offsetY);	
	//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
	//dibujarLinea("red",evento.offsetX, evento.offsetY, evento.offsetX+intMovimiento, evento.offsetY+intMovimiento)
	var strColorMouse = "red";
	intxInicial = evento.offsetX;
	intyInicial = evento.offsetY;
	intxFinal = intxInicial + intMovimiento;
	intyFinal = intyInicial = intMovimiento;
	dibujarForma(strColorMouse);
}

function soltarMouse(evento) {
	console.log(evento.offsetX);
	console.log(evento.offsetY);	

	// var strColorMouse = "red";
	// dibujarLinea(strColorMouse,evento.offsetX, evento.offsetY, evento.offsetX+intMovimiento, evento.offsetY+intMovimiento)
	
	
	// intxFinal = evento.offsetX;
	// intyFinal = evento.offsety;
	
	// dibujarForma(strColorMouse);
	
	var strColorMouse = "red";
	intxInicial = evento.offsetX;
	intyInicial = evento.offsetY;
	intxFinal = intxInicial + intMovimiento;
	intyFinal = intyInicial = intMovimiento;
	dibujarForma(strColorMouse);

	//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
}

function presionarTeclado(evento) {
	//console.log(evento.keyCode);
	
	var strColorTeclado = "blue";
	
	switch (evento.keyCode) {
		case objTeclas.ARRIBA: // Flecha arriba	
			intyFinal = intyFinal - intMovimiento;
			dibujarForma(strColorTeclado);
			intyInicial = intyInicial - intMovimiento;
			//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
			break;						
		case objTeclas.ABAJO: // Flecha abajo
			intyFinal = intyFinal + intMovimiento;
			dibujarForma(strColorTeclado);
			intyInicial = intyInicial + intMovimiento;
			//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
			break;	
		case objTeclas.IZQUIERDA: // Flecha izquierda
			intxFinal = intxFinal - intMovimiento;
			dibujarForma(strColorTeclado);
			intxInicial = intxInicial - intMovimiento;
			//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
			break;
		case objTeclas.DERECHA: // Flecha derecha
			intxFinal = intxFinal + intMovimiento;
			dibujarForma(strColorTeclado);
			intxInicial = intxInicial + intMovimiento;
			//console.log(intxInicial.toString() + intyInicial.toString() + intxFinal.toString() + intyFinal.toString());
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

function dibujarForma(strColor) {
	dibujarLinea(strColor,intxInicial,intyInicial,intxFinal,intyFinal);
}	


