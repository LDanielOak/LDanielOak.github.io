var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");

var preco = document.querySelector("#preco").textContent;
preco = preco.replace("R$ ", "").replace(",", ".");

$input_quantidade.oninput = function() {
    var quantidade = $input_quantidade.value;
    var total = quantidade * preco;

    $output_total.value = "R$ " + total.toFixed(2).replace(".", ",");
}