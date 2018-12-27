$( document ).ready(function() {
    "use strict";

    $('.nav__hamburger').on('click', function() {
    	
    	if($('.nav__hamburger').hasClass('nav__hamburger-active')){
    		$(this).removeClass('nav__hamburger-active');
    		$('.wrapper').removeClass('wrapper-active');
    		$('.nav__menu').removeClass('nav__menu-active');
    	}else {
    		$(this).addClass('nav__hamburger-active');
    		$('.wrapper').addClass('wrapper-active');
    		$('.nav__menu').addClass('nav__menu-active');
    	}

    });


    $('a[href^="#"]').on('click', function() {

    		let target = $(this).attr('href'),
    				topScroll = $(target).offset().top;

				$('body, html').animate({scrollTop: topScroll}, 2000);
				return false;
    });

    
});