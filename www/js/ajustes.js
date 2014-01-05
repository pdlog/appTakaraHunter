$(document).ready(function()
{
	$(".botonajustes").click(function(e)
	{
		var ip = $("#ip-server-global").val();
		
		//$.mobile.changePage("dialog-boxes/info/ajustes.html", {role:"dialog"}); //<-- cargar con ajax
		$("#serverip").val(ip); 
		//$.mobile.changePage("#caja-sobre-app", {role:"dialog"}); //<-- cargar sin ajax
	});
	
	$("#boton-guardar").click(function(a)
	{
		var ip = $("#serverip").val();

		if(ip != "")
		{
			$("#ip-server-global").val(ip);
		}
		else
		{
			$("#ip-server-global").val('127.0.0.1');
		}
		
		$.mobile.changePage('index.html');
	});
});