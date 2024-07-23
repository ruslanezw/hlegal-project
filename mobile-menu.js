const menu_mobile = document.querySelector('#menu_mobile');
const openMobileButton = document.querySelector('#open-mobile');
const closeMobileButton = document.querySelector('#close-mobile');

openMobileButton.addEventListener('click', () => { menu_mobile.classList.add('menu-mobile-showed') })
closeMobileButton.addEventListener('click', () => { menu_mobile.classList.remove('menu-mobile-showed') })
