/*
  Manipulação do DOM 
   
   $("<elemento/>") esse comando cria um elemento


   $("<elemento/>", {atributo: "conteúdo"}) -- usado para criar um elemento com atributos definidos

   
   .append(elemento) acrescenta o elemento à algum outro elemento
 

*/

$(document).ready(function () {
  /* adicionando uma img ao Body
    var img = $("<img/>");
    img.attr("src", "../_imagens/abacate.jpg");
    $("body").append(img);
  */

  var img =
    $("<img/>", {
      src: "../_imagens/abacate.jpg",
      title: "Abacate Delicioso",
      click: function () {
        alert("amo Abacate")
      }
    });

  var ul = $("<ul/>")
    .append($("<li/>")
      .append("Programador de Interface"));


  $("body").append(img).append(ul);
});
