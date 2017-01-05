$(document).ready(function($) {
	$('.content-item').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});
});