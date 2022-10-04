const buttonDecrEl = document.querySelector('#counter').firstElementChild;
const valueEl = document.querySelector('#value');
const buttonIncrEl = document.querySelector('#counter').lastElementChild;

let counterValue = Number(valueEl.textContent);

buttonDecrEl.addEventListener('click', () => { 
    counterValue -= 1;
    onValueChange();
});

buttonIncrEl.addEventListener('click', () => { 
    counterValue += 1;
    onValueChange();
});

function onValueChange() {
valueEl.textContent = counterValue;
}