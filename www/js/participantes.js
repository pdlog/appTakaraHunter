$(document).ready(function()
{
	$(".boton-participantes").click(function()
	{
		$.mobile.changePage("#caja-participantes", {role: "dialog"});
	});
});