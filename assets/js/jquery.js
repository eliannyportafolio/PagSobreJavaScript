$(document).ready(function () {
    $("#aplicaciones").click(function () {
        $(".texaplicaciones").addClass("d-none")
    });
    $("#aplicaciones").dblclick(function () {
        $(".texaplicaciones").removeClass("d-none")
    });
    $("#introduccion").click(function () {
        $(".textintro").addClass("d-none")
    });
    $("#introduccion").dblclick(function () {
        $(".textintro").removeClass("d-none")
    });
    $("#definicion").click(function () {
        $(".textdefinicion").addClass("d-none")
    });
    $("#definicion").dblclick(function () {
        $(".textdefinicion").removeClass("d-none")
    });
    $("#funcionalidades").click(function () {
        $(".tfunc").addClass("d-none")
    });
    $("#funcionalidades").dblclick(function () {
        $(".tfunc").removeClass("d-none")
    });
    $("#afuncionalidades").click(function () {
        $(".afun").addClass("d-none")
    });
    $("#afuncionalidades").dblclick(function () {
        $(".afun").removeClass("d-none")
    });

    $("#capacitaciones").click(function () {
        $(".card").addClass("d-none")
    });
    $("#capacitaciones").dblclick(function () {
        $(".card").removeClass("d-none")
    });
    $("#como").click(function () {
        $(".comoul").addClass("d-none")
    });
    $("#como").dblclick(function () {
        $(".comoul").removeClass("d-none")
    });

    $("#btn-enviar").click(function () {
        var nombre = $("#d-inscripcion").val(); 
        console.log(nombre);
        alert(" ¡Listo!  " + nombre +" La Inscripcion Fue Realizada Satisfactoriamente"); 
    });

});