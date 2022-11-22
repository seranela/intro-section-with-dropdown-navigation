const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-main');
const sublinks = document.querySelectorAll('.submenu-link');

function resizeUpdate() {
  if (document.body.offsetWidth >= 768) {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-main-show');
    button.classList.remove('nav-main-button-close');
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-main-show');
    button.classList.add('nav-main-button-close');
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-main-show');
    button.classList.remove('nav-main-button-close');
  }
}

function toggleSubMenu(e) {
  const submenulist = e.target.nextElementSibling;
  if (submenulist.getAttribute('aria-expanded') === 'false') {
    submenulist.setAttribute('aria-expanded', true);
    submenulist.classList.add('nav-main-sublist-expanded');
    e.target.classList.add('submenu-link-expanded');
  } else {
    submenulist.setAttribute('aria-expanded', false);
    submenulist.classList.remove('nav-main-sublist-expanded');
    e.target.classList.remove('submenu-link-expanded');
  }
}

window.addEventListener('resize', resizeUpdate, false);
button.addEventListener('click', toggleMenu, false);
for (let i = 0; i < sublinks.length; i++) {
  sublinks[i].addEventListener('click', toggleSubMenu, true);
}