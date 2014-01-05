//---------------------------------------------------------------- PERFIL ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(document).on("pageinit", "#page3", function()
	{
		//cargarPerfil();
	});
	
	$(".boton-perfil").click(function()
	{
		cargarPerfil();
	});
});

function cargarPerfil()
{
	var username_global = $("#username-global").val();
	var ip = $("#ip-server").val();
	console.log(username_global);
	$.ajax({
		async: true,
		url: "http://" + ip + ":8000/api/users/?username=" + username_global,
		type: "GET",
		dataType: 'json',
		success: function(respuesta)
		{
			//console.log(respuesta[0].username);
			var username = respuesta[0].username;
			var email = respuesta[0].email;
			var nombre = respuesta[0].first_name;
			var apellidos = respuesta[0].last_name;
			
			//var foto = "";
			var datos_personales = "";
	
			//foto = foto + "<center><img src='img/foto_user.jpg' style='width:50%; max-width:175px; height:75%; max-height:275px;'></center>";
	
			datos_personales = datos_personales + "<li data-role='list-divider'>Información de cuenta</li>";
			datos_personales = datos_personales + "<li><strong>Nombre de usuario:</strong> " + username + "</li>";
			datos_personales = datos_personales + "<li><strong>Correo:</strong> " + email + "</li>";
			datos_personales = datos_personales + "<li data-role='list-divider'>Información personal</li>";
			datos_personales = datos_personales + "<li><strong>Nombre:</strong> " + nombre + "</li>";
			datos_personales = datos_personales + "<li><strong>Apellidos:</strong> " + apellidos + "</li>";
			//datos_personales = datos_personales + "<li><strong>Fecha de Nacimiento:</strong> 11/43/23</li>";
			//datos_personales = datos_personales + "<li><strong>Teléfono:</strong> 5675</li>";
			//datos_personales = datos_personales + "<li><strong>Profesión:</strong> Algo</li>";
			//datos_personales = datos_personales + "<li><strong>Sexo:</strong> Hombre</li>";
	
			//$("#foto_perfil").html(foto);
			$("#datos_personales_usuario").html(datos_personales);
			
			$("#datos_personales_usuario").listview("refresh");
			//console.log(respuesta.status);
			//console.log("jsonexito");
		},
		error: function(respuesta)
		{
			$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-ajax-failed", {role:"dialog"}); //<-- cargar sin ajax
			//console.log(respuesta);
			//console.log("jsonfail");
		}
	});
}