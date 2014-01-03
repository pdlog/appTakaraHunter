//---------------------------------------------------------------- PERFIL ---------------------------------------------------------------*/
function perfil()
{
	$(".boton-perfil").click(function(e)
	{
		var foto = "";
		var datos_personales = "";

		foto = foto + "<center><img src='img/foto_user.jpg' style='width:50%; max-width:175px; height:75%; max-height:275px;'></center>";

		datos_personales = datos_personales + "<li data-role='list-divider'>Información de cuenta</li>";
		datos_personales = datos_personales + "<li><strong>Nombre de usuario:</strong> pepeito5464</li>";
		datos_personales = datos_personales + "<li><strong>Correo:</strong> 5464@546.com</li>";
		datos_personales = datos_personales + "<li data-role='list-divider'>Información personal</li>";
		datos_personales = datos_personales + "<li><strong>Nombre:</strong> Pepe</li>";
		datos_personales = datos_personales + "<li><strong>Apellidos:</strong> OP OLA</li>";
		datos_personales = datos_personales + "<li><strong>Fecha de Nacimiento:</strong> 11/43/23</li>";
		datos_personales = datos_personales + "<li><strong>Teléfono:</strong> 5675</li>";
		datos_personales = datos_personales + "<li><strong>Profesión:</strong> Algo</li>";
		datos_personales = datos_personales + "<li><strong>Sexo:</strong> Hombre</li>";

		$("#foto_perfil").html(foto);
		$("#datos_personales_usuario").html(datos_personales);
		if(he_hecho_login_antes == true) // PARA KE EL PERFIL SE VEA BIEN MODO WARRO NIVEL DIOS
		{
			$("#datos_personales_usuario").listview("refresh");
		}
		he_hecho_login_antes = true;
		
		/*var x = 5;//document.getElementById('user_px').value;
		var y = 5; //document.getElementById('user_py').value;
		var center = new google.maps.LatLng(x, y);
		var mapOptions =
		{
			center:center,
			zoom:4,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			draggable:true,
			panControl:false,
			zoomControl:true,
			mapTypeControl:false,
			scaleControl:false,
			streetViewControl:false,
			overviewMapControl:false,
		};
		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  			
  		var marker = new google.maps.Marker(
  		{
    		map:map,
    		draggable:false,
    		animation: google.maps.Animation.DROP,
    		position: center,
    		icon: 'img/moneda_takara.png' 
  		});*/
	});
}