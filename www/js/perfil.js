//---------------------------------------------------------------- PERFIL ---------------------------------------------------------------*/
$(document).ready(function()
{	
	$(".boton-perfil").click(function()
	{
		$.mobile.loading( 'show', {
			text: 'Cargando',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		cargarPerfil();
		cargarMisBusquedasPerfil();
		$.mobile.loading('hide');
	});
});

function cargarPerfil()
{
	var username_global = $("#username-global").val();
	var ip = $("#ip-server").val();

	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/users/?username=" + username_global,
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			var username = respuesta[0].username;
			var nombre = respuesta[0].first_name;
			var apellidos = respuesta[0].last_name;
			var x = respuesta[0].px;
			var y = respuesta[0].py;
			var foto;
			if(respuesta[0].foto != "")
			{
				foro = foto = "http://" + ip + ":8000/media/" + respuesta[0].foto;
			}
			else
			{
				foto = "http://" + ip + ":8000/media/fotos_usuario/default.jpg";
			}
				
			$("#user-username").text("@" + username);
			$("#user-nombre").text(nombre + " " + apellidos);
			$("#foto_perfil").attr('src', foto);
			
			cargarRango(username_global);
			cargarMapaPerfil(x, y);
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
		}
	});
}



function cargarMisBusquedasPerfil()
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
			if(respuesta.length == 0)
			{
				mis_busquedas = "<li><h2>No participas en búsquedas.</h2></li>";
			}
			else
			{
				mis_busquedas = "<li id='busquedarec" + respuesta[0].id + "' class='ui-li-has-thumb ui-first-child ui-last-child' ><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' href='javascript:empezar_busqueda(" + respuesta[0].id + ");'><img src='img/moneda_simple.png'><h2>" + respuesta[0].titulo + "</h2><p>" + respuesta[0].descripcion + "</p></a></li>";
			}
			$("#mis-busquedasrec").html(mis_busquedas);
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			mis_busquedas = "<li><h2>No participas en busquedas.</h2></p>";
			$("#mis-busquedasrec").html(mis_busquedas);
		}
	});
	
}