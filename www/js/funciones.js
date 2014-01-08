$(document).ready(parpadear);

function parpadear(){ 
	setInterval(function()
	{
		$('#tag-welcome').fadeIn(500).delay(250).fadeOut(500, parpadear) 
	}, 1000);
}