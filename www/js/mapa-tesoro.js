/*var mapOptions;
var map;
var marker;
var watchID = null;
var x;
var y;

$(document).on('pageinit', '#page3', function(e, data)
{    
	var options = {maximumAge: 3000, timeout: 60000, enableHighAccuracy: true };
	mapOptions =
	{
		zoom:15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		draggable:true,
		panControl:false,
		zoomControl:true,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
	};
	
	map = new google.maps.Map(document.getElementById('mapaperfil'), mapOptions);
	marker = null;
		
	function autoUpdate() // Autoactualización del Mapa
	{
		watchID = navigator.geolocation.watchPosition(function(position){
			
			x = position.coords.latitude;
        	y =  position.coords.longitude;
        	//console.log('Actualizo!');
        	
			var newCenter = new google.maps.LatLng(x, y);
			
			if(marker) // El marcador ya existe.
			{
				marker.setPosition(newCenter); // Actualizamos la posición.
			}
			else // El marcador no existe.
			{
				marker = new google.maps.Marker(
				{
					map:map,
					draggable:false,
					//animation: google.maps.Animation.DROP,
					position: newCenter,
					icon: 'img/moneda_takara.png'
				});
			}
			
			map.setCenter(newCenter);
			
			
		}, onError, options);
		
		setTimeout(autoUpdate, 10000);

	}
	
    autoUpdate();
	
	// onError Callback receives a PositionError object

	function onError(error)
	{
		//$.mobile.changePage("dialog-boxes/error/error-gps.html", {role:"dialog"}); //<-- cargar con ajax
        console.log('Código Error: '    + error.code    + '\n' + 'Mensaje: ' + error.message);
	}
});
  		 		
// CODIGO PRO QUE RESUELVE EL CORTE DE LOS MAPAS (Hora de resolución: 4:41h)
$('#page3').on('pageshow',function(event)
{
	google.maps.event.trigger(map, 'resize');
    map.setOptions(mapOptions); 

});*/

	var mapOptionsT = null;
	var mapT = null;
	var markerT = null;
	var markerU = null;
	var tesoroPos = null;
	var userPos = null;
	var watchIDT = null;
	var lineSymbol = null;
	var lineCoordinates = null;
	var line = null;
	var distancia = 0;
	var count = 0;


