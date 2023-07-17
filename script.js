// Add an interactive feature
const header = document.querySelector('header');
header.addEventListener('click', () => {
  header.style.backgroundColor = '#ff0000';
  header.style.color = '#fff';
});

// Sticky Navbar
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});







// Services Menu
document.addEventListener('DOMContentLoaded', function () {
  var tabMenus = document.querySelectorAll('.tab-menu');
  var tabContents = document.querySelectorAll('.tab-content');

  function deactivateTabMenus() {
    tabMenus.forEach(function (menu) {
      menu.classList.remove('active', 'animate-underline');
    });
  }

  function hideAllTabContents() {
    tabContents.forEach(function (content) {
      content.style.display = 'none';
    });
  }

  function showTabContent(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
      content.style.display = 'block';
    }
  }

  function handleClickEvent(event) {
    const clickedMenu = event.currentTarget;
    const contentId = 'content-' + clickedMenu.id;

    deactivateTabMenus();
    hideAllTabContents();
    clickedMenu.classList.add('active', 'animate-underline');
    showTabContent(contentId);
  }

  tabMenus.forEach(function (tabMenu) {
    tabMenu.addEventListener('click', handleClickEvent);
  });

  const firstTabMenu = tabMenus[0];
  const firstContentId = 'content-' + firstTabMenu.id;
  firstTabMenu.classList.add('active', 'animate-underline');
  showTabContent(firstContentId);
});

