$("document").ready(function () {

    $("textarea").bind("input keyup paste", function () {

        var maximo = 100;
        var disponivel = maximo - $(this).val().length;

        if (disponivel <= 0) { // se atingi o limite de caracteres
            var text = $(this).val().substr(0, maximo); // recorta os 100 primeiros caracteres
            $(this).text(texto); // e cola no texto, assim qualquer coisa q o usuário digitar vai se perdido
            disponivel = 0;
        }
        $("#contagem").text(disponivel); // quantidade de caracteres disponiveis
    });
});
