// CONST PARA FUNCIONAMINETO DE TOOLTIPS 

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// EVENTO PARA CAPTURAR NOMBRE EN EL FORMULARIO DE CONTACTO PARA MOSTRAR UN MENSAJE ALERT

$(function(){
    $("#formContacto").on("submit", function(event){
        event.preventDefault();
        var nombre = $("#nombre").val();
        var mensaje = `Tu mensaje fue enviado con éxito. Muchas gracias ${nombre} por contactarte con nosotros.`;
        alert(mensaje);
        this.reset();
    })
});
