/**
 * Selectores por filtro básico
 * seleciona um determinado elemento dependendo de um filtro
 * a referência é o número do index desse elemento no array de filhos do seu pai, ex.
 * <div>
 *  <p></p>
 *  <p></p>
 *  <p></p>
 * </div>
 * o elemento div possui um array(2) com 3 filhos, começando do 0
 * se a referência for 0, o primeiro <p> será selecionado 
 * 
 * 
 * sintaxe $("elemento:filtro<(referência)>") (<> não é obrigátorio em todos os casos)
 * 
 * 
 * :animated() seleciona um elemento que possui uma animação naquele instante
 * 
 * 
 * :eq(referência) -- seleciona um elemento que possui o index igual à referência
 * 
 * 
 * :even -- seleciona os elementos onde o valor do index é par
 * 
 * 
 * :odd -- seleciona os elementos onde o valor do index é impar
 * 
 * 
 * :first -- seleciona a primeira ocorrência do elemento
 * 
 * 
 * :last -- seleciona a última ocorrência do elemento
 * 
 * 
 * :focus -- seleciona um elemento que está sobre o efeito focus
 * 
 * 
 * :gt(referência)  -- seleciona os elementos que possuem index maiores que a referência
 * 
 * 
 * :header  -- seleciona os elementos que são cabeçalhos como h1, h2, h3 ...
 * 
 * 
 * :lang(prefixo da linguagem) -- seleciona um elemento que possui uma determinada linguagem
 * 
 * 
 * : lt(referência)  --seleciona os elementos que possuem index menores que a referência
 * 
 * 
 * :root() -- seleciona um array de elementos, onde o primeiro será sempre o <html>, seguindo a hierarquia do document
 * 
 * 
 * not() - seleciona o inverso de algum seletor
 * 
 */

$(document).ready(function () {
    $("tbody tr").css("background-color", "gray");
    //$("tbody tr:not(tbody tr:last)").css("background-color", "gray");

    //  $("tbody tr:gt(3)").css("background-color", "green");

    // $("tbody tr:lt(3)").css("background-color", "green");

    //  $("tbody tr:eq(3)").css("background-color", "green");

    //  $("tbody tr:last").css("background-color", "green");

    //  $("tbody tr:first").css("background-color", "green");

    // $("tbody tr:gt(3)").css("background-color", "green");

    $("tbody td:nth-child(1)").css("font-weight", "bold");

});