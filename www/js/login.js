//---------------------------------------------------------------- LOGIN ---------------------------------------------------------------*/
$(document).ready(function()
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

			$.ajax({
				async: true,
				url: "http://127.0.0.1:8000/loginMovil/",
				data:{'username': username,'password': password},
				type: "POST",
				dataType: 'json',
				success: function(respuesta)
				{
					var estado = respuesta.status;
					if (estado == "fail")
					{
						$.mobile.changePage("dialog-boxes/error/wrong-username-or-password.html", {role:"dialog"}); //<-- cargar con ajax
						//$.mobile.changePage("#caja-wrong-username-or-password", {role:"dialog"}); //<-- cargar sin ajax
					}
					if (estado == "ok")
					{
						$("#username-global").val(respuesta.user);
						cargarPerfil();
						$.mobile.changePage("#page3");
					}
					if (estado == "User is not active")
					{
						$.mobile.changePage("dialog-boxes/error/user-no-active.html", {role:"dialog"}); //<-- cargar con ajax
						//$.mobile.changePage("#caja-user-no-active", {role:"dialog"}); //<-- cargar sin ajax
					}
					//console.log(respuesta);
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
			
			$("#boton-login").removeAttr("disabled");
		}
		else if(username == "" && password == "")
		{
			$.mobile.changePage("dialog-boxes/error/no-username-no-password.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-username-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(username == "")
		{
			$.mobile.changePage("dialog-boxes/error/no-username.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-username", {role:"dialog"}); //<-- cargar sin ajax
		}
		else if(password == "")
		{
			$.mobile.changePage("dialog-boxes/error/no-password.html", {role:"dialog"}); //<-- cargar con ajax
			//$.mobile.changePage("#caja-no-password", {role:"dialog"}); //<-- cargar sin ajax
		}
		return false;
	});
});