const display = document.getElementById('display');
const toggle = document.querySelector('.theme-toggle');

function append(value) {
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = '';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = 'Error';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
  toggle.innerText = document.body.classList.contains('light') ? '☀️' : '🌙';
}
