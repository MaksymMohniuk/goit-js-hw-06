const textInput = document.getElementById('validation-input');
const textLength = Number(textInput.dataset.length);


textInput.addEventListener('blur', (event) => {
    textInput.classList.add('valid');
if (event.currentTarget.value.length !== textLength) {
    textInput.classList.replace('valid', 'invalid');
} else {
    textInput.classList.replace('invalid', 'valid');
}
})