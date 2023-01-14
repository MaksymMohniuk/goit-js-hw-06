const textInput = document.getElementById('validation-input');
const textLength = Number(textInput.dataset.length);

textInput.addEventListener('blur', (event) => {
if (event.currentTarget.value.length !== textLength) {
    textInput.classList.add('invalid');
} else {
    textInput.classList.replace('invalid', 'valid');
}
})