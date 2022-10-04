function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color'); 
const colorValueEl = document.querySelector('.color');
const bodyEl = document.body;

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const bodyElCurrentColor = bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = bodyElCurrentColor;
  
}

