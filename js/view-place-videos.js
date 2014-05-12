function init() {
	thumbClick();
}

function thumbClick() {
	$(".thumbs img").click(function(e) {
		$(".panorama iframe")[0].src = $(e.target).data("vid");
	});
}

$(document).ready(function() {
	init();
});