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

	map.markers = [];

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

	/* adiciona evento */
	google.maps.event.addListener(marker, 'click', function(event) {
			zoomOnMarker(event, marker);
			addButtons();
		}
	);

	/** adiciona ao array do mapa, para controle */
	map.markers.push(marker);

}

/* centraliza e da zoom em um marcador */
function zoomOnMarker (event, marker) {
	var center =  new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
	map.setCenter(center);
	map.setZoom(16);
}

function addButtons() {
	var nav = $("<input type='button' value='navegar até aqui' class='btn btn-info'> ");
	var details = $("<input type='button' value='detalhes' onclick='details' class='btn btn-info'>");

	details.click(goTodetails);
	
	$(".buttons").html("");
	$(".buttons").append(nav);
	$(".buttons").append(details);
}

/** go to place details page */
function goTodetails() {
	location.href='view-place.html';
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

