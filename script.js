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
  window.formData = {
    fullName: "",
    emailAddress: "",
    emailSubject: "",
    emailMessage: ""
  };

  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      console.log('Button pressed');

      formData.fullName = document.getElementById('name').value;
      formData.emailAddress = document.getElementById('email').value;
      formData.emailSubject = document.getElementById('subject').value;
      formData.emailMessage = document.getElementById('message').value;

      // Uncomment the following line if you want to prevent form submission
      // event.preventDefault();

      console.log(formData);

      document.getElementById('form-message-success').style.display = 'block';

      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('message').value = "";

      setTimeout(function () {
        document.getElementById('form-message-success').style.display = 'none';
      }, 5000);
    });
  }





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
