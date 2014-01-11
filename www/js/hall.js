$(document).ready(function()
{

	$(".boton-hall").click(function()
	{
		cargarHall();
		$.mobile.changePage("#page9");
	});
});

var medallas = ["img/medalla_campeon.png", "img/medalla_diamante.png", "img/medalla_platino.png", "img/medalla_oro.png", "img/medalla_plata.png", "img/medalla_bronce.png"];

function cargarHall()
{
	var ip = $("#ip-server").val();
	var listado = "";
	var j=1;
	
	$("#table-column-toggle").html("<thead><tr>th> Rango </th><th> Usuario </th><th> Tesoros </th><th> Medalla </th></tr></thead>");
	
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/hall/",
		type: "GET",
		dataType: 'json',
		success: function(response)
		{
			listado = $("#table-column-toggle").html() + "<tbody>";
			if(response.length > 5)
			{
				for(i=0; i<5; i++)
				{
					listado = listado + "<tr><th>" + j + "</th><td>" + response[i].username + "</td><td>" + response[i].recogidaPor__count + "</td><td><img src='" + medallas[i] + "' style='width:48px;'></td></tr>";
					//listado = listado + "<li id='hall" +  + "' ><a href=''><img src='" + medallas[i] + "' class='ui-li-icon ui-corner-none' style='width: 64px;'>" + j + ".- " + response[i].username + "</a></li>";
					j++;
				}
				for(i; i<response.length; i++)
				{
					listado = listado + "<tr><th>" + j + "</th><td>" + response[i].username + "</td><td>" + response[i].recogidaPor__count + "</td><td><img src='" + medallas[5] + "' style='width:48px;'></td></tr>";
				}
			}
			else
			{
				for(i=0; i<response.length; i++)
				{
					listado = listado + "<tr><th>" + j + "</th><td>" + response[i].username + "</td><td>" + response[i].recogidaPor__count + "</td><td><img src='" + medallas[i] + "' style='width:48px;'></td></tr>";
					//listado = listado + "<li id='hall" +  + "' ><a href=''><img src='" + medallas[i] + "' class='ui-li-icon ui-corner-none' style='width: 64px;'>" + j + ".- " + response[i].username + "</a></li>";
					j++;
				}
			}
			listado = listado + "</tbody>";
			$("#table-column-toggle").html(listado);
		},
		error: function(respuesta)
		{

		}
	});
}

