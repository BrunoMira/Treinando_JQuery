$("document").ready(function () {

    $(":input + span").css({ // formatando o tooltip
        border: "1px solid black", // bordinha marota
        padding: "2px 4px",        // deixando com um espaço retangular
        display: "none",           // esconder a dica
        background: "#ddd",         // fundo cinza
        marginLeft: "10px"          // margim para a esquerda, para sair de cima do campo, quando mostrado
    });

    $(":input").focus(function () { // quando o campo receber focus, a dica será mostrada
        $(this).next().fadeIn(1000); // efeitinho maroto
    }).blur(function () {
        $(this).next().fadeOut(1000); //quando perder o foco, a dica é escondida
    })
});