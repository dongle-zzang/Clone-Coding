//index
$(document).ready(function(){
	
//	sub menu effect
	$('.main-menu').hover(function(){
		$(this).find('.sub-menu').stop().fadeToggle(300);
	});
	
});

//	특정 위치에 스크롤이 도달하면 효과가 일어남
$(window).scroll(function(){
	
//	특정 위치에 스크롤이 도달하면 헤더 컬러가 바뀌는 효과
	if($(window).scrollTop() >= 900){
		$('.header-black').fadeOut();
		$('.header-white').fadeIn();
	}else{
		$('.header-black').fadeIn();
		$('.header-white').fadeOut();
	}
	
//	특정 위치에 스크롤이 도달하면 안 보이던 요소가 등장하는 효과
//	con01 area
	if($(window).scrollTop() >= 300){
		$('.moveY').addClass('fadeY');
	}else{
		$('.moveY').removeClass('fadeY');
	}
	//con2 area
	if($(window).scrollTop() >= 600){
		$('.moveX').addClass('fadeX');
	}else{
		$('.moveX').removeClass('fadeX');
	}
	
}); //ready

//sub01 slide section
var now=0;
var imgs=2; // 0,1,2 => 3개

start();

function slide(){
	now = (now==imgs)?0:now+=1;
	$('.sub-slide li').eq(now).fadeIn(1500);
	$('.sub-slide li').eq(now-1).fadeOut(1500);
}

function start(){
	$('.sub-slide li').eq(0).siblings().fadeOut();
	setInterval(slide, 4000);
}