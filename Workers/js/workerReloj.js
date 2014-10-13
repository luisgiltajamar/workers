function calculaHora() {
    var hora = new Date();

    var horaTexto = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();

    postMessage(horaTexto);
    setTimeout("calculaHora()", 1000);

}

calculaHora();