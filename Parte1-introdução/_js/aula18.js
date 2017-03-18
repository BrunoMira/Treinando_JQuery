/*
  Manipulação de efeitos Básicos


hide(<tempo de transição>) --  para esconder um elemento

show(<tempo de transição>) -- para mostrar um elemento escondido

toggle(<tempo>) -- alterarna entre mostrar e esconder



*/
$(document).ready(function () {
  $(":button:eq(0)").click(function () {
    $("div").hide("slow"); //normal, fast, slow ou milessegundos
  });
  $(":button:eq(1)").click(function () {
    $("div").show(1000);
  });
  $(":button:eq(2)").click(function () {
    $("div").toggle("fast");
  });
});