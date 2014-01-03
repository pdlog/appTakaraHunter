function initialize()
		{
			var x = 37;//document.getElementById('user_px').value;
			var y = 43;//document.getElementById('user_py').value;
			var center = new google.maps.LatLng(x, y);
			var mapOptions =
			{
				center:center,
				zoom:4,
				mapTypeId:google.maps.MapTypeId.ROADMAP,
				draggable:false,
				panControl:false,
				zoomControl:true,
				mapTypeControl:false,
				scaleControl:false,
				streetViewControl:false,
				overviewMapControl:false,
			};
			var map = new google.maps.Map(document.getElementById('mapa-perfil'), mapOptions);
  			
  			var marker = new google.maps.Marker(
  			{
    			map:map,
    			draggable:false,
    			animation: google.maps.Animation.DROP,
    			position: center,
    			icon: 'img/moneda_takara.png' 
  			});
		}
function initialize2()
		{
			var x = 37;//document.getElementById('user_px').value;
			var y = 43;//document.getElementById('user_py').value;
			var center = new google.maps.LatLng(x, y);
			var mapOptions =
			{
				center:center,
				zoom:4,
				mapTypeId:google.maps.MapTypeId.ROADMAP,
				draggable:false,
				panControl:false,
				zoomControl:true,
				mapTypeControl:false,
				scaleControl:false,
				streetViewControl:false,
				overviewMapControl:false,
			};
			var map = new google.maps.Map(document.getElementById('mapa-busqueda'), mapOptions);
  			
  			var marker = new google.maps.Marker(
  			{
    			map:map,
    			draggable:false,
    			animation: google.maps.Animation.DROP,
    			position: center,
    			icon: 'img/moneda_takara.png' 
  			});
		}