function verificarEdad() {
    let edad = prompt("Por favor, introduce tu edad:");
    if (edad !== null) {
        if (isNaN(edad)) {
            alert("Por favor, introduce un número válido.");
        } else if (parseInt(edad) > 18) {
            alert("Ya puedes conducir.");
        } else {
            alert("Aún no puedes conducir.");
        }
    }
}

function mostrarCalificacion() {
    let nota = prompt("Introduce una nota (número):");
    if (nota !== null) {
        nota = parseFloat(nota);
        let calificacion;
        if (nota >= 0 && nota < 3) {
            calificacion = "Muy deficiente";
        } else if (nota >= 3 && nota < 5) {
            calificacion = "Insuficiente";
        } else if (nota >= 5 && nota < 6) {
            calificacion = "Suficiente";
        } else if (nota >= 6 && nota < 7) {
            calificacion = "Bien";
        } else if (nota >= 7 && nota < 9) {
            calificacion = "Notable";
        } else if (nota >= 9 && nota <= 10) {
            calificacion = "Sobresaliente";
        } else {
            calificacion = "Nota inválida";
        }
        alert("Calificación: " + calificacion);
    }
}

function concatenarCadenas() {
    let cadenas = [];
    let cadena;
    while ((cadena = prompt("Introduce una cadena de texto:")) !== null) {
        if (cadena !== "") {
            cadenas.push(cadena);
        }
    }
    alert("Cadenas concatenadas: " + cadenas.join(" - "));
}

function calcularDNILetra() {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    while (true) {
        let dni = prompt("Introduce el número de DNI (0-99999999):");
        if (dni === null) break;
        if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
            let numeroDNI = parseInt(dni);
            let letra = letras[numeroDNI % 23];
            alert("La letra del DNI " + numeroDNI + " es: " + letra);
        } else {
            alert("Número inválido. Por favor, introduce un número entre 0 y 99999999.");
        }
    }
}
