$(document).ready(parpadear);


// Función para parpadear la pantalla de bienvenida.
function parpadear(){ 
	setInterval(function()
	{
		$('#tag-welcome').fadeIn(500).delay(250).fadeOut(500, parpadear) 
	}, 1000);
}

// Función para abrir el navegador web para realizar el registro

$("#registro").on('click', function(e)
{
	e.preventDefault();
	var ip = $("#ip-server").val();
    var targetURL = "http://" + ip + ":8000/registro/";

    window.open(targetURL, "_system");
});

// Función para mostrar un loading al incio de la app

$("#w-click").on('click', function(e)
{
	$.mobile.loading( 'show', {
		text: 'Cargando',
		textVisible: true,
		theme: 'a',
		html: ""
	});
	setTimeout(function()
	{
		$.mobile.loading( "hide");
		$.mobile.changePage("#page2");
	}, 3000);
	
});

function metrosKilometros(valor)
{
	var metros = valor;
	
	var km = metros / 1000;
	
	km = Math.round(km * 100) / 100;
	
	return km;
}

$("#page3").on("pageshow", function()
{
	var audio = new Media('sounds/shop.mp3');
	audio.play();
});


