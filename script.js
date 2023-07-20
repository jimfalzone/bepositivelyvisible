// Contact Section
let fullName = "";
let emailAddress = "";
let emailSubject = "";
let emailMessage = "";

document.addEventListener('DOMContentLoaded', function () {
  // Add an interactive feature
  const header = document.querySelector('header');
  if (header) {
    header.addEventListener('click', () => {
      header.style.backgroundColor = '#ff0000';
      header.style.color = '#fff';
    });
  }

  // Sticky Navbar
  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('sticky', window.scrollY > 0);
    }
  });

  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }

  // Services Menu
  const tabMenus = document.querySelectorAll('.tab-menu');
  const tabContents = document.querySelectorAll('.tab-content');

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

  // Custom Scrollspy with Horizontal Offset
  const offset = 50; // Set the horizontal offset here (adjust as needed)

  const spyLinks = document.querySelectorAll('a.nav-link[href^="#services-section"]');

  function scrollToSection(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  }

  spyLinks.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
  });

  // Contact Section
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      console.log('Button pressed');

      fullName = document.getElementById('name').value;
      console.log('Name:', fullName);

      emailAddress = document.getElementById('email').value;
      console.log('Email:', emailAddress);

      emailSubject = document.getElementById('subject').value;
      console.log('Subject:', emailSubject);

      emailMessage = document.getElementById('message').value;
      console.log('Message:', emailMessage);

      // Show the success message
      document.getElementById('form-message-success').style.display = 'block';

      // Clear the input fields after submitting
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('message').value = "";

      // Hide the success message after 5 seconds (5000 milliseconds)
      setTimeout(function () {
        document.getElementById('form-message-success').style.display = 'none';
      }, 5000);
    });
  }

  // ... rest of your code ...

  window.addEventListener('beforeunload', function () {
    for (const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  });

  // Footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});
