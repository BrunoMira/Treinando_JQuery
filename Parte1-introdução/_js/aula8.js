/**
 * Manipulação de Atributos
 * 
 * nós permite gerenciar atributos das tag selecionadas
 * 
 * attr() --        Recupera ou atribui um ou mais atributos
 * removeAttr() --  Remove um ou mais atributos
 * hasClass() --    Verifica se possui uma classe( retorno booleano )
 * addClass() --    Adiciona uma classe
 * 
 * toggleClass() -- Se a tag selecionada possui a classe, ele remove.
 *                  se não possui, ele atribui
 */

$(document).ready(function () {

  /*  
    buscando o conteúdo de um atributo
    alert( $("img").attr("title") );
  */


  /*
    Mudando conteudo de um atributo
  
     $("img")
      .attr("src", "../_imagens/abacaxi.jpg") 
      .attr("title" , "Outro titulo")
  */

  $("img").attr({
    title: "Abacatão",
    alt: "Chigante"
  });

  // toggle significa alternar, se a img possui a classe .destaque
  // ele vai remover, se não tiver, ele vai inserir

  $("button").click(function () {
    $("img").toggleClass("destaque");
  })


  // Para remover algum atributo
  //$("img").removeAttr("src").removeAttr("title");


  /*
    Adicionando uma classe à imagem
  
    alert( $("img").hasClass("destaque") );
  
    $("img").addClass("destaque");
  
    alert($("img").hasClass("destaque"));
  */

});
