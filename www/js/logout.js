//--------------------------------------------------------- LOGOUT ---------------------------------------------------------*/
$(document).ready(function()
{
	$(".boton-logout").click(function(e)
	{
		var ip = $("#ip-server").val();
		
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
			},
			
			error: function(respuesta)
			{
				$.mobile.changePage("dialog-boxes/error/ajax-failed.html", {role:"dialog"}); //<-- cargar con ajax
			}
		});
	});
});