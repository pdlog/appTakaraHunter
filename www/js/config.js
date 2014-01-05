//---------------------------------------------------------------- CONFIG ---------------------------------------------------------------*/
$(document).ready(function()
{
	$("#ip-server").val("127.0.0.1");
	
	$(".botonconfig").click(function(e)
	{
		//$.mobile.changePage("dialog-boxes/info/sobre-app.html", {role:"dialog"}); //<-- cargar con ajax
		$.mobile.changePage("#caja-config", {role:"dialog"}); //<-- cargar sin ajax
	});
});