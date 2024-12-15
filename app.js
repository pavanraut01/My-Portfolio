// Light/Dark Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Check if dark mode preference exists in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

// Form Validation for Contact Page
const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const thankYouMessage = document.getElementById('thank-you-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reset error messages
  errorMessage.textContent = '';

  // Name Validation
  if (nameField.value.trim() === '') {
    errorMessage.textContent += 'Name is required.\n';
    return;
  }

  // Email Validation (must contain '@' and '.com')
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailField.value)) {
    errorMessage.textContent += 'Please enter a valid email address.\n';
    return;
  }

  // Message Validation (ensure message is not empty)
  if (messageField.value.trim() === '') {
    errorMessage.textContent += 'Message cannot be empty.\n';
    return;
  }

  // If all validations pass
  form.reset();
  thankYouMessage.textContent = 'Thank you for your message!';
  localStorage.setItem('formData', JSON.stringify({ name: nameField.value, email: emailField.value, message: messageField.value }));
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
