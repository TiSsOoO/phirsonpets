$(document).on("input", "#TxtObservacoes", function () {
    var limite = 500;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    $(".caracteres-descricao").text(caracteresRestantes);
});

$(document).on("input", "#TxtObservacoes2", function () {
    var limite = 500;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    $(".caracteres-servicos").text(caracteresRestantes);
});
