const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Dark mode

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const darkModeClass = 'dark-mode';

const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  body.classList.add(darkModeClass);
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle(darkModeClass);
  localStorage.setItem('darkMode', body.classList.contains(darkModeClass));
});
