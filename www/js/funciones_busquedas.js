//---------------------------------------------------------------- EMPEZAR_BUSQUEDA ---------------------------------------------------------------*/
var tesoro_x;
var tesoro_y;

function empezar_busqueda(opcion)
{
	$.mobile.loading( 'show', {
		text: 'Cargando',
		textVisible: true,
		theme: 'a',
		html: ""
	});
	var ip = $("#ip-server").val();
	var listado = "";	
	$("#list-participantes").empty();
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/users/",
		type: "GET",
		dataType: 'json',
		success: function(usuarios)
		{
			$.ajax({
				async: true,
				url: "http://" + ip + ":8000/api/busquedas/" + opcion + "/",
				type: "GET",
				dataType: 'json',
				success: function(busqueda)
				{
					var titulo = busqueda.titulo;
					var descripcion = busqueda.descripcion;
						
					for(i=0; i<busqueda.participantes.length; i++)
					{
						for(j=0; j<usuarios.length; j++)
						{
							
							if(usuarios[j].id == busqueda.participantes[i])
							{
								listado = listado + "<p id='usuario" + usuarios[j].id + "'>@" + usuarios[j].username + "</li><br>";
							}
						}	
					}
					$("#list-participantes").html(listado);
						
					$.ajax({
						async: true,
						url: "http://" + ip + ":8000/api/tesoros/?busqueda=" + opcion,
						type: "GET",
						dataType: 'json',
						success: function(respuesta)
						{
							tesoro_x = respuesta[0].x;
							tesoro_y = respuesta[0].y;
					
							cargarMapaBusqueda(tesoro_x, tesoro_y);
							cargarMapaAtraparTesoro();
		
							$("#cab-detalles-busqueda").text(titulo);
							$("#des-detalles-busqueda").text(descripcion);
							$("#tesoro_x").text(tesoro_x);
							$("#tesoro_y").text(tesoro_y);
					
							$('#boton-atrapar').attr('href',"javascript:buscar_tesoro(" + opcion + ");");
							
							$.mobile.changePage("#page5");
					
						},
						error: function(respuesta)
						{
							$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
						}
					});
				},
				error: function(respuesta)
				{
					
				}
			});	
		},
		error: function(respuesta)
		{

		}
	});
	$.mobile.loading('hide');
}

$(".boton-participantes").click(function()
{
	$.mobile.changePage("#caja-participantes", {role: "dialog"});
});


//---------------------------------------------------------------- ABANDONAR_BUSQUEDA ---------------------------------------------------------------*/
function dejar_busqueda(opcion, titulo)
{
	var ip = $("#ip-server").val();
	var id_global = $("#id-user-global").val();
	
		$.mobile.loading( 'show', {
			text: 'Abandonando...',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		$.ajax({
			async: true,
			url: "http://" + ip + ":8000/api/busquedas/" + opcion + "/unjoin/",
			type: "POST",
			dataType: 'json',
			data:{'user': id_global},
			success: function(respuesta)
			{
				if (respuesta.status == "unjoined")
				{
					cargarMisBusquedas();
				}
			},
			error: function(respuesta)
			{
				$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			}
		});
	
	$.mobile.loading('hide');
}
//---------------------------------------------------------------- UNIRME_BUSQUEDA ---------------------------------------------------------------*/
function unirme_busqueda(opcion, titulo)
{
	var ip = $("#ip-server").val();
	var id_global = $("#id-user-global").val();

		$.mobile.loading( 'show', {
			text: 'Uniendose...',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		$.ajax({
			async: true,
			url: "http://" + ip + ":8000/api/busquedas/" + opcion + "/join/",
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
	$.mobile.loading('hide');
}
function buscar_tesoro(opcion)
{
	var ip = $("#ip-server").val();
	var id_global = $("#id-user-global").val();
	
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/busquedas/" + opcion + "/catch/",
		type: "POST",
		dataType: 'json',
		data:{'user': id_global},
		success: function(respuesta)
		{
			//console.log(respuesta);
			if (respuesta.status == "catched")
			{
				$.mobile.changePage("#page6");
			}
			else if (respuesta.status == "busqueda cerrada")
			{
				$.mobile.changePage("dialog-boxes/error/tesoro-atrapado.html", {role:"dialog"}); //<-- cargar con ajax
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
	//document.getElementById('audio').play(); no logro que funcione
}









