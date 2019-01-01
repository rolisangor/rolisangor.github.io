$(document).ready(function() {
	$('.calculator-btn').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.calculator-modal').fadeIn('fast', function() {
			
		});
	});
	$('.calculator-close-btn').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.calculator-modal').fadeOut('fast', function() {
			
		});
	});
	
});