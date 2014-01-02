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

$(document).ready(function()
{
	login();
	busquedas();
	perfil();
});
