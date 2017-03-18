$("document").ready(function () {


    $("tbody tr:not(.sub)").hide(); // escondendo o conteúdo de todas os sub-títulos

    // acrescentando uma img que serve como um botão para expandir
    $(".sub th").append(" <img src='mais.jpg' class='icone'/>");

    $("img").click(function () {    // ao clicar na img 

        // verifica se a img é um sinal de menos, caso for, o sub-titulo está expandido
        if ($(this).attr("src") == "menos.jpg") {

            $(this).attr("src", "mais.jpg") // troco a img para o sinal de '+'
                //volto na arvore DOM, para o pai dessa imagem
                //que é um <tr>
                .parents()
                // percorro os irmãos desse <tr> até achar um outro sub-titulo
                .nextUntil("tr.sub")
                // escondo os <tr>'s
                .hide();
        } else {
            // o sub-titulo está contraido
            $(this).attr("src", "menos.jpg") // volta a img de '-'
                //volto ao pai da img
                .parents()
                // percorro os irmão até o outro sub-titulo
                .nextUntil("tr.sub")
                // mostro os <tr>
                .show();
        }
    })

});