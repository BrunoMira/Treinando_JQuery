/*
  Manipulação de eventos avançados
    Alguns eventos mais trabalhados


  bind()  --  Permite Agregar mais de um evento a um elemento, quando um desses elementos forem disparados, ele vão chamar a função definida. então é preciso fazer um tratamento de evento para saber qual evento foi disparado.


  unbind() - permite remover um ou mais eventos de um elemento


  trigger()  -- Permite disparar um evento via Javascript, sem a necessidade de uma interação do usuário


  delegate()  --  Permite definir um evento para os elementos de algum tipo ou classe ou tags. mesmos que esses ainda não existam. assim você delega aquele grupo de elementos, que sempre teram esse elemento.


*/
$(document).ready(function () {


  //função que recebe o tecla pressionada e adiciona na mensagem da div(tipo angular)
  function msg(e) {
    $("div").text($(this).val());
  }


  //atribuindo ao input type="text" 3 eventos, que vão disparar a function msg'

  //$(":text").bind("keyup focus blur", msg)

  $(":text").bind({
    keyup: msg,
    focus: function (e) {
      $(":text").css("background", "lightblue");
    },
    blur: function (e) {
      $(":text").css("background", "white");
    },
    selected: function (e) {
      $(":text").val("");
    }
  })


  //usando delegate, eu posso pré-definir que os todos os elementos de um dado tipo, criado como filho do elemento selecionado, teram os eventos descritos.
  // ex. todos os input type='text', filhos de fieldset, teram o evento keyup agregados.
  //$("fieldset").delegate(":text", "keyup", msg);

  // o bind pode recever 1 ou vários eventos, e pode receber uma ou mais funções <-- !IMPORTANTE
  $(":button").bind("click", function (e, src, width) {

    //criando uma imagem e atribuindo ao div, os atributos src e width, seram recebidos dinamicamente.
    $("div").append($("<img/>").attr("src", src).css("width", width));
  })


  // evento trigger dispara um evento, neste caso, será o evento click, passando os parâmetros, src e width
  $(":button").trigger("click", ["../_imagens/abacate.jpg", "400px"]);

  //$("fieldset").append("<input id='criado' style='margin=10px'/>");

  //retirando o evento keyup do input
  // $(":text").unbind("keyup", msg);


  // $(":text").val("Texto incluido via JQuery");
  //$(":text").trigger("focus");


});