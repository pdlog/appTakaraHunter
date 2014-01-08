//---------------------------------------------------------------- LOGIN ---------------------------------------------------------------*/
function onDeviceReady()
{

$("#boton-login").click(function(e)
{
	$.mobile.loading('show'); // Muestra un gif loading
	e.preventDefault();
	console.log('ola1');

	var ip = $("#ip-server").val();
	var username = $("#username-login").val();
	var password = $("#password-login").val();

	if(username != '' && password != '')
	{
		$("#boton-login").attr("disabled","disabled");

		$.ajax({
			async: true,
			url: "http://" + ip + ":8000/loginMovil/",
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
					$("#id-user-global").val(respuesta.id);
					cargarPerfil();
					$.mobile.loading('hide'); // Oculta el loading icon
					$.mobile.changePage("perfil.html");
				}
				if (estado == "User is not active")
				{
					$.mobile.changePage("dialog-boxes/error/user-no-active.html", {role:"dialog"}); //<-- cargar con ajax
					//$.mobile.changePage("#caja-user-no-active", {role:"dialog"}); //<-- cargar sin ajax
				}
			},
			error: function(respuesta)
			{
				$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
				//$.mobile.changePage("#caja-ajax-failed", {role:"dialog"}); //<-- cargar sin ajax
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
}