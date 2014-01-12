$(document).ready(function()
{
	// Reproduccir y parar el audio de atrapar tesoro. (no funciona)
	var media;

	document.addEventListener('deviceready', onDeviceReady, false);

	function onDeviceReady()
	{
		$('#page6').on('pageshow', function(e)
		{
			navigator.notification.vibrate(2500);
			media = new Media("sounds/shop.mp3");
			if(media)
			{
				media.pay();
			}
		});

		$('#page6').on('pagehide', function(e)
		{
			if(media)
			{
				media.stop();
			}
		});
	}	
});

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);