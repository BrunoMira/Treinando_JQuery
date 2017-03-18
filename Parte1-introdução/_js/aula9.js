/*
  Manipulação de conteúdo 

  obs. quando eu tigo formatado, quero dizer que ele interpreta
    tags html ex.(<h1>Olá</h1>). 

  html() - recupera ou atribui um texto formatado à uma tag
  text() - recupera ou atribui um texto não formatado à uma tag
  val() - recupera o conteúdo de uma tag
  replaceWith() - substitui a tag por outra tag

*/

$(document).ready(function () {
  $("button").click(function () {
    /*
      a tag html() trás todo o conteúdo da tag selecionada
      alert($("p").html());
    */

    /*
      Substitui o texto na tag selecionada
      $("p").html("<h1>conheça o Brasil</h1>");
    
    */

    /*
      text() coloca um texto não formatado na tag selecionada
      alert($("textarea").text("<h1>conheça o Brasil</h1>"));
    */

    /*
      colocando o conteúdo da tag p dentro da div
      $("textarea").text($("p").html());
    */

    // alert($("textarea").val());

    /*  
     colocando o texto da textarea dentro do p
      $("p").html($("textarea").val());
     */
    /*
        substitue a tag por outra tag
        $("textarea").replaceWith("<p> Quem falou comigo?</p>")
    
    */
  });
});
