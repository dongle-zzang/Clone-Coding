$(document).ready(function(){
	
//		//mousewheel-header hide show
//	$(function(){
//		$('html, body').mousewheel(function(event,delta){
//			if(delta>0){
//				//wheel up
//				$('header').stop().slideDown();
//			}
//			else if(delta<0){
//				//wheel down
//				$('header').stop().slideUp();
//			}
//		});
//	}); //wheel end
		
	//side menu button
//	$('.side-menu-btn').click(function(){
//		$('.side-menu-btn span').addClass('btn-bars-color'); //doesn't work
//		$('.side-menu-btn span:nth-child(1)').toggleClass('btn-bar1');
//		$('.side-menu-btn span:nth-child(2)').toggleClass('btn-bar2');
//		$('.side-menu-btn span:nth-child(3)').toggleClass('btn-bar3');
//	});
	
	//drop menu bar
	$('.main-menu li').hover(function(){
		$(this).find('.drop-menu-bg').stop().slideToggle(300);
		$(this).find('.drop-menu-wrap').stop().fadeToggle();
	});
	
	//sitemap close
	$('.site-map-close').click(function(){
		$('#site-map-cover').fadeOut(300);
	});
	//sitemap open
	$('.side-menu-btn').click(function(){
		$('#site-map-cover').fadeIn();
		$('#site-map-cover>.site-map').fadeIn(500);
	});
	
}); //ready

//$(window).scroll(function(){
//	
//		if($(window).scrollTop()==0){
//			$('header').slideDown();
//		}
//		
//}); //scroll