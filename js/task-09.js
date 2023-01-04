const button = document.querySelector('.change-color');
const colorBg = document.querySelector('.color');

button.addEventListener('click', () => {
  
  document.body.style.backgroundColor = getRandomHexColor();
  colorBg.textContent = getRandomHexColor();
  
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}