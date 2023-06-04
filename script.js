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
