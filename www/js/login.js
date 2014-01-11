//---------------------------------------------------------------- LOGIN ---------------------------------------------------------------*/
$(document).ready(function()
{
	$("#boton-login").click(function(e)
	{
		$.mobile.loading( 'show', {
			text: 'Iniciando sesión...',
			textVisible: true,
			theme: 'a',
			html: ""
		});
		$("#boton-login").attr("disabled","disabled");
		
		var ip = $("#ip-server").val();
		//console.log("ola1");
		e.preventDefault();

		var username = $("#username-login").val();
		var password = $("#password-login").val();

		if(username != '' && password != '')
		{
			$.ajax({
				async: true,
				url: "http://" + ip + ":8000/loginMovil/",
				data:{'username': username,'password': password},
				type: "POST",
				dataType: 'json',
				success: function(respuesta)
				{
					var estado = respuesta.status;
					$.mobile.loading( "hide");
					if (estado == "fail")
					{
						$("#msg-error").text("El usuario o la contraseña son incorrectos.");
						//$.mobile.changePage("dialog-boxes/error/wrong-username-or-password.html", {role:"dialog"}); //<-- cargar con ajax
						//$.mobile.changePage("#caja-wrong-username-or-password", {role:"dialog"}); //<-- cargar sin ajax
					}
					if (estado == "ok")
					{
						$("#username-global").val(respuesta.user);
						$("#id-user-global").val(respuesta.id);
						cargarPerfil();
						cargarMisBusquedasPerfil();
						$.mobile.changePage("#page3");
					}
					if (estado == "User is not active")
					{
						$("#msg-error").text("El usuario no está activo.");
						//$.mobile.changePage("dialog-boxes/error/user-no-active.html", {role:"dialog"}); //<-- cargar con ajax
						//$.mobile.changePage("#caja-user-no-active", {role:"dialog"}); //<-- cargar sin ajax
					}
					//console.log(respuesta);
					//console.log("jsonexito");
				},
				error: function(respuesta)
				{
					$.mobile.loading( "hide");
					$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
					//$.mobile.changePage("#caja-ajax-failed", {role:"dialog"}); //<-- cargar sin ajax
					//console.log(respuesta);
					//console.log("jsonfail");
				}
			});
			
			//$("#boton-login").removeAttr("disabled");
			//$("#registro").css('visibility', 'visible');
		}
		else if(username == "" && password == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido ni el usuario ni la contraseña.");
			//$.mobile.changePage("dialog-boxes/error/no-username-no-password.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-username-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(username == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido el usuario.");
			//$.mobile.changePage("dialog-boxes/error/no-username.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-username", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(password == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido la contraseña.");
			//$.mobile.changePage("dialog-boxes/error/no-password.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		$("#boton-login").removeAttr("disabled");
		return false;
	});
});