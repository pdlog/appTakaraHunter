//---------------------------------------------------------------- EMPEZAR_BUSQUEDA ---------------------------------------------------------------*/
function empezar_busqueda(opcion)
{
	if (opcion == 1)
	{
		tesoro_posicion_x = 5;
		tesoro_posicion_y = 5;
		nombre_busqueda = "Búsqueda 1";
		descripcion_busqueda = "Descripción de la búsqueda 1";
	}
	if (opcion == 2)
	{
		tesoro_posicion_x = 10;
		tesoro_posicion_y = 10;
		nombre_busqueda = "Búsqueda 2";
		descripcion_busqueda = "Descripción de la búsqueda 2";
	}
	if (opcion == 3)
	{
		tesoro_posicion_x = 15;
		tesoro_posicion_y = 15;
		nombre_busqueda = "Búsqueda 3";
		descripcion_busqueda = "Descripción de la búsqueda 3";
	}
	if (opcion == 4)
	{
		tesoro_posicion_x = 20;
		tesoro_posicion_y = 20;
		nombre_busqueda = "Búsqueda 4";
		descripcion_busqueda = "Descripción de la búsqueda 4";
	}
	
	datos_busqueda = "";
	
	datos_busqueda = datos_busqueda + "<li data-role='list-divider'>Datos de la búsqueda</li>";
	datos_busqueda = datos_busqueda + "<li><strong>Nombre:</strong> " + nombre_busqueda + "</li>";
	datos_busqueda = datos_busqueda + "<li><strong>Descripción:</strong> " + descripcion_busqueda + "</li>";
	datos_busqueda = datos_busqueda + "<li data-role='list-divider'>Datos del tesoro</li>";
	datos_busqueda = datos_busqueda + "<li id='busqueda_actual_tesoro_x'><strong>X:</strong> " + tesoro_posicion_x + "</li>";
	datos_busqueda = datos_busqueda + "<li id='busqueda_actual_tesoro_y'><strong>Y:</strong> " + tesoro_posicion_y + "</li>";
	datos_busqueda = datos_busqueda + "<li data-role='list-divider'>Tu ubicación</li>";
	datos_busqueda = datos_busqueda + "<li id='busqueda_actual_mi_posicion_x'><strong>X:</strong></li>";
	datos_busqueda = datos_busqueda + "<li id='busqueda_actual_mi_posicion_y'><strong>Y:</strong></li>";
	
	$("#datos_busqueda_realizando").html(datos_busqueda);
	
	if (he_entrado_en_una_busqueda_antes == true)
	{
		$("#datos_busqueda_realizando").listview("refresh");
	}
	he_entrado_en_una_busqueda_antes = true;
		
	$.mobile.changePage("#page5");
	//alert("Voy a empezar la búsqueda " + opcion);
}
//---------------------------------------------------------------- ABANDONAR_BUSQUEDA ---------------------------------------------------------------*/
function dejar_busqueda(opcion)
{
	alert("Voy a dejar la búsqueda " + opcion);
}
//---------------------------------------------------------------- UNIRME_BUSQUEDA ---------------------------------------------------------------*/
function unirme_busqueda(opcion)
{
	alert("Voy a unirme a la búsqueda " + opcion);
}
function buscar_tesoro()
{
	//document.getElementById('audio').play(); no logro que funcione
	$.mobile.changePage("#page6");
}
