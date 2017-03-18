$("document").ready(function () {

    $("#filmes tbody tr:odd").addClass("impar"); //cria o eveito de 'zebra'

    $("#filmes thead tr th")        //Seleciona todos os cabeçalhos da tabela
        .append("<span>+</span>")   //adiciona um sinal no texto do cabeçalho
        .css("cursor", "pointer")   // e muda o cursor, para indicar ao usuário que ele pode interagir
        .each(function (posicao) {  // passando o CellIndex do cabeçalho na tabela
            $(this).click(function () { // adicionando o evento de click em cada cabeçalho

                $("td").removeClass("destaque");  // limpa as colunas, caso já estiverem destacadas
                $("#filmes tbody tr").each(function () { // rodando cada linha da tabela
                    $(this)
                        .children("td") // seleciono os filhos(celulas) de cada linha 
                        .eq(posicao) //verifica se a celula está na mesma coluna que o cabeçalho clicado
                        .addClass("destaque"); // se estiver, adiciona a classe
                });

            }).dblclick(function () {
                $("td").removeClass("destaque"); // com um duplo click ,removo todas as celudas marcadas;
            });
        });
});


 /* Forma Apresentada no Vídeo  
             $(this).click(function () {
                 $("td").removeClass("destaque");
                 $(this)
                     .parents("thead")
                     .siblings("tbody")
                     .children("tr").each(function () {
                         $(this).children("td:eq(" + posicao + ")")
                             .addClass("destaque");
                     })
             });
         */