/*********************************
 * PART 1: EVENT HANDLING        *
 *********************************/

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') 
      ? "☀️ Light Mode" 
      : "🌙 Dark Mode";
});

// Click event example
document.getElementById('clickBox').addEventListener('click', function() {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "#ea4335";
  setTimeout(() => {
      this.textContent = "Click me!";
      this.style.backgroundColor = "#4285f4";
  }, 1000);
});

// Mouseover event example
document.getElementById('hoverBox').addEventListener('mouseover', function() {
  this.textContent = "Mouse is over!";
});

document.getElementById('hoverBox').addEventListener('mouseout', function() {
  this.textContent = "Hover over me!";
});

// Keyboard input event example
document.getElementById('keyInput').addEventListener('keyup', function(e) {
  document.getElementById('keyOutput').textContent = `You typed: ${e.target.value}`;
});

/*********************************
* PART 2: INTERACTIVE ELEMENTS  *
*********************************/

// Counter game
let counter = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('incrementBtn').addEventListener('click', function() {
  counter++;
  counterDisplay.textContent = counter;
  
  if (counter === 10) {
      alert("You reached 10 clicks! 🎉");
  }
});

document.getElementById('resetBtn').addEventListener('click', function() {
  counter = 0;
  counterDisplay.textContent = counter;
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('show');
      
      // Close other open FAQs
      faqQuestions.forEach(q => {
          if (q !== this) {
              q.nextElementSibling.classList.remove('show');
          }
      });
  });
});

/*********************************
* PART 3: FORM VALIDATION       *
*********************************/

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Reset previous errors
  document.querySelectorAll('.error-message').forEach(el => {
      el.style.display = 'none';
  });
  
  let isValid = true;
  
  // Name validation
  const nameInput = document.getElementById('name');
  if (nameInput.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }
  
  // Email validation
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }
  
  // Password validation
  const passwordInput = document.getElementById('password');
  if (passwordInput.value.length < 8) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
  }
  
  // Age validation
  const ageInput = document.getElementById('age');
  if (ageInput.value && (ageInput.value < 18 || ageInput.value > 120)) {
      document.getElementById('ageError').textContent = 'Age must be between 18 and 120';
      document.getElementById('ageError').style.display = 'block';
      isValid = false;
  }
  
  // If form is valid
  if (isValid) {
      document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
      document.getElementById('formSuccess').style.display = 'block';
      userForm.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
          document.getElementById('formSuccess').style.display = 'none';
      }, 3000);
  }
});

// Real-time validation for better UX
document.getElementById('email').addEventListener('input', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorElement = document.getElementById('emailError');
  
  if (!emailRegex.test(this.value)) {
      errorElement.textContent = 'Please enter a valid email';
      errorElement.style.display = 'block';
  } else {
      errorElement.style.display = 'none';
  }
});

document.getElementById('password').addEventListener('input', function() {
  const errorElement = document.getElementById('passwordError');
  
  if (this.value.length > 0 && this.value.length < 8) {
      errorElement.textContent = 'Password must be at least 8 characters';
      errorElement.style.display = 'block';
  } else {
      errorElement.style.display = 'none';
  }
});