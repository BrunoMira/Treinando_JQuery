/**
 * Seletores Hierárquicos
 * selecionem pelo parentescos entre os elementos na Árvore DOM
 * 
 * 
 * 
 * $("Pai Descendente") -- seleciona todos os descendentes(apenas os elementos iguais ao definido) que o pai possuir
 * 
 * 
 * 
 * $("pai > Filho") -- selecione o próximo filho do pai definido
 * 
 * 
 * 
 * $("Filho1 + Filho2") -- selecione todos os irmãos que estão na mesma sequencia q o definido, ex.
 * 
 * $("label + input")
 * 
 *  <label/> <input/>  <-- será selecionado
 *      <div>
 *          <label/> <input/>  <-- será selecionado
 *          <input/> <label/>   <-- não será selecionado
 *          <label/> <input/>  <-- será selecionado
 *      </div>
 *  <label/> <input/>  <-- será selecionado
 * 
 *  
 * 
 * $(Filho1 ~ Filho2) -- selecione todos os Irmãos iguais ao Filho2, a partir do Filho1, desde que eles possuem o mesmo pai 
 * 
 * 
 */

$(document).ready(function () {
    // $("div span").css("color","red"); //seletor de descedente
    // $("li > ul").css("color", "gray"); // seletor de um filho
    //$("#Item1_1 + li").css("color","blue"); //Seletor de irmão
    $("#Item1_1 ~ li").css("color", "red");
});