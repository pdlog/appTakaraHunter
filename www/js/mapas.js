
var mapOptions;
var map;
var marker;
var watchID = null;
var x;
var y;
			
$(document).on('pageinit', '#page3', function(e, data)
{    
	var options = {maximumAge: 3000, timeout: 60000, enableHighAccuracy: true };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
	
	function onSuccess(position) {
        
        x = position.coords.latitude;
        y =  position.coords.longitude;
        
        var center = new google.maps.LatLng(x, y);
		mapOptions =
		{
			center:center,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			draggable:true,
			panControl:false,
			zoomControl:true,
			mapTypeControl:false,
			scaleControl:false,
			streetViewControl:false,
			overviewMapControl:false,
		};
		
		map = new google.maps.Map(document.getElementById('mapaperfil'), mapOptions);
	
		marker = new google.maps.Marker(
		{
			map:map,
			draggable:false,
			animation: google.maps.Animation.DROP,
			position: center,
			icon: 'img/moneda_takara.png'
		});
                           
	}

	// onError Callback receives a PositionError object

	function onError(error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	}
});
  		 		
// CODIGO PRO QUE RESUELVE EL CORTE DE LOS MAPAS (Hora de resolución: 4:41h)
$('#page3').on('pageshow',function(event)
{
	google.maps.event.trigger(map, 'resize');
    map.setOptions(mapOptions); 
    map.setMarker(marker);
});




