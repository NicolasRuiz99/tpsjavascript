// EJ1


var edad = 20;
console.log("Tengo " + edad + " años")


// EJ2

/*
var num1 = 10;
var num2 = 4;

var res = num1 + num2;

console.log(num1 + " + " + num2 + " = " + res);

res = num1 - num2;

console.log(num1 + " - " + num2 + " = " + res);

res = num1 * num2;

console.log(num1 + " * " + num2 + " = " + res);

res = num1 / num2;

console.log(num1 + " / " + num2 + " = " + res);
*/

//EJ3

/*
var edad = 60;

if (edad < 60) {
    console.log("Todavía no está en condiciones para jubilarse");

} else {
    console.log("Ya se encuentra en condiciones para la jubilación");

}
*/

//EJ4

/*
var edad = 60;
var sexo = "M"; // M de Masculino o F de Femenino
if (sexo == "M") {
    if (edad >= 65) {
        console.log("Ya se encuentra en condiciones para la jubilación");
    } else {
        console.log("Todavía no está en condiciones para jubilarse");
    };
} else if (sexo == "F") {
    if (edad >= 60) {
        console.log("Ya se encuentra en condiciones para la jubilación");
    } else {
        console.log("Todavía no está en condiciones para jubilarse");
    }
}
*/

//EJ5 a)

/*
var cuenta, edad;

for (cuenta = 1; cuenta <= 10; cuenta++) {
    edad = prompt("Introduzca su edad (en cifras).", "");
    edad = parseInt(edad);

    if (edad < 18) {
        alert("Es usted menor de edad");
    } else {
        alert("Es usted mayor de edad");
    }
}
*/

//Uso básico de funciones
// EJ1

/*
function cambiarColor(color) {
    document.bgColor = color;
}
*/

//Matrices
// EJ1

/*
var nombres = new Array();

nombres[0] = "Nacho";
nombres[1] = "Arek";
nombres[2] = "Laura";
nombres[3] = "Sonia";
nombres[4] = "Gonzalo";
nombres[5] = "Eva";
nombres[6] = "Pedro";

document.write(nombres[0] + "<br>");
document.write(nombres[1] + "<br>");
document.write(nombres[2] + "<br>");
document.write(nombres[3] + "<br>");
document.write(nombres[4] + "<br>");
document.write(nombres[5] + "<br>");
document.write(nombres[6] + "<br>");

nombres[7] = "Manuel";
document.write(nombres[7] + "<br>");

var nom = prompt("Ingrese un nombre para buscar en la lista", "");

if (nombres.includes(nom) == false) {
    alert("Nombre no existe en la lista")
};
*/

// Propiedades de Math

/*
function genera_tabla(array1, array2) {
    var len = array1.length;
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 2; i++) {
        var hilera = document.createElement("tr");

        for (var j = 0; j < len; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(array1[j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
        array1 = array2;
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}
var date = new Date();

infoArray = new Array("getFullYear", "getYear", "getMonth", "getDate", "getHours", "getMinutes", "getSeconds", "getMilliseconds", "getTime")
dateArray = new Array(date.getFullYear(), date.getYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds(), date.getTime());

genera_tabla(infoArray, dateArray);
*/