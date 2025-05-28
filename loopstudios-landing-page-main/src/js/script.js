'use strict';

const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuMobile = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.add('visible');
});

closeMenu.addEventListener('click', ()=>{
    if(menu.classList.contains('visible')){
        menu.classList.remove('visible');
        closeMenu.style.display = "none";
    }  
});