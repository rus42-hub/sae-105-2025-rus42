const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close-btn');


menuBtn.addEventListener('click', () => {
  menu.hidden = false;
  menuBtn.setAttribute('aria-expanded', true);
});


menuClose.addEventListener('click', () => {
  menu.hidden = true;
  menuBtn.setAttribute('aria-expanded', false);
});
