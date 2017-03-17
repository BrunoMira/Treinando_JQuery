/*
  Manipulação do DOM - removendo elementos
  
  Funções para remover um elemento criado 
  remove(<id>) -- remove todos os elementos do DOM
  empty() -- remove o conteúdo dos elementos do DOM
  unwrap() -- remove o elemento que está envolvendo o elemento selecionado
  
*/

$(document).ready(function () {
  $("#append").click(function () {
    $("ul").append("<li>Dentro e na última Posição</li>");
  })

  $("#prepend").click(function () {
    $(
      "ul").prepend("<li>Dentro e na primeira Posição</li>");
  })
  $("#before").click(function () {
    $("ul").before("<h1>Fora e antes da lista</h1>");
  })

  $("#after").click(function () {
    $("ul").after("<h1>Fora e depois da lista</h1>");
  })

  $("#wrap").click(function () {
    $("ul").wrap("<p></p>");
  })

  $("#clone").click(function () {
    $("ul").append($("li").clone("<h1>Fora e depois da lista</h1>"));
  })

  $("#remove").click(function () {
    $("h1").remove()
  })

  $("#removeU").click(function () {
    $("ul").empty()
  })

  $("#unwrap").click(function () {
    $("ul").unwrap()
  })
});
