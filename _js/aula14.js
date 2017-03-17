/*
  Manipulação do CSS - Dimensões e Posição
  
  css() -- manipular os atributos de css sobre o elemento
  hasClass() -- verifica se o elemento possui uma determinada classe
  removeClass() -- remove uma classe do elemento
  addClass() -- adiciona uma classe no elemento

  offset() -- 
  position() -- da a posição da imagem na tela ex.
    5px da esquerda , 10px emcima

  width() -- da a largura atual da imagem 

  height() -- da a altura atual da imagem atual
  
*/

$(document).ready(function () {
  $("button").click(function () {


    //alert($("img").css("width"));

    //alert($("img").css("height"));

    //alert($("img").hasClass("imagem"));

    alert($("img").width())

    $("img").css({
      width: "600px",
      background: "red",
      border: "30px solid #B222222",
      padding: "5px"
    })
  })
});
