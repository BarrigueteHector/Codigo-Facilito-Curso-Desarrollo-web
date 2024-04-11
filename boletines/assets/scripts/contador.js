// Establece la fecha de finalización en 25 de abril del año actual
var countDownDate = new Date();
countDownDate.setMonth(3);  // Los meses en JavaScript comienzan desde 0 (Enero), por lo que Abril es 3
countDownDate.setDate(25);
countDownDate.setHours(0, 0, 0, 0);  // Establece la hora a medianoche

// Actualiza el contador cada 1 segundo
var countdownFunction = setInterval(function() {

    // Obtiene la fecha y hora actuales
    var now = new Date().getTime();

    // Encuentra la diferencia entre ahora y la fecha de cuenta atrás
    var distance = countDownDate - now;

    // Calcula el tiempo restante para días, horas y minutos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Muestra el resultado en los elementos con id="days", id="hours" y id="minutes"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    // Si la cuenta atrás ha terminado, escribe algún texto 
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "--";
        document.getElementById("hours").innerHTML = "--";
        document.getElementById("minutes").innerHTML = "--s";
    }
}, 1000);