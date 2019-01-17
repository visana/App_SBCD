// JavaScript Document
$(document).ready(function(){
	
	if(typeof Cookies.get('nome') === 'undefined' && $('body').hasClass('logged')) {window.location.replace("index.html");}
	
	//<li><a href="ferramentas.html"><span><img src="img/ferramentas.png" /></span> Ferramentas</a></li>
	//<li><a href="forum.html"><span><img src="img/forum.png" /></span> Fórum</a></li>
	
	$('.app').prepend('<header id="header"><div><a id="menu"><i class="fas fa-bars"></i></a></div><div id="off-canvas"><section id="top"><span id="iniciais"></span>Olá, <span id="nome-ass"></span>.<a id="close"><i class="fas fa-chevron-left"></i></a></section><ul><li><a href="inicial.html"><span><img src="img/home.png" /></span> Home</a></li><li><a href="manuais.html"><span><img src="img/manuais.png" /></span> Manuais</a></li><li><a href="novidades.html"><span><img src="img/novidades.png" /></span> Novidades</a></li><li><a href="eventos.html"><span><img src="img/eventos.png" /></span> Eventos</a></li><li><a href="revista.html"><span><img src="img/revista.png" /></span> Revista da Cirurgia Dermatológica</a></li><li><a href="busca.html"><span><img src="img/busca.png" /></span> Busca por associados</a></li></ul><ul><li><a href="fale.html"><span><img src="img/faleconosco.png" /></span> Fale conosco</a></li><li><a href="sobre.html"><span><img src="img/sobre.png" /></span> Sobre a SBCD</a></li><li><a href="app.html"><span><img src="img/phone.png" /></span> Sobre o APP</a></li><li><a href="#" id="logout"><span><img src="img/out.png" /></span> Sair</a></li></ul><img src="img/logo-off.png" id="off-menu-logo" /></div><div><img class="logo-sbcd" src="img/logo.png" alt="" /></div></header>');
	
	if(typeof Cookies.get('nome') !== 'undefined') {
		var str = Cookies.get('nome');
		var res = str.substring(0,1);
		$('#iniciais').append(res);
		$('#nome-ass').append(Cookies.get('nome'));
		$('#nome-ass').each(function () { $('#iniciais').append($(this).text().replace(/^(\S+)\s(\S).*/, '$2'));});
	} else {
		$('#iniciais').append('VI');
		$('#nome-ass').append('Visitante');
	}
	
	//<li><a href="ferramentas.html"><img src="img/ferramentas-branco.png" /></a></li>
	//<li><a href="forum.html"><img src="img/forum-branco.png" /></a></li>
	
	$('.app').append('<footer><ul><li><a href="eventos.html"><img src="img/eventos-branco.png" /></a></li><li><a href="novidades.html"><img src="img/novidades-branco.png" /></a></li><li><a href="busca.html"><img src="img/busca-branco.png" /></a></li></ul></footer>');
	$('#menu').click(function(){$('#off-canvas').show();});
	$('#close').click(function(){$('#off-canvas').hide();});
	
	$('#logout').click(function(){Cookies.remove('nome'); Cookies.remove('email'); window.location.replace("index.html");});
	
});

$( document ).ajaxStart(function() {   "use strict";  $( "#loader" ).show(); $( "#loader" ).css('display', 'block'); $( "#loader" ).css('margin', '0 auto');});

$( document ).ajaxStop(function() {	"use strict";  $( "#loader" ).hide(); 	
	$('.patrociadores-car').owlCarousel({
		margin: 0,
		loop: true,
		autoplay:true,
    	autoplayTimeout:3000,
		responsive: {0: {items: 2},600: {items: 2},1000: {items: 2}}
	});
	
	$('.home-car').owlCarousel({
		margin: 0,
		loop: true,
		autoplay:true,
    	autoplayTimeout:3000,
		responsive: {0: {items: 1},600: {items: 1},1000: {items: 1}}
	});
								   
    $('#mensagem').click(function(){
		$('.mensagem').show();
	});
	$('#trabalhos').click(function(){
		$('.trabalhos').show();
	});
	$('#passagens').click(function(){
		$('.passagens').show();
	});
	$('#turismo').click(function(){
		$('.turismo').show();
	});
	$('#videos').click(function(){
		$('.videos').show();
	});
	$('#mapa').click(function(){
		$('.mapa').show();
	});
	$('#patrocinadores').click(function(){
		$('.patrocinadores').show();
	});
	$('#valores').click(function(){
		$('.valores').show();
	});	
	$('#programacao').click(function(){
		$('.programacao').show();
	});	
	$('#sobre').click(function(){
		$('.sobre').show();
	});	
    $('#event-info li').click(function(){
		$('.back').attr('href', 'evento.html?id=' + getParameterByName('id'));
		$('#event-info').hide();
	});
								   
    $('.dia1d').click(function(){
		$('.dia2t, .dia3t, .dia4t').addClass('diac');
		$('.dia1t').removeClass('diac');
		$('.painel-abas span').removeClass('active-day');
		$(this).addClass('active-day');
	});
    $('.dia2d').click(function(){
		$('.dia1t, .dia3t, .dia4t').addClass('diac');
		$('.dia2t').removeClass('diac');
		$('.painel-abas span').removeClass('active-day');
		$(this).addClass('active-day');
	});
    $('.dia3d').click(function(){
		$('.dia2t, .dia1t, .dia4t').addClass('diac');
		$('.dia3t').removeClass('diac');
		$('.painel-abas span').removeClass('active-day');
		$(this).addClass('active-day');
	});
    $('.dia4d').click(function(){
		$('.dia2t, .dia3t, .dia1t').addClass('diac');
		$('.dia4t').removeClass('diac');
		$('.painel-abas span').removeClass('active-day');
		$(this).addClass('active-day');
	});
								   
	$('.gallery-icon a').click(function(){return false;});
								   
});

$(function() {
	
	$("#off-canvas").swipe( { swipeLeft:swipe1, threshold:100} );
	function swipe1(event, direction, distance, duration, fingerCount) {
		$(this).css("display","none"); 
    }
	
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}