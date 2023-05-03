$('.show-menu').on('click',function(){
	$('nav').addClass('show');
	$('.fade').fadeIn(400);
	document.body.classList.add('stop-scroll');

});

$('.fade').on('click', function(){
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
	document.body.classList.remove('stop-scroll');
});