/**
 *  Seletores de Conteúdo
 * Permite verificar se uma tag possui um determinado texto
 * 
 * contains() -- verifica se um elemento contêm um texto
 * empty() -- verifica se o elemento está vázio ( return boolean )
 * has() -- verifica se o elemento contêm algo (return boolean )
 * :parent -- verifica se o elemento é pai de alguém
 * 
 * 
 */

$(document).ready(function () {
  // $("td:contains(Crime)").css("background","red")
  //$("td:empty").css("background","orange");
  $("td:not(td:empty)").css("background", "gray");
  // $("td:has(strong)").css("background","orange");
});