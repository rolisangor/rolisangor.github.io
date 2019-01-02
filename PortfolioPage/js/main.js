
window.addEventListener('DOMContentLoaded', function() {


let navLink = document.querySelectorAll('.nav-link'),
		popperModal = document.querySelectorAll('.popper');

for (let i = 0; i < navLink.length; i++) {
	for (let j = 0; j < popperModal.length; j++) {
		let i = j;
		navLink[i].addEventListener('mouseenter', () => {
			function show(){
				popperModal[i].style.display = 'flex';
			}
			show();

			let popper = new Popper(navLink[i], popperModal[i], {
			    placement: 'right'
			});
		});

		navLink[i].addEventListener('mouseleave', () => {
			function hide(){
				popperModal[i].style.display = 'none';
			}
			hide();
		});
	}
}



$(function() {
	$('.prev').slice(0, 6).show();
	$('.btn-foto').on('click', function(event) {
		event.preventDefault();
		$('.prev:hidden').slice(0, 2).slideDown();
	});
});



let smallMenu = document.querySelectorAll('.menu-list li');

for (let i = 1; i < smallMenu.length; i++) {
	smallMenu[i].style.borderTop = '0.1px solid #595959';
}


let menuList = document.querySelectorAll('.menu-list li .menu-link');

for (let i = 0; i < menuList.length; i++) {

	menuList[i].addEventListener('click', () => {
		menuList[i].classList.add('menu-active');
		$('.menu-list').hide('slow');
		$('.bar1').removeClass('bar-btn1');
		$('.bar2').removeClass('bar-btn2');
		$('.bar3').removeClass('bar-btn3');
	});
}


let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
	$('.menu-list').toggle('slow');

let bar = document.querySelector('.bar1');

	if ( bar.className == 'bar1 bar-btn1') {
		$('.bar1').removeClass('bar-btn1');
		$('.bar2').removeClass('bar-btn2');
		$('.bar3').removeClass('bar-btn3');
	}
	else {
		$('.bar1').addClass('bar-btn1');
		$('.bar2').addClass('bar-btn2');
		$('.bar3').addClass('bar-btn3');
	}
	
});


  $("#menu").on("click","a", function (event) {
        event.preventDefault();

        let id  = $(this).attr('href'),
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1500);
    });


});
