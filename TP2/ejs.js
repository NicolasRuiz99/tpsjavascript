<<<<<<< HEAD
//Objetos en JavaScript
//EJ1
/*
function Coche(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.IVA = function() {
        res = this.precio + (this.precio * 21) / 100;
        return res;
    };
}

var coche1 = new Coche("Renault", "Laguna", 1800);
var coche2 = new Coche("Ford", "Mondeo", 2300);
var coche3 = new Coche("Mercedes", "600", 8500);
var coche4 = new Coche("Seat", "Cordoba", 3000);
var cadena;
var cadena2;

cadena =
    "El coche " +
    coche1.marca +
    " " +
    coche1.modelo +
    " vale " +
    coche1.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche1.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche2.marca +
    " " +
    coche2.modelo +
    " vale " +
    coche2.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche2.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche3.marca +
    " " +
    coche3.modelo +
    " vale " +
    coche3.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche3.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche4.marca +
    " " +
    coche4.modelo +
    " vale " +
    coche4.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche4.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
*/
//JSON. Callbacks
//EJ2
/*
const API_URL = "http://ws.audioscrobbler.com";
const METHOD_URL = "/2.0/?method=chart.gettopartists&api_key=1a05309ea26d1f418a36bd513fe259d7&format=json"; //Chart.getTopArtists
const FULL_URL = API_URL + METHOD_URL;

$.get(FULL_URL, function(info) {
    var msj;
    var name;
    var playcount;
    var listeners;
    for (var i = 0; i < 10; i++) {
        name = info.artists.artist[i].name;
        playcount = info.artists.artist[i].playcount;
        listeners = info.artists.artist[i].listeners;
        msj = "Name: " + name + ", Playcount: " + playcount + " Listeners: " + listeners;
        console.log(msj);
    }
});
*/

// Eventos
// EJ3

