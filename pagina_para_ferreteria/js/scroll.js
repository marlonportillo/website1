	$(window).scroll(function() {
	if ($("#menu").offset().top>50)
	 {
		$("#menu").addClass("color");
	}
	else
	{
		$("#menu").removeClass("color");
	}
	
});