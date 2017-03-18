$("document").ready(function () {

    $("#filmes tbody tr:odd").addClass("impar"); // criando o efeito de zebra na tabela

    // adicionando os eventos houver e click
    $("td").hover(adicionar_tooltip, remover_tooltip)
        .click(encontrar_Parecidos);

});

//essa função irá retornar o título do cabeçalho 
//de acordo com a posição da celula clicada
function buscarCabecalho(indexOf_celula) {
    return $("#filmes thead tr th")
        .eq(indexOf_celula)
        .text();
}

// essa função destaca o campo e adiciona o tooltip
function adicionar_tooltip() {
    $(this).addClass("destaque")
        //acrecentando o tooltip, antes da celula
        .prepend("<div class='tooltip'></div>");

    // aqui eu procuro o tooltip acrecentado
    $(this).children("div")

        // e adiciono o texto da celula clicada + o título da coluna
        // i título da coluna será retornado pela função BuscarCebaçalho
        .text(
        $(this)
            .text() + " " + buscarCabecalho($(this)[0].cellIndex));
}

//essa função percorre as celulas e remove o destaque e tooltip
function remover_tooltip() {
    $("td").removeClass("destaque")
        .children("div")
        .remove();
}

// essa função procura as linhas que possuem campos com o mesmo
// valor do clicado, destacando todas as linhas em comum.
function encontrar_Parecidos() {
    // removendo o destaque e tooltip da da celula
    remover_tooltip();

    // removendo o destaque das linhas selecionadas anteriormente
    $("tbody tr").removeClass("destaque");

    //adicionando destaque as linhas que possuem o mesmo texto que a celula clicada
    $("tbody tr:contains(" + $(this).text() + ")")
        .addClass("destaque");

}