(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            var forms = document.getElementsByClassName("needs-validation");
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                            swal("Error", "Please, provide valid information", "error");
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();

window.addEventListener("reset", function() {
    swal("Completed", "Form deleted", "warning");
});

// EJ4
// Juego El Señor de los Anillos
// Cada jugador tiene 100 puntos de vida maximos (pv) y 100 puntos de habilidad maximos (sp)
// La habilidad curar gasta 10 sp
// La habilidad tirarFlecha gasta 50 sp y resta al oponente 25 pv
// La habilidad regenerarSP regenera los sp al maximo
// El comando estado permite ver los pv y sp actuales del jugador

function avisoMuerte() {
    console.log("%cEste jugador ha sido derrotado", "color: red");
}

function avisoSP() {
    console.log("%cSin sp suficientes", "color: orange");
}

function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function(objetivo) {
        if (this.pv > 0 && objetivo.pv > 0) {
            if (this.sp >= 10) {
                this.sp = this.sp - 10;
                objetivo.pv = 100;
                console.log("%c" + objetivo.name + " ha sido curado", "color: green");
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.regenerarSP = function() {
        if (this.pv > 0) {
            this.sp = 100;
            console.log("%cSP regenerados al maximo", "color: blue");
        } else {
            avisoMuerte();
        }
    };
    this.tirarFlecha = function(objetivo) {
        if (this.pv > 0) {
            if (this.sp >= 50) {
                this.sp = this.sp - 50;
                objetivo.pv = objetivo.pv - 25;
                console.log(
                    "%c" + objetivo.nombre + " recibio 25 puntos de daño",
                    "color: purple"
                );
                if (objetivo.pv <= 0) {
                    console.log(
                        "%c" + objetivo.nombre + " ha sido derrotado ",
                        "color: red"
                    );
                }
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.estado = function(objetivo) {
        if (objetivo.pv > 0) {
            console.log(
                "Estado de " +
                objetivo.nombre +
                ":  pv => " +
                objetivo.pv +
                " sp => " +
                objetivo.sp
            );
        } else {
            avisoMuerte();
        }
    };
}

var orco = new Jugador("Orco");
=======
//Objetos en JavaScript
//EJ1
/*
function Coche(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.IVA = function() {
        res = this.precio + (this.precio * 21) / 100;
        return res;
    };
}

var coche1 = new Coche("Renault", "Laguna", 1800);
var coche2 = new Coche("Ford", "Mondeo", 2300);
var coche3 = new Coche("Mercedes", "600", 8500);
var coche4 = new Coche("Seat", "Cordoba", 3000);
var cadena;
var cadena2;

cadena =
    "El coche " +
    coche1.marca +
    " " +
    coche1.modelo +
    " vale " +
    coche1.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche1.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche2.marca +
    " " +
    coche2.modelo +
    " vale " +
    coche2.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche2.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche3.marca +
    " " +
    coche3.modelo +
    " vale " +
    coche3.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche3.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
cadena =
    "El coche " +
    coche4.marca +
    " " +
    coche4.modelo +
    " vale " +
    coche4.precio +
    " dolares.";
cadena2 = "Precio + IVA = " + coche4.IVA() + " dolares.";
document.write(cadena + " " + cadena2 + "<br>");
*/
//JSON. Callbacks
//EJ2
/*
const API_URL = "http://ws.audioscrobbler.com";
const METHOD_URL = "/2.0/?method=chart.gettopartists&api_key=1a05309ea26d1f418a36bd513fe259d7&format=json"; //Chart.getTopArtists
const FULL_URL = API_URL + METHOD_URL;

$.get(FULL_URL, function(info) {
    var msj;
    var name;
    var playcount;
    var listeners;
    for (var i = 0; i < 10; i++) {
        name = info.artists.artist[i].name;
        playcount = info.artists.artist[i].playcount;
        listeners = info.artists.artist[i].listeners;
        msj = "Name: " + name + ", Playcount: " + playcount + " Listeners: " + listeners;
        console.log(msj);
    }
});
*/

// Eventos
// EJ3

(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            var forms = document.getElementsByClassName("needs-validation");
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                            swal("Error", "Please, provide valid information", "error");
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();

window.addEventListener("reset", function() {
    swal("Completed", "Form deleted", "warning");
});

// EJ4
// Juego El Señor de los Anillos
// Cada jugador tiene 100 puntos de vida maximos (pv) y 100 puntos de habilidad maximos (sp)
// La habilidad curar gasta 10 sp
// La habilidad tirarFlecha gasta 50 sp y resta al oponente 25 pv
// La habilidad regenerarSP regenera los sp al maximo
// El comando estado permite ver los pv y sp actuales del jugador

function avisoMuerte() {
    console.log("%cEste jugador ha sido derrotado", "color: red");
}

function avisoSP() {
    console.log("%cSin sp suficientes", "color: orange");
}

function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function(objetivo) {
        if (this.pv > 0 && objetivo.pv > 0) {
            if (this.sp >= 10) {
                this.sp = this.sp - 10;
                objetivo.pv = 100;
                console.log("%c" + objetivo.name + " ha sido curado", "color: green");
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.regenerarSP = function() {
        if (this.pv > 0) {
            this.sp = 100;
            console.log("%cSP regenerados al maximo", "color: blue");
        } else {
            avisoMuerte();
        }
    };
    this.tirarFlecha = function(objetivo) {
        if (this.pv > 0) {
            if (this.sp >= 50) {
                this.sp = this.sp - 50;
                objetivo.pv = objetivo.pv - 25;
                console.log(
                    "%c" + objetivo.nombre + " recibio 25 puntos de daño",
                    "color: purple"
                );
                if (objetivo.pv <= 0) {
                    console.log(
                        "%c" + objetivo.nombre + " ha sido derrotado ",
                        "color: red"
                    );
                }
            } else {
                avisoSP();
            }
        } else {
            avisoMuerte();
        }
    };
    this.estado = function(objetivo) {
        if (objetivo.pv > 0) {
            console.log(
                "Estado de " +
                objetivo.nombre +
                ":  pv => " +
                objetivo.pv +
                " sp => " +
                objetivo.sp
            );
        } else {
            avisoMuerte();
        }
    };
}

var orco = new Jugador("Orco");
>>>>>>> 7260033568fa5774578f797f748d612bbfcaf149
var legolas = new Jugador("Legolas^");