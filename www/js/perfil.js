//---------------------------------------------------------------- PERFIL ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(document).on("pageinit", "#page3", function()
	{
		//cargarPerfil();
	});
	
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
	//console.log(username_global);
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/users/?username=" + username_global,
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			//console.log(respuesta[0].username);
			var username = respuesta[0].username;
			//var email = respuesta[0].email;
			var nombre = respuesta[0].first_name;
			var apellidos = respuesta[0].last_name;
			var x = respuesta[0].px;
			var y = respuesta[0].py;
			var foto = "http://" + ip + ":8000/media/" + respuesta[0].foto;
			//console.log(foto);
			//var foto = "";
			//var datos_personales = "";
	
			//foto = foto + "<center><img src='img/foto_user.jpg' style='width:50%; max-width:175px; height:75%; max-height:275px;'></center>";
	
			//datos_personales = datos_personales + "<li data-role='list-divider'>Información de cuenta</li>";
			//datos_personales = datos_personales + "<li><strong>Nombre de usuario:</strong> " + username + "</li>";
			//datos_personales = datos_personales + "<li><strong>Correo:</strong> " + email + "</li>";
			//datos_personales = datos_personales + "<li data-role='list-divider'>Información personal</li>";
			//datos_personales = datos_personales + "<li><strong>Nombre:</strong> " + nombre + "</li>";
			//datos_personales = datos_personales + "<li><strong>Apellidos:</strong> " + apellidos + "</li>";
			//datos_personales = datos_personales + "<li><strong>Fecha de Nacimiento:</strong> 11/43/23</li>";
			//datos_personales = datos_personales + "<li><strong>Teléfono:</strong> 5675</li>";
			//datos_personales = datos_personales + "<li><strong>Profesión:</strong> Algo</li>";
			//datos_personales = datos_personales + "<li><strong>Sexo:</strong> Hombre</li>";
			$("#user-username").text("@" + username);
			$("#user-nombre").text(nombre + " " + apellidos);
			$("#foto_perfil").attr('src', foto);
			
			cargarMapaPerfil(x, y);
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-ajax-failed", {role:"dialog"}); //<-- cargar sin ajax
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
			//console.log(respuesta);
			if(respuesta.length == 0)
			{
				mis_busquedas = "<li><p>No hay búsquedas disponibles.</h2></p>";
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
			mis_busquedas = "<li><p>No hay búsquedas disponibles.</h2></p>";
			$("#mis-busquedasrec").html(mis_busquedas);
		}
	});
	
}