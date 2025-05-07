function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  }
// Handle form submission and show popup
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop normal submit
      document.getElementById('thankyou-popup').style.display = 'flex';
      form.reset(); // Clear the form
    });
  });
  
  function closePopup() {
    document.getElementById('thankyou-popup').style.display = 'none';
  }
      