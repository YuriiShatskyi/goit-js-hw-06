function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  buttonCreate: document.querySelector('[data-create]'),
  buttondestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

console.log(refs.input);
console.log(refs.buttonCreate);
console.log(refs.buttondestroy);
console.log(refs.divBoxes);

refs.buttonCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {  
}

