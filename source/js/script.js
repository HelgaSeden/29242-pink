var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var siteList = document.querySelector('.main-nav__site-list');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--hidden');
siteList.classList.add('main-nav__site-list--hidden');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    siteList.classList.remove('main-nav__site-list--hidden');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    siteList.classList.add('main-nav__site-list--hidden');
  }
});
