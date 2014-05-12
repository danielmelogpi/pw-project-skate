/**
Funcao de inicialização da página
*/
function init() {

	var mapOptions = {
		center: new google.maps.LatLng(-16.6825443,-49.2538256),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map"),
		mapOptions);

}

/** adiciona os marcadores ao mapa */
function addPlaces() {
	var points = getPoints();
	points.forEach(function (point) {
		plotPoint(map, point);
	});

}

/** adiciona visualmente os marcadores */
/* icon: http://www.iconarchive.com/show/simpsons-icons-by-jonathan-rey/Bart-Simpson-02-Skate-icon.html */
function plotPoint(map, point) {
	var marker = new google.maps.Marker({
		position: point,
		map: window.map,
		title:"Local",
		icon: "img/icon/bart-skate-map.png"
	});
}


/** Retorna os pontos com os picos */
function getPoints() {
	return [
		new google.maps.LatLng(-16.658371, -49.266528),
		new google.maps.LatLng(-16.668238, -49.265670),
		new google.maps.LatLng(-16.684189, -49.303264),
		new google.maps.LatLng(-16.699974, -49.244556),
		new google.maps.LatLng(-16.683695, -49.253482)
	];

}


$(document).ready(function() {
	init();
	addPlaces();
});

