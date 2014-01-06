//--------------------------------------------------------- LOGOUT ---------------------------------------------------------*/
$(document).ready(function()
{
	$(".boton-logout").click(function(e)
	{
		var ip = $("#ip-server-global").val();
		$.ajax({
			async: true,
			url: "http://" + ip + ":8000/logoutMovil/",
			type: "GET",
			dataType: 'json',
			success: function(respuesta)
			{
				$("#username-global").val("");
				$("#id-user-global").val("");
				$.mobile.changePage("#page1");
				//var username_global = $("#username-global").val();
				//console.log(username_global);
				//var username_global = $("#username-global").val();
				//console.log(username_global);
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
	});
});