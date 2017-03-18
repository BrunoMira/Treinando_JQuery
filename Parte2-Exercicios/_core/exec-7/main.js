$("document").ready(function () {

    $("#marcar-todos").change(function () { // Checkbox 
        if (this.checked) {

            // usei prop em vez de attr, pois tem um esquema com propriedades Dirtys
            // se eu mudar algum checkbox, manualmente, o script não atinge mais aquele campo
            // com prop, isso não ocorre
            marcarTodos() // se tiver desmarcado, ele seleciona
        } else {
            desmarcarTodos() // contrário
        }
    });

    $(".tudo").click(marcarTodos);          //  primeiro link que vai selecionar todos

    $(".nada").click(desmarcarTodos);

    return false; // pro link não enviar nada do formulário
})


function marcarTodos() {
    $(":checkbox").prop("checked", true);

}

function desmarcarTodos() {
    $(":checkbox").prop("checked", false)
}
