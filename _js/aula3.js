/**
 * Seletor Simples
 * 
 * * - selecione todos os elementos
 * 
 * .class -- seleciona os elementos que possui a classe definida
 * 
 * #id -- selecione o elemento que possui o id definido
 * 
 * $("elemento1, elemento2, elemento3") -- selecione multiplos elementos
 * 
 * 
 */

$(document).ready(function () {
    $("*").css("color", "blue");
    $(".outro").css("color", "black");
    $("#titulo").css("color", "green");
    $("h1, a, body").css("background-color", "yellow");
});