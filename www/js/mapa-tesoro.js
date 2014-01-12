

	var mapOptionsT = null;
	var mapT = null;
	var count = 0;
	var timer;
	var interval;
	
function cargarMapaAtraparTesoro()
{
	var markerT = null;
	var markerU = null;
	var tesoroPos = null;
	var userPos = null;
	var watchIDT = null;
	var lineSymbol = null;
	var lineCoordinates = null;
	var line;
	var distancia = 0;
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
	line;
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
		
		timer = setTimeout(autoUpdate, 10000);
		
	}
	
		interval = window.setInterval(function() {
      		count = (count + 1) % 200;

      		var icons = line.get('icons');
      		icons[0].offset = (count / 2) + '%';
      		line.set('icons', icons);
  		}, 50);
	
    	autoUpdate();
    
    function onError(error)
	{
		$.mobile.changePage("dialog-boxes/error/error-gps.html", {role:"dialog"}); //<-- cargar con ajax
	}
}

// Resuelve el corte de los mapas con jquery mobile
$('#page8').on('pageshow',function(event)
{
	google.maps.event.trigger(mapT, 'resize');
    mapT.setOptions(mapOptionsT);
});

$('#page8').on('pagehide', function(event)
{
	mapOptionsT = null;
	mapT = null;
	count = 0;
	console.log(mapOptionsT);
	clearTimeout(timer);
	clearInterval(interval);
	$('#mensaje-atrapar').text("Calculando distancia restante...");
	console.log("hecho");
	
});


