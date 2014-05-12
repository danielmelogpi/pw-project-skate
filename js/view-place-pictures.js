function init() {
	thumbClick();
}

function thumbClick() {
	$(".thumbs img").click(function(e) {
		$(".panorama img")[0].src = e.target.src;
	});
}

$(document).ready(function() {
	init();
});