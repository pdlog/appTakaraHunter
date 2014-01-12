//---------------------------------------------------------------- BUSQUEDAS ---------------------------------------------------------------*/
$(document).ready(function()
{	
	$(".boton-misbusquedas").click(function()
	{
		$.mobile.loading( 'show', {
			text: 'Cargando',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		cargarMisBusquedas();
		$.mobile.loading('hide');
	});
	
	$(".boton-busquedas").click(function()
	{
		$.mobile.loading( 'show', {
			text: 'Cargando',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		cargarBusquedas();
		$.mobile.loading('hide');
	});
});

function cargarMisBusquedas()
{
	var id_global = $("#id-user-global").val();
	var ip = $("#ip-server").val();
	
	var mis_busquedas = "";
	
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/busquedas/?participantes=" + id_global + "&estado=a",
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			console.log(respuesta);
			if(respuesta.length == 0)
			{
				mis_busquedas = "<li><h2>No participas en búsquedas.</h2></li>";
			}
			else
			{
				for (i in respuesta)
				{
					mis_busquedas = mis_busquedas + "<li id='busqueda" + respuesta[i].id + "'><a href='javascript:empezar_busqueda(" + respuesta[i].id + ");'><h2>" + respuesta[i].titulo + "</h2><p>";
					mis_busquedas = mis_busquedas + respuesta[i].descripcion + "</p></a><a href='javascript:dejar_busqueda(" + respuesta[i].id + ",\"" + respuesta[i].titulo + "\");'>Abandonar búsqueda</a></li>"; 
				}
			}
			$("#mis-busquedas").html(mis_busquedas);
			$("#mis-busquedas").listview("refresh");
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			mis_busquedas = "<li><h2>No participas en búsquedas.</h2></li>";
			$("#mis-busquedas").html(mis_busquedas);
			$("#mis.busquedas").listview("refresh");
		}
	});
}

function cargarBusquedas()
{
	var id_global = $("#id-user-global").val();
	var ip = $("#ip-server").val();
	
	var busquedas_disponibles = "";

	//Buscar las busquedas a las que me puedo unir.
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/busquedas/tojoin/?id=" + id_global,
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			console.log(respuesta);
			if(respuesta.length == 0)
			{
				busquedas_disponibles = "<li><h2>No hay búsquedas disponibles.</h2></li>";
			}
			else
			{
				for (i in respuesta)
				{
					busquedas_disponibles = busquedas_disponibles + "<li id='busqueda" + respuesta[i].id + "'><a href='javascript:unirme_busqueda(" + respuesta[i].id + ",\"" + respuesta[i].titulo + "\");'><h2>" + respuesta[i].titulo + "</h2><p>" + respuesta[i].descripcion + "</p></a></li>";
				}
			}
			$("#busquedas-disponibles").html(busquedas_disponibles);
			$("#busquedas-disponibles").listview("refresh");
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			busquedas_disponibles = "<li><h2>No hay búsquedas disponibles.</h2></li>";
			$("#busquedas-disponibles").html(busquedas_disponibles);
			$("#busquedas-disponibles").listview("refresh");
		}
	});
		
	
}
