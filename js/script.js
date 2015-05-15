$(document).ready(function() {
	$('#add-items').keydown(function(event) {
			if (event.which === 13) {
			var addItem = $('#add-items').val();
			$('#list').prepend('<li>'+addItem+'</li>');
			}
		});

});
