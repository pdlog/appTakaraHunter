
var mapOptions;
var map;
var marker;
			
$(document).on('pageinit', '#page3', function(e, data)
{    
	var x = 37.891594752147114;//document.getElementById('user_px').value;
	var y = -4.784485399999994;//document.getElementById('user_py').value;
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
});
  		 		
// CODIGO PRO QUE RESUELVE EL CORTE DE LOS MAPAS (Hora de resolución: 4:41h)
$('#page3').on('pageshow',function(event)
{
	google.maps.event.trigger(map, 'resize');
    map.setOptions(mapOptions); 
    map.setMarker(marker);
});

/*
$('#page3').on("pageinit", function() {
	$('#map_canvas').gmap(mapOptions, marker);
});*/