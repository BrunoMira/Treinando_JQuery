$("document").ready(function () {

    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes tbody tr").hover(
        function () { $(this).addClass("destaque") },
        function () { $(this).removeClass("destaque") }
    );

    $("#filmes tbody td:eq(8)").hover(
        function () { $(this).addClass("easterEgg").text("Oloko Bicho") },
        function () { $(this).removeClass("easterEgg").text("145'") }
    );
});