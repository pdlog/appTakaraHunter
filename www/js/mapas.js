var mapOptions;
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

});

