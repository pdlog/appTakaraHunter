var mapB;
var mapOptionsB;

function cargarMapaBusqueda(x, y)
{    
	var center = new google.maps.LatLng(x, y);

	mapOptionsB =
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
	
	mapB = new google.maps.Map(document.getElementById('mapabusqueda'), mapOptionsB);
	
	var marker = new google.maps.Marker(
	{
		map:mapB,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: center,
		icon: 'img/moneda_takara.png'
	});
}




