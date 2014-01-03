//---------------------------------------------------------------- HELP ---------------------------------------------------------------*/
function help()
{
	$(".botonhelp").click(function(e)
	{
		//$.mobile.changePage("dialog-boxes/info/help.html", {role:"dialog"}); //<-- cargar con ajax Hay que crearlo
		$.mobile.changePage("#caja-help", {role:"dialog"}); //<-- cargar sin ajax
	});
}