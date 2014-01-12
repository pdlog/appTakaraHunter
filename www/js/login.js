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
					}
				},
				error: function(respuesta)
				{
					$.mobile.loading( "hide");
					$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
				}
			});
		}
		else if(username == "" && password == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido ni el usuario ni la contraseña.");
		}
		else if(username == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido el usuario.");
		}
		else if(password == "")
		{
			$.mobile.loading( "hide");
			$("#msg-error").text("No has introducido la contraseña.");
		}
		$("#boton-login").removeAttr("disabled");
		return false;
	});
});