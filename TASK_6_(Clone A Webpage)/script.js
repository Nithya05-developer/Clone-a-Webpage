// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => mainNav.classList.toggle('show'));

// Toast
const toast = document.getElementById('toast');
let toastTimer = null;
function notify(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// Contact form
const form = document.getElementById('contactForm');
const clearBtn = document.getElementById('clearBtn');
form.addEventListener('submit', e => {
  e.preventDefault();
  notify('Message sent! Thank you.');
  form.reset();
});
clearBtn.addEventListener('click', () => form.reset());