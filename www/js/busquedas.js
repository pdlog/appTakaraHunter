//---------------------------------------------------------------- BUSQUEDAS ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(document).on("pageinit", "#page4", function()
	{
		//cargarPerfil();
	});
	
	$(".boton-busquedas").click(function()
	{
		cargarBusquedas();
	});
});

function cargarBusquedas()
{
	var id_global = $("#id-user-global").val();
	
	var mis_busquedas = "";
	var busquedas_disponibles = "";

	//Buscar las busquedas a las que me puedo unir.
	$.ajax({
		async: true,
		url: "http://127.0.0.1:8000/api/busquedas/tojoin/?id=" + id_global,
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			console.log(respuesta);
			if(respuesta.length == 0)
			{
				busquedas_disponibles = "<li><h2>No hay búsquedas disponibles a las que te puedas unir.</h2></li>";
			}
			else
			{
				for (i in respuesta)
				{
					busquedas_disponibles = busquedas_disponibles + "<li id='busqueda" + respuesta[i].id + "'><a href='javascript:unirme_busqueda(" + respuesta[i].id + ");'><h2>" + respuesta[i].titulo + "</h2><p>" + respuesta[i].descripcion + "</p></a></li>";
				}
			}
			$("#busquedas-disponibles").html(busquedas_disponibles);
			$("#busquedas-disponibles").listview("refresh");
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			busquedas_disponibles = "<li><h2>No hay búsquedas disponibles a las que te puedas unir.</h2></li>";
			$("#busquedas-disponibles").html(busquedas_disponibles);
			$("#busquedas-disponibles").listview("refresh");
		}
	});
		
	$.ajax({
		async: true,
		url: "http://127.0.0.1:8000/api/busquedas/?participantes=" + id_global + "&estado=a",
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			console.log(respuesta);
			if(respuesta.length == 0)
			{
				mis_busquedas = "<li><h2>No hay búsquedas disponibles en las que participas.</h2></li>";
			}
			else
			{
				for (i in respuesta)
				{
					mis_busquedas = mis_busquedas + "<li id='busqueda" + respuesta[i].id + "'><a href='javascript:empezar_busqueda(" + respuesta[i].id + ");'><h2>" + respuesta[i].titulo + "</h2><p>" + respuesta[i].descripcion + "</p></a><a href='javascript:dejar_busqueda(" + respuesta[i].id + ");'>Abandonar búsqueda</a></li>";
				}
			}
			$("#mis-busquedas").html(mis_busquedas);
			$("#mis-busquedas").listview("refresh");
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			mis_busquedas = "<li><h2>No hay búsquedas disponibles en las que participas.</h2></li>";
			$("#mis-busquedas").html(mis_busquedas);
			$("#mis.busquedas").listview("refresh");
		}
	});
}