function cargarMapaAtraparTesoro()
{
	/*alert("entro");
	mapOptionsT = null;
	mapT = null;
	markerT = null;
	markerU = null;
	tesoroPos = null;
	userPos = null;
	watchIDT = null;
	lineSymbol = null;
	lineCoordinates = null;
	line = null;
	distancia = 0;
	count = 0;*/
	
	
	var tesoroPos = new google.maps.LatLng(tesoro_x, tesoro_y);
	var options = {maximumAge: 3000, timeout: 60000, enableHighAccuracy: true };
	
	$('#mensaje-atrapar').text("Calculando distancia restante...");
	
	mapOptionsT =
	{
		center: tesoroPos,
		zoom:10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		draggable:true,
		panControl:false,
		zoomControl:true,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
    };

	mapT = new google.maps.Map(document.getElementById('mapaatrapar'), mapOptionsT);

	markerT = new google.maps.Marker(
	{
		map:mapT,
		draggable:false,
		position: tesoroPos,
		icon: 'img/moneda_takara.png'
	});
	
	markerU = null;
	line = null;
	count = 0;
	
	
	function autoUpdate() // Autoactualización del Mapa
	{
		watchIDT = navigator.geolocation.watchPosition(function(position){
			
        	console.log('Actualizo!');
        	
        	userPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			
			if(markerU) // El marcador ya existe.
			{
				markerU.setPosition(userPos); // Actualizamos la posición.
			}
			else // El marcador no existe.
			{
				markerU = new google.maps.Marker(
				{
					map:mapT,
					draggable:false,
					position: userPos,
				});
			}
			
			lineSymbol = {
    			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    			scale: 5,
    			strokeColor: '#393'
  			};
			
			lineCoordinates = [
    			userPos, 
    			tesoroPos
  			];
  			
  			if(line)
  			{
  				line.setPath(lineCoordinates);
  			}
  			else
  			{
  				line = new google.maps.Polyline({
    				path: lineCoordinates,
    				strokeColor: '#393',
    				icons: [{
      					icon: lineSymbol,
      					offset: '0%'
    				}],
    				map: mapT
 				});
 				
  			}
  			
  			distancia = google.maps.geometry.spherical.computeDistanceBetween(tesoroPos, userPos);
  			
  			$('#mensaje-atrapar').text("Distancia: " + metrosKilometros(distancia) + " Km aprox.");
  			if(distancia > 20.0) 
  			{ 
  				$('#boton-atrapar').css('visibility', 'hidden');
  			}
  			else
  			{
  				$('#boton-atrapar').css('visibility', 'visible');
  			}

			
		}, onError, options);
		
		setTimeout(autoUpdate, 10000);
		
	}
	
	window.setInterval(function() {
      		count = (count + 1) % 200;

      		var icons = line.get('icons');
      		icons[0].offset = (count / 2) + '%';
      		line.set('icons', icons);
  		}, 50);
	
    autoUpdate();
    
    function onError(error)
	{
		//$.mobile.changePage("dialog-boxes/error/error-gps.html", {role:"dialog"}); //<-- cargar con ajax
        console.log('Código Error: '    + error.code    + '\n' + 'Mensaje: ' + error.message);
	}
}
/*
		var map;
		var distancia;
		var coordX = document.getElementById('coordx').innerHTML;
		var coordY = document.getElementById('coordy').innerHTML;
		var myLatlng = new google.maps.LatLng(coordX,coordY);

		function inicializar() {
			
  			var mapOptions = {
    			zoom: 10,
    			mapTypeId: google.maps.MapTypeId.ROADMAP
  			};
  		
  		map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  		
  		var marker = new google.maps.Marker({
      		position: myLatlng,
      		map: map,
      		title: 'Tesoro',
      		icon: '{{STATIC_URL}}img/moneda_takara.png'
  		});

  		// Try HTML5 geolocation
 		if(navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position) {
     		var posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     		document.getElementById('posx').innerHTML = position.coords.latitude;
     		document.getElementById('posy').innerHTML = position.coords.longitude;

			var marker_mov = new google.maps.Marker({
 				position: posActual,
  				map: map,
  				title: 'Posicion actual'
  			});

      		map.setCenter((myLatlng));
      		
      		var lineCoordinates = [
    			posActual, 
    			myLatlng
  			];
  			
  			var lineSymbol = {
    			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    			scale: 5,
    			strokeColor: '#393'
  			};

  			line = new google.maps.Polyline({
    			path: lineCoordinates,
    			strokeColor: '#393',
    			icons: [{
      				icon: lineSymbol,
      				offset: '100%'
    			}],
    			map: map
 			});
 			
 			var count = 0;
    		window.setInterval(function() {
      			count = (count + 1) % 200;

      			var icons = line.get('icons');
      			icons[0].offset = (count / 2) + '%';
      			line.set('icons', icons);
  			}, 20);
  			
  			distancia = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, posActual);
  			document.getElementById('dist').innerHTML = distancia + ' metros';
  			
  			if(distancia > 20.0) //Esto hay que cambiarlo cuando acabemos
  			{
  				document.getElementById('recoger').style.visibility = "hidden";
  				document.getElementById('aviso').innerHTML = "La opcion '<b>Atrapar Tesoro'</b> se mostrará cuando tu distancia sea inferior a <b>20 metros</b><br> Tu distancia actual es de <b>" + distancia + " metros</b>";
  			}
  			else
  			{
  				document.getElementById('recoger').style.visibility = "visible";
  				document.getElementById('aviso').innerHTML = "";
  			}
  			
    		}, function() {
      			handleNoGeolocation(true);
    		});
  		} else {
    		// Browser doesn't support Geolocation
    		handleNoGeolocation(false);
  		}
		}

		function handleNoGeolocation(errorFlag) {
  			if (errorFlag) {
    			var content = 'Error: El servicio de geolocalización ha fallado.';
  			} else {
    			var content = 'Error: Tu navegador no soporta geolocalización.';
  			}

  			var options = {
    			map: map,
    			position: new google.maps.LatLng(60, 105),
    			content: content
  			};
 
  			map.setCenter(options.position);
	}

	google.maps.event.addDomListener(window, 'load', initialize);

*/
// CODIGO PRO QUE RESUELVE EL CORTE DE LOS MAPAS (Hora de resolución: 4:41h)
$('#page8').on('pageshow',function(event)
{
	google.maps.event.trigger(mapT, 'resize');
    mapT.setOptions(mapOptionsT);
});

$('#page8').on('pagehide', function(event)
{
	mapOptionsT = null;
	mapT = null;
	markerT = null;
	markerU = null;
	tesoroPos = null;
	userPos = null;
	watchIDT = null;
	lineSymbol = null;
	lineCoordinates = null;
	line = null;
	distancia = 0;
	count = 0;
});


