/*
  Manipulação de eventos - Teclado e Formulário
 
 keyup() -- aciona quando uma tecla é solta


 keypress() -- aciona quando uma tecla é pressionada


 keydown() --  aciona quando uma tecla é segurada
  
*/

$(document).ready(function () {
  $(":text").keyup(function () {
    $("div").text($(this).val());
  }).focus(function () {
    $(":text").css("background", "lightblue")
    //  $("div").text("Focus")
  }).blur(function () {
    $(":text").css("background", "white")
    // $("div").text("Mensagens");
  });

  $("form").submit(function () {
    if ($(":text").val() == "XTI") {
      return true;
    } else {
      return false;
    }
  });

  $(":text").change(function () {
    var escolha = $("option:selected").text();
    //  $("div").text("Escolhido: " + escolha);
  });

  $("textarea").select(function () {
    $("div").text("Selecionou");
  })
});
