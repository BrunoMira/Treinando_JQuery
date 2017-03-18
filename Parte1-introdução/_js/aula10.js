/*
  Seletor de Formulário
  permite selecionar um input atravez do seu tipo
  
  $(:tipo)

  $(":button") seleciona um input de type="button"

  funciona do mesmo jeito para 
  text, password, checkbox, reset, submit, file, image, radio,


  $(":enabled") seleciona os inputs habilitados
    :disabled seleciona os desabilitados

  $(":checked") - seleciona os inputs 'checados'

  $(":focus") - seleciona o input que está recebendo focus

  $(":selected") -- seleciona o elemento selecionado pelo mouse
   

*/

$(document).ready(function () {

  /*
    // seleciona todos os inputs
    $(":input").css("border", "3px dotted red"); 
  
  */

  /*

  //Selecionar apenas os inputs do tipo button

  $(":button").click(function () {
    $(":text").css("border", "3px dotted red");
  });

*/

  //seleciona apenas o input do tipo password
  $(":password").css("border", "3px dotted red");



  //$(":radio").parent().css("border", "3px dotted red");

  $(":checkbox").css("border", "3px dotted red");

});
