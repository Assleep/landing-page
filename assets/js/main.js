$(document).ready(function(){
	$('#first_item').addClass('is-active');
	
	$('.for_animate').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	$('.navbar-nav li').click(function(e){
		$('.navbar-nav li').removeClass('is-active');
		$(this).addClass('is-active');
	});
});