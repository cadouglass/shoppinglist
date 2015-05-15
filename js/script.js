


$("#add-items").keydown(function(event) {

	var enterWasPressed = event.which === 13;

	if(enterWasPressed) {
		
	 	var textValue = $("#add-items").val();

	 	$("#list").append("<li>" + textValue + " <span class='delete-line'> X</span> </li>");


	}
	 
});