/*
  Manipulação de eventos - Eventos do Mouse
 
 .click() -- evento de click sobre um elemento
 
 .dblclick() -- evento de duplo click sobre um elementos

 mouseover() -- evento quando o mouse passa pelo elemento

 mouseout() -- evento quando o mouse sai do elemento

 mousemove() -- quando o mouse está sobre o elemento

 mousedown() -- evento enquanto você segura o botão do mouse

 mouseup() -- evento de quando você solta o botão do mouse

 .hover() -- evento de quando passa por cima do evento

 .toggle() -- dispara 2 eventos alternadamente
 ex. 
    $( "td" ).toggle(function() {
        $( this ).addClass( "selected" );
      }, function() {
        $( this ).removeClass( "selected" );
    });
    
*/

$(document).ready(function () {
  $("span").click(function () {
    //  $("div").text("Click").css("color", "blue")
  })

    .dblclick(function () {
      $("div").text("Click Duplo").css("color", "red");
    })

    .mouseover(function () {
      $("div").text("Mouse Over").css("color", "white");
    })

    .mouseout(function () {
      $("div").text("Mouse Out").css("color", "black");
    })

    .mouseup(function () {
      $("div").text("Mouse up").css("color", "green");
    })

    .mousedown(function () {
      $("div").text("Mouse down").css("color", "yellow");
    })

    .mousemove(function (ponteiro) {
      //  $("div").text("X=" + ponteiro.clientX + " Y=" + ponteiro.clientY).css("color", "black");
    })
});
