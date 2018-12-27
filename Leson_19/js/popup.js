$(document).ready(function() {
	$('.popup-btn').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.main-modal').fadeIn('fast', function() {
			
		});
	});
	$('.main-modal-btn').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.main-modal').fadeOut('fast', function() {
			
		});
	});
});