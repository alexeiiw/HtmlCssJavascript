// Define arreglo para las imagenes
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"]= "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

// Define la clase principal
class Pakiman {
    constructor(nombre, vida, ataque) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+this.nombre+"</strong><br />");
        document.write("Vida: "+this.vida+"<br />");
        document.write("Ataque: "+this.ataque+"<br />");
        document.write("</p>");
        document.write("<hr />")
    }
}

// Instancia de clase
// var cauchin = new Pakiman("Cauchin",100,30);
// var pokacho = new Pakiman("Pokacho",80,50);
// var tocinauro = new Pakiman("Tocinauro",120,40);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Tocinauro",120,40));
coleccion.push(new Pakiman("Pokacho",80,50));

// cauchin.mostrar();
// tocinauro.mostrar();
// pokacho.mostrar();

// for (var i=0; i<=2; i++) {
//     coleccion[i].mostrar();
// }

// for (var p in coleccion) {
//     coleccion[p].mostrar();
// }

for (var p of coleccion) {
    p.mostrar();
}