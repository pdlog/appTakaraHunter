//---------------------------------------------------------------- LOGIN ---------------------------------------------------------------*/
function login()
{
	$("#boton-login").click(function(e)
	{
		//console.log("ola1");
		e.preventDefault();

		var username = $("#username-login").val();
		var password = $("#password-login").val();
		if(username != '' && password != '')
		{
			$("#boton-login").attr("disabled","disabled");
			//console.log("ola2");

			/*$.ajax({
				async: true,
				success: function(respuesta)
				{
					console.log(respuesta);
		      console.log("jsonexito");
				},
				url: "http://127.0.0.1:8000/loginMovil/",
				data:{'username': username,'password': password},
				type: "POST",
				dataType: 'json',
				error: function(respuesta)
				{
					//$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
					$.mobile.changePage("#ajax-failed", {role:"dialog"}); //<-- cargar sin ajax
					console.log(respuesta);
		      console.log("jsonfail");
				}
			});*/
			////////////////////////////////////////////// CREACION DEL PERFIL //////////////////////////////////
			var foto = "";
			var datos_personales = "";

			foto = foto + "<center><img src='img/foto_user.jpg' style='width:50%; max-width:175px; height:75%; max-height:275px;'></center>";

			datos_personales = datos_personales + "<li data-role='list-divider'>Información de cuenta</li>";
			datos_personales = datos_personales + "<li><strong>Nombre de usuario:</strong> pepeito5464</li>";
			datos_personales = datos_personales + "<li><strong>Correo:</strong> 5464@546.com</li>";
			datos_personales = datos_personales + "<li data-role='list-divider'>Información personal</li>";
			datos_personales = datos_personales + "<li><strong>Nombre:</strong> Pepe</li>";
			datos_personales = datos_personales + "<li><strong>Apellidos:</strong> OP OLA</li>";
			datos_personales = datos_personales + "<li><strong>Fecha de Nacimiento:</strong> 11/43/23</li>";
			datos_personales = datos_personales + "<li><strong>Teléfono:</strong> 5675</li>";
			datos_personales = datos_personales + "<li><strong>Profesión:</strong> Algo</li>";
			datos_personales = datos_personales + "<li><strong>Sexo:</strong> Hombre</li>";

			$("#foto_perfil").html(foto);
			$("#datos_personales_usuario").html(datos_personales);

			if(he_hecho_login_antes == true) // PARA KE EL PERFIL SE VEA BIEN MODO WARRO NIVEL DIOS
			{
				$("#datos_personales_usuario").listview("refresh");
			}
			he_hecho_login_antes = true;
			$.mobile.changePage("#page3");
			$("#boton-login").removeAttr("disabled");
		}
		else if(username == "" && password == "")
		{
			//$.mobile.changePage("dialog-boxes/error/no-username-no-password.html", {role:"dialog"}); //<-- cargar con ajax
			$.mobile.changePage("#caja-no-username-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(username == "")
		{
			//$.mobile.changePage("dialog-boxes/error/no-username.html", {role:"dialog"}); //<-- cargar con ajax
			$.mobile.changePage("#caja-no-username", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(password == "")
		{
			//$.mobile.changePage("dialog-boxes/error/no-password.html", {role:"dialog"}); //<-- cargar con ajax
			$.mobile.changePage("#caja-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		return false;
	});
}
