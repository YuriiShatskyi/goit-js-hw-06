function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

console.log(refs.input);
console.log(refs.buttonCreate);
console.log(refs.buttondestroy);
console.log(refs.divBoxes);




refs.input.addEventListener('input', (event) => event.currentTarget.value);

refs.buttonCreate.addEventListener('click', () => {

  for (let i = 1; i <= refs.input.value; i += 1) {

    const divBox = document.createElement('div');
    refs.divBoxes.append(divBox);
    
    divBox.style.display = 'inline-flex';
    divBox.style.width = 10 * (2 + i) + 'px';
    divBox.style.height = 10 * (2 + i) + 'px';
    divBox.style.backgroundColor = getRandomHexColor();

  }
}
);

refs.buttonDestroy.addEventListener('click', () => {
  refs.divBoxes.textContent = '';
});