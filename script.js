// Add an interactive feature
const header = document.querySelector('header');
header.addEventListener('click', () => {
  header.style.backgroundColor = '#ff0000';
  header.style.color = '#fff';
});

// Get the current year
var currentYear = new Date().getFullYear();

// Update the year in the footer
var yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = currentYear;
}

// Sticky Navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
  
//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
});


