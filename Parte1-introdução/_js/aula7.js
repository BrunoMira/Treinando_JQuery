/**
 * Seletores de Atributos
 * 
 * Permite selecionar uma tag por alguma característica de seu    
 * atributo
 * 
 * sintaxe - $("tag[atributo (simbolo) = 'conteúdo']") 
 * 
 * 
 * $("a[href='com']") -- seleciona a tag que seja igual a 'com'
 * 
 * 
 *  $("a[class|=group]") -- seleciona a tag que possua o prefixo group, esse prefixo pode ser considerado se estiver sozinho ou antes de hifen ( - ) ex.
 * <a class='group'/>  ,  <a class="group-input"/>
 * 
 * palavras inteiras NÃO FUNCIONAM ex.
 *   <a class="groupForm"/>
 * 
 * 
 * $("a[href*='com']") -- seleciona uma tag a q contenha 'com' em seu atributo href
 * 
 * 
 * $("a[href!='com']") -- seleciona a tag que não contenha 'com'
 * 
 * 
 * $("a[href$='www']") -- seleciona a tag que inicia com 'www'
 * 
 * 
 * $("a[href^='br']") -- seleciona a tag que termina com 'br'
 * 
 * 
 *  $("a[href]") -- seleciona a tag que possua o atributo 'href'
 * 
 * 
 * $("a[name] a[href!='com']") -- seleciona a tag que atenda à múltiplas condições
 * 
 * 
 */

$(document).ready(function () {

  // $("a[name=menu]").css("background", "orange");

  // pesquisando dentro do elemento a , dentro do atributo href
  // se contêm em seu conteúdo o valor 'min'
  //  $("a[href*=com]").css("background", "orange");

  // começa com 'www'
  $("a[href$='www']").css("background", "orange");
  ;


  // termina com 'com'
  $("a[href^=com]").css("background", "red");

  $("a[text='Menu']").css("background", "orange");



});