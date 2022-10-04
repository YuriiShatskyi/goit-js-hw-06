const inputEl = document.querySelector('#validation-input'); 
const dataLengthEl = inputEl.getAttribute('data-length');
const dataLengthValueEl = Number(dataLengthEl);

inputEl.addEventListener('blur', onFocusChange); 

function onFocusChange(event) {
    if (event.currentTarget.value.length === dataLengthValueEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }             
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }  
    return;
}
    
