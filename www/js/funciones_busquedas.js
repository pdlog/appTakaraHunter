//---------------------------------------------------------------- EMPEZAR_BUSQUEDA ---------------------------------------------------------------*/
function empezar_busqueda(opcion)
{
	$.ajax({
		async: true,
		url: "http://127.0.0.1:8000/api/busquedas/" + opcion + "/",
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			var titulo = respuesta.titulo;
			var descripcion = respuesta.descripcion;
			
			$.ajax({
				async: true,
				url: "http://127.0.0.1:8000/api/tesoros/?busqueda=" + opcion,
				type: "GET",
				dataType: 'json',
				success: function(respuesta)
				{
					var tesoro_x = respuesta[0].x;
					var tesoro_y = respuesta[0].y;
		
					$("#titulo_busqueda_realizando").val(titulo);
					$("#descripcion_busqueda_realizando").val(descripcion);
					
					$("#tesorox_busqueda_realizando").val(tesoro_x);
					$("#tesoroy_busqueda_realizando").val(tesoro_y);
					
					$('#boton-atrapar-tesoro').attr('href',"javascript:buscar_tesoro(" + opcion + ");");
					
					$.mobile.changePage("#page5");
					
					//console.log(respuesta);
				},
				error: function(respuesta)
				{
					$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
				}
			});
			//console.log(respuesta);
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
		}
	});
	
	//alert("Voy a empezar la búsqueda " + opcion);
}
//---------------------------------------------------------------- ABANDONAR_BUSQUEDA ---------------------------------------------------------------*/
function dejar_busqueda(opcion)
{
	var id_global = $("#id-user-global").val();
	
	$.ajax({
		async: true,
		url: "http://127.0.0.1:8000/api/busquedas/" + opcion + "/unjoin/",
		type: "POST",
		dataType: 'json',
		data:{'user': id_global},
		success: function(respuesta)
		{
			if (respuesta.status == "unjoined")
			{
				cargarBusquedas();
			}
			//console.log(respuesta);
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
		}
	});
}
//---------------------------------------------------------------- UNIRME_BUSQUEDA ---------------------------------------------------------------*/
function unirme_busqueda(opcion)
{
	var id_global = $("#id-user-global").val();
	
	$.ajax({
		async: true,
		url: "http://127.0.0.1:8000/api/busquedas/" + opcion + "/join/",
		type: "POST",
		dataType: 'json',
		data:{'user': id_global},
		success: function(respuesta)
		{
			//console.log(respuesta);
			if (respuesta.status == "joined")
			{
				cargarBusquedas();
			}
			else if (respuesta.status == "busqueda sin tesoros")
			{
				$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			}
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
		}
	});
}
function buscar_tesoro(opcion)
{
	alert("Tesoro de la busqueda " + opcion + " capturado!");
	//document.getElementById('audio').play(); no logro que funcione
	$.mobile.changePage("#page6");
}
