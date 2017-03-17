/*
  Manipulação de efeitos Básicos




*/

$(document).ready(function () {

  function ativarEfeito() {
    var efeito = $("#tipos-efeitos").val();

    var opcao = {};
    if (efeito === "scale") {
      opcao = { percent: 50 };
    } else if (efeito === "size") {
      opcao = { to: { width: 200, height: 60 } };
    }

    $("div").toggle(efeito, opcao, 1000);
  }

  $(":button").click(ativarEfeito);

})




/*

$(document).ready(function () {
  $(":button:eq(0)").click(function () {
    //$("div").fadeOut("slow"); // deixa 100% opaco
    // $("div").fadeIn("slow"); // deixa 0% opaco
    // $("div").fadeTo("slow", 0.3); // deixar escolher o nível de opacidade 0% - 100%
    $("div").fadeToggle("slow"); // alterna entre fadeOut ou fadeIn
  })
  $(":button:eq(1)").click(function () {
    //$("div").slideUp(1000);
    //$("div").slideDown(1000);
    $("div").slideToggle(1000);
  })
});

*/