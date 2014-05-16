function buscar() {
	location.href = "busca-resultados.html#" + $(".search").val();
}

function fillSearch() {
	var value = location.hash.replace(/#/,"");
	$(".search").val(value);
}

$(document).ready(function() {
	fillSearch();
});