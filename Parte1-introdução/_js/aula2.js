

$(document).ready(function(){
    $("a")
    .css("color","red")     //será aplicado a todos os elementos a encontrados no DOM 
    .click(function (){
        $("#titulo")        //Recupera um elemento do DOM
                            //Métodos da biblioteca JQuery
        .css("color", "red")        
        .text("curso JQuery")
        .hide()
        .fadeToggle();
    })
});

/*
window.onload = function () {
     document.getElementsByTagName("a")[0].onclick = alterarTitulo;
}

function alterarTitulo(){
    document.getElementById("titulo").style.color="red";
}

*/