const menuBtn = document.querySelector('.header__menu-btn');
const linksContainer = document.querySelector('.header__links');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    linksContainer.classList.add('disp');
    menuOpen = true;

  } else {
    menuBtn.classList.remove('open');
    linksContainer.classList.remove('disp');
    menuOpen = false;
  }
});