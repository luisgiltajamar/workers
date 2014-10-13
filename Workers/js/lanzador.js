var trabajador;

function iniciar() {

    if (typeof (Worker)!=="undefined") {
        trabajador = new Worker("js/workerReloj.js");

    }
    trabajador.onmessage = function(evt) {
        document.getElementById("reloj").innerHTML = evt.data;

    };
    trabajador.onerror = function(err) {
        alert(err.data);

    };

}

(function() {

    iniciar();

})();