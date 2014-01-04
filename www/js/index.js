/*var app =
{
	initialize: function()
	{
		//console.log("Hola0");
		this.bindEvents();
	},
	bindEvents: function()
	{
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function()
	{
		//console.log("Hola1");
		new FastClick(document.body);
	}		
}*/

var he_hecho_login_antes = false; // PARA KE EL PERFIL SE VEA BIEN MODO WARRO NIVEL DIOS
var he_entrado_en_lista_busquedas_antes = false; // PARA KE LAS BUSQUEDAS SE VEA BIEN MODO WARRO NIVEL DIOS
var he_entrado_en_una_busqueda_antes = false; // PARA KE LA CAZA SE VEA BIEN MODO WARRO NIVEL DIOS

var tesoro_posicion_x = 0;
var tesoro_posicion_y = 0;
var nombre_busqueda = "";
var descripcion_busqueda = "";

$(document).ready(function()
{
	login();
	busquedas();
	perfil();
	sobre();
	help();
	initialize();
});