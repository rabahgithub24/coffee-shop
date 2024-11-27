// Form validation and submission handler
function submitForm(event) {
  event.preventDefault();

  // Reset error messages
  document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation flags
  let isValid = true;

  // Name validation
  if (!name) {
    showError('nameError', 'Please enter your name');
    isValid = false;
  } else if (name.length < 2) {
    showError('nameError', 'Name must be at least 2 characters long');
    isValid = false;
  }

  // Email validation
  if (!email) {
    showError('emailError', 'Please enter your email');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('emailError', 'Please enter a valid email address');
    isValid = false;
  }

  // Phone validation
  if (!phone) {
    showError('phoneError', 'Please enter your phone number');
    isValid = false;
  } else if (!isValidPhone(phone)) {
    showError('phoneError', 'Please enter a valid phone number');
    isValid = false;
  }

  // Subject validation
  if (!subject) {
    showError('subjectError', 'Please enter a subject');
    isValid = false;
  } else if (subject.length < 5) {
    showError('subjectError', 'Subject must be at least 5 characters long');
    isValid = false;
  }

  // Message validation
  if (!message) {
    showError('messageError', 'Please enter your message');
    isValid = false;
  } else if (message.length < 10) {
    showError('messageError', 'Message must be at least 10 characters long');
    isValid = false;
  }

  // If form is valid, process submission
  if (isValid) {
    processFormSubmission({
      name,
      email,
      phone,
      subject,
      message
    });
  }
}

// Helper function to show error messages
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// Form submission processor
function processFormSubmission(formData) {
  // Show success message
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';

  // Create message summary for sending
  const summary = `
        New Contact Form Submission:

        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Subject: ${formData.subject}
        Message: ${formData.message}
    `;

  // Log the submission (replace with your actual submission logic)
  console.log('Form submitted:', summary);

  // Clear the form
  document.getElementById('contactForm').reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
}

// Phone number formatter
document.getElementById('phone').addEventListener('input', function(e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : !x[3] ? `${x[1]}-${x[2]}` : `${x[1]}-${x[2]}-${x[3]}`;
});

// Initialize form event listener
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
  }
});
