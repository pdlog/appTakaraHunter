//---------------------------------------------------------------- PERFIL ---------------------------------------------------------------*/
function sobre()
{
	$(".botonsobre").click(function(e)
	{
		//$.mobile.changePage("dialog-boxes/info/sobre-app.html", {role:"dialog"}); //<-- cargar con ajax Hay que crearlo
		$.mobile.changePage("#caja-sobre-app", {role:"dialog"}); //<-- cargar sin ajax
	});
}