//---------------------------------------------------------------- CONFIG ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(".botonconfig").click(function(e)
	{
		$.mobile.changePage("#caja-config", {role:"dialog"}); //<-- cargar con ajax
	});
	
	$("#boton-guardar").on('click', function()
	{
		$("#caja-config").dialog("close");
	});	
});
	
	




