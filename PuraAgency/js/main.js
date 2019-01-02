
window.addEventListener('DOMContentLoaded', ()=> {
	"use strict";
	
	const MenuBtn = document.querySelector('.menuBtn');

	function addClassMenuBtn() {
        MenuBtn.classList.toggle("clickMenuBtn");
    }

    MenuBtn.addEventListener('click', addClassMenuBtn);
});