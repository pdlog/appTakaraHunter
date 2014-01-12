var map;
var mapOptions;

function cargarMapaPerfil(x, y)
{    
	var center = new google.maps.LatLng(x, y);

	mapOptions =
	{
		center: center,
		zoom:10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		draggable:false,
		panControl:false,
		zoomControl:false,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
	};
	
	map = new google.maps.Map(document.getElementById('mapaperfil'), mapOptions);
	
	var marker = new google.maps.Marker(
	{
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: center,
		icon: 'img/moneda_takara.png'
	});
}

// Resuelve el corte de los mapas con jquery mobile
$('#page3').on('pageshow',function(event)
{
	google.maps.event.trigger(map, 'resize');
    map.setOptions(mapOptions);
});
