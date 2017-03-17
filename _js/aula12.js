/*
  Manipulação do DOM - criando elementos
  
  Funções para incluir um elemento criado à outro elemento

  append() -- insere o elemento na última posição do elemento pai
  prepend() -- insere o elemento na primeira posição do pai
  after()  -- insere o elemento fora e antes da lista
  before() -- insere o elemento fora e depois da lista
  wrap() -- insere o elemento envolta da lista
  clone() -- copia todos os elementos presentes no elementos selecionado
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
});
