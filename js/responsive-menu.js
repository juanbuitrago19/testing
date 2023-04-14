
// Show Menu
$('.show-menu').on('click',function(){
	$('nav').addClass('show');
	$('.fade').fadeIn(400);
});
// Fade Menu
$('.fade').on('click', function(){
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});