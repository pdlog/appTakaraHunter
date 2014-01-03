//---------------------------------------------------------------- BUSQUEDAS ---------------------------------------------------------------*/
function busquedas()
{
	$(".boton-lista-busquedas").click(function(e)
	{
		var mis_busquedas = "";
		var busquedas_disponibles = "";

		mis_busquedas = mis_busquedas + "<li id='busqueda1'><a href='javascript:empezar_busqueda(1);'><h2>Búsqueda 1</h2><p>Descripción de la búsqueda 1</p></a><a href='javascript:dejar_busqueda(1);'>Abandonar búsqueda</a></li>";
		mis_busquedas = mis_busquedas + "<li id='busqueda2'><a href='javascript:empezar_busqueda(2);'><h2>Búsqueda 2</h2><p>Descripción de la búsqueda 2</p></a><a href='javascript:dejar_busqueda(2);'>Abandonar búsqueda</a></li>";

		busquedas_disponibles = busquedas_disponibles + "<li id='busqueda3'><a href='javascript:unirme_busqueda(3);'><h2>Búsqueda 3</h2><p>Descripción de la búsqueda 3</p></a></li>";
		busquedas_disponibles = busquedas_disponibles + "<li id='busqueda4'><a href='javascript:unirme_busqueda(4);'><h2>Búsqueda 4</h2><p>Descripción de la búsqueda 4</p></a></li>";
	
		$("#mis-busquedas").html(mis_busquedas);
		$("#busquedas-disponibles").html(busquedas_disponibles);
		$("#mis-busquedas").listview("refresh");
		$("#busquedas-disponibles").listview("refresh");

		/*$.ajax({
			type: "GET",
			url: "http://127.0.0.1:8000/api/busquedas/",
			crossDomain: true,
			dataType: 'jsonp',
			success: function(respuesta)
			{
				lista_busquedas = ""
				for (var i in respuesta)
				{
					lista_busquedas = lista_busquedas + "<li><a href='#'><h2>" + respuesta[i].titulo + "</h2><p>" + respuesta[i].descripcion + "</p</a></li>"
				}
				$("#lista-busquedas").html(lista_busquedas);
				$("#lista-busquedas").listview("refresh");
				console.log(respuesta);
		  	//console.log("jsonexito");
			},
			error: function(respuesta)
			{
				$("#lista-busquedas").html("<li>Se ha producido un error y no se han cargado búsquedas.</li>");
				$("#lista-busquedas").listview("refresh");
				//console.log(respuesta);
		    //console.log("jsonfail");
			}
		});*/
	});
}