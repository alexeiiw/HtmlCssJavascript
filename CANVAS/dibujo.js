// Define las variables	
var objCanvas = document.getElementById("dibujo");
var objLienzo = objCanvas.getContext("2d");

console.log(objLienzo);

// objLienzo.beginPath();
// objLienzo.strokeStyle = "red";
// objLienzo.moveTo(100,100);
// objLienzo.lineTo(200,200);
// objLienzo.stroke();
// objLienzo.closePath();

DibujarLinea("red",100,100,200,200);

DibujarLinea("blue",10,100,200,50);

// Define funciones	
function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	objLienzo.beginPath();
	objLienzo.strokeStyle = color;
	objLienzo.moveTo(xinicial,yinicial);
	objLienzo.lineTo(xfinal,yfinal);
	objLienzo.stroke();
	objLienzo.closePath();
}