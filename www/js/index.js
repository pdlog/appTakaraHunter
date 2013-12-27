// Declaración de variables globales.
var myScroll, myScrollMenu, cuerpo, menuprincipal, wrapper, estado;

// Guardamos en variables elementos para poder rescatarlos después sin tener que volver a buscarlos.
cuerpo = document.getElementById("cuerpo"),
menuprincipal = document.getElementById("menuprincipal"),
wrapper = document.getElementById("wrapper");

// Constructor de la app.
var app =
{    
    initialize: function()
	{
    	// Estado inicial mostrando capa cuerpo.
    	estado = "cuerpo";
    	
    	// Creamos el elemento style, lo añadimos al html y creamos la clase cssClass para aplicársela al contenedor wrapper.
	    var heightCuerpo = window.innerHeight - 46;
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:46px; width:100%; height: '+heightCuerpo+'px; overflow:auto;}';
	    document.getElementsByTagName('head')[0].appendChild(style);
	    
	    // Añadimos las clases necesarias.
		cuerpo.className = 'page center';
		menuprincipal.className = 'page center';
		wrapper.className = 'cssClass';
			
		// Leemos por ajax el archivos opcion1.html de la carpeta opciones/index.
		$("#contenidoCuerpo").load("opciones/index/opcion1.html");

		// Leemos por ajax el archivos menu.html de la carpeta opciones/index.
		$("#contenidoMenu").load("opciones/index/menu.html");
		
		// Creamos los 2 scroll mediante el plugin iscroll, uno para el menú principal y otro para el cuerpo.
		myScroll = new iScroll('wrapper', { hideScrollbar: true });
		myScrollMenu = new iScroll('wrapperMenu', { hideScrollbar: true });
	
        this.bindEvents();
    },
    bindEvents: function()
	{
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function()
	{
    	// Ejecutamos la función FastClick, que es la que nos elimina esos 300ms de espera al hacer click.
    	new FastClick(document.body);
    }, 
};

function menu(opcion)
{
	// Si pulsamos en el botón de "menu" entramos en el if.
	if(opcion == "menu")
	{
		if(estado == "cuerpo")
		{
			cuerpo.className = 'page transition right';
			estado = "menuprincipal";
		}
		else if(estado == "menuprincipal")
		{
			cuerpo.className = 'page transition center';
			estado = "cuerpo";
		}
	}
	// Si pulsamos un botón del menu principal entramos en el else.
	else
	{
		// Añadimos la clase al li presionado.
		$("#ulMenu li").eq(opcion).addClass("li-menu-activo");
		
		// Recogemos mediante ajax el contenido del html según la opción clickeada en el menú.
		$("#contenidoCuerpo").load("opciones/index/opcion"+opcion+".html");
		
		// Refrescamos el elemento iscroll segœn el contenido ya añadido mediante ajax, y hacemos que se desplace al top.
		myScroll.refresh();
		myScroll.scrollTo(0,0);
		
		// Añadimos las clases necesarias para que la capa cuerpo se mueva al centro de nuestra app y muestre el contenido.
		cuerpo.className = 'page transition center';
		estado = "cuerpo";
		
		// Quitamos la clase añadida al li que hemos presionado.
		setTimeout(function()
		{
			$("#ulMenu li").eq(opcion).removeClass("li-menu-activo");
		}, 300);
	}
}