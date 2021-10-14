const burgerButton = document.querySelector('.burger_menu');
const burgerButtonLine = document.querySelector('.burger_menu_line');
const navMenu = document.querySelector('.nav_wrapper');
const navMenuWrapper = document.querySelector('.nav-social_wrapper');

burgerButton.addEventListener('click', event => {
  burgerButtonLine.classList.toggle('burger_menu_line_active');
  navMenu.classList.toggle('nav_wrapper_open');
});