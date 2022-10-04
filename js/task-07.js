const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onSliderMove); 

function onSliderMove(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

