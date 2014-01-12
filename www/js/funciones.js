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

function cargarRango(username_global)
{
	var ip = $("#ip-server").val();
	var j = 1;
	var encontrado = false;
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/hall/",
		type: "GET",
		dataType: 'json',
		success: function(response)
		{
			console.log(response.length);
			for(i=0; i<response.length; i++)
			{
				if(username_global == response[i].username)
				{
					encontrado = true;
					if(i <= 4)
					{
						$("#rango-perfil").html("<center><h3>Rango: " + j + "</h3><img src='"+ medallas[i] +"' style='max-width: 40%;'><p style='font-size: 12px;'>Tesoros: " + response[i].recogidaPor__count + "</p></center>");
					}
					else
					{
						$("#rango-perfil").html("<center><h3>Rango: " + j + "</h3><img src='"+ medallas[5] +"' style='max-width: 40%;'><p style='font-size: 12px;'>Tesoros: " + response[i].recogidaPor__count + "</p></center>");
					}
					break;
				}
				j++;
			}
			if(encontrado == false)
			{
				$("#rango-perfil").html("<center><h3>Rango: - </h3><p style='font-size: 12px;'>Tesoros: 0</p></center>");
			}
		},
		error: function(response)
		{
			console.log("error");
		}
	});
